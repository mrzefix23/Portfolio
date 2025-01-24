import { Section } from "./Section";
import { Badge } from "@/components/ui/badge"
import { ContactCard } from "./ContactCard";

export const Contact = () => {
    return <Section className="flex flex-col items-start gap-4">
        <Badge variant={"outline"}  className="text-lg px-4 py-2 rounded-lg">Contact me</Badge>
            <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                I will be happy to work with you!
            </h2>
            <div className="flex max-md:flex-col w-full gap-4 ">
          
            <ContactCard
                className="flex-1"
                url="https://www.linkedin.com/in/yanis-mahdi-933a37238/"
                        name="LinkedIn"
                        image="https://img.pikbest.com/ai/illus_our/20230421/6469a1d10e3ab9fdc08be511c9a6ab3c.jpg!w700wp" 
                        mediumImage="https://cdn-icons-png.flaticon.com/512/174/174857.png" 
                        description={""}
                         />
            
            <ContactCard
                className="flex-1"
                url="mailto:yanismahdi.net@outlook.fr"
                        name="Outlook"
                        image="https://img.pikbest.com/ai/illus_our/20230421/6469a1d10e3ab9fdc08be511c9a6ab3c.jpg!w700wp"
                        mediumImage="https://e1.pngegg.com/pngimages/80/740/png-clipart-microsoft-office-2013-long-shadow-icons-outlook-shadow-thumbnail.png" 
                        description={"Email me for any inquiries!"}
                         />
             <ContactCard
                className="flex-1"
                url="https://github.com/mrzefix23"
                        name="Github"
                        image="https://img.pikbest.com/ai/illus_our/20230421/6469a1d10e3ab9fdc08be511c9a6ab3c.jpg!w700wp" 
                        mediumImage="https://cdn3.iconfinder.com/data/icons/inficons/512/github.png" 
                        description={""}
                         />

        </div>
    </Section>
}