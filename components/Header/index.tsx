"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

import NavMenu from "@/components/Header/NavMenu";
import LogoWhiteLime from "@/public/white-lime-logo.svg";

export const Header = () => {
  const [isTransparent, setIsTransparent] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") {
      setIsTransparent(false);
      return;
    }

    const handleScroll = () => {
      const banner = document.getElementById("banner");
      if (!banner) return;

      const bannerBottom = banner.offsetTop + banner.offsetHeight * 0.4;
      setIsTransparent(window.scrollY < bannerBottom);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return (
    <header
      className={`flex items-center fixed top-0 left-0 w-full z-15 transition-all duration-700 px-4 md:px-14 py-2 mx-auto ${
        isTransparent
          ? "bg-transparent text-white"
          : "bg-[var(--color-gray-2)] text-white shadow-md"
      } ${isMobileMenuOpen ? "lg:flex hidden" : "flex"}`}
    >
      <div className="flex items-center justify-between w-full mx-auto">
        <Link
          href="/"
          className={`flex flex-row items-center gap-2 text-3xl transition-all duration-700 ${
            isTransparent ? "text-white" : "text-[var(--color-primary)]"
          }`}
        >
          <Image src={LogoWhiteLime} alt="Logo" className="w-8" />
          property
        </Link>
      </div>
      <NavMenu onMobileMenuToggle={setIsMobileMenuOpen} />
    </header>
  );
};
