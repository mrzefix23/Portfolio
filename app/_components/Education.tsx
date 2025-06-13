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