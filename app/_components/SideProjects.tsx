import { useState } from "react";
import { LucideIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

export type SideProjectProps = {
  Logo: LucideIcon;
  title: string;
  description: string;
  url: string;
  image: string; // Ajout de l'image locale
};

export const SideProject = (props: SideProjectProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-5 p-7 rounded-lg transition-all hover:bg-accent/30 hover:shadow-xl cursor-pointer"
      >
        <span className="bg-accent text-accent-foreground p-3 rounded-md">
          <props.Logo size={24} />
        </span>
        <div className="flex flex-col gap-3">
          <p className="text-lg font-semibold">{props.title}</p>
          <p className="text-sm text-muted-foreground">{props.description}</p>
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="w-full max-w-5xl p-8 bg-gray-951 rounded-lg shadow-xl">
          <DialogTitle className="text-center text-2xl font-semibold mb-4">{props.title}</DialogTitle>
          <div className="flex justify-center">
            <Image src={props.image} alt={props.title} width={800} height={500} className="rounded-lg shadow-lg" />
          </div>
          <div className="flex justify-center mt-4">
            <Link
              href={props.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline text-lg font-medium"
            >
              Code Source
            </Link>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};