import { Section } from "./Section";
import { Card } from "@/components/ui/card";
import { Car, Gamepad2, Plane, Rss, Swords } from "lucide-react";
import { SideProjectProps, SideProject } from "./SideProjects";
import { ContactCard } from "./ContactCard";
import { Education, EducationS } from "./Education";

export const Status = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <div className="flex-[3] w-full">
        <Card className="w-full p-4 flex flex-col gap-2 w-full">
          <p className="text-lg text-muted-foreground">Personal Projects.</p>
          <div className="flex flex-col gap-4">
            {SIDE_PROJECTS.map((project, index) => (
              <SideProject
                key={index}
                Logo={project.Logo}
                title={project.title}
                description={project.description}
                url={project.url}
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
              image="https://img.pikbest.com/ai/illus_our/20230421/6469a1d10e3ab9fdc08be511c9a6ab3c.jpg!w700wp"
              mediumImage="https://cdn-icons-png.flaticon.com/512/174/174857.png"
              description={""}
            />
            <ContactCard
              url="mailto:yanismahdi.net@outlook.fr"
              name="Outlook"
              image="https://img.pikbest.com/ai/illus_our/20230421/6469a1d10e3ab9fdc08be511c9a6ab3c.jpg!w700wp"
              mediumImage="https://e1.pngegg.com/pngimages/80/740/png-clipart-microsoft-office-2013-long-shadow-icons-outlook-shadow-thumbnail.png"
              description={"Email me for any inquiries!"}
            />
            <ContactCard
              url="https://github.com/mrzefix23"
              name="Github"
              image="https://img.pikbest.com/ai/illus_our/20230421/6469a1d10e3ab9fdc08be511c9a6ab3c.jpg!w700wp"
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
    description: "A game of logic and strategy",
    url: "https://github.com/mrzefix23/Takuzu",
  },
  {
    Logo: Plane,
    title: "Kabylie Airlines",
    description: "A website for a fictional airline",
    url: "https://yanis-mahdi.emi.u-bordeaux.fr/",
  },
  {
    Logo: Rss,
    title: "Nachos",
    description: "An operating system for educational purposes",
    url: "https://yanis-mahdi.emi.u-bordeaux.fr/",
  },
  {
    Logo: Car,
    title: "Ferrari's Loge",
    description: "A website for a fictional store of cars",
    url: "https://yanis-mahdi.emi.u-bordeaux.fr/",
  },
  {
    Logo: Swords,
    title: "CitySimulator",
    description: "A game where you build and manage a city",
    url: "https://yanis-mahdi.emi.u-bordeaux.fr/",
  },
];
