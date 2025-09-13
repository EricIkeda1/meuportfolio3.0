export interface Project {
  id: string;
  title: string;
  year: string;
  description: string;
  technologies: string[];
  category: string[];
  repoUrl?: string;
  liveUrl?: string;
  articleUrl?: string;
  image?: string;
}

export const categories = ['Todos', 'Front-end', 'Back-end', 'Full-stack', 'Segurança', 'Mobile', 'Pesquisa'];

export const projects: Project[] = [
  {
    id: '1',
    title: 'Temperlights Mobile',
    year: '2025',
    description:
      'Aplicativo móvel desenvolvido para o sistema de rastreabilidade da Temperlândia. Desenvolvido com Dart e Flutter, oferece funcionalidades de acompanhamento de produção em tempo real para dispositivos móveis.',
    technologies: ['Dart', 'Flutter', 'Supabase API'],
    category: ['Mobile'],
    repoUrl: 'https://github.com/EricIkeda1/Temperlights-Mobile',
  },
  {
    id: '2',
    title: 'X4Glass - Rastreabilidade na Produção de Vidros',
    year: '2024',
    description:
      'Desenvolvido em equipe, este projeto teve como objetivo criar um sistema de rastreabilidade industrial para a Temperlândia, abordando o controle do fluxo de produção, monitoramento de ordens de serviço e visualização de dados em tempo real.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'SQLite3', 'Python', 'Django'],
    category: ['Full-stack'],
    repoUrl: 'https://github.com/EricIkeda1/X4Glass',
    articleUrl:
      'https://drive.google.com/file/d/1_EZlMgTwfFgNuCEBJgANGZLmApmMBnFF/view',
  },
  {
    id: '3',
    title: 'Comunicação Segura com Diffie-Hellman e Cifra de César',
    year: '2024',
    description:
      'Este projeto implementa uma comunicação segura entre dois usuários utilizando o algoritmo Diffie-Hellman para a troca de chaves públicas e derivação de uma chave compartilhada.',
    technologies: ['Python', 'Criptografia'],
    category: ['Segurança'],
    repoUrl: 'https://github.com/EricIkeda1/Backend_Development',
  },
  {
    id: '4',
    title: 'Criptografia AES em Python',
    year: '2024',
    description:
      'Este repositório contém uma implementação do algoritmo de criptografia AES em Python. A criptografia AES (Advanced Encryption Standard) é um método utilizado para garantir a segurança e a privacidade dos dados.',
    technologies: ['Python', 'AES', 'Criptografia'],
    category: ['Segurança'],
    repoUrl: 'https://github.com/EricIkeda1/AES',
  },
  {
    id: '5',
    title: 'Iniciação Científica',
    year: '2024',
    description:
      'Como parte da minha iniciação científica em 2024, realizei a revisão, correção e análise do Manual de Normas para Trabalhos Acadêmicos do UniSenaiPR, com foco nos capítulos 5 e 6.',
    technologies: ['Pesquisa', 'Normas ABNT', 'Acadêmico'],
    category: ['Pesquisa'],
    articleUrl:
      'https://drive.google.com/file/d/1khtYl3Diga8rj4k32tb-y4G8taZ01aLi/view',
  },
  {
    id: '6',
    title: 'Projeto Arquitetura de Software',
    year: '2024',
    description:
      'Desenvolvi um sistema de vendas de produtos naturais como parte do estudo em arquitetura de software. Este projeto implementa uma aplicação completa com autenticação, cadastro de produtos, controle de fabricantes, lançamento de vendas, e visualização de dados.',
    technologies: ['Python', 'Django', 'HTML/CSS', 'JavaScript'],
    category: ['Full-stack'],
    repoUrl: 'https://github.com/EricIkeda1/Projeto_Arquitetura_de_Software',
  },
  {
    id: '7',
    title: 'R3DrawChek_Jornada20241',
    year: '2024',
    description:
      'Automação Inteligente na Verificação de Desenhos 2D. Projeto em equipe para validar desenhos 2D da engenharia da Renault.',
    technologies: ['Python', 'Tkinter', 'SQLite3'],
    category: ['Back-end'],
    repoUrl: 'https://github.com/EricIkeda1/R3DrawChek_Jornada20241',
    articleUrl:
      'https://drive.google.com/file/d/1AQ5H8h6CHwjUKM8cKtmIOOxGm7CfM3Vu/view',
  },
  {
    id: '8',
    title: 'Portfólio Pessoal - Engenharia de Software 1.0',
    year: '2024',
    description:
      'Portfólio para apresentar meus projetos e habilidades em engenharia de software, utilizando JavaScript, TypeScript, React e CSS.',
    technologies: ['JavaScript', 'TypeScript', 'CSS', 'Vercel'],
    category: ['Front-end'],
    liveUrl: 'https://ericikedaportfolio.vercel.app/home',
  },
  {
    id: '9',
    title: 'Eng2025 Engenharia de Software',
    year: '2023',
    description:
      'Projeto em equipe para Usipav: sistema de monitoramento de produção industrial com dashboard interativo.',
    technologies: ['JavaScript', 'React.js', 'Python', 'Django'],
    category: ['Full-stack'],
    liveUrl: 'https://jornada-2023-2-full-stack.vercel.app/',
  },
];
