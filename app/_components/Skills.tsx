import { ReactLogo } from "@/components/icons/ReactLogo";
import { CplusplusLogo } from "@/components/icons/CplusplusLogo";
import { PythonLogo } from "@/components/icons/PythonLogo";
import { JavaScriptLogo } from "@/components/icons/JavaScriptLogo";

import { Section } from "./Section";
import { Badge } from "@/components/ui/badge";
import { Code } from "./Code";
import Link from "next/link";

export const Skills = () => {
  return (
    <Section className="flex flex-col items-start gap-6 p-6 md:p-10 rounded-2xl">
      {/* Badge Skills */}
      <Badge
        variant={"outline"}
        className="text-2xl px-6 py-3 rounded-full bg-gray-800 text-gray-300 border border-gray-600 shadow-md 
        hover:bg-gray-700 hover:text-white transition-all duration-300"
      >
        Skills
      </Badge>

      {/* Titre */}
      <h2 className="text-4xl font-bold tracking-tight">
        I love working on...
      </h2>

      {/* Grid des compétences */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        
        {/* React */}
        <div className="flex flex-col items-center hover:bg-gray-800 p-6 rounded-xl shadow-md 
          hover:shadow-xl transition-shadow duration-300">
          <ReactLogo
            size={48}
            className="hover:animate-spin"
            style={{ animationDuration: "4s", animationTimingFunction: "linear" }}
          />
          <h3 className="mt-4 text-2xl font-semibold">React</h3>
          <p className="text-sm text-gray-400 text-center">
            My main framework is{" "}
            <Link href="https://www.react.dev/" target="_blank" rel="noopener noreferrer">
              <Code>React</Code>
            </Link>. I also love working with the framework{" "}
            <Link href="https://www.nextjs.org/" target="_blank" rel="noopener noreferrer">
              <Code>Next.js</Code>
            </Link> for full-stack development.
          </p>
        </div>

        {/* C++ */}
        <div className="flex flex-col items-center hover:bg-gray-800 p-6 rounded-xl shadow-md 
          hover:shadow-xl transition-shadow duration-300">
          <CplusplusLogo
            size={48}
            className="hover:animate-bounce"
            style={{ animationDuration: "2s" }}
          />
          <h3 className="mt-4 text-2xl font-semibold">C++</h3>
          <p className="text-sm text-gray-400 text-center px-2">
            I have been working with{" "}
            <Link href="https://www.cplusplus.com/" target="_blank" rel="noopener noreferrer">
              <Code>C++</Code>
            </Link> for 7 months. I love its power and efficiency.
          </p>
        </div>

        {/* Python */}
        <div className="flex flex-col items-center hover:bg-gray-800 p-6 rounded-xl shadow-md 
          hover:shadow-xl transition-shadow duration-300">
          <PythonLogo
            size={48}
            className="hover:animate-sway"
            style={{ animationDuration: "2.5s", animationTimingFunction: "ease-in-out" }}
          />
          <h3 className="mt-4 text-2xl font-semibold">Python</h3>
          <p className="text-sm text-gray-400 text-center">
            I&apos;ve been using{" "}
            <Link href="https://www.python.org/" target="_blank" rel="noopener noreferrer">
              <Code>Python</Code>
            </Link> for 3 years, leveraging its versatility in web, data science, and automation.
          </p>
        </div>

        {/* JavaScript */}
        <div className="flex flex-col items-center hover:bg-gray-800 p-6 rounded-xl shadow-md 
          hover:shadow-xl transition-shadow duration-300">
          <JavaScriptLogo
            size={48}
            className="hover:animate-wiggle"
            style={{ animationDuration: "2s" }}
          />
          <h3 className="mt-4 text-2xl font-semibold">JavaScript</h3>
          <p className="text-sm text-gray-400 text-center">
            I&apos;ve been working with{" "}
            <Link href="https://www.javascript.com/" target="_blank" rel="noopener noreferrer">
              <Code>JavaScript</Code>
            </Link> for 2 years, building interactive and dynamic web experiences.
          </p>
        </div>
      </div>
    </Section>
  );
};
