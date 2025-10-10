"use client";

import { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { Briefcase, Instagram, Mail, Sparkles } from "lucide-react";

// ✅ Conexão segura com Supabase via variáveis de ambiente
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default function Home() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      setMessage("⚠️ Digite um e-mail válido.");
      return;
    }

    const { error } = await supabase.from("email").insert([{ email }]);

    if (error) {
      console.error(error);
      setMessage("⚠️ Ocorreu um erro. Verifique o e-mail e tente novamente.");
    } else {
      setMessage("✅ E-mail cadastrado com sucesso! Você será avisado no lançamento 🚀");
      setEmail("");
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-950 via-emerald-900 to-black text-white flex flex-col items-center justify-between">
      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-16 mt-12 max-w-3xl">
        <div className="relative">
          <Sparkles className="absolute -top-6 -right-6 text-emerald-400 w-6 h-6 animate-pulse" />
          <h1 className="text-5xl font-extrabold leading-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-green-300 drop-shadow-lg">
            Simplifique sua vida financeira com o <span className="text-white">FinMEI</span>
          </h1>
        </div>
        <p className="text-lg text-gray-300 mb-6">
          Controle, organização e crescimento para quem faz o Brasil acontecer — os microempreendedores.
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 w-full max-w-md mt-4"
        >
          <input
            type="email"
            value={email}
            placeholder="Digite seu e-mail"
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-3 rounded-xl bg-emerald-950 border border-emerald-600 text-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all"
          />
          <button
            type="submit"
            className="bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-emerald-500/40 transition-all"
          >
            Quero ser avisado
          </button>
        </form>
        {message && (
          <p className="mt-3 text-sm text-gray-300">{message}</p>
        )}
      </section>

      {/* BENEFÍCIOS */}
      <section className="text-center px-6 py-16 bg-gradient-to-t from-black/30 to-transparent w-full">
        <h2 className="text-3xl font-bold mb-8 text-emerald-300">
          {"💡"} Por que escolher o FinMEI?
        </h2>
        <div className="grid sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="p-6 rounded-2xl bg-emerald-950/50 border border-emerald-800 hover:border-emerald-400 transition-all">
            <h3 className="text-xl font-semibold text-emerald-200 mb-2">Gestão Simplificada</h3>
            <p className="text-gray-400">Organize receitas, despesas e fluxo de caixa em poucos cliques.</p>
          </div>
          <div className="p-6 rounded-2xl bg-emerald-950/50 border border-emerald-800 hover:border-emerald-400 transition-all">
            <h3 className="text-xl font-semibold text-emerald-200 mb-2">Insights Financeiros</h3>
            <p className="text-gray-400">Descubra oportunidades de crescimento com relatórios automáticos.</p>
          </div>
          <div className="p-6 rounded-2xl bg-emerald-950/50 border border-emerald-800 hover:border-emerald-400 transition-all">
            <h3 className="text-xl font-semibold text-emerald-200 mb-2">Apoio Real</h3>
            <p className="text-gray-400">O FinMEI foi criado por quem entende as dores do microempreendedor.</p>
          </div>
        </div>

        <p className="mt-10 text-gray-400">
          <Briefcase className="inline w-5 h-5 text-emerald-400 mr-1" />
          Mais de <span className="text-emerald-400 font-semibold">120 microempreendedores</span> já estão na lista de espera do FinMEI.
        </p>
      </section>

      {/* RODAPÉ */}
      <footer className="w-full bg-black/40 py-6 border-t border-emerald-900 mt-10 text-center text-gray-400 text-sm">
        <div className="flex flex-col items-center gap-3">
          <div className="flex gap-5 justify-center">
            <a href="https://www.instagram.com/finmeiapp" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-all">
              <Instagram className="inline w-5 h-5 mr-1" /> @finmeiapp
            </a>
            <a href="mailto:finmei.contato@gmail.com" className="hover:text-emerald-400 transition-all">
              <Mail className="inline w-5 h-5 mr-1" /> finmei.contato@gmail.com
            </a>
          </div>
          <p className="text-gray-500">
            © FinMEI 2025 - Melhorando a vida de quem faz o Brasil acontecer!
          </p>
        </div>
      </footer>
    </main>
  );
}
feat: upgrade to FinMEI Premium Landing (V3)
