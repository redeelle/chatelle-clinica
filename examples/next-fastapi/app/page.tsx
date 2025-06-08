'use client'

import { useState } from 'react';

export default function Home() {
  const [accepted, setAccepted] = useState<boolean | null>(null);

  const handleAccept = () => {
    setAccepted(true);
    window.location.href = '/01-chat-text'; // Rota padrão após aceite
  };

  const handleReject = () => {
    setAccepted(false);
    window.location.href = '/end';
};

  return (
    <main className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-b from-green-100 to-green-300 p-8 text-center text-slate-800">
      <h1 className="text-3xl font-bold mb-6">Termo de Consentimento – REDE ELLe</h1>
      <div className="max-w-xl text-left bg-white p-6 rounded shadow-md space-y-4 text-sm">
        <p>
          Você está sendo convidado(a) a participar de uma experiência clínica simbólica, que envolve a interação com uma Inteligência Artificial (IA) treinada por meio de um Prompt REDE ELLe.
        </p>
        <p>
          A IA utilizada nesta experiência é baseada na tecnologia da plataforma ChatGPT, desenvolvida pela empresa OpenAI, sendo operada sob a supervisão da Psicanalista Clínica Carla Viviane Guedes Ferreira, fundadora da REDE ELLe.
        </p>
        <p>
          Este uso é de natureza estritamente experimental. A IA não substitui o atendimento clínico humano, não realiza diagnósticos, não prescreve condutas e não é um profissional de saúde.
        </p>
        <p>
          Todas as interações serão acompanhadas pela profissional responsável, garantindo um ambiente ético, cuidadoso e protegido.
        </p>
        <p>
          Com sua autorização expressa, o conteúdo da interação poderá ser gravado de forma anônima para fins de pesquisa, análise simbólica ou desenvolvimento institucional da REDE ELLe.
        </p>
        <p className="font-semibold mt-4">
          Você concorda com o Termo de Consentimento acima?
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          <button
            onClick={handleAccept}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded"
          >
            Aceito
          </button>
          <button
            onClick={handleReject}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded"
          >
            Não Aceito
          </button>
        </div>
      </div>
    </main>
  );
}
