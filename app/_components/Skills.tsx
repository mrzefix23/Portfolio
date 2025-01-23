import { ReactLogo } from "@/components/icons/ReactLogo";
import { CplusplusLogo } from "@/components/icons/CplusplusLogo";
import { PythonLogo } from "@/components/icons/PythonLogo";
import { JavaScriptLogo } from "@/components/icons/JavaScriptLogo";

import { Section } from "./Section";
import { Badge } from "@/components/ui/badge";
import { Code } from "./Code";

export const Skills = () => {
  return (
    <Section className="flex flex-col items-start gap-4">
      <Badge variant={"outline"}
        className="text-lg px-4 py-2 rounded-lg">Skills</Badge>
      <h2 className="pb-2 text-4xl font-semibold tracking-tight first:mt-0">
        I love working on...
      </h2>
      <div className="flex max-md:flex-col gap-4">
        {/* React Logo */}
        <div className="flex flex-col gap-2 flex-1">
          <ReactLogo
            size={42}
            className="animate-spin"
            style={{
              animationDuration: "4s",
              animationTimingFunction: "linear",
            }}
          />
          <h3 className="text-2xl font-semibold tracking-tight">React</h3>
          <p className="text-sm text-muted-foreground">
            My main framework is <Code>React</Code>. And I also love working with <Code>Next.js</Code> as a backend and frontend framework.
          </p>
        </div>
        {/* C++ Logo */}
        <div className="flex flex-col gap-2 flex-1">
          <CplusplusLogo
            size={42}
            className="animate-bounce-rotate"
            style={{
              animationDuration: "2s", // Contrôle de la vitesse de l'animation
            }}
          />
          <h3 className="text-2xl font-semibold tracking-tight">C++</h3>
          <p className="text-sm text-muted-foreground">
            I have been working with <Code>C++</Code> for 2 years now. I love it because it&apos;s a very powerful language.
          </p>
        </div>
        {/* Python Logo */}
        <div className="flex flex-col gap-2 flex-1">
          <PythonLogo
            size={42}
            className="animate-scale-rotate"
            style={{
              animationDuration: "3s",
            }}
          />
          <h3 className="text-2xl font-semibold tracking-tight">Python</h3>
          <p className="text-sm text-muted-foreground">
            I&apos;ve also been working with <Code>Python</Code> for 3 years, appreciating its versatility and simplicity for a wide range of applications.
          </p>
        </div>
        {/* JavaScript Logo */}
        <div className="flex flex-col gap-2 flex-1">
          <JavaScriptLogo
            size={42}
            className="animate-wiggle"
            style={{
              animationDuration: "1.5s",
            }}
          />
          <h3 className="text-2xl font-semibold tracking-tight">JavaScript</h3>
          <p className="text-sm text-muted-foreground">
            I&apos;ve been working with <Code>JavaScript</Code> for 3 years. It&apos;s my go-to language for dynamic and interactive web development, enabling me to build rich user interfaces.
          </p>
        </div>
      </div>
    </Section>
  );
};
