import Button from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const headerAboutUs = {
  title: "Sobre",
  subtitle: "Legado de confiança na área imobiliária",
};
const ourStory = {
  title: "Nossa história",
  since: 2006,
  img:"/our-story-banner.avif",
  about:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam odio metus, gravida a ultrices a, egestas at libero. Sed ipsum tortor, vestibulum id purus non, efficitur eleifend felis. Pellentesque risus massa, commodo ac sodales sed, rutrum sit amet erat. Fusce mattis enim vel libero eleifend, non egestas erat consequat. Proin facilisis fringilla scelerisque. In mattis id dolor quis posuere. In consequat leo at facilisis pellentesque. Donec est turpis, iaculis vitae posuere feugiat, dignissim et purus. Vivamus at accumsan leo. In hac habitasse platea dictumst. Integer tristique nisl vel purus lacinia, vitae egestas tellus sodales. Aliquam et est non quam bibendum porttitor.",
  url: "https://calendly.com/",
};

export default function OurStory() {
  return (
    <>
      <div>
        <h2 className="mt-10  text-center tracking-wide text-gray-600 text-xl font-bold uppercase -mb-1">
          {headerAboutUs.title}
        </h2>
        <h3 className="text-center tracking-wide text-black text-3xl pb-6">
          {headerAboutUs.subtitle}
        </h3>
      </div>
     
      <div className="flex lg:flex-row flex-col mb-4">
        <div className="lg:w-1/2 lg:px-20 lg:py-10">

        <Image src={ourStory.img} alt="Nossa equipe" width={800} height={1600}
        className="border rounded-4xl"/>

        </div>
        <div className="lg:w-1/2 px-20 py-10">
          <p className="uppercase text-black text-xl ">
            Desde {ourStory.since}
          </p>
          <h1 className="text-4xl mb-5">{ourStory.title}</h1>
          <p className="w-4/5 mb-6">{ourStory.about}</p>
          
          <Button className="px-8 py-4 bg-[var(--color-primary)] text-black hover:bg-[var(--color-gray-2)] hover:text-white">
            <a href={ourStory.url}>Agende uma visita</a>
          </Button>
        </div>
      </div>
    </>
  );
}
