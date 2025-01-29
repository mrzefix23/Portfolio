import { LucideIcon } from "lucide-react";
import Link from "next/link";

export type SideProjectProps = {
  Logo: LucideIcon;
  title: string;
  description: string;
  url: string;
};

export const SideProject = (props: SideProjectProps) => {
  return (
    <Link
      href={props.url}
      className="flex items-center gap-5 p-7 rounded-lg transition-all hover:bg-accent/20 hover:shadow-lg"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="bg-accent text-accent-foreground p-3 rounded-md">
        <props.Logo size={20} />
      </span>
      <div className="flex flex-col gap-1">
        <p className="text-lg font-semibold">{props.title}</p>
        <p className="text-sm text-muted-foreground">{props.description}</p>
      </div>
    </Link>
  );
};
