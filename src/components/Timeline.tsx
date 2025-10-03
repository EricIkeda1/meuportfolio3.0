import React from "react";
import { motion } from "motion/react";
import { Calendar } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { timelineEvents, TimelineEvent } from "../data/TimeLineData";

export function Timeline() {
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
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 overflow-hidden">
            <motion.div
              initial={{ height: "0%" }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 3, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="absolute left-0 top-0 w-full bg-gradient-to-b from-primary to-green-400 rounded-full"
            />
          </div>

          <div className="space-y-6 md:space-y-8">
            {timelineEvents.map((event: TimelineEvent, index: number) => (
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
                              w-4 h-4 ${event.dotColor} rounded-full z-20 border-2 border-background`}
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
                          className={`h-4 w-4 md:h-5 md:w-5 ${event.iconColor}`}
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
                      {event.achievements.map(
                        (achievement: string, achievementIndex: number) => (
                          <Badge
                            key={achievementIndex}
                            variant="secondary"
                            className="text-xs"
                          >
                            {achievement}
                          </Badge>
                        )
                      )}
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
