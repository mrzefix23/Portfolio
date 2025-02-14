import { useState } from "react";
import { LucideIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { motion } from "framer-motion";

export type SideProjectProps = {
  Logo: LucideIcon;
  title: string;
  description: string;
  url: string;
  image: string;
};

export const SideProject = (props: SideProjectProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-5 p-7 rounded-lg transition-all hover:bg-accent/30 hover:shadow-2xl cursor-pointer border border-transparent hover:border-accent"
      >
        <span className="bg-accent text-accent-foreground p-2 rounded-md shadow-lg">
          <props.Logo size={24} />
        </span>
        <div className="flex flex-col gap-1">
          <p className="text-lg font-semibold">{props.title}</p>
          <p className="text-sm text-muted-foreground">{props.description}</p>
        </div>
      </motion.div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="w-full max-w-4xl p-8 bg-gray-950 rounded-lg shadow-2xl border border-gray-800">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <DialogTitle className="text-center text-2xl font-bold text-white mb-4">
              {props.title}
            </DialogTitle>
            <div className="flex justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="rounded-lg overflow-hidden shadow-lg"
              >
                <Image
                  src={props.image}
                  alt={props.title}
                  width={800}
                  height={500}
                  quality={80}
                  layout="intrinsic"
                  className="rounded-lg shadow-lg"
                  priority
                />
              </motion.div>
            </div>
            <div className="flex justify-center mt-6">
              <Link
                href={props.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 text-lg font-medium rounded-lg shadow-md transition-all duration-300 
                bg-gray-800 text-gray-200 border border-gray-700 hover:bg-gray-700 hover:text-white 
                transform hover:-translate-y-1 hover:shadow-blue-500/90"
              >
                🚀 View Source Code
              </Link>
            </div>
          </motion.div>
        </DialogContent>
      </Dialog>
    </>
  );
};
