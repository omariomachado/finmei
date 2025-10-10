"use client";
import { useState } from "react";
import { FaInstagram, FaEnvelope } from "react-icons/fa";

export default function Home() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    if (!email || !email.includes("@")) {
      setStatus("error");
      return;
    }

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error("Erro:", err);
      setStatus("error");
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-between bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white px-6">
      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center mt-20">
        <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-emerald-400 to-green-600 bg-clip-text text-transparent">
          Controle total das suas finanças MEI.
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
          Com o <strong>FinMEI</strong>, você simplifica sua gestão financeira, 
          acompanha lucros e nunca mais esquece o DAS. Tudo em um só painel.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-10 flex flex-col sm:flex-row gap-3 w-full max-w-md"
        >
          <input
            type="email"
            placeholder="Seu melhor e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-3 rounded-xl border border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-6 rounded-xl transition transform hover:scale-[1.03] hover:shadow-lg"
          >
            {status === "loading" ? "Enviando..." : "Quero participar 🚀"}
          </button>
        </form>

        {status === "success" && (
          <p className="text-emerald-400 mt-4 font-medium">
            ✅ Sucesso! Você foi adicionado à lista de espera.
          </p>
        )}
        {status === "error" && (
          <p className="text-red-500 mt-4 font-medium">
            ⚠️ Ocorreu um erro. Verifique o e-mail e tente novamente.
          </p>
        )}
      </section>

      {/* SOCIAL PROOF */}
      <section className="mt-20 text-center">
        <p className="text-gray-400 text-sm tracking-wide uppercase mb-3">
          Confiança que cresce todo dia
        </p>
        <p className="text-gray-200 text-lg">
          💼 Mais de <span className="text-emerald-400 font-semibold">120 microempreendedores</span> 
          já estão na lista de espera do FinMEI.
        </p>
