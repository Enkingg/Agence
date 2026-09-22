import { CaseStudy, PillarExpertise, MethodStep, ProjectShowcase, TeamMember } from '../types';

export const BRAND_CONFIG = {
  trefle: {
    id: 'trefle' as const,
    brandName: 'TRÈFLE TECH',
    legalName: 'TRÈFLE TECH SARL',
    subBrand: 'Agence Digitale · Techniciens INP-HB',
    shortDescriptor: 'Techniciens Supérieurs du Web (INP-HB Yamoussoukro)',
    heroBadge: 'Expertise Technique Terrain',
    heroTitlePrefix: "L'Expertise Technique Web & le Design d'Action",
    heroTitleSuffix: "au Service de la Croissance de Votre Entreprise.",
    taglineSubtitle:
      'Nous concevons des plateformes web sur-mesure, ultra-rapides et orientées conversion pour les commerces, restaurants, hôtels et salles de sport à Yamoussoukro et Gagnoa. Zéro amateurisme, 100% d\'efficacité pratique.',
    teamManifestoTag: 'TECHNICIENS SUPÉRIEURS QUALIFIÉS',
    teamManifestoQuote:
      '"Nous appliquons la rigueur pratique, la réactivité et l\'expertise concrète du terrain au monde du web."',
    teamManifestoSub:
      'Formés à l\'Institut National Polytechnique Félix Houphouët-Boigny (INP-HB) de Yamoussoukro, nous refusons l\'amateurisme des solutions bricolées. Notre travail repose sur une expertise technique appliquée, le respect scrupuleux des délais et une réactivité immédiate sur vos outils opérationnels.',
    logoUrl:
      'https://lh3.googleusercontent.com/aida/AEtjO1VBzZWjeOHyL_RlAx-c32jYsbr_WuTcBz4M81OnBlTj1JIy4y2oC-FnnzjjU0IsjX5ikoadDtR37qV5MypuZ6gel1aK535nOInAcajsG4DlWahSuVGRmeyIPaOLVETZx4x4U680sOxKKhZz5T8Xfybiw4blypZqLK3phD53DLV04Xud_MI9aXsjdokPm99CWE8Zf68ZcBJqtihIsixCzi3isEwC43CZtVPbhRzU2iMhSLeEIgockhEzV0AH',
    iconColor: '#00D26A',
    accentColor: '#0070F3',
    domainUrl: 'trefle-tech.ci',
    contactEmail: 'contact@trefle-tech.ci',
    memberCredential: 'Technicien Supérieur INP-HB',
  },
  axis: {
    id: 'axis' as const,
    brandName: 'AXIS.ENGINEERING',
    legalName: 'AXIS ENGINEERING SARL',
    subBrand: 'AGENCE DIGITALE · INP-HB',
    shortDescriptor: 'Ingénieurs IT de l\'INP-HB Yamoussoukro',
    heroBadge: 'Excellence Polytechnique',
    heroTitlePrefix: "L'Ingénierie Logicielle & Le Design de Précision",
    heroTitleSuffix: "au Service de la Croissance de Votre Entreprise.",
    taglineSubtitle:
      'Nous concevons des plateformes web sur-mesure, ultra-rapides et orientées conversion pour les commerces, restaurants, hôtels et salles de sport à Yamoussoukro et Gagnoa. Zéro amateurisme, 100% de rigueur scientifique.',
    teamManifestoTag: 'FORMATION POLYTECHNIQUE D\'ÉLITE',
    teamManifestoQuote:
      '"Nous appliquons les méthodes scientifiques de l\'ingénierie au monde du web."',
    teamManifestoSub:
      'Issus des bancs de l\'Institut National Polytechnique Félix Houphouët-Boigny (INP-HB) de Yamoussoukro, nous refusons l\'amateurisme des solutions bricolées. Notre travail repose sur une rigueur mathématique, le respect scrupuleux des délais et zéro compromis sur la qualité applicative.',
    logoUrl:
      'https://lh3.googleusercontent.com/aida/AEtjO1VBzZWjeOHyL_RlAx-c32jYsbr_WuTcBz4M81OnBlTj1JIy4y2oC-FnnzjjU0IsjX5ikoadDtR37qV5MypuZ6gel1aK535nOInAcajsG4DlWahSuVGRmeyIPaOLVETZx4x4U680sOxKKhZz5T8Xfybiw4blypZqLK3phD53DLV04Xud_MI9aXsjdokPm99CWE8Zf68ZcBJqtihIsixCzi3isEwC43CZtVPbhRzU2iMhSLeEIgockhEzV0AH',
    iconColor: '#0070F3',
    accentColor: '#0052CC',
    domainUrl: 'axis-engineering.ci',
    contactEmail: 'contact@axis-engineering.ci',
    memberCredential: 'Diplômé INP-HB',
  },
};

