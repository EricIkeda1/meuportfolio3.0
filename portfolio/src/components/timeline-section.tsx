import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Calendar, GraduationCap, Code, Briefcase, Award } from 'lucide-react';

export function TimelineSection() {
  const timelineEvents = [
    {
      year: '2025',
      title: 'Desenvolvimento Mobile',
      subtitle: 'Temperlights Mobile',
      description: 'Desenvolvimento de aplicativo móvel para sistema de rastreabilidade industrial com Flutter e Dart, explorando desenvolvimento mobile e funcionalidades em tempo real.',
      type: 'project',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      technologies: ['Flutter', 'Dart', 'Supabase API', 'Real-time'],
      xp: 800
    },
    {
      year: '2024',
      title: 'Estudos em Segurança',
      subtitle: 'Projetos de Criptografia',
      description: 'Desenvolvimento de projetos acadêmicos focados em segurança da informação, implementando algoritmos Diffie-Hellman, AES e sistemas de comunicação segura.',
      type: 'achievement',
      icon: Award,
      color: 'from-red-500 to-orange-500',
      technologies: ['Python', 'AES', 'Diffie-Hellman', 'Criptografia'],
      xp: 1100
    },
    {
      year: '2024',
      title: 'Desenvolvimento Full-Stack',
      subtitle: 'Sistemas Completos',
      description: 'Criação de sistemas completos como X4Glass para Temperlândia e sistema de vendas, aprendendo sobre arquitetura de software e desenvolvimento escalável.',
      type: 'project',
      icon: Briefcase,
      color: 'from-green-500 to-emerald-500',
      technologies: ['Django', 'Python', 'SQLite3', 'JavaScript'],
      xp: 2100
    },
    {
      year: '2024',
      title: 'Pesquisador Acadêmico',
      subtitle: 'Iniciação Científica UniSenaiPR',
      description: 'Revisão e análise do Manual de Normas para Trabalhos Acadêmicos, contribuindo para a melhoria dos padrões acadêmicos.',
      type: 'education',
      icon: GraduationCap,
      color: 'from-purple-500 to-violet-500',
      technologies: ['Pesquisa', 'Normas ABNT', 'Metodologia'],
      xp: 400
    },
    {
      year: '2023',
      title: 'Primeiro Projeto Prático',
      subtitle: 'Sistema Eng2025',
      description: 'Desenvolvimento do sistema Eng2025 para Usipav, criando dashboard interativo para monitoramento de produção industrial, primeiro projeto prático real.',
      type: 'project',
      icon: Code,
      color: 'from-yellow-500 to-amber-500',
      technologies: ['React.js', 'Django', 'Python', 'JavaScript'],
      xp: 1000
    },
    {
      year: '2021',
      title: 'Início da Jornada',
      subtitle: 'Engenharia de Software',
      description: 'Início dos estudos em Engenharia de Software, descobrindo a paixão pela programação e desenvolvimento de soluções tecnológicas.',
      type: 'education',
      icon: GraduationCap,
      color: 'from-indigo-500 to-blue-500',
      technologies: ['Fundamentos', 'Lógica', 'Algoritmos'],
      xp: 0
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'project':
        return '🚀';
      case 'achievement':
        return '🏆';
      case 'education':
        return '📚';
      default:
        return '⭐';
    }
  };

  return (
    <section id="timeline" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Badge className="mb-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
            <Calendar className="w-3 h-3 mr-1" />
            Linha do Tempo
          </Badge>
          <h2 className="text-4xl font-bold mb-4">
            Minha Jornada de{' '}
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Evolução
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Da curiosidade inicial aos primeiros projetos - cada marco representando crescimento e muito aprendizado
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-transparent hidden md:block" />

          <div className="space-y-8">
            {timelineEvents.map((event, index) => {
              const Icon = event.icon;
              
              return (
                <motion.div
                  key={event.year + event.title}
                  className="relative"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-6 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 border-4 border-background hidden md:block z-10" />
                  
                  <div className="md:ml-16">
                    <Card className="border-2 border-border/50 hover:border-blue-500/50 transition-all duration-300 group overflow-hidden">
                      <CardContent className="p-6">
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                          <div className="flex-1 space-y-4">
                            <div className="flex items-start space-x-4">
                              <motion.div
                                className={`w-12 h-12 rounded-xl bg-gradient-to-r ${event.color} flex items-center justify-center flex-shrink-0`}
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                transition={{ duration: 0.2 }}
                              >
                                <Icon className="w-6 h-6 text-white" />
                              </motion.div>
                              
                              <div className="flex-1">
                                <div className="flex flex-wrap items-center gap-2 mb-2">
                                  <Badge className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                                    {event.year}
                                  </Badge>
                                  <Badge variant="outline">
                                    {getTypeIcon(event.type)} {event.type === 'project' ? 'Projeto' : event.type === 'achievement' ? 'Conquista' : 'Educação'}
                                  </Badge>
                                  {event.xp > 0 && (
                                    <Badge variant="secondary">
                                      +{event.xp} XP
                                    </Badge>
                                  )}
                                </div>
                                
                                <h3 className="text-xl font-bold mb-1 group-hover:text-blue-500 transition-colors">
                                  {event.title}
                                </h3>
                                <p className="text-sm text-blue-600 font-medium mb-2">
                                  {event.subtitle}
                                </p>
                                <p className="text-muted-foreground leading-relaxed">
                                  {event.description}
                                </p>
                              </div>
                            </div>
                            
                            <div className="flex flex-wrap gap-2">
                              {event.technologies.map((tech, techIndex) => (
                                <motion.div
                                  key={tech}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: (index * 0.2) + (techIndex * 0.05) }}
                                  whileHover={{ scale: 1.05 }}
                                >
                                  <Badge variant="outline" className="text-xs">
                                    {tech}
                                  </Badge>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                      
                      {/* Progress indicator */}
                      <motion.div
                        className="h-1 bg-gradient-to-r from-blue-500 to-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                      />
                    </Card>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Summary stats */}
        <motion.div
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          {[
            { label: 'Anos Estudando', value: '4+', icon: '📅' },
            { label: 'Projetos Concluídos', value: '9', icon: '🚀' },
            { label: 'Tecnologias', value: '15+', icon: '⚡' },
            { label: 'XP Total Conquistado', value: '5.4K', icon: '🏆' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-4 rounded-lg bg-muted/50"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-blue-500 mb-1">{stat.value}</div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}