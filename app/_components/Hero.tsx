"use client";

import { Section } from "./Section";
import Link from "next/link";
import { Code } from "./Code";
import SplitText from "../TextAnimations/SplitText/SplitText";
import BlurText from "../TextAnimations/BlurText/BlurText";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Linkedin, Github, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import Image from "next/image";

const handleAnimationComplete = () => {
  console.log("Animation completed!");
};

export const Hero = () => {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const { scrollY } = useScroll();
  const scrollIndicatorOpacity = useTransform(scrollY, [0, 200], [1, 0]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollIndicator(false);
      } else if (window.scrollY < 50) {
        setShowScrollIndicator(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Section className="min-h-[85vh] flex flex-col md:flex-row items-center justify-center gap-8 py-16 relative">
      <motion.div
        className="flex-1 flex flex-col gap-5 max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex flex-col gap-3">
          <motion.span
            className="text-primary text-lg font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Hello, I&apos;m
          </motion.span>

          <BlurText
            text="Yanis Mahdi"
            delay={80}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="font-caption font-bold text-5xl sm:text-6xl md:text-7xl text-primary tracking-tight"
          />

          <div className="w-full text-left">
            <SplitText
              text="Software Engineering Student"
              className="text-xl sm:text-2xl md:text-3xl font-caption tracking-tight"
              delay={30}
              animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
              animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
              threshold={0.2}
              rootMargin="10px"
              onLetterAnimationComplete={handleAnimationComplete}
            />
          </div>
        </div>

        <motion.p
          className="text-base md:text-lg text-muted-foreground leading-relaxed my-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Passionate about building elegant web solutions and exploring new
          technologies. I love coding in{" "}
          <Link
            href="https://www.react.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-primary decoration-2 hover:text-primary transition-colors"
          >
            <Code className="inline-flex items-center gap-1">React</Code>
          </Link>
          , currently studying at{" "}
          <Link
            href="https://www.u-bordeaux.fr/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-primary decoration-2 hover:text-primary transition-colors"
          >
            <Code className="inline-flex items-center gap-1">
              Université de Bordeaux
            </Code>{" "}
          </Link>
          . Living in{" "}
          <Code className="inline-flex items-center gap-1">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/800px-Flag_of_France.svg.png"
              width={16}
              height={12}
              alt="France&apos;s flag"
            />
            France
          </Code>{" "}
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-4 mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Link href="#projects">
            <Button className="rounded-full px-6 py-2 h-12 bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all">
              View Projects{" "}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>

          <div className="flex gap-3">
            <Link
              href="https://github.com/mrzefix23"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="icon"
                className="rounded-full h-12 w-12 border-2 hover:border-primary hover:text-primary transition-all"
              >
                <Github className="h-5 w-5" />
              </Button>
            </Link>
            <Link
              href="https://www.linkedin.com/in/yanis-mahdi-933a37238/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="icon"
                className="rounded-full h-12 w-12 border-2 hover:border-primary hover:text-primary transition-all"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="flex-1 flex justify-center items-center relative"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="absolute w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-primary/10 blur-3xl animate-pulse" />
        <div className="relative">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 animate-pulse" />
          <div className="relative">
            <Image
              src="https://media.licdn.com/dms/image/v2/D4E03AQErGn741UDqag/profile-displayphoto-shrink_800_800/B4EZSoWSIuG0Ac-/0/1737991201950?e=1755129600&v=beta&t=QUjyIYZYy5vz_LAZSZKt5JbQqnDcsizOztJKd8N0BTI"
              width={256}
              height={256}
              className="w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full object-cover border-4 border-background"
              alt="Yanis Mahdi&apos;s profile picture"
            />
            <div
              className={cn(
                "absolute -bottom-2 -right-2 bg-background rounded-full px-4 py-2",
                "border-2 border-primary shadow-lg"
              )}
            >
              <span className="font-bold text-primary">{'<Developer />'}</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      {showScrollIndicator && (
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
          style={{ opacity: scrollIndicatorOpacity }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
        >
          <motion.p className="text-sm text-muted-foreground mb-2 font-medium">
            Scroll to discover
          </motion.p>
          <motion.div
            className="p-2 rounded-full bg-primary/10 backdrop-blur-sm"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="text-primary h-5 w-5" />
          </motion.div>
        </motion.div>
      )}
    </Section>
  );
};
