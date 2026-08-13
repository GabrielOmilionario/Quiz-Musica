import AudioPlayer from "@/components/AudioPlayer";
import Link from "next/link";
import { Lock, Sparkles, Heart, Music, CheckCircle } from "lucide-react";

export default function DemoPage() {
  return (
    <div className="flex-1 flex-col animate-fade-in" style={{ paddingBottom: '3rem' }}>
      
      <div className="text-center">
        <h2>Essa música foi criada a partir da <span className="text-gradient-gold">sua história.</span> ❤️</h2>
        <p className="mt-4 mb-4">
          Você acabou de ouvir apenas uma pequena parte do que sua história pode se tornar.
        </p>
      </div>

      <AudioPlayer />

      <div className="mt-8 text-center" style={{ padding: '2rem 1rem', background: 'var(--card-bg)', border: '1px solid var(--accent-gold)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-gold)' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Gostou de ouvir sua história virar música?</h2>
        <p style={{ opacity: 0.8, marginBottom: '1.5rem' }}>
          Essa foi apenas uma pequena prévia. Desbloqueie agora a música completa e receba uma versão criada especialmente com todos os detalhes da sua história.
        </p>

        <div style={{ margin: '2rem 0' }}>
          <span style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--accent-gold)' }}>R$ 9,99</span>
          <p style={{ opacity: 0.6 }}>Pagamento único</p>
        </div>

        <Link href="/checkout" className="btn btn-primary" style={{ width: '100%', marginBottom: '1.5rem' }}>
          QUERO MINHA MÚSICA COMPLETA 🎵
        </Link>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', textAlign: 'left', opacity: 0.8, fontSize: '0.875rem' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}><Lock size={16} className="mr-2" style={{ marginRight: '0.5rem', color: 'var(--accent-gold)' }} /> Pagamento seguro</div>
          <div style={{ display: 'flex', alignItems: 'center' }}><Sparkles size={16} className="mr-2" style={{ marginRight: '0.5rem', color: 'var(--accent-purple)' }} /> Criada com IA</div>
          <div style={{ display: 'flex', alignItems: 'center' }}><Heart size={16} className="mr-2" style={{ marginRight: '0.5rem', color: 'red' }} /> Feita com sua história</div>
          <div style={{ display: 'flex', alignItems: 'center' }}><Music size={16} className="mr-2" style={{ marginRight: '0.5rem', color: 'var(--accent-gold)' }} /> Versão completa</div>
        </div>
      </div>

      <div className="mt-8">
        <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', textAlign: 'center' }}>Ideal para:</h3>
        <ul style={{ listStyle: 'none', opacity: 0.8 }}>
          {[
            "Surpreender alguém que você ama",
            "Presentear uma pessoa especial",
            "Homenagear alguém",
            "Transformar uma história de amor em música",
            "Guardar uma lembrança para sempre"
          ].map((item, i) => (
            <li key={i} style={{ display: 'flex', alignItems: 'center', marginBottom: '0.75rem' }}>
              <CheckCircle size={18} color="var(--accent-gold)" style={{ marginRight: '0.75rem' }} /> {item}
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}
