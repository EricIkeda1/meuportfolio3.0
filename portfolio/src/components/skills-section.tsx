import { motion } from 'motion/react';
import { Card, CardContent, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Code, Server, Smartphone, Shield, Database, Globe } from 'lucide-react';

export function SkillsSection() {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Globe,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'TypeScript', level: 90, projects: 5 },
        { name: 'React.js', level: 85, projects: 4 },
        { name: 'JavaScript', level: 95, projects: 8 },
        { name: 'HTML/CSS', level: 90, projects: 7 },
        { name: 'Tailwind CSS', level: 80, projects: 3 }
      ]
    },
    {
      title: 'Backend',
      icon: Server,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Python', level: 95, projects: 6 },
        { name: 'Django', level: 85, projects: 4 },
        { name: 'Node.js', level: 75, projects: 2 },
        { name: 'API Development', level: 80, projects: 5 },
        { name: 'Microservices', level: 70, projects: 2 }
      ]
    },
    {
      title: 'Database',
      icon: Database,
      color: 'from-purple-500 to-violet-500',
      skills: [
        { name: 'SQLite3', level: 90, projects: 4 },
        { name: 'PostgreSQL', level: 75, projects: 2 },
        { name: 'Supabase', level: 80, projects: 3 },
        { name: 'Database Design', level: 85, projects: 4 },
        { name: 'SQL Optimization', level: 70, projects: 2 }
      ]
    },
    {
      title: 'Mobile',
      icon: Smartphone,
      color: 'from-pink-500 to-rose-500',
      skills: [
        { name: 'Flutter', level: 85, projects: 2 },
        { name: 'Dart', level: 85, projects: 2 },
        { name: 'React Native', level: 70, projects: 1 },
        { name: 'Mobile UI/UX', level: 75, projects: 2 },
        { name: 'App Store Deploy', level: 65, projects: 1 }
      ]
    },
    {
      title: 'Segurança',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      skills: [
        { name: 'Criptografia', level: 85, projects: 3 },
        { name: 'AES Encryption', level: 80, projects: 2 },
        { name: 'Diffie-Hellman', level: 75, projects: 1 },
        { name: 'Security Audits', level: 70, projects: 2 },
        { name: 'Penetration Testing', level: 65, projects: 1 }
      ]
    },
    {
      title: 'DevOps & Tools',
      icon: Code,
      color: 'from-yellow-500 to-amber-500',
      skills: [
        { name: 'Git & GitHub', level: 90, projects: 9 },
        { name: 'Docker', level: 70, projects: 2 },
        { name: 'CI/CD', level: 65, projects: 2 },
        { name: 'Vercel', level: 80, projects: 3 },
        { name: 'Linux', level: 75, projects: 4 }
      ]
    }
  ];

  const certifications = [
    { name: 'Iniciação Científica UniSenaiPR', year: 2024, type: 'Acadêmico' },
    { name: 'Python Advanced', year: 2024, type: 'Programação' },
    { name: 'Cybersecurity Fundamentals', year: 2024, type: 'Segurança' },
    { name: 'Mobile Development', year: 2025, type: 'Mobile' }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Badge className="mb-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
            <Code className="w-3 h-3 mr-1" />
            Habilidades Técnicas
          </Badge>
          <h2 className="text-4xl font-bold mb-4">
            Tecnologias &{' '}
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Especialidades
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Conhecimentos técnicos desenvolvidos através de projetos acadêmicos e estudo dedicado
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full border-2 border-border/50 hover:border-blue-500/50 transition-all duration-300 group">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{category.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {category.skills.length} tecnologias
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        className="space-y-2"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">{skill.name}</span>
                          <div className="flex items-center space-x-2">
                            <Badge variant="secondary" className="text-xs">
                              {skill.projects} projeto{skill.projects > 1 ? 's' : ''}
                            </Badge>
                            <span className="text-xs text-muted-foreground">
                              {skill.level}%
                            </span>
                          </div>
                        </div>
                        <Progress 
                          value={skill.level} 
                          className="h-2"
                        />
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Certificações & Conquistas</h3>
            <p className="text-muted-foreground">
              Reconhecimentos acadêmicos e profissionais
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Card className="text-center p-4 hover:shadow-lg transition-all duration-300">
                  <div className="text-2xl mb-2">
                    {cert.type === 'Acadêmico' && '🎓'}
                    {cert.type === 'Programação' && '💻'}
                    {cert.type === 'Segurança' && '🔒'}
                    {cert.type === 'Mobile' && '📱'}
                  </div>
                  <h4 className="font-semibold mb-1 text-sm">{cert.name}</h4>
                  <Badge variant="outline" className="text-xs">
                    {cert.year}
                  </Badge>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}