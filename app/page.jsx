"use client";

import { useState } from "react";
import { Instagram, Mail as MailIcon } from "lucide-react";

export default function Home() {
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
  });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [message, setMessage] = useState("");

  const update = (k, v) => setForm((s) => ({ ...s, [k]: v }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    // validações básicas
    if (!form.email || !form.email.includes("@")) {
      setMessage("Por favor digite um e-mail válido.");
      setStatus("error");
      return;
    }
    if (!form.first_name || !form.last_name) {
      setMessage("Por favor informe seu nome e sobrenome.");
      setStatus("error");
      return;
    }
    if (!form.phone || form.phone.length < 8) {
      setMessage("Por favor informe um telefone válido.");
      setStatus("error");
      return;
    }

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setMessage(data?.message ?? "✅ Cadastro realizado com sucesso!");
        setForm({ first_name: "", last_name: "", phone: "", email: "" });
      } else {
        setStatus("error");
        setMessage(data?.error ?? "Ocorreu um erro. Tente novamente mais tarde.");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setMessage("Erro na conexão. Tente novamente.");
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-950 via-emerald-900 to-black text-white flex flex-col items-center">
      {/* HEADER HERO */}
      <header className="w-full max-w-5xl px-6 pt-12">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-emerald-700 rounded-md px-3 py-1 font-semibold">FinMEI</div>
            <span className="text-sm text-gray-300">Simples. Claro. Pra você.</span>
          </div>
          <nav>
            <a href="#cadastro" className="bg-emerald-600 hover:bg-emerald-500 text-black px-4 py-2 rounded-lg font-semibold">
              Entrar na lista
            </a>
          </nav>
        </div>
      </header>

      <section className="w-full max-w-3xl px-6 text-center mt-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-green-300">
          Controle total das suas finanças MEI — sem complicação.
        </h1>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
          Organize receitas, despesas e pagamentos (como o DAS) com um painel simples — feito para quem
          trabalha com as mãos, o dia a dia e precisa de clareza financeira agora.
        </p>

        {/* FORM */}
        <form id="cadastro" onSubmit={handleSubmit} className="mt-8 bg-emerald-950/40 p-6 rounded-2xl shadow-lg border border-emerald-800 max-w-2xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              value={form.first_name}
              onChange={(e) => update("first_name", e.target.value)}
              placeholder="Nome"
              className="px-4 py-3 rounded-lg border border-emerald-800 bg-emerald-950 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <input
              value={form.last_name}
              onChange={(e) => update("last_name", e.target.value)}
              placeholder="Sobrenome"
              className="px-4 py-3 rounded-lg border border-emerald-800 bg-emerald-950 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <input
              value={form.phone}
              onChange={(e) => update("phone", e.target.value)}
              placeholder="Telefone (ex: 11998765432)"
              inputMode="tel"
              className="px-4 py-3 rounded-lg border border-emerald-800 bg-emerald-950 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <input
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              placeholder="E-mail"
              type="email"
              className="px-4 py-3 rounded-lg border border-emerald-800 bg-emerald-950 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div className="mt-6 flex items-center justify-between gap-4">
            <button
              type="submit"
              disabled={status === "loading"}
              className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-black font-semibold px-6 py-3 rounded-xl shadow-lg hover:scale-[1.02] transition"
            >
              {status === "loading" ? "Enviando..." : "Quero testar — me avise"}
            </button>

            <div className="text-sm text-gray-300">
              <strong className="text-emerald-300">Beta gratuito</strong> — primeiras 100 vagas.
            </div>
          </div>

          {message && (
            <p className={`mt-4 text-sm ${status === "success" ? "text-emerald-300" : "text-red-400"}`}>
              {message}
            </p>
          )}
        </form>
      </section>

      {/* BENEFÍCIOS / SOCIAL PROOF */}
      <section className="w-full max-w-5xl px-6 py-12">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-emerald-950/30 border border-emerald-800">
            <h4 className="font-semibold text-emerald-200">Registre em segundos</h4>
            <p className="text-gray-400 text-sm mt-2">Use o celular para anotar entradas e saídas rapidamente.</p>
          </div>
          <div className="p-6 rounded-2xl bg-emerald-950/30 border border-emerald-800">
            <h4 className="font-semibold text-emerald-200">Lembretes automáticos</h4>
            <p className="text-gray-400 text-sm mt-2">Nunca mais perca o vencimento do DAS.</p>
          </div>
          <div className="p-6 rounded-2xl bg-emerald-950/30 border border-emerald-800">
            <h4 className="font-semibold text-emerald-200">Relatórios prontos</h4>
            <p className="text-gray-400 text-sm mt-2">Relatórios simples para você ou seu contador.</p>
          </div>
        </div>

        <p className="mt-8 text-center text-gray-400">
          <span className="inline-block align-middle mr-2">💼</span>
          Mais de <span className="text-emerald-400 font-semibold">120 microempreendedores</span> já estão na lista.
        </p>
      </section>

      {/* FOOTER */}
      <footer className="w-full border-t border-emerald-900 bg-black/40 py-8 mt-8 text-center text-gray-400">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <p className="font-semibold text-emerald-300">© FinMEI 2025</p>
            <p className="text-sm text-gray-400">Melhorando a vida de quem faz o Brasil acontecer!</p>
          </div>

          <div className="flex items-center gap-6">
            <a href="https://www.instagram.com/finmeiapp" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-emerald-300 transition">
              <Instagram size={18} /> <span className="text-sm">@finmeiapp</span>
            </a>
            <a href="mailto:finmei.contato@gmail.com" className="flex items-center gap-2 hover:text-emerald-300 transition">
              <MailIcon size={18} /> <span className="text-sm">finmei.contato@gmail.com</span>
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
