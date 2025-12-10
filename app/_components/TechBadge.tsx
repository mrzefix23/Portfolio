import { ComponentPropsWithoutRef } from "react";
import { ReactLogo } from "@/components/icons/ReactLogo";
import { PythonLogo } from "@/components/icons/PythonLogo";
import { JavaScriptLogo } from "@/components/icons/JavaScriptLogo";
import { DockerLogo } from "@/components/icons/DockerLogo";
import { PostgreSQLIcon } from "@/components/icons/PostgreSQLIcon";
import { NextJSLogo } from "@/components/icons/NextJSLogo";
import { KeycloakLogo } from "@/components/icons/KeycloakLogo";
import { CLogo } from "@/components/icons/CLogo";
import { VueLogo } from "@/components/icons/VueLogo";
import { SpringBootLogo } from "@/components/icons/SpringBootLogo";
import { HTMLLogo } from "@/components/icons/HTMLLogo";
import { CSSLogo } from "@/components/icons/CSSLogo";
import { AngularLogo } from "@/components/icons/AngularLogo";
import { MySQLLogo } from "@/components/icons/MySQLLogo";

export type TechBadgeProps = {
  technology: string;
  size?: number;
} & ComponentPropsWithoutRef<"div">;

const techConfig: Record<
  string,
  {
    Logo: React.ComponentType<{ size?: number }>;
    bgColor: string;
    textColor: string;
  }
> = {
  React: {
    Logo: ReactLogo,
    bgColor: "bg-[#61DAFB]/10",
    textColor: "text-[#61DAFB]",
  },
  "Next.js": {
    Logo: NextJSLogo,
    bgColor: "bg-black/80",
    textColor: "text-white",
  },
  Python: {
    Logo: PythonLogo,
    bgColor: "bg-[#3776AB]/10",
    textColor: "text-[#3776AB]",
  },
  JavaScript: {
    Logo: JavaScriptLogo,
    bgColor: "bg-[#F7DF1E]/10",
    textColor: "text-[#F7DF1E]",
  },
  Docker: {
    Logo: DockerLogo,
    bgColor: "bg-[#2496ED]/10",
    textColor: "text-[#2496ED]",
  },
  PostgreSQL: {
    Logo: PostgreSQLIcon,
    bgColor: "bg-[#4169E1]/10",
    textColor: "text-[#4169E1]",
  },
  Keycloak: {
    Logo: KeycloakLogo,
    bgColor: "bg-[#4D9FDB]/10",
    textColor: "text-[#4D9FDB]",
  },
  C: {
    Logo: CLogo,
    bgColor: "bg-[#00599C]/10",
    textColor: "text-[#00599C]",
  },
  Angular: {
    Logo: AngularLogo,
    bgColor: "bg-[#DD0031]/10",
    textColor: "text-[#DD0031]",
  },
  MySQL: {
    Logo: MySQLLogo,
    bgColor: "bg-[#00546B]/10",
    textColor: "text-[#00546B]",
  },
  Vue: {
    Logo: VueLogo,
    bgColor: "bg-[#41B883]/10",
    textColor: "text-[#41B883]",
  },
  "Spring Boot": {
    Logo: SpringBootLogo,
    bgColor: "bg-[#6DB33F]/10",
    textColor: "text-[#6DB33F]",
  },
  "HTML": {
    Logo: HTMLLogo,
    bgColor: "bg-[#E44D26]/10",
    textColor: "text-[#E44D26]",
  },
    "CSS": {
    Logo: CSSLogo,
    bgColor: "bg-[#264DE4]/10",
    textColor: "text-[#264DE4]",
  },
};

export const TechBadge = ({ technology, size = 16, className = "", ...props }: TechBadgeProps) => {
  const config = techConfig[technology];

  if (!config) {
    // Fallback pour les technologies non configurées
    return (
      <div
        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-accent/30 text-accent-foreground text-xs font-medium ${className}`}
        {...props}
      >
        {technology}
      </div>
    );
  }

  const { Logo, bgColor, textColor } = config;

  return (
    <div
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full ${bgColor} ${textColor} text-xs font-medium transition-all hover:scale-105 ${className}`}
      {...props}
    >
      <Logo size={size} />
      <span>{technology}</span>
    </div>
  );
};
