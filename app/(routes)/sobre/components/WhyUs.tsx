import React from "react";
import {
  Banknote,
  Building,
  House,
  KeyRound,
  ListCheck,
  ScrollText,
} from "lucide-react";

const headerWhyUs = {
  title: "Motivos que nos destacam",
  subtitle: "Por que escolher a Property?",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
};

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

export default function WhyUs() {
  return (
    <div className="bg-[var(--color-gray-3)] px-6 py-20 rounded-tl-4xl rounded-tr-4xl">
      <div>
        <h2 className="text-center tracking-wide text-white text-lg font-semibold uppercase mb-2">
          {headerWhyUs.title}
        </h2>
        <h3 className="text-center tracking-wide text-white text-4xl font-semibold  mb-2">
          {headerWhyUs.subtitle}
        </h3>
        <p className="text-center tracking-wide text-white text-2xl pb-6 mb-2">
          {headerWhyUs.text}
        </p>
      </div>

      <div className="flex md:flex-row items-center align-center py-10 px-10 flex-col mb-4">
      <ul className="md:w-2/3 gap-4 grid md:grid-cols-3 grid-cols-1 mx-auto">
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
                  <p className="text-lg font-medium text-white">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
            </ul>
      </div>
    </div>
  );
}
