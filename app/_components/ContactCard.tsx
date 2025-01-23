import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const ContactCard = (props: {
  image: string;
  mediumImage: string;
  name: string;
  description: string;
  url?: string;
  className?: string;
}) => {
  return (
    <Link
      href={props.url || "#"}
      className={cn("w-full", props.className)}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Card className="p-3 bg-accent/10 hover:bg-accent/30 transition-colors group flex items-center gap-4">
        <div className="relative w-10 h-10">
          <Image
            src={props.image}
            alt={`Profile picture of ${props.name}`}
            className="rounded-full object-cover"
            width={40}
            height={40}
            quality={100}
          />
          <Image
            src={props.mediumImage}
            alt={`Medium logo for ${props.name}`}
            className="absolute -bottom-2 -right-1 rounded-full object-cover"
            width={16} 
            height={16}
            quality={100}
          />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-4">
            <p className="text-lg font-semibold">{props.name}</p>
          </div>
          <p className="text-xs text-muted-foreground">{props.description}</p>
        </div>
        <ArrowUpRight className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" size={16} />
      </Card>
    </Link>
  );
};
