import Button from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const contactBanner = {
  name: "contactUs",
  text: "Descubra, Alugue, Prospere",
  src: "/fundo.jpg",
};

export const ContactUsSection = () => {
  return (
    <section className="w-full py-12 flex items-center object-center justify-center ">
      <div
        className="w-11/12 h-11/12 py-19 rounded-2xl bg-cover flex flex-col items-center justify-center bg-blend-color bg-white/20"
        style={{
          backgroundImage: contactBanner ? `url(${contactBanner.src})` : "none",
        }}
      >
        <div className="md:w-5/12 w-7/12 text-center">
          <p className="uppercase font-semibold text-[var(--color-gray-1)]">
            Pronto para dar o próximo passo ?
          </p>
          <h1 className="mt-4 text-3xl md:text-4xl font-semibold text-[var(--color-primary)]">
            {contactBanner.text}
          </h1>
          <p className="mt-4 text-xl text-[var(--color-gray-1)]">
            Entre em contato e marque uma visita.
          </p>
          <div className="flex flex-row w-full gap-10 h-full items-center origin-center justify-center mt-6">
            <Link href={"/loja"}>
            <Button className="text-black px-10 py-4 bg-[var(--color-primary)] rounded-2xl hover:text-white hover:bg-[var(--color-gray-2)]">
              Explore
            </Button>
            </Link>
            <Button className="text-black px-10 py-4 bg-[var(--color-gray-1)] rounded-2xl hover:text-white hover:bg-[var(--color-gray-2)]">
              Contato
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
