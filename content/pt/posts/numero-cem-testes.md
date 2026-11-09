+++
title = "O número que passou em cem testes"
slug = "o-numero-que-passou-em-cem-testes"
date = 2026-11-08
draft = false
translationKey = "numero-cem-testes"
description = "Uma tentativa que sobreviveu a cem testes, até que um único valor revelou o que estava errado."
categories = ["teoria-dos-numeros"]
+++

São 23h e tem um número no meu caderno mentindo pra mim.

$$
\alpha = 1{,}99
$$

Pros cem primeiros valores de $n$, ele faz exatamente o que o problema pede.

Aí chega o $n = 101$, e ele desmorona.

Quero contar como cheguei aqui. Porque, durante quase quatro horas, eu estava em outro lugar.

---

O problema é o Problema 1 da IMO 2024. O primeiro da prova. Aquele que deveria ser só um aperto de mão.

> Determine todos os números reais $\alpha$ tais que, para todo inteiro positivo $n$, o inteiro
> $$
> \lfloor \alpha \rfloor + \lfloor 2\alpha \rfloor + \cdots + \lfloor n\alpha \rfloor
> $$
> é múltiplo de $n$.

Vou chamar essa soma de $S_n$. Os colchetes são a parte inteira (em inglês: *floor*).

Fiz o que sempre faço: testar valores pequenos e ver quem sobrevive.

$\alpha = 1$ dá $S_n = n(n+1)/2$. Em $n = 2$, isso é $3$. Morreu no segundo passo.

$\alpha = 3$ dá $S_n = 3n(n+1)/2$. Em $n = 2$, é $9$. Morreu de novo.

$\alpha = 2$ dá $S_n = n(n+1)$. Vivo, e vivo pra sempre. O mesmo vale pra $4$, pra $6$, pra qualquer $2m$, porque aí $S_n = m\,n(n+1)$.

A resposta tem cheiro de "todos os inteiros pares".

É uma sensação perigosa. Saber a resposta antes de saber o porquê.

---

Passei a hora seguinte tentando provar que $\alpha$ precisa ser inteiro.

Eu queria um truque. Emparelhar $\lfloor i\alpha \rfloor$ com $\lfloor (n-i)\alpha \rfloor$, do jeito que Gauss emparelhou o $1$ com o $100$. Os pares se encaixam lindamente quando $n\alpha$ é inteiro.

Que é justamente o que eu queria provar.

Queria poder dizer que percebi na hora. Não percebi. Rearranjei esse emparelhamento de três jeitos diferentes, como se o problema fosse cansar e confessar.

Não cansou.

---

Então parei de tentar ser esperto. Passei a conferir documento na portaria, um número de cada vez.

$\alpha = \sqrt 2$: as partes inteiras são $1, 2$, então $S_2 = 3$. Morreu.

$\alpha = 1{,}5$: as partes inteiras são $1, 3, 4$. $S_2 = 4$ passa, mas $S_3 = 8$ não.

$\alpha = 1{,}7$: as partes inteiras são $1, 3, 5, 6$. $S_3 = 9$ sobrevive. $S_4 = 15$ não.

Olhei pra lista de cadáveres.

$3$. $8$. $15$.

Conheço esses números desde os quatorze anos. São $2^2 - 1$, $3^2 - 1$, $4^2 - 1$.

Ri, mas sem alegria. Todo número que morria, morria exatamente uma unidade abaixo de um quadrado perfeito.

---

Um padrão desses merece aposta. Apostei.

Peguei $\alpha = 1{,}9$, o que deveria viver mais até agora, e tentei prever a morte antes de calcular. Se o padrão valesse, ele morreria em $n = 11$, com $S_{11} = 11^2 - 1 = 120$.

Escrevi $120$ na folha. Só depois calculei.

Pra $i \le 10$, toda parte inteira $\lfloor 1{,}9\,i \rfloor$ vale $2i - 1$. Então

$$
S_n = 1 + 3 + 5 + \cdots + (2n-1) = n^2.
$$

Claro que $n$ divide $n^2$. Dez testes, dez aprovações.

Aí $\lfloor 1{,}9 \cdot 11 \rfloor = \lfloor 20{,}9 \rfloor = 20$. Não $21$. Então $S_{11} = 100 + 20 = 120$.

E $11$ não divide $120$.

Fiquei um tempo parado. Depois testei $1{,}99$, mais por teimosia. Ele passa cem testes. Em $n = 101$, a soma é $10\,000 + 200 = 10\,200$.

E $101^2 = 10\,201$. De novo, uma unidade a menos.

---

Era isso que estava acontecendo.

Ficar um pouquinho abaixo de $2$ custa exatamente $1$ em cada termo. Em $n$ termos, são $n$ no total. E $n$ divide $n$.

O erro era invisível pra própria coisa que tentava pegá-lo.

Ele ficou invisível até o arredondamento perder $2$ num termo em vez de $1$. Nesse instante, a perda total deixou de ser múltiplo de $n$.

Então aí vai a prova, na ordem em que ela apareceu pra mim, não na ordem de uma solução oficial.

Pegue $\alpha$ entre $1$ e $2$. Escreva $\alpha = 2 - \delta$, com $0 < \delta \le 1$. Existe um único $m \ge 1$ com

$$
\frac{1}{m+1} < \delta \le \frac{1}{m}.
$$

Pra $i \le m$, vale $0 < i\delta \le 1$, e portanto $\lfloor i\alpha \rfloor = 2i - 1$.

Em $i = m+1$, vale $1 < (m+1)\delta \le 2$, e portanto $\lfloor (m+1)\alpha \rfloor = 2m$.

Somando:

$$
S_{m+1} = m^2 + 2m = (m+1)^2 - 1.
$$

Sempre uma unidade abaixo de um múltiplo de $m+1$. Como $m + 1 \ge 2$, nunca divide.

Todo $\alpha \in [1, 2)$ ganha o seu próprio $m$. Quanto mais perto de $2$, mais tarde ele falha. Ninguém escapa.

Abaixo de $1$ é ainda mais rápido. Pegue $\alpha \in (0,1)$ e faça $n = \lceil 1/\alpha \rceil$. Toda parte inteira antes da $n$-ésima é $0$, e a $n$-ésima é $1$. Então $S_n = 1$, e nenhum $n \ge 2$ divide isso.

E o resto da reta? Deslocar $\alpha$ de $2$ soma $2i$ a cada parte inteira, ou seja, soma $n(n+1)$ a $S_n$. Inofensivo. O problema inteiro se repete com período $2$.

Em $[0, 2)$, o único sobrevivente é o $0$.

A resposta, então, são os inteiros pares. Os mesmos que eu chutei nos primeiros dez minutos.

---

Fico voltando pra expressão "para todo $n$".

Parece uma promessa. Na verdade é um jogo. Você entrega o seu $\alpha$. Aí um adversário escolhe o $n$, depois de ver o seu número.

Passar em cem testes não vale nada se quem escolhe o teste já sabe qual é o seu número.

O $1{,}99$ não falhou por azar. Falhou no único ponto onde era mais fraco. E esse ponto dava pra calcular desde o começo.

Penso nisso mais do que gostaria. Nas coisas em que confio porque funcionaram cem vezes. Um hábito. Um método. Uma pessoa.

A matemática diz que cem acertos não provam nada.

Mas a vida não espera prova. Ela só pergunta se você vai aparecer no $101$.

Não sei como segurar as duas coisas ao mesmo tempo.

Na última página do caderno, escrevi $1{,}99$ e não risquei.
