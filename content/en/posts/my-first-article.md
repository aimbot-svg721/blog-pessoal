+++
title = "Begin of the my Blog"
date = 2026-11-09
draft = false
translationKey = "meu-primeiro-artigo"
description = "What I want for this blog."
categories = ["off-topic"]
+++

In November 9, 2026 I begin to make my blog. My objective for this is talk about mathematics olimpics, for now, my knowledge is very about this. I am in second year of the high school, the college that 
I have interest is math, therefore, in the future I will create the section "Calculation" rsrs. 

<!--more-->

## First Section

This is one problem tipy that give interest and curiosity for search more, study more and like of the math.

**Problem.(Cono Sur 2025/P1).** Given a square $ABCD$, let $P$ be a point on the segment $BC$ and let $G$ be the intersection point of $AP$ with the diagonal $DB$. The line perpendicular to the segment $AP$ through $G$ intersects the side $CD$ at point $E$. Let $K$ be a point on the segment $GE$ such that $AK = PE$. Let $Q$ be the intersection point of the diagonal $AC$ and the segment $KP$.
Prove that the points $E, K, Q,$ and $C$ are concyclic.

*Solution.* 

Let $S: PK\cap AD$ and $R: EG\cap AB$. \par

$Claim_1$: $\angle GBP=\angle ERP=\angle GRP=45^\circ$ \par
As $G: AP\perp RE$, then $90^\circ =\angle PGR=\angle RBP$ means $GRBP$ is cylic and by angle chasing $\angle GBP=\angle ERP=\angle GRP=45^\circ$. $\square$\par

$Claim_2:$ $GP=GR$ \par
By $Claim_1$: we have the fact $\angle ABG=\angle RBG=\angle GBP=45^\circ$ means $BG$ bisects $\angle ABP$ and $G$ is middle point of $\widehat{RP}$ not contains $B$, then $GP=GR$. $\square$
$Claim_3:$ $\angle EAG=\angle GEA=45^\circ$.\par

Analogous with $Claim_1$ and $Claim_2$, discover $EDAG$ is cyclic and $G$ is the middle point of $\widehat{EA}$ not contains $D$, we obtain $GA=GE \Longrightarrow \angle EAG=\angle GEA= 45^\circ$ $\square$\par

$Claim_4:$ $GR=GK$.\par

By $Claim_1$, $Claim_2$ and $Claim_3$, we obtain $ARPE$ is a isoscele trapezoid, then $AR=EP \Longrightarrow AR=EP=AK \Longrightarrow AR=AK$ then $\triangle KAR$ is isosceles and $\angle AGK=90^\circ \Longrightarrow G$ is a middle point of $KR$ where $GR=GK$. $\square$\par
By $Claim_2$ and $Claim_4$: we have $GP=GK \Longrightarrow \triangle KGP$ is rectangle isosceles, where $\angle PKG=45^\circ \Longrightarrow \angle SKE=45^\circ \Longrightarrow 180^\circ -\angle EKQ=45^\circ \Longrightarrow 180^\circ=\angle EKQ+45^\circ$ and notice that $\angle ACD=\angle QCE=45^\circ$ then $180^\circ =\angle EKQ+\angle QCE$ means $EKQC$ is cyclic, and we are done.\par

![Figura 1 - Construção](/blog-pessoal/images/cono-sur-1.svg)
