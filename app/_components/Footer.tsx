"use client";

import { Section } from "./Section";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUp, Github, Heart, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      {/* Main Footer Content */}
      <Section className="py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand/Logo Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center md:items-start space-y-4"
          >
            <div className="flex items-center space-x-2">
              <span className="font-bold text-2xl tracking-tight">
                <span className="text-primary">Y</span>
                <span>M</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs text-center md:text-left">
              Software engineering student passionate about building innovative solutions, tackling challenging problems, and continuously improving my skills in software design and development.
            </p>
          </motion.div>

          {/* Links Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center md:items-start space-y-4"
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Navigation
            </h3>
            <div className="flex flex-col items-center md:items-start space-y-2">
              {[
                { name: "Home", href: "#" },
                { name: "Projects", href: "#projects" },
                { name: "Skills", href: "#skills" },
                { name: "Contact", href: "#contact" },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Connect Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col items-center md:items-start space-y-4"
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Connect
            </h3>
            <div className="flex items-center space-x-3">
              <Link
                href="https://github.com/mrzefix23"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 rounded-full hover:bg-primary/10 hover:text-primary transition-all"
                >
                  <Github size={18} />
                </Button>
              </Link>
              <Link
                href="https://www.linkedin.com/in/yanis-mahdi-933a37238/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 rounded-full hover:bg-primary/10 hover:text-primary transition-all"
                >
                  <Linkedin size={18} />
                </Button>
              </Link>
              <Link href="mailto:yanismahdi.net@outlook.fr">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 rounded-full hover:bg-primary/10 hover:text-primary transition-all"
                >
                  <Mail size={18} />
                </Button>
              </Link>
            </div>
            <p className="text-sm text-muted-foreground">
              Feel free to reach out anytime
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Bottom Bar */}
      <div className="border-t border-border/50">
        <Section className="py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center flex items-center gap-1">
            © {currentYear} Yanis Mahdi. Made with{" "}
            <Heart
              size={12}
              className="text-primary fill-primary animate-pulse"
            />{" "}
            in Bordeaux, France.
          </p>
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={scrollToTop}
              className={cn(
                "h-8 w-8 rounded-full hover:bg-primary/10 hover:text-primary",
                "group transition-all duration-300"
              )}
            >
              <ArrowUp
                size={16}
                className="group-hover:-translate-y-1 transition-transform"
              />
              <span className="sr-only">Back to top</span>
            </Button>
          </div>
        </Section>
      </div>
    </footer>
  );
};
