# InfinetAulas

Site estático que renderiza resumos de aulas em Markdown, organizados por disciplina e por aula.
O Markdown é a fonte única de conteúdo; o front-end apenas carrega, navega e exibe.

## Demo online


O projeto já está publicado e pode ser usado como material de estudo:

👉 https://gaabdevweb.github.io/infinetStudySummaries/

## O que este projeto resolve

Aulas gravadas e transcrições completas são longas, redundantes e ruins para revisão rápida.
Este projeto transforma material bruto de aula em conteúdo estruturado e navegável.

**Objetivo prático:**

- reduzir custo cognitivo de revisão
- permitir estudo por aula e por disciplina
- manter conteúdo versionável
- evitar dependência de CMS ou backend
- permitir atualização só editando Markdown

## Fluxo de conteúdo

```
Aula gravada
  ↓
transcrição completa
  ↓
processamento estruturado
  ↓
arquivos Markdown em /content
  ↓
renderização no navegador
```

O site não gera conteúdo — apenas renderiza o que já foi produzido.

## Requisitos

- Node 18+ (para scripts de build)
- npm
- Python 3 ou Node (para servidor local)

## Como rodar localmente

O carregamento dos `.md` usa `fetch`. Abrir via `file://` pode falhar. Use servidor local:

```bash
# Python 3
python -m http.server 8000

# Node
npx serve .
```

Acesse: `http://localhost:8000`

## Como adicionar uma aula

Crie o arquivo:
```
content/{disciplina}/aulaXX.md
```

Execute:
```bash
npm run atualizar-aulas
```

O script lê a pasta `content/` e atualiza automaticamente a lista de aulas.

Arquivos iniciados com `_` são ignorados pela navegação.

## Como adicionar uma disciplina

Edite: `src/js/disciplinas.js`

Adicione ao array:
```javascript
{
  id: 'novo-id',
  nome: 'Nome Exibido',
  aulas: []
}
```

Crie a pasta:
```
content/novo-id/
```

Execute:
```bash
npm run atualizar-aulas
```

## Estrutura do projeto

```
src/
├── css/
│   ├── global.css
│   └── pages/
│       ├── home.css
│       ├── resumos.css
│       ├── aula.css
│       └── sobre.css
└── js/
    ├── global.js
    ├── disciplinas.js
    └── pages/
        ├── home.js
        ├── resumos.js
        └── aula.js

content/
└── {disciplina}/
    ├── aula01.md
    └── _sobre.md

scripts/
└── build-disciplinas.js

public/
└── images/

index.html
resumos.html
aula.html
sobre.html
```

## Arquitetura (front-end)

### CSS

- `global.css` → reset, variáveis, tipografia, layout base e componentes reutilizáveis
- `src/css/pages/*.css` → estilos isolados por página

Estilo de uma página não deve afetar outra.

### JavaScript

- `global.js` → helpers reutilizáveis expostos em `window.UI`
- `src/js/pages/*.js` → lógica específica por página

Scripts de página só executam se os elementos existem no DOM.

Ordem de carga: global → página

Objetivo: evitar acoplamento entre páginas.

### Conteúdo em Markdown

- `content/` é a fonte única de conteúdo
- Um arquivo = uma aula
- Markdown é versionado junto com o código
- Renderização no navegador via [marked](https://markedjs.org/) (CDN)

## Scripts disponíveis

### `npm run atualizar-aulas`

**Função:**
- varre `content/`
- detecta aulas
- atualiza `src/js/disciplinas.js`

Sem esse passo, novas aulas não aparecem na navegação.

## Contribuição

### Conteúdo (principal)

- adicionar ou corrigir arquivos `.md` em `content/`
- manter padrão de estrutura dos resumos
- priorizar clareza técnica e utilidade de estudo

### Código

- helpers reutilizáveis → `global.js`
- estilos de página → `src/css/pages/`
- evitar lógica global específica de página

Se alterar arquitetura ou fluxo, atualizar [ARCHITECTURE.md](ARCHITECTURE.md).

## Documentação adicional

Detalhes de decisões estruturais: [ARCHITECTURE.md](ARCHITECTURE.md)

---

Se o projeto foi útil para seus estudos, deixe uma estrela ⭐ no repositório.
