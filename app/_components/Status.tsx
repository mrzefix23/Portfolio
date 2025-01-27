import { Section } from "./Section";
import { Card } from "@/components/ui/card";
import { Car, Gamepad2, House, Plane, Rss, Swords } from "lucide-react";
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
              image="https://media.licdn.com/dms/image/v2/D4D03AQFryKnXEfwwyw/profile-displayphoto-shrink_400_400/B4DZSnEclOG8Ag-/0/1737969748769?e=1743638400&v=beta&t=SeWuIJmerRRnMfu7EV5A3EMt6TDBujRKTH32qiJpGmA"
              mediumImage="https://cdn-icons-png.flaticon.com/512/174/174857.png"
              description={""}
            />
            <ContactCard
              url="mailto:yanismahdi.net@outlook.fr"
              name="Outlook"
              image="https://media.licdn.com/dms/image/v2/D4D03AQFryKnXEfwwyw/profile-displayphoto-shrink_400_400/B4DZSnEclOG8Ag-/0/1737969748769?e=1743638400&v=beta&t=SeWuIJmerRRnMfu7EV5A3EMt6TDBujRKTH32qiJpGmA"
              mediumImage="https://e1.pngegg.com/pngimages/80/740/png-clipart-microsoft-office-2013-long-shadow-icons-outlook-shadow-thumbnail.png"
              description={"Email me for any inquiries!"}
            />
            <ContactCard
              url="https://github.com/mrzefix23"
              name="Github"
              image="https://media.licdn.com/dms/image/v2/D4D03AQFryKnXEfwwyw/profile-displayphoto-shrink_400_400/B4DZSnEclOG8Ag-/0/1737969748769?e=1743638400&v=beta&t=SeWuIJmerRRnMfu7EV5A3EMt6TDBujRKTH32qiJpGmA"
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
  },
  {
    Logo: Swords,
    title: "CitySimulator",
    description: "An immersive simulation game where you design, build, and manage a thriving city. You must balance resources to keep your city prosperous and sustainable.",
    url: "https://github.com/mrzefix23/Java_project_rts/",
  },
  {
    Logo: Car,
    title: "Ferrari's Lodge",
    description: "A sleek and modern website created for a fictional luxury Ferrari lodge, showcasing high-end design and functionality.",
    url: "https://github.com/mrzefix23/ferrari-s_loge",
  },
  {
    Logo: Rss,
    title: "Nachos",
    description: "An educational operating system designed to teach fundamental concepts in operating systems and software development.",
    url: "https://github.com/mrzefix23/Nachos",
  },
];

