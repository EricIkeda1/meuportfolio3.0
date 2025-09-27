'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, FileText, Calendar } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { projects, categories, Project } from '../data/projects';

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    selectedCategory === 'Todos'
      ? projects
      : projects.filter((project) => project.category.includes(selectedCategory));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl mb-6">
            Meus <span className="text-primary">Projetos</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Uma coleção de projetos desenvolvidos em TypeScript e outras tecnologias,
            demonstrando boas práticas, padrões de design e soluções inovadoras.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold mb-2 text-foreground">Categorias</h3>
            <p className="text-sm text-muted-foreground">
              Filtre projetos por área de especialização
            </p>
          </div>

          {/* Mobile Select */}
          <div className="block md:hidden mb-6">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full rounded-lg border border-border bg-card text-foreground px-4 py-3"
            >
              {categories.map((category) => {
                const count =
                  category === 'Todos'
                    ? projects.length
                    : projects.filter((p) => p.category.includes(category)).length;
                return (
                  <option key={category} value={category}>
                    {category} ({count})
                  </option>
                );
              })}
            </select>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex flex-wrap justify-center w-full gap-3 mb-8">
            {categories.map((category) => {
              const projectCount =
                category === 'Todos'
                  ? projects.length
                  : projects.filter((p) => p.category.includes(category)).length;
              const isActive = selectedCategory === category;

              return (
                <motion.button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`relative group overflow-hidden rounded-lg border transition-all duration-300 px-4 py-3 ${
                    isActive
                      ? 'bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/25'
                      : 'bg-card text-card-foreground border-border hover:border-primary/50 hover:shadow-md'
                  }`}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span
                    className={`font-medium text-sm lg:text-base ${
                      isActive
                        ? 'text-primary-foreground'
                        : 'text-foreground group-hover:text-primary'
                    }`}
                  >
                    {category}
                  </span>
                  <span
                    className={`ml-2 inline-flex items-center justify-center min-w-[24px] h-6 px-2 text-xs font-medium rounded-full ${
                      isActive
                        ? 'bg-primary-foreground/20 text-primary-foreground'
                        : 'bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary'
                    }`}
                  >
                    {projectCount}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.9 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                  type: 'spring',
                  stiffness: 100,
                }}
                layout
                className="group"
              >
                <Card
                  className="p-6 h-full hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
                  onClick={() => setSelectedProject(project)}
                >
                  <div>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{project.year}</span>
                      </div>
                      <div className="flex gap-2">
                        {project.repoUrl && (
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(project.repoUrl, '_blank');
                            }}
                          >
                            <Github className="h-4 w-4" />
                          </Button>
                        )}
                        {project.liveUrl && (
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(project.liveUrl, '_blank');
                            }}
                          >
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        )}
                        {project.articleUrl && (
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(project.articleUrl, '_blank');
                            }}
                          >
                            <FileText className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-3">{project.description}</p>

                    {/* Tecnologias */}
                    <div className="flex flex-wrap gap-2 mb-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.technologies.length - 3} mais
                        </Badge>
                      )}
                    </div>

                    {/* Status */}
                    {project.status && (
                      <Badge variant="destructive" className="text-xs mt-2">
                        {project.status}
                      </Badge>
                    )}
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
            {selectedProject && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl">{selectedProject.title}</DialogTitle>
                </DialogHeader>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{selectedProject.year}</span>
                    </div>
                    <div className="flex gap-2">
                      {selectedProject.repoUrl && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => window.open(selectedProject.repoUrl, '_blank')}
                        >
                          <Github className="h-4 w-4 mr-2" />
                          Repositório
                        </Button>
                      )}
                      {selectedProject.liveUrl && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => window.open(selectedProject.liveUrl, '_blank')}
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Ver Site
                        </Button>
                      )}
                      {selectedProject.articleUrl && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => window.open(selectedProject.articleUrl, '_blank')}
                        >
                          <FileText className="h-4 w-4 mr-2" />
                          Artigo
                        </Button>
                      )}
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {selectedProject.description}
                  </p>

                  <div>
                    <h4 className="font-semibold mb-3">Tecnologias Utilizadas</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Categorias</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.category.map((cat) => (
                        <Badge key={cat} variant="outline">
                          {cat}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Status no Modal */}
                  {selectedProject.status && (
                    <div className="mt-4">
                      <h4 className="font-semibold mb-1">Status</h4>
                      <Badge variant="destructive">{selectedProject.status}</Badge>
                    </div>
                  )}
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
