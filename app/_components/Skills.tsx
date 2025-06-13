import { ReactLogo } from "@/components/icons/ReactLogo";
import { CplusplusLogo } from "@/components/icons/CplusplusLogo";
import { PythonLogo } from "@/components/icons/PythonLogo";
import { JavaScriptLogo } from "@/components/icons/JavaScriptLogo";
import { Section } from "./Section";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Code as CodeIcon } from "lucide-react";
import { cn } from "@/lib/utils";

// Animation variants
const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
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

export const Skills = () => {
  return (
    <Section className="flex flex-col items-start gap-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full text-center md:text-left"
      >
        <Badge
          variant="outline"
          className="mb-4 text-lg px-4 py-1.5 rounded-full bg-primary/10 border-primary/20 text-primary font-medium"
        >
          Skills
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
          My Technical Expertise
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto md:mx-0">
          I&apos;ve developed a diverse set of skills throughout my journey as a software engineer. 
          Here are the technologies and languages I work with most frequently.
        </p>
      </motion.div>

      {/* Main Skills Grid */}
      <motion.div
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full"
      >
        {SKILLS.map((skill) => (
          <motion.div
            key={skill.title}
            variants={itemVariant}
            className="group"
          >
            <div className="flex flex-col h-full rounded-xl border border-border/40 bg-card hover:border-primary/20 hover:shadow-lg transition-all duration-300 overflow-hidden">
              {/* Header with icon and gradient */}
              <div className="p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-xl group-hover:bg-primary/10 transition-all duration-500" />
                
                <div className="relative z-10 flex flex-col items-center">
                  <div className="mb-4 p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-all duration-300">
                    {skill.logo ? (
                      skill.logo
                    ) : (
                      <CodeIcon size={30} className="text-primary" />
                    )}
                  </div>
                  <h3 className="text-2xl font-semibold mb-1 text-center group-hover:text-primary transition-colors">
                    {skill.title}
                  </h3>
                  <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                    {skill.yearsExperience}
                  </span>
                </div>
              </div>

              {/* Skill description */}
              <div className="p-6 pt-2 flex flex-col flex-grow">
                <p className="text-sm text-muted-foreground text-center mb-4">
                  {skill.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Additional Skills */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="w-full mt-4"
      >
      </motion.div>
    </Section>
  );
};

// Skills data
const SKILLS = [
  {
    title: "React",
    logo: <ReactLogo size={30} className={cn("animate-spin", "text-primary")} style={{ animationDuration: "10s" }} />,
    yearsExperience: "2+ years experience",
    description: "Building modern, interactive UI components and full web applications with React and its ecosystem."
  },
  {
    title: "JavaScript",
    logo: <JavaScriptLogo size={30} className="text-primary animate-pulse" style={{ animationDuration: "3s" }} />,
    yearsExperience: "3+ years experience",
    description: "Crafting dynamic, responsive user experiences and implementing complex client-side functionality.",
  },
  {
    title: "C++",
    logo: <CplusplusLogo size={30} className="text-primary" />,
    yearsExperience: "2+ years experience",
    description: "Developing high-performance applications and systems with a focus on efficiency and low-level control.",
  },
  {
    title: "Python",
    logo: <PythonLogo size={30} className="text-primary" />,
    yearsExperience: "3+ years experience",
    description: "Creating scripts for automation, data analysis, backend services, and exploring machine learning concepts.",
  },
  
];
