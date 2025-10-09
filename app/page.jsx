"use client";

import { useState } from "react";
import { createClient } from "@supabase/supabase-js";
if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
  console.error("❌ Variáveis do Supabase ausentes! Verifique na Vercel Settings > Environment Variables.");
} else {
  console.log("✅ Variáveis do Supabase carregadas com sucesso.");
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function Home() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");

    const { error } = await supabase.from("email").insert([{ email }]);

    if (error) {
      setStatus("⚠️ Ocorreu um erro. Verifique o e-mail e tente novamente.");
    } else {
      setStatus("✅ Sucesso! Você foi adicionado à lista de espera.");
      setEmail("");
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-200 via-sky-200 to-purple-200 text-gray-900 font-inter relative overflow-hidden">
      {/* Efeito de brilho animado no fundo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.6),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.4),transparent_40%)] animate-pulse opacity-70"></div>

      <section className="relative z-10 px-6 text-center max-w-3xl">
        <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight tracking-tight text-gray-900 animate-fade-up">
          O painel financeiro que todo{" "}
          <span className="bg-gradient-to-r from-green-500 to-emerald-700 bg-clip-text text-transparent">
            MEI
          </span>{" "}
          precisava.
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-gray-700 leading-relaxed">
          Simplifique sua gestão financeira, visualize lucros e nunca mais
          esqueça o DAS — tudo em um só lugar, feito para quem vive o dia a dia
          do MEI.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <input
            type="email"
            placeholder="Seu melhor e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full sm:w-80 px-5 py-3 rounded-xl border border-gray-300 focus:ring-4 focus:ring-green-300 focus:border-green-500 outline-none transition duration-300 shadow-md"
          />
          <button
            type="submit"
            className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-emerald-600 text-white px-7 py-3 rounded-xl font-semibold text-lg shadow-lg hover:shadow-green-400/40 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.03]"
          >
            Quero participar{" "}
            <span className="animate-bounce">🚀</span>
          </button>
        </form>

        {status && (
          <p
            className={`mt-6 text-base font-medium ${
              status.startsWith("✅") ? "text-green-700" : "text-red-600"
            }`}
          >
            {status}
          </p>
        )}

        <p className="mt-10 text-sm text-gray-600">
          Mais de{" "}
          <span className="font-semibold text-emerald-700">
            120 microempreendedores
          </span>{" "}
          já estão na lista de espera.
        </p>
      </section>
    </main>
  );
}
