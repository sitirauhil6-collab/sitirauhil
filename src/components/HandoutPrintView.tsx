import React from 'react';
import { SlideContent, PesantrenInfo } from '../types/presentation';
import { Printer, X } from 'lucide-react';

interface Props {
  slides: SlideContent[];
  hostPesantren: PesantrenInfo | null;
  customPesantrenName?: string;
  onClose: () => void;
}

export const HandoutPrintView: React.FC<Props> = ({
  slides,
  hostPesantren,
  customPesantrenName,
  onClose,
}) => {
  const hostName = customPesantrenName || (hostPesantren ? hostPesantren.name : 'Pondok Pesantren se-Nusa Tenggara Barat');

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950 overflow-y-auto p-4 md:p-8 text-slate-900">
      {/* Non-print toolbar */}
      <div className="no-print max-w-5xl mx-auto mb-6 p-4 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-between text-white">
        <div>
          <h3 className="text-sm font-bold text-amber-400">Pratinjau Cetak Lembar Materi (Handout)</h3>
          <p className="text-xs text-slate-400 mt-0.5">
            Format cetak resmi untuk dibagikan kepada Pimpinan Pondok, Asatidz, dan Santri.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrint}
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors shadow-md"
          >
            <Printer className="w-4 h-4" />
            <span>Cetak / Simpan PDF</span>
          </button>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg bg-slate-800"
            title="Tutup Pratinjau"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Printable Sheet Container */}
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-2xl print:p-0 print:shadow-none print:max-w-none text-slate-900">
        {/* Document Header */}
        <div className="border-b-2 border-emerald-900 pb-4 mb-8 flex justify-between items-start">
          <div>
            <span className="text-xs uppercase tracking-wider font-bold text-emerald-800 font-mono">
              MODUL SOSIALISASI STUDI UNIVERSITAS AL-AZHAR KAIRO
            </span>
            <h1 className="text-2xl font-bold text-slate-900 mt-1">
              Panduan Sosialisasi Santri Pesantren NTB
            </h1>
            <p className="text-xs text-slate-600 mt-0.5">
              Khusus Disampaikan di: <strong>{hostName}</strong>
            </p>
          </div>
          <div className="text-right">
            <span className="text-xs font-semibold text-slate-500 block">Diterbitkan oleh:</span>
            <span className="text-xs font-bold text-emerald-900">OIAA Cabang Nusa Tenggara Barat</span>
            <span className="text-[11px] text-slate-500 block">Jejaring KPMM Kairo - Mesir</span>
          </div>
        </div>

        {/* Slides Grid */}
        <div className="space-y-8">
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="print-page border border-slate-300 rounded-lg p-5 bg-slate-50 text-xs flex flex-col justify-between"
            >
              <div className="flex justify-between items-start border-b border-slate-200 pb-2 mb-3">
                <div>
                  <span className="font-mono font-bold text-emerald-800 text-[10px] uppercase">
                    SLIDE {slide.slideNumber} · {slide.category.toUpperCase()}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 mt-0.5">{slide.title}</h3>
                  <p className="text-[11px] text-slate-600">{slide.subtitle}</p>
                </div>
                {slide.arabicTitle && (
                  <span className="font-arabic text-sm text-amber-800 font-bold hidden sm:inline" dir="rtl">
                    {slide.arabicTitle}
                  </span>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-2">
                <div>
                  <h4 className="font-bold text-slate-800 mb-1.5 text-[11px]">Ringkasan Materi:</h4>
                  <p className="text-slate-700 leading-relaxed mb-3">{slide.summary}</p>

                  <h4 className="font-bold text-slate-800 mb-1.5 text-[11px]">Poin Kunci:</h4>
                  <ul className="space-y-1 list-disc list-inside text-slate-700">
                    {slide.bulletPoints.map((bp, i) => (
                      <li key={i} className="leading-normal">{bp}</li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white p-3.5 rounded border border-slate-200 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-emerald-900 mb-1 text-[11px]">
                      Catatan Pemateri & Penekanan Santri:
                    </h4>
                    <p className="italic text-slate-700 mb-2">
                      "{slide.speakerNotes.santriEmphasis}"
                    </p>
                    <ul className="space-y-1 text-slate-600 text-[10px]">
                      {slide.speakerNotes.talkingPoints.slice(0, 3).map((tp, idx) => (
                        <li key={idx}>• {tp}</li>
                      ))}
                    </ul>
                  </div>

                  {slide.speakerNotes.anecdoteOrTip && (
                    <div className="mt-2 pt-2 border-t border-slate-100 text-[10px] text-amber-900">
                      <strong>Tips:</strong> {slide.speakerNotes.anecdoteOrTip}
                    </div>
                  )}
                </div>
              </div>

              <div className="pt-2 border-t border-slate-200 mt-3 text-[10px] text-slate-500 flex justify-between">
                <span>Sosialisasi Al-Azhar Kairo · OIAA NTB</span>
                <span>Halaman {slide.slideNumber} dari {slides.length}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
