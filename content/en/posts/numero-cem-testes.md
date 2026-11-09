+++
title = "The number that passed a hundred tests"
slug = "the-number-that-passed-a-hundred-tests"
date = 2026-11-08
draft = false
translationKey = "numero-cem-testes"
description = "A conjecture survives a hundred tests, until one carefully chosen value reveals where it breaks."
categories = ["number-theory"]
+++

It's 11 p.m. and there's a number in my notebook that's lying to me.

$$
\alpha = 1.99
$$

For the first hundred values of $n$, it does exactly what the problem asks.

Then comes $n = 101$, and it falls apart.

I want to tell you how I got here. Because for most of the last four hours, I was somewhere else entirely.

---

The problem is Problem 1 from IMO 2024. The first one. The one that's supposed to be a handshake.

> Determine all real numbers $\alpha$ such that, for every positive integer $n$, the integer
> $$
> \lfloor \alpha \rfloor + \lfloor 2\alpha \rfloor + \cdots + \lfloor n\alpha \rfloor
> $$
> is a multiple of $n$.

From now on I'll call that sum $S_n$.

I did what I always do: plug in small values and see who survives.

$\alpha = 1$ gives $S_n = n(n+1)/2$. At $n = 2$ that's $3$. Dead on the second step.

$\alpha = 3$ gives $S_n = 3n(n+1)/2$. At $n = 2$ that's $9$. Dead again.

$\alpha = 2$ gives $S_n = n(n+1)$. Alive, and it stays alive forever. Same for $4$, for $6$, for any $2m$, because then $S_n = m\,n(n+1)$.

So the answer smells like "all even integers."

That's a dangerous feeling. Knowing the answer before you know why.

---

I spent the next hour trying to prove that $\alpha$ has to be an integer.

I wanted a trick. Pair $\lfloor i\alpha \rfloor$ with $\lfloor (n-i)\alpha \rfloor$, the way Gauss paired $1$ with $100$. The pairs collapse beautifully when $n\alpha$ is an integer.

Which is exactly what I was trying to prove.

I'd like to say I noticed right away. I didn't. I rearranged that pairing three different ways, as if the problem would eventually get tired and confess.

It didn't.

---

So I stopped being clever. I started checking IDs at the door, one number at a time.

$\alpha = \sqrt 2$: the floors are $1, 2$, so $S_2 = 3$. Dead.

$\alpha = 1.5$: the floors are $1, 3, 4$. So $S_2 = 4$ is fine, but $S_3 = 8$ is not.

$\alpha = 1.7$: the floors are $1, 3, 5, 6$. $S_3 = 9$ survives. $S_4 = 15$ doesn't.

I looked at the list of corpses.

$3$. $8$. $15$.

I know these. I've known them since I was fourteen. They're $2^2 - 1$, $3^2 - 1$, $4^2 - 1$.

I laughed, but not happily. Every number that died, died exactly one short of a perfect square.

---

That's a pattern you can bet on. So I did.

I took $\alpha = 1.9$, the one that should live the longest so far, and I tried to predict its death before computing it. If the pattern held, it would die at $n = 11$, with $S_{11} = 11^2 - 1 = 120$.

I wrote $120$ on the page. Then I computed.

For $i \le 10$, every floor $\lfloor 1.9\, i \rfloor$ equals $2i - 1$. So

$$
S_n = 1 + 3 + 5 + \cdots + (2n-1) = n^2.
$$

Of course $n$ divides $n^2$. Ten tests, ten passes.

Then $\lfloor 1.9 \cdot 11 \rfloor = \lfloor 20.9 \rfloor = 20$. Not $21$. So $S_{11} = 100 + 20 = 120$.

And $11$ doesn't divide $120$.

I sat there for a while. Then I tried $1.99$, mostly out of spite. It passes a hundred tests. At $n = 101$ the sum is $10\,000 + 200 = 10\,200$.

And $101^2 = 10\,201$. One short again.

---

Here's what was actually happening.

Being slightly under $2$ costs you exactly $1$ on every term. Over $n$ terms, that's a loss of $n$ in total. And $n$ divides $n$.

The error was invisible to the thing checking it.

It stayed invisible until the rounding lost $2$ on a term instead of $1$. That's the moment the total loss stopped being a multiple of $n$.

So here's the proof, in the order it came to me, not the order it would go in a solution.

Take $\alpha$ between $1$ and $2$. Write $\alpha = 2 - \delta$ with $0 < \delta \le 1$. There's a unique $m \ge 1$ with

$$
\frac{1}{m+1} < \delta \le \frac{1}{m}.
$$

For $i \le m$ we have $0 < i\delta \le 1$, so $\lfloor i\alpha \rfloor = 2i - 1$.

At $i = m+1$ we have $1 < (m+1)\delta \le 2$, so $\lfloor (m+1)\alpha \rfloor = 2m$.

Add it up:

$$
S_{m+1} = m^2 + 2m = (m+1)^2 - 1.
$$

Always one short of a multiple of $m+1$. Since $m + 1 \ge 2$, it never divides.

Every $\alpha \in [1, 2)$ gets its own $m$. The closer you are to $2$, the later you fail. Nobody escapes.

Below $1$ it's even quicker. Take $\alpha \in (0,1)$ and let $n = \lceil 1/\alpha \rceil$. Every floor before the $n$-th is $0$, and the $n$-th is $1$. So $S_n = 1$, and $n \ge 2$ can't divide that.

And the rest of the real line? Shifting $\alpha$ by $2$ adds $2i$ to each floor, so it adds $n(n+1)$ to $S_n$. Harmless. The whole problem repeats with period $2$.

In $[0, 2)$, the only survivor is $0$.

So the answer is the even integers. The ones I guessed in the first ten minutes.

---

I keep coming back to the words "for every $n$."

It sounds like a promise. It's really a game. You hand over your $\alpha$. Then an adversary picks $n$, after seeing it.

Passing a hundred tests means nothing if whoever picks the test knows your number.

$1.99$ didn't fail by bad luck. It failed at the one place where it was weakest. And that place was computable from the start.

I think about this more than I'd like to. About the things I trust because they've worked a hundred times. A habit. A method. A person.

The math says a hundred passes prove nothing.

But life doesn't wait for proofs. It just asks whether you'll show up for the $101$st.

I don't know how to hold both.

On the last page of the notebook I wrote $1.99$, and I didn't cross it out.
