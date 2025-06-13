import { useState } from "react";
import { LucideIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

export type SideProjectProps = {
  Logo: LucideIcon;
  title: string;
  description: string;
  url: string;
  image: string;
  liveUrl?: string;
  technologies?: string[];
};

export const SideProject = (props: SideProjectProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-5 p-5 rounded-lg transition-all hover:bg-accent/20 hover:shadow-lg cursor-pointer border border-transparent hover:border-primary/30 group"
      >
        <span className="bg-primary/10 text-primary p-3 rounded-md shadow-sm group-hover:shadow-md transition-all">
          <props.Logo size={22} />
        </span>
        <div className="flex flex-col gap-1">
          <p className="text-lg font-semibold group-hover:text-primary transition-colors">{props.title}</p>
          <p className="text-sm text-muted-foreground line-clamp-2">{props.description}</p>
        </div>
      </motion.div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="w-full max-w-4xl p-6 bg-background rounded-lg shadow-xl border border-border/50 sm:max-h-[85vh] overflow-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <DialogTitle className="text-2xl font-bold mb-2 flex items-center gap-3">
              <span className="p-2 rounded-full bg-primary/10">
                <props.Logo size={20} className="text-primary" />
              </span>
              {props.title}
            </DialogTitle>
            
            <DialogDescription className="text-muted-foreground mb-6">
              {props.description}
            </DialogDescription>
            
            <div className="rounded-lg overflow-hidden shadow-lg mb-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative aspect-video"
              >
                <Image
                  src={props.image}
                  alt={props.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 800px"
                  priority
                />
              </motion.div>
            </div>
            
            {props.technologies && props.technologies.length > 0 && (
              <div className="mb-6">
                <h4 className="text-sm font-medium mb-2">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {props.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 text-xs rounded-full bg-accent/30 text-accent-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            <div className="flex flex-wrap gap-3 justify-end">
              <Link
                href={props.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="gap-2">
                  <Github size={16} />
                  View Source
                </Button>
              </Link>
              
              {props.liveUrl && (
                <Link
                  href={props.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="default" className="gap-2">
                    <ExternalLink size={16} />
                    Live Demo
                  </Button>
                </Link>
              )}
            </div>
          </motion.div>
        </DialogContent>
      </Dialog>
    </>
  );
};
