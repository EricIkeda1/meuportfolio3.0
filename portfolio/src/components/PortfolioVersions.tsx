import { motion } from 'motion/react';
import { ExternalLink, Calendar, Star } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

export function PortfolioVersions() {
  const versions = [
    {
      version: '3.0',
      title: 'Portfolio Atual',
      year: '2025',
      description: 'Versão mais recente do portfólio com design moderno, animações fluidas, modo escuro e visualização inline de projetos. Desenvolvido com React, TypeScript e Motion.',
      technologies: ['React', 'TypeScript', 'Motion', 'Tailwind CSS'],
      status: 'Atual',
      url: 'https://ericyikedaportfolio32.vercel.app/',
      features: [
        'Design responsivo e elegante',
        'Animações fluidas',
        'Modo escuro/claro',
        'Navegação inteligente',
        'Visualização inline de projetos'
      ]
    },
    {
      version: '2.0',
      title: 'Segunda Versão',
      year: '2024',
      description: 'Segunda iteração do portfólio com foco em uma apresentação mais limpa e organizada dos projetos. Implementou melhorias na navegação e na experiência do usuário.',
      technologies: ['React', 'JavaScript', 'CSS', 'Vercel'],
      status: 'Anterior',
      url: 'https://ericyikedaportfolio.vercel.app/',
      features: [
        'Layout mais limpo',
        'Melhor organização de projetos',
        'Navegação aprimorada',
        'Performance otimizada'
      ]
    },
    {
      version: '1.0',
      title: 'Primeira Versão',
      year: '2024',
      description: 'Primeira versão do portfólio desenvolvida para apresentar projetos e habilidades em engenharia de software. Marco inicial da minha presença digital profissional.',
      technologies: ['JavaScript', 'TypeScript', 'CSS', 'Vercel'],
      status: 'Legado',
      url: 'https://ericikedaportfolio.vercel.app/home',
      features: [
        'Primeiro design funcional',
        'Apresentação de projetos',
        'Informações de contato',
        'Design responsivo básico'
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Atual':
        return 'bg-green-500';
      case 'Anterior':
        return 'bg-blue-500';
      case 'Legado':
        return 'bg-orange-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <section id="versions" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl mb-6">
            Evolução do <span className="text-primary">Portfólio</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Acompanhe a evolução do meu portfólio ao longo do tempo, desde a 
            primeira versão até a atual, mostrando o crescimento e aprimoramento 
            das minhas habilidades.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {versions.map((version, index) => (
            <motion.div
              key={version.version}
              variants={itemVariants}
              className="relative"
            >
              {/* Timeline line */}
              {index < versions.length - 1 && (
                <div className="absolute left-6 top-20 w-0.5 h-full bg-border -translate-x-1/2 hidden md:block" />
              )}

              <Card className="p-8 hover:shadow-xl transition-all duration-300 group">
                <div className="grid md:grid-cols-3 gap-8 items-start">
                  {/* Version Info */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className={`w-12 h-12 ${getStatusColor(version.status)} rounded-full flex items-center justify-center text-white font-bold hidden md:flex`}
                      >
                        {version.version}
                      </motion.div>
                      <div>
                        <h3 className="text-2xl font-semibold group-hover:text-primary transition-colors">
                          {version.title}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span className="text-muted-foreground">{version.year}</span>
                          <Badge 
                            variant={version.status === 'Atual' ? 'default' : 'secondary'}
                            className="ml-2"
                          >
                            {version.status === 'Atual' && <Star className="h-3 w-3 mr-1" />}
                            {version.status}
                          </Badge>
                        </div>
                      </div>
                    </div>

                    {version.url !== '#' && (
                      <Button
                        variant="outline"
                        onClick={() => window.open(version.url, '_blank')}
                        className="w-full md:w-auto"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Visitar Site
                      </Button>
                    )}
                  </div>

                  {/* Description */}
                  <div className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {version.description}
                    </p>

                    <div>
                      <h4 className="font-semibold mb-2">Tecnologias</h4>
                      <div className="flex flex-wrap gap-2">
                        {version.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="font-semibold mb-3">Principais Recursos</h4>
                    <ul className="space-y-2">
                      {version.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          initial={{ opacity: 0, x: 10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: featureIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Card className="p-6 bg-primary/5 border-primary/20">
            <h3 className="text-xl font-semibold mb-2">Próximas Melhorias</h3>
            <p className="text-muted-foreground">
              Estou sempre trabalhando para melhorar e adicionar novas funcionalidades. 
              Fique atento às próximas atualizações!
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}