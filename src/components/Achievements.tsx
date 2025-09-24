import { motion } from 'motion/react';
import { Trophy, Target, BookOpen, Users, Code, Lightbulb } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

export function Achievements() {
  const achievements = [
    {
      icon: Trophy,
      title: 'Iniciação Científica 2024',
      description: 'Revisão e análise do Manual de Normas para Trabalhos Acadêmicos do UniSenaiPR',
      category: 'Pesquisa Acadêmica',
      color: 'text-yellow-500',
      highlights: ['Capítulos 5 e 6', 'Normas ABNT', 'Pesquisa Científica']
    },
    {
      icon: Code,
      title: '9 Projetos Desenvolvidos',
      description: 'Portfolio diversificado cobrindo Front-end, Back-end, Mobile, Segurança e Full-stack',
      category: 'Desenvolvimento',
      color: 'text-blue-500',
      highlights: ['TypeScript', 'Python', 'Flutter', 'React']
    },
    {
      icon: Users,
      title: 'Projetos em Equipe',
      description: 'Experiência em desenvolvimento colaborativo com empresas reais',
      category: 'Colaboração',
      color: 'text-green-500',
      highlights: ['X4Glass - Temperlândia', 'R3DrawChek - Renault', 'Eng2025 - Usipav']
    },
    {
      icon: Target,
      title: 'Projetos da CyberSecurity',
      description: 'Implementação de algoritmos avançados de criptografia',
      category: 'Segurança',
      color: 'text-red-500',
      highlights: ['AES Encryption', 'Diffie-Hellman', 'Comunicação Segura', 'Cifras']
    },
    {
      icon: Lightbulb,
      title: 'Inovação em Automação',
      description: 'Desenvolvimento de soluções para automação de processos industriais',
      category: 'Inovação',
      color: 'text-purple-500',
      highlights: ['Verificação de Desenhos 2D', 'Rastreabilidade', 'Monitoramento']
    },
    {
      icon: BookOpen,
      title: 'Evolução Contínua',
      description: 'Constante aprendizado e aplicação de novas tecnologias',
      category: 'Aprendizado',
      color: 'text-cyan-500',
      highlights: ['3 Versões de Portfolio', 'Tecnologias Modernas', 'Boas Práticas']
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
    <section id="achievements" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl mb-6">
            Conquistas & <span className="text-primary">Realizações</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Principais marcos e conquistas alcançados durante minha jornada acadêmica 
            e desenvolvimento profissional em Engenharia de Software.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        >
          {achievements.map((achievement, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="p-4 md:p-6 h-full hover:shadow-xl transition-all duration-300 group cursor-pointer">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-start gap-3 md:gap-4 mb-4">
                    <div className={`p-2 md:p-3 rounded-full bg-muted ${achievement.color} flex-shrink-0`}>
                      <achievement.icon className="h-4 w-4 md:h-6 md:w-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <Badge variant="secondary" className="mb-2 text-xs">
                        {achievement.category}
                      </Badge>
                      <h3 className="text-base md:text-lg font-semibold group-hover:text-primary transition-colors mb-2">
                        {achievement.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm md:text-base text-muted-foreground mb-4 leading-relaxed">
                    {achievement.description}
                  </p>

                  <div className="flex flex-wrap gap-1 md:gap-2">
                    {achievement.highlights.map((highlight, highlightIndex) => (
                      <motion.div
                        key={highlightIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: highlightIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Badge variant="outline" className="text-xs">
                          {highlight}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/10 border-primary/20">
            <h3 className="text-2xl font-semibold mb-4">Próximos Objetivos</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              Continuando minha jornada de crescimento, estou focado em expandir 
              conhecimentos em arquitetura de sistemas, DevOps e contribuições 
              open source, preparando-me para desafios ainda maiores.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <Badge variant="outline">Arquitetura de Software</Badge>
              <Badge variant="outline">DevOps</Badge>
              <Badge variant="outline">Open Source</Badge>
              <Badge variant="outline">Cloud Computing</Badge>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}