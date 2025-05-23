import React from "react";
import { Banknote, Building, House, KeyRound, ListCheck, ScrollText } from "lucide-react";

const services = [
  {
    title: "Venda de propriedades",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, est eius nulla repellat iusto totam illum.",
    icon: Banknote,
  },
  {
    title: "Gestão de proprieadades",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, est eius nulla repellat iusto totam illum.",
    icon: Building,
  },
  {
    title: "Consultoria de investimento",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, est eius nulla repellat iusto totam illum.",
    icon: ScrollText,
  },
  {
    title: "Serviços de aluguel",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, est eius nulla repellat iusto totam illum.",
    icon: KeyRound,
  },
  {
    title: "Espaço comercial",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, est eius nulla repellat iusto totam illum.",
    icon: House,
  },
  {
    title: "Servoço de locação",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, est eius nulla repellat iusto totam illum.",
    icon: ListCheck,
  },
];
export const ServicesSection = () => {
  return (
    <section className="m-autopx-4 lg:px-14 py-30 lg:py-30 bg-[var(--color-gray-2)] text-[var(--color-gray-1)]">
      <div className="px-6 flex flex-col justify-center items-start lg:flex-row">

        <div className="lg:sticky lg:top-20 px-8 md:w-10/12 lg:w-4/12 mb-4">
          <p className="text-lg uppercase font-bold">Serviços</p>
          <h1 className="text-3xl text-[var(--color-primary)] font-bold">
            O que fazemos de melhor
          </h1>
          <p className="text-base font-semibold">
            From finding your ideal property to managing investments and
            offering business space rentals.
          </p>
        </div>

        <div className="md:w-9/12 lg:w-2/4 md:px-6 h-full pt-5">
          <ul className="gap-4 items-center grid md:grid-cols-2 grid-cols-1">
            {services.map((item) => (
              <li
                key={item.title}
                className="relative rounded-lg text-2sm/8 mb-2"
              >
                <div className="mb-4 flex size-12 flex-none items-center justify-center rounded-lg bg-[var(--color-primary)]">
                  <item.icon
                    aria-hidden="true"
                    className="size-6 text-[var(--color-gray-3)]"
                  />
                </div>
                <div className="mb-6">
                  <h2 className="mb-4 text-2xl text-[var(--color-primary)] font-semibold">
                    {item.title}
                  </h2>
                  <p className="text-lg font-medium">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
