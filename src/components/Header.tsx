import React, { useState } from 'react';
import { BrandMode } from '../types';
import { BRAND_CONFIG } from '../data/mockData';
import { 
  Menu, 
  X, 
  Phone, 
  Sparkles, 
  Layers, 
  Calculator, 
  ChevronRight,
  ExternalLink
} from 'lucide-react';

interface HeaderProps {
  currentBrand: BrandMode;
  onToggleBrand: (brand: BrandMode) => void;
  onOpenCalculator: () => void;
  onOpenAudit: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentBrand,
  onToggleBrand,
  onOpenCalculator,
  onOpenAudit,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const brand = BRAND_CONFIG[currentBrand];

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all">
      {/* Top micro-bar: Local district authority & Brand Switcher */}
      <div className="bg-[#0b1c30] text-slate-300 text-xs py-1.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#00D26A] animate-pulse"></span>
            <span className="font-medium text-slate-200">
              Pôle Régional d'Ingénierie Web · Yamoussoukro &amp; Gagnoa
            </span>
            <span className="hidden md:inline text-slate-500">|</span>
            <span className="hidden md:inline text-slate-400">
              Diplômés &amp; Techniciens INP-HB
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline text-slate-400">Identité visuelle :</span>
            <div className="inline-flex items-center bg-slate-800 p-0.5 rounded-md border border-slate-700">
              <button
                id="brand-toggle-trefle"
                onClick={() => onToggleBrand('trefle')}
                className={`px-2 py-0.5 rounded text-[11px] font-semibold transition-all ${
                  currentBrand === 'trefle'
                    ? 'bg-[#00D26A] text-slate-950 shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="Version Trèfle Tech - Techniciens Supérieurs INP-HB"
              >
                Trèfle Tech
              </button>
              <button
                id="brand-toggle-axis"
                onClick={() => onToggleBrand('axis')}
                className={`px-2 py-0.5 rounded text-[11px] font-semibold transition-all ${
                  currentBrand === 'axis'
                    ? 'bg-[#0070F3] text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="Version Axis Engineering - Ingénieurs IT INP-HB"
              >
                Axis Engineering
              </button>
            </div>

            <a
              href="tel:+2250700000000"
              className="hidden lg:flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors ml-2"
            >
              <Phone className="w-3 h-3 text-[#00D26A]" />
              <span className="font-mono text-[11px]">+225 07 00 00 00 00</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-18 sm:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollTo('hero')}
              className="flex items-center gap-3 text-left group"
            >
              <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white border border-slate-200/90 shadow-sm flex items-center justify-center p-1.5 overflow-hidden transition-transform group-hover:scale-105">
                <img
                  src={brand.logoUrl}
                  alt={brand.brandName}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain"
                />
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <span className="font-display font-extrabold text-lg sm:text-xl tracking-tight text-[#0b1c30]">
                    {currentBrand === 'trefle' ? (
                      <>TRÈFLE <span className="text-[#00D26A]">TECH</span></>
                    ) : (
                      <>AXIS.<span className="text-[#0070F3]">ENGINEERING</span></>
                    )}
                  </span>
                  <span className="hidden sm:inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 border border-slate-200">
                    INP-HB
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 font-medium tracking-wide">
                  {currentBrand === 'trefle'
                    ? 'Techniciens Supérieurs du Web · Yamoussoukro'
                    : 'Ingénierie Logicielle & Design · Yamoussoukro'}
                </p>
              </div>
            </button>
          </div>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-700">
            <button
              onClick={() => scrollTo('showroom')}
              className="hover:text-[#0070F3] transition-colors flex items-center gap-1.5"
            >
              <span>Showroom en Ligne</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#00D26A]"></span>
            </button>
            <button
              onClick={() => scrollTo('services')}
              className="hover:text-[#0070F3] transition-colors"
            >
              Expertise &amp; Méthode
            </button>
            <button
              onClick={() => scrollTo('etudes-de-cas')}
              className="hover:text-[#0070F3] transition-colors"
            >
              Études de Cas
            </button>
            <button
              onClick={() => scrollTo('equipe')}
              className="hover:text-[#0070F3] transition-colors"
            >
              L'Équipe INP-HB
            </button>
            <button
              onClick={onOpenCalculator}
              className="hover:text-[#0070F3] transition-colors flex items-center gap-1 text-slate-600 bg-slate-100 hover:bg-slate-200 px-2.5 py-1 rounded-lg text-xs"
            >
              <Calculator className="w-3.5 h-3.5" />
              <span>Simulateur ROI</span>
            </button>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              id="header-audit-btn"
              onClick={onOpenAudit}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white shadow-md hover:shadow-lg transition-all flex items-center gap-2 ${
                currentBrand === 'trefle'
                  ? 'bg-[#00D26A] hover:bg-[#00b95c] text-slate-950 font-extrabold shadow-emerald-500/20'
                  : 'bg-[#0070F3] hover:bg-[#005cd6] text-white shadow-blue-500/20'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>Audit Technique Gratuit</span>
              <span className="opacity-70 text-xs">(30 min)</span>
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Ouvrir le menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <div className="grid gap-2">
            <button
              onClick={() => scrollTo('showroom')}
              className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50 flex items-center justify-between"
            >
              <span className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#00D26A]" />
                Showroom des Réalisations en Ligne
              </span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </button>
            <button
              onClick={() => scrollTo('services')}
              className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50 flex items-center justify-between"
            >
              <span>Services &amp; Méthode de Travail</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </button>
            <button
              onClick={() => scrollTo('etudes-de-cas')}
              className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50 flex items-center justify-between"
            >
              <span>Études de Cas (Yamoussoukro &amp; Gagnoa)</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </button>
            <button
              onClick={() => scrollTo('equipe')}
              className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50 flex items-center justify-between"
            >
              <span>L'Équipe Technique INP-HB</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCalculator();
              }}
              className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-800 hover:bg-blue-50 flex items-center gap-2 text-[#0070F3]"
            >
              <Calculator className="w-4 h-4" />
              <span>Calculateur de Budget &amp; ROI</span>
            </button>
          </div>

          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAudit();
              }}
              className="w-full py-3 rounded-xl text-center text-sm font-bold bg-[#00D26A] text-slate-950 shadow-md"
            >
              Demander mon Audit Gratuit (30 min)
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
