import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-center font-bold text-6xl">ERRO 404!</h1>
      <h2 className="text-center font-bold text-4xl">Página não encontrada!</h2>
      <p>Essa página que tentou acessar não existe!</p>
      <Link href="/" className="font-bold">
        Voltar para a Home
      </Link>
    </div>
  );
}
