import React, { useState, useEffect } from 'react';
import { BrandMode } from '../types';
import { BRAND_CONFIG } from '../data/mockData';
import { 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  Activity, 
  ShieldCheck, 
  Gauge, 
  Server, 
  Radio, 
  MapPin, 
  Sparkles,
  RefreshCw
} from 'lucide-react';

interface HeroSectionProps {
  currentBrand: BrandMode;
  onOpenAudit: () => void;
  onExploreShowroom: () => void;
  onOpenCalculator: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  currentBrand,
  onOpenAudit,
  onExploreShowroom,
  onOpenCalculator,
}) => {
  const brand = BRAND_CONFIG[currentBrand];
  const [pingYam, setPingYam] = useState<number>(14);
  const [pingGagnoa, setPingGagnoa] = useState<number>(18);
  const [isPinging, setIsPinging] = useState<boolean>(false);
  const [liveRequests, setLiveRequests] = useState<number>(1420);

  // Periodic subtle live ticker
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveRequests((prev) => prev + Math.floor(Math.random() * 3) + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleTestLatency = () => {
    setIsPinging(true);
    setTimeout(() => {
      setPingYam(Math.floor(Math.random() * 6) + 11); // 11ms - 16ms
      setPingGagnoa(Math.floor(Math.random() * 7) + 15); // 15ms - 21ms
      setIsPinging(false);
    }, 600);
  };

  return (
    <section id="hero" className="relative pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden">
      {/* Background technical grid pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `radial-gradient(#cbd5e1 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            {/* INP-HB Official Authority Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 text-white text-xs font-semibold shadow-sm border border-slate-700/60">
              <span className="w-2 h-2 rounded-full bg-[#00D26A] animate-ping"></span>
              <span className="tracking-wide text-slate-200">
                INSTITUT NATIONAL POLYTECHNIQUE (INP-HB)
              </span>
              <span className="text-slate-400">·</span>
              <span className="text-[#00D26A] font-bold">
                {currentBrand === 'trefle' ? 'Pôle Techniciens Web' : 'Pôle Ingénieurs IT'}
              </span>
            </div>

            {/* High Precision Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-extrabold text-[#0b1c30] tracking-tight leading-[1.15]">
              {brand.heroTitlePrefix}{' '}
              <span className={currentBrand === 'trefle' ? 'text-[#00A854]' : 'text-[#0070F3]'}>
                {brand.heroTitleSuffix}
              </span>
            </h1>

            {/* Value Proposition Description */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
              {brand.taglineSubtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                id="hero-audit-cta"
                onClick={onOpenAudit}
                className={`px-6 py-3.5 rounded-xl font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group ${
                  currentBrand === 'trefle'
                    ? 'bg-[#00D26A] hover:bg-[#00ba5e] text-slate-950 shadow-emerald-500/25'
                    : 'bg-[#0070F3] hover:bg-[#005cd6] text-white shadow-blue-500/25'
                }`}
              >
                <span>Audit Technique Gratuit</span>
                <span className="text-xs opacity-75 font-normal">(30 min)</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                id="hero-showroom-cta"
                onClick={onExploreShowroom}
                className="px-6 py-3.5 rounded-xl font-bold text-sm bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 shadow-xs hover:border-slate-400 transition-all flex items-center justify-center gap-2"
              >
                <span>Explorer le Showroom en Ligne</span>
                <span className="w-2 h-2 rounded-full bg-[#00D26A]"></span>
              </button>
            </div>

            {/* Three Pillar Guarantees */}
            <div className="pt-4 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-600 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00D26A] shrink-0" />
                <span>100% Diplômés INP-HB</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#0070F3] shrink-0" />
                <span>Wave &amp; MoMo Natif</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Zéro Dépendance Tierce</span>
              </div>
            </div>
          </div>

          {/* Right Column: Live Telemetry & Performance Console */}
          <div className="lg:col-span-5">
            <div className="bg-[#0b1c30] text-white rounded-2xl p-5 sm:p-6 shadow-2xl border border-slate-800 relative overflow-hidden">
              {/* Top ambient glow */}
              <div 
                className="absolute -top-16 -right-16 w-48 h-48 rounded-full blur-3xl pointer-events-none opacity-30"
                style={{ backgroundColor: currentBrand === 'trefle' ? '#00D26A' : '#0070F3' }}
              />

              {/* Console header */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#00D26A] animate-pulse"></div>
                  <span className="font-mono text-xs font-semibold text-slate-300 uppercase tracking-wider">
                    Console Télémétrie &amp; Performance
                  </span>
                </div>
                <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-[#00D26A] border border-emerald-500/30">
                  RÉSEAU ACTIF 99.98%
                </span>
              </div>

              {/* Node Ping Latency Monitor */}
              <div className="space-y-3 mb-4">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="font-mono text-[11px]">NŒUDS D'INSPECTION RÉGIONALE :</span>
                  <button
                    onClick={handleTestLatency}
                    disabled={isPinging}
                    className="flex items-center gap-1 text-[11px] text-[#00D26A] hover:underline disabled:opacity-50"
                  >
                    <RefreshCw className={`w-3 h-3 ${isPinging ? 'animate-spin' : ''}`} />
                    <span>Ping direct</span>
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-2.5 font-mono text-xs">
                  <div className="bg-slate-900/90 rounded-xl p-3 border border-slate-800 flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-1.5 text-slate-400 text-[10px]">
                        <MapPin className="w-3 h-3 text-[#00D26A]" />
                        <span>Node 01 · Yamoussoukro</span>
                      </div>
                      <div className="text-base font-bold text-white mt-0.5">
                        {pingYam} ms
                      </div>
                    </div>
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  </div>

                  <div className="bg-slate-900/90 rounded-xl p-3 border border-slate-800 flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-1.5 text-slate-400 text-[10px]">
                        <MapPin className="w-3 h-3 text-[#0070F3]" />
                        <span>Node 02 · Gagnoa</span>
                      </div>
                      <div className="text-base font-bold text-white mt-0.5">
                        {pingGagnoa} ms
                      </div>
                    </div>
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  </div>
                </div>
              </div>

              {/* Lighthouse Quad 100 Banner */}
              <div className="bg-slate-900/80 rounded-xl p-3.5 border border-slate-800 mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                    <Gauge className="w-3.5 h-3.5 text-amber-400" />
                    AUDIT GOOGLE LIGHTHOUSE v11 :
                  </span>
                  <span className="text-[10px] text-emerald-400 font-mono font-bold">100% PARFAIT</span>
                </div>

                <div className="grid grid-cols-4 gap-2 text-center">
                  <div className="bg-slate-950/60 rounded-lg p-2 border border-emerald-500/20">
                    <div className="text-lg font-black text-[#00D26A] font-mono">100</div>
                    <div className="text-[9px] text-slate-400 font-medium">Perf.</div>
                  </div>
                  <div className="bg-slate-950/60 rounded-lg p-2 border border-emerald-500/20">
                    <div className="text-lg font-black text-[#00D26A] font-mono">100</div>
                    <div className="text-[9px] text-slate-400 font-medium">Accessib.</div>
                  </div>
                  <div className="bg-slate-950/60 rounded-lg p-2 border border-emerald-500/20">
                    <div className="text-lg font-black text-[#00D26A] font-mono">100</div>
                    <div className="text-[9px] text-slate-400 font-medium">Pratiques</div>
                  </div>
                  <div className="bg-slate-950/60 rounded-lg p-2 border border-emerald-500/20">
                    <div className="text-lg font-black text-[#00D26A] font-mono">100</div>
                    <div className="text-[9px] text-slate-400 font-medium">SEO</div>
                  </div>
                </div>
              </div>

              {/* Live telemetry metrics */}
              <div className="grid grid-cols-3 gap-2 font-mono text-xs border-t border-slate-800/80 pt-3">
                <div>
                  <div className="text-[10px] text-slate-400">LCP (Chargement)</div>
                  <div className="font-bold text-emerald-400 text-sm">0.78s</div>
                </div>
                <div>
                  <div className="text-[10px] text-slate-400">FID (Interactivité)</div>
                  <div className="font-bold text-emerald-400 text-sm">11ms</div>
                </div>
                <div>
                  <div className="text-[10px] text-slate-400">CLS (Stabilité)</div>
                  <div className="font-bold text-emerald-400 text-sm">0.000</div>
                </div>
              </div>

              {/* Footnote simulator launcher */}
              <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-[#00D26A]" />
                  <span>Requêtes servies : <strong className="text-white font-mono">{liveRequests}</strong></span>
                </span>
                <button
                  onClick={onOpenCalculator}
                  className="text-[#0070F3] hover:text-blue-300 font-medium underline flex items-center gap-1"
                >
                  <span>Estimer vos métriques</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
