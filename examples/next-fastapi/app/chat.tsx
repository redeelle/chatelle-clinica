"use client";

import Link from 'next/link';

export default function ChatPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-green-100 to-green-300 text-center p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Escuta Simbólica — REDE ELLe
      </h1>
      
      <p className="max-w-lg text-gray-700 mb-8">
        Esta é a sala de escuta simbólica da REDE ELLe. <br />
        No momento, a integração com a IA ainda não foi ativada. <br />
        Aguarde futuras atualizações ou volte para a página inicial.
      </p>

      <Link href="/">
        <button className="bg-blue-600 text-white font-semibold py-2 px-6 rounded hover:bg-blue-700 transition">
          Voltar ao Início
        </button>
      </Link>
    </main>
  );
}
