import { Section } from "./Section";
import Link from "next/link";
import { Code } from "./Code";


export const Hero = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <div className="flex-[3] w-full flex flex-col gap-2">
        <h2 className="font-caption font-bold text-5xl text-primary">
          Yanis Mahdi
        </h2>
        <h3 className="text-3xl font-caption">
          Software engineering student
        </h3>
        <p className="text-base">
          I love coding in{" "}
          <Code className="inline-flex items-center gap-1">React</Code>{" "},
          currently studying at{" "}
          <Link href="https://www.u-bordeaux.fr/"
          target="_blank"
          rel="noopener noreferrer">
          <Code className="inline-flex items-center gap-1">Université de Bordeaux</Code>{" "}
          </Link>
          . Living in
          <Code className="inline-flex items-center gap-1">
            <img src ="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/langfr-225px-Flag_of_France.svg.png" style= {{width:16,height:"auto"}} alt="France's flag" /> France</Code>{" "}
        </p>
      </div>
      <div className="flex-[2] max-md:m-auto ml-auto">
        <img
          src="https://img.pikbest.com/ai/illus_our/20230421/6469a1d10e3ab9fdc08be511c9a6ab3c.jpg!w700wp"
          className="w-full h-auto max-w-xs max-md:w-56"
          alt="Yanis Mahdi's profile picture"
        />
      </div>
    </Section>
  );
};
