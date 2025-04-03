"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Button from "@/components/ui/button";

const categoryBanner = [
  {
    name: "apartamento",
    text: "Apartamentos",
    src: "/banner-apartamento.avif",
  },
  {
    name: "casa",
    text: "Casas",
    src: "/banner-casa.avif",
  },
  {
    name: "espacocomercial",
    text: "Espaços Comerciais",
    src: "/banner-comercial.avif",
  },
];

export default function BillboardCategory() {
  const pathname = usePathname();
  const category = pathname.split("/").pop();

  const selectedBanner = categoryBanner.find(
    (banner) => banner.name === category
  );

  return (
    <div
      className="m-5 md:m-15 md:px-20 px-10 py-25 rounded-b-4xl bg-black/50 bg-no-repeat bg-cover bg-center bg-blend-hue text-center"
      style={{
        backgroundImage: selectedBanner ? `url(${selectedBanner.src})` : "none",
      }}
    >

        
        <span className="text-[var(--color-primary)] font-bold text-base tracking-widest uppercase pt-15">
          Explore nosso catálogo de
        </span>
        {selectedBanner && (
          <h1 className="text-4xl md:text-5xl font-bold  text-white drop-shadow-lg">
            {selectedBanner.text}
          </h1>
        )}
        <Link href="/">
          <Button className="mt-4 text-black hover:text-white bg-[var(--color-primary)] hover:bg-[var(--color-gray-2)] px-6 py-5 text-lg rounded-2xl">
            Voltar
          </Button>
        </Link>
      </div>
  );
}
