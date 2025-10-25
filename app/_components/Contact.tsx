"use client";

import { Section } from "./Section";
import { Badge } from "@/components/ui/badge";
import { ContactCard } from "./ContactCard";
import { motion } from "framer-motion";
import { MapPin, ExternalLink } from "lucide-react";
import Image from "next/image";

export const Contact = () => {
  return (
    <Section className="flex flex-col items-center gap-8" id="contact">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl"
      >
        <Badge
          variant="outline"
          className="mb-4 text-lg px-4 py-1.5 rounded-full bg-primary/10 border-primary/20 text-primary font-medium"
        >
          Contact me
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
          Let&apos;s Work Together
        </h2>
        <p className="text-muted-foreground">
          Feel free to reach out through any of the channels below.
          I&apos;m always open to discussing new projects and opportunities.
        </p>
      </motion.div>

      {/* Location Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full max-w-4xl mx-auto mb-4"
      >
        <div className="relative w-full rounded-2xl overflow-hidden h-48">
          <Image 
            src="https://a.travel-assets.com/findyours-php/viewfinder/images/res70/481000/481844-Bordeaux.jpg" 
            alt="Bordeaux City" 
            fill
            style={{ objectFit: 'cover' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          
          <div className="absolute bottom-0 left-0 p-6 w-full flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="p-3 rounded-full bg-background/20 backdrop-blur-md text-white">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-white text-xl font-semibold">Bordeaux, France</h3>
                <p className="text-white/80">UTC+1/UTC+2 (CET/CEST) • Available for remote work</p>
              </div>
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white/20 backdrop-blur-md rounded-full px-4 py-2 text-white hover:bg-white/30 transition-all"
            >
              <a 
                href="https://maps.app.goo.gl/VsNywjkdzpQouSBv9" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <span>View on map</span>
                <ExternalLink size={14} />
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Contact Cards Grid */}
      <motion.div 
        className="flex max-md:flex-col w-full max-w-4xl mx-auto gap-4"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.15,
              delayChildren: 0.3,
            },
          }}
        }
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* LinkedIn */}
        <motion.div 
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
          className="flex-1"
        >
          <ContactCard
            url="https://www.linkedin.com/in/yanis-mahdi-933a37238/"
            name="LinkedIn"
            image="https://media.licdn.com/dms/image/v2/D4E03AQErGn741UDqag/profile-displayphoto-shrink_800_800/B4EZSoWSIuG0Ac-/0/1737991201950?e=1762992000&v=beta&t=6GXGGnXdZtZnm1rkETI39HmzhKsTm6D8uZYk03l-8k4"
            mediumImage="/images/logos/linkedin_logo.webp"
            description="Connect professionally"
          />
        </motion.div>

        {/* Outlook */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
          className="flex-1"
        >
          <ContactCard
            url="mailto:yanismahdi.net@outlook.fr"
            name="Email"
            image="https://media.licdn.com/dms/image/v2/D4E03AQErGn741UDqag/profile-displayphoto-shrink_800_800/B4EZSoWSIuG0Ac-/0/1737991201950?e=1762992000&v=beta&t=6GXGGnXdZtZnm1rkETI39HmzhKsTm6D8uZYk03l-8k4"
            mediumImage="/images/logos/outlook_logo.webp"
            description="yanismahdi.net@outlook.fr"
          />
        </motion.div>

        {/* GitHub */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
          className="flex-1"
        >
          <ContactCard
            url="https://github.com/mrzefix23"
            name="GitHub"
            image="https://media.licdn.com/dms/image/v2/D4E03AQErGn741UDqag/profile-displayphoto-shrink_800_800/B4EZSoWSIuG0Ac-/0/1737991201950?e=1762992000&v=beta&t=6GXGGnXdZtZnm1rkETI39HmzhKsTm6D8uZYk03l-8k4"
            mediumImage="/images/logos/github_logo.webp"
            description="View my code repositories"
          />
        </motion.div>
      </motion.div>
    </Section>
  );
};
