"use client";

import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://umnpaipjrvpqujdkmusv.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVtbnBhaXBqcnZwcXVqZGttdXN2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk5MDY2NzMsImV4cCI6MjA3NTQ4MjY3M30.U1H3EcHnSmOY_5quV9OiVxxzhayP4kntGhRq-FB-pZU";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

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
      const { error } = await supabase.from("email").insert([{ email }]);

      if (error) {
        console.error("Erro ao salvar lead:", error.message);
        setStatus("error");
      } else {
        setStatus("success");
        setEmail("");
      }
    } catch (err) {
      console.error("Erro inesperado:", err);
      setStatus("error");
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-green-50 px-6 text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-12">
        O painel financeiro que todo MEI precisava.
      </h1>
      <p className="mt-4 text-lg text-gray-700 max-w-xl">
        Simplifique sua gestão financeira, visualize lucros e nunca mais esqueça o DAS — 
        tudo em um só lugar, feito para quem vive o dia a dia do MEI.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 w-full max-w-md">
        <input
          type="email"
          placeholder="Seu melhor e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-xl transition"
        >
          {status === "loading" ? "Enviando..." : "Quero participar 🚀"}
        </button>
      </form>

      {status === "success" && (
        <p className="text-green-600 mt-4 font-medium">
          ✅ Sucesso! Você foi adicionado à lista de espera.
        </p>
      )}
      {status === "error" && (
        <p className="text-red-500 mt-4 font-medium">
          ⚠️ Ocorreu um erro. Verifique o e-mail e tente novamente.
        </p>
      )}

      <footer className="mt-20 text-gray-500 text-sm">
        Mais de <span className="font-semibold text-green-700">120 microempreendedores</span> já estão na lista de espera.
      </footer>
    </main>
  );
}
