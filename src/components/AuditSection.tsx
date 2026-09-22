import React, { useState } from 'react';
import { BrandMode, AuditFormData } from '../types';
import { BRAND_CONFIG } from '../data/mockData';
import { 
  Sparkles, 
  CheckCircle2, 
  Calendar, 
  MapPin, 
  Phone, 
  Clock, 
  ShieldCheck, 
  Send,
  MessageSquare,
  Building,
  User,
  Mail
} from 'lucide-react';

interface AuditSectionProps {
  currentBrand: BrandMode;
}

export const AuditSection: React.FC<AuditSectionProps> = ({ currentBrand }) => {
  const brand = BRAND_CONFIG[currentBrand];
  const [formData, setFormData] = useState<AuditFormData>({
    fullName: '',
    companyName: '',
    phone: '',
    email: '',
    sector: 'Restauration & Bar',
    goal: 'Augmenter les commandes directes sans commission',
    mode: 'yamoussoukro',
    notes: '',
  });

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  const whatsappMessage = encodeURIComponent(
    `Bonjour ${brand.brandName},\nJe souhaite confirmer mon audit technique de 30 minutes gratuites.\nNom: ${formData.fullName}\nEntreprise: ${formData.companyName}\nTéléphone: ${formData.phone}\nSecteur: ${formData.sector}\nLocalisation: ${formData.mode}`
  );

  return (
    <section id="audit" className="py-16 sm:py-24 bg-[#0b1c30] text-white relative overflow-hidden">
      {/* Background technical decorations */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `radial-gradient(#00D26A 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Reassurance & Value of Audit */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[#00D26A] text-xs font-mono font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CONSULTATION STRATÉGIQUE SANS ENGAGEMENT</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Réservez Votre Audit Technique &amp; Conseil (30 min offertes).
            </h2>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Un diagnostic approfondi réalisé par un technicien ou ingénieur INP-HB. 
              Nous analysons votre présence en ligne, vos points de friction client et vous remettons 
              une feuille de route chiffrée.
            </p>

            {/* Checklist of what you get */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-[#00D26A] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Analyse des flux de commandes &amp; réservations</div>
                  <div className="text-[11px] text-slate-400">Identification des abandons et frictions Mobile Money.</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-[#00D26A] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Audit de vitesse 3G/4G locale</div>
                  <div className="text-[11px] text-slate-400">Mesure du temps de chargement réel sur les réseaux ivoiriens.</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-[#00D26A] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Chiffrage prévisionnel &amp; planning contractuel</div>
                  <div className="text-[11px] text-slate-400">Budget précis, sans frais cachés, assorti d'une date de livraison ferme.</div>
                </div>
              </div>
            </div>

            {/* Direct hotline */}
            <div className="pt-4 border-t border-slate-800 flex items-center gap-3 text-xs text-slate-300">
              <Phone className="w-4 h-4 text-[#00D26A]" />
              <span>Assistance directe Yamoussoukro &amp; Gagnoa : <strong className="text-white font-mono">+225 07 00 00 00 00</strong></span>
            </div>
          </div>

          {/* Right Column: Interactive Booking Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900/90 rounded-3xl p-6 sm:p-9 border border-slate-800 shadow-2xl backdrop-blur-md">
              {submitted ? (
                <div className="text-center py-8 space-y-5 animate-scaleUp">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-[#00D26A] flex items-center justify-center mx-auto border border-emerald-500/40">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      Demande d'Audit Enregistrée avec Succès !
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                      Merci <strong className="text-white">{formData.fullName}</strong>. Un technicien de l'INP-HB prépare votre diagnostic pour <strong>{formData.companyName}</strong>.
                    </p>
                  </div>

                  <div className="bg-slate-950 p-4 rounded-xl text-xs font-mono space-y-2 max-w-sm mx-auto text-left border border-slate-800">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Secteur :</span>
                      <strong className="text-white">{formData.sector}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Lieu d'échange :</span>
                      <strong className="text-[#00D26A] uppercase">{formData.mode}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Délai d'appel :</span>
                      <strong className="text-white">Sous 24h ouvrées</strong>
                    </div>
                  </div>

                  {/* Immediate WhatsApp redirect button */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                    <a
                      href={`https://wa.me/2250700000000?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-xs bg-[#00D26A] hover:bg-[#00ba5e] text-slate-950 transition-colors flex items-center justify-center gap-2 shadow-lg"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Échanger tout de suite sur WhatsApp</span>
                    </a>

                    <button
                      onClick={() => setSubmitted(false)}
                      className="w-full sm:w-auto px-4 py-3 rounded-xl font-bold text-xs bg-slate-800 text-slate-300 hover:text-white transition-colors"
                    >
                      Modifier ma demande
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-slate-800 pb-3 mb-4 flex items-center justify-between">
                    <span className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[#00D26A]" />
                      Formulaire d'Audit Gratuit
                    </span>
                    <span className="text-[11px] font-mono text-emerald-400">
                      3 créneaux disponibles cette semaine
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div>
                      <label className="block text-slate-300 font-medium mb-1.5 flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-slate-400" />
                        <span>Votre Nom &amp; Prénom *</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Ex: Kouassi Jean-Baptiste"
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-[#00D26A] text-xs"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-300 font-medium mb-1.5 flex items-center gap-1.5">
                        <Building className="w-3.5 h-3.5 text-slate-400" />
                        <span>Nom de votre Établissement *</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="Ex: Le Capitole Resto, Résidence..."
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-[#00D26A] text-xs"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div>
                      <label className="block text-slate-300 font-medium mb-1.5 flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-slate-400" />
                        <span>Numéro WhatsApp / Téléphone *</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+225 07 00 00 00 00"
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-[#00D26A] text-xs font-mono"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-300 font-medium mb-1.5 flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5 text-slate-400" />
                        <span>Email Professionnel</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="contact@votre-entreprise.ci"
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-[#00D26A] text-xs"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div>
                      <label className="block text-slate-300 font-medium mb-1.5">
                        Secteur d'Activité
                      </label>
                      <select
                        value={formData.sector}
                        onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-[#00D26A] text-xs"
                      >
                        <option value="Restauration & Bar">Restauration &amp; Bar / Lounge</option>
                        <option value="Hôtellerie & Hébergement">Hôtellerie &amp; Résidences Meublées</option>
                        <option value="Salle de Sport & Fitness">Salle de Sport, Fitness &amp; Bien-être</option>
                        <option value="Commerce & Distribution">Commerce, Boutique &amp; Distribution</option>
                        <option value="Santé & Clinique">Santé, Pharmacie &amp; Clinique</option>
                        <option value="Autre Entreprise">Autre Entreprise / PME Régionale</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-slate-300 font-medium mb-1.5">
                        Lieu / Modalité d'Échange
                      </label>
                      <select
                        value={formData.mode}
                        onChange={(e) => setFormData({ ...formData, mode: e.target.value as any })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-[#00D26A] text-xs"
                      >
                        <option value="yamoussoukro">Présentiel · Yamoussoukro (à votre établissement)</option>
                        <option value="gagnoa">Présentiel · Gagnoa (à votre établissement)</option>
                        <option value="visio">Visio Haute Définition (Google Meet)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-300 text-xs font-medium mb-1.5">
                      Objectif prioritaire / Besoins particuliers (optionnel)
                    </label>
                    <textarea
                      rows={2}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Ex: Nous souhaitons remplacer nos prises de commande manuelles WhatsApp par un système automatique Wave..."
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-white placeholder-slate-500 focus:outline-none focus:border-[#00D26A] text-xs"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 rounded-xl font-extrabold text-xs sm:text-sm bg-[#00D26A] hover:bg-[#00ba5e] text-slate-950 shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Traitement en cours...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Confirmer ma demande d'Audit Gratuit (30 min)</span>
                        </>
                      )}
                    </button>
                    <p className="text-[10px] text-slate-400 text-center mt-2">
                      Zéro engagement financier · Confidentialité stricte des données d'entreprise
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
