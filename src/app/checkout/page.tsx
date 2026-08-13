"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Loader2, Lock } from "lucide-react";

export default function CheckoutPage() {
  const router = useRouter();
  const [processing, setProcessing] = useState(false);

  const handlePayment = () => {
    setProcessing(true);
    // Simular processamento do Stripe / Gateway
    setTimeout(() => {
      router.push("/success");
    }, 2500);
  };

  return (
    <div className="flex-1 flex-col flex-center animate-fade-in" style={{ padding: '2rem 1rem' }}>
      <div style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', padding: '2rem', borderRadius: 'var(--radius-lg)', width: '100%', maxWidth: '400px' }}>
        <h2 className="text-center mb-6">Finalizar Pedido</h2>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', borderBottom: '1px solid var(--card-border)', paddingBottom: '1rem' }}>
          <span>Música Completa Personalizada</span>
          <span style={{ fontWeight: 600 }}>R$ 9,99</span>
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem', fontWeight: 700, fontSize: '1.25rem' }}>
          <span>Total</span>
          <span className="text-gradient-gold">R$ 9,99</span>
        </div>

        <button 
          className="btn btn-primary" 
          onClick={handlePayment} 
          disabled={processing}
          style={{ width: '100%', display: 'flex', justifyContent: 'center', opacity: processing ? 0.7 : 1 }}
        >
          {processing ? <Loader2 className="animate-spin" /> : "PAGAR R$ 9,99"}
        </button>

        <p className="text-center mt-4" style={{ fontSize: '0.75rem', opacity: 0.6, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Lock size={12} className="mr-1" /> Ambiente de Pagamento Simulado
        </p>
      </div>
    </div>
  );
}
