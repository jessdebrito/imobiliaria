import Link from "next/link";
import React from "react";
import LogoWhite from "../../assets/white-logo.svg";
import Image from "next/image";
import NavMenu from "./NavMenu";

export const Header = () => {
  return (
    <header className="px-9 flex py-4 bg-[var(--color-gray-2)] text-white">
      <div className="flex items-center justify-between w-full mx-auto max-w-7xl">
        <div className=" flex flex-row items-center gap-4">
          <Image src={LogoWhite} alt="Logo" className="w-7" />
          <Link href="/" className="hover:text-[var(--color-primary)] text-2xl">
          ImóveisWeb
          </Link>
        </div>
      </div>

      <NavMenu />
    </header>
  );
};
