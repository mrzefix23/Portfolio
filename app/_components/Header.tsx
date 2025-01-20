import { GithubIcon} from "@/components/icons/GithubIcon";
import { LinkedInIcon} from "@/components/icons/LinkedInIcon";
import { Section } from "./Section";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const Header = () => {
  return (
    <header className="sticky top-0 py-4">
      <Section className="flex items-baseline">
        <div className="flex-1" />
        <ul>
          <Link
            href="https://github.com/mrzefix23"
            className={cn(buttonVariants({variant: "outline"}),"size-8 p-0" )}
            >
              <GithubIcon size={12} className="text-foreground" />
              </Link>
            <Link
            href="https://www.linkedin.com/in/yanis-mahdi-933a37238/"
            className={cn(buttonVariants({variant: "outline"}),"size-8 p-0" )}
            >
              <LinkedInIcon size={12} className="text-foreground" />
              </Link>
        </ul>
      </Section>
    </header>
  );
};
