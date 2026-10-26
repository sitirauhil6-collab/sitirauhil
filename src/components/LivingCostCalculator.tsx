import React, { useState } from 'react';
import { Calculator, Coins, ShieldCheck, Plane, Home, Utensils, BookOpen, Wifi } from 'lucide-react';

export const LivingCostCalculator: React.FC = () => {
  // Exchange rate: 1 EGP ~ 320 IDR (approx current floating rate)
  const [exchangeRate, setExchangeRate] = useState<number>(320);

  // Monthly items in EGP
  const [rentEgp, setRentEgp] = useState<number>(1400); // 1.000 - 2.000 EGP flat sharing
  const [foodEgp, setFoodEgp] = useState<number>(1800); // groceries + self cooking
  const [booksEgp, setBooksEgp] = useState<number>(500); // turats books & photocopies
  const [transportEgp, setTransportEgp] = useState<number>(350); // tramco / metro
  const [wifiEgp, setWifiEgp] = useState<number>(250); // internet & sim card

  // Initial one-time costs in IDR
  const [passportIdr] = useState<number>(350000);
  const [medicalIdr] = useState<number>(850000);
  const [visaIdr] = useState<number>(1200000);
  const [flightIdr] = useState<number>(10500000);
  const [pusibaLevelIdr] = useState<number>(1800000); // per level estimate

  const monthlyTotalEgp = rentEgp + foodEgp + booksEgp + transportEgp + wifiEgp;
  const monthlyTotalIdr = monthlyTotalEgp * exchangeRate;
  const initialOneTimeTotalIdr = passportIdr + medicalIdr + visaIdr + flightIdr + (pusibaLevelIdr * 3);

  const formatIdr = (num: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(num);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-slate-200 shadow-xl max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <Calculator className="w-5 h-5 text-amber-400" />
            <h3 className="text-lg font-bold text-white">
              Kalkulator Biaya Hidup Santri di Kairo (Living Cost Simulator)
            </h3>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Hitung estimasi pengeluaran riil bulanan dalam Pound Mesir (EGP) dan Rupiah (IDR).
          </p>
        </div>

        {/* Currency rate adjuster */}
        <div className="flex items-center gap-2 bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800 text-xs shrink-0">
          <Coins className="w-4 h-4 text-amber-400 shrink-0" />
          <span className="text-slate-400">Kurs 1 EGP =</span>
          <input
            type="number"
            value={exchangeRate}
            onChange={(e) => setExchangeRate(Number(e.target.value) || 1)}
            className="w-16 px-1.5 py-0.5 bg-slate-900 border border-slate-700 rounded text-center font-mono font-bold text-amber-300 focus:outline-none focus:border-amber-400"
          />
          <span className="text-slate-400 font-mono">IDR</span>
        </div>
      </div>

      {/* Zero Tuition Banner */}
      <div className="my-5 p-4 rounded-xl bg-emerald-950/60 border border-emerald-700/60 flex items-start gap-3">
        <ShieldCheck className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
        <div>
          <h4 className="text-sm font-bold text-emerald-300">
            Fakta Utama: Biaya SPP Kuliah Al-Azhar = Rp 0,- (GRATIS 100%)
          </h4>
          <p className="text-xs text-emerald-100/90 mt-1">
            Untuk seluruh fakultas keagamaan (Ushuluddin, Syariah wal Qanun, Bahasa Arab, Dirasat Islamiyah),
            Universitas Al-Azhar tidak memungut uang kuliah per semester maupun uang gedung. Biaya yang disiapkan
            murni kebutuhan sandang, pangan, dan tempat tinggal santri di Kairo.
          </p>
        </div>
      </div>

      {/* Interactive Sliders */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        {/* Left: Monthly Expenses */}
        <div className="space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
            1. Estimasi Pengeluaran Rutin / Bulan (EGP)
          </h4>

          {/* Rent */}
          <div className="bg-slate-950/70 p-3 rounded-xl border border-slate-800">
            <div className="flex justify-between items-center text-xs mb-1.5">
              <span className="flex items-center gap-1.5 font-medium text-slate-300">
                <Home className="w-3.5 h-3.5 text-sky-400" />
                Sewa Flat / Apartemen (Sharing):
              </span>
              <span className="font-mono font-bold text-sky-300">
                {rentEgp} EGP <span className="text-slate-400 font-normal">({formatIdr(rentEgp * exchangeRate)})</span>
              </span>
            </div>
            <input
              type="range"
              min={800}
              max={2500}
              step={50}
              value={rentEgp}
              onChange={(e) => setRentEgp(Number(e.target.value))}
              className="w-full accent-sky-400 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-500 mt-1">
              <span>800 EGP (Darrasah)</span>
              <span>1.500 EGP (Hayy Asyir)</span>
              <span>2.500 EGP (Madinat Nasr)</span>
            </div>
          </div>

          {/* Food */}
          <div className="bg-slate-950/70 p-3 rounded-xl border border-slate-800">
            <div className="flex justify-between items-center text-xs mb-1.5">
              <span className="flex items-center gap-1.5 font-medium text-slate-300">
                <Utensils className="w-3.5 h-3.5 text-emerald-400" />
                Makan & Belanja Masak Sendiri:
              </span>
              <span className="font-mono font-bold text-emerald-300">
                {foodEgp} EGP <span className="text-slate-400 font-normal">({formatIdr(foodEgp * exchangeRate)})</span>
              </span>
            </div>
            <input
              type="range"
              min={1200}
              max={3000}
              step={50}
              value={foodEgp}
              onChange={(e) => setFoodEgp(Number(e.target.value))}
              className="w-full accent-emerald-400 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-500 mt-1">
              <span>1.200 EGP (Masak hemat)</span>
              <span>2.000 EGP (Standar)</span>
              <span>3.000 EGP (Katering/Lauk)</span>
            </div>
          </div>

          {/* Books & Turats */}
          <div className="bg-slate-950/70 p-3 rounded-xl border border-slate-800">
            <div className="flex justify-between items-center text-xs mb-1.5">
              <span className="flex items-center gap-1.5 font-medium text-slate-300">
                <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                Kitab Turats & Fotokopi Diktat:
              </span>
              <span className="font-mono font-bold text-amber-300">
                {booksEgp} EGP <span className="text-slate-400 font-normal">({formatIdr(booksEgp * exchangeRate)})</span>
              </span>
            </div>
            <input
              type="range"
              min={200}
              max={1000}
              step={50}
              value={booksEgp}
              onChange={(e) => setBooksEgp(Number(e.target.value))}
              className="w-full accent-amber-400 cursor-pointer"
            />
          </div>

          {/* Transport & Wifi */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-slate-950/70 p-2.5 rounded-xl border border-slate-800 text-xs">
              <div className="flex items-center gap-1 text-slate-300 mb-1">
                <span>Transport Tramco:</span>
              </div>
              <p className="font-mono font-bold text-white">{transportEgp} EGP/bln</p>
              <p className="text-[10px] text-slate-400 mt-0.5">{formatIdr(transportEgp * exchangeRate)}</p>
            </div>
            <div className="bg-slate-950/70 p-2.5 rounded-xl border border-slate-800 text-xs">
              <div className="flex items-center gap-1 text-slate-300 mb-1">
                <Wifi className="w-3 h-3 text-cyan-400" />
                <span>Internet / Kuota:</span>
              </div>
              <p className="font-mono font-bold text-white">{wifiEgp} EGP/bln</p>
              <p className="text-[10px] text-slate-400 mt-0.5">{formatIdr(wifiEgp * exchangeRate)}</p>
            </div>
          </div>
        </div>

        {/* Right: Summary Cards */}
        <div className="space-y-4 flex flex-col justify-between">
          <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
            2. Rekapitulasi Finansial
          </h4>

          {/* Monthly Grand Total Box */}
          <div className="bg-gradient-to-br from-emerald-950 to-slate-950 p-5 rounded-2xl border border-emerald-500/40 shadow-lg">
            <span className="text-xs text-emerald-400 font-semibold uppercase tracking-wider block">
              Total Living Cost Bulanan Santri:
            </span>
            <div className="flex items-baseline gap-2 mt-2">
              <span className="text-3xl font-extrabold text-white font-mono">
                {formatIdr(monthlyTotalIdr)}
              </span>
              <span className="text-xs text-slate-400 font-mono">/ bulan</span>
            </div>
            <p className="text-xs text-emerald-200/80 font-mono mt-1">
              Setara dengan <strong className="text-amber-300">{monthlyTotalEgp.toLocaleString()} EGP</strong> di Kairo
            </p>
            <div className="mt-4 pt-3 border-t border-emerald-800/40 text-[11px] text-slate-300 leading-normal">
              💡 <strong>Perbandingan:</strong> Biaya hidup bulanan di Kairo ini relatif sama atau bahkan lebih hemat dibandingkan biaya kos & makan mahasiswa di Jabodetabek, Bandung, atau Surabaya!
            </div>
          </div>

          {/* Initial One-Time Setup Costs */}
          <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800">
            <div className="flex items-center gap-2 mb-2">
              <Plane className="w-4 h-4 text-amber-400" />
              <h5 className="text-xs font-bold text-slate-200">
                Estimasi Biaya Awal (Sekali Bayar Sebelum Berangkat):
              </h5>
            </div>
            <div className="space-y-1.5 text-xs text-slate-300">
              <div className="flex justify-between py-0.5 border-b border-slate-800/60">
                <span>Tiket Pesawat Jakarta - Kairo (One Way):</span>
                <span className="font-mono text-slate-100">{formatIdr(flightIdr)}</span>
              </div>
              <div className="flex justify-between py-0.5 border-b border-slate-800/60">
                <span>Visa Pelajar & Legalisasi Kedubes:</span>
                <span className="font-mono text-slate-100">{formatIdr(visaIdr)}</span>
              </div>
              <div className="flex justify-between py-0.5 border-b border-slate-800/60">
                <span>Paspor & Medical Checkup:</span>
                <span className="font-mono text-slate-100">{formatIdr(passportIdr + medicalIdr)}</span>
              </div>
              <div className="flex justify-between py-0.5 border-b border-slate-800/60">
                <span>Deposit Kursus Bahasa PUSIBA (~3 level):</span>
                <span className="font-mono text-slate-100">{formatIdr(pusibaLevelIdr * 3)}</span>
              </div>
              <div className="flex justify-between pt-1 font-semibold text-amber-400">
                <span>Total Estimasi Biaya Awal:</span>
                <span className="font-mono">{formatIdr(initialOneTimeTotalIdr)}</span>
              </div>
            </div>
            <p className="text-[10px] text-slate-400 mt-2">
              *Catatan: Bagi santri penerima Beasiswa Penuh (Grand Sheikh Al-Azhar / PBSB), biaya tiket dan asrama ditanggung beasiswa.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
