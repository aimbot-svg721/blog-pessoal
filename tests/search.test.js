const test = require("node:test");
const assert = require("node:assert/strict");
const { search, normalize } = require("../assets/js/search.js");

const entries = [
  {
    title: "O número que passou em cem testes",
    description: "Uma tentativa que sobreviveu a cem testes.",
    topics: [
      { label: "Teoria dos Números", type: "category", url: "/pt/teoria-dos-numeros/" },
      { label: "IMO", type: "tag", url: "/pt/tags/imo/" }
    ],
    content: "O problema da IMO 2024 envolve a soma de partes inteiras.",
    date: "2026-11-08"
  },
  {
    title: "O início do meu blog",
    description: "O que quero para este blog de matemática.",
    topics: [
      { label: "Off-topic", type: "category", url: "/pt/off-topic/" },
      { label: "Cone-Sul", type: "tag", url: "/pt/tags/cone-sul/" }
    ],
    content: "Um problema de geometria olímpica do Cone Sul.",
    date: "2026-11-09"
  },
  {
    title: "Uma nota sobre geometria",
    description: "Uma reflexão sobre matemática.",
    topics: [{ label: "Geometria", type: "category", url: "/pt/geometria/" }],
    content: "Uma nota curta.",
    date: "2026-11-10"
  }
];

test("normaliza acentos, caixa e pontuação", () => {
  assert.equal(normalize("Geometría, MATEMÁTICA!"), "geometria matematica");
});
test("encontra um artigo pela tag IMO", () => {
  const results = search(entries, "IMO");
  assert.equal(results.length, 1);
  assert.equal(results[0].entry.title, "O número que passou em cem testes");
});
test("encontra tags com hífen e palavras separadas", () => {
  assert.equal(search(entries, "Cone-Sul")[0].entry.title, "O início do meu blog");
  assert.equal(search(entries, "cone sul")[0].entry.title, "O início do meu blog");
});
test("ignora diferenças de acentuação", () => {
  assert.equal(search(entries, "matematica")[0].entry.title, "O início do meu blog");
});
test("tolera um pequeno erro de digitação", () => {
  assert.equal(search(entries, "matemátca")[0].entry.title, "O início do meu blog");
});
test("prioriza correspondências no título em vez de ocorrências no corpo", () => {
  const results = search(entries, "geometria");
  assert.equal(results[0].entry.title, "Uma nota sobre geometria");
});
test("exige correspondência para todos os termos", () => {
  assert.deepEqual(search(entries, "IMO álgebra inexistente"), []);
});
test("consulta vazia não retorna artigos", () => {
  assert.deepEqual(search(entries, "   "), []);
});
