import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Github, Linkedin, Mail, Heart, Trophy } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const achievements = [
    { icon: '🎯', label: '100% Projetos Entregues', value: '9/9' },
    { icon: '⚡', label: 'Tecnologias Dominadas', value: '15+' },
    { icon: '🏆', label: 'Anos de Experiência', value: '3+' },
    { icon: '💡', label: 'Soluções Criativas', value: '∞' }
  ];

  return (
    <footer id="contact" className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-12">
        {/* Achievements Section */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-8">
            <Badge className="bg-gradient-to-r from-blue-500 to-purple-600 text-white mb-4">
              <Trophy className="w-3 h-3 mr-1" />
              Conquistas Desbloqueadas
            </Badge>
            <h3 className="text-2xl font-bold">Estatísticas da Jornada</h3>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                className="text-center p-4 rounded-lg bg-card border border-border/50"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="text-3xl mb-2">{achievement.icon}</div>
                <div className="text-xl font-bold text-blue-500 mb-1">
                  {achievement.value}
                </div>
                <p className="text-sm text-muted-foreground">
                  {achievement.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-xl font-bold mb-4">Entre em Contato</h3>
          <p className="text-muted-foreground mb-6">
            Vamos conversar sobre tecnologia, projetos e oportunidades!
          </p>
          
          <div className="flex justify-center space-x-4">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button variant="outline" size="lg" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </a>
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button variant="outline" size="lg" asChild>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </a>
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700" asChild>
                <a href="mailto:eric@example.com">
                  <Mail className="w-5 h-5 mr-2" />
                  E-mail
                </a>
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div 
          className="border-t border-border pt-6 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <motion.div
                className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-white text-sm font-bold">EY</span>
              </motion.div>
              <div>
                <p className="text-sm font-medium">Eric Yuji Ikeda</p>
                <p className="text-xs text-muted-foreground">Engenharia de Software</p>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-sm text-muted-foreground flex items-center justify-center">
                © {currentYear} Eric Yuji Ikeda. Todos os direitos reservados
              </p>
              <p className="text-xs text-muted-foreground mt-1 flex items-center justify-center">
                Feito com <Heart className="w-3 h-3 mx-1 text-red-500" /> e muita dedicação
              </p>
            </div>

            <div className="mt-4 md:mt-0">
              <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20">
                🟢 Disponível para oportunidades
              </Badge>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}