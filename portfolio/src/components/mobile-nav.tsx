import { motion, AnimatePresence } from 'motion/react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { X, User, Code, Calendar, FolderOpen, Mail } from 'lucide-react';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  totalXP: number;
  level: number;
}

export function MobileNav({ isOpen, onClose, totalXP, level }: MobileNavProps) {
  const navItems = [
    { label: 'Sobre Mim', href: '#about', icon: User },
    { label: 'Habilidades', href: '#skills', icon: Code },
    { label: 'Timeline', href: '#timeline', icon: Calendar },
    { label: 'Projetos', href: '#projects', icon: FolderOpen },
    { label: 'Contato', href: '#contact', icon: Mail }
  ];

  const scrollToSection = (href: string) => {
    const sectionId = href.replace('#', '');
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          {/* Mobile Menu */}
          <motion.div
            className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-background/98 backdrop-blur-xl border-l-2 border-border/60 shadow-2xl z-50"
            style={{ 
              background: 'var(--background)', 
              borderColor: 'var(--border)'
            }}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-border">
                <div className="flex items-center space-x-3">
                  <motion.div
                    className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="text-white text-sm font-bold">EY</span>
                  </motion.div>
                  <div>
                    <h2 className="font-semibold">Eric Yuji</h2>
                    <div className="flex items-center space-x-1">
                      <Badge variant="secondary" className="text-xs">
                        Nível {level}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {totalXP} XP
                      </Badge>
                    </div>
                  </div>
                </div>
                
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onClose}
                  className="p-2"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              {/* Navigation */}
              <nav className="flex-1 p-6">
                <div className="space-y-2">
                  {navItems.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Button
                          variant="ghost"
                          className="w-full justify-start text-left p-4 h-auto hover:bg-muted/50"
                          onClick={() => scrollToSection(item.href)}
                        >
                          <Icon className="w-5 h-5 mr-3" />
                          <span>{item.label}</span>
                        </Button>
                      </motion.div>
                    );
                  })}
                </div>
              </nav>

              {/* Footer */}
              <div className="p-6 border-t border-border">
                <div className="bg-muted/80 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">🎓</div>
                  <p className="text-sm font-medium mb-1">Estudante em crescimento!</p>
                  <p className="text-xs text-muted-foreground">
                    Aprendendo e desenvolvendo habilidades
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}