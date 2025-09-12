import { motion } from 'motion/react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Code, Download, Star } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function HeroSection() {
  const achievements = [
    { icon: "🎓", label: "Engenharia de Software", count: 1 },
    { icon: "💻", label: "Projetos Desenvolvidos", count: 9 },
    { icon: "🏆", label: "Tecnologias Estudadas", count: 15 },
    { icon: "🔒", label: "Projetos de Segurança", count: 3 }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-muted/20 to-background min-h-screen flex items-center">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div 
                className="flex items-center space-x-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Badge className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                  <Star className="w-3 h-3 mr-1" />
                  Estudante de Engenharia
                </Badge>
                <Badge variant="outline">
                  <Code className="w-3 h-3 mr-1" />
                  Desenvolvendo Skills
                </Badge>
              </motion.div>

              <motion.h1 
                className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Portfólio de Projetos de{' '}
                <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Eric Yuji Ikeda
                </span>
              </motion.h1>

              <motion.p 
                className="text-xl text-muted-foreground max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                Uma coleção de projetos acadêmicos desenvolvidos durante minha jornada de aprendizado 
                em Engenharia de Software, explorando diferentes tecnologias e conceitos.
              </motion.p>
            </div>

            <motion.div 
              className="grid grid-cols-2 lg:grid-cols-4 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.label}
                  className="bg-card border border-border rounded-lg p-4 text-center"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{ 
                    transition: `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s` 
                  }}
                >
                  <div className="text-2xl mb-2">{achievement.icon}</div>
                  <motion.div 
                    className="text-2xl font-bold text-blue-500"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1 + index * 0.1, type: "spring" }}
                  >
                    {achievement.count}
                  </motion.div>
                  <p className="text-xs text-muted-foreground mt-1">
                    {achievement.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                <Download className="w-4 h-4 mr-2" />
                Ver Projetos
              </Button>
              <Button size="lg" variant="outline">
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
              className="relative rounded-2xl overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRlY2hub2xvZ3klMjBjb2RlJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NTc2ODE5Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Código e tecnologia abstrata"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              
              <motion.div
                className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm"
                animate={{ 
                  y: [0, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                🟢 Online
              </motion.div>
            </motion.div>

            {/* Floating elements */}
            <motion.div
              className="absolute -top-6 -left-6 bg-blue-500 text-white p-3 rounded-full shadow-lg"
              animate={{ 
                rotate: 360,
                y: [0, -20, 0]
              }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              💻
            </motion.div>

            <motion.div
              className="absolute -bottom-6 -right-6 bg-purple-500 text-white p-3 rounded-full shadow-lg"
              animate={{ 
                rotate: -360,
                y: [0, 20, 0]
              }}
              transition={{ 
                rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              🚀
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}