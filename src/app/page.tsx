import Link from "next/link";
import { Music, Heart, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="flex-1 flex-col flex-center text-center">
      <div className="mb-8 wave-animation">
        <div className="wave-bar"></div>
        <div className="wave-bar"></div>
        <div className="wave-bar"></div>
        <div className="wave-bar"></div>
        <div className="wave-bar"></div>
      </div>
      
      <h1>
        Sua história pode virar <br />
        <span className="text-gradient-gold">uma música.</span> 🎵
      </h1>
      
      <p className="mt-4 mb-8" style={{ fontSize: "1.125rem", maxWidth: "480px" }}>
        Conte um pouco da sua história e deixe a inteligência artificial 
        transformar seus momentos em uma música feita especialmente para você.
      </p>

      <div className="mb-8" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', opacity: 0.7 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Heart size={20} color="var(--accent-purple)" /> <span>Personalizado</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Sparkles size={20} color="var(--accent-gold)" /> <span>Inteligência Artificial</span>
        </div>
      </div>
      
      <Link href="/quiz" className="btn btn-primary" style={{ maxWidth: '300px' }}>
        CRIAR MINHA MÚSICA
      </Link>
      
      <p className="mt-8" style={{ fontSize: "0.875rem", opacity: 0.6, maxWidth: '400px' }}>
        Você responde 5 perguntas → conta sua história → recebe uma prévia 
        personalizada em poucos segundos.
      </p>
    </div>
  );
}