export const SHOWCASE_PROJECTS: ProjectShowcase[] = [
  {
    id: 'terra-gastronomie',
    title: 'Terra Gastronomie / Le Capitole',
    tagline: 'Site vitrine haut de gamme & commande temps réel',
    category: 'Restauration Gastronomique',
    location: 'Yamoussoukro',
    locationBadge: 'Site en Ligne · Yamoussoukro',
    description:
      'Site vitrine haut de gamme et plateforme de réservation en ligne avec click-and-collect de menus africains modernes, commande temps réel et confirmation instantanée par SMS / WhatsApp.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida/AEtjO1UURPqv7YDfbnLHVLiBj_cg6dciikv3OPO7kEVuAhNCVMFMXEnd0nHKlnwGpeSJiqVZLDIqb0HOZ96y0x_6SDGj7tuhJQe0XFglNTEUyMa5tQGbSjFTPP9I2QcigMbMdzWVeWkIf2tCOYwSgBe_bJrKpELOLTCo0LBEzRa5P0NZU38wlH1FLKd0LQ2iyIaQayz7t6Llxq-ki63L5YqvN4PZ8JEUiIGOYPk-Fd0GRNg4QQ',
    tags: ['Next.js 14', 'Tailwind CSS', 'Wave / MoMo', 'Table Booking'],
    features: [
      'Réservation de table en 3 clics avec confirmation instantanée',
      'Intégration passerelle Mobile Money directe (Wave & Orange Money)',
      'Synchronisation immédiate sur terminal cuisine / POS',
      'Menu digital interactif adapté aux connexions 3G/4G locales',
    ],
    metrics: '+48% de réservations directes sans commission',
    clientName: 'Le Capitole Resto Lounge',
    deliveredYear: '2024',
  },
  {
    id: 'serene-breeze',
    title: 'Serene Breeze Resort & Villas',
    tagline: 'Moteur de réservation direct de suites & villas',
    category: 'Hôtellerie Luxe & Résidences',
    location: 'Centre & Gôh',
    locationBadge: 'Site en Ligne · Centre & Gôh',
    description:
      'Système de réservation de suites avec sélecteur de chambres immersif, tarification dynamique, paiement Mobile Money (Wave, Orange) et zéro commission tierce pour l\'exploitant.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida/AEtjO1VeQ-WhW4GmJAWSOWdn8-Xtzh1WkepYRXgc53El1xl15bOSovdaA7biLXKmZZiXZ2nwc0-c14Ix386OtAze0_OkHIjmtQo6Eqz4QpMCnvhPZPFoFd4kV3e7gfvl9RTi74vmAR87nzh5nByBcbYs65DGKbuUw5f1gYkn4YiyYp0lfYWT24JKcgsRW3oy7WFR74wik5GnhsrgSUmbDpxahium3Zu0YldAyGrGWDBD2oPO2w',
    tags: ['Moteur PMS Direct', 'Wave / Orange Money', 'Visite Virtuelle', 'SMS Notify'],
    features: [
      'Calendrier de disponibilités synchronisé en temps réel sans surbooking',
      'Paiement d\'acompte sécurisé via Wave et Orange Money',
      'Présentation immersive 360° et fiches détaillées des suites',
      'Économie annuelle estimée à 1.2M FCFA sur les intermédiaires OTA',
    ],
    metrics: '1.2M FCFA économisés sur les commissions OTA',
    clientName: 'Serene Breeze Hospitality Group',
    deliveredYear: '2024',
  },
  {
    id: 'gagnoa-athletics',
    title: 'Gagnoa Athletics Fitness Club',
    tagline: 'Portail membre interactif & abonnements QR Code',
    category: 'Sport & Bien-être',
    location: 'Gagnoa',
    locationBadge: 'Plateforme en Ligne · Gagnoa',
    description:
      'Portail membre interactif en dark mode avec planning de cours en direct, souscription d\'abonnements mensuels récurrents et passe digital à QR Code infalsifiable.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida/AEtjO1XJtyjIszKh-mvH_g2zszS7pymChv7fPC2Ojs5Q9pdIipljNzfeQ7BHx-T6Rla-H99RUEm-Ltj4qlWLX7ierYsSUD5l_pi6ofx0ojd9ODEb_IRp0abem2rdQGcZPGHg7wwdE9vrggVzL64_gR4wyAWizAMqbYXOWZuH20dHkBg__ZAcP44mkzOnuT1TfENFBsNcSMJ4FJqPnYtV6UAaORQS1lmcRy3gXSTDMQwrhX1n',
    tags: ['Dashboard PWA', 'QR Code Pass', 'Paiement Récurrent', 'Turnstile API'],
    features: [
      'Génération dynamique de badge membre avec QR code d\'accès salle',
      'Renouvellement automatique d\'adhésion via prélèvement mobile',
      'Réservation des séances de cross-training et coaching privé',
      'Tableau de bord de gestion des effectifs et caisse automatisée',
    ],
    metrics: 'x2.4 abonnés convertis dès le premier mois',
    clientName: 'Gagnoa Athletics Club',
    deliveredYear: '2024',
  },
];

