"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import LogoWhiteLime from "@/public/white-lime-logo.svg";
import NavbarActions from "./NavBar-actions";
import { ChevronDownIcon, PhoneIcon } from "@heroicons/react/20/solid";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import {
  Bars3Icon,
  HomeModernIcon,
  BuildingStorefrontIcon,
  CalendarDaysIcon,
  BuildingOffice2Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const products = [
  {
    name: "Apartamento",
    description: "Espaço planejados",
    href: "/categoria/apartamento",
    icon: BuildingOffice2Icon,
  },
  {
    name: "Casa",
    description: "Viva premium",
    href: "/categoria/casa",
    icon: HomeModernIcon,
  },
  {
    name: "Espaço comercial",
    description: "Local moderno",
    href: "/categoria/espacocomercial",
    icon: BuildingStorefrontIcon,
  },
];
const callsToAction = [
  { name: "Agendar visita", href: "#", icon: CalendarDaysIcon },
  { name: "Entrar em contato", href: "#", icon: PhoneIcon },
];

export default function NavMenu() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav
        aria-label="Global"
        className="mx-auto flex  max-w-7xl  justify-between p-2 lg:px-8"
      >
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
          >
            <span className="sr-only">Abrir menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12 items-center justify-center">
          <Popover className="relative">
            <PopoverButton className="flex items-center justify-center gap-x-1 text-2sm/8 font-semibold text-white">
              Detalhes
              <ChevronDownIcon
                aria-hidden="true"
                className="size-6 flex-none text-white hover:text-[var(--color-primary)]"
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute top-full -left-8 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-[var(--color-gray-2)] ring-1 shadow-lg ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
            >
              <div className="p-4">
                {products.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-2sm/8  hover:bg-[var(--color-gray-3)]"
                  >
                    <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-[var(--color-gray-3)] group-hover:bg-[var(--color-gray-2)]">
                      <item.icon
                        aria-hidden="true"
                        className="size-6 text-white group-hover:text-[var(--color-primary)]"
                      />
                    </div>
                    <div className="flex-auto">
                      <a
                        href={item.href}
                        className="block font-semibold text-white hover:text-[var(--color-primary)]"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-gray-400">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-[var(--color-gray-2)]">
                {callsToAction.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-white hover:text-[var(--color-gray-1)] hover:bg-[var(--color-gray-3)]"
                  >
                    <item.icon
                      aria-hidden="true"
                      className="size-5 flex-none text-[var(--color-primary)]"
                    />
                    {item.name}
                  </a>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          <Link
            href="/sobre"
            className="text-2sm/8 font-semibold text-white hover:text-[var(--color-primary)]"
          >
            Sobre
          </Link>
          <Link
            href="/sobre#corretores"
            className="text-2sm/8 font-semibold text-white hover:text-[var(--color-primary)]"
          >
            Corretores
          </Link>
          <Link
            href="/contato"
            className="text-2sm/8 font-semibold text-white hover:text-[var(--color-primary)]"
          >
            Contato
          </Link>
          <NavbarActions />
        </PopoverGroup>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-[var(--color-gray-2)] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <span className="sr-only">property</span>
            <Link href={"/"}>
              <Image src={LogoWhiteLime} alt="Logo" className="w-7" />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-[var(--color-primary)]"
            >
              <span className="sr-only">Fechar menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-white hover:bg-[var(--color-primary)] hover:text-black">
                    Detalhes
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="size-5 flex-none group-data-open:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...products, ...callsToAction].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pr-3 pl-6 text-2sm/8 font-semibold text-white hover:bg-[var(--color-primary)] hover:text-black"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <Link
                  href="/sobre"
                  className="mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:text-[var(--color-primary)]"
                >
                  Sobre
                </Link>
                <Link
                  href="/sobre#corretores"
                  className="mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:text-[var(--color-primary)]"
                >
                  Corretores
                </Link>
                <a
                  href="/contato"
                  className="mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:text-[var(--color-primary)]"
                >
                  Contato
                </a>
              </div>
              <div className="py-6">
                <Link
                  href="/contato"
                  className="mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white hover:text-[var(--color-primary)]"
                >
                  Agendar Visita
                </Link>
                <Link
                  href="/contato"
                  className="mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white hover:text-[var(--color-primary)]"
                >
                  Atendimento
                </Link>
              </div>
              <Link
                href="/cart"
                className="block items-center mx-3 rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white hover:text-[var(--color-primary)]"
              >
                Carrinho
                <NavbarActions />
              </Link>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </>
  );
}