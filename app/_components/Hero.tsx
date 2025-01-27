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
    <Section className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 px-4 md:px-8 py-12">
      {/* Texte principal */}
      <div className="flex-[3] w-full flex flex-col gap-6 text-center md:text-left">
        <BlurText
          text="Yanis Mahdi"
          delay={150}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="font-caption font-bold text-4xl md:text-6xl text-primary"
        />
        <div className="w-full">
          <SplitText
            text="Software Engineering Student"
            className="text-xl md:text-3xl font-caption tracking-tight"
            delay={100}
            animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
            animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
            threshold={0.2}
            rootMargin="10px"
            onLetterAnimationComplete={handleAnimationComplete}
          />
        </div>
        <p className="text-sm md:text-base leading-relaxed">
          I love coding in{" "}
          <Code className="inline-flex items-center gap-1">React</Code>, currently
          studying at{" "}
          <Link
            href="https://www.u-bordeaux.fr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Code className="inline-flex items-center gap-1">
              University of Bordeaux
            </Code>{" "}
          </Link>
          . Living in{" "}
          <Code className="inline-flex items-center gap-1">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/langfr-225px-Flag_of_France.svg.png"
              className="w-4 h-auto"
              alt="France's flag"
            />
            France
          </Code>{" "}
        </p>
      </div>

      {/* Image du profil */}
      <div className="flex-[2] flex justify-center md:justify-end">
        <img
          src="https://media.licdn.com/dms/image/v2/D4E03AQErGn741UDqag/profile-displayphoto-shrink_800_800/B4EZSoWSIuG0Ac-/0/1737991201950?e=1743638400&v=beta&t=lXWo7OJ_T6pcrDEIb_A0ulzjWxqnaOG3nqQH5r8d9DQ"
          className="w-40 h-40 md:w-56 md:h-56 rounded-full bg-transparent object-cover"
          alt="Yanis Mahdi's profile picture"
        />
      </div>
    </Section>
  );
};
