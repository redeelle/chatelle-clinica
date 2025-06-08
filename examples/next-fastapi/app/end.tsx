"use client";

import Link from 'next/link';

export default function EndPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 text-center p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Escuta Encerrada
      </h1>
      
      <p className="max-w-lg text-gray-700 mb-8">
        Sua interação foi encerrada com respeito.  
        Caso deseje retornar em outro momento para acessar a Escutadora Simbólica da REDE ELLe, você poderá fazê-lo livremente a partir da página inicial.
      </p>

      <Link href="/">
        <button className="bg-blue-600 text-white font-semibold py-2 px-6 rounded hover:bg-blue-700 transition">
          Voltar ao Início
        </button>
      </Link>
    </main>
  );
}