export const PILLARS: PillarExpertise[] = [
  {
    number: '01',
    title: 'Design UI/UX & Psychologie de Conversion',
    description:
      'Recherche utilisateur rigoureuse sur les comportements d\'achat ivoiriens, ergonomie mobile-first sans friction, wireframing interactif Figma haute fidélité et optimisation pratique du parcours client jusqu\'à l\'encaissement.',
    icon: 'palette',
    checkpoints: ['Prototypage immersif validé', 'A/B testing des call-to-actions'],
  },
  {
    number: '02',
    title: 'Développement Web Sur-Mesure & CMS Robuste',
    description:
      'Architectures modernes Next.js / Tailwind CSS pour des performances ultra-réactives, ou CMS headless durci face aux cyber-attaques. Zéro surcharge de templates tiers, temps de chargement sous la seconde et monitoring continu.',
    icon: 'code',
    checkpoints: ['Audit de conformité Core Web Vitals', 'Architecture headless ultra-sécurisée'],
  },
  {
    number: '03',
    title: 'Solutions Logicielles & Systèmes Métier',
    description:
      'Intégration d\'APIs de passerelles de paiement locales (Wave, Orange Money, MTN MoMo), modules de réservation temps réel, synchronisation de stocks et tableaux de bord décisionnels pour directeurs d\'établissements.',
    icon: 'wallet',
    checkpoints: ['Webhooks & encaissement instantané', 'Synchronisation ERP / PMS / POS'],
  },
];

