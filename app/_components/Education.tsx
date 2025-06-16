import { motion } from "framer-motion";
import { CalendarIcon, MapPin, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";

export type EducationProps = {
  image: string;
  title: string;
  role: string;
  date: string;
  location?: string;
  url?: string;
  description?: string;
};

export const EducationS: EducationProps[] = [
  {
    image:
      "data:image/png;base64,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",
    title: "Columbia University",
    role: "Learning AI Through Visualization",
    date: "06/2025",
    location: "Bordeaux, France",
    url: "https://badges.plus.columbia.edu/08d88230-084b-499f-9f74-402d0a19f9f9#acc.DgxudGHR",
    description:
      "Advanced course on AI visualization techniques, focusing on practical applications and theoretical foundations.",
  },
  {
    image:
      "https://media.licdn.com/dms/image/v2/C4E0BAQGXZPFarym18w/company-logo_200_200/company-logo_200_200/0/1642678074294/universite_de_bordeaux_logo?e=2147483647&v=beta&t=2xf7SibYBAEIUzDH3ZBWVQQWdlF84R0t6PADtx_9MQk",
    title: "Université de Bordeaux",
    role: "Master Software Engineering",
    date: "2024-Now",
    location: "Bordeaux, France",
    url: "https://www.u-bordeaux.fr/",
    description:
      "Advanced studies focused on software design patterns, distributed systems, and enterprise architectures.",
  },
  {
    image: "https://cdn.worldvectorlogo.com/logos/university-of-cambridge-2.svg",
    title: "University of Cambridge",
    role: "Linguaskill Certification",
    date: "01/2024",
    location: "Cambridge, UK",
    url: "https://www.cambridge.org/",
    description: "English language certification with high proficiency score.",
  },
  {
    image:
      "https://media.licdn.com/dms/image/v2/C4E0BAQGXZPFarym18w/company-logo_200_200/company-logo_200_200/0/1642678074294/universite_de_bordeaux_logo?e=2147483647&v=beta&t=2xf7SibYBAEIUzDH3ZBWVQQWdlF84R0t6PADtx_9MQk",
    title: "Université de Bordeaux",
    role: "Computer Science Degree",
    date: "2021-2024",
    location: "Bordeaux, France",
    url: "https://www.u-bordeaux.fr/",
    description:
      "Foundational education in algorithms, data structures, networking and software engineering principles.",
  },
];

export const Education = (props: EducationProps) => {
  return (
    <motion.div
      whileHover={{ x: 4 }}
      transition={{ duration: 0.2 }}
      className="group"
    >
      <div className="flex items-start gap-4 p-3 rounded-lg hover:bg-accent/10 transition-colors">
        <div className="w-10 h-10 overflow-hidden rounded-md flex-shrink-0 border border-border/30 shadow-sm">
          <Image
            src={props.image}
            alt={props.title}
            width={40}
            height={40}
            className="w-full h-full object-contain group-hover:scale-110 transition-all duration-500"
          />
        </div>

        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div>
              <h3
                className={cn(
                  "font-medium text-base transition-colors flex items-center gap-2",
                  props.url ? "group-hover:text-primary" : ""
                )}
              >
                {props.title}
                {props.url && (
                  <Link
                    href={props.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink
                      size={14}
                      className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </Link>
                )}
              </h3>
              <p className="text-sm font-medium text-primary">{props.role}</p>
            </div>
            <p className="text-xs text-muted-foreground flex items-center gap-1.5">
              <CalendarIcon size={12} /> {props.date}
            </p>
          </div>

          {props.location && (
            <p className="text-xs flex items-center gap-1.5 text-muted-foreground mt-1">
              <MapPin size={12} /> {props.location}
            </p>
          )}

          {props.description && (
            <p className="text-xs text-muted-foreground mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
              {props.description}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
};