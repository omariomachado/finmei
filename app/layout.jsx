import "./globals.css";

export const metadata = {
  title: "FinMEI — Gestão Financeira Simplificada para MEIs",
  description: "Controle suas finanças de forma simples e prática.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
