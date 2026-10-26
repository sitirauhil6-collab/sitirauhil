import React, { useState } from 'react';
import { PESANTREN_NTB_LIST } from '../data/slidesData';
import { PesantrenInfo } from '../types/presentation';
import { MapPin, Building2, Check, Sparkles } from 'lucide-react';

interface Props {
  selectedPesantren: PesantrenInfo | null;
  customName: string;
  onSelectPesantren: (pesantren: PesantrenInfo | null) => void;
  onCustomNameChange: (name: string) => void;
}

export const PesantrenSelector: React.FC<Props> = ({
  selectedPesantren,
  customName,
  onSelectPesantren,
  onCustomNameChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'presets' | 'custom'>('presets');

  return (
    <div className="relative">
      <div className="flex items-center gap-2">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2.5 px-3.5 py-1.5 text-xs font-medium text-emerald-100 bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-700/50 rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-sm"
          title="Sesuaikan nama pesantren tujuan sosialisasi"
        >
          <Building2 className="w-4 h-4 text-amber-400 shrink-0" />
          <span className="text-slate-300">Pesantren Sasaran:</span>
          <span className="font-semibold text-white max-w-[200px] truncate">
            {customName || (selectedPesantren ? selectedPesantren.name : 'Pondok Pesantren se-NTB')}
          </span>
          <span className="text-[10px] text-amber-300 font-mono bg-amber-500/20 px-1.5 py-0.5 rounded">
            Ubah
          </span>
        </button>
      </div>

      {isOpen && (
        <div className="absolute left-0 top-full mt-2 w-96 max-w-[90vw] p-4 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl z-50 text-slate-200">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <div>
              <h4 className="text-sm font-semibold text-white flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-400" />
                Target Pesantren Sosialisasi
              </h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Nama ini akan otomatis tercantum di slide pembuka & dokumen PPTX.
              </p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-xs text-slate-400 hover:text-white p-1"
            >
              ✕
            </button>
          </div>

          <div className="flex items-center gap-1 my-3 p-1 bg-slate-950 rounded-lg">
            <button
              onClick={() => setActiveTab('presets')}
              className={`flex-1 py-1 text-xs font-medium rounded transition-colors ${
                activeTab === 'presets' ? 'bg-emerald-800 text-white' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Daftar Pesantren NTB
            </button>
            <button
              onClick={() => setActiveTab('custom')}
              className={`flex-1 py-1 text-xs font-medium rounded transition-colors ${
                activeTab === 'custom' ? 'bg-emerald-800 text-white' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Ketik Nama Manual
            </button>
          </div>

          {activeTab === 'presets' ? (
            <div className="max-h-64 overflow-y-auto space-y-1.5 pr-1">
              <button
                onClick={() => {
                  onSelectPesantren(null);
                  onCustomNameChange('');
                  setIsOpen(false);
                }}
                className={`w-full text-left p-2 rounded-lg text-xs transition-colors flex items-center justify-between ${
                  !selectedPesantren && !customName
                    ? 'bg-emerald-900/60 border border-emerald-500 text-white'
                    : 'bg-slate-800/60 hover:bg-slate-800 text-slate-300'
                }`}
              >
                <div>
                  <p className="font-semibold">Semua Pesantren se-NTB (Umum)</p>
                  <p className="text-[11px] text-slate-400">Pulau Lombok & Pulau Sumbawa</p>
                </div>
                {!selectedPesantren && !customName && <Check className="w-4 h-4 text-amber-400 shrink-0" />}
              </button>

              {PESANTREN_NTB_LIST.map((pesantren) => {
                const isSelected = selectedPesantren?.id === pesantren.id && !customName;
                return (
                  <button
                    key={pesantren.id}
                    onClick={() => {
                      onSelectPesantren(pesantren);
                      onCustomNameChange('');
                      setIsOpen(false);
                    }}
                    className={`w-full text-left p-2.5 rounded-lg text-xs transition-colors flex items-center justify-between ${
                      isSelected
                        ? 'bg-emerald-900/60 border border-emerald-500 text-white'
                        : 'bg-slate-800/60 hover:bg-slate-800 text-slate-300'
                    }`}
                  >
                    <div className="pr-2">
                      <p className="font-semibold text-slate-100">{pesantren.name}</p>
                      <div className="flex items-center gap-1.5 text-[11px] text-slate-400 mt-0.5">
                        <MapPin className="w-3 h-3 text-amber-400 shrink-0" />
                        <span>{pesantren.location}, {pesantren.district} ({pesantren.island})</span>
                      </div>
                    </div>
                    {isSelected && <Check className="w-4 h-4 text-amber-400 shrink-0" />}
                  </button>
                );
              })}
            </div>
          ) : (
            <div className="space-y-3 pt-1">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Nama Pondok Pesantren / Lembaga:
                </label>
                <input
                  type="text"
                  value={customName}
                  onChange={(e) => onCustomNameChange(e.target.value)}
                  placeholder="Contoh: Pondok Pesantren Darul Qur'an Wal Hadits"
                  className="w-full px-3 py-2 text-xs bg-slate-950 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-amber-400 placeholder:text-slate-500"
                />
              </div>
              <p className="text-[11px] text-slate-400">
                Gunakan jika Anda sedang mengisi sosialisasi di ma'had khusus di luar daftar preset.
              </p>
              <button
                onClick={() => setIsOpen(false)}
                className="w-full py-1.5 text-xs font-semibold text-emerald-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors"
              >
                Terapkan ke Slide
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
