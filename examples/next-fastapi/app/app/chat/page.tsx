"use client";

import Link from 'next/link';

export default function ChatPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-green-100 to-green-300 text-center p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Escuta Simbólica — REDE ELLe
      </h1>
      
      <p className="max-w-lg text-gray-700 mb-8">
        Bem-vindo(a) à Escutadora Simbólica da REDE ELLe. <br />
        Em breve, esta página estará conectada à IA simbólica com escuta ampliada.<br />
        No momento, este é um espaço de preparo institucional.
      </p>

      <Link href="/">
        <button className="bg-blue-600 text-white font-semibold py-2 px-6 rounded hover:bg-blue-700 transition">
          Voltar ao Início
        </button>
      </Link>
    </main>
  );
}
