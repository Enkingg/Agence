import React, { useState } from 'react';
import { 
  X, 
  Calculator, 
  Check, 
  Clock, 
  TrendingUp, 
  ShieldCheck, 
  ArrowRight,
  Sparkles,
  Zap
} from 'lucide-react';

interface EstimateCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirmToAudit: (summary: string) => void;
}

export const EstimateCalculatorModal: React.FC<EstimateCalculatorModalProps> = ({
  isOpen,
  onClose,
  onConfirmToAudit,
}) => {
  if (!isOpen) return null;

  const [sector, setSector] = useState<'resto' | 'hotel' | 'fitness' | 'retail' | 'sme'>('resto');
  const [selectedModules, setSelectedModules] = useState<string[]>([
    'booking',
    'wave',
    'seo',
  ]);
  const [speed, setSpeed] = useState<'standard' | 'express'>('standard');

  const modulesList = [
    {
      id: 'booking',
      name: 'Moteur de Réservation / Commande en Temps Réel',
      price: 90000,
      benefit: '+30% à 50% de conversion directe',
    },
    {
      id: 'wave',
      name: 'Passerelle Mobile Money directe (Wave & Orange & MoMo)',
      price: 65000,
      benefit: 'Encaissement instantané sans friction',
    },
    {
      id: 'member',
      name: 'Portail Adhérent & Pass d\'Accès QR Code',
      price: 85000,
      benefit: 'Suppression des registres papier',
    },
    {
      id: 'pos',
      name: 'Synchronisation Caisse / Imprimante Cuisine POS',
      price: 70000,
      benefit: 'Gain de 2h par service pour le personnel',
    },
    {
      id: 'pwa',
      name: 'Progressive Web App (PWA) Optimisée 3G/4G',
      price: 60000,
      benefit: 'Temps de chargement < 1 seconde garanti',
    },
    {
      id: 'seo',
      name: 'Optimisation Référencement Google Maps Yamoussoukro/Gagnoa',
      price: 45000,
      benefit: 'Visibilité prioritaire sur les recherches locales',
    },
  ];

  const basePriceBySector = {
    resto: 180000,
    hotel: 240000,
    fitness: 190000,
    retail: 175000,
    sme: 160000,
  };

  const toggleModule = (id: string) => {
    if (selectedModules.includes(id)) {
      setSelectedModules(selectedModules.filter((m) => m !== id));
    } else {
      setSelectedModules([...selectedModules, id]);
    }
  };

  // Price calculations
  const baseCost = basePriceBySector[sector];
  const modulesCost = selectedModules.reduce((acc, mId) => {
    const found = modulesList.find((m) => m.id === mId);
    return acc + (found ? found.price : 0);
  }, 0);

  const subtotal = baseCost + modulesCost;
  const speedMultiplier = speed === 'express' ? 1.2 : 1.0;
  const totalEstimate = Math.round((subtotal * speedMultiplier) / 5000) * 5000;

  const estimatedDeliveryWeeks = speed === 'express' ? '2 semaines' : '3 à 4 semaines';

  const handleApply = () => {
    const sectorLabels: Record<string, string> = {
      resto: 'Restauration & Bar',
      hotel: 'Hôtellerie & Résidence',
      fitness: 'Sport & Fitness Club',
      retail: 'Commerce & Vente',
      sme: 'PME & Services',
    };
    const summary = `Devis estimé: ${totalEstimate.toLocaleString('fr-FR')} FCFA (${sectorLabels[sector]} - ${estimatedDeliveryWeeks})`;
    onConfirmToAudit(summary);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Header */}
        <div className="px-6 py-5 bg-[#0b1c30] text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-[#00D26A] flex items-center justify-center">
              <Calculator className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-base text-white tracking-tight">
                Simulateur de Budget &amp; Délais INP-HB
              </h3>
              <p className="text-[11px] text-slate-300">
                Tarification transparente, sans coûts cachés, calibrée pour Yamoussoukro &amp; Gagnoa
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content body */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs text-slate-700 flex-1">
          {/* Step 1: Select Sector */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">
              1. Type d'établissement ou d'activité :
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {[
                { id: 'resto', label: 'Restauration / Bar' },
                { id: 'hotel', label: 'Hôtel / Résidence' },
                { id: 'fitness', label: 'Salle de Sport / Gym' },
                { id: 'retail', label: 'Boutique / Vente' },
                { id: 'sme', label: 'PME & Services Pro' },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSector(item.id as any)}
                  className={`p-2.5 rounded-xl border text-xs font-semibold text-center transition-all ${
                    sector === item.id
                      ? 'bg-[#0b1c30] text-white border-[#0b1c30] shadow-sm'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Select Modules */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">
              2. Modules &amp; Fonctionnalités requises :
            </label>
            <div className="space-y-2">
              {modulesList.map((mod) => {
                const isChecked = selectedModules.includes(mod.id);
                return (
                  <div
                    key={mod.id}
                    onClick={() => toggleModule(mod.id)}
                    className={`p-3 rounded-xl border cursor-pointer transition-all flex items-center justify-between gap-3 ${
                      isChecked
                        ? 'bg-blue-50/70 border-[#0070F3]'
                        : 'bg-slate-50 border-slate-200 hover:bg-slate-100/70'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 ${
                          isChecked ? 'bg-[#0070F3] text-white' : 'border border-slate-300 bg-white'
                        }`}
                      >
                        {isChecked && <Check className="w-3.5 h-3.5" />}
                      </div>
                      <div>
                        <div className="font-bold text-slate-900">{mod.name}</div>
                        <div className="text-[10px] text-slate-500">{mod.benefit}</div>
                      </div>
                    </div>

                    <span className="font-mono font-bold text-slate-800 text-[11px] whitespace-nowrap">
                      +{mod.price.toLocaleString('fr-FR')} FCFA
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Step 3: Speed selection */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">
              3. Vitesse de livraison souhaitée :
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setSpeed('standard')}
                className={`p-3 rounded-xl border text-left transition-all ${
                  speed === 'standard'
                    ? 'border-[#0070F3] bg-blue-50/50'
                    : 'border-slate-200 bg-slate-50'
                }`}
              >
                <div className="font-bold text-slate-900">Standard (3 à 4 semaines)</div>
                <div className="text-[10px] text-slate-500">Recommandé · Sans surcoût</div>
              </button>

              <button
                type="button"
                onClick={() => setSpeed('express')}
                className={`p-3 rounded-xl border text-left transition-all ${
                  speed === 'express'
                    ? 'border-emerald-500 bg-emerald-50/50'
                    : 'border-slate-200 bg-slate-50'
                }`}
              >
                <div className="font-bold text-slate-900 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-amber-500" />
                  <span>Sprint Express (2 semaines)</span>
                </div>
                <div className="text-[10px] text-slate-500">Mobilisation prioritaire équipe INP-HB</div>
              </button>
            </div>
          </div>
        </div>

        {/* Total & Action Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
          <div>
            <div className="text-[11px] text-slate-500 font-medium">Estimation indicative :</div>
            <div className="text-xl sm:text-2xl font-black font-mono text-[#0b1c30]">
              {totalEstimate.toLocaleString('fr-FR')}{' '}
              <span className="text-xs text-slate-500 font-sans font-normal">FCFA TTC</span>
            </div>
            <div className="text-[10px] text-emerald-600 font-semibold flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>Délai estimé : {estimatedDeliveryWeeks}</span>
            </div>
          </div>

          <button
            onClick={handleApply}
            className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs font-extrabold bg-[#00D26A] hover:bg-[#00ba5e] text-slate-950 shadow-md transition-all flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            <span>Valider ce plan lors de mon Audit Gratuit</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
