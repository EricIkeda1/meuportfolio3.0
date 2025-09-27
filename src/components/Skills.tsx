import { motion } from 'motion/react';
import { Code2, Database, Shield, Smartphone, Wrench, GitBranch } from 'lucide-react';
import { Card } from './ui/card';
import { Progress } from './ui/progress';

export function Skills() {
  const skillCategories = [
    {
      icon: Code2,
      title: 'Frontend',
      color: 'text-blue-500',
      skills: [
        { name: 'TypeScript', level: 85 },
        { name: 'JavaScript', level: 90 },
        { name: 'React.js', level: 80 },
        { name: 'HTML/CSS', level: 90 },
        { name: 'Tailwind CSS', level: 85 }
      ]
    },
    {
      icon: Database,
      title: 'Backend',
      color: 'text-green-500',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'Django', level: 85 },
        { name: 'SQLite', level: 80 },
        { name: 'APIs REST', level: 75 },
        { name: 'Supabase', level: 70 }
      ]
    },
    {
      icon: Smartphone,
      title: 'Mobile',
      color: 'text-purple-500',
      skills: [
        { name: 'Flutter', level: 75 },
        { name: 'Dart', level: 80 },
        { name: 'Mobile UI/UX', level: 70 }
      ]
    },
    {
      icon: Shield,
      title: 'Segurança',
      color: 'text-red-500',
      skills: [
        { name: 'Criptografia AES', level: 85 },
        { name: 'Diffie-Hellman', level: 80 },
        { name: 'Segurança de Dados', level: 75 }
      ]
    },
    {
      icon: Wrench,
      title: 'Ferramentas',
      color: 'text-orange-500',
      skills: [
        { name: 'Figma', level: 35 },
        { name: 'Git/GitHub', level: 85 },
        { name: 'VS Code', level: 90 },
        { name: 'Vercel', level: 80 },
        { name: 'Tkinter', level: 75 }
      ]
    },
    {
      icon: GitBranch,
      title: 'Metodologias',
      color: 'text-cyan-500',
      skills: [
        { name: 'Desenvolvimento Ágil', level: 70 },
        { name: 'Arquitetura de Software', level: 75 },
        { name: 'Clean Code', level: 80 },
        { name: 'Documentação', level: 85 }
      ]
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

  return (
    <section id="skills" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl mb-6">
            Habilidades & <span className="text-primary">Tecnologias</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conjunto abrangente de tecnologias e ferramentas que domino, 
            desenvolvido ao longo da minha jornada acadêmica e projetos práticos.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="p-4 md:p-6 h-full hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-4 md:mb-6">
                  <div className={`p-2 md:p-3 rounded-full bg-muted ${category.color} flex-shrink-0`}>
                    <category.icon className="h-5 w-5 md:h-6 md:w-6" />
                  </div>
                  <h3 className="ml-3 md:ml-4 text-lg md:text-xl font-semibold">{category.title}</h3>
                </div>

                <div className="space-y-3 md:space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-xs md:text-sm font-medium">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2"
                      />
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/10 border-primary/20">
            <h3 className="text-xl font-semibold mb-4">Sempre Aprendendo</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Como estudante de Engenharia de Software, estou constantemente explorando 
              novas tecnologias e aprimorando minhas habilidades. Meu foco atual é aprimorar os Design de Interfaces, Desenvolvimento Web e Desenvolvimento Mobile.
              E outros tópicos que me interessam incluem Inteligência Artificial, Machine Learning e DevOps.
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}