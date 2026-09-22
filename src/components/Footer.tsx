import React from 'react';
import { BrandMode } from '../types';
import { BRAND_CONFIG } from '../data/mockData';
import { 
  MapPin, 
  Phone, 
  Mail, 
  ShieldCheck, 
  Award, 
  ArrowUp, 
  Layers 
} from 'lucide-react';

interface FooterProps {
  currentBrand: BrandMode;
  onOpenAudit: () => void;
  onOpenCalculator: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  currentBrand,
  onOpenAudit,
  onOpenCalculator,
}) => {
  const brand = BRAND_CONFIG[currentBrand];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#071322] text-slate-400 border-t border-slate-800 text-xs">
      {/* Upper Footer: Locations & Credentials */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-white p-1 border border-slate-700 flex items-center justify-center overflow-hidden">
                <img
                  src={brand.logoUrl}
                  alt={brand.brandName}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-display font-extrabold text-base text-white tracking-tight">
                {brand.brandName}
              </span>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed">
              Pôle régional d'expertise technique web et d'ingénierie logicielle fondé par des diplômés et techniciens de l'INP-HB Yamoussoukro.
            </p>

            <div className="flex items-center gap-2 text-[11px] text-emerald-400 font-mono">
              <span className="w-2 h-2 rounded-full bg-[#00D26A] animate-pulse"></span>
              <span>Agrément &amp; Conformité Numérique CI</span>
            </div>
          </div>

          {/* Location 1: Yamoussoukro */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider font-mono flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#00D26A]" />
              <span>Pôle Yamoussoukro (District)</span>
            </h4>
            <p className="text-slate-400 text-xs leading-relaxed">
              District Autonome de Yamoussoukro<br />
              Proximité Campus INP-HB &amp; Centre des Affaires<br />
              Permanence technique : Lun - Sam (8h - 18h)
            </p>
            <div className="pt-1">
              <a
                href="tel:+2250700000000"
                className="text-slate-300 hover:text-white font-mono flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-[#00D26A]" />
                <span>+225 07 00 00 00 00</span>
              </a>
            </div>
          </div>

          {/* Location 2: Gagnoa */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider font-mono flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#0070F3]" />
              <span>Antenne Gagnoa (Région du Gôh)</span>
            </h4>
            <p className="text-slate-400 text-xs leading-relaxed">
              Région du Gôh · Axe Commercial Principal<br />
              Déploiements et interventions sur site<br />
              Assistance technique restaurateurs &amp; commerces
            </p>
            <div className="pt-1">
              <a
                href={`mailto:${brand.contactEmail}`}
                className="text-slate-300 hover:text-white font-mono flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5 text-[#0070F3]" />
                <span>{brand.contactEmail}</span>
              </a>
            </div>
          </div>

          {/* Quick Links & Legal */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider font-mono">
              Accès Rapide
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollTo('showroom')}
                  className="hover:text-white transition-colors"
                >
                  Showroom des Réalisations en Ligne
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('services')}
                  className="hover:text-white transition-colors"
                >
                  Méthodologie en 4 Jalons
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('etudes-de-cas')}
                  className="hover:text-white transition-colors"
                >
                  Études de Cas Chiffrées
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('equipe')}
                  className="hover:text-white transition-colors"
                >
                  L'Équipe Technique INP-HB
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenCalculator}
                  className="text-[#00D26A] hover:underline"
                >
                  Calculateur de Budget &amp; Délais
                </button>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Micro Footer */}
      <div className="border-t border-slate-800/80 py-6 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} {brand.legalName}. Tous droits réservés. 
            Développé selon les standards d'ingénierie logicielle INP-HB Yamoussoukro.
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-[#00D26A]" />
              <span>Protection des données personnelles (Loi CI n° 2013-450)</span>
            </span>
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
              title="Remonter en haut de page"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
