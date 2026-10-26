import React, { useState, useRef, useEffect } from 'react';
import { SlideContent, PesantrenInfo } from '../types/presentation';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  Tv,
  Dot,
  CheckCircle,
  Sparkles,
  BookOpen,
  GraduationCap,
  Scale,
  Languages,
} from 'lucide-react';

interface Props {
  slide: SlideContent;
  totalSlides: number;
  currentSlideIndex: number;
  onSelectSlide: (index: number) => void;
  hostPesantren: PesantrenInfo | null;
  customPesantrenName?: string;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
}

export const SlideViewer: React.FC<Props> = ({
  slide,
  totalSlides,
  currentSlideIndex,
  onSelectSlide,
  hostPesantren,
  customPesantrenName,
  isFullscreen,
  onToggleFullscreen,
}) => {
  const [aspectRatio, setAspectRatio] = useState<'16-9' | '4-3'>('16-9');
  const [isLaserPointer, setIsLaserPointer] = useState(false);
  const [pointerPos, setPointerPos] = useState<{ x: number; y: number } | null>(null);
  const slideRef = useRef<HTMLDivElement>(null);

  const hostName = customPesantrenName || (hostPesantren ? hostPesantren.name : 'Pondok Pesantren se-Nusa Tenggara Barat');
  const hostLoc = hostPesantren ? `${hostPesantren.location}, ${hostPesantren.district}` : 'Provinsi Nusa Tenggara Barat';

  // Handle laser pointer tracking
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isLaserPointer || !slideRef.current) return;
    const rect = slideRef.current.getBoundingClientRect();
    setPointerPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseLeave = () => {
    if (isLaserPointer) setPointerPos(null);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't capture keys if user is typing in an input
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) return;

      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        if (currentSlideIndex < totalSlides - 1) onSelectSlide(currentSlideIndex + 1);
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        if (currentSlideIndex > 0) onSelectSlide(currentSlideIndex - 1);
      } else if (e.key === 'f' || e.key === 'F') {
        e.preventDefault();
        onToggleFullscreen();
      } else if (e.key === 'p' || e.key === 'P') {
        e.preventDefault();
        setIsLaserPointer((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlideIndex, totalSlides, onSelectSlide, onToggleFullscreen]);

  const isCover = slide.category === 'opening';
  const isClosing = slide.category === 'closing';

  return (
    <div className="flex flex-col items-center w-full">
      {/* Top Presentation Controls Bar */}
      <div className="w-full flex items-center justify-between pb-3 text-xs text-slate-400">
        <div className="flex items-center gap-3">
          <span className="font-mono text-slate-300">
            Slide <strong className="text-white text-sm">{currentSlideIndex + 1}</strong> / {totalSlides}
          </span>
          <span className="text-slate-600">·</span>
          <span className="text-amber-400 font-medium">
            {slide.title}
          </span>
        </div>

        {/* Viewport & Tool Buttons */}
        <div className="flex items-center gap-2">
          {/* Laser Pointer Toggle */}
          <button
            onClick={() => setIsLaserPointer(!isLaserPointer)}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium transition-colors ${
              isLaserPointer
                ? 'bg-rose-600 text-white shadow-sm ring-2 ring-rose-400/40'
                : 'bg-slate-800 text-slate-300 hover:text-white'
            }`}
            title="Tekan tombol 'P' untuk toggle Laser Pointer"
          >
            <Dot className={`w-4 h-4 ${isLaserPointer ? 'animate-ping text-white' : 'text-rose-400'}`} />
            <span>Laser Pointer</span>
          </button>

          {/* Ratio Toggle */}
          <button
            onClick={() => setAspectRatio(aspectRatio === '16-9' ? '4-3' : '16-9')}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-slate-800 text-slate-300 hover:text-white transition-colors"
            title="Ganti Rasio Layar (16:9 Widescreen atau 4:3 Proyektor Klasik)"
          >
            <Tv className="w-3.5 h-3.5 text-amber-400" />
            <span>{aspectRatio === '16-9' ? '16:9 Widescreen' : '4:3 Proyektor'}</span>
          </button>

          {/* Fullscreen Toggle */}
          <button
            onClick={onToggleFullscreen}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-slate-800 text-slate-300 hover:text-white transition-colors"
            title="Tekan 'F' untuk Layar Penuh"
          >
            {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            <span>{isFullscreen ? 'Keluar Fullscreen' : 'Layar Penuh'}</span>
          </button>
        </div>
      </div>

      {/* Main Slide Canvas */}
      <div
        ref={slideRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`relative w-full rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 select-none border border-slate-700/80 ${
          aspectRatio === '16-9' ? 'aspect-[16/9]' : 'aspect-[4/3]'
        } ${isLaserPointer ? 'cursor-none' : 'cursor-default'}`}
        style={{
          backgroundColor: isCover || isClosing ? '#064E3B' : '#0F172A',
        }}
      >
        {/* Laser Pointer Dot */}
        {isLaserPointer && pointerPos && (
          <div
            className="pointer-events-none absolute w-5 h-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-500 shadow-[0_0_15px_6px_rgba(244,63,94,0.8)] z-50 animate-pulse"
            style={{
              left: `${pointerPos.x}px`,
              top: `${pointerPos.y}px`,
            }}
          />
        )}

        {/* COVER SLIDE */}
        {isCover ? (
          <div className="relative w-full h-full p-8 md:p-12 flex flex-col justify-between overflow-hidden">
            {/* Background Photographic Image with Scrim */}
            {slide.imagePath && (
              <div className="absolute inset-0 z-0">
                <img
                  src={slide.imagePath}
                  alt="Universitas Al-Azhar Kairo"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover brightness-[0.35] contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/70 to-emerald-950/80 mix-blend-multiply" />
              </div>
            )}

            {/* Top decorative stripe */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-amber-500 via-amber-300 to-amber-500 z-10" />

            {/* Header Content */}
            <div className="relative z-10">
              {slide.arabicTitle && (
                <p className="font-arabic text-2xl md:text-3xl text-amber-300 mb-3 tracking-wide" dir="rtl">
                  {slide.arabicTitle}
                </p>
              )}
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl" style={{ textWrap: 'balance' }}>
                {slide.title}
              </h1>
              <p className="text-sm md:text-lg text-emerald-200 mt-3 max-w-3xl leading-relaxed">
                {slide.subtitle}
              </p>
            </div>

            {/* Dedicated Host Pesantren Banner on Cover */}
            <div className="relative z-10 my-4 p-4 md:p-5 rounded-xl bg-slate-950/80 backdrop-blur-md border border-amber-500/50 shadow-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-amber-400 font-semibold block mb-0.5">
                  Sosialisasi Terbuka di Hadapan Santriwan, Santriwati & Asatidz:
                </span>
                <h3 className="text-lg md:text-2xl font-bold text-white tracking-wide">
                  {hostName}
                </h3>
                <p className="text-xs text-slate-300 mt-0.5">{hostLoc}</p>
              </div>

              {slide.keyHighlight && (
                <div className="sm:border-l sm:border-slate-700 sm:pl-5 shrink-0 text-left sm:text-right">
                  <span className="text-[11px] text-slate-400 uppercase tracking-wider block font-medium">
                    {slide.keyHighlight.label}
                  </span>
                  <span className="text-xl md:text-2xl font-extrabold text-amber-300 font-mono">
                    {slide.keyHighlight.value}
                  </span>
                  <p className="text-[10px] text-slate-300 max-w-[180px] sm:ml-auto">
                    {slide.keyHighlight.description}
                  </p>
                </div>
              )}
            </div>

            {/* Bottom Footer Info */}
            <div className="relative z-10 pt-2 border-t border-emerald-800/60 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-emerald-200/80 gap-2">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-white">Organisasi Internasional Alumni Al-Azhar (OIAA) NTB</span>
                <span>·</span>
                <span>Keluarga Pelajar dan Mahasiswa NTB (KPMM) di Kairo</span>
              </div>
              <span className="font-mono text-amber-300 text-[11px]">Bumi Seribu Masjid Menuju Kota Seribu Menara</span>
            </div>
          </div>
        ) : isClosing ? (
          /* CLOSING SLIDE */
          <div className="relative w-full h-full p-8 md:p-12 flex flex-col justify-between overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-amber-500 via-amber-300 to-amber-500 z-10" />

            <div>
              {slide.arabicTitle && (
                <p className="font-arabic text-2xl md:text-3xl text-amber-300 mb-2 tracking-wide" dir="rtl">
                  {slide.arabicTitle}
                </p>
              )}
              <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                {slide.title}
              </h2>
              <p className="text-sm md:text-base text-emerald-200 mt-2 max-w-2xl">
                {slide.subtitle}
              </p>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
              {slide.cards?.map((card, idx) => (
                <div
                  key={idx}
                  className="bg-slate-950/80 backdrop-blur-sm border border-emerald-700/60 p-4 rounded-xl shadow-lg flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs mb-2">
                      <span className="text-[10px] text-amber-400 font-semibold tracking-wider uppercase font-mono">
                        {card.tag}
                      </span>
                    </div>
                    <h4 className="text-sm md:text-base font-bold text-white mb-2">{card.title}</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">{card.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Closing footer */}
            <div className="pt-3 border-t border-emerald-800/60 flex items-center justify-between text-xs text-slate-400">
              <span className="text-white font-medium">Sosialisasi Al-Azhar di {hostName}</span>
              <span className="text-amber-300 font-arabic text-sm">شُكْراً لِحُسْنِ اسْتِمَاعِكُمْ وَبِالتَّوْفِيقِ وَالنَّجَاحِ</span>
            </div>
          </div>
        ) : (
          /* REGULAR CONTENT SLIDE */
          <div className="relative w-full h-full flex flex-col bg-slate-950 text-slate-100 overflow-hidden">
            {/* Top Bar inside Slide */}
            <div className="px-6 md:px-8 py-4 bg-emerald-950 border-b border-amber-500/40 flex items-center justify-between shrink-0">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono font-bold text-amber-400 uppercase tracking-widest bg-amber-950/60 px-2 py-0.5 rounded border border-amber-700/50">
                    BAGIAN {slide.slideNumber}
                  </span>
                  <span className="text-xs text-slate-400">·</span>
                  <span className="text-xs text-emerald-300 font-medium">Universitas Al-Azhar Kairo</span>
                </div>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-white tracking-tight mt-1" style={{ textWrap: 'balance' }}>
                  {slide.title}
                </h2>
                <p className="text-xs md:text-sm text-emerald-200/90">{slide.subtitle}</p>
              </div>

              {slide.arabicTitle && (
                <div className="text-right hidden sm:block">
                  <p className="font-arabic text-xl md:text-2xl text-amber-300" dir="rtl">
                    {slide.arabicTitle}
                  </p>
                </div>
              )}
            </div>

            {/* Slide Body */}
            <div className="flex-1 p-6 md:p-8 overflow-y-auto">
              {/* Summary Banner */}
              <div className="mb-5 p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs md:text-sm text-slate-200 leading-relaxed shadow-sm">
                {slide.summary}
              </div>

              {/* 2-Column Split: Points & Showcase */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                {/* Left Column: Bullet Points */}
                <div className={slide.cards || slide.steps || slide.imagePath ? 'lg:col-span-7 space-y-3' : 'lg:col-span-12 space-y-3'}>
                  <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    Poin Penjelasan Utama:
                  </h4>
                  <div className="space-y-2.5">
                    {slide.bulletPoints.map((point, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs md:text-sm text-slate-200 hover:border-slate-700 transition-colors"
                      >
                        <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Column: Cards, Steps, or High-fidelity Image */}
                <div className="lg:col-span-5 space-y-3">
                  {slide.imagePath ? (
                    <div className="rounded-xl overflow-hidden border border-slate-800 shadow-xl relative group">
                      <img
                        src={slide.imagePath}
                        alt="Kiprah Santri NTB di Al-Azhar"
                        referrerPolicy="no-referrer"
                        className="w-full h-56 object-cover"
                      />
                      <div className="p-3 bg-slate-900 border-t border-slate-800 text-[11px] text-slate-300">
                        Santri NTB memiliki tradisi kajian kitab kuning yang bersenyawa dengan kurikulum turats Al-Azhar.
                      </div>
                    </div>
                  ) : slide.cards ? (
                    <div className="space-y-2.5">
                      {slide.cards.map((card, idx) => (
                        <div
                          key={idx}
                          className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 shadow-sm hover:border-emerald-700/60 transition-colors"
                        >
                          <div className="flex items-center justify-between mb-1">
                            <h5 className="text-xs md:text-sm font-bold text-white flex items-center gap-1.5">
                              {idx === 0 && <BookOpen className="w-3.5 h-3.5 text-amber-400" />}
                              {idx === 1 && <GraduationCap className="w-3.5 h-3.5 text-emerald-400" />}
                              {idx === 2 && <Scale className="w-3.5 h-3.5 text-sky-400" />}
                              {idx === 3 && <Languages className="w-3.5 h-3.5 text-purple-400" />}
                              {card.title}
                            </h5>
                            {card.tag && (
                              <span className="text-[10px] font-mono text-amber-300 bg-amber-950/70 px-2 py-0.5 rounded border border-amber-800/50">
                                {card.tag}
                              </span>
                            )}
                          </div>
                          <p className="text-[11px] md:text-xs text-slate-300 leading-relaxed mt-1">
                            {card.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  ) : slide.steps ? (
                    <div className="space-y-2.5">
                      {slide.steps.map((step, idx) => (
                        <div
                          key={idx}
                          className="p-3.5 rounded-xl bg-slate-900/80 border border-emerald-900/60 flex items-start gap-3"
                        >
                          <span className="w-6 h-6 rounded-full bg-emerald-900 text-amber-300 flex items-center justify-center font-mono text-xs font-bold shrink-0 mt-0.5">
                            {step.number}
                          </span>
                          <div>
                            <h5 className="text-xs md:text-sm font-bold text-emerald-300 mb-1">{step.title}</h5>
                            <p className="text-[11px] md:text-xs text-slate-300 leading-relaxed">{step.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            </div>

            {/* Slide Footer */}
            <div className="px-6 py-2 bg-slate-900 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400 shrink-0">
              <span className="truncate max-w-[280px]">
                Sosialisasi Al-Azhar Kairo · {hostName}
              </span>
              <span className="font-mono">
                {currentSlideIndex + 1} / {totalSlides}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Slide Navigation Bottom Bar */}
      <div className="w-full flex items-center justify-between mt-4 px-2">
        <button
          onClick={() => onSelectSlide(Math.max(0, currentSlideIndex - 1))}
          disabled={currentSlideIndex === 0}
          className="flex items-center gap-1.5 px-4 py-2 text-xs font-medium rounded-lg bg-slate-800 text-slate-200 hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Slide Sebelumnya</span>
        </button>

        {/* Thumbnail Dots */}
        <div className="hidden sm:flex items-center gap-1.5">
          {Array.from({ length: totalSlides }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => onSelectSlide(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                idx === currentSlideIndex
                  ? 'w-7 bg-amber-400'
                  : 'bg-slate-700 hover:bg-slate-500'
              }`}
              title={`Buka Slide ${idx + 1}`}
            />
          ))}
        </div>

        <button
          onClick={() => onSelectSlide(Math.min(totalSlides - 1, currentSlideIndex + 1))}
          disabled={currentSlideIndex === totalSlides - 1}
          className="flex items-center gap-1.5 px-4 py-2 text-xs font-medium rounded-lg bg-emerald-700 text-white hover:bg-emerald-600 disabled:opacity-40 disabled:cursor-not-allowed transition-colors shadow-sm"
        >
          <span>Slide Selanjutnya</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
