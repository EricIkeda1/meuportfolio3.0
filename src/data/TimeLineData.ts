import { GraduationCap, BookOpen, Users } from "lucide-react";
import React from "react";

export type TimelineEvent = {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  dotColor: string;
  iconColor: string;
  achievements: string[];
};

export const timelineEvents: TimelineEvent[] = [
  {
    year: "2021/2",
    title: "Início da Graduação (Remoto) – 2º Período",
    subtitle: "Faculdade da Indústria Senai",
    description:
      "Início da jornada acadêmica em Engenharia de Software com aulas remotas devido à pandemia, explorando fundamentos de programação e lógica computacional.",
    icon: GraduationCap,
    dotColor: "bg-blue-500",
    iconColor: "text-blue-500",
    achievements: [
      "Design e Aplicações de Engenharia de Software",
      "Estatística Orientada a Ciência de Dados",
      "Jornada de Aprendizagem – Requisitos...",
      "Matemática Discreta e Finita",
    ],
  },
  {
    year: "2023/1",
    title: "Aulas Presenciais e Primeiros Projetos - 3° Período",
    subtitle: "Estruturas",
    description:
      "Transição para aulas presenciais, aprofundamento em estruturas de dados, projetos orientados a objetos e experiência do usuário.",
    icon: BookOpen,
    dotColor: "bg-green-500",
    iconColor: "text-green-500",
    achievements: [
      "Estrutura e Armazenamentos de Dados",
      "Jornada de Aprendizagem – Experiência de Usuário...",
      "Projeto de Sistemas Orientados a Objetos",
      "Design de Estruturas de Busca e Armazenamento",
    ],
  },
  {
    year: "2023/2",
    title: "4° Período",
    subtitle: "Faculdade da Indústria Senai → UniSenai PR",
    description:
      "Desenvolvimento de competências em modelagem de software e bancos de dados não relacionais.",
    icon: Users,
    dotColor: "bg-purple-500",
    iconColor: "text-purple-500",
    achievements: [
      "Concepção e Estruturação de Busca e Armazenamento...",
      "Jornada de Aprendizagem – Estratégias, Compliance...",
      "Modelagem de Software",
      "Projeto de Banco de Dados Não Relacionais",
    ],
  },
  {
    year: "2024/1",
    title: "5° Período",
    subtitle: "Redes e Web Frontend",
    description:
      "Início do desenvolvimento em web frontend, inteligência artificial aplicada e métodos quantitativos.",
    icon: BookOpen,
    dotColor: "bg-orange-500",
    iconColor: "text-orange-500",
    achievements: [
      "Redes e Infraestruturas Conectadas",
      "Web Frontend Technologies",
      "Inteligência Artificial Aplicada",
      "Jornada de Aprendizagem – Métodos Quantitativos...",
    ],
  },
  {
    year: "2024/2",
    title: "6° Período",
    subtitle: "Backend e Mobile",
    description:
      "Aprofundamento em backend, desenvolvimento mobile e otimização de sistemas.",
    icon: Users,
    dotColor: "bg-cyan-500",
    iconColor: "text-cyan-500",
    achievements: [
      "Backend Development",
      "Desenvolvimento Mobile",
      "Jornada de Aprendizagem – Otimização de Sistemas e IOT",
      "Machine Learning e Visão Computacional",
    ],
  },
  {
    year: "2025/1",
    title: "7° Período",
    subtitle: "Arquitetura, Data Science e Estágio",
    description:
      "Experiência prática em arquitetura de software, data science, estágio supervisionado e gerência de qualidade.",
    icon: BookOpen,
    dotColor: "bg-green-500",
    iconColor: "bg-green-500",
    achievements: [
      "Arquitetura de Software",
      "Data Science",
      "Estágio Supervisionado",
      "Jornada de Aprendizagem - Gerência de Qualidade",
      "Sistemas Operacionais de Tempo Real",
    ],
  },
  {
    year: "2025/2",
    title: "8° Período",
    subtitle: "IoT, Cloud e Segurança",
    description:
      "Especialização em IoT, cloud computing, segurança e computação gráfica.",
    icon: Users,
    dotColor: "bg-orange-500",
    iconColor: "bg-orange-500",
    achievements: [
      "Arquitetura de Sistemas IoT e Cloud Computing",
      "Cybersecurity",
      "Jornada de Aprendizagem – Segurança e Nuvem",
      "Computação Gráfica e Processamento de Imagens",
    ],
  },
  {
    year: "2025/2",
    title: "DPs",
    subtitle: "Refazendo disciplinas",
    description:
      "Refazendo as disciplinas essenciais com aprendizado em desenvolvimento de aplicações e introdução à visão computacional e machine learning.",
    icon: BookOpen,
    dotColor: "bg-cyan-500",
    iconColor: "bg-cyan-500",
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
    dotColor: "bg-indigo-500",
    iconColor: "text-indigo-500",
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
    dotColor: "bg-pink-500",
    iconColor: "text-pink-500",
    achievements: ["Diploma", "Portfolio Completo", "Pronto para o Mercado"],
  },
];
