import React, { useState } from 'react';
import { FAQ_DATA } from '../data/slidesData';
import { Search, HelpCircle, ChevronDown, ChevronUp, BookOpenCheck } from 'lucide-react';

export const FaqBank: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedId, setExpandedId] = useState<string | null>('faq-1');

  const categories = ['all', 'Ijazah & Muadalah', 'Bahasa Arab', 'Biaya & Beasiswa', 'Santriwati', 'Kehidupan Mesir'];

  const filteredFaqs = FAQ_DATA.filter((item) => {
    const matchesSearch =
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCat = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-slate-200 shadow-xl max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-amber-400" />
            <h3 className="text-base font-bold text-white">
              Bank Tanya Jawab (FAQ) Sosialisasi Santri NTB
            </h3>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Pertanyaan paling sering diajukan santri, guru, dan wali santri dalam roadshow pesantren.
          </p>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Cari pertanyaan / kata kunci..."
            className="w-full sm:w-64 pl-9 pr-3 py-1.5 text-xs bg-slate-950 border border-slate-700 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-400"
          />
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center gap-1.5 overflow-x-auto py-3 no-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
              selectedCategory === cat
                ? 'bg-emerald-800 text-white font-semibold'
                : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
            }`}
          >
            {cat === 'all' ? 'Semua Topik' : cat}
          </button>
        ))}
      </div>

      {/* FAQ Accordion List */}
      <div className="space-y-3 mt-2">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq) => {
            const isExpanded = expandedId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-slate-950/70 border border-slate-800 rounded-xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setExpandedId(isExpanded ? null : faq.id)}
                  className="w-full text-left p-4 flex items-center justify-between gap-3 text-xs md:text-sm font-semibold text-slate-100 hover:text-amber-300"
                >
                  <div className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800 flex items-center justify-center text-[10px] shrink-0 font-bold mt-0.5">
                      Q
                    </span>
                    <span>{faq.question}</span>
                  </div>
                  {isExpanded ? (
                    <ChevronUp className="w-4 h-4 text-amber-400 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                  )}
                </button>

                {isExpanded && (
                  <div className="px-4 pb-4 pt-1 border-t border-slate-900/60 text-xs text-slate-300 leading-relaxed space-y-2">
                    <p>{faq.answer}</p>
                    {faq.sourceNote && (
                      <div className="flex items-center gap-1.5 text-[11px] text-amber-400/90 pt-1 font-mono">
                        <BookOpenCheck className="w-3.5 h-3.5 shrink-0" />
                        <span>Rujukan: {faq.sourceNote}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div className="text-center py-8 text-xs text-slate-500">
            Tidak ada pertanyaan yang sesuai dengan kata kunci "{searchTerm}".
          </div>
        )}
      </div>
    </div>
  );
};
