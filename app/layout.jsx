import "./globals.css";

export const metadata = {
  title: "FinMEI — Gestão Financeira Simplificada para MEIs",
  description: "Controle suas finanças de forma simples e prática.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
