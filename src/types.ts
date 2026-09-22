export type BrandMode = 'trefle' | 'axis';

export interface ProjectShowcase {
  id: string;
  title: string;
  tagline: string;
  category: string;
  location: string;
  locationBadge: string;
  description: string;
  imageUrl: string;
  tags: string[];
  features: string[];
  metrics: string;
  fullMockupUrl?: string;
  demoUrl?: string;
  clientName: string;
  deliveredYear: string;
}

export interface CaseStudy {
  id: string;
  location: string;
  sector: string;
  title: string;
  problem: string;
  solution: string;
  metricValue: string;
  metricLabel: string;
  resultDescription: string;
  techStack: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  category: string;
  credential: string;
  description: string;
  highlight: string;
  highlightIcon: string;
  imageUrl: string;
}

export interface PillarExpertise {
  number: string;
  title: string;
  description: string;
  icon: string;
  checkpoints: string[];
}

export interface MethodStep {
  number: string;
  title: string;
  description: string;
}

export interface AuditFormData {
  fullName: string;
  companyName: string;
  phone: string;
  email: string;
  sector: string;
  goal: string;
  mode: 'visio' | 'yamoussoukro' | 'gagnoa';
  notes?: string;
}
