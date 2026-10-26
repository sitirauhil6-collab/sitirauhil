import React, { useState, useEffect } from 'react';
import { INITIAL_SLIDES, PESANTREN_NTB_LIST } from './data/slidesData';
import { SlideContent, PesantrenInfo } from './types/presentation';
import { exportPresentationToPptx } from './utils/exportPptx';
import { SlideViewer } from './components/SlideViewer';
import { PresenterNotes } from './components/PresenterNotes';
import { PesantrenSelector } from './components/PesantrenSelector';
import { LivingCostCalculator } from './components/LivingCostCalculator';
import { SelectionQuizModal } from './components/SelectionQuizModal';
import { FaqBank } from './components/FaqBank';
import { HandoutPrintView } from './components/HandoutPrintView';
import {
  Download,
  FileText,
  HelpCircle,
  Calculator,
  LayoutTemplate,
  MessageSquare,
  Sparkles,
  ChevronUp,
  ChevronDown,
} from 'lucide-react';

export default function App() {
  const [slides, setSlides] = useState<SlideContent[]>(INITIAL_SLIDES);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [selectedPesantren, setSelectedPesantren] = useState<PesantrenInfo | null>(PESANTREN_NTB_LIST[1]); // Default: Ponpes Nurul Hakim Kediri
  const [customPesantrenName, setCustomPesantrenName] = useState<string>('');
  const [activeTab, setActiveTab] = useState<'slides' | 'calculator' | 'quiz' | 'faq'>('slides');
  const [isNotesOpen, setIsNotesOpen] = useState(true);
  const [isExporting, setIsExporting] = useState(false);
  const [showHandoutPrint, setShowHandoutPrint] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const currentSlide = slides[currentSlideIndex];

  // Fullscreen toggle handler
  const handleToggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
        setIsFullscreen(false);
      }
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  // Export to PowerPoint handler
  const handleExportPptx = async () => {
    try {
      setIsExporting(true);
      await exportPresentationToPptx(slides, selectedPesantren, customPesantrenName);
    } catch (err) {
      console.error('Error generating PowerPoint file:', err);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-amber-400 selection:text-slate-950">
      {/* 
        TOP BAR CONTRACT:
        [Brand title, one line] — [4–5 nav links, 1–2 word labels, single-line] — [1 primary action]
      */}
      <header className="flex items-center justify-between gap-8 px-6 py-3.5 border-b border-slate-800/80 bg-slate-900/95 backdrop-blur-md sticky top-0 z-40">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="/"
          className="text-lg font-bold tracking-tight text-white whitespace-nowrap shrink-0 flex items-center gap-2"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400 shrink-0" />
          <span>Al-Azhar NTB</span>
        </a>

        {/* Zone 2: 4–5 concise single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-slate-300">
          <button
            onClick={() => setActiveTab('slides')}
            className={`whitespace-nowrap shrink-0 transition-colors pb-1 border-b-2 ${
              activeTab === 'slides'
                ? 'text-amber-400 border-amber-400 font-semibold'
                : 'text-slate-300 hover:text-white border-transparent'
            }`}
          >
            Slide Presentasi
          </button>
          <button
            onClick={() => setActiveTab('calculator')}
            className={`whitespace-nowrap shrink-0 transition-colors pb-1 border-b-2 ${
              activeTab === 'calculator'
                ? 'text-amber-400 border-amber-400 font-semibold'
                : 'text-slate-300 hover:text-white border-transparent'
            }`}
          >
            Simulasi Biaya
          </button>
          <button
            onClick={() => setActiveTab('quiz')}
            className={`whitespace-nowrap shrink-0 transition-colors pb-1 border-b-2 ${
              activeTab === 'quiz'
                ? 'text-amber-400 border-amber-400 font-semibold'
                : 'text-slate-300 hover:text-white border-transparent'
            }`}
          >
            Kuis Seleksi
          </button>
          <button
            onClick={() => setActiveTab('faq')}
            className={`whitespace-nowrap shrink-0 transition-colors pb-1 border-b-2 ${
              activeTab === 'faq'
                ? 'text-amber-400 border-amber-400 font-semibold'
                : 'text-slate-300 hover:text-white border-transparent'
            }`}
          >
            Tanya Jawab (FAQ)
          </button>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={handleExportPptx}
            disabled={isExporting}
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 disabled:opacity-50 rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-sm"
            title="Download slide ini dalam format asli Microsoft PowerPoint (.pptx) lengkap dengan speaker notes"
          >
            <Download className="w-3.5 h-3.5 shrink-0" />
            <span>{isExporting ? 'Membuat File PPTX...' : 'Unduh File PPTX'}</span>
          </button>
        </div>
      </header>

      {/* Sub-Header Toolstrip */}
      <div className="bg-slate-900/60 border-b border-slate-800/60 px-6 py-2.5 flex flex-wrap items-center justify-between gap-3 text-xs">
        {/* Pesantren Selector */}
        <div className="flex items-center gap-3">
          <PesantrenSelector
            selectedPesantren={selectedPesantren}
            customName={customPesantrenName}
            onSelectPesantren={setSelectedPesantren}
            onCustomNameChange={setCustomPesantrenName}
          />
        </div>

        {/* Quick Toolbar Action Buttons */}
        <div className="flex items-center gap-2">
          {activeTab === 'slides' && (
            <button
              onClick={() => setIsNotesOpen(!isNotesOpen)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                isNotesOpen
                  ? 'bg-emerald-950/80 border-emerald-600 text-emerald-200'
                  : 'bg-slate-900 border-slate-700 text-slate-300 hover:text-white'
              }`}
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
              <span>{isNotesOpen ? 'Sembunyikan Catatan' : 'Tampilkan Catatan Pemateri'}</span>
            </button>
          )}

          <button
            onClick={() => setShowHandoutPrint(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-900 border border-slate-700 text-slate-300 hover:text-white transition-colors"
            title="Buka format cetak modul handout untuk dibagikan"
          >
            <FileText className="w-3.5 h-3.5 text-amber-400" />
            <span>Format Handout Cetak</span>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 p-4 md:p-6 max-w-7xl mx-auto w-full">
        {activeTab === 'slides' ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Slide Stage */}
            <div className={isNotesOpen ? 'lg:col-span-8 space-y-4' : 'lg:col-span-12 space-y-4'}>
              <SlideViewer
                slide={currentSlide}
                totalSlides={slides.length}
                currentSlideIndex={currentSlideIndex}
                onSelectSlide={setCurrentSlideIndex}
                hostPesantren={selectedPesantren}
                customPesantrenName={customPesantrenName}
                isFullscreen={isFullscreen}
                onToggleFullscreen={handleToggleFullscreen}
              />
            </div>

            {/* Presenter Notes Panel */}
            {isNotesOpen && (
              <div className="lg:col-span-4 h-[600px] sticky top-24">
                <PresenterNotes slide={currentSlide} />
              </div>
            )}
          </div>
        ) : activeTab === 'calculator' ? (
          <div className="py-2">
            <LivingCostCalculator />
          </div>
        ) : activeTab === 'quiz' ? (
          <div className="py-2">
            <SelectionQuizModal />
          </div>
        ) : (
          <div className="py-2">
            <FaqBank />
          </div>
        )}

        {/* Thumbnail Drawer / Slide Carousel */}
        {activeTab === 'slides' && (
          <div className="mt-8 pt-6 border-t border-slate-800/80">
            <div className="flex items-center justify-between mb-3 text-xs">
              <span className="font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                <LayoutTemplate className="w-3.5 h-3.5 text-amber-400" />
                Peta Seluruh Slide Sosialisasi ({slides.length} Slide):
              </span>
              <span className="text-slate-400">
                Klik kartu slide untuk langsung berpindah
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {slides.map((s, idx) => {
                const isActive = idx === currentSlideIndex;
                return (
                  <button
                    key={s.id}
                    onClick={() => setCurrentSlideIndex(idx)}
                    className={`text-left p-2.5 rounded-xl border text-xs transition-all flex flex-col justify-between h-28 group ${
                      isActive
                        ? 'bg-emerald-950/70 border-amber-400 shadow-md ring-1 ring-amber-400/50'
                        : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between text-[10px] text-slate-400 mb-1">
                        <span className="font-mono font-bold text-amber-400">
                          #{s.slideNumber}
                        </span>
                        <span className="text-[9px] uppercase tracking-wider text-slate-500 truncate max-w-[70px]">
                          {s.category}
                        </span>
                      </div>
                      <h4 className="font-semibold text-slate-200 line-clamp-2 group-hover:text-amber-300 transition-colors leading-snug">
                        {s.title}
                      </h4>
                    </div>

                    <div className="text-[10px] text-slate-500 font-mono mt-1">
                      {s.speakerNotes.durationMinutes} mnt bicara
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </main>

      {/* Handout Print Modal */}
      {showHandoutPrint && (
        <HandoutPrintView
          slides={slides}
          hostPesantren={selectedPesantren}
          customPesantrenName={customPesantrenName}
          onClose={() => setShowHandoutPrint(false)}
        />
      )}

      {/* Footer */}
      <footer className="mt-auto border-t border-slate-800/80 bg-slate-900/80 px-6 py-4 text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span>Inisiatif Sosialisasi Al-Azhar Kairo untuk Pesantren NTB</span>
          <span>·</span>
          <span>Kerjasama OIAA NTB & KPMM Kairo</span>
        </div>
        <div className="text-slate-400">
          Materi Terverifikasi untuk Jalur Kemenag RI, PUSIBA, dan Mu'adalah
        </div>
      </footer>
    </div>
  );
}
