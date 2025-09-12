import { motion } from 'motion/react';
import { Mail, Github, Linkedin, MapPin, Briefcase } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'E-mail',
      value: 'ericikeda2002@gmail.com',
      href: 'mailto:ericikeda2002@gmail.com',
      color: 'text-red-500'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'EricIkeda1',
      href: 'https://github.com/EricIkeda1',
      color: 'text-gray-500'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'ericikeda1',
      href: 'https://www.linkedin.com/in/ericikeda1/',
      color: 'text-blue-500'
    },
    {
      icon: MapPin,
      label: 'Localização',
      value: 'Ibiporã, Paraná - Brasil',
      href: '#',
      color: 'text-green-500'
    },
    {
      icon: Briefcase,
      label: 'Disponibilidade para Trabalho',
      value: 'Presencial/Híbrido (cidades vizinhas) • Remoto',
      href: '#',
      color: 'text-blue-500'
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl mb-6">
            Entre em <span className="text-primary">Contato</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estou sempre aberto a novas oportunidades e colaborações. 
            Vamos conversar sobre como podemos trabalhar juntos!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4 md:space-y-6"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">Informações de Contato</h3>
            </motion.div>

            {contactInfo.map((info, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="p-4 md:p-6 hover:shadow-lg transition-all duration-300 group cursor-pointer">
                  <motion.a
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : '_self'}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : ''}
                    className="flex items-start md:items-center gap-3 md:gap-4"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className={`p-2 md:p-3 rounded-full bg-muted ${info.color} flex-shrink-0`}>
                      <info.icon className="h-4 w-4 md:h-6 md:w-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold group-hover:text-primary transition-colors text-sm md:text-base">
                        {info.label}
                      </h4>
                      <p className="text-muted-foreground text-sm md:text-base break-words">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:sticky lg:top-24"
          >
            <Card className="p-6 md:p-8 text-center bg-gradient-to-br from-primary/5 to-accent/10 border-primary/20">
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 2, -2, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="mb-4 md:mb-6"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 bg-primary rounded-full flex items-center justify-center mx-auto">
                  <Mail className="h-8 w-8 md:h-10 md:w-10 text-primary-foreground" />
                </div>
              </motion.div>

              <h3 className="text-xl md:text-2xl font-semibold mb-4">
                Vamos trabalhar juntos!
              </h3>
              
              <p className="text-sm md:text-base text-muted-foreground mb-6 leading-relaxed">
                Estou disponível para projetos freelance, estágios e oportunidades 
                de colaboração. Se você tem uma ideia interessante ou precisa de 
                ajuda com desenvolvimento, não hesite em entrar em contato.
              </p>

              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-2">
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={() => window.open('https://github.com/EricIkeda1', '_blank')}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={() => window.open('https://www.linkedin.com/in/ericikeda1/', '_blank')}
                  >
                    <Linkedin className="h-4 w-4 mr-2" />
                    LinkedIn
                  </Button>
                </div>
                
                <div className="mt-4 p-3 bg-muted/50 rounded-lg text-left">
                  <p className="text-xs md:text-sm text-muted-foreground">
                    <strong>🏢 Modalidades aceitas:</strong><br/>
                    • Presencial e híbrido em cidades vizinhas<br/>
                    • Remoto em qualquer localização
                  </p>
                </div>
              </div>
            </Card>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-3 md:gap-4 mt-4 md:mt-6"
            >
              <Card className="p-3 md:p-4 text-center">
                <div className="text-xl md:text-2xl font-bold text-primary">4+</div>
                <div className="text-xs md:text-sm text-muted-foreground">Anos de Estudo</div>
              </Card>
              <Card className="p-3 md:p-4 text-center">
                <div className="text-xl md:text-2xl font-bold text-primary">9+</div>
                <div className="text-xs md:text-sm text-muted-foreground">Projetos</div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}