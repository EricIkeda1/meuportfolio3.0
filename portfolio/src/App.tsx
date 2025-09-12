import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { PortfolioHeader } from './components/portfolio-header';
import { HeroSection } from './components/hero-section';
import { AboutSection } from './components/about-section';
import { SkillsSection } from './components/skills-section';
import { TimelineSection } from './components/timeline-section';
import { ProjectsSection } from './components/projects-section';
import { Footer } from './components/footer';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [totalXP, setTotalXP] = useState(0);
  const [level, setLevel] = useState(1);

  // Calculate total XP from all projects
  useEffect(() => {
    const projectsXP = [800, 1200, 600, 500, 400, 900, 700, 600, 1000];
    const total = projectsXP.reduce((sum, xp) => sum + xp, 0);
    setTotalXP(total);
    setLevel(Math.floor(total / 1000) + 1);
  }, []);

  // Initialize theme based on system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const shouldBeDark = savedTheme === 'dark' || (!savedTheme && systemDark);
    
    setDarkMode(shouldBeDark);
    
    if (shouldBeDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    
    // Save preference to localStorage
    localStorage.setItem('theme', newDarkMode ? 'dark' : 'light');
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <motion.div 
      className="min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background Pattern */}
      <div className="fixed inset-0 bg-background">
        <div className="absolute inset-0 bg-grid-small-pattern opacity-[0.02]" />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5"
          animate={{
            background: [
              "linear-gradient(45deg, rgba(59, 130, 246, 0.05) 0%, transparent 50%, rgba(147, 51, 234, 0.05) 100%)",
              "linear-gradient(225deg, rgba(59, 130, 246, 0.05) 0%, transparent 50%, rgba(147, 51, 234, 0.05) 100%)",
              "linear-gradient(45deg, rgba(59, 130, 246, 0.05) 0%, transparent 50%, rgba(147, 51, 234, 0.05) 100%)"
            ]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <PortfolioHeader 
          totalXP={totalXP}
          level={level}
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />
        
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <TimelineSection />
          <ProjectsSection />
        </main>
        
        <Footer />
      </div>

      {/* Floating particles effect */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-500/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Scroll progress indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 z-50 origin-left"
        style={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: false, amount: 0 }}
      />
    </motion.div>
  );
}

// Add custom CSS for grid pattern
const styles = `
  .bg-grid-pattern {
    background-image: radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px);
    background-size: 20px 20px;
  }
  
  .bg-grid-small-pattern {
    background-image: radial-gradient(circle, rgba(0,0,0,0.1) 0.5px, transparent 0.5px);
    background-size: 10px 10px;
  }
`;

// Inject styles
const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);