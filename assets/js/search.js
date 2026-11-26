(function (root, factory) {
  var api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  if (root) root.GuiOnMathsSearch = api;
  if (typeof document !== "undefined") api.mount(document);
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  "use strict";

  function normalize(value) {
    return String(value == null ? "" : value)
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/[^\p{L}\p{N}]+/gu, " ")
      .trim();
  }

  function editDistanceWithin(a, b, limit) {
    if (Math.abs(a.length - b.length) > limit) return false;
    var previous = [];
    for (var j = 0; j <= b.length; j += 1) previous[j] = j;

    for (var i = 1; i <= a.length; i += 1) {
      var current = [i];
      var rowMinimum = i;
      for (var k = 1; k <= b.length; k += 1) {
        var cost = a.charAt(i - 1) === b.charAt(k - 1) ? 0 : 1;
        current[k] = Math.min(previous[k] + 1, current[k - 1] + 1, previous[k - 1] + cost);
        if (current[k] < rowMinimum) rowMinimum = current[k];
      }
      if (rowMinimum > limit) return false;
      previous = current;
    }
    return previous[b.length] <= limit;
  }

  function tokenMatchScore(queryToken, candidateToken) {
    if (candidateToken === queryToken) return 12;
    if (candidateToken.indexOf(queryToken) === 0) return 8;
    if (candidateToken.indexOf(queryToken) !== -1) return 6;
    if (queryToken.length >= 4) {
      var allowedDistance = queryToken.length >= 8 ? 2 : 1;
      if (editDistanceWithin(queryToken, candidateToken, allowedDistance)) return 3;
    }
    return 0;
  }

  function topicText(entry) {
    if (!Array.isArray(entry.topics)) return String(entry.topics || "");
    return entry.topics.map(function (topic) {
      return typeof topic === "string" ? topic : topic.label || "";
    }).join(" ");
  }

  function search(entries, rawQuery) {
    var query = normalize(rawQuery);
    if (!query) return [];
    var queryTokens = query.split(/\s+/).filter(Boolean).slice(0, 12);
    if (!queryTokens.length) return [];

    var weights = { title: 12, topics: 9, description: 5, content: 1 };
    var results = [];

    entries.forEach(function (entry) {
      var fields = {
        title: normalize(entry.title),
        topics: normalize(topicText(entry)),
        description: normalize(entry.description),
        content: normalize(entry.content)
      };
      var tokenScore = 0;
      var allTermsFound = true;

      queryTokens.forEach(function (term) {
        var best = 0;
        Object.keys(fields).forEach(function (fieldName) {
          var tokens = fields[fieldName].split(/\s+/).filter(Boolean);
          var localBest = 0;
          tokens.forEach(function (token) {
            localBest = Math.max(localBest, tokenMatchScore(term, token));
          });
          best = Math.max(best, localBest * weights[fieldName]);
        });
        if (!best) allTermsFound = false;
        else tokenScore += best;
      });

      if (!allTermsFound) return;
      var score = tokenScore;
      if (fields.title.indexOf(query) !== -1) score += 240;
      if (fields.topics.indexOf(query) !== -1) score += 180;
      if (fields.description.indexOf(query) !== -1) score += 80;
      if (fields.content.indexOf(query) !== -1) score += 20;
      results.push({ entry: entry, score: score });
    });

    results.sort(function (a, b) {
      if (b.score !== a.score) return b.score - a.score;
      return String(b.entry.date || "").localeCompare(String(a.entry.date || ""));
    });
    return results;
  }

  function mount(doc) {
    var container = doc.getElementById("site-search");
    if (!container) return;
    var form = doc.getElementById("site-search-form");
    var input = doc.getElementById("site-search-input");
    var list = doc.getElementById("search-results");
    var status = doc.getElementById("search-status");
    var indexNode = doc.getElementById("search-index");
    if (!form || !input || !list || !status || !indexNode) return;

    var messages = {
      prompt: container.getAttribute("data-prompt") || "",
      noResults: container.getAttribute("data-no-results") || "",
      error: container.getAttribute("data-error") || "",
      one: container.getAttribute("data-result-one") || "",
      many: container.getAttribute("data-result-many") || ""
    };

    var entries;
    try {
      entries = JSON.parse(indexNode.textContent || "[]");
      if (!Array.isArray(entries)) throw new Error("Invalid search index");
    } catch (_) {
      status.textContent = messages.error || messages.noResults;
      input.disabled = true;
      return;
    }

    function updateAddress(query) {
      var view = doc.defaultView;
      if (!view || !view.history || !view.location || !view.URL) return;
      try {
        var url = new view.URL(view.location.href);
        if (query) url.searchParams.set("q", query);
        else url.searchParams.delete("q");
        view.history.replaceState(null, "", url.pathname + url.search + url.hash);
      } catch (_) {}
    }

    function makeResult(entry) {
      var item = doc.createElement("li");
      item.className = "search-result";

      var heading = doc.createElement("h3");
      heading.className = "search-result-title";
      var link = doc.createElement("a");
      link.href = entry.url;
      link.textContent = entry.title || "";
      heading.appendChild(link);
      item.appendChild(heading);

      if (entry.date) {
        var meta = doc.createElement("p");
        meta.className = "search-result-date";
        var time = doc.createElement("time");
        time.dateTime = entry.date;
        time.textContent = entry.dateLabel || entry.date;
        meta.appendChild(time);
        item.appendChild(meta);
      }

      if (entry.description) {
        var description = doc.createElement("p");
        description.className = "search-result-description";
        description.textContent = entry.description;
        item.appendChild(description);
      }

      if (Array.isArray(entry.topics) && entry.topics.length) {
        var topics = doc.createElement("div");
        topics.className = "search-result-topics";
        entry.topics.forEach(function (topic) {
          if (!topic || !topic.label || !topic.url) return;
          var topicLink = doc.createElement("a");
          topicLink.className = "search-topic";
          topicLink.href = topic.url;
          topicLink.textContent = "#" + topic.label;
          topicLink.setAttribute("data-topic-type", topic.type || "topic");
          topics.appendChild(topicLink);
        });
        if (topics.childNodes.length) item.appendChild(topics);
      }
      return item;
    }

    function render(updateUrl) {
      var rawQuery = input.value.trim();
      var matches = search(entries, rawQuery);
      list.replaceChildren();

      if (!normalize(rawQuery)) {
        status.textContent = messages.prompt;
        if (updateUrl) updateAddress("");
        return;
      }
      if (updateUrl) updateAddress(rawQuery);
      if (!matches.length) {
        status.textContent = messages.noResults;
        return;
      }

      var fragment = doc.createDocumentFragment();
      matches.forEach(function (match) {
        fragment.appendChild(makeResult(match.entry));
      });
      list.appendChild(fragment);
      status.textContent = matches.length + " " + (matches.length === 1 ? messages.one : messages.many);
    }

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      render(true);
    });
    input.addEventListener("input", function () {
      render(true);
    });

    var view = doc.defaultView;
    if (view && view.addEventListener) {
      view.addEventListener("popstate", function () {
        var params = new view.URLSearchParams(view.location.search);
        input.value = params.get("q") || "";
        render(false);
      });
    }
    if (view && view.URL) {
      var initialParams = new view.URLSearchParams(view.location.search);
      if (initialParams.has("q")) {
        input.value = initialParams.get("q") || "";
        render(false);
      }
    }
  }

  return { normalize: normalize, search: search, mount: mount };
});
