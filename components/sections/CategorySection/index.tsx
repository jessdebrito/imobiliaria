"use client";
import React from "react";
import Link from "next/link";
import Button from "@/components/ui/button";

const categoryBanner = [
  {
    name: "apartamento",
    title: "Apartamentos",
    description: "Navegue pela nossa seleção de apartamentos deslumbrantes.",
    src: "/banner-apartamento.avif",
  },
  {
    name: "casa",
    title: "Casas",
    description:
      "Encontre a sua casa perfeita - conforto e conveniência esperam.",
    src: "/banner-casa.avif",
  },
  {
    name: "comercial",
    title: "Espaços comercial",
    description:
      "Explore uma variedade de espaços profissionais adaptados para elevar o seu negócio.",
    src: "/banner-comercial.avif",
  },
];

export const CategorySection = () => {
  return (
    <section className="w-full min-h-3/4 py-20 h-full flex flex-col items-center object-center justify-center gap-10">
      {categoryBanner.map((item) => (
        <div
          key={item.name}
          className="w-11/12  p-10 md:py-48 rounded-2xl bg-cover md:bg-center flex flex-col items-center justify-center bg-blend-color bg-black/60"
          style={{
            backgroundImage: `url(${item.src})`,
          }}
        >
          <div className="md:w-full md:ml-20 text-left">
            <h1 className="mt-4 text-4xl md:text-5xl font-semibold text-[var(--color-primary)]">
              {item.title}
            </h1>
            <p className="mt-4 text-xl text-[var(--color-gray-1)]">
              {item.description}
            </p>

            <Link href={"/loja"}>
              <Button className="text-white px-13 py-6 mt-10 transition-colors duration-300  rounded-2xl hover:text-[var(--color-gray-2)] hover:bg-[var(--color-primary)] hover:border-[var(--color-primary)] border-white  border-2 bg-white/00">
                Explore
              </Button>
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
};
