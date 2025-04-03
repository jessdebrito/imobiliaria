import React from "react";
import { HandshakeIcon, SquareUser, Trophy } from "lucide-react";

const ourValues = [
  {
    title: "Integrity",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, est eius nulla repellat iusto totam illum.",
    icon: HandshakeIcon,
  },
  {
    title: "Customer-centered Service",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, est eius nulla repellat iusto totam illum.",
    icon: SquareUser,
  },
  {
    title: "Excellence",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, est eius nulla repellat iusto totam illum.",
    icon: Trophy,
  },
];

export const OurValuesSection = () => {
  return (
    <section className="flex flex-col lg:flex-row m-auto px-4 lg:px-14 lg:py-40 py-24">
      <div className="w-full lg:w-2/4 pb-10 px-10">
        <p className="text-var[(--color-gray-3)] font-bold text-base uppercase">
          Nossos valores
        </p>
        <h2 className="text-black text-4xl font-semibold">
          Os principios que guiam
          <br /> cada uma de nossas ações
        </h2>
      </div>
      <div className="w-full lg:w-2/4 px-7 h-full pt-5 ">
        <ul className="gap-10 items-center ">
          <div>
            {ourValues.map((item) => (
              <div
                key={item.title}
                className="group relative flex items-start gap-x-6 rounded-lg  text-2sm/8 mb-16"
              >
                <div className="flex size-12 flex-none items-center justify-center rounded-lg bg-[var(--color-primary)]">
                  <item.icon
                    aria-hidden="true"
                    className="size-6 text-[var(--color-gray-3)]"
                  />
                </div>
                <div className="flex-auto">
                  <h2 className="text-3xl text-black font-semibold mb-4">
                    {item.title}
                  </h2>

                  <p className="text-lg font-medium align-right">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ul>
      </div>
    </section>
  );
};
