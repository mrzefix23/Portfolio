"use client";

import { Section } from "./Section";
import Link from "next/link";
import { Code } from "./Code";
import SplitText from "../TextAnimations/SplitText/SplitText";
import BlurText from "../TextAnimations/BlurText/BlurText";

const handleAnimationComplete = () => {
  console.log("Animation completed!");
};

export const Hero = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <div className="flex-[3] w-full flex flex-col gap-2">
        <BlurText
          text="Yanis Mahdi"
          delay={80}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="font-caption font-bold text-6xl text-primary"
        />
        <div className="w-full text-left">
          <SplitText
            text="Software Engineering Student"
            className="text-2xl font-caption tracking-tight"
            delay={30}
            animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
            animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
            threshold={0.2}
            rootMargin="10px"
            onLetterAnimationComplete={handleAnimationComplete}
          />
        </div>
        <p className="text-base">
          I love coding in{" "}
          <Link
            href="https://www.react.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
          <Code className="inline-flex items-center gap-1">React</Code></Link>, currently
          studying at{" "}
          <Link
            href="https://www.u-bordeaux.fr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Code className="inline-flex items-center gap-1">
              Université de Bordeaux
            </Code>{" "}
          </Link>. Living in{" "}
          <Code className="inline-flex items-center gap-1">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/langfr-225px-Flag_of_France.svg.png"
              style={{ width: 16, height: "auto" }}
              alt="France's flag"
            />
            France
          </Code>{" "}
        </p>
      </div>
      <div className="flex-[2] max-md:m-auto ml-auto">
        <img
          src="https://media.licdn.com/dms/image/v2/D4E03AQErGn741UDqag/profile-displayphoto-shrink_800_800/B4EZSoWSIuG0Ac-/0/1737991201950?e=1743638400&v=beta&t=lXWo7OJ_T6pcrDEIb_A0ulzjWxqnaOG3nqQH5r8d9DQ"
          className="w-full h-auto max-w-xs max-md:w-56 rounded-full bg-transparent"
          alt="Yanis Mahdi's profile picture"
        />
      </div>
    </Section>
  );
};
