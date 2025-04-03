import React from "react";
import LogoWhiteLime from "@/public/white-lime-logo.svg";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="py-20 px-14 font-sans bg-[var(--color-gray-2)] text-white">
      <div className=" mx-auto lg:py-8">
        <div className="md:flex md:justify-between ">
          <div className="mb-6 md:mb-0">
            <Link href="/">
              <Image src={LogoWhiteLime} alt="Logo" className="w-7" />
              <h2 className="self-center text-3xl font-semibold whitespace-nowrap">
                property
              </h2>
            </Link>
            <p className="max-w-48">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <Link href="/">
                <h3 className="mb-6 text-lg font-semibold text-[var(--color-primary)]">
                  Página Inicial
                </h3>
              </Link>
              <ul className=" font-medium">
                <li className="mb-4">
                  <Link
                    href="/propriedades"
                    className="hover:text-[var(--color-primary)]"
                  >
                    Imóveis
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="/corretores"
                    className="hover:text-[var(--color-primary)]"
                  >
                    Corretores
                  </Link>
                </li>

                <li className="mb-4">
                  <Link
                    href="/sobre"
                    className="hover:text-[var(--color-primary)]"
                  >
                    Sobre nós
                  </Link>
                </li>

                <li className="mb-4">
                  <Link
                    href="/404"
                    className="hover:text-[var(--color-primary)]"
                  >
                    404
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-6 text-lg font-semibold uppercase text-[var(--color-primary)]">
                Categorias
              </h3>
              <ul className="font-medium">
                <li className="mb-4">
                  <Link
                    href="/propriedade"
                    className="hover:text-[var(--color-primary)]"
                  >
                    Apartamento
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="/propriedade"
                    className="hover:text-[var(--color-primary)]"
                  >
                    Casa
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="/propriedade"
                    className="hover:text-[var(--color-primary)]"
                  >
                    Comércio
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="/propriedade"
                    className="hover:text-[var(--color-primary)]"
                  >
                    Sala comercial
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-6 text-lg font-semibold uppercase text-[var(--color-primary)]">
                Contato
              </h3>
              <ul className="font-medium">
                <li className="mb-4">
                  <Link href="#" className="hover:text-[var(--color-primary)]">
                    123 Rua Avenida, Bairro. 123456
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#" className="hover:text-[var(--color-primary)]">
                    Recife, Pernambuco.
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#" className="hover:text-[var(--color-primary)]">
                    +55 12 3456-7890
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#" className="hover:text-[var(--color-primary)]">
                    info@contato.com
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <p className="text-sm  sm:text-center uppercase ">
            All Rights Reserved © 2025
          </p>
          <div className="flex mt-4 sm:justify-center sm:mt-0 ">
            <a href="https://github.com/jessdebrito">
              <p className="text-sm uppercase hover:text-[var(--color-primary)]">
                Desenvolvido por Jéssica de Brito
              </p>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
