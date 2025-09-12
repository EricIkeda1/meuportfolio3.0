import { motion } from 'motion/react';
import { Calendar, GraduationCap, Award, BookOpen, Users } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

export function Timeline() {
  const timelineEvents = [
    {
      year: '2021/2',
      title: 'Início da Graduação',
      subtitle: 'UniSenaiPR - Engenharia de Software',
      description: 'Início da jornada acadêmica em Engenharia de Software, explorando fundamentos de programação e lógica computacional.',
      icon: GraduationCap,
      color: 'bg-blue-500',
      achievements: ['Fundamentos de Programação', 'Lógica Computacional', 'Algoritmos']
    },
    {
      year: '2022',
      title: 'Primeiros Projetos',
      subtitle: 'Desenvolvimento Web Básico',
      description: 'Desenvolvimento dos primeiros projetos em HTML, CSS e JavaScript, construindo uma base sólida em tecnologias web.',
      icon: BookOpen,
      color: 'bg-green-500',
      achievements: ['HTML/CSS', 'JavaScript Básico', 'Projetos Web']
    },
    {
      year: '2023',
      title: 'Eng2025 - Projeto em Equipe',
      subtitle: 'Sistema de Monitoramento Industrial',
      description: 'Participação no projeto para a Usipav, desenvolvendo sistema de monitoramento de produção com dashboard interativo.',
      icon: Users,
      color: 'bg-purple-500',
      achievements: ['Trabalho em Equipe', 'React.js', 'Python/Django', 'Dashboard']
    },
    {
      year: '2024',
      title: 'Ano de Expansão',
      subtitle: 'Múltiplos Projetos e Iniciação Científica',
      description: 'Ano mais produtivo com 6 projetos desenvolvidos, incluindo iniciação científica e projetos de segurança.',
      icon: Award,
      color: 'bg-orange-500',
      achievements: ['6 Projetos Concluídos', 'Iniciação Científica', 'Criptografia', 'Flutter']
    },
    {
      year: '2025',
      title: 'Desenvolvimento Mobile',
      subtitle: 'Temperlights Mobile',
      description: 'Desenvolvimento de aplicativo móvel com Flutter, expandindo conhecimentos para desenvolvimento mobile.',
      icon: BookOpen,
      color: 'bg-cyan-500',
      achievements: ['Flutter/Dart', 'Mobile Development', 'Supabase API']
    },
    {
      year: '2026/2',
      title: 'Formatura (Prevista)',
      subtitle: 'Conclusão da Graduação',
      description: 'Previsão de conclusão do curso de Engenharia de Software, pronto para novos desafios profissionais.',
      icon: GraduationCap,
      color: 'bg-primary',
      achievements: ['Diploma', 'Portfolio Completo', 'Pronto para o Mercado']
    }
  ];

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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <section id="timeline" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl mb-6">
            Jornada <span className="text-primary">Acadêmica</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Acompanhe minha evolução desde o início da graduação até os dias atuais, 
            destacando os principais marcos e conquistas ao longo do caminho.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block" />

          <div className="space-y-6 md:space-y-8">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-start md:items-center`}
              >
                {/* Timeline dot */}
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className={`absolute left-4 md:left-1/2 w-4 h-4 ${event.color} rounded-full -translate-x-1/2 z-10 hidden md:block`}
                />

                {/* Content */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? '' : 'md:text-right'}`}>
                  <Card className="p-4 md:p-6 hover:shadow-lg transition-all duration-300 group">
                    <div className={`flex items-start md:items-center gap-3 md:gap-4 mb-4 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                      <div className={`p-2 md:p-3 rounded-full ${event.color} text-white flex-shrink-0`}>
                        <event.icon className="h-4 w-4 md:h-5 md:w-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <Calendar className="h-3 w-3 md:h-4 md:w-4 text-muted-foreground flex-shrink-0" />
                          <span className="text-xs md:text-sm font-medium text-muted-foreground">{event.year}</span>
                        </div>
                        <h3 className="text-lg md:text-xl font-semibold group-hover:text-primary transition-colors">
                          {event.title}
                        </h3>
                        <p className="text-sm md:text-base text-primary/80">{event.subtitle}</p>
                      </div>
                    </div>

                    <p className="text-sm md:text-base text-muted-foreground mb-4 leading-relaxed">
                      {event.description}
                    </p>

                    <div className="flex flex-wrap gap-1 md:gap-2">
                      {event.achievements.map((achievement, achievementIndex) => (
                        <Badge key={achievementIndex} variant="secondary" className="text-xs">
                          {achievement}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                </div>

                {/* Mobile timeline indicator */}
                <div className={`w-3 h-3 md:w-4 md:h-4 ${event.color} rounded-full mr-3 md:mr-4 md:hidden flex-shrink-0 mt-2`} />
              </motion.div>
            ))}
          </div>
        </motion.div>


      </div>
    </section>
  );
}