"use client";

import { useState } from "react";

export default function Page() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail("");
  };

  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      {/* HEADER */}
      <header className="container flex items-center justify-between py-5">
        <div className="flex items-center gap-3">
          <div className="bg-emerald-600 text-white rounded-md px-3 py-1 font-semibold">FinMEI</div>
          <span className="text-sm text-gray-600">Simples. Claro. Pra você.</span>
        </div>

        <nav>
          <a
            href="#cadastro"
            className="inline-block px-4 py-2 bg-emerald-600 text-white rounded-lg text-sm hover:bg-emerald-700 transition"
          >
            Entrar na lista
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section className="bg-gradient-to-b from-emerald-50 to-white py-20">
        <div className="container max-w-3xl mx-auto text-center px-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4">
            Organize seu dinheiro. Sem planilha, sem dor de cabeça.
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Você faz o trabalho — o FinMEI ajuda a cuidar do resto. Veja quanto entrou, quanto saiu e o que
            você precisa pagar (como o DAS), tudo de forma simples e visual.
          </p>

          {!submitted ? (
            <form
              id="cadastro"
              onSubmit={handleSubmit}
              className="mx-auto max-w-md flex flex-col sm:flex-row gap-3"
              aria-label="Formulário de cadastro FinMEI"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Digite seu melhor e-mail"
                className="flex-1 border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-300"
                aria-label="Email"
              />
              <button
                type="submit"
                className="bg-emerald-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition"
              >
                Quero acesso grátis
              </button>
            </form>
          ) : (
            <p className="text-emerald-700 font-medium mt-4">✅ Pronto — você entrou na lista! Em breve avisamos.</p>
          )}

          <p className="text-sm text-gray-500 mt-6">
            As 100 primeiras pessoas terão acesso beta gratuito — sem compromisso.
          </p>
        </div>
      </section>

      {/* PROBLEMA RÁPIDO */}
      <section className="py-12">
        <div className="container max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-3">Isso soa familiar?</h2>
          <p className="text-gray-700 mb-6">
            Você anota no caderno, no WhatsApp ou numa planilha que sempre quebra. No fim do mês não sabe se sobrou
            ou se tem conta atrasada. E o DAS? Você fica com medo de esquecer.
          </p>

          <div className="grid sm:grid-cols-3 gap-6">
            <div className="p-5 bg-white border rounded-lg shadow-sm">
              <p className="font-semibold mb-2">⏰ Esquece prazos</p>
              <p className="text-sm text-gray-600">Sem lembrete, os pagamentos passam batido.</p>
            </div>
            <div className="p-5 bg-white border rounded-lg shadow-sm">
              <p className="font-semibold mb-2">📉 Sem visão clara</p>
              <p className="text-sm text-gray-600">Você não sabe se o mês foi bom até olhar as contas.</p>
            </div>
            <div className="p-5 bg-white border rounded-lg shadow-sm">
              <p className="font-semibold mb-2">🧾 Planilhas confusas</p>
              <p className="text-sm text-gray-600">Ferramentas complexas que não falam a sua língua.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUÇÃO */}
      <section className="py-16 bg-emerald-50">
        <div className="container max-w-5xl mx-auto px-6">
          <h3 className="text-2xl font-bold mb-6 text-center">Como o FinMEI ajuda você</h3>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-lg border shadow-sm">
              <p className="font-semibold mb-2">Registrar em segundos</p>
              <p className="text-sm text-gray-700">Anote entradas e saídas rapidamente, direto do celular.</p>
            </div>

            <div className="p-6 bg-white rounded-lg border shadow-sm">
              <p className="font-semibold mb-2">Lembretes automáticos</p>
              <p className="text-sm text-gray-700">Receba aviso antes do vencimento do DAS e outras taxas.</p>
            </div>

            <div className="p-6 bg-white rounded-lg border shadow-sm">
              <p className="font-semibold mb-2">Relatórios prontos</p>
              <p className="text-sm text-gray-700">Mostre ao seu contador ou confira seu lucro do mês num PDF simples.</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <a href="#cadastro" className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition">
              Quero começar — é grátis
            </a>
          </div>
        </div>
      </section>

      {/* PROVAS (SIMULADAS) */}
      <section className="py-16">
        <div className="container max-w-4xl mx-auto px-6 text-center">
          <h4 className="text-lg font-semibold mb-4">Quem já entrou na lista</h4>
          <p className="text-sm text-gray-600 mb-6">Mais de 120 profissionais como você — cabeleireiros, pedreiros, vendedores e entregadores.</p>

          <div className="grid sm:grid-cols-3 gap-6">
            <div className="p-5 bg-emerald-50 rounded-lg">
              <p className="italic">“Agora eu sei quando posso tirar dinheiro pra mim.”</p>
              <p className="font-semibold mt-3">— Maria, cabeleireira</p>
            </div>
            <div className="p-5 bg-emerald-50 rounded-lg">
              <p className="italic">“O lembrete do DAS me salvou de uma multa.”</p>
              <p className="font-semibold mt-3">— Antônio, motorista</p>
            </div>
            <div className="p-5 bg-emerald-50 rounded-lg">
              <p className="italic">“Uso no celular e resolve tudo rapidinho.”</p>
              <p className="font-semibold mt-3">— Carla, vendedora online</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-16 bg-gradient-to-b from-white to-emerald-50">
        <div className="container max-w-3xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold mb-4">Quer mais segurança com suas finanças?</h3>
          <p className="text-gray-700 mb-6">Entre na lista de espera e seja avisado quando a versão beta estiver disponível.</p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="mx-auto max-w-md flex gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu melhor e-mail"
                className="flex-1 border border-gray-300 px-4 py-3 rounded-lg"
              />
              <button type="submit" className="bg-emerald-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition">
                Me avise
              </button>
            </form>
          ) : (
            <p className="text-emerald-700 font-medium mt-4">✅ Você está na lista — obrigado!</p>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 border-t">
        <div className="container max-w-6xl mx-auto px-6 text-center">
          <p className="text-sm text-gray-600">© 2025 FinMEI — Feito para quem empreende com as próprias mãos.</p>
          <p className="text-sm text-gray-500 mt-2">Contato: contato@finmei.com</p>
        </div>
      </footer>
    </main>
  );
}
