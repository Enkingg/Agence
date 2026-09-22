import React from 'react';
import { PILLARS, METHOD_STEPS } from '../data/mockData';
import { 
  Palette, 
  Code2, 
  Wallet, 
  Check, 
  ArrowRight, 
  Cpu, 
  ShieldCheck, 
  Zap, 
  Calculator 
} from 'lucide-react';

interface ServicesSectionProps {
  onOpenCalculator: () => void;
  onOpenAudit: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onOpenCalculator,
  onOpenAudit,
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'palette':
        return <Palette className="w-6 h-6 text-[#0070F3]" />;
      case 'code':
        return <Code2 className="w-6 h-6 text-[#00D26A]" />;
      case 'wallet':
        return <Wallet className="w-6 h-6 text-amber-500" />;
      default:
        return <Cpu className="w-6 h-6 text-[#0070F3]" />;
    }
  };

  return (
    <section id="services" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0070F3] text-xs font-bold uppercase tracking-wider mb-3">
            <span>NOTRE APPROCHE TECHNIQUE</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0b1c30] tracking-tight">
            Trois Piliers d'Ingénierie pour un Web Opérationnel et Rentable.
          </h2>

          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Nous éliminons le superflu décoratif pour concentrer l'effort sur la performance technique,
            l'expérience d'achat sur smartphone et l'automatisation de vos flux de trésorerie locaux.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.number}
              className="bg-slate-50/70 rounded-2xl p-7 border border-slate-200/80 hover:border-slate-300 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-xs border border-slate-200/90 flex items-center justify-center">
                    {getIcon(pillar.icon)}
                  </div>
                  <span className="font-mono text-2xl font-black text-slate-300">
                    {pillar.number}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 tracking-tight mb-3">
                  {pillar.title}
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/80 space-y-2">
                {pillar.checkpoints.map((cp, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                    <Check className="w-4 h-4 text-[#00D26A] shrink-0" />
                    <span>{cp}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 4-Step Methodology Banner */}
        <div className="bg-[#0b1c30] text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-800">
          <div className="max-w-3xl mb-10">
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#00D26A]">
              MÉTHODOLOGIE INP-HB
            </span>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mt-1">
              Un Processus Transparent en 4 Jalons Rigoureusement Respectés.
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-2">
              Pas de devis flous, pas de reports de livraison : chaque phase est conditionnée par un livrable contractuel vérifiable.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {METHOD_STEPS.map((step) => (
              <div
                key={step.number}
                className="bg-slate-900/80 rounded-2xl p-6 border border-slate-800 hover:border-slate-700 transition-colors relative"
              >
                <div className="text-[#00D26A] font-mono text-xl font-black mb-3">
                  {step.number}
                </div>
                <h4 className="text-sm font-bold text-white mb-2">
                  {step.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Action trigger */}
          <div className="mt-10 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-300 text-center sm:text-left">
              Envie d'évaluer le coût et le retour sur investissement de votre projet ?
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={onOpenCalculator}
                className="px-4 py-2.5 rounded-xl text-xs font-bold bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 transition-all flex items-center gap-1.5"
              >
                <Calculator className="w-3.5 h-3.5 text-[#0070F3]" />
                <span>Simuler Budget &amp; Délais</span>
              </button>

              <button
                onClick={onOpenAudit}
                className="px-4 py-2.5 rounded-xl text-xs font-extrabold bg-[#00D26A] hover:bg-[#00ba5e] text-slate-950 transition-all shadow-sm"
              >
                Demander l'Audit Gratuit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
