import { motion } from 'motion/react';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ExternalLink, Github, Star, Zap } from 'lucide-react';

interface Technology {
  name: string;
  color: string;
}

interface Project {
  id: string;
  title: string;
  year: number;
  description: string;
  technologies: Technology[];
  category: string[];
  xp: number;
  difficulty: 'Iniciante' | 'Intermediário' | 'Avançado' | 'Expert';
  repoUrl?: string;
  liveUrl?: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const difficultyConfig = {
  'Iniciante': { color: 'bg-green-500', stars: 1 },
  'Intermediário': { color: 'bg-yellow-500', stars: 2 },
  'Avançado': { color: 'bg-orange-500', stars: 3 },
  'Expert': { color: 'bg-red-500', stars: 4 }
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const difficultyInfo = difficultyConfig[project.difficulty];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.4,
        delay: index * 0.1,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        y: -10,
        scale: 1.02
      }}
      className="h-full"
    >
      <Card className="h-full flex flex-col relative overflow-hidden border-2 border-border/50 hover:border-blue-500/50 transition-all duration-300 group">
        {/* Gradient background effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* XP Badge */}
        <motion.div 
          className="absolute top-3 right-3 z-10"
          whileHover={{ scale: 1.1 }}
        >
          <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black">
            <Zap className="w-3 h-3 mr-1" />
            {project.xp} XP
          </Badge>
        </motion.div>

        <CardHeader className="relative">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <Badge variant="outline" className="text-xs">
                  {project.year}
                </Badge>
                <div className={`w-2 h-2 rounded-full ${difficultyInfo.color}`} />
                <span className="text-xs text-muted-foreground">{project.difficulty}</span>
              </div>
              
              <motion.h3 
                className="text-lg font-semibold leading-tight mb-2 group-hover:text-blue-500 transition-colors"
                whileHover={{ scale: 1.02 }}
              >
                {project.title}
              </motion.h3>
              
              <div className="flex items-center space-x-1">
                {Array.from({ length: difficultyInfo.stars }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                  >
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </CardHeader>

        <CardContent className="flex-1">
          <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, techIndex) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + techIndex * 0.05 }}
                whileHover={{ scale: 1.1 }}
              >
                <Badge 
                  variant="secondary"
                  className="text-xs"
                  style={{ backgroundColor: tech.color + '20', color: tech.color }}
                >
                  {tech.name}
                </Badge>
              </motion.div>
            ))}
          </div>
        </CardContent>

        <CardFooter className="pt-4">
          <div className="flex w-full space-x-2">
            {project.repoUrl && (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1"
              >
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full"
                  asChild
                >
                  <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    Repositório
                  </a>
                </Button>
              </motion.div>
            )}
            
            {project.liveUrl && (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1"
              >
                <Button 
                  size="sm" 
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                  asChild
                >
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Ver Site
                  </a>
                </Button>
              </motion.div>
            )}
          </div>
        </CardFooter>

        {/* Hover effect lines */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
        />
      </Card>
    </motion.div>
  );
}