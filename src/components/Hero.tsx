"use client";

import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { ArrowDown, Github, Linkedin, Calendar, GraduationCap, Code } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Project {
  id: number;
  name: string;
  html_url: string;
  description: string;
  language: string | null;
}

const MY_GITHUB_USERNAME = "EricIkeda1";
const MIN_GITHUB_PROJECTS_TO_UPDATE = 20;

const initialProjects: Project[] = [

];

export function Hero() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [projects, setProjects] = useState<Project[]>(initialProjects);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const fullName = "Eric Ikeda";
  const [displayedName, setDisplayedName] = useState("");
  const [phase, setPhase] = useState<"typing" | "pauseAfterTyping" | "erasing" | "pauseBeforeTyping">("typing");
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const blink = setInterval(() => setCursorVisible((prev) => !prev), 500);
    return () => clearInterval(blink);
  }, []);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let interval: NodeJS.Timeout;

    if (phase === "pauseBeforeTyping") timeout = setTimeout(() => setPhase("typing"), 5000);

    if (phase === "typing") {
      let i = 0;
      interval = setInterval(() => {
        setDisplayedName(fullName.slice(0, i + 1));
        i++;
        if (i === fullName.length) {
          clearInterval(interval);
          setPhase("pauseAfterTyping");
        }
      }, 200);
    }

    if (phase === "pauseAfterTyping") timeout = setTimeout(() => setPhase("erasing"), 5000);

    if (phase === "erasing") {
      let i = fullName.length;
      interval = setInterval(() => {
        setDisplayedName(fullName.slice(0, i - 1));
        i--;
        if (i === 0) {
          clearInterval(interval);
          setPhase("pauseBeforeTyping");
        }
      }, 200);
    }

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [phase]);

  useEffect(() => {
    async function fetchAllGitHubProjects() {
      try {
        let page = 1;
        let per_page = 100; 
        let allRepos: Project[] = [];
        let fetchMore = true;

        while (fetchMore) {
          const res = await fetch(
            `https://api.github.com/users/${MY_GITHUB_USERNAME}/repos?per_page=${per_page}&page=${page}`
          );
          const data: any[] = await res.json();

          if (data.length === 0) {
            fetchMore = false;
            break;
          }

          const githubProjects = data.map((repo) => ({
            id: repo.id,
            name: repo.name,
            html_url: repo.html_url,
            description: repo.description || "Sem descrição",
            language: repo.language,
          }));

          allRepos = [...allRepos, ...githubProjects];

          if (data.length < per_page) fetchMore = false;
          else page++;
        }

        if (allRepos.length >= MIN_GITHUB_PROJECTS_TO_UPDATE) {
          const combinedProjects = [...initialProjects];
          allRepos.forEach((p) => {
            if (!combinedProjects.find((cp) => cp.id === p.id)) combinedProjects.push(p);
          });

          setProjects(combinedProjects);
        }
      } catch (error) {
        console.error("Erro ao buscar projetos do GitHub:", error);
      }
    }

    fetchAllGitHubProjects();
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <motion.h1
              className="text-5xl lg:text-7xl tracking-tight font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {displayedName}
              <motion.span className="ml-1" style={{ display: "inline-block", opacity: cursorVisible ? 1 : 0 }}>
                |
              </motion.span>
            </motion.h1>

            <h2 className="text-2xl lg:text-3xl text-muted-foreground">Engenheiro de Software</h2>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Estudante de <strong>Engenharia de Software</strong> no UniSenaiPR em Londrina PR desde 2021,
              com previsão de formatura em 2026. Residente em <strong>Ibiporã, Paraná</strong>, sou um
              desenvolvedor dedicado à criação de soluções tecnológicas inovadoras que combinam funcionalidade,
              elegância e impacto real.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button onClick={scrollToProjects} size="lg" className="group">
                Ver Projetos
                <motion.div className="ml-2" animate={{ x: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
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
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              <div className="flex items-center gap-3 p-4 bg-muted/30 backdrop-blur-sm rounded-lg border border-border/50">
                <Calendar className="h-4 w-4 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">Graduação</p>
                  <p className="text-sm font-medium">2021 - 2026</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-muted/30 backdrop-blur-sm rounded-lg border border-border/50">
                <GraduationCap className="h-4 w-4 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">Instituição</p>
                  <p className="text-sm font-medium">UniSenaiPR</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-muted/30 backdrop-blur-sm rounded-lg border border-border/50">
                <Code className="h-4 w-4 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">Portfolio</p>
                  <p className="text-sm font-medium">{Math.floor(projects.length / 10) * 10}+ Projetos</p>
                </div>
              </div>
            </div>
          </div>

          {isDesktop && (
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
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />
                <div className="relative z-10 aspect-square rounded-full overflow-hidden border-4 border-border shadow-2xl">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1645947091786-4399f228f5f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                    alt="Eric Yuji Ikeda"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}

export function Projects() {
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAllGitHubProjects() {
      try {
        let page = 1;
        let per_page = 100;
        let allRepos: Project[] = [];
        let fetchMore = true;

        while (fetchMore) {
          const res = await fetch(
            `https://api.github.com/users/${MY_GITHUB_USERNAME}/repos?per_page=${per_page}&page=${page}`
          );
          const data: any[] = await res.json();

          if (data.length === 0) {
            fetchMore = false;
            break;
          }

          const githubProjects = data.map((repo) => ({
            id: repo.id,
            name: repo.name,
            html_url: repo.html_url,
            description: repo.description || "Sem descrição",
            language: repo.language,
          }));

          allRepos = [...allRepos, ...githubProjects];

          if (data.length < per_page) fetchMore = false;
          else page++;
        }

        if (allRepos.length >= MIN_GITHUB_PROJECTS_TO_UPDATE) {
          const combinedProjects = [...initialProjects];
          allRepos.forEach((p) => {
            if (!combinedProjects.find((cp) => cp.id === p.id)) combinedProjects.push(p);
          });

          setProjects(combinedProjects);
        }
      } catch (error) {
        console.error("Erro ao buscar projetos do GitHub:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchAllGitHubProjects();
  }, []);

  return (
    <section id="projects" className="py-20 bg-muted/5">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8">Projetos</h2>
        {loading && <p>Carregando projetos...</p>}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <motion.a
              key={project.id}
              href={project.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-white rounded-xl border border-border shadow hover:shadow-lg transition"
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
              <p className="text-sm mb-2">{project.description}</p>
              {project.language && (
                <span className="text-xs font-medium bg-primary/20 text-primary px-2 py-1 rounded">
                  {project.language}
                </span>
              )}
            </motion.a>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button onClick={() => window.open(`https://github.com/${MY_GITHUB_USERNAME}`, "_blank")}>
            Ver todos no GitHub
          </Button>
        </div>
      </div>
    </section>
  );
}
