import React, { useState } from 'react';
import { MOCK_QUIZ_QUESTIONS } from '../data/slidesData';
import confetti from 'canvas-confetti';
import { HelpCircle, CheckCircle2, XCircle, Award, RotateCcw, ArrowRight } from 'lucide-react';

interface Props {
  onClose?: () => void;
}

export const SelectionQuizModal: React.FC<Props> = ({ onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const currentQ = MOCK_QUIZ_QUESTIONS[currentIndex];

  const handleSelectOption = (idx: number) => {
    if (isAnswered) return;
    setSelectedOption(idx);
    setIsAnswered(true);

    if (idx === currentQ.correctIndex) {
      setScore((prev) => prev + 1);
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.7 },
        });
      } catch {
        // Confetti fallback if canvas not ready
      }
    }
  };

  const handleNext = () => {
    if (currentIndex < MOCK_QUIZ_QUESTIONS.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setIsCompleted(true);
      try {
        confetti({
          particleCount: 100,
          spread: 100,
          origin: { y: 0.6 },
        });
      } catch {
        // Fallback
      }
    }
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setIsCompleted(false);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-slate-200 shadow-2xl max-w-3xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-amber-400" />
          <h3 className="text-base font-bold text-white">
            Simulasi Kuis Tes Masuk Al-Azhar (Tahfidz & Bahasa Arab)
          </h3>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="text-xs text-slate-400 hover:text-white px-2 py-1 rounded bg-slate-800"
          >
            Tutup
          </button>
        )}
      </div>

      {!isCompleted ? (
        <div className="mt-4">
          {/* Progress & Category */}
          <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
            <span className="font-semibold text-amber-400 uppercase tracking-wider">
              Kategori: {currentQ.category}
            </span>
            <span className="font-mono">
              Soal {currentIndex + 1} dari {MOCK_QUIZ_QUESTIONS.length}
            </span>
          </div>

          {/* Progress bar */}
          <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden mb-5">
            <div
              className="h-full bg-emerald-500 transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / MOCK_QUIZ_QUESTIONS.length) * 100}%` }}
            />
          </div>

          {/* Arabic context text if present */}
          {currentQ.arabicText && (
            <div className="bg-emerald-950/40 border border-emerald-800/60 p-4 rounded-xl text-center mb-4">
              <p className="font-arabic text-2xl text-amber-300 leading-loose" dir="rtl">
                {currentQ.arabicText}
              </p>
            </div>
          )}

          {/* Question Text */}
          <h4 className="text-sm md:text-base font-semibold text-white mb-4 leading-relaxed">
            {currentQ.question}
          </h4>

          {/* Options */}
          <div className="space-y-2.5">
            {currentQ.options.map((opt, idx) => {
              const isSelected = selectedOption === idx;
              const isCorrect = idx === currentQ.correctIndex;

              let optionStyle = 'bg-slate-950/70 border-slate-800 text-slate-200 hover:bg-slate-800/70';

              if (isAnswered) {
                if (isCorrect) {
                  optionStyle = 'bg-emerald-950 border-emerald-500 text-emerald-100 font-semibold';
                } else if (isSelected) {
                  optionStyle = 'bg-rose-950/80 border-rose-600 text-rose-200';
                } else {
                  optionStyle = 'bg-slate-950/40 border-slate-800/60 text-slate-500';
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(idx)}
                  disabled={isAnswered}
                  className={`w-full text-left p-3.5 rounded-xl border text-xs md:text-sm transition-all flex items-center justify-between gap-3 ${optionStyle}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-slate-800 text-slate-300 flex items-center justify-center font-mono text-xs shrink-0 font-bold">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span>{opt}</span>
                  </div>

                  {isAnswered && isCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />}
                  {isAnswered && isSelected && !isCorrect && <XCircle className="w-5 h-5 text-rose-400 shrink-0" />}
                </button>
              );
            })}
          </div>

          {/* Explanation Box */}
          {isAnswered && (
            <div className="mt-4 p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300">
              <span className="font-semibold text-emerald-400 block mb-1">
                Kunci Jawaban & Pembahasan Ujian:
              </span>
              <p className="leading-relaxed">{currentQ.explanation}</p>
            </div>
          )}

          {/* Footer Controls */}
          <div className="mt-5 flex justify-end">
            {isAnswered && (
              <button
                onClick={handleNext}
                className="flex items-center gap-2 px-5 py-2 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors shadow-md"
              >
                <span>{currentIndex < MOCK_QUIZ_QUESTIONS.length - 1 ? 'Soal Berikutnya' : 'Lihat Hasil Kuis'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      ) : (
        /* Result Screen */
        <div className="text-center py-8 space-y-4">
          <div className="w-16 h-16 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center mx-auto border border-amber-500/40">
            <Award className="w-8 h-8" />
          </div>

          <h4 className="text-xl font-bold text-white">Hasil Latihan Ujian Santri</h4>
          <p className="text-xs text-slate-400">
            Skor Anda: <strong className="text-amber-400 text-lg font-mono">{score}</strong> dari{' '}
            <strong className="text-white text-lg font-mono">{MOCK_QUIZ_QUESTIONS.length}</strong> Soal
          </p>

          <p className="text-xs text-emerald-300 bg-emerald-950/60 p-3 rounded-xl border border-emerald-700/60 max-w-md mx-auto">
            {score >= 4
              ? 'Mumtaz (Istimewa)! Santri memiliki dasar bahasa Arab dan wawasan keislaman yang sangat matang untuk bersaing di tingkat nasional.'
              : 'Jayyid! Terus asah latihan membaca teks gundul dan perbanyak kosa kata sebelum ujian Kemenag tiba.'}
          </p>

          <div className="pt-4 flex justify-center gap-3">
            <button
              onClick={handleReset}
              className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Ulangi Kuis</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
