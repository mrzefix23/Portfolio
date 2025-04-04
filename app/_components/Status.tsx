"use client";

import { Section } from "./Section";
import { Card } from "@/components/ui/card";
import { Car, Gamepad2,Rss, Swords } from "lucide-react";
import { SideProjectProps, SideProject } from "./SideProjects";
import { ContactCard } from "./ContactCard";
import { Education, EducationS } from "./Education";

export const Status = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <div className="flex-[3] w-full">
        <Card className="w-full p-4 flex flex-col gap-2 w-full">
          <p className="text-xl text-muted-foreground">Personal Projects.</p>
          <div className="flex flex-col gap-4">
            {SIDE_PROJECTS.map((project, index) => (
              <SideProject
                key={index}
                Logo={project.Logo}
                title={project.title}
                description={project.description}
                url={project.url}
                image={project.image}
              />
            ))}
          </div>
        </Card>
      </div>

      <div className="flex-[2] w-full flex flex-col h-full gap-4">
        <Card className="p-4 flex-1">
          <p className="text-lg text-muted-foreground">Education</p>
          <div className="flex flex-col gap-4">
            {EducationS.map((educationItem, index) => (
              <Education
                key={index}
                image={educationItem.image}
                title={educationItem.title}
                role={educationItem.role}
                date={educationItem.date}
              />
            ))}
          </div>
        </Card>

        <Card className="p-4 flex-1">
          <p className="text-lg text-muted-foreground">Contact me</p>
          <div className="flex flex-col space-y-4">
            <ContactCard
              url="https://www.linkedin.com/in/yanis-mahdi-933a37238/"
              name="LinkedIn"
              image="https://media.licdn.com/dms/image/v2/D4E03AQErGn741UDqag/profile-displayphoto-shrink_400_400/B4EZSoWSIuG0Ag-/0/1737991201920?e=1749081600&v=beta&t=Ge9e2NVzfCZWy_XYUR5LyZ1MAXPfaXylfIHS1mtHxtY"
              mediumImage="https://cdn-icons-png.flaticon.com/512/174/174857.png"
              description={""}
            />
            <ContactCard
              url="mailto:yanismahdi.net@outlook.fr"
              name="Outlook"
              image="https://media.licdn.com/dms/image/v2/D4E03AQErGn741UDqag/profile-displayphoto-shrink_400_400/B4EZSoWSIuG0Ag-/0/1737991201920?e=1749081600&v=beta&t=Ge9e2NVzfCZWy_XYUR5LyZ1MAXPfaXylfIHS1mtHxtY"
              mediumImage="https://thumbs.dreamstime.com/b/perspectives-81671472.jpg"
              description={""}
            />
            <ContactCard
              url="https://github.com/mrzefix23"
              name="Github"
              image="https://media.licdn.com/dms/image/v2/D4E03AQErGn741UDqag/profile-displayphoto-shrink_400_400/B4EZSoWSIuG0Ag-/0/1737991201920?e=1749081600&v=beta&t=Ge9e2NVzfCZWy_XYUR5LyZ1MAXPfaXylfIHS1mtHxtY"
              mediumImage="https://cdn3.iconfinder.com/data/icons/inficons/512/github.png"
              description={""}
            />
          </div>
        </Card>
      </div>
    </Section>
  );
};

const SIDE_PROJECTS: SideProjectProps[] = [
  {
    Logo: Gamepad2,
    title: "Takuzu",
    description: "A logic-based puzzle game that challenges your strategic thinking and problem-solving skills.",
    url: "https://github.com/mrzefix23/Takuzu",
    image: "/images/takuzu.webp",
  },
  {
    Logo: Swords,
    title: "CitySimulator",
    description: "An immersive simulation game where you design, build, and manage a thriving city.",
    url: "https://github.com/mrzefix23/Java_project_rts/",
    image: "/images/citysimulator.webp",
  },
 {
    Logo: Car,
    title: "Ferrari's Lodge",
    description: "A sleek and modern website created for a fictional luxury Ferrari lodge, featuring an interactive gallery where users can upload, delete, and explore multiple Ferrari images. Users can also add custom car drawings made directly on the website.",
    url: "https://github.com/mrzefix23/ferrari-s_loge",
    image: "/images/ferrari.webp",
},
  {
    Logo: Rss,
    title: "Nachos",
    description: "A university project for the Operating Systems course, where we implemented core OS functionalities like process management and file I/O on a minimal OS base.",
    url: "https://github.com/mrzefix23/Nachos",
    image: "/images/nachos.webp",
  },
];
