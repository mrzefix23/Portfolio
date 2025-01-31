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
        <span className="bg-accent text-accent-foreground p-3 rounded-md shadow-lg">
          <props.Logo size={24} />
        </span>
        <div className="flex flex-col gap-2">
          <p className="text-lg font-semibold">{props.title}</p>
          <p className="text-sm text-muted-foreground">{props.description}</p>
        </div>
      </motion.div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="w-full max-w-4xl p-8 bg-gray-951 rounded-lg shadow-2xl border border-gray-800">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <DialogTitle className="text-center text-2xl font-bold mb-4">
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
                  className="rounded-lg shadow-lg"
                />
              </motion.div>
            </div>
            <div className="flex justify-center mt-6">
              <Link
                href={props.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-blue-500 text-white text-lg font-medium rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300 transform hover:-translate-y-1"
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
