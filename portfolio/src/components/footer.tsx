import { motion } from 'motion/react';
import { ArrowUp } from 'lucide-react';
import { Button } from './ui/button';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-2">Eric Yuji Ikeda</h3>
            <p className="text-muted-foreground">
              Engenheiro de Software em formação
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              UniSenaiPR • 2021/2 - 2026/2
            </p>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            © {new Date().getFullYear()} Eric Yuji Ikeda. Todos os direitos reservados
          </p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-sm text-muted-foreground mt-2 flex items-center justify-center gap-1"
            >
              Feito com muita dedicação
            </motion.p>
          </motion.div>

          {/* Back to top */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex justify-center md:justify-end"
          >
            <Button
              variant="outline"
              size="icon"
              onClick={scrollToTop}
              className="group"
            >
              <motion.div
                animate={{ y: [0, -2, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <ArrowUp className="h-4 w-4 group-hover:text-primary transition-colors" />
              </motion.div>
            </Button>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="h-px bg-border mt-8 mb-6"
        />

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-sm text-muted-foreground"
        >
          <p>
            Este portfólio foi desenvolvido com React, TypeScript, Tailwind CSS e Motion.
          </p>
        </motion.div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/10 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: window.innerHeight,
            }}
            animate={{
              y: [window.innerHeight, -100],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>
    </footer>
  );
}