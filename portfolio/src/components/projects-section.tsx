import { motion } from 'motion/react';
import { useState } from 'react';
import { ProjectFilters } from './project-filters';
import { ProjectCard } from './project-card';
import { Badge } from './ui/badge';
import { Search } from 'lucide-react';

const projects = [
  {
    id: '1',
    title: 'Temperlights Mobile',
    year: 2025,
    description: 'Aplicativo móvel desenvolvido para o sistema de rastreabilidade da Temperlândia. Desenvolvido com Dart e Flutter, oferece funcionalidades de acompanhamento de produção em tempo real para dispositivos móveis.',
    technologies: [
      { name: 'Dart', color: '#0175C2' },
      { name: 'Flutter', color: '#02569B' },
      { name: 'Supabase API', color: '#3ECF8E' }
    ],
    category: ['mobile'],
    xp: 800,
    difficulty: 'Avançado' as const,
    repoUrl: '#'
  },
  {
    id: '2',
    title: 'X4Glass - Rastreabilidade na Produção de Vidros',
    year: 2024,
    description: 'Desenvolvido em equipe, este projeto teve como objetivo criar um sistema de rastreabilidade industrial para a Temperlândia, abordando o controle do fluxo de produção, monitoramento de ordens de serviço e visualização de dados em tempo real.',
    technologies: [
      { name: 'HTML', color: '#E34F26' },
      { name: 'CSS', color: '#1572B6' },
      { name: 'JavaScript', color: '#F7DF1E' },
      { name: 'SQLite3', color: '#003B57' },
      { name: 'Python', color: '#3776AB' },
      { name: 'Django', color: '#092E20' }
    ],
    category: ['fullstack'],
    xp: 1200,
    difficulty: 'Expert' as const,
    repoUrl: '#'
  },
  {
    id: '3',
    title: 'Comunicação Segura com Diffie-Hellman e Cifra de César',
    year: 2024,
    description: 'Este projeto implementa uma comunicação segura entre dois usuários utilizando o algoritmo Diffie-Hellman para a troca de chaves públicas e derivação de uma chave compartilhada.',
    technologies: [
      { name: 'Python', color: '#3776AB' },
      { name: 'Criptografia', color: '#FF6B6B' }
    ],
    category: ['security'],
    xp: 600,
    difficulty: 'Avançado' as const,
    repoUrl: '#'
  },
  {
    id: '4',
    title: 'Criptografia AES em Python',
    year: 2024,
    description: 'Este repositório contém uma implementação do algoritmo de criptografia AES em Python. A criptografia AES (Advanced Encryption Standard) é um método utilizado para garantir a segurança e a privacidade dos dados.',
    technologies: [
      { name: 'Python', color: '#3776AB' },
      { name: 'AES', color: '#FF6B6B' },
      { name: 'Criptografia', color: '#FF6B6B' }
    ],
    category: ['security'],
    xp: 500,
    difficulty: 'Intermediário' as const,
    repoUrl: '#'
  },
  {
    id: '5',
    title: 'Iniciação Científica',
    year: 2024,
    description: 'Como parte da minha iniciação científica em 2024, realizei a revisão, correção e análise do Manual de Normas para Trabalhos Acadêmicos do UniSenaiPR, com foco nos capítulos 5 e 6.',
    technologies: [
      { name: 'Normas ABNT', color: '#4CAF50' },
      { name: 'Acadêmico', color: '#2196F3' }
    ],
    category: ['research'],
    xp: 400,
    difficulty: 'Intermediário' as const,
    liveUrl: '#'
  },
  {
    id: '6',
    title: 'Projeto Arquitetura de Software',
    year: 2024,
    description: 'Desenvolvi um sistema de vendas de produtos naturais como parte do estudo em arquitetura de software. Este projeto implementa uma aplicação completa com autenticação, cadastro de produtos, controle de fabricantes, lançamento de vendas, e visualização de dados.',
    technologies: [
      { name: 'Python', color: '#3776AB' },
      { name: 'Django', color: '#092E20' },
      { name: 'HTML/CSS', color: '#E34F26' },
      { name: 'JavaScript', color: '#F7DF1E' }
    ],
    category: ['fullstack'],
    xp: 900,
    difficulty: 'Avançado' as const,
    repoUrl: '#'
  },
  {
    id: '7',
    title: 'R3DrawChek_Jornada20241',
    year: 2024,
    description: 'Nome do Desafio: Automação Inteligente na Verificação de Desenhos 2D. Este projeto foi desenvolvido em equipe, para solucionar um problema enfrentado pela engenharia da Renault, envolvendo a validação de desenhos 2D.',
    technologies: [
      { name: 'Python', color: '#3776AB' },
      { name: 'Tkinter', color: '#FFA500' },
      { name: 'SQLite3', color: '#003B57' }
    ],
    category: ['backend'],
    xp: 700,
    difficulty: 'Avançado' as const,
    repoUrl: '#'
  },
  {
    id: '8',
    title: 'Portfólio Pessoal - Engenharia de Software 1.0',
    year: 2024,
    description: 'Este portfólio foi desenvolvido para apresentar meus projetos e habilidades em engenharia de software, utilizando JavaScript, TypeScript, React e CSS.',
    technologies: [
      { name: 'JavaScript', color: '#F7DF1E' },
      { name: 'TypeScript', color: '#3178C6' },
      { name: 'CSS', color: '#1572B6' },
      { name: 'Vercel', color: '#000000' }
    ],
    category: ['frontend'],
    xp: 600,
    difficulty: 'Intermediário' as const,
    liveUrl: '#'
  },
  {
    id: '9',
    title: 'Eng2025 Engenharia de Software',
    year: 2023,
    description: 'Este projeto foi desenvolvido em equipe para a Usipav e tem como objetivo criar um sistema de monitoramento de produção industrial. Através de uma integração de dados provenientes de sensores, o sistema apresenta informações em tempo real por meio de um dashboard interativo.',
    technologies: [
      { name: 'JavaScript', color: '#F7DF1E' },
      { name: 'React.js', color: '#61DAFB' },
      { name: 'Python', color: '#3776AB' },
      { name: 'Django', color: '#092E20' }
    ],
    category: ['fullstack'],
    xp: 1000,
    difficulty: 'Expert' as const,
    liveUrl: '#'
  }
];

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = projects.filter(project => 
    activeFilter === 'all' || project.category.includes(activeFilter)
  );

  const projectCounts = {
    all: projects.length,
    frontend: projects.filter(p => p.category.includes('frontend')).length,
    backend: projects.filter(p => p.category.includes('backend')).length,
    fullstack: projects.filter(p => p.category.includes('fullstack')).length,
    security: projects.filter(p => p.category.includes('security')).length,
    mobile: projects.filter(p => p.category.includes('mobile')).length,
    research: projects.filter(p => p.category.includes('research')).length,
  };

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Badge className="mb-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
            <Search className="w-3 h-3 mr-1" />
            Meus Projetos
          </Badge>
          <h2 className="text-4xl font-bold mb-4">
            Explore Minha Jornada de{' '}
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Desenvolvimento
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {filteredProjects.length} projetos encontrados • Cada projeto representa conhecimento adquirido e habilidades desenvolvidas
          </p>
        </motion.div>

        <ProjectFilters 
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          projectCounts={projectCounts}
        />

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index}
            />
          ))}
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div 
            className="text-center py-20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold mb-2">Nenhum projeto encontrado</h3>
            <p className="text-muted-foreground">
              Tente selecionar uma categoria diferente para ver os projetos.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}