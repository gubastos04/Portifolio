<div align="center">

# Gustavo Vieira Bastos — Portfólio

**Portfólio pessoal desenvolvido em React, com dados reais da GitHub API e design minimalista dark.**

[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=black)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-latest-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![CSS3](https://img.shields.io/badge/CSS3-Modules-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Font Awesome](https://img.shields.io/badge/Font_Awesome-6-528DD7?style=flat-square&logo=fontawesome&logoColor=white)](https://fontawesome.com/)

[Sobre](#sobre) · [Funcionalidades](#funcionalidades) · [Estrutura](#estrutura) · [Tecnologias](#tecnologias) · [Rodando localmente](#rodando-localmente) · [Contato](#contato)

</div>

---

## Sobre

Site pessoal desenvolvido do zero com **React + Vite**, apresentando meu perfil como desenvolvedor front-end. O projeto vai além do portfólio estático tradicional: a seção de Skills consome a **GitHub API** para exibir estatísticas reais de linguagens de programação calculadas a partir dos meus repositórios públicos.

> Design dark, tipografia monospace e uma paleta roxa discreta — feito para parecer código, mas funcionar como portfólio.

---

## Funcionalidades

- **Efeito de digitação** — nome animado na navbar com hook customizado `useTyping`
- **Skills dinâmicas** — linguagens extraídas em tempo real da GitHub API, com percentual proporcional ao volume de código escrito
- **Loading animado** — feedback visual com `...` pulsante enquanto a API responde
- **Cards de projetos** — preview, tags, e links dinâmicos para GitHub, Live e Figma
- **Design responsivo** — breakpoints para mobile, tablet, laptop e desktop
- **Navegação suave** — `scroll-behavior: smooth` entre as seções via links âncora

---

## Estrutura

```
src/
├── main.jsx                  # Ponto de entrada
├── App.jsx                   # Componente raiz: nav, hero, seções
├── App.css                   # Estilos da nav e apresentação
├── global.css                # Reset, variáveis CSS, tipografia global
│
├── assets/
│   ├── svg.jsx               # Ilustração SVG inline (seção About)
│   └── portifolio.png        # Preview dos cards de projeto
│
└── components/
    ├── about/
    │   ├── about.jsx
    │   └── about.css
    ├── skills/
    │   ├── skills.jsx         # Integração com GitHub API
    │   └── skills.css
    ├── project/
    │   ├── project.jsx
    │   ├── project.css
    │   └── card/
    │       ├── card.jsx
    │       └── card.css
    ├── contact/
    │   ├── contact.jsx
    │   └── contact.css
    └── footer/
        ├── footer.jsx
        └── footer.css
```

---

## Tecnologias

| Tecnologia                                                         | Uso                                         |
| ------------------------------------------------------------------ | ------------------------------------------- |
| [React 18](https://reactjs.org/)                                   | UI, hooks, componentização                  |
| [Vite](https://vitejs.dev/)                                        | Build tool e dev server                     |
| [CSS Modules](https://github.com/css-modules/css-modules)          | Estilos por componente (colocation)         |
| [Font Awesome](https://fontawesome.com/)                           | Ícones SVG (email, GitHub, LinkedIn, Figma) |
| [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) | Fonte monospace principal                   |
| [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk)   | Fonte sans-serif para parágrafos            |
| [GitHub REST API v3](https://docs.github.com/en/rest)              | Dados de linguagens dos repositórios        |

---

## Design System

As variáveis CSS globais estão centralizadas em `global.css`:

```css
:root {
  /* Cores */
  --background: rgb(40, 44, 51);
  --backgroundGray: rgba(78, 78, 78, 0.2);
  --purple: rgb(199, 120, 221); /* cor de destaque */
  --white: rgb(255, 255, 255);
  --gray: rgba(255, 255, 255, 0.7);

  /* Fontes */
  --primaryFont: "JetBrains Mono", monospace;
  --secondaryFont: "Space Grotesk", sans-serif;

  /* Escala */
  --small: 0.875rem;
  --medium: 1.25rem;
  --large: 2rem;
  --smallMobile: 0.635rem;
  --mediumMobile: 1rem;
  --largeMobile: 1.6rem;
}
```

---

## Como adicionar projetos

Edite o array `projects` em `src/components/project/project.jsx`:

```jsx
const projects = [
  {
    title: "Nome do Projeto",
    desc: "Descrição curta do projeto.",
    tags: ["React", "CSS", "Firebase"],
    image: minhaImagem, // import da imagem
    links: [
      { label: "GitHub", url: "https://github.com/..." },
      { label: "Live", url: "https://meu-projeto.vercel.app" },
      { label: "Figma", url: "https://figma.com/..." },
    ],
  },
];
```

Labels suportados nos links: `GitHub`, `Live`, `Figma`.

---

## Responsividade

| Breakpoint | Faixa           | Comportamento                                   |
| ---------- | --------------- | ----------------------------------------------- |
| Mobile     | `≤ 480px`       | Menu oculto, fontes reduzidas, layout em coluna |
| Tablet     | `481px – 768px` | Menu oculto, layout adaptado                    |
| Laptop     | `769px – 992px` | Menu visível, escala intermediária              |
| Desktop    | `≥ 1920px`      | Layout completo, max-width: 1400px              |

---

## Contato

<div>

📧 &nbsp;[gustavovieirabastos.dev@gmail.com](https://mail.google.com/mail/?view=cm&to=gustavovieirabastos.dev@gmail.com)  
🐙 &nbsp;[github.com/gubastos04](https://github.com/gubastos04)  
💼 &nbsp;[linkedin.com/in/gustavo-vieira-bastos](https://www.linkedin.com/in/gustavo-vieira-bastos/)

</div>

---

<div align="center">

Feito com React por **Gustavo Vieira Bastos** — Guarulhos, São Paulo 🇧🇷

</div>
