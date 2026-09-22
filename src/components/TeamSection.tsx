import React from 'react';
import { BrandMode } from '../types';
import { BRAND_CONFIG, TEAM_MEMBERS } from '../data/mockData';
import { 
  Award, 
  Calendar, 
  Touchpad, 
  Gauge, 
  ShieldCheck, 
  CheckCircle2, 
  GraduationCap,
  Sparkles
} from 'lucide-react';

interface TeamSectionProps {
  currentBrand: BrandMode;
  onOpenAudit: () => void;
}

export const TeamSection: React.FC<TeamSectionProps> = ({ currentBrand, onOpenAudit }) => {
  const brand = BRAND_CONFIG[currentBrand];

  const getHighlightIcon = (iconName: string) => {
    switch (iconName) {
      case 'calendar_month':
        return <Calendar className="w-4 h-4 text-[#0070F3]" />;
      case 'touch_app':
        return <Touchpad className="w-4 h-4 text-[#00D26A]" />;
      case 'speed':
        return <Gauge className="w-4 h-4 text-amber-500" />;
      case 'security':
        return <ShieldCheck className="w-4 h-4 text-emerald-500" />;
      default:
        return <CheckCircle2 className="w-4 h-4 text-[#0070F3]" />;
    }
  };

  return (
    <section id="equipe" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header with INP-HB Manifesto */}
        <div className="bg-gradient-to-br from-[#0b1c30] via-slate-900 to-[#0b1c30] text-white rounded-3xl p-8 sm:p-12 mb-16 border border-slate-800 shadow-xl relative overflow-hidden">
          {/* Subtle polytechnic grid background */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              backgroundImage: `radial-gradient(#38bdf8 1px, transparent 1px)`,
              backgroundSize: '20px 20px'
            }}
          />

          <div className="relative max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[#00D26A] text-xs font-mono font-bold uppercase tracking-wider">
              <GraduationCap className="w-4 h-4" />
              <span>{brand.teamManifestoTag}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug">
              {brand.teamManifestoQuote}
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
              {brand.teamManifestoSub}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-[#00D26A]" />
                Pôle Yamoussoukro &amp; Antenne Gagnoa
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <Award className="w-4 h-4 text-[#0070F3]" />
                Diplômes vérifiés &amp; accrédités
              </span>
            </div>
          </div>
        </div>

        {/* 4 Team Member Profiles */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.id}
              className="bg-slate-50/80 rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Photo container */}
                <div className="relative aspect-[4/3] bg-slate-900 overflow-hidden">
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                  
                  {/* Category Pill */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-md bg-slate-900/90 backdrop-blur-md text-white text-[10px] font-mono font-bold tracking-wider uppercase border border-white/10">
                      {member.category}
                    </span>
                  </div>

                  {/* Name overlay */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <h3 className="font-bold text-base text-white tracking-tight">
                      {member.name}
                    </h3>
                    <p className="text-xs text-emerald-400 font-medium line-clamp-1">
                      {member.role}
                    </p>
                  </div>
                </div>

                {/* Profile Details */}
                <div className="p-5 space-y-3">
                  <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-600 bg-white px-2 py-1 rounded border border-slate-200">
                    <GraduationCap className="w-3.5 h-3.5 text-[#0070F3]" />
                    <span>{currentBrand === 'trefle' ? 'Technicien Supérieur INP-HB' : 'Ingénieur IT INP-HB'}</span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>

              {/* Individual Guarantee */}
              <div className="p-4 bg-white border-t border-slate-200/80">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-900">
                  {getHighlightIcon(member.highlightIcon)}
                  <span>{member.highlight}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Audit Callout in Team section */}
        <div className="mt-14 text-center">
          <button
            onClick={onOpenAudit}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm bg-[#0b1c30] text-white hover:bg-slate-800 transition-all shadow-md"
          >
            <Sparkles className="w-4 h-4 text-[#00D26A]" />
            <span>Échanger directement avec nos techniciens de Yamoussoukro &amp; Gagnoa</span>
          </button>
        </div>

      </div>
    </section>
  );
};
