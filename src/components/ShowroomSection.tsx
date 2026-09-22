import React, { useState } from 'react';
import { ProjectShowcase } from '../types';
import { SHOWCASE_PROJECTS } from '../data/mockData';
import { 
  ExternalLink, 
  MapPin, 
  Check, 
  Eye, 
  Layers, 
  ArrowUpRight, 
  Sparkles,
  Maximize2
} from 'lucide-react';

interface ShowroomSectionProps {
  onSelectProject: (project: ProjectShowcase) => void;
  onOpenAudit: () => void;
}

export const ShowroomSection: React.FC<ShowroomSectionProps> = ({
  onSelectProject,
  onOpenAudit,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Toutes les Réalisations (3)' },
    { id: 'Restauration Gastronomique', label: 'Restauration & Bar' },
    { id: 'Hôtellerie Luxe & Résidences', label: 'Hôtels & Résidences' },
    { id: 'Sport & Bien-être', label: 'Sport & Fitness Club' },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? SHOWCASE_PROJECTS
    : SHOWCASE_PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="showroom" className="py-16 sm:py-24 bg-[#f4f7fb] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[#00A854] text-xs font-bold uppercase tracking-wider mb-3">
            <span className="w-2 h-2 rounded-full bg-[#00D26A] animate-pulse"></span>
            <span>EXPOSITION DE NOS RÉALISATIONS &amp; SITES WEB EN LIGNE</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0b1c30] tracking-tight">
            Des Plateformes Concrètes, Actives et Rentables sur le Marché Ivoirien.
          </h2>

          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Chaque interface est développée sur-mesure pour résoudre une friction métier réelle : 
            prise de commande directe sans commission, moteur de réservation autonome ou gestion automatisée d'adhésions.
          </p>
        </div>

        {/* Filter categories */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-[#0b1c30] text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Image Preview Container */}
              <div className="relative aspect-[16/10] bg-slate-900 overflow-hidden cursor-pointer"
                onClick={() => onSelectProject(project)}
              >
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20 opacity-80 group-hover:opacity-90 transition-opacity"></div>

                {/* Top Location / Status Badge */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900/85 backdrop-blur-md text-white text-[11px] font-semibold border border-white/10 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-[#00D26A] animate-pulse"></span>
                    <span>{project.locationBadge}</span>
                  </span>

                  <span className="px-2 py-1 rounded-md bg-white/90 backdrop-blur-md text-slate-800 text-[10px] font-mono font-bold uppercase tracking-wider">
                    {project.deliveredYear}
                  </span>
                </div>

                {/* Hover overlay hint */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-slate-950/40 backdrop-blur-xs">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-slate-900 text-xs font-extrabold shadow-lg transform -translate-y-1 group-hover:translate-y-0 transition-transform">
                    <Maximize2 className="w-3.5 h-3.5 text-[#0070F3]" />
                    <span>Lancer la Prévisualisation Active</span>
                  </span>
                </div>

                {/* Bottom title in overlay */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <div className="text-[11px] font-mono text-emerald-400 font-medium">
                    {project.category}
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-tight line-clamp-1">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Highlights feature list */}
                  <div className="space-y-1.5 pt-2">
                    {project.features.slice(0, 2).map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-[#00D26A] shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-slate-100 text-slate-700 border border-slate-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Quantified impact metric */}
                <div className="pt-3 border-t border-slate-100">
                  <div className="flex items-center justify-between text-xs mb-3">
                    <span className="text-slate-500 font-medium">Impact mesuré :</span>
                    <span className="font-bold text-slate-900 bg-emerald-50 text-[#00A854] px-2 py-0.5 rounded border border-emerald-100">
                      {project.metrics}
                    </span>
                  </div>

                  {/* Action buttons */}
                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <button
                      onClick={() => onSelectProject(project)}
                      className="w-full py-2.5 px-3 rounded-xl text-xs font-bold bg-[#0b1c30] hover:bg-slate-800 text-white transition-all flex items-center justify-center gap-1.5 shadow-sm"
                    >
                      <Eye className="w-3.5 h-3.5 text-[#00D26A]" />
                      <span>Tester l'Écran</span>
                    </button>

                    <button
                      onClick={() => onSelectProject(project)}
                      className="w-full py-2.5 px-3 rounded-xl text-xs font-bold bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 transition-all flex items-center justify-center gap-1"
                    >
                      <span>Architecture</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner inside Showroom */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-slate-900 to-[#0b1c30] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg border border-slate-800">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-bold text-white flex items-center justify-center md:justify-start gap-2">
              <Sparkles className="w-4 h-4 text-[#00D26A]" />
              <span>Vous souhaitez un écran sur-mesure pour votre établissement ?</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Nous produisons une maquette interactive de votre futur site web sous 5 jours ouvrés à Yamoussoukro ou Gagnoa.
            </p>
          </div>

          <button
            onClick={onOpenAudit}
            className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold bg-[#00D26A] hover:bg-[#00ba5e] text-slate-950 shrink-0 transition-all shadow-md"
          >
            Réserver mon Étude Technique (Gratuit)
          </button>
        </div>
      </div>
    </section>
  );
};
