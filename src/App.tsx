import React, { useState } from 'react';
import { BrandMode, ProjectShowcase } from './types';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ReassuranceBanner } from './components/ReassuranceBanner';
import { ShowroomSection } from './components/ShowroomSection';
import { ServicesSection } from './components/ServicesSection';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { TeamSection } from './components/TeamSection';
import { AuditSection } from './components/AuditSection';
import { Footer } from './components/Footer';
import { ProjectPreviewModal } from './components/ProjectPreviewModal';
import { EstimateCalculatorModal } from './components/EstimateCalculatorModal';
import { MessageSquare, Phone, Sparkles } from 'lucide-react';

export function App() {
  const [currentBrand, setCurrentBrand] = useState<BrandMode>('trefle');
  const [previewProject, setPreviewProject] = useState<ProjectShowcase | null>(null);
  const [calculatorOpen, setCalculatorOpen] = useState<boolean>(false);

  const handleOpenAudit = () => {
    const el = document.getElementById('audit');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreShowroom = () => {
    const el = document.getElementById('showroom');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleConfirmCalculatorToAudit = (summary: string) => {
    setCalculatorOpen(false);
    handleOpenAudit();
  };

  return (
    <div className="min-h-screen bg-[#f8f9ff] text-[#0b1c30] flex flex-col font-sans selection:bg-[#00D26A]/20 selection:text-slate-950">
      {/* Sticky Main Header */}
      <Header
        currentBrand={currentBrand}
        onToggleBrand={(brand) => setCurrentBrand(brand)}
        onOpenCalculator={() => setCalculatorOpen(true)}
        onOpenAudit={handleOpenAudit}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* 1. Hero Section with Live Telemetry Console */}
        <HeroSection
          currentBrand={currentBrand}
          onOpenAudit={handleOpenAudit}
          onExploreShowroom={handleExploreShowroom}
          onOpenCalculator={() => setCalculatorOpen(true)}
        />

        {/* 2. District & Region Reassurance Banner */}
        <ReassuranceBanner />

        {/* 3. Showroom of Live Projects (Terra Gastronomie, Serene Breeze, Gagnoa Athletics) */}
        <ShowroomSection
          onSelectProject={(project) => setPreviewProject(project)}
          onOpenAudit={handleOpenAudit}
        />

        {/* 4. Three Pillars of Engineering & 4-Step Methodology */}
        <ServicesSection
          onOpenCalculator={() => setCalculatorOpen(true)}
          onOpenAudit={handleOpenAudit}
        />

        {/* 5. Case Studies with Quantified Outcomes */}
        <CaseStudiesSection onOpenAudit={handleOpenAudit} />

        {/* 6. Elite INP-HB Team Manifesto & Profiles */}
        <TeamSection
          currentBrand={currentBrand}
          onOpenAudit={handleOpenAudit}
        />

        {/* 7. Free 30-min Technical Audit Booking */}
        <AuditSection currentBrand={currentBrand} />
      </main>

      {/* Footer */}
      <Footer
        currentBrand={currentBrand}
        onOpenAudit={handleOpenAudit}
        onOpenCalculator={() => setCalculatorOpen(true)}
      />

      {/* Floating Action Button for Instant WhatsApp consultation */}
      <aside aria-label="Assistance directe WhatsApp" className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2">
        <a
          href="https://wa.me/2250700000000?text=Bonjour,%20je%20souhaite%20un%20devis%20ou%20un%20audit%20pour%20mon%20site%20web."
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#00D26A] text-slate-950 font-bold text-xs shadow-xl hover:bg-[#00ba5e] hover:shadow-2xl hover:scale-105 transition-all"
        >
          <MessageSquare className="w-4 h-4 fill-slate-950" />
          <span className="hidden sm:inline">WhatsApp Direct INP-HB</span>
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-950 animate-pulse"></span>
        </a>
      </aside>

      {/* Interactive Project Preview Modal (Screen Simulator) */}
      <ProjectPreviewModal
        project={previewProject}
        onClose={() => setPreviewProject(null)}
        onOpenAudit={handleOpenAudit}
      />

      {/* ROI & Budget Calculator Modal */}
      <EstimateCalculatorModal
        isOpen={calculatorOpen}
        onClose={() => setCalculatorOpen(false)}
        onConfirmToAudit={handleConfirmCalculatorToAudit}
      />
    </div>
  );
}

export default App;
