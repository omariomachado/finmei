import { useState } from "react";
<button type="submit" className="bg-emerald-600 text-white px-6 py-2 rounded-xl hover:bg-emerald-700 transition">
Quero testar o FinMEI
</button>
</form>
) : (
<p className="text-emerald-700 font-medium text-lg mt-4">✅ Obrigado! Você está na lista de espera 🎉</p>
)}
</section>


{/* Problema */}
<section className="bg-white py-16 px-6">
<div className="max-w-5xl mx-auto text-center">
<h3 className="text-3xl font-bold mb-6">Cansado de perder tempo com planilhas e prazos fiscais?</h3>
<p className="text-gray-600 mb-10">Todo mês é a mesma coisa: preencher planilhas, calcular despesas e lembrar do DAS. Você só quer saber quanto entrou, quanto saiu e o que precisa pagar.</p>
<div className="grid sm:grid-cols-3 gap-6">
<div className="p-6 border rounded-2xl shadow-sm"><p>📅 Esquece prazos fiscais.</p></div>
<div className="p-6 border rounded-2xl shadow-sm"><p>📊 Não sabe se o mês foi bom ou ruim.</p></div>
<div className="p-6 border rounded-2xl shadow-sm"><p>🧾 Usa planilhas que vivem quebrando.</p></div>
</div>
</div>
</section>


{/* Solução */}
<section className="bg-emerald-50 py-16 px-6 text-center">
<div className="max-w-5xl mx-auto">
<h3 className="text-3xl font-bold mb-6">Conheça o FinMEI — o painel que simplifica sua gestão financeira</h3>
<p className="text-gray-600 mb-8">Criado para empreendedores individuais que precisam de clareza e controle, sem precisar virar contador.</p>
<ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-left max-w-3xl mx-auto">
<li className="p-4 bg-white rounded-2xl shadow-sm">✅ Registre receitas e despesas em segundos.</li>
<li className="p-4 bg-white rounded-2xl shadow-sm">🔔 Receba alertas antes do vencimento do DAS.</li>
<li className="p-4 bg-white rounded-2xl shadow-sm">📈 Veja seu saldo e fluxo de caixa automaticamente.</li>
<li className="p-4 bg-white rounded-2xl shadow-sm">🧮 Gere relatórios mensais prontos para enviar ao contador.</li>
<li className="p-4 bg-white rounded-2xl shadow-sm">☁️ Acesse de qualquer lugar, no celular ou computador.</li>
</ul>
</div>
</section>


{/* CTA Final */}
<section className="py-20 px-6 text-center">
<h3 className="text-3xl font-bold mb-6">O controle financeiro que todo MEI merece</h3>
<p className="text-gray-600 mb-8">Entre para a lista de espera e seja um dos primeiros a testar gratuitamente o FinMEI.</p>
{!submitted ? (
<form onSubmit={handleSubmit} className="flex flex-col sm:flex-row justify-center gap-3 max-w-md mx-auto">
<input
type="email"
required
value={email}
onChange={(e) => setEmail(e.target.value)}
placeholder="Seu melhor e-mail"
className="flex-1 border border-gray-300 px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-400"
/>
<button type="submit" className="bg-emerald-600 text-white px-6 py-2 rounded-xl hover:bg-emerald-700 transition">
Entrar na lista
</button>
</form>
) : (
<p className="text-emerald-700 font-medium text-lg mt-4">✅ Você já está na lista 🎉</p>
)}
</section>


{/* Footer */}
<footer className="bg-emerald-700 text-white py-6 text-center">
<p>© 2025 FinMEI — Simplificando a vida do Microempreendedor.</p>
<p className="text-sm mt-2">📬 contato@finmei.com</p>
</footer>
</main>
);
}
