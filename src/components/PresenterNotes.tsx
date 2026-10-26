import React, { useState, useEffect } from 'react';
import { SlideContent } from '../types/presentation';
import { Clock, Play, Pause, RotateCcw, Volume2, Lightbulb, MessageSquareQuote } from 'lucide-react';

interface Props {
  slide: SlideContent;
}

export const PresenterNotes: React.FC<Props> = ({ slide }) => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else if (!isRunning && seconds !== 0) {
      if (interval) clearInterval(interval);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, seconds]);

  const formatTime = (totalSec: number) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const targetMinutes = slide.speakerNotes.durationMinutes;
  const isOvertime = seconds > targetMinutes * 60;

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 text-slate-200 shadow-xl flex flex-col h-full">
      {/* Header & Speech Timer */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <Volume2 className="w-4 h-4 text-emerald-400" />
            <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-300">
              Panduan Pemateri / Speaker Notes
            </h3>
          </div>
          <p className="text-[11px] text-slate-400 mt-0.5">
            Slide {slide.slideNumber} · Alokasi ideal: {targetMinutes} Menit
          </p>
        </div>

        {/* Stopwatch */}
        <div className="flex items-center gap-2 bg-slate-950 px-2.5 py-1 rounded-lg border border-slate-800">
          <Clock className={`w-3.5 h-3.5 ${isOvertime ? 'text-rose-400 animate-pulse' : 'text-amber-400'}`} />
          <span className={`font-mono text-xs font-semibold ${isOvertime ? 'text-rose-400' : 'text-slate-100'}`}>
            {formatTime(seconds)}
          </span>
          <div className="flex items-center gap-1 border-l border-slate-800 pl-1.5 ml-0.5">
            <button
              onClick={() => setIsRunning(!isRunning)}
              className="p-1 hover:text-emerald-400 text-slate-300 transition-colors"
              title={isRunning ? 'Jeda' : 'Mulai Timer'}
            >
              {isRunning ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
            </button>
            <button
              onClick={() => {
                setIsRunning(false);
                setSeconds(0);
              }}
              className="p-1 hover:text-amber-400 text-slate-400 transition-colors"
              title="Reset Timer"
            >
              <RotateCcw className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-4 pt-3 flex-1 overflow-y-auto pr-1 text-xs leading-relaxed">
        {/* Talking Points */}
        <div>
          <h4 className="font-semibold text-slate-100 mb-2 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Poin Inti yang Harus Disampaikan:
          </h4>
          <ul className="space-y-2 text-slate-300">
            {slide.speakerNotes.talkingPoints.map((point, idx) => (
              <li key={idx} className="flex items-start gap-2 bg-slate-950/60 p-2 rounded-lg border border-slate-800/80">
                <span className="font-mono text-[10px] text-amber-400 font-bold mt-0.5">{idx + 1}.</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Santri Emphasis Box */}
        <div className="bg-emerald-950/40 border border-emerald-800/60 rounded-lg p-3">
          <div className="flex items-center gap-1.5 text-emerald-300 font-semibold mb-1">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>Pesan Emosional untuk Santri:</span>
          </div>
          <p className="text-emerald-100 italic">
            "{slide.speakerNotes.santriEmphasis}"
          </p>
        </div>

        {/* Anecdote or Field Tip */}
        {slide.speakerNotes.anecdoteOrTip && (
          <div className="bg-amber-950/30 border border-amber-800/50 rounded-lg p-2.5 flex items-start gap-2">
            <Lightbulb className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-amber-300 block mb-0.5">Tips Sosialisasi Lapangan:</span>
              <p className="text-amber-100/90 text-[11px] leading-normal">
                {slide.speakerNotes.anecdoteOrTip}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
