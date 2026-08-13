import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "Sua Música Vira História",
  description: "Transforme seus momentos inesquecíveis em uma música feita por IA exclusivamente para você.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={outfit.className}>
        <main className="container animate-fade-in">
          {children}
        </main>
      </body>
    </html>
  );
}
