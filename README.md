<div align="center">

# Gustavo Vieira Bastos — Portfólio

**Portfólio pessoal desenvolvido em React, com dados reais da GitHub API e design minimalista dark.**

[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=black)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-latest-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![CSS3](https://img.shields.io/badge/CSS-Modules-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![EmailJS](https://img.shields.io/badge/EmailJS-latest-F4B400?style=flat-square)](https://www.emailjs.com/)

[Funcionalidades](#funcionalidades) · [Estrutura](#estrutura) · [Tecnologias](#tecnologias) · [Design System](#design-system) · [Rodando localmente](#rodando-localmente) · [Contato](#contato)

</div>

---

## Sobre

Site pessoal desenvolvido do zero com **React + Vite**, apresentando meu perfil como desenvolvedor Web Full Stack. O projeto conta com um design completamente reformulado — paleta escura com roxo vibrante, tipografia moderna e animações de reveal por scroll — além de integrações reais:

- A seção **Skills** consome a **GitHub API** para exibir as linguagens mais usadas nos meus repositórios públicos, com barras animadas e percentuais proporcionais ao volume de código.
- A seção **Contato** possui um formulário funcional integrado ao **EmailJS**, que envia mensagens diretamente ao meu e-mail sem back-end.

> Design escuro, fontes Syne + Instrument Sans e uma paleta roxa intensa — construído para impressionar e funcionar.

---

## Funcionalidades

- **Navbar com scroll detection** — fundo translúcido ativado ao rolar, menu hamburger funcional no mobile
- **Hero com pills de stack** — apresentação com tags visuais das tecnologias e botões de CTA
- **Animações de reveal** — hook `useReveal` com `IntersectionObserver`: cada seção e card anima ao entrar na viewport
- **Skills dinâmicas** — linguagens extraídas em tempo real da GitHub API, com barras animadas por CSS (`scaleX`) e delay escalonado por item
- **Fallback de skills** — caso a API falhe, exibe lista estática definida em `src/data/index.js`
- **Projetos com cards featured** — grid de projetos com destaque para o principal, thumbnail, tags e links externos
- **Formulário de contato funcional** — integração com EmailJS, validação básica e feedback de sucesso
- **Design responsivo** — breakpoints para mobile, tablet e desktop via CSS Modules
- **Scrollbar customizada** — estilização nativa via `::-webkit-scrollbar`

---

## Estrutura

```
src/
├── main.jsx                    # Ponto de entrada
├── App.jsx                     # Componente raiz: monta Navbar, seções e Footer
│
├── styles/
│   └── global.css              # Reset, variáveis CSS, utilitários globais
│
├── data/
│   └── index.js                # Dados centralizados: NAV_LINKS, PROJECTS, SKILLS, TOOLS, CONTACT_ITEMS
│
├── hooks/
│   └── useReveal.js            # Hook: IntersectionObserver para animação de entrada
│
├── assets/
│   ├── img_p1.png              # Thumbnail do projeto 1
│   └── img_p2.png              # Thumbnail do projeto 2
│
└── components/
    ├── Navbar.jsx / Navbar.css
    ├── Hero.jsx   / Hero.css
    ├── Projects.jsx / Projects.css
    ├── Skills.jsx   / Skills.css
    ├── About.jsx    / About.css
    ├── Contact.jsx  / Contact.css
    └── Footer.jsx   / Footer.css
```

---

## Tecnologias

| Tecnologia | Uso |
| --- | --- |
| [React 18](https://reactjs.org/) | UI, hooks, componentização |
| [Vite](https://vitejs.dev/) | Build tool e dev server |
| [CSS Modules](https://github.com/css-modules/css-modules) | Estilos escopados por componente |
| [EmailJS](https://www.emailjs.com/) | Envio de e-mail pelo formulário de contato sem back-end |
| [Syne](https://fonts.google.com/specimen/Syne) | Fonte display para títulos |
| [Instrument Sans](https://fonts.google.com/specimen/Instrument+Sans) | Fonte sans-serif para corpo de texto |
| [GitHub REST API v3](https://docs.github.com/en/rest) | Dados de linguagens dos repositórios |

---

## Design System

Variáveis CSS globais centralizadas em `src/styles/global.css`:

```css
:root {
  /* Backgrounds */
  --bg:  #0e0e10;
  --bg2: #161619;
  --bg3: #1e1e23;

  /* Roxo */
  --vio:      #a855f7;
  --vio2:     #7c3aed;
  --vio-dim:  rgba(168, 85, 247, 0.12);
  --vio-glow: rgba(168, 85, 247, 0.25);

  /* Texto */
  --text:   #f4f3f8;
  --muted:  #6b6a74;

  /* Bordas */
  --border:  rgba(168, 85, 247, 0.18);
  --border2: rgba(255, 255, 255, 0.07);

  /* Tipografia */
  --ff-title: 'Syne', sans-serif;
  --ff-body:  'Instrument Sans', sans-serif;
}
```

Classes utilitárias disponíveis: `.accent`, `.btn`, `.btn-fill`, `.btn-ghost`, `.pill`, `.pill.active`, `.reveal` / `.reveal.visible`, `.sec-header`, `.sec-line`.

---

## Como adicionar projetos

Edite o array `PROJECTS` em `src/data/index.js`:

```js
export const PROJECTS = [
  {
    id: 4,
    featured: false,
    meta: 'Descrição curta do contexto',
    title: 'Nome do Projeto',
    desc: 'Descrição do projeto.',
    tags: ['React', 'Node.js'],
    links: [
      { label: 'GitHub', href: 'https://github.com/...' },
      { label: 'Vercel', href: 'https://...' },
    ],
    icon: minhaImagem, // import da imagem no topo do arquivo
  },
];
```

Para marcar um projeto como destaque (card maior): `featured: true`. Projetos sem `icon` exibem o número do ID como placeholder.

---

## Responsividade

| Breakpoint | Comportamento |
| --- | --- |
| Mobile `≤ 480px` | Menu hamburger, layout em coluna, fontes reduzidas |
| Tablet `481px – 768px` | Menu hamburger, layout adaptado |
| Desktop `≥ 769px` | Navbar horizontal, layouts em grid/flex lado a lado |

---

## Contato

<div>

📧 &nbsp;[gustavovieirabastos.dev@gmail.com](mailto:gustavovieirabastos.dev@gmail.com)  
🐙 &nbsp;[github.com/gubastos04](https://github.com/gubastos04)  
💼 &nbsp;[linkedin.com/in/gustavo-vieira-bastos](https://www.linkedin.com/in/gustavo-vieira-bastos/)

</div>

---

<div align="center">

Feito com React por **Gustavo Vieira Bastos** — Guarulhos, São Paulo 🇧🇷

</div>