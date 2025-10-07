"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Page() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail("");
  };

  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans scroll-smooth">
      {/* HEADER */}
      <header className="flex justify-between items-center px-6 py-5 max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-emerald-700"
        >
          FinMEI
        </motion.h1>
        <motion.a
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          href="#cadastro"
          className="px-5 py-2 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition font-semibold shadow-sm"
        >
          Entrar na lista
        </motion.a>
      </header>

      {/* HERO */}
      <section className="bg-gradient-hero text-center py-24 px-6 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto relative z-10"
        >
          <h2 className="text-5xl sm:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            Controle total das finanças do seu MEI <br />
            <span className="text-emerald-600">em poucos minutos ⏱️</span>
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            Veja lucros, despesas e o valor do DAS em segundos — tudo automático, visual e feito
            para quem quer entender o próprio dinheiro sem ser especialista.
          </p>

          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              id="cadastro"
              className="flex flex-col sm:flex-row justify-center gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Digite seu e-mail e entre na lista"
                className="flex-1 border border-gray-300 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <button
                type="submit"
                className="btn-primary"
              >
                Quero testar grátis 🚀
              </button>
            </form>
          ) : (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-emerald-700 font-medium text-lg mt-4"
            >
              ✅ Obrigado! Você está na lista de espera 🎉
            </motion.p>
          )}
        </motion.div>
      </section>

      {/* PROVA SOCIAL */}
      <section className="bg-white py-16 border-y border-gray-100">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-xl font-semibold text-gray-700 mb-6"
        >
          Mais de <span className="text-emerald-600 font-bold">120 microempreendedores</span> já estão na lista de espera.
        </motion.h3>
        <div className="flex justify-center gap-4 opacity-70">
          <div className="bg-gray-100 h-10 w-24 rounded-lg shadow-soft"></div>
          <div className="bg-gray-100 h-10 w-24 rounded-lg shadow-soft"></div>
          <div className="bg-gray-100 h-10 w-24 rounded-lg shadow-soft"></div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-emerald-50">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-10"
          >
            Tenha o controle total das suas finanças — sem planilhas e sem dor de cabeça
          </motion.h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              "Registre receitas e despesas em segundos.",
              "Receba alertas antes do vencimento do DAS.",
              "Veja seu saldo e fluxo de caixa automaticamente.",
              "Gere relatórios prontos para o contador.",
              "Acesse de qualquer lugar, no celular ou computador.",
              "Tenha clareza sobre o lucro real do seu negócio.",
            ].map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-6 bg-white border border-gray-100 rounded-2xl shadow-soft hover:shadow-md transition"
              >
                <p className="text-gray-700">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTEMUNHOS */}
      <section className="bg-white py-20 px-6 text-center border-y border-gray-100">
        <h3 className="text-3xl font-bold mb-10">O que outros MEIs dizem</h3>
        <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            {
              name: "João Silva",
              text: "“Antes eu me perdia nas planilhas. Agora sei exatamente quanto lucro tenho por mês.”",
            },
            {
              name: "Ana Souza",
              text: "“O FinMEI me avisa antes de vencer o DAS. Isso salvou meu negócio de multas!”",
            },
            {
              name: "Carlos Mendes",
              text: "“Rápido, simples e visual. Tudo o que eu precisava pra entender meu dinheiro.”",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-emerald-50 p-6 rounded-2xl shadow-soft"
            >
              <p className="italic text-gray-700 mb-4">{item.text}</p>
              <p className="font-semibold text-emerald-700">— {item.name}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 px-6 text-center bg-gradient-to-b from-emerald-50 to-white">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-6"
        >
          As 100 primeiras pessoas terão acesso gratuito à versão beta 🎁
        </motion.h3>
        <p className="text-gray-600 mb-8 max-w-xl mx-auto">
          Garanta seu lugar agora e seja um dos primeiros a testar o FinMEI antes do lançamento oficial.
        </p>

        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row justify-center gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Seu melhor e-mail"
              className="flex-1 border border-gray-300 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <button
              type="submit"
              className="btn-primary"
            >
              Quero garantir meu acesso
            </button>
          </form>
        ) : (
          <p className="text-emerald-700 font-medium text-lg mt-4">
            ✅ Você já está na lista! Em breve enviaremos novidades 🎉
          </p>
        )}
      </section>

      {/* FOOTER */}
      <footer className="bg-emerald-700 text-white py-8 text-center">
        <p className="font-medium">© 2025 FinMEI — Simplificando a vida do Microempreendedor.</p>
        <p className="text-sm mt-2 opacity-90">Feito com ❤️ para quem faz o Brasil acontecer.</p>
      </footer>
    </main>
  );
}
