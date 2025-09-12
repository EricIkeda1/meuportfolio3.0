import { motion } from 'motion/react';
import { useState } from 'react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Github, Linkedin, Mail, Trophy, Zap, Menu, Sun, Moon } from 'lucide-react';
import { MobileNav } from './mobile-nav';

interface PortfolioHeaderProps {
  totalXP: number;
  level: number;
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export function PortfolioHeader({ totalXP, level, darkMode, toggleDarkMode }: PortfolioHeaderProps) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const xpForNextLevel = (level + 1) * 1000;
  const xpProgress = (totalXP % 1000) / 1000 * 100;

  return (
    <motion.header 
      className="sticky top-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border/50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div 
            className="flex items-center space-x-4"
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative">
              <motion.div
                className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-white font-bold">EY</span>
              </motion.div>
              <motion.div 
                className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="text-xs text-white">{level}</span>
              </motion.div>
            </div>
            <div>
              <h1 className="text-xl font-bold">Eric Yuji Ikeda</h1>
              <div className="flex items-center space-x-2">
                <Badge variant="secondary" className="text-xs">
                  <Trophy className="w-3 h-3 mr-1" />
                  Nível {level}
                </Badge>
                <Badge variant="outline" className="text-xs">
                  <Zap className="w-3 h-3 mr-1" />
                  {totalXP} XP
                </Badge>
              </div>
            </div>
          </motion.div>

          <div className="hidden md:block flex-1 max-w-xs mx-8">
            <div className="bg-muted rounded-full h-2 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                style={{ width: `${xpProgress}%` }}
                initial={{ width: 0 }}
                animate={{ width: `${xpProgress}%` }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </div>
            <p className="text-xs text-muted-foreground mt-1 text-center">
              {totalXP % 1000}/{1000} XP para o próximo nível
            </p>
          </div>

          <div className="flex items-center space-x-3">
            {/* Theme Toggle - Always visible */}
            <Button 
              variant="ghost" 
              size="sm"
              onClick={toggleDarkMode}
              className="p-2"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-3">
              <Button variant="ghost" size="sm" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="mailto:eric@example.com">
                  <Mail className="w-4 h-4" />
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileNavOpen(true)}
              className="md:hidden p-2"
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <MobileNav 
        isOpen={mobileNavOpen}
        onClose={() => setMobileNavOpen(false)}
        totalXP={totalXP}
        level={level}
      />
    </motion.header>
  );
}