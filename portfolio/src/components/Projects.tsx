import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, FileText, Calendar } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';

interface Project {
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

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['Todos', 'Front-end', 'Back-end', 'Full-stack', 'Segurança', 'Mobile', 'Pesquisa'];

  const projects: Project[] = [
    {
      id: '1',
      title: 'Temperlights Mobile',
      year: '2025',
      description: 'Aplicativo móvel desenvolvido para o sistema de rastreabilidade da Temperlândia. Desenvolvido com Dart e Flutter, oferece funcionalidades de acompanhamento de produção em tempo real para dispositivos móveis.',
      technologies: ['Dart', 'Flutter', 'Supabase API'],
      category: ['Mobile'],
      repoUrl: 'https://github.com/EricIkeda1/Temperlights-Mobile'
    },
    {
      id: '2',
      title: 'X4Glass - Rastreabilidade na Produção de Vidros',
      year: '2024',
      description: 'Desenvolvido em equipe, este projeto teve como objetivo criar um sistema de rastreabilidade industrial para a Temperlândia, abordando o controle do fluxo de produção, monitoramento de ordens de serviço e visualização de dados em tempo real.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'SQLite3', 'Python', 'Django'],
      category: ['Full-stack'],
      repoUrl: 'https://github.com/EricIkeda1/X4Glass',
      articleUrl: 'https://drive.google.com/file/d/1_EZlMgTwfFgNuCEBJgANGZLmApmMBnFF/view'
    },
    {
      id: '3',
      title: 'Comunicação Segura com Diffie-Hellman e Cifra de César',
      year: '2024',
      description: 'Este projeto implementa uma comunicação segura entre dois usuários utilizando o algoritmo Diffie-Hellman para a troca de chaves públicas e derivação de uma chave compartilhada.',
      technologies: ['Python', 'Criptografia'],
      category: ['Segurança'],
      repoUrl: 'https://github.com/EricIkeda1/Backend_Development'
    },
    {
      id: '4',
      title: 'Criptografia AES em Python',
      year: '2024',
      description: 'Este repositório contém uma implementação do algoritmo de criptografia AES em Python. A criptografia AES (Advanced Encryption Standard) é um método utilizado para garantir a segurança e a privacidade dos dados.',
      technologies: ['Python', 'AES', 'Criptografia'],
      category: ['Segurança'],
      repoUrl: 'https://github.com/EricIkeda1/AES'
    },
    {
      id: '5',
      title: 'Iniciação Científica',
      year: '2024',
      description: 'Como parte da minha iniciação científica em 2024, realizei a revisão, correção e análise do Manual de Normas para Trabalhos Acadêmicos do UniSenaiPR, com foco nos capítulos 5 e 6.',
      technologies: ['Pesquisa', 'Normas ABNT', 'Acadêmico'],
      category: ['Pesquisa'],
      articleUrl: 'https://drive.google.com/file/d/1khtYl3Diga8rj4k32tb-y4G8taZ01aLi/view'
    },
    {
      id: '6',
      title: 'Projeto Arquitetura de Software',
      year: '2024',
      description: 'Desenvolvi um sistema de vendas de produtos naturais como parte do estudo em arquitetura de software. Este projeto implementa uma aplicação completa com autenticação, cadastro de produtos, controle de fabricantes, lançamento de vendas, e visualização de dados.',
      technologies: ['Python', 'Django', 'HTML/CSS', 'JavaScript'],
      category: ['Full-stack'],
      repoUrl: 'https://github.com/EricIkeda1/Projeto_Arquitetura_de_Software'
    },
    {
      id: '7',
      title: 'R3DrawChek_Jornada20241',
      year: '2024',
      description: 'Nome do Desafio: Automação Inteligente na Verificação de Desenhos 2D. Este projeto foi desenvolvido em equipe, para solucionar um problema enfrentado pela engenharia da Renault, envolvendo a validação de desenhos 2D.',
      technologies: ['Python', 'Tkinter', 'SQLite3'],
      category: ['Back-end'],
      repoUrl: 'https://github.com/EricIkeda1/R3DrawChek_Jornada20241',
      articleUrl: 'https://drive.google.com/file/d/1AQ5H8h6CHwjUKM8cKtmIOOxGm7CfM3Vu/view'
    },
    {
      id: '8',
      title: 'Portfólio Pessoal - Engenharia de Software 1.0',
      year: '2024',
      description: 'Este portfólio foi desenvolvido para apresentar meus projetos e habilidades em engenharia de software, utilizando JavaScript, TypeScript, React e CSS.',
      technologies: ['JavaScript', 'TypeScript', 'CSS', 'Vercel'],
      category: ['Front-end'],
      liveUrl: 'https://ericikedaportfolio.vercel.app/home'
    },
    {
      id: '9',
      title: 'Eng2025 Engenharia de Software',
      year: '2023',
      description: 'Este projeto foi desenvolvido em equipe para a Usipav e tem como objetivo criar um sistema de monitoramento de produção industrial. Através de uma integração de dados provenientes de sensores, o sistema apresenta informações em tempo real por meio de um dashboard interativo.',
      technologies: ['JavaScript', 'React.js', 'Python', 'Django'],
      category: ['Full-stack'],
      liveUrl: 'https://jornada-2023-2-full-stack.vercel.app/'
    }
  ];

  const filteredProjects = selectedCategory === 'Todos' 
    ? projects 
    : projects.filter(project => project.category.includes(selectedCategory));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl mb-6">
            Meus <span className="text-primary">Projetos</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Uma coleção de projetos desenvolvidos em TypeScript e outras tecnologias, 
            demonstrando boas práticas, padrões de design e soluções inovadoras.
          </p>
        </motion.div>

        {/* Filter Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          {/* Filter Header */}
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold mb-2 text-foreground">Categorias</h3>
            <p className="text-sm text-muted-foreground">Filtre projetos por área de especialização</p>
          </div>

          {/* Filter Buttons Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-wrap lg:justify-center gap-3 mb-8">
            {categories.map((category, index) => {
              const projectCount = category === 'Todos' ? projects.length : projects.filter(p => p.category.includes(category)).length;
              const isActive = selectedCategory === category;
              
              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <motion.button
                    onClick={() => setSelectedCategory(category)}
                    className={`relative w-full lg:w-auto group overflow-hidden rounded-lg border transition-all duration-300 ${
                      isActive
                        ? 'bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/25'
                        : 'bg-card text-card-foreground border-border hover:border-primary/50 hover:shadow-md'
                    }`}
                    whileHover={{ 
                      scale: 1.02,
                      y: -2
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Background gradient effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r transition-opacity duration-300 ${
                      isActive 
                        ? 'opacity-100 from-primary to-primary/80' 
                        : 'opacity-0 from-primary/10 to-accent/10 group-hover:opacity-100'
                    }`} />
                    
                    {/* Content */}
                    <div className="relative px-4 py-3 flex flex-col items-center gap-1">
                      <div className="flex items-center gap-2">
                        <span className={`font-medium text-sm lg:text-base transition-colors ${
                          isActive ? 'text-primary-foreground' : 'text-foreground group-hover:text-primary'
                        }`}>
                          {category}
                        </span>
                      </div>
                      
                      {/* Count Badge */}
                      <motion.div
                        key={`${category}-${projectCount}`}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className={`inline-flex items-center justify-center min-w-[24px] h-6 px-2 text-xs font-medium rounded-full transition-all duration-300 ${
                          isActive
                            ? 'bg-primary-foreground/20 text-primary-foreground'
                            : 'bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary'
                        }`}
                      >
                        {projectCount}
                      </motion.div>
                    </div>
                    
                    {/* Active indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="activeFilter"
                        className="absolute bottom-0 left-0 right-0 h-1 bg-primary-foreground/30"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </motion.button>
                </motion.div>
              );
            })}
          </div>
          
          {/* Filter Results Info */}
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted/50 rounded-full">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <p className="text-sm text-muted-foreground">
                {selectedCategory === 'Todos' 
                  ? `Exibindo todos os ${projects.length} projetos` 
                  : `${projects.filter(p => p.category.includes(selectedCategory)).length} projeto${projects.filter(p => p.category.includes(selectedCategory)).length !== 1 ? 's' : ''} em ${selectedCategory}`
                }
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.9 }}
                transition={{ 
                  duration: 0.4, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                layout
                className="group"
              >
                <Card className="p-6 h-full hover:shadow-xl transition-all duration-300 cursor-pointer"
                      onClick={() => setSelectedProject(project)}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 text-muted-foreground mr-2" />
                      <span className="text-sm text-muted-foreground">{project.year}</span>
                    </div>
                    <div className="flex gap-2">
                      {project.repoUrl && (
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.repoUrl, '_blank');
                          }}
                        >
                          <Github className="h-4 w-4" />
                        </Button>
                      )}
                      {project.liveUrl && (
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.liveUrl, '_blank');
                          }}
                        >
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      )}
                      {project.articleUrl && (
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.articleUrl, '_blank');
                          }}
                        >
                          <FileText className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 3} mais
                      </Badge>
                    )}
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          key={`results-${selectedCategory}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted/50 rounded-full">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <p className="text-muted-foreground">
              {filteredProjects.length} projeto{filteredProjects.length !== 1 ? 's' : ''} encontrado{filteredProjects.length !== 1 ? 's' : ''}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">{selectedProject.title}</DialogTitle>
              </DialogHeader>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 text-muted-foreground mr-2" />
                    <span className="text-sm text-muted-foreground">{selectedProject.year}</span>
                  </div>
                  
                  <div className="flex gap-2">
                    {selectedProject.repoUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(selectedProject.repoUrl, '_blank')}
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Repositório
                      </Button>
                    )}
                    {selectedProject.liveUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(selectedProject.liveUrl, '_blank')}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Ver Site
                      </Button>
                    )}
                    {selectedProject.articleUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(selectedProject.articleUrl, '_blank')}
                      >
                        <FileText className="h-4 w-4 mr-2" />
                        Artigo
                      </Button>
                    )}
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {selectedProject.description}
                </p>

                <div>
                  <h4 className="font-semibold mb-3">Tecnologias Utilizadas</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Categorias</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.category.map((cat) => (
                      <Badge key={cat} variant="outline">
                        {cat}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}