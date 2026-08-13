"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronRight, ArrowLeft } from "lucide-react";

type QuizData = {
  target: string;
  targetName: string;
  emotion: string;
  moment: string;
  feeling: string;
  story: string;
};

export default function QuizFlow() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [data, setData] = useState<QuizData>({
    target: "",
    targetName: "",
    emotion: "",
    moment: "",
    feeling: "",
    story: "",
  });

  const nextStep = () => {
    if (step < 5) setStep(step + 1);
    else submitQuiz();
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const updateData = (key: keyof QuizData, value: string) => {
    setData((prev) => ({ ...prev, [key]: value }));
  };

  const submitQuiz = async () => {
    // In a real app, send to API: fetch('/api/quiz', { method: 'POST', body: JSON.stringify(data) })
    // For now, simulate saving and redirect to processing
    localStorage.setItem("music_quiz_data", JSON.stringify(data));
    router.push("/processing");
  };

  const progress = (step / 5) * 100;

  return (
    <div className="animate-fade-in flex-col flex-1" style={{ display: 'flex' }}>
      {step > 1 && (
        <button onClick={prevStep} style={{ display: 'flex', alignItems: 'center', opacity: 0.7, marginBottom: '1.5rem' }}>
          <ArrowLeft size={20} className="mr-2" /> Voltar
        </button>
      )}

      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>
      
      <p style={{ opacity: 0.7, marginBottom: '0.5rem', fontWeight: 500 }}>Pergunta {step} de 5</p>

      {step === 1 && (
        <div className="animate-fade-in">
          <h2>Para quem essa música seria? ❤️</h2>
          <div className="mt-8 flex-col">
            {["Para mim", "Para meu amor", "Para meu marido/minha esposa", "Para meus filhos", "Para meus pais", "Para alguém especial", "Outra pessoa"].map((opt) => (
              <button
                key={opt}
                className={`quiz-option ${data.target === opt ? "selected" : ""}`}
                onClick={() => { updateData("target", opt); }}
              >
                {opt}
              </button>
            ))}
            
            {data.target && (
              <div className="mt-4 animate-fade-in">
                <p className="mb-4">Como se chama?</p>
                <input 
                  type="text" 
                  className="input-field" 
                  placeholder="Nome da pessoa"
                  value={data.targetName}
                  onChange={(e) => updateData("targetName", e.target.value)}
                />
              </div>
            )}
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="animate-fade-in">
          <h2>Qual é o sentimento principal que você quer transmitir?</h2>
          <div className="mt-8 flex-col">
            {["Amor ❤️", "Gratidão", "Saudade", "Superação", "Homenagem", "Felicidade", "Recomeço", "Outro"].map((opt) => (
              <button
                key={opt}
                className={`quiz-option ${data.emotion === opt ? "selected" : ""}`}
                onClick={() => { updateData("emotion", opt); nextStep(); }}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="animate-fade-in">
          <h2>Qual momento da história de vocês não pode faltar nessa música?</h2>
          <div className="mt-8">
            <textarea
              className="textarea-field"
              placeholder="Ex: O dia em que nos conhecemos, nosso casamento, o nascimento do nosso filho, uma dificuldade que superamos juntos..."
              value={data.moment}
              onChange={(e) => updateData("moment", e.target.value)}
            />
          </div>
        </div>
      )}

      {step === 4 && (
        <div className="animate-fade-in">
          <h2>Como você gostaria que essa música fizesse a pessoa se sentir?</h2>
          <div className="mt-8 flex-col">
            {["Emocionada", "Feliz", "Com vontade de chorar", "Amada", "Nostálgica", "Inspirada", "Surpresa"].map((opt) => (
              <button
                key={opt}
                className={`quiz-option ${data.feeling === opt ? "selected" : ""}`}
                onClick={() => { updateData("feeling", opt); nextStep(); }}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 5 && (
        <div className="animate-fade-in flex-col" style={{ flex: 1, display: 'flex' }}>
          <h2>Agora conte sua história... 🎵</h2>
          <p className="mt-4">
            Escreva algumas linhas contando o que aconteceu e o que você gostaria que aparecesse na música. Não precisa escrever bonito. A IA vai transformar suas palavras em uma música.
          </p>
          <p className="mt-4" style={{ fontSize: '0.875rem', color: 'var(--accent-gold)' }}>
            Dica: Conte com suas próprias palavras. Quanto mais detalhes você colocar, mais personalizada será sua música.
          </p>
          <div className="mt-4 mb-4 flex-1">
            <textarea
              className="textarea-field"
              style={{ minHeight: '200px' }}
              placeholder='"Conheci meu marido há 12 anos..."'
              value={data.story}
              onChange={(e) => updateData("story", e.target.value)}
            />
            <div style={{ textAlign: 'right', fontSize: '0.75rem', opacity: 0.5, marginTop: '0.5rem' }}>
              {data.story.length} caracteres
            </div>
          </div>
        </div>
      )}

      <div style={{ marginTop: 'auto', paddingTop: '2rem' }}>
        {(step === 1 && data.target) || step === 3 || step === 5 ? (
          <button className="btn btn-primary" onClick={nextStep} style={{ display: 'flex', justifyContent: 'center' }}>
            {step === 5 ? "TRANSFORMAR MINHA HISTÓRIA EM MÚSICA" : "CONTINUAR"}
            <ChevronRight size={20} className="ml-2" style={{ marginLeft: '0.5rem' }} />
          </button>
        ) : null}
      </div>
    </div>
  );
}
