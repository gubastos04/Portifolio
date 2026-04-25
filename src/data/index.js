import ProjectOne from '../assets/img_p1.png'


export const NAV_LINKS = [
  { label: 'Projetos', href: '#projetos' },
  { label: 'Skills', href: '#skills' },
  { label: 'Sobre mim', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
];

export const SKILLS = [
  { name: 'JavaScript' },
  { name: 'CSS' },
  { name: 'HTML' },
  { name: 'React' },
  { name: 'Node.js' },
  { name: 'MongoDB' },
];

export const TOOLS = ['React', 'Node.js', 'MongoDB', 'VSCode', 'Figma', 'Git'];

export const HERO_STATS = [
  /*  { num: '%', label: 'React' }, */
]

export const HERO_PILLS = [
  { label: 'React', active: true },
  { label: 'Node.js', active: true },
  { label: 'MongoDB', active: true },
  { label: 'VSCode', active: false },
  { label: 'Figma', active: false },
  { label: 'Git', active: false },
];

export const PROJECTS = [
  {
    id: 1,
    featured: true,
    meta: 'Projeto principal · React',
    title: 'Portfólio Pessoal',
    desc: 'Meu site pessoal feito com React. Apresenta meus projetos, habilidades e trajetória como desenvolvedor Web Full Stack com foco em experiência do usuário.',
    tags: ['React'],
    links: [
      { label: '↗ Vercel', href: 'https://portifolio-xi-one-61.vercel.app' },
      { label: 'GitHub', href: 'https://github.com/gubastos04/portfolio' },
    ],
    icon: ProjectOne,
  },
  {
    id: 2,
    featured: false,
    meta: 'Em breve',
    title: 'Próximo projeto',
    desc: 'Adicione aqui seu próximo projeto...',
    tags: ['React'],
    links: [],
  },
  {
    id: 3,
    featured: false,
    meta: 'Em breve',
    title: 'Próximo projeto',
    desc: 'Mostre sua versatilidade...',
    tags: ['Node.js'],
    links: [],
  },
];

export const CONTACT_ITEMS = [
  {
    label: 'E-mail',
    value: 'gustavovilairabastos.dev@gmail.com',
    href: 'mailto:gustavovilairabastos.dev@gmail.com',
  },
  {
    label: 'GitHub',
    value: 'github.com/gubastos04',
    href: 'https://github.com/gubastos04',
  },
  {
    label: 'LinkedIn',
    value: 'gustavo-vieira-bastos',
    href: 'https://linkedin.com/in/gustavo-vieira-bastos',
  },
];
