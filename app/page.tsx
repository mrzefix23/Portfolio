"use client";

import { motion } from "framer-motion";
import { Header } from "./_components/Header";
import { Hero } from "./_components/Hero";
import { Spacing } from "./_components/Spacing";
import { Status } from "./_components/Status";
import { Skills } from "./_components/Skills";
import { Contact } from "./_components/Contact";
import { Footer } from "./_components/Footer";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.2, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3, delayChildren: 0.2 } },
};

export default function Home() {
  return (
    <motion.main initial="hidden" animate="visible" variants={staggerContainer}>
      <motion.div>
        <Header />
      </motion.div>

      <Spacing size="md" />

      <motion.div variants={fadeIn}>
        <Hero />
      </motion.div>

      <Spacing size="md" />

      <motion.div variants={fadeInUp}>
        <Status />
      </motion.div>

      <Spacing size="md" />

      <motion.div variants={fadeInUp}>
        <Skills />
      </motion.div>

      <Spacing size="md" />

      <motion.div variants={fadeInUp}>
        <Contact />
      </motion.div>

      <Spacing size="md" />

      <motion.div variants={fadeInUp}>
        <Footer />
      </motion.div>
    </motion.main>
  );
}
