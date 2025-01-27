import { Section } from "./Section";
import Link from "next/link";
import { Code } from "./Code";
import ShinyText from "../TextAnimations/ShinyText/ShinyText";


export const Hero = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <div className="flex-[3] w-full flex flex-col gap-2">
        <h2 className="font-caption font-bold text-6xl text-primary">
          Yanis Mahdi
        </h2>
        <ShinyText className="text-3xl font-caption tracking-tight first:mt-0" text="Software Engineering Student" disabled={false} speed={6} />
        <p className="text-base">
          I love coding in{" "}
          <Code className="inline-flex items-center gap-1">React</Code>{" "},
          currently studying at{" "}
          <Link href="https://www.u-bordeaux.fr/"
          target="_blank"
          rel="noopener noreferrer">
          <Code className="inline-flex items-center gap-1">University of Bordeaux</Code>{" "}
          </Link>
          . Living in{" "}
          <Code className="inline-flex items-center gap-1">
            <img src ="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/langfr-225px-Flag_of_France.svg.png" style= {{width:16,height:"auto"}} alt="France's flag" />France</Code>{" "}
        </p>
      </div>
      <div className="flex-[2] max-md:m-auto ml-auto">
        <img
          src="https://media.licdn.com/dms/image/v2/D4D03AQFryKnXEfwwyw/profile-displayphoto-shrink_400_400/B4DZSnEclOG8Ag-/0/1737969748769?e=1743638400&v=beta&t=SeWuIJmerRRnMfu7EV5A3EMt6TDBujRKTH32qiJpGmA"
          className="w-full h-auto max-w-xs max-md:w-56 rounded-full bg-transparent"
          alt="Yanis Mahdi's profile picture"
        />
      </div>
    </Section>
  );
};
