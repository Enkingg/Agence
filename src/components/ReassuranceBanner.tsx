import React from 'react';
import { 
  ShieldCheck, 
  Smartphone, 
  MapPin, 
  CloudLightning, 
  Award, 
  Lock 
} from 'lucide-react';

export const ReassuranceBanner: React.FC = () => {
  return (
    <section className="bg-white border-y border-slate-200/90 py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-5">
          <p className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-500 font-mono">
            Ingénierie Homologuée pour les Acteurs Économiques du District Autonome de Yamoussoukro &amp; de la Région du Gôh
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50/80 border border-slate-200/70">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-[#00D26A] flex items-center justify-center shrink-0">
              <Award className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900 leading-tight">Certifié INP-HB</div>
              <div className="text-[10px] text-slate-500">Excellence académique</div>
            </div>
          </div>

          <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50/80 border border-slate-200/70">
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0070F3] flex items-center justify-center shrink-0">
              <Smartphone className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900 leading-tight">Wave &amp; MoMo Natif</div>
              <div className="text-[10px] text-slate-500">Paiement sans friction</div>
            </div>
          </div>

          <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50/80 border border-slate-200/70">
            <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
              <Lock className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900 leading-tight">Normes OWASP CI</div>
              <div className="text-[10px] text-slate-500">Données protégées</div>
            </div>
          </div>

          <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50/80 border border-slate-200/70">
            <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
              <CloudLightning className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900 leading-tight">Débit Léger 3G/4G</div>
              <div className="text-[10px] text-slate-500">Moins de 1s de chargement</div>
            </div>
          </div>

          <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50/80 border border-slate-200/70">
            <div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center shrink-0">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900 leading-tight">SEO Local Maps</div>
              <div className="text-[10px] text-slate-500">Top 3 local garanti</div>
            </div>
          </div>

          <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50/80 border border-slate-200/70">
            <div className="w-8 h-8 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900 leading-tight">Dispo Cloud 99.98%</div>
              <div className="text-[10px] text-slate-500">Sauvegardes journalières</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
