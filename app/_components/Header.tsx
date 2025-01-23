import { GithubIcon } from "@/components/icons/GithubIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { Section } from "./Section";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const Header = () => {
  return (
    <header className="sticky top-0 py-4 z-50 w-screen shadow backdrop-blur-md">
      <Section className="flex justify-between items-center">
        {/* Espace gauche */}
        <div className="flex-1" />

        {/* Logos alignés complètement à droite */}
        <div className="flex justify-end flex-1">
          <ul className="flex gap-4">
            <Link
              href="https://github.com/mrzefix23"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "p-2 rounded-full hover:scale-110 transition-transform duration-300"
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon size={20} className="text-foreground" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/yanis-mahdi-933a37238/"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "p-2 rounded-full hover:scale-110 transition-transform duration-300"
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon size={20} className="text-foreground" />
            </Link>
          </ul>
        </div>
      </Section>
    </header>
  );
};
