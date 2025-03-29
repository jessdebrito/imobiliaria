"use client";

import type { Product } from "@/types";
import { motion } from "framer-motion";

interface GalleryTabProps {
  data: Product;
}

const GalleryTab: React.FC<GalleryTabProps> = ({ data }) => {
  const text = "Boas vindas ao seu futuro imóvel";
  const words = text.split(" ");

  return (
    <motion.div
      className="mt-6 rounded-xl bg-black/50 bg-blend-multiply bg-no-repeat bg-cover bg-center  
      w-full h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${data?.images?.[0]?.url})` }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-6xl text-white font-semibold  tracking-wide flex flex-wrap justify-center gap-x-4">
        {words.map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.5 + i * 0.2,
              duration: 0.6,
              type: "spring",
              stiffness: 100,
            }}
          >
            {word}
          </motion.span>
        ))}
      </h1>
    </motion.div>
  );
};

export default GalleryTab;
