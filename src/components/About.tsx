import { motion } from 'motion/react';
import { Code, Database, Shield, Smartphone, Search, Globe } from 'lucide-react';
import { Card } from './ui/card';

export function About() {
  const skills = [
    {
      icon: Code,
      title: 'Front-end',
      description: 'React, TypeScript, JavaScript, HTML/CSS',
      color: 'text-blue-500'
    },
    {
      icon: Database,
      title: 'Back-end',
      description: 'Python, Django, SQLite, APIs',
      color: 'text-green-500'
    },
    {
      icon: Shield,
      title: 'Segurança',
      description: 'Criptografia AES, Diffie-Hellman',
      color: 'text-red-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile',
      description: 'Flutter, Dart',
      color: 'text-purple-500'
    },
    {
      icon: Search,
      title: 'Pesquisa',
      description: 'Iniciação Científica, Normas ABNT',
      color: 'text-orange-500'
    },
    {
      icon: Globe,
      title: 'Full-stack',
      description: 'Projetos completos end-to-end',
      color: 'text-cyan-500'
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
    <section id="about" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl mb-6">
            Sobre <span className="text-primary">Mim</span>
          </h2>
          <div className="max-w-3xl mx-auto space-y-6 text-lg text-muted-foreground">
            <p>
              Sou estudante de Engenharia de Software no <strong>UniSenaiPR</strong>, 
              iniciando minha jornada acadêmica em 2021/2 com previsão de formatura em 2026/2. 
              Durante este período, venho desenvolvendo projetos diversos que demonstram 
              minha paixão por tecnologia e inovação.
            </p>
            <p>
              Minha experiência abrange desde desenvolvimento web com <strong>TypeScript</strong> 
              e <strong>React</strong> até implementações de segurança com algoritmos de 
              criptografia avançados. Tenho particular interesse em criar soluções que 
              combinam funcionalidade, segurança e experiência do usuário excepcional.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 group cursor-pointer">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-full bg-muted ${skill.color}`}>
                      <skill.icon className="h-6 w-6" />
                    </div>
                    <h3 className="ml-4 text-xl font-semibold group-hover:text-primary transition-colors">
                      {skill.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground">
                    {skill.description}
                  </p>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center"
        >
          {[
            { label: 'Projetos', value: '9+' },
            { label: 'Tecnologias', value: '15+' },
            { label: 'Anos de Estudo', value: '4+' },
            { label: 'Repositórios', value: '20+' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="p-6"
            >
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}