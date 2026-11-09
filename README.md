# Papel de Rascunho / Scratch Paper

Blog pessoal bilíngue (PT-BR / EN), construído com Hugo. O projeto usa layouts próprios, sem tema de terceiros, e renderiza a matemática durante a geração do site (sem JavaScript de matemática no navegador).

## Publicação

O site é publicado pelo GitHub Pages usando GitHub Actions. O workflow está em `.github/workflows/hugo.yaml` e usa Hugo Extended 0.164.0.

- Repositório: https://github.com/aimbot-svg721/blog-pessoal
- Site: https://aimbot-svg721.github.io/blog-pessoal/

Cada atualização enviada para a branch `main` dispara a geração e a publicação do site. Pull requests executam a etapa de build, mas não publicam o site.

## Testar no computador

Instale a mesma versão do Hugo Extended usada pelo workflow e, na pasta do projeto, execute:

```bash
hugo server -D
```

A opção `-D` também mostra rascunhos (`draft = true`). Para gerar os arquivos finais:

```bash
hugo --gc --minify
```

O resultado fica na pasta `public/`.

## Escrever um artigo

Os textos em português ficam em `content/pt/posts/`; os textos em inglês ficam em `content/en/posts/`. Cada artigo é um arquivo Markdown (`.md`). Para relacionar as versões traduzidas, use o mesmo valor em `translationKey` nos dois arquivos.

Exemplo de cabeçalho:

```toml
+++
title = "Título do artigo"
date = 2026-11-08
draft = true
translationKey = "meu-artigo"
categories = ["teoria-dos-numeros"]
description = "Uma breve apresentação do texto."
+++
```

As categorias disponíveis estão em `content/<idioma>/categories/`. Use os identificadores de pasta, não os nomes exibidos.

## Matemática

Escreva expressões inline com `$...$` e expressões destacadas com `$$...$$`, em linhas separadas. O Hugo usa sua integração incorporada com KaTeX para gerar o HTML no build; a folha de estilos correspondente é carregada apenas em páginas que contêm matemática.

## Organização

- `content/`: artigos, páginas e categorias nos dois idiomas.
- `layouts/`: templates HTML do Hugo.
- `assets/css/main.css`: estilos do site.
- `i18n/`: textos da interface em português e inglês.
- `static/`: arquivos copiados diretamente para o site final.
- `.github/workflows/`: build e publicação automatizados.

A configuração principal está em `hugo.toml`. O `baseURL` precisa refletir o endereço público do site para que os links funcionem corretamente.
