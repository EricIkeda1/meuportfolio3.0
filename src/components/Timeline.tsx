import { motion } from "motion/react";
import { Calendar, GraduationCap, BookOpen, Users } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import React from "react";

export function Timeline() {
  const timelineEvents = [
    {
      year: "2021/2",
      title: "Início da Graduação (Remoto)",
      subtitle: `UniSenaiPR - Engenharia de Software
(antiga Faculdade da Indústria Senai)`,
      description:
        "Início da jornada acadêmica em Engenharia de Software com aulas remotas devido à pandemia, explorando fundamentos de programação e lógica computacional.",
      icon: GraduationCap,
      color: "bg-blue-500",
      achievements: [
        "Design e Aplicações de Engenharia de Software",
        "Estatística Orientada a Ciência de Dados",
        "Jornada de Aprendizagem – Requisitos...",
        "Matemática Discreta e Finita",
      ],
    },
    {
      year: "2022/1",
      title: "Aulas Presenciais e Primeiros Projetos",
      subtitle: "Desenvolvimento Web e Estruturas de Dados",
      description:
        "Transição para aulas presenciais, aprofundamento em estruturas de dados, projetos orientados a objetos e experiência do usuário.",
      icon: BookOpen,
      color: "bg-green-500",
      achievements: [
        "Estrutura e Armazenamentos de Dados",
        "Jornada de Aprendizagem – Experiência de Usuário...",
        "Projeto de Sistemas Orientados a Objetos",
        "Design de Estruturas de Busca e Armazenamento",
      ],
    },
    {
      year: "2022/2",
      title: "4° Período",
      subtitle: "Banco de Dados e Modelagem de Software",
      description:
        "Desenvolvimento de competências em modelagem de software e bancos de dados não relacionais.",
      icon: Users,
      color: "bg-purple-500",
      achievements: [
        "Concepção e Estruturação de Busca e Armazenamento...",
        "Jornada de Aprendizagem – Estratégias, Compliance...",
        "Modelagem de Software",
        "Projeto de Banco de Dados Não Relacionais",
      ],
    },
    {
      year: "2023/1",
      title: "5° Período",
      subtitle: "Redes e Web Frontend",
      description:
        "Início do desenvolvimento em web frontend, inteligência artificial aplicada e métodos quantitativos.",
      icon: BookOpen,
      color: "bg-orange-500",
      achievements: [
        "Redes e Infraestruturas Conectadas",
        "Web Frontend Technologies",
        "Inteligência Artificial Aplicada",
        "Jornada de Aprendizagem – Métodos Quantitativos...",
      ],
    },
    {
      year: "2023/2",
      title: "6° Período",
      subtitle: "Backend e Mobile",
      description:
        "Aprofundamento em backend, desenvolvimento mobile e otimização de sistemas.",
      icon: Users,
      color: "bg-cyan-500",
      achievements: [
        "Backend Development",
        "Desenvolvimento Mobile",
        "Jornada de Aprendizagem – Otimização de Sistemas e IOT",
        "Machine Learning e Visão Computacional",
      ],
    },
    {
      year: "2024/1",
      title: "7° Período",
      subtitle: "Arquitetura, Data Science e Estágio",
      description:
        "Experiência prática em arquitetura de software, data science, estágio supervisionado e gerência de qualidade.",
      icon: BookOpen,
      color: "bg-red-500",
      achievements: [
        "Arquitetura de Software",
        "Data Science",
        "Estágio Supervisionado",
        "Jornada de Aprendizagem - Gerência de Qualidade",
        "Sistemas Operacionais de Tempo Real",
      ],
    },
    {
      year: "2024/2",
      title: "8° Período",
      subtitle: "IoT, Cloud e Segurança",
      description:
        "Especialização em IoT, cloud computing, segurança e computação gráfica.",
      icon: Users,
      color: "bg-purple-400",
      achievements: [
        "Arquitetura de Sistemas IoT e Cloud Computing",
        "Cybersecurity",
        "Jornada de Aprendizagem – Segurança e Nuvem",
        "Computação Gráfica e Processamento de Imagens",
      ],
    },
    {
      year: "2025/1",
      title: "1° Período (Grade Reversa)",
      subtitle: "Ciência, Tecnologia e Design de Software",
      description:
        "Início do percurso de acordo com a grade reversa, focando em ciência, tecnologia e design de software aplicado à engenharia.",
      icon: Users,
      color: "bg-yellow-500",
      achievements: [
        "Ciência, Tecnologia e Sustentabilidade",
        "Design de Software Aplicado a Engenharia",
        "Jornada de Aprendizagem - Inovação e Necessidades...",
        "Lógica Computacional",
      ],
    },
    {
      year: "2025/2",
      title: "DPs",
      subtitle: "Refazendo disciplinas",
      description:
        "Refazendo as disciplinas essenciais com aprendizado em desenvolvimento de aplicações e introdução à visão computacional e machine learning.",
      icon: BookOpen,
      color: "bg-teal-500",
      achievements: [
        "Jornada de Aprendizagem – Interface de Programação...",
        "Machine Learning e Visão Computacional",
      ],
    },
    {
      year: "2026/1 - 2026/2",
      title: "DPs e Últimos Semestres",
      subtitle: "Refazendo e concluindo matérias",
      description:
        "Refazendo disciplinas essenciais e concluindo o curso, com foco em Banco de Dados e inteligência artificial aplicada.",
      icon: BookOpen,
      color: "bg-indigo-500",
      achievements: [
        "Design de Estruturas de Busca e Armazenamento",
        "Inteligência Artificial Aplicada",
      ],
    },
    {
      year: "2026/2",
      title: "Formatura (Prevista)",
      subtitle: "Conclusão da Graduação",
      description:
        "Previsão de conclusão do curso de Engenharia de Software, pronto para novos desafios profissionais.",
      icon: GraduationCap,
      color: "bg-pink-500",
      achievements: ["Diploma", "Portfolio Completo", "Pronto para o Mercado"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <section id="timeline" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl mb-6">
            Jornada <span className="text-primary">Acadêmica</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Acompanhe minha evolução desde o início da graduação até a previsão
            de formatura, destacando os principais marcos e conquistas.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />

          <div className="space-y-6 md:space-y-8">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-start md:items-center`}
              >
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className={`absolute left-1/2 top-6 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 
                              w-4 h-4 ${event.color} rounded-full z-20 border-2 border-background`}
                />

                <div
                  className={`w-full md:w-5/12 ${
                    index % 2 === 0 ? "" : "md:text-right"
                  }`}
                >
                  <Card className="p-4 md:p-6 hover:shadow-lg transition-all duration-300 group">
                    <div
                      className={`flex items-start md:items-center gap-3 md:gap-4 mb-4 ${
                        index % 2 === 0 ? "" : "md:flex-row-reverse"
                      }`}
                    >
                      <div className="p-2 md:p-3 rounded-full border-2 border-border flex-shrink-0">
                        <event.icon
                          className={`h-4 w-4 md:h-5 md:w-5 ${event.color.replace(
                            "bg",
                            "text"
                          )}`}
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <Calendar className="h-3 w-3 md:h-4 md:w-4 text-muted-foreground flex-shrink-0" />
                          <span className="text-xs md:text-sm font-medium text-muted-foreground">
                            {event.year}
                          </span>
                        </div>
                        <h3 className="text-lg md:text-xl font-semibold group-hover:text-primary transition-colors">
                          {event.title}
                        </h3>
                        <p className="text-sm md:text-base text-primary/80">
                          {event.subtitle.split("\n").map((line, i) => (
                            <React.Fragment key={i}>
                              {line}
                              <br />
                            </React.Fragment>
                          ))}
                        </p>
                      </div>
                    </div>

                    <p className="text-sm md:text-base text-muted-foreground mb-4 leading-relaxed">
                      {event.description}
                    </p>

                    <div className="flex flex-wrap gap-1 md:gap-2">
                      {event.achievements.map((achievement, achievementIndex) => (
                        <Badge key={achievementIndex} variant="secondary" className="text-xs">
                          {achievement}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
