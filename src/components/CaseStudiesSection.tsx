import React, { useState } from 'react';
import { CASE_STUDIES } from '../data/mockData';
import { 
  TrendingUp, 
  MapPin, 
  AlertCircle, 
  CheckCircle, 
  Layers, 
  ArrowUpRight,
  Code
} from 'lucide-react';

interface CaseStudiesSectionProps {
  onOpenAudit: () => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({ onOpenAudit }) => {
  const [activeTab, setActiveTab] = useState<string>(CASE_STUDIES[0].id);

  return (
    <section id="etudes-de-cas" className="py-16 sm:py-24 bg-[#f8f9ff] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[#00A854] text-xs font-bold uppercase tracking-wider mb-3">
            <span>RÉSULTATS CHIFFRÉS TERRAIN</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0b1c30] tracking-tight">
            Études de Cas : 3 Interventions Concrètes à Yamoussoukro &amp; Gagnoa.
          </h2>

          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Découvrez comment nous avons éliminé les pertes de chiffre d'affaires liées aux commandes manuelles WhatsApp,
            aux frais d'OTA et à la friction d'accès pour les entreprises locales.
          </p>
        </div>

        {/* Tab switchers on mobile / desktop */}
        <div className="flex gap-2 border-b border-slate-200 pb-3 mb-8 overflow-x-auto">
          {CASE_STUDIES.map((study) => (
            <button
              key={study.id}
              onClick={() => setActiveTab(study.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-2 ${
                activeTab === study.id
                  ? 'bg-[#0b1c30] text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <MapPin className="w-3.5 h-3.5 text-[#00D26A]" />
              <span>{study.location} : {study.sector}</span>
            </button>
          ))}
        </div>

        {/* Selected Case Study Detail Card */}
        {CASE_STUDIES.filter((s) => s.id === activeTab).map((study) => (
          <div
            key={study.id}
            className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm"
          >
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              {/* Problem & Solution Column */}
              <div className="lg:col-span-8 space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#0070F3] mb-2 uppercase">
                    <span>{study.location}</span>
                    <span>·</span>
                    <span>{study.sector}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    {study.title}
                  </h3>
                </div>

                {/* Problem Statement */}
                <div className="bg-rose-50/70 border border-rose-200/80 rounded-2xl p-4 sm:p-5">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 mt-0.5">
                      <AlertCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-rose-900 uppercase tracking-wide mb-1">
                        Friction &amp; Problème Initial
                      </div>
                      <p className="text-xs sm:text-sm text-rose-950/80 leading-relaxed">
                        {study.problem}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Solution Statement */}
                <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-2xl p-4 sm:p-5">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 text-[#00D26A] flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-emerald-900 uppercase tracking-wide mb-1">
                        Solution Technique Appliquée
                      </div>
                      <p className="text-xs sm:text-sm text-emerald-950/80 leading-relaxed">
                        {study.solution}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tech stack used */}
                <div className="flex flex-wrap items-center gap-2 pt-2">
                  <span className="text-xs font-mono text-slate-500 mr-2 flex items-center gap-1">
                    <Code className="w-3.5 h-3.5" />
                    Technologies déployées :
                  </span>
                  {study.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md text-xs font-mono font-semibold bg-slate-100 text-slate-700 border border-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Quantified Outcome Card */}
              <div className="lg:col-span-4 bg-[#0b1c30] text-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between text-center relative overflow-hidden">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[#00D26A] text-xs font-mono font-bold uppercase">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>Progression Mesurée</span>
                  </div>

                  <div>
                    <div className="text-4xl sm:text-5xl font-black font-mono text-[#00D26A] tracking-tight">
                      {study.metricValue}
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-300 mt-1">
                      {study.metricLabel}
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed pt-3 border-t border-slate-800">
                    {study.resultDescription}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800">
                  <button
                    onClick={onOpenAudit}
                    className="w-full py-2.5 rounded-xl text-xs font-bold bg-[#00D26A] text-slate-950 hover:bg-[#00ba5e] transition-colors shadow-md"
                  >
                    Obtenir le même audit pour mon entreprise
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
