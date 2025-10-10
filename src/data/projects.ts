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
  status?: string;
}

export const categories = ['Todos','Back-end', 'Data Science', 'Front-end', 'Full-stack', 'Machine Learning', 'Mobile', 'Pesquisa', 'Segurança'];

export const projects: Project[] = [
    {
    id: '1',
    title: 'CRM Ademicon Londrina',
    year: '2025',
    description:
      'Projeto em andamento para a Ademicon Londrina, com foco em gestão de Leads, fluxo entre P.A.P., app e CRM. Implementa regras de importação de dados via csv, ciclo de vida do Lead (caducidade em 3 meses, transferência de consultores), auditoria, notificações automáticas e perfis de acesso (Gestor e Consultor). O sistema otimiza a captação de clientes e garante rastreabilidade e governança no processo.',
    technologies: ['Flutter', 'Dart', 'FireBase', 'MySQL'],
    category: ['Full-stack', 'Mobile', 'Front-end', 'Back-end'],
    repoUrl: 'https://github.com/EricIkeda1/JornadaAppAdemicom.git',
    status: 'Em andamento', 
  },
  {
    id: '2',
    title: 'Previsão de Notas de Alunos com Machine Learning',
    year: '2025',
    description:
      'Projeto de Machine Learning desenvolvido em Python para prever as notas finais de alunos com base em dados de desempenho e perfil. Inclui análise exploratória, visualização de correlações, pré-processamento de dados, seleção de features, aplicação de múltiplos regressors (Linear, Ridge, Lasso, Random Forest, Gradient Boosting, SVR) e otimização de hiperparâmetros. O projeto compara métodos, explica escolhas e avalia resultados com métricas de R² e RMSE.',
    technologies: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Scikit-Learn', 'Machine Learning', 'Colab'],
    category: ['Machine Learning'],
    repoUrl: 'https://github.com/EricIkeda1/Atv_APS_Regressao_Linear.git',
    liveUrl: '/notebooks/Atv_APS_Regressao_Linear.html',
  },
  {
    id: '3',
    title: 'Temperlights Mobile',
    year: '2025',
    description:
      'Aplicativo móvel desenvolvido para o sistema de rastreabilidade da Temperlândia. Desenvolvido com Dart e Flutter, oferece funcionalidades de acompanhamento de produção em tempo real para dispositivos móveis.',
    technologies: ['Dart', 'Flutter', 'Supabase API'],
    category: ['Mobile'],
    repoUrl: 'https://github.com/EricIkeda1/Temperlights-Mobile',
  },
    {
    id: '4',
    title: 'Projeto Data Science - Mãos à Obra',
    year: '2024',
    description:
      'Projeto baseado no livro "Mãos à Obra", explorando análise de dados, pré-processamento, visualizações e insights de datasets reais. Inclui estatísticas descritivas, gráficos interativos e interpretação de resultados.',
    technologies: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Jupyter Notebook', 'Data Science'],
    category: ['Data Science'],
    repoUrl: 'https://github.com/EricIkeda1/Projeto-Data-Science.git',
    liveUrl: '/notebooks/Projeto_Data_Science.html',
  },
  {
    id: '5',
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
    id: '6',
    title: 'Comunicação Segura com Diffie-Hellman e Cifra de César',
    year: '2024',
    description:
      'Este projeto implementa uma comunicação segura entre dois usuários utilizando o algoritmo Diffie-Hellman para a troca de chaves públicas e derivação de uma chave compartilhada.',
    technologies: ['Python', 'Criptografia'],
    category: ['Segurança'],
    repoUrl: 'https://github.com/EricIkeda1/Backend_Development',
  },
  {
    id: '7',
    title: 'Criptografia AES em Python',
    year: '2024',
    description:
      'Este repositório contém uma implementação do algoritmo de criptografia AES em Python. A criptografia AES (Advanced Encryption Standard) é um método utilizado para garantir a segurança e a privacidade dos dados.',
    technologies: ['Python', 'AES', 'Criptografia'],
    category: ['Segurança'],
    repoUrl: 'https://github.com/EricIkeda1/AES',
  },
  {
    id: '8',
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
    id: '9',
    title: 'Projeto Arquitetura de Software',
    year: '2024',
    description:
      'Desenvolvi um sistema de vendas de produtos naturais como parte do estudo em arquitetura de software. Este projeto implementa uma aplicação completa com autenticação, cadastro de produtos, controle de fabricantes, lançamento de vendas, e visualização de dados.',
    technologies: ['Python', 'Django', 'HTML/CSS', 'JavaScript'],
    category: ['Full-stack'],
    repoUrl: 'https://github.com/EricIkeda1/Projeto_Arquitetura_de_Software',
  },
  {
    id: '10',
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
    id: '11',
    title: 'Leitores e Escritores',
    year: '2024',
    description:
      'Projeto desenvolvido para a disciplina de Sistemas Operacionais de Tempo Real, abordando o problema clássico de sincronização conhecido como "Leitores e Escritores". O objetivo é garantir o acesso concorrente seguro a uma região crítica, onde múltiplas threads podem ler simultaneamente, mas apenas uma pode escrever por vez. A solução foi implementada em linguagem C utilizando Threads e mecanismos de exclusão mútua, assegurando consistência e eficiência no compartilhamento de recursos. O código foi amplamente comentado para facilitar o entendimento da lógica e do funcionamento de cada etapa da implementação.',
    technologies: ['C', 'Sistemas Operacionais de Tempo Real', 'Threads'],
    category: ['Back-end'],
    repoUrl: 'https://github.com/EricIkeda1/Leitores_e_esctritores',
  },
  {
    id: '12',
    title: 'Portfólio Pessoal - Engenharia de Software 1.0',
    year: '2024',
    description:
      'Portfólio para apresentar meus projetos e habilidades em engenharia de software, utilizando JavaScript, TypeScript, React e CSS.',
    technologies: ['JavaScript', 'TypeScript', 'CSS', 'Vercel'],
    category: ['Front-end'],
    liveUrl: 'https://ericikedaportfolio.vercel.app/home',
  },
  {
    id: '13',
    title: 'Eng2025 Engenharia de Software',
    year: '2023',
    description:
      'Projeto em equipe para Usipav: sistema de monitoramento de produção industrial com dashboard interativo.',
    technologies: ['JavaScript', 'React.js', 'Python', 'Django'],
    category: ['Full-stack'],
    liveUrl: 'https://jornada-2023-2-full-stack.vercel.app/',
  },
  {
    id: '14',
    title: 'Primeiro Projeto Mobile - Desenvolvimento Mobile',
    year: '2023',
    description:
      'Primeiro Projeto Mobile Desenvolvido.',
    technologies: ['Flutter', 'Dart'],
    category: ['Mobile'],
    repoUrl: 'https://github.com/EricIkeda1/Projeto_Desenvolvimento_Mobile',
  },
  {
    id: '15',
    title: 'Primeiro Projeto Backend/Frontend',
    year: '2023',
    description:
      'Projeto web desenvolvido como meu primeiro contato com Django e desenvolvimento fullstack. A home page funciona como ponto de partida, com uma navbar simples que direciona para as páginas internas. Inclui páginas estáticas como uma calculadora visual e uma página sobre o Paraná, exibindo informações de cidades e imagens. Este projeto demonstra habilidades em estruturação de templates Django, organização de arquivos estáticos (CSS e imagens) e construção de layouts responsivos usando Bootstrap.',
    technologies: ['Python', 'Django', 'HTML', 'CSS', 'Bootstrap'],
    category: ['Full-stack', 'Back-end', 'Front-end'],
    repoUrl: 'https://github.com/EricIkeda1/Backend_Development.git',
  }
];
