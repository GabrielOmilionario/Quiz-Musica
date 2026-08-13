"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const messages = [
  "Analisando sua história...",
  "Encontrando os momentos mais importantes...",
  "Criando a letra...",
  "Definindo o estilo musical...",
  "Gerando sua prévia..."
];

export default function ProcessingScreen() {
  const router = useRouter();
  const [currentMessage, setCurrentMessage] = useState(0);

  useEffect(() => {
    // Progress through messages
    const interval = setInterval(() => {
      setCurrentMessage((prev) => {
        if (prev < messages.length - 1) {
          return prev + 1;
        }
        clearInterval(interval);
        return prev;
      });
    }, 2500);

    // Redirect to demo page after all messages
    const timeout = setTimeout(() => {
      router.push("/demo");
    }, messages.length * 2500 + 1000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [router]);

  return (
    <div className="animate-fade-in flex-col flex-center" style={{ minHeight: '60vh' }}>
      <h2 className="mb-8" style={{ fontSize: '1.75rem' }}>
        Estamos transformando <br />
        <span className="text-gradient-gold">sua história</span> em música... 🎵
      </h2>

      <div className="wave-animation" style={{ margin: '3rem 0', transform: 'scale(1.5)' }}>
        <div className="wave-bar"></div>
        <div className="wave-bar"></div>
        <div className="wave-bar"></div>
        <div className="wave-bar"></div>
        <div className="wave-bar"></div>
        <div className="wave-bar"></div>
        <div className="wave-bar"></div>
      </div>

      <div style={{ height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p key={currentMessage} className="animate-fade-in" style={{ fontSize: '1.125rem', fontWeight: 500, color: 'var(--accent-gold)' }}>
          {messages[currentMessage]}
        </p>
      </div>
    </div>
  );
}
