# Papel de Rascunho / Scratch Paper

Blog pessoal bilíngue (PT-BR / EN) em Hugo. Sem tema de terceiros, sem JavaScript de math no navegador (KaTeX renderizado no build).

**Requer Hugo ≥ 0.154.5** (testado só contra a documentação; não foi buildado em ambiente com Hugo).

## 1. Antes do primeiro build

1. Troque `SEUDOMINIO.com.br` em `hugo.toml` e em `static/robots.txt` pelo seu domínio.
2. Fontes: baixe o **Source Serif 4** (WOFF2, subset latin, normal e itálico, fonte variável) e salve em `static/fonts/` como:
   - `source-serif-4-latin-wght-normal.woff2`
   - `source-serif-4-latin-wght-italic.woff2`
   (Se os nomes forem outros, ajuste o `@font-face` em `assets/css/main.css` e o `preload` em `layouts/baseof.html`.)
3. KaTeX: baixe o `katex.zip` da página de releases do KaTeX, na **mesma versão do KaTeX embutido no seu Hugo**
   (confira em https://gohugo.io/functions/transform/tomath/). Copie para:
   - `static/katex/katex.min.css`
   - `static/katex/fonts/` (os arquivos `.woff2` bastam)
4. Apague os `.gitkeep` de `static/fonts/` e `static/katex/`.

## 2. Testar localmente

```bash
hugo server -D
```

`-D` mostra os rascunhos (o primeiro post, Sobre e Contato começam com `draft = true`).

## 3. Antes de publicar

- Revise o primeiro post nos dois idiomas. Os detalhes pessoais (23h, quatro horas, "desde os quatorze anos", o caderno) são do rascunho: troque pelos seus.
- Escreva o Sobre e o Contato (e ponha o seu e-mail real), e tire `draft = true` de cada arquivo.
- Tire `draft = true` do post.

## 4. Deploy (GitHub Pages)

1. Crie um repositório no GitHub e envie este projeto para a branch `main`.
2. Em **Settings → Pages → Build and deployment → Source**, escolha **GitHub Actions**.
3. Em **Settings → Pages → Custom domain**, digite o seu domínio e salve.
4. No painel de DNS do domínio, crie:
   - 4 registros **A** para `@`: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - 4 registros **AAAA** para `@`: `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`
   - 1 registro **CNAME** para `www` apontando para `SEU-USUARIO.github.io`
5. Quando o GitHub confirmar o DNS, marque **Enforce HTTPS**.

O workflow em `.github/workflows/hugo.yaml` fixa `HUGO_VERSION: 0.164.0`. Use a versão que você tem localmente (`hugo version`) e confira as versões das actions no guia do Hugo para GitHub Pages.

## 5. Estrutura

- `layouts/` segue o sistema de templates do Hugo ≥ 0.146 (`baseof.html`, `home.html`, `page.html`, `term.html`, `_partials/`, `_markup/`).
- Posts: `content/pt/posts/` e `content/en/posts/`, ligados por `translationKey`.
- Categorias: `content/<idioma>/categories/<chave>/_index.md`. No post, use a chave em `categories = ["teoria-dos-numeros"]`.
- Matemática: `$...$` e `$$...$$` (display em linhas separadas). Cifrão de verdade: `R&#36; 40`.
