import "./globals.css";
import type { Metadata } from "next";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import ModalProvider from "@/providers/modal-provider";
import ToastProvider from "@/providers/toast-provider";

export const metadata: Metadata = {
  title:
    "Property | Aluguel e venda de Casas, Apartamentos e Espaços Profissionais",
  description:
    "Encontre o imóvel ideal para morar ou trabalhar! Alugue casas, apartamentos e salas comerciais de forma rápida e segura.",
  };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`antialiased`}>
        <Header />
        <ModalProvider />
        <ToastProvider />
        {children}
        <Footer />
      </body>
    </html>
  );
}
