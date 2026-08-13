"use client";

import { useEffect, useState } from "react";
import { CheckCircle, Music, Download, Share2 } from "lucide-react";
import AudioPlayer from "@/components/AudioPlayer";

export default function SuccessPage() {
  const [generating, setGenerating] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    "Organizando sua história...",
    "Escrevendo a letra...",
    "Criando o refrão...",
    "Compondo a música...",
    "Gerando os vocais...",
    "Finalizando sua música..."
  ];

  useEffect(() => {
    if (!generating) return;

    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < steps.length - 1) return prev + 1;
        clearInterval(interval);
        setTimeout(() => setGenerating(false), 1500);
        return prev;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [generating, steps.length]);

  if (generating) {
    return (
      <div className="flex-1 flex-col flex-center text-center animate-fade-in" style={{ minHeight: '60vh' }}>
        <CheckCircle size={48} color="#10b981" style={{ marginBottom: '1.5rem' }} />
        <h2 className="mb-4">Pagamento confirmado! 🎉</h2>
        <p style={{ opacity: 0.8, marginBottom: '2rem' }}>Agora vamos transformar sua história em uma música completa.</p>
        
        <div style={{ padding: '2rem', background: 'var(--card-bg)', border: '1px solid var(--accent-gold)', borderRadius: 'var(--radius-lg)', width: '100%' }}>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>Sua música está sendo criada... 🎶</h3>
          <div className="wave-animation" style={{ justifyContent: 'center', margin: '2rem 0' }}>
            <div className="wave-bar"></div>
            <div className="wave-bar"></div>
            <div className="wave-bar"></div>
            <div className="wave-bar"></div>
            <div className="wave-bar"></div>
          </div>
          <p style={{ color: 'var(--accent-gold)', fontWeight: 500, minHeight: '24px' }}>
            {steps[currentStep]}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 flex-col animate-fade-in" style={{ paddingBottom: '3rem' }}>
      <div className="text-center mb-8">
        <h1 style={{ fontSize: '2.5rem' }}>
          Sua história agora <br />tem <span className="text-gradient-gold">uma música.</span> ❤️
        </h1>
        <p className="mt-4" style={{ opacity: 0.8 }}>Feita especialmente para você a partir da sua história.</p>
      </div>

      {/* Album Cover Mock */}
      <div style={{ width: '100%', aspectRatio: '1/1', maxWidth: '300px', margin: '0 auto 2rem auto', background: 'linear-gradient(45deg, var(--background), #1a1a24)', border: '1px solid var(--card-border)', borderRadius: 'var(--radius-lg)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-purple)' }}>
        <Music size={64} style={{ opacity: 0.2 }} />
      </div>

      <div className="text-center mb-6">
        <h2 style={{ fontSize: '1.75rem', fontWeight: 600 }}>Nossa História</h2>
        <p style={{ opacity: 0.6 }}>Gerada por Inteligência Artificial</p>
      </div>

      <AudioPlayer />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '2rem' }}>
        <button className="btn" style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', padding: '0.75rem' }}>
          <Download size={20} className="mr-2" style={{ marginRight: '0.5rem' }} /> Baixar
        </button>
        <button className="btn" style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', padding: '0.75rem' }}>
          <Share2 size={20} className="mr-2" style={{ marginRight: '0.5rem' }} /> Compartilhar
        </button>
      </div>

      <div className="mt-8" style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', padding: '1.5rem', borderRadius: 'var(--radius-lg)' }}>
        <h3 className="mb-4" style={{ fontSize: '1.25rem' }}>Letra</h3>
        <p style={{ opacity: 0.8, whiteSpace: 'pre-line', lineHeight: 1.8, fontStyle: 'italic' }}>
          (Verso 1)<br/>
          Foi naquele dia que tudo mudou<br/>
          Um olhar sincero que o tempo guardou<br/>
          Cada passo que demos até chegar aqui<br/>
          Me fez ver que o amor nasceu pra mim<br/>
          <br/>
          (Refrão)<br/>
          Nossa história é a canção mais bonita<br/>
          Escrita nas estrelas, pela vida inteira<br/>
          E tudo que passamos nos trouxe até aqui<br/>
          Sempre vou amar você, sempre perto de mim...
        </p>
      </div>
    </div>
  );
}
