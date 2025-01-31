import { Section } from "./Section";
import { Badge } from "@/components/ui/badge";
import { ContactCard } from "./ContactCard";

export const Contact = () => {
  return (
    <Section className="flex flex-col items-start gap-4">
      {/* Badge Contact Me */}
      <Badge
        variant={"outline"}
        className="text-2xl px-6 py-3 rounded-full bg-gray-800 text-gray-300 border border-gray-600 shadow-md 
        hover:bg-gray-700 hover:text-white transition-all duration-300"
      >
        Contact me
      </Badge>

      {/* Titre */}
      <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        I will be happy to work with you!
      </h2>

      {/* Grid des cartes de contact */}
      <div className="flex max-md:flex-col w-full gap-4">
        
        {/* LinkedIn */}
        <ContactCard
          className="flex-1"
          url="https://www.linkedin.com/in/yanis-mahdi-933a37238/"
          name="LinkedIn"
          image="https://media.licdn.com/dms/image/v2/D4E03AQErGn741UDqag/profile-displayphoto-shrink_800_800/B4EZSoWSIuG0Ac-/0/1737991201950?e=1743638400&v=beta&t=lXWo7OJ_T6pcrDEIb_A0ulzjWxqnaOG3nqQH5r8d9DQ"
          mediumImage="https://cdn-icons-png.flaticon.com/512/174/174857.png"
          description={"Follow me on LinkedIn"}
        />

        {/* Outlook */}
        <ContactCard
          className="flex-1"
          url="mailto:yanismahdi.net@outlook.fr"
          name="Outlook"
          image="https://media.licdn.com/dms/image/v2/D4E03AQErGn741UDqag/profile-displayphoto-shrink_800_800/B4EZSoWSIuG0Ac-/0/1737991201950?e=1743638400&v=beta&t=lXWo7OJ_T6pcrDEIb_A0ulzjWxqnaOG3nqQH5r8d9DQ"
          mediumImage="https://thumbs.dreamstime.com/b/perspectives-81671472.jpg"
          description={"Email me via Outlook"}
        />

        {/* GitHub */}
        <ContactCard
          className="flex-1"
          url="https://github.com/mrzefix23"
          name="Github"
          image="https://media.licdn.com/dms/image/v2/D4E03AQErGn741UDqag/profile-displayphoto-shrink_800_800/B4EZSoWSIuG0Ac-/0/1737991201950?e=1743638400&v=beta&t=lXWo7OJ_T6pcrDEIb_A0ulzjWxqnaOG3nqQH5r8d9DQ"
          mediumImage="https://cdn3.iconfinder.com/data/icons/inficons/512/github.png"
          description={"Check my projects on Github"}
        />
        
      </div>
    </Section>
  );
};
