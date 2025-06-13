import { GithubIcon } from "@/components/icons/GithubIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { Section } from "./Section";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { name: "Home", href: "#" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 py-4",
        scrolled ? "bg-background/80 backdrop-blur-lg shadow-md" : "bg-transparent"
      )}
    >
      <Section className="flex justify-between items-center">
        {/* Logo ou Marque */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-shrink-0"
        >
          <Link href="/" className="font-bold text-2xl tracking-tight">
            <span className="text-primary">Y</span>
            <span className={cn(scrolled ? "text-foreground" : "text-primary")}>M</span>
          </Link>
        </motion.div>

        {/* Navigation - Desktop */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:flex items-center space-x-8"
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "relative text-sm font-medium transition-colors hover:text-primary",
                "after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              )}
            >
              {item.name}
            </Link>
          ))}
        </motion.nav>

        {/* Boutons d'action - Desktop */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="hidden md:flex items-center space-x-4"
        >
          <Link
            href="https://github.com/mrzefix23"
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "p-2 rounded-full hover:scale-110 transition-all duration-300 hover:bg-primary/10"
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon size={20} />
          </Link>

          <Link
            href="https://www.linkedin.com/in/yanis-mahdi-933a37238/"
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "p-2 rounded-full hover:scale-110 transition-all duration-300 hover:bg-primary/10"
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon size={20} />
          </Link>

          <Link
            href="#contact"
            className={cn(
              buttonVariants({ variant: "default" }),
              "rounded-full px-5 py-1.5 bg-primary text-primary-foreground hover:bg-primary/90",
              "hover:shadow-lg hover:shadow-primary/20 transition-all duration-300",
              "relative overflow-hidden group"
            )}
          >
            <span className="relative z-10">Get in Touch</span>
            <span className="absolute top-0 left-0 w-0 h-full bg-white/20 transform -skew-x-12 group-hover:w-full transition-all duration-700 z-0"></span>
          </Link>
        </motion.div>

        {/* Mobile toggle button */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="md:hidden flex items-center"
        >
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-full"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </motion.div>
      </Section>

      {/* Mobile menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-background/90 backdrop-blur-lg border-t border-border"
        >
          <div className="py-4 px-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex items-center justify-between pt-4 border-t border-border">
              <div className="flex space-x-4">
                <Link
                  href="https://github.com/mrzefix23"
                  className={buttonVariants({ variant: "ghost", size: "icon" })}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubIcon size={20} />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/yanis-mahdi-933a37238/"
                  className={buttonVariants({ variant: "ghost", size: "icon" })}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedInIcon size={20} />
                </Link>
              </div>
              <Link
                href="#contact"
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "rounded-full relative overflow-hidden group"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="relative z-10">Contact</span>
                <span className="absolute top-0 left-0 w-0 h-full bg-white/20 transform -skew-x-12 group-hover:w-full transition-all duration-700 z-0"></span>
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
};