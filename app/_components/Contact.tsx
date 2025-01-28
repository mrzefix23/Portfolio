import { Section } from "./Section";
import { Badge } from "@/components/ui/badge"
import { ContactCard } from "./ContactCard";
import ShinyText from "../TextAnimations/ShinyText/ShinyText";

export const Contact = () => {
    return <Section className="flex flex-col items-start gap-4">
        <Badge variant={"outline"}  className="text-lg px-4 py-2 rounded-lg">Contact me</Badge>
            <ShinyText className="pb-2 text-4xl font-semibold tracking-tight first:mt-0" text="I will be happy to work with you!" disabled={false} speed={3} />
            <div className="flex max-md:flex-col w-full gap-4 ">
          
            <ContactCard
                className="flex-1"
                url="https://www.linkedin.com/in/yanis-mahdi-933a37238/"
                        name="LinkedIn"
                        image="https://media.licdn.com/dms/image/v2/D4E03AQErGn741UDqag/profile-displayphoto-shrink_800_800/B4EZSoWSIuG0Ac-/0/1737991201950?e=1743638400&v=beta&t=lXWo7OJ_T6pcrDEIb_A0ulzjWxqnaOG3nqQH5r8d9DQ" 
                        mediumImage="https://cdn-icons-png.flaticon.com/512/174/174857.png" 
                        description={""}
                         />
            
            <ContactCard
                className="flex-1"
                url="mailto:yanismahdi.net@outlook.fr"
                        name="Outlook"
                        image="https://media.licdn.com/dms/image/v2/D4E03AQErGn741UDqag/profile-displayphoto-shrink_800_800/B4EZSoWSIuG0Ac-/0/1737991201950?e=1743638400&v=beta&t=lXWo7OJ_T6pcrDEIb_A0ulzjWxqnaOG3nqQH5r8d9DQ"
                        mediumImage="https://e1.pngegg.com/pngimages/80/740/png-clipart-microsoft-office-2013-long-shadow-icons-outlook-shadow-thumbnail.png" 
                        description={"Email me for any inquiries!"}
                         />
             <ContactCard
                className="flex-1"
                url="https://github.com/mrzefix23"
                        name="Github"
                        image="https://media.licdn.com/dms/image/v2/D4E03AQErGn741UDqag/profile-displayphoto-shrink_800_800/B4EZSoWSIuG0Ac-/0/1737991201950?e=1743638400&v=beta&t=lXWo7OJ_T6pcrDEIb_A0ulzjWxqnaOG3nqQH5r8d9DQ" 
                        mediumImage="https://cdn3.iconfinder.com/data/icons/inficons/512/github.png" 
                        description={""}
                         />

        </div>
    </Section>
}