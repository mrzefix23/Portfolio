import { Section } from "./Section";
import { Card } from "@/components/ui/card";
import { Car, Gamepad2, Plane, Rss, Swords} from "lucide-react";
import { SideProjectProps, SideProject } from "./SideProjects";
import { ContactCard } from "./ContactCard";
import { Education, EducationS} from "./Education";

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
                url={educationItem.url}
              />
            ))}
          </div>
        </Card>
        <Card className="p-4 flex-1">
        <p className="text-lg text-muted-foreground">Contact me</p>
        <ContactCard
                url="https://www.linkedin.com/in/yanis-mahdi-933a37238/"
                        name="Yanis Mahdi"
                        image="https://img.pikbest.com/ai/illus_our/20230421/6469a1d10e3ab9fdc08be511c9a6ab3c.jpg!w700wp" 
                        mediumImage="https://cdn-icons-png.flaticon.com/512/174/174857.png" 
                        description={""}
                         />
            
            <ContactCard
                url="mailto:yanismahdi.net@outlook.fr"
                        name="yanismahdi.net@outlook.fr"
                        image="https://img.pikbest.com/ai/illus_our/20230421/6469a1d10e3ab9fdc08be511c9a6ab3c.jpg!w700wp"
                        mediumImage="data:image/png;base64,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" 
                        description={"Email me for any inquirie!"}
                         />
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
    url: "https://yanis-mahdi.emi.u-bordeaux.fr/takuzu/game.html",
  },
  {
    Logo: Plane,
    title: "Kabylie Airlines",
    description: "A website for a fictional airline",
    url: "https://yanis-mahdi.emi.u-bordeaux.fr/reseau",
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



