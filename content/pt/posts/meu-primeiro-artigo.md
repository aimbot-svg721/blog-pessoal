+++
title = "O início do meu blog"
date = 2026-11-09
draft = false
translationKey = "meu-primeiro-artigo"
description = "O que quero para este blog."
categories = ["off-topic"]
+++

Em 9 de novembro de 2026, começo a construir meu blog. Meu objetivo com ele é falar sobre olimpíadas de matemática. Por enquanto, ainda sei muito pouco sobre esse universo. Estou no segundo ano do ensino médio, e o curso universitário que me interessa é Matemática; por isso, no futuro, pretendo criar a seção "Cálculo" rsrs.

<!--more-->

## Primeira seção

Este é um tipo de problema que desperta interesse e curiosidade, fazendo com que a gente queira pesquisar mais, estudar mais e gostar ainda mais de matemática.

**Problema (Cono Sur 2025/P1).** Dado um quadrado $ABCD$, seja $P$ um ponto do segmento $BC$, e seja $G$ o ponto de interseção de $AP$ com a diagonal $DB$. A reta perpendicular ao segmento $AP$ que passa por $G$ intersecta o lado $CD$ no ponto $E$. Seja $K$ um ponto do segmento $GE$ tal que $AK = PE$. Seja $Q$ o ponto de interseção da diagonal $AC$ com o segmento $KP$. Prove que os pontos $E, K, Q$ e $C$ são concíclicos.

*Solução.*

Sejam $S = PK\\cap AD$ e $R = EG\\cap AB$.

**Afirmação 1.** $\\angle GBP=\\angle ERP=\\angle GRP=45^\\circ$.

Como $AP\\perp RE$, temos $90^\\circ = \\angle PGR = \\angle RBP$. Isso significa que $GRBP$ é cíclico e, pela perseguição de ângulos, obtemos $\\angle GBP=\\angle ERP=\\angle GRP=45^\\circ$. $\\square$

**Afirmação 2.** $GP=GR$.

Pela Afirmação 1, temos $\\angle ABG=\\angle RBG=\\angle GBP=45^\\circ$, o que significa que $BG$ bisecta $\\angle ABP$. Além disso, $G$ é o ponto médio do arco $\\widehat{RP}$ que não contém $B$; portanto, $GP=GR$. $\\square$

**Afirmação 3.** $\\angle EAG=\\angle GEA=45^\\circ$.

De modo análogo às Afirmações 1 e 2, percebemos que $EDAG$ é cíclico e que $G$ é o ponto médio do arco $\\widehat{EA}$ que não contém $D$. Assim, obtemos $GA=GE \\Longrightarrow \\angle EAG=\\angle GEA=45^\\circ$. $\\square$

---

**Afirmação 4.** $GR=GK$.

Pelas Afirmações 1, 2 e 3, obtemos que $ARPE$ é um trapézio isósceles. Portanto, $AR=EP \\Longrightarrow AR=EP=AK \\Longrightarrow AR=AK$. Assim, o triângulo $KAR$ é isósceles e, como $\\angle AGK=90^\\circ$, concluímos que $G$ é o ponto médio de $KR$, de modo que $GR=GK$. $\\square$

Pelas Afirmações 2 e 4, temos $GP=GK$. Logo, o triângulo $KGP$ é retângulo isósceles, de modo que $\\angle PKG=45^\\circ$. Portanto, $\\angle SKE=45^\\circ$, e consequentemente $180^\\circ-\\angle EKQ=45^\\circ$. Daí, $180^\\circ=\\angle EKQ+45^\\circ$. Observe também que $\\angle ACD=\\angle QCE=45^\\circ$. Assim, $180^\\circ=\\angle EKQ+\\angle QCE$, o que significa que $EKQC$ é cíclico. E está provado.

![Figura 1 — Construção geométrica](/blog-pessoal/images/cono-sur-1.svg)
