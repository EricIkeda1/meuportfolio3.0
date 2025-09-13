"use client";

import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { ArrowDown, Github, Linkedin, Mail, Calendar, GraduationCap, Code } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  // --- Digitação lenta "vai e vem" com cursor piscando ---
  const fullName = 'Eric Yuji Ikeda';
  const [displayedName, setDisplayedName] = useState('');
  const [typingForward, setTypingForward] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayedName(prev => {
        if (typingForward) {
          if (prev.length < fullName.length) return fullName.slice(0, prev.length + 1);
          setTypingForward(false);
          return prev;
        } else {
          if (prev.length > 0) return prev.slice(0, prev.length - 1);
          setTypingForward(true);
          return prev;
        }
      });
    }, 300); 
    return () => clearInterval(interval);
  }, [typingForward]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Nome com digitação lenta + cursor piscando */}
              <motion.h1
                className="text-5xl lg:text-7xl tracking-tight font-bold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {displayedName}
                <motion.span
                  className="ml-1"
                  style={{ display: 'inline-block' }}
                  animate={{ opacity: [0, 1] }}
                  transition={{ repeat: Infinity, duration: 0.7 }} 
                >
                  |
                </motion.span>
              </motion.h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-4"
            >
              <h2 className="text-2xl lg:text-3xl text-muted-foreground">
                Engenheiro de Software
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                Estudante de <strong>Engenharia de Software</strong> no UniSenaiPR em Londrina PR desde 2021, 
                com previsão de formatura em 2026. Residente em <strong>Ibiporã, Paraná</strong>, 
                sou um desenvolvedor dedicado à criação de soluções tecnológicas inovadoras que 
                combinam funcionalidade, elegância e impacto real. Especializo-me em transformar 
                ideias complexas em aplicações práticas e intuitivas.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Button onClick={scrollToProjects} size="lg" className="group">
                Ver Projetos
                <motion.div
                  className="ml-2"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <ArrowDown className="h-4 w-4" />
                </motion.div>
              </Button>

              <div className="flex gap-2">
                <Button variant="outline" size="icon" asChild>
                  <a href="https://github.com/EricIkeda1" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a href="https://www.linkedin.com/in/ericikeda1/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </motion.div>

            {/* Context Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8"
            >
              <motion.div whileHover={{ y: -2 }} className="flex items-center gap-3 p-4 bg-muted/30 backdrop-blur-sm rounded-lg border border-border/50">
                <div className="p-2 bg-primary/10 rounded-full">
                  <Calendar className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Graduação</p>
                  <p className="text-sm font-medium">2021 - 2026</p>
                </div>
              </motion.div>
              
              <motion.div whileHover={{ y: -2 }} className="flex items-center gap-3 p-4 bg-muted/30 backdrop-blur-sm rounded-lg border border-border/50">
                <div className="p-2 bg-primary/10 rounded-full">
                  <GraduationCap className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Instituição</p>
                  <p className="text-sm font-medium">UniSenaiPR</p>
                </div>
              </motion.div>
              
              <motion.div whileHover={{ y: -2 }} className="flex items-center gap-3 p-4 bg-muted/30 backdrop-blur-sm rounded-lg border border-border/50">
                <div className="p-2 bg-primary/10 rounded-full">
                  <Code className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Portfolio</p>
                  <p className="text-sm font-medium">9+ Projetos</p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full blur-3xl opacity-20"
                animate={{ scale: [1, 1.1, 1], rotate: [0, 180, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              />
              <div className="relative z-10 aspect-square rounded-full overflow-hidden border-4 border-border shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1645947091786-4399f228f5f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGVuZ2luZWVyJTIwY29kaW5nJTIwZGFya3xlbnwxfHx8fDE3NTc3MDk5MDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Eric Yuji Ikeda"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-1 h-3 bg-muted-foreground rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
