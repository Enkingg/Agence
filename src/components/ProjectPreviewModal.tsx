import React, { useState } from 'react';
import { ProjectShowcase } from '../types';
import { SHOWCASE_PROJECTS } from '../data/mockData';
import { 
  X, 
  Smartphone, 
  Tablet, 
  Monitor, 
  ExternalLink, 
  CheckCircle2, 
  Calendar, 
  Users, 
  CreditCard, 
  QrCode, 
  Clock, 
  MapPin, 
  ChevronRight, 
  ShieldCheck, 
  Sparkles,
  Maximize2,
  ZoomIn,
  RefreshCw
} from 'lucide-react';

interface ProjectPreviewModalProps {
  project: ProjectShowcase | null;
  onClose: () => void;
  onOpenAudit: () => void;
}

type ViewportMode = 'desktop' | 'tablet' | 'mobile';
type ViewMode = 'interactive' | 'mockup';

export const ProjectPreviewModal: React.FC<ProjectPreviewModalProps> = ({
  project: initialProject,
  onClose,
  onOpenAudit,
}) => {
  if (!initialProject) return null;

  const [currentProject, setCurrentProject] = useState<ProjectShowcase>(initialProject);
  const [viewport, setViewport] = useState<ViewportMode>('desktop');
  const [viewMode, setViewMode] = useState<ViewMode>('interactive');

  // Interactive state for Terra Gastronomie
  const [tableGuests, setTableGuests] = useState<number>(2);
  const [bookingDate, setBookingDate] = useState<string>('Ce soir, 19:30');
  const [paymentProvider, setPaymentProvider] = useState<'wave' | 'orange' | 'momo'>('wave');
  const [tableBookingSuccess, setTableBookingSuccess] = useState<boolean>(false);

  // Interactive state for Serene Breeze
  const [selectedSuite, setSelectedSuite] = useState<string>('Villa Palmier & Piscine');
  const [stayNights, setStayNights] = useState<number>(2);
  const [resortBookingSuccess, setResortBookingSuccess] = useState<boolean>(false);

  // Interactive state for Gagnoa Athletics
  const [selectedPlan, setSelectedPlan] = useState<string>('Pass Mensuel Pro');
  const [memberCode, setMemberCode] = useState<string>('GA-2024-8842');
  const [passGenerated, setPassGenerated] = useState<boolean>(false);

  const handleBookingTerra = (e: React.FormEvent) => {
    e.preventDefault();
    setTableBookingSuccess(true);
  };

  const handleBookingResort = (e: React.FormEvent) => {
    e.preventDefault();
    setResortBookingSuccess(true);
  };

  const handleGeneratePass = () => {
    setMemberCode(`GA-${Math.floor(1000 + Math.random() * 9000)}-${Date.now().toString().slice(-4)}`);
    setPassGenerated(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-6xl h-[92vh] bg-slate-900 rounded-2xl shadow-2xl border border-slate-700/80 flex flex-col overflow-hidden">
        
        {/* Top Control Bar */}
        <div className="h-16 bg-slate-950 border-b border-slate-800 px-4 flex items-center justify-between gap-4 shrink-0">
          {/* Project selector tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto py-1">
            {SHOWCASE_PROJECTS.map((p) => (
              <button
                key={p.id}
                onClick={() => {
                  setCurrentProject(p);
                  setTableBookingSuccess(false);
                  setResortBookingSuccess(false);
                  setPassGenerated(false);
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                  currentProject.id === p.id
                    ? 'bg-slate-800 text-white border border-slate-700 shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-slate-900'
                }`}
              >
                <span className={`w-2 h-2 rounded-full ${currentProject.id === p.id ? 'bg-[#00D26A]' : 'bg-slate-600'}`}></span>
                <span>{p.title.split('/')[0]}</span>
              </button>
            ))}
          </div>

          {/* Viewport switcher & View mode */}
          <div className="hidden md:flex items-center gap-3">
            <div className="bg-slate-900 p-0.5 rounded-lg border border-slate-800 flex items-center">
              <button
                onClick={() => setViewMode('interactive')}
                className={`px-2.5 py-1 rounded text-xs font-semibold transition-all ${
                  viewMode === 'interactive'
                    ? 'bg-[#0070F3] text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Écran Interactif
              </button>
              <button
                onClick={() => setViewMode('mockup')}
                className={`px-2.5 py-1 rounded text-xs font-semibold transition-all ${
                  viewMode === 'mockup'
                    ? 'bg-[#0070F3] text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Maquette HD
              </button>
            </div>

            {viewMode === 'interactive' && (
              <div className="bg-slate-900 p-0.5 rounded-lg border border-slate-800 flex items-center">
                <button
                  onClick={() => setViewport('desktop')}
                  className={`p-1.5 rounded transition-all ${
                    viewport === 'desktop' ? 'bg-slate-800 text-[#00D26A]' : 'text-slate-400 hover:text-white'
                  }`}
                  title="Vue Ordinateur (Desktop)"
                >
                  <Monitor className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewport('tablet')}
                  className={`p-1.5 rounded transition-all ${
                    viewport === 'tablet' ? 'bg-slate-800 text-[#00D26A]' : 'text-slate-400 hover:text-white'
                  }`}
                  title="Vue Tablette (768px)"
                >
                  <Tablet className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewport('mobile')}
                  className={`p-1.5 rounded transition-all ${
                    viewport === 'mobile' ? 'bg-slate-800 text-[#00D26A]' : 'text-slate-400 hover:text-white'
                  }`}
                  title="Vue Mobile (390px)"
                >
                  <Smartphone className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

          {/* Close button */}
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content View Area */}
        <div className="flex-1 bg-slate-950/60 overflow-y-auto p-3 sm:p-6 flex items-center justify-center">
          {viewMode === 'mockup' ? (
            /* High-res image mockup inspection view */
            <div className="w-full max-w-4xl h-full flex flex-col items-center justify-center space-y-4">
              <div className="relative max-h-[75vh] rounded-xl overflow-hidden shadow-2xl border border-slate-700 bg-black">
                <img
                  src={currentProject.imageUrl}
                  alt={currentProject.title}
                  referrerPolicy="no-referrer"
                  className="max-h-[75vh] w-auto object-contain mx-auto"
                />
                <div className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-700 text-xs text-slate-300 font-mono flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00D26A]" />
                  <span>Maquette Graphique &amp; Code Produit Validé</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setViewMode('interactive')}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-[#00D26A] text-slate-950 hover:bg-[#00ba5e] transition-colors"
                >
                  Basculer vers l'Écran Interactif Réel
                </button>
              </div>
            </div>
          ) : (
            /* Interactive screen container with frame responsive sizing */
            <div
              className={`transition-all duration-300 mx-auto h-full flex flex-col ${
                viewport === 'desktop'
                  ? 'w-full max-w-5xl'
                  : viewport === 'tablet'
                  ? 'w-[768px] max-w-full'
                  : 'w-[390px] max-w-full'
              }`}
            >
              {/* Browser Mockup Chrome */}
              <div className="bg-slate-900 border border-slate-700 rounded-t-xl px-4 py-2.5 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                  <span className="ml-2 text-[11px] font-mono text-slate-400 hidden sm:inline">
                    https://{currentProject.id}.ci/live-preview
                  </span>
                </div>

                <div className="flex items-center gap-2 text-[11px] font-mono text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-[#00D26A] animate-pulse"></span>
                  <span>Connecté · Hub {currentProject.location}</span>
                </div>
              </div>

              {/* Dynamic screen content depending on project */}
              <div className="flex-1 bg-white border-x border-b border-slate-700 rounded-b-xl overflow-y-auto text-slate-900">
                
                {/* 1. TERRA GASTRONOMIE / LE CAPITOLE */}
                {currentProject.id === 'terra-gastronomie' && (
                  <div className="min-h-full bg-[#121212] text-slate-100 flex flex-col font-sans">
                    {/* Restaurant Mini Header */}
                    <div className="p-4 border-b border-white/10 flex items-center justify-between bg-black/60 sticky top-0 z-10 backdrop-blur-md">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-amber-600/30 border border-amber-500 flex items-center justify-center font-serif text-amber-400 font-bold">
                          TG
                        </div>
                        <div>
                          <div className="font-serif font-bold text-sm tracking-wide text-amber-200">
                            TERRA GASTRONOMIE
                          </div>
                          <div className="text-[10px] text-slate-400">Le Capitole · Yamoussoukro</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-mono text-[#00D26A] bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                          Ouvert · Service 19h - 23h30
                        </span>
                      </div>
                    </div>

                    {/* Restaurant Hero Banner */}
                    <div className="relative py-10 px-6 text-center bg-gradient-to-b from-black/80 to-[#121212] border-b border-white/5">
                      <p className="text-xs uppercase tracking-widest text-amber-400 font-mono mb-2">
                        Cuisine Africaine Moderne &amp; Saveurs Ivoiriennes
                      </p>
                      <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white max-w-lg mx-auto">
                        L'Élégance Culinaire au Cœur de la Capitale Politique
                      </h2>
                      <p className="text-xs text-slate-400 mt-2 max-w-md mx-auto">
                        Réservation de table en temps réel avec confirmation instantanée par SMS. Zéro frais d'intermédiaire.
                      </p>
                    </div>

                    {/* Interactive Table Booking Form */}
                    <div className="p-6 max-w-2xl mx-auto w-full flex-1">
                      {tableBookingSuccess ? (
                        <div className="bg-emerald-950/50 border border-emerald-500/40 rounded-2xl p-6 text-center space-y-4 animate-scaleUp">
                          <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-[#00D26A] flex items-center justify-center mx-auto">
                            <CheckCircle2 className="w-7 h-7" />
                          </div>
                          <h3 className="text-lg font-serif font-bold text-white">
                            Réservation Confirmée avec Succès !
                          </h3>
                          <div className="bg-black/40 rounded-xl p-4 text-xs space-y-2 text-slate-300 font-mono text-left max-w-sm mx-auto">
                            <div className="flex justify-between">
                              <span className="text-slate-400">Établissement :</span>
                              <strong className="text-white">Terra Gastronomie</strong>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Couverts :</span>
                              <strong className="text-white">{tableGuests} personnes</strong>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Horaire :</span>
                              <strong className="text-white">{bookingDate}</strong>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Paiement acompte :</span>
                              <strong className="text-[#00D26A] uppercase">{paymentProvider} validé</strong>
                            </div>
                          </div>
                          <p className="text-xs text-slate-400">
                            Un SMS et une notification WhatsApp ont été envoyés avec le plan d'accès.
                          </p>
                          <button
                            onClick={() => setTableBookingSuccess(false)}
                            className="px-4 py-2 rounded-xl text-xs font-bold bg-slate-800 hover:bg-slate-700 text-white transition-colors"
                          >
                            Nouvelle simulation de réservation
                          </button>
                        </div>
                      ) : (
                        <form onSubmit={handleBookingTerra} className="bg-slate-900/90 rounded-2xl p-5 border border-slate-800 space-y-4 shadow-xl">
                          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                            <span className="text-xs font-bold text-amber-200 uppercase tracking-wider flex items-center gap-1.5">
                              <Calendar className="w-4 h-4 text-amber-400" />
                              Module Réservation Directe
                            </span>
                            <span className="text-[11px] text-[#00D26A] font-mono">Disponibilité Vérifiée</span>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                            <div>
                              <label className="block text-slate-400 mb-1">Nombre de convives</label>
                              <div className="flex items-center gap-2">
                                {[2, 4, 6, 8].map((num) => (
                                  <button
                                    type="button"
                                    key={num}
                                    onClick={() => setTableGuests(num)}
                                    className={`flex-1 py-2 rounded-lg font-bold transition-all ${
                                      tableGuests === num
                                        ? 'bg-amber-500 text-black'
                                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                                    }`}
                                  >
                                    {num} p.
                                  </button>
                                ))}
                              </div>
                            </div>

                            <div>
                              <label className="block text-slate-400 mb-1">Créneau horaire</label>
                              <select
                                value={bookingDate}
                                onChange={(e) => setBookingDate(e.target.value)}
                                className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-white text-xs focus:ring-1 focus:ring-amber-500"
                              >
                                <option value="Ce soir, 19:30">Ce soir, 19:30 (Recommandé)</option>
                                <option value="Ce soir, 20:30">Ce soir, 20:30</option>
                                <option value="Ce soir, 21:30">Ce soir, 21:30</option>
                                <option value="Demain midi, 12:30">Demain midi, 12:30</option>
                              </select>
                            </div>
                          </div>

                          <div>
                            <label className="block text-slate-400 text-xs mb-1">Moyen de garantie acompte</label>
                            <div className="grid grid-cols-3 gap-2">
                              <button
                                type="button"
                                onClick={() => setPaymentProvider('wave')}
                                className={`py-2 px-3 rounded-lg border text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                                  paymentProvider === 'wave'
                                    ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300'
                                    : 'bg-slate-800/80 border-slate-700 text-slate-400'
                                }`}
                              >
                                <span>Wave</span>
                              </button>
                              <button
                                type="button"
                                onClick={() => setPaymentProvider('orange')}
                                className={`py-2 px-3 rounded-lg border text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                                  paymentProvider === 'orange'
                                    ? 'bg-orange-500/20 border-orange-400 text-orange-300'
                                    : 'bg-slate-800/80 border-slate-700 text-slate-400'
                                }`}
                              >
                                <span>Orange Money</span>
                              </button>
                              <button
                                type="button"
                                onClick={() => setPaymentProvider('momo')}
                                className={`py-2 px-3 rounded-lg border text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                                  paymentProvider === 'momo'
                                    ? 'bg-yellow-500/20 border-yellow-400 text-yellow-300'
                                    : 'bg-slate-800/80 border-slate-700 text-slate-400'
                                }`}
                              >
                                <span>MTN MoMo</span>
                              </button>
                            </div>
                          </div>

                          <button
                            type="submit"
                            className="w-full py-3 rounded-xl font-bold text-xs bg-amber-500 hover:bg-amber-400 text-slate-950 transition-all shadow-lg flex items-center justify-center gap-2"
                          >
                            <span>Confirmer la table &amp; Générer le reçu</span>
                            <ChevronRight className="w-4 h-4" />
                          </button>
                        </form>
                      )}
                    </div>
                  </div>
                )}

                {/* 2. SERENE BREEZE RESORT & VILLAS */}
                {currentProject.id === 'serene-breeze' && (
                  <div className="min-h-full bg-slate-50 text-slate-800 flex flex-col font-sans">
                    {/* Resort Header */}
                    <div className="p-4 bg-white border-b border-slate-200 flex items-center justify-between sticky top-0 z-10 shadow-xs">
                      <div>
                        <div className="font-display font-extrabold text-sm text-[#0052CC] tracking-tight">
                          SERENE BREEZE
                        </div>
                        <div className="text-[10px] text-slate-500">Resort &amp; Villas · Centre &amp; Gôh</div>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-bold text-slate-900">Prix Direct Établissement</span>
                        <div className="text-[10px] text-emerald-600 font-semibold">-18% vs Booking / Expedia</div>
                      </div>
                    </div>

                    {/* Interactive Room Selector */}
                    <div className="p-6 max-w-3xl mx-auto w-full flex-1 space-y-5">
                      <div className="text-center space-y-1">
                        <h3 className="text-xl font-bold text-slate-900">Sélectionnez Votre Suite Exclusive</h3>
                        <p className="text-xs text-slate-500">
                          Disponibilités en direct synchronisées avec le PMS de la réception.
                        </p>
                      </div>

                      {resortBookingSuccess ? (
                        <div className="bg-white rounded-2xl p-6 border border-emerald-500/40 shadow-xl text-center space-y-4 animate-scaleUp">
                          <div className="w-12 h-12 rounded-full bg-emerald-100 text-[#00D26A] flex items-center justify-center mx-auto">
                            <CheckCircle2 className="w-7 h-7" />
                          </div>
                          <h4 className="text-lg font-bold text-slate-900">Pré-réservation Validée !</h4>
                          <p className="text-xs text-slate-600">
                            Séjour de {stayNights} nuits réservé dans la <strong>{selectedSuite}</strong>.
                          </p>
                          <div className="bg-slate-50 p-4 rounded-xl text-xs font-mono space-y-1 max-w-sm mx-auto text-left border border-slate-200">
                            <div className="flex justify-between">
                              <span>Référence :</span>
                              <strong className="text-slate-900">SB-GOH-2024-912</strong>
                            </div>
                            <div className="flex justify-between">
                              <span>Tarif Total estimé :</span>
                              <strong className="text-[#0070F3]">
                                {(stayNights * 85000).toLocaleString('fr-FR')} FCFA
                              </strong>
                            </div>
                            <div className="flex justify-between text-emerald-600 font-bold">
                              <span>Économie commission OTA :</span>
                              <span>+{((stayNights * 85000) * 0.18).toLocaleString('fr-FR')} FCFA</span>
                            </div>
                          </div>
                          <button
                            onClick={() => setResortBookingSuccess(false)}
                            className="px-4 py-2 rounded-xl text-xs font-bold bg-slate-900 text-white"
                          >
                            Tester un autre séjour
                          </button>
                        </div>
                      ) : (
                        <form onSubmit={handleBookingResort} className="space-y-4">
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            {[
                              { name: 'Suite Jardin Émeraude', price: '65 000 FCFA/nuit', tag: 'Vue Palmeraie' },
                              { name: 'Villa Palmier & Piscine', price: '85 000 FCFA/nuit', tag: 'Coup de Cœur' },
                              { name: 'Pavillon Présidentiel Gôh', price: '140 000 FCFA/nuit', tag: 'Prestige VIP' },
                            ].map((suite) => (
                              <div
                                key={suite.name}
                                onClick={() => setSelectedSuite(suite.name)}
                                className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                                  selectedSuite === suite.name
                                    ? 'border-[#0070F3] bg-blue-50/50 shadow-md'
                                    : 'border-slate-200 bg-white hover:border-slate-300'
                                }`}
                              >
                                <span className="text-[10px] font-bold uppercase tracking-wider text-[#0070F3] bg-blue-100/70 px-2 py-0.5 rounded">
                                  {suite.tag}
                                </span>
                                <div className="font-bold text-xs text-slate-900 mt-2">{suite.name}</div>
                                <div className="text-xs font-extrabold text-[#0070F3] mt-1">{suite.price}</div>
                              </div>
                            ))}
                          </div>

                          <div className="bg-white p-4 rounded-xl border border-slate-200 flex flex-wrap items-center justify-between gap-4 text-xs">
                            <div>
                              <span className="text-slate-500 block">Durée du séjour :</span>
                              <div className="flex items-center gap-2 mt-1">
                                {[1, 2, 3, 5].map((n) => (
                                  <button
                                    type="button"
                                    key={n}
                                    onClick={() => setStayNights(n)}
                                    className={`px-3 py-1.5 rounded-lg font-bold ${
                                      stayNights === n
                                        ? 'bg-[#0070F3] text-white'
                                        : 'bg-slate-100 text-slate-700'
                                    }`}
                                  >
                                    {n} {n > 1 ? 'nuits' : 'nuit'}
                                  </button>
                                ))}
                              </div>
                            </div>

                            <button
                              type="submit"
                              className="px-6 py-2.5 rounded-xl font-bold bg-[#0070F3] hover:bg-blue-700 text-white shadow-md transition-all text-xs"
                            >
                              Valider &amp; Calculer Devis Immédiat
                            </button>
                          </div>
                        </form>
                      )}
                    </div>
                  </div>
                )}

                {/* 3. GAGNOA ATHLETICS FITNESS CLUB */}
                {currentProject.id === 'gagnoa-athletics' && (
                  <div className="min-h-full bg-[#0a0a0a] text-slate-200 flex flex-col font-sans">
                    {/* Fitness Header */}
                    <div className="p-4 bg-black border-b border-neutral-800 flex items-center justify-between sticky top-0 z-10">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-red-600 text-white flex items-center justify-center font-black text-xs">
                          GA
                        </div>
                        <span className="font-extrabold text-sm tracking-wider text-white uppercase">
                          GAGNOA ATHLETICS
                        </span>
                      </div>
                      <span className="text-[11px] font-mono text-red-500 font-bold px-2 py-0.5 rounded bg-red-950/60 border border-red-800">
                        ESPACE MEMBRES &amp; TOURNIQUET
                      </span>
                    </div>

                    {/* Member Portal Content */}
                    <div className="p-6 max-w-2xl mx-auto w-full flex-1 space-y-6">
                      <div className="text-center space-y-1">
                        <h3 className="text-xl font-black text-white tracking-wide uppercase">
                          Portail Membre Digitalisé &amp; Accès Salle
                        </h3>
                        <p className="text-xs text-neutral-400">
                          Génération instantanée de pass QR Code infalsifiable pour les membres de Gagnoa.
                        </p>
                      </div>

                      {passGenerated ? (
                        <div className="bg-neutral-900 border-2 border-red-500/50 rounded-2xl p-6 text-center space-y-4 shadow-2xl animate-scaleUp">
                          <div className="inline-block px-3 py-1 rounded-full bg-red-600 text-white text-[10px] font-mono font-bold uppercase tracking-widest">
                            PASS DIGITAL ACTIF
                          </div>
                          <div className="w-36 h-36 bg-white p-3 rounded-xl mx-auto flex items-center justify-center shadow-lg">
                            <QrCode className="w-full h-full text-black" />
                          </div>
                          <div>
                            <div className="font-mono text-sm font-bold text-white tracking-wider">
                              ID : {memberCode}
                            </div>
                            <div className="text-xs text-red-400 font-semibold mt-0.5">
                              Formule : {selectedPlan}
                            </div>
                            <div className="text-[10px] text-neutral-400 mt-1">
                              Accès illimité Musculation, Cardio &amp; Cours collectifs
                            </div>
                          </div>
                          <button
                            onClick={() => setPassGenerated(false)}
                            className="px-4 py-2 rounded-xl text-xs font-bold bg-neutral-800 hover:bg-neutral-700 text-white"
                          >
                            Modifier mon abonnement
                          </button>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            {[
                              { name: 'Pass Découverte', price: '5 000 FCFA', desc: 'Accès 1 séance + coach' },
                              { name: 'Pass Mensuel Pro', price: '25 000 FCFA', desc: 'Accès illimité 30 jours' },
                              { name: 'Pass Annuel VIP', price: '220 000 FCFA', desc: 'Bilan nutrition + sauna' },
                            ].map((plan) => (
                              <div
                                key={plan.name}
                                onClick={() => setSelectedPlan(plan.name)}
                                className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                                  selectedPlan === plan.name
                                    ? 'border-red-500 bg-red-950/20 text-white shadow-lg'
                                    : 'border-neutral-800 bg-neutral-900 text-neutral-300 hover:border-neutral-700'
                                }`}
                              >
                                <div className="font-black text-xs uppercase">{plan.name}</div>
                                <div className="text-base font-bold text-red-500 mt-1">{plan.price}</div>
                                <div className="text-[10px] text-neutral-400 mt-1">{plan.desc}</div>
                              </div>
                            ))}
                          </div>

                          <button
                            onClick={handleGeneratePass}
                            className="w-full py-3.5 rounded-xl font-black text-xs bg-red-600 hover:bg-red-500 text-white uppercase tracking-wider transition-all shadow-lg flex items-center justify-center gap-2"
                          >
                            <QrCode className="w-4 h-4" />
                            <span>Générer mon Pass QR Code d'Accès Immédiat</span>
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                )}

              </div>
            </div>
          )}
        </div>

        {/* Bottom Modal CTA Bar */}
        <div className="h-16 bg-slate-950 border-t border-slate-800 px-6 flex items-center justify-between shrink-0">
          <div className="text-xs text-slate-400 hidden sm:block">
            Projet conçu et déployé par les diplômés &amp; techniciens de l'<strong>INP-HB Yamoussoukro</strong>.
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <button
              onClick={() => {
                onClose();
                onOpenAudit();
              }}
              className="px-5 py-2.5 rounded-xl text-xs font-bold bg-[#00D26A] hover:bg-[#00ba5e] text-slate-950 transition-colors shadow-sm flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Demander un système similaire pour mon activité</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