export const METHOD_STEPS: MethodStep[] = [
  {
    number: '01',
    title: 'Découverte & Diagnostic Approfondi',
    description:
      'Audit clinique de vos processus, cartographie précise de vos personas acheteurs à Yamoussoukro ou Gagnoa, et définition formelle des KPIs de rentabilité.',
  },
  {
    number: '02',
    title: 'Prototypage Interactif Validé',
    description:
      'Création d\'une maquette cliquable exhaustive sur Figma pour valider l\'expérience utilisateur, l\'architecture d\'information et les flux de conversion avant le code.',
  },
  {
    number: '03',
    title: 'Développement & Tests Rigoureux',
    description:
      'Développement logiciel modulaire, revues de code croisées, banc d\'essai multi-navigateurs et audits de sécurité d\'intrusion pour une robustesse à toute épreuve.',
  },
  {
    number: '04',
    title: 'Déploiement, Formation & Suivi ROI',
    description:
      'Mise en production sans rupture de service, transfert de compétences opérationnel auprès de vos salariés et analyse mensuelle de conversion chiffrée.',
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case-yamoussoukro',
    location: 'YAMOUSSOUKRO',
    sector: 'Restauration Gastronomique',
    title: 'Système de Réservation & Click-and-Collect',
    problem:
      '35% d\'appels manqués aux heures de pointe, friction sur les commandes WhatsApp manuelles et perte de réservations de tables rentables chaque week-end.',
    solution:
      'Progressive Web App (PWA) sur-mesure intégrant un calendrier dynamique de tables en temps réel, passerelle de prépaiement Wave/Orange Money et synchronisation sur imprimante cuisine.',
    metricValue: '+48%',
    metricLabel: '0 double réservation',
    resultDescription:
      'Hausse mesurée de réservations confirmées • Gain de 2h par jour pour le personnel.',
    techStack: ['Next.js', 'PWA', 'Wave API', 'ESC/POS Printer'],
  },
  {
    id: 'case-gagnoa',
    location: 'GAGNOA',
    sector: 'Sport & Bien-être',
    title: 'Plateforme d\'Acquisition & Gestion d\'Abonnements',
    problem:
      'Gestion manuelle des adhérents sur registre papier, taux de réengagement faible et incapacité à transformer les visiteurs curieux en souscripteurs récurrents.',
    solution:
      'Landing page ultra-rapide axée sur la conversion psychologique, tunnel d\'inscription en 3 étapes avec prélèvements programmés et passe digital QR Code pour les accès.',
    metricValue: 'x2.4',
    metricLabel: '+65 abonnés (Mois 1)',
    resultDescription:
      'Multiplication du taux de conversion visiteur • Suivi administratif 100% automatisé.',
    techStack: ['Tailwind CSS', 'QR Access Hub', 'Orange Money Recurring'],
  },
  {
    id: 'case-centre-goh',
    location: 'CENTRE & GÔH',
    sector: 'Hôtellerie & Résidences',
    title: 'Tunnel Direct de Réservation Hôtelière',
    problem:
      'Dépendance excessive aux commissions de 18% prélevées par les plateformes de réservation en ligne et absence de mise en valeur visuelle immersive des suites.',
    solution:
      'Moteur de réservation en ligne propriétaire sans intermédiaire, visite virtuelle interactive optimisée pour réseau mobile, confirmation automatisée SMS et console de gestion.',
    metricValue: '+32%',
    metricLabel: '1.2M FCFA économisés',
    resultDescription:
      'Hausse nette des réservations directes • Économie de commission atteinte en 90 jours.',
    techStack: ['Cloud Engine', 'Interactive 360', 'Direct PMS Engine'],
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'member-1',
    name: 'Kouamé Eric',
    role: 'Chef de Projet Digital & Méthodes',
    category: 'DIRECTION DE PROJET',
    credential: 'Technicien Supérieur INP-HB',
    description:
      'Planification rigoureuse sous méthodologie Agile/Scrum, communication transparente avec les directions d\'entreprise, respect inconditionnel des délais et cadrage budgétaire strict.',
    highlight: 'Garantie de livraison à date fixe',
    highlightIcon: 'calendar_month',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAZ9g7WXUnaxvYMRuS4TiziK0CYjuxFDvbU6yG3w_XEB1Qh4SOoFu79KCSixUlSeTm42qhm1JPnygJxoayN8Va9yYPWe_136KTj-JvDpV2aVFoRFB1Ta8iQM3szs3Pb54LQh9paCrR-6ZLcB8Dy5zbYS8M3si0Bp_hDYzUBFARufVrypdGf87IMRKjw4JvjRMxpaxEMWGyILLdLGV4Iwt2IV_EQAh1bATYcAfktbKxSiZyZGDAE6hig1g',
  },
  {
    id: 'member-2',
    name: 'Koffi Ahou Cynthia',
    role: 'Lead UI/UX & Web Design',
    category: 'DESIGN & ERGONOMIE',
    credential: 'Technicien Supérieur INP-HB',
    description:
      'Conception d\'interfaces intuitives et fluides, cartographie fine de parcours clients, maquettage interactif et validation empirique par tests utilisateurs sur le terrain.',
    highlight: 'Taux de rebond minimisé',
    highlightIcon: 'touch_app',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCfdeZbYtUqhkU755cM5pJrn9M19FLOdIZlteR88ag812VEIs_xTKCLA40fjJojhM5Fg25MGiQnUSAtCK3xqZSX_EN-FQsL7_S1s0KwuiZZUotdT1dWWIuWopOlLU30cN7INyWVaqlCEbAl_4GBbGcKasm8dSMJrh8Inop_-hTbzyQnde3hSeIkEP34b8TcUsS8XgX7pTvfdEs0bRvhEjFgtawW9F552dO5NKx37q60_tKVwb67eHWPWA',
  },
  {
    id: 'member-3',
    name: 'Yao Jean-Marc',
    role: 'Développeur Front-End & Intégrateur',
    category: 'PERFORMANCE CLIENT',
    credential: 'Technicien Supérieur INP-HB',
    description:
      'Expertise avancée en performance web, accessibilité universelle mobile, intégration réactive millimétrée et rendu fluide pour tous les débits de connexion 3G/4G/Fibre de Côte d\'Ivoire.',
    highlight: 'Temps de rendu < 100ms',
    highlightIcon: 'speed',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBXKf4wVNRozMblF0ubmmfKThgsjG2YWuxvVww8euWT8RLRu-s7pAUcCu69sYbSGK1oDo6PvOtNYfqP7tXYCBNZ3FgZGeSqQt-3XlRkOQz6zXkex-PWknhGZbm3jCkMPb1yuhfiyKweeaZDbQL7WwgdJr2Vh1QCrMWXk32biBBo7AnEvKl8vYOhbCpj65JU9nkWBp8MqqdRa45sYeaz6RSnTDY-M-kpd3U0TYgY7DjPopb9eHhwkc9kZw',
  },
  {
    id: 'member-4',
    name: 'Bamba Souleymane',
    role: 'Architecte Back-End & Sécurité',
    category: 'INFRASTRUCTURE & SÉCURITÉ',
    credential: 'Technicien Supérieur INP-HB',
    description:
      'Gestion d\'infrastructures haute disponibilité, intégration sécurisée des paiements Mobile Money, bases de données relationnelles fiables et protection selon les standards OWASP.',
    highlight: 'Zéro faille de données tolérée',
    highlightIcon: 'security',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAfB9Ulttx-7L884tZxnOibhwANVUtwWYeq885HB3MJFZWtzpjfpTiH8wSJHBJq_JSZLS7wlCxxfs6Qc9_EUfUaWXminojoxoEPZ9ph7pz1BGzcF-UhJk7Hue6d6d_CJkATEKa_S15s7mFaltNd7qCS4aChIDHE_lZ4a416NfeRYfKpvtTAhS7rywpAf-Uiz_WYT3PK5OeNA9Qm2YlYQYYNkMYWTPKCe2oHPq9mqFq37f1Y5DiGO4FD3w',
  },
];
