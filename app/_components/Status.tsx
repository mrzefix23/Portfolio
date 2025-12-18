"use client";

import { useState } from "react";
import { Section } from "./Section";
import { Card } from "@/components/ui/card";
import { Car, Gamepad2, GithubIcon, ChevronRight, Book, Briefcase, CalendarIcon, Mail, Linkedin, Calendar1, FolderLock, Dice6, ExternalLink } from "lucide-react";
import { SideProjectProps } from "./SideProjects";
import { EducationS } from "./Education";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { TechBadge } from "./TechBadge";

// Animation variants
const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export const Status = () => {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  return (
    <Section className="flex flex-col gap-12">
      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">My <span className="text-primary">Portfolio</span></h2>
        <p className="text-muted-foreground">Explore my projects, education, and ways to connect with me.</p>
      </motion.div>

      {/* Main Content */}
      <div className="flex max-md:flex-col items-start gap-6">
        {/* Projects Section */}
        <motion.div 
          className="flex-[3] w-full"
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Card className="w-full p-6 border border-border/40 hover:border-primary/20 transition-all duration-300 overflow-hidden shadow-md hover:shadow-lg">
            <div className="mb-6">
              <h3 className="text-2xl font-bold">Personal Projects</h3>
              <p className="text-muted-foreground text-sm mt-1">A showcase of my personal work</p>
            </div>

            <motion.div className="grid grid-cols-1 gap-6" variants={containerVariant}>
              {SIDE_PROJECTS.map((project) => (
                <motion.div 
                  key={project.title} 
                  variants={itemVariant}
                  className="group"
                >
                  <Card 
                    className={cn(
                      "overflow-hidden border-border/30 transition-all duration-300 group-hover:border-primary/50 shadow-sm group-hover:shadow-md",
                      expandedProject === project.title ? "border-primary/50" : ""
                    )}
                    onClick={() => setExpandedProject(expandedProject === project.title ? null : project.title)}
                  >
                    <div className="flex flex-col md:flex-row">
                      {/* Project Image */}
                      <div className="relative md:w-1/3 aspect-video md:aspect-square">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-primary/10 z-10" />
                        <Image 
                          src={project.image} 
                          alt={project.title} 
                          width={400}
                          height={225}
                          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>

                      {/* Project Info */}
                      <div className="p-4 md:p-5 md:w-2/3 flex flex-col">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <div className="p-2 rounded-full bg-primary/10">
                              <project.Logo size={18} className="text-primary" />
                            </div>
                            <h4 className="font-semibold text-lg">{project.title}</h4>
                          </div>
                          
                          <div className="flex items-center gap-2">
                            {project.liveUrl && (
                              <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full hover:bg-primary/10 hover:text-primary">
                                  <ExternalLink size={16} />
                                </Button>
                              </Link>
                            )}
                            {project.url && (
                              <Link href={project.url} target="_blank" rel="noopener noreferrer">
                                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full hover:bg-primary/10 hover:text-primary">
                                  <GithubIcon size={16} />
                                </Button>
                              </Link>
                            )}
                          </div>
                        </div>
                        
                        <p className={cn(
                          "text-muted-foreground text-sm mb-3",
                          expandedProject === project.title ? "" : "line-clamp-2 md:line-clamp-3"
                        )}>
                          {project.description}
                        </p>
                        
                        {project.technologies && project.technologies.length > 0 && (
                          <div className="flex flex-wrap gap-2 mb-3">
                            {project.technologies.map((tech) => (
                              <TechBadge key={tech} technology={tech} />
                            ))}
                          </div>
                        )}
                        
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="self-start text-primary hover:bg-primary/10 p-0 h-auto"
                        >
                          {expandedProject === project.title ? "Show less" : "Learn more"}
                          <ChevronRight 
                            size={16} 
                            className={cn(
                              "ml-1 transition-transform", 
                              expandedProject === project.title ? "rotate-90" : ""
                            )} 
                          />
                        </Button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </Card>
        </motion.div>

        <div className="flex-[2] w-full flex flex-col gap-6">
          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-6 border-border/40 hover:border-primary/20 transition-all duration-300 shadow-md hover:shadow-lg">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-primary/10">
                    <Book size={18} className="text-primary" />
                  </div>
                  <h3 className="font-bold text-xl">Education</h3>
                </div>
              </div>

              <div className="space-y-5">
                {EducationS.map((edu, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="relative pl-6 border-l border-border"
                  >
                    <div className="absolute left-0 top-1 w-3 h-3 -translate-x-1.5 rounded-full bg-primary" />
                    <div className="flex flex-col group">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 overflow-hidden rounded bg-muted flex items-center justify-center">
                          {edu.image ? (
                            <Image 
                              src={edu.image} 
                              alt={edu.title} 
                              width={48}
                              height={48}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <Briefcase size={20} className="text-muted-foreground" />
                          )}
                        </div>
                        <div>
                          <h4 className="font-medium text-base group-hover:text-primary transition-colors">
                            {edu.title}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {edu.role}
                          </p>
                        </div>
                      </div>
                      <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                        <CalendarIcon size={12} />
                        <span>{edu.date}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="p-6 border-border/40 hover:border-primary/20 transition-all duration-300 shadow-md hover:shadow-lg">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-primary/10">
                    <Mail size={18} className="text-primary" />
                  </div>
                  <h3 className="font-bold text-xl">Contact me</h3>
                </div>
              </div>

              <div className="space-y-4">
                <motion.div 
                  className="grid gap-4"
                  variants={containerVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <motion.div variants={itemVariant}>
                    <Link 
                      href="https://www.linkedin.com/in/yanis-mahdi-933a37238/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-4 p-3 rounded-lg bg-background hover:bg-accent/10 transition-all group"
                    >
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all">
                        <Linkedin size={18} className="text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium group-hover:text-primary transition-colors">LinkedIn</h4>
                        <p className="text-xs text-muted-foreground">Connect professionally</p>
                      </div>
                      <ChevronRight size={16} className="ml-auto text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </Link>
                  </motion.div>
                  
                  <motion.div variants={itemVariant}>
                    <Link 
                      href="mailto:yanismahdi.net@outlook.fr" 
                      className="flex items-center gap-4 p-3 rounded-lg bg-background hover:bg-accent/10 transition-all group"
                    >
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all">
                        <Mail size={18} className="text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium group-hover:text-primary transition-colors">Email</h4>
                        <p className="text-xs text-muted-foreground">yanismahdi.net@outlook.fr</p>
                      </div>
                      <ChevronRight size={16} className="ml-auto text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </Link>
                  </motion.div>
                  
                  <motion.div variants={itemVariant}>
                    <Link 
                      href="https://github.com/mrzefix23" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-4 p-3 rounded-lg bg-background hover:bg-accent/10 transition-all group"
                    >
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all">
                        <GithubIcon size={18} className="text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium group-hover:text-primary transition-colors">GitHub</h4>
                        <p className="text-xs text-muted-foreground">Check out my repositories</p>
                      </div>
                      <ChevronRight size={16} className="ml-auto text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

const SIDE_PROJECTS: SideProjectProps[] = [
  {
    Logo: Calendar1,
    title: "TaskForge",
    description: "TaskForge is a web-based project management platform that centralizes team workflows and boosts productivity. It lets you create and organize projects, manage issues and tasks, collaborate in real time, and track work progress efficiently. Built with Agile practices in mind, it supports sprint planning and version tracking, making it suitable for structured development cycles and long-term planning.",
    url: "https://github.com/mrzefix23/TaskForge_Dev",
    liveUrl: "https://taskforge.yanismahdi.com/",
    image: "/images/taskforge.webp",
    technologies: ["Angular", "Spring Boot", "PostgreSQL"],
  },
  {
    Logo: FolderLock,
    title: "CNRS FullStack Portal",
    description: "Developed and maintained a large-scale IT portal for CNRS during a 4-month internship. Upgraded the tech stack (React, Next.js) to improve scalability and maintainability, integrated SSO via Keycloak, and redesigned the UI/UX for a modern, responsive interface. Implemented alerting modules and a favorites system to streamline workflows, integrated SSO via Keycloak, and redesigned the UI/UX for a modern, responsive interface. Implemented alerting modules and a favorites system to streamline workflows.",
    image: "/images/portal.webp",
    technologies: ["React", "Next.js","MySQL", "Keycloak"],
  },
  {
    Logo: Dice6,
    title: "Checkers",
    description: "Developed a checkers game from scratch using bitboards for efficient board representation, and implemented an AI opponent powered by Minimax and Alpha-Beta pruning algorithms.",
    url: "https://github.com/mrzefix23/Checkers",
    image: "/images/checkers.webp",
    technologies: ["Python"],
  },
  {
    Logo: Gamepad2,
    title: "Takuzu",
    description: "A logic-based puzzle game that challenges your strategic thinking and problem-solving skills. Players must fill a grid with 0s and 1s following specific rules, making this game an excellent exercise for logical reasoning.",
    url: "https://github.com/mrzefix23/Takuzu",
    image: "/images/takuzu.webp",
    technologies: ["C", "JavaScript", "HTML", "CSS"],
  },
  {
    Logo: Car,
    title: "Ferrari's Lodge",
    description: "A sleek and modern website created for a fictional luxury Ferrari lodge, featuring an interactive gallery where users can upload, delete, and explore multiple Ferrari images. Users can also add custom car drawings made directly on the website using an integrated canvas tool.",
    url: "https://github.com/mrzefix23/ferrari-s_loge",
    image: "/images/ferrari.webp",
    technologies: ["Vue", "Spring Boot", "HTML", "CSS"],
  },
];
