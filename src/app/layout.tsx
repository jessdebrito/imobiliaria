import "./globals.css";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title:
    "Aluguel e venda de Casas, Apartamentos e Espaços Profissionais | IMOVÉIS WEB",
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
        {children}
        <Footer />
      </body>
    </html>
  );
}
