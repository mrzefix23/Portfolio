import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export const ContactCard = (props: {
  image: string;
  mediumImage: string;
  name: string;
  description: string;
  url?: string;
  className?: string;
}) => {
  return (
    <Link
      href={props.url || "#"}
      className={cn("w-full block", props.className)}
      target="_blank"
      rel="noopener noreferrer"
    >
      <motion.div
        whileHover={{ scale: 1.03, x: 5 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
      >
        <Card className="p-3 bg-background hover:bg-accent/10 transition-all duration-300 group flex items-center gap-4 border border-border/30 hover:border-primary/30">
          <div className="relative w-10 h-10 shrink-0">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-md group-hover:bg-primary/30 transition-all" />
            <img
              src={props.image}
              alt={`Profile picture of ${props.name}`}
              className="w-10 h-10 rounded-full object-cover relative z-10 border-2 border-background"
            />
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-background rounded-full p-0.5 border border-border/50 z-20 shadow-sm">
              <img
                src={props.mediumImage}
                alt={`${props.name} logo`}
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>

          <div className="flex-1">
            <div className="flex items-center gap-1">
              <h4 className="text-base font-medium group-hover:text-primary transition-colors">
                {props.name}
              </h4>
            </div>
            <p className="text-xs text-muted-foreground">
              {props.description || `Connect with me on ${props.name}`}
            </p>
          </div>

          <ChevronRight
            className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300"
            size={16}
          />
        </Card>
      </motion.div>
    </Link>
  );
};