import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { User, Download, Calendar, MapPin } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AboutSection() {
  const personalInfo = [
    { label: 'Localização', value: 'Curitiba, PR', icon: MapPin },
    { label: 'Formação', value: 'Engenharia de Software', icon: Calendar },
    { label: 'Experiência', value: '4+ anos estudando', icon: User },
    { label: 'Status', value: 'Estudante buscando estágio', icon: User }
  ];

  const interests = [
    '🔐 Criptografia e Segurança',
    '📱 Desenvolvimento Mobile',
    '🌐 Arquitetura de Software',
    '🤖 Inteligência Artificial',
    '⚡ Performance e Otimização',
    '🔬 Pesquisa Acadêmica'
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Badge className="mb-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
            <User className="w-3 h-3 mr-1" />
            Sobre Mim
          </Badge>
          <h2 className="text-4xl font-bold mb-4">
            Conheça Minha{' '}
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Trajetória
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Estudante apaixonado por tecnologia, em constante aprendizado e crescimento
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <motion.h3 
                className="text-2xl font-bold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Olá! Eu sou Eric Yuji Ikeda 👋
              </motion.h3>
              
              <motion.p 
                className="text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Estudante de Engenharia de Software em desenvolvimento, com grande curiosidade por tecnologia e 
                programação. Minha jornada acadêmica começou com o interesse em entender como as coisas funcionam 
                e tem evoluído através de projetos práticos e muito aprendizado.
              </motion.p>

              <motion.p 
                className="text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                Atualmente focando em desenvolvimento full-stack, principalmente com TypeScript, Python e 
                tecnologias web modernas. Estou construindo experiência em diferentes áreas como segurança, 
                desenvolvimento mobile e arquitetura de software através dos projetos acadêmicos.
              </motion.p>
            </div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              {personalInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={info.label}
                    className="flex items-center space-x-3 p-3 rounded-lg bg-muted/50"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-blue-500" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">{info.label}</p>
                      <p className="font-medium">{info.value}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <h4 className="font-semibold">Áreas de Interesse</h4>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest, index) => (
                  <motion.div
                    key={interest}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Badge variant="outline" className="text-sm">
                      {interest}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
              <Button variant="outline">
                Entre em Contato
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="overflow-hidden border-2 border-border/50 hover:border-blue-500/50 transition-all duration-300">
                <CardContent className="p-0">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1753998943228-73470750c597?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwd29ya3NwYWNlJTIwc2V0dXB8ZW58MXx8fHwxNzU3NjgxOTMxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Setup de desenvolvimento"
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="bg-black/20 backdrop-blur-sm rounded-lg p-4">
                      <h4 className="font-semibold mb-2">Meu Ambiente de Desenvolvimento</h4>
                      <p className="text-sm opacity-90">
                        Sempre otimizando meu setup para máxima produtividade e criatividade
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Floating achievement badges */}
            <motion.div
              className="absolute -top-4 -right-4 bg-green-500 text-white p-3 rounded-full shadow-lg"
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              🏆
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -left-4 bg-purple-500 text-white p-3 rounded-full shadow-lg"
              animate={{ 
                y: [0, 10, 0],
                rotate: [0, -5, 5, 0]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              💻
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}