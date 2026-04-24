(function profileMockupBootstrap(globalScope) {
  const TEST_ACCOUNT = Object.freeze({
    name: "Demo User",
    email: "test@snappinquiz.local",
    password: "Test1234!",
    avatarUrl: "",
    avatarPreset: "",
  });
  const ADMIN_ACCOUNT = Object.freeze({
    name: "Admin User",
    email: "admin@snappinquiz.local",
    password: "Admin1234!",
    avatarUrl: "",
    avatarPreset: "",
  });
  const ORG_ACCOUNT = Object.freeze({
    name: "Org Owner",
    email: "owner@snappinquiz.local",
    password: "Owner1234!",
    avatarUrl: "",
    avatarPreset: "",
  });
  const ADMIN_DASHBOARD_COURSES = Object.freeze([
    "IT-Sicherheit Grundlagen",
    "Phishing Awareness Pro",
    "DSGVO Compliance",
    "Social Engineering Abwehr",
    "Sicheres Home-Office",
    "KI-Betrug & Deepfakes",
    "Passwort-Sicherheit",
    "Mobile Device Security",
    "Cloud-Grundlagen",
    "E-Mail-Verschlüsselung",
    "Social Media Awareness",
    "Secure Messaging",
    "USB & Peripheriegeräte",
    "Reisesicherheit",
    "Ransomware Basics",
    "Incident Reporting",
    "ACME Notfallplan",
    "ACME Datenschutz-Richtlinie",
    "ACME Secure Coding Standards",
    "ACME Access Control Policy",
    "ACME Lieferanten-Onboarding",
    "ACME Forensik-Handbuch",
    "ACME Cloud-Compliance",
    "ACME MFA-Leitfaden",
    "ACME Physical Security",
    "ACME Krisen-Kommunikation",
  ]);
  const CATEGORY_COLORS = Object.freeze({
    itSec:       { bg: "rgba(168,85,247,0.15)", border: "rgba(168,85,247,0.4)", text: "#d8b4fe" },
    awareness:   { bg: "rgba(236,72,153,0.15)", border: "rgba(236,72,153,0.4)", text: "#f9a8d4" },
    privacy:     { bg: "rgba(14,165,233,0.15)", border: "rgba(14,165,233,0.4)", text: "#7dd3fc" },
    social:      { bg: "rgba(34,197,94,0.15)",  border: "rgba(34,197,94,0.4)",  text: "#86efac" },
    workplace:   { bg: "rgba(251,191,36,0.15)", border: "rgba(251,191,36,0.4)", text: "#fde68a" },
    aiDeepfakes: { bg: "rgba(239,68,68,0.15)",  border: "rgba(239,68,68,0.4)",  text: "#fca5a5" },
    organization:{ bg: "rgba(99,102,241,0.15)", border: "rgba(99,102,241,0.4)", text: "#a5b4fc" },
  });
  const ADMIN_COURSE_DETAILS = Object.freeze({
    "IT-Sicherheit Grundlagen": { scope: "global", tags: [{ de: "IT-Sicherheit", en: "IT Security" }, { de: "Grundlagen", en: "Basics" }, { de: "Pflicht", en: "Mandatory" }], color: CATEGORY_COLORS.itSec, status: "active", lessons: 12, duration: 45, description: { de: "Der perfekte Einstieg in die Welt der Cybersecurity. Lernen Sie die wichtigsten Begriffe und Konzepte.", en: "The perfect introduction to cybersecurity. Learn the key terms and concepts." } },
    "Phishing Awareness Pro": { scope: "global", tags: [{ de: "Awareness", en: "Awareness" }, { de: "Phishing", en: "Phishing" }, { de: "E-Mail", en: "Email" }, { de: "Angriffe", en: "Attacks" }], color: CATEGORY_COLORS.awareness, status: "draft", lessons: 6, duration: 20, description: { de: "Erkennen Sie Phishing-Angriffe zuverlässig. Mit echten Beispielen und interaktiven Übungen.", en: "Detect phishing attacks reliably with real examples and interactive exercises." } },
    "DSGVO Compliance": { scope: "global", tags: [{ de: "Datenschutz", en: "Data Protection" }, { de: "DSGVO", en: "GDPR" }, { de: "Compliance", en: "Compliance" }], color: CATEGORY_COLORS.privacy, status: "active", lessons: 8, duration: 30, description: { de: "Alles zur Datenschutz-Grundverordnung. Praktische Tipps für den Arbeitsalltag.", en: "Everything about GDPR with practical guidance for daily work." } },
    "Social Engineering Abwehr": { scope: "global", tags: [{ de: "Social Engineering", en: "Social Engineering" }, { de: "Awareness", en: "Awareness" }, { de: "Psychologie", en: "Psychology" }, { de: "Angriffe", en: "Attacks" }], color: CATEGORY_COLORS.social, status: "active", lessons: 10, duration: 35, description: { de: "Psychologische Tricks erkennen und sicher reagieren.", en: "Recognize psychological manipulation tactics and respond safely." } },
    "Sicheres Home-Office": { scope: "global", tags: [{ de: "Arbeitsplatz", en: "Workplace" }, { de: "Home-Office", en: "Home Office" }, { de: "Remote", en: "Remote" }, { de: "VPN", en: "VPN" }, { de: "WLAN", en: "Wi-Fi" }], color: CATEGORY_COLORS.workplace, status: "archived", lessons: 5, duration: 15, description: { de: "VPN, WLAN-Sicherheit und Gerät-Schutz für verteilte Teams.", en: "VPN, Wi-Fi security, and device protection for distributed teams." } },
    "KI-Betrug & Deepfakes": { scope: "global", tags: [{ de: "KI & Deepfakes", en: "AI & Deepfakes" }, { de: "Awareness", en: "Awareness" }, { de: "Betrug", en: "Fraud" }, { de: "Voice Cloning", en: "Voice Cloning" }], color: CATEGORY_COLORS.aiDeepfakes, status: "draft", lessons: 7, duration: 25, description: { de: "Voice Cloning und Deepfake-Muster frühzeitig erkennen.", en: "Detect voice cloning and deepfake patterns early." } },
    "Passwort-Sicherheit": { scope: "global", tags: [{ de: "IT-Sicherheit", en: "IT Security" }, { de: "Passwörter", en: "Passwords" }, { de: "MFA", en: "MFA" }], color: CATEGORY_COLORS.itSec, status: "active", lessons: 7, duration: 25, description: { de: "Starke Passwörter, Password-Manager und MFA im Arbeitsalltag.", en: "Strong passwords, password managers, and MFA in daily work." } },
    "Mobile Device Security": { scope: "global", tags: [{ de: "Arbeitsplatz", en: "Workplace" }, { de: "Mobile", en: "Mobile" }, { de: "Geräte", en: "Devices" }], color: CATEGORY_COLORS.workplace, status: "active", lessons: 8, duration: 30, description: { de: "Sicherer Umgang mit Smartphones und Tablets im Unternehmenskontext.", en: "Secure use of smartphones and tablets in a corporate context." } },
    "Cloud-Grundlagen": { scope: "global", tags: [{ de: "IT-Sicherheit", en: "IT Security" }, { de: "Cloud", en: "Cloud" }, { de: "Grundlagen", en: "Basics" }, { de: "Shared Responsibility", en: "Shared Responsibility" }], color: CATEGORY_COLORS.itSec, status: "active", lessons: 9, duration: 35, description: { de: "Grundlagen zu Cloud-Diensten, Zugriff und Shared Responsibility.", en: "Cloud services fundamentals, access control, and shared responsibility." } },
    "E-Mail-Verschlüsselung": { scope: "global", tags: [{ de: "Datenschutz", en: "Data Protection" }, { de: "E-Mail", en: "Email" }, { de: "Verschlüsselung", en: "Encryption" }], color: CATEGORY_COLORS.privacy, status: "draft", lessons: 5, duration: 20, description: { de: "S/MIME, PGP und moderne Alternativen verständlich erklärt.", en: "S/MIME, PGP, and modern alternatives explained clearly." } },
    "Social Media Awareness": { scope: "global", tags: [{ de: "Awareness", en: "Awareness" }, { de: "Social Media", en: "Social Media" }, { de: "OSINT", en: "OSINT" }], color: CATEGORY_COLORS.awareness, status: "active", lessons: 6, duration: 20, description: { de: "Reputation, OSINT und Informationspreisgabe in sozialen Netzwerken.", en: "Reputation, OSINT, and information disclosure on social networks." } },
    "Secure Messaging": { scope: "global", tags: [{ de: "Datenschutz", en: "Data Protection" }, { de: "Kommunikation", en: "Communication" }], color: CATEGORY_COLORS.privacy, status: "active", lessons: 4, duration: 15, description: { de: "Ende-zu-Ende-verschlüsselte Kommunikation für Teams.", en: "End-to-end encrypted communication for teams." } },
    "USB & Peripheriegeräte": { scope: "global", tags: [{ de: "IT-Sicherheit", en: "IT Security" }, { de: "Hardware", en: "Hardware" }], color: CATEGORY_COLORS.itSec, status: "archived", lessons: 4, duration: 15, description: { de: "Gefahren durch unbekannte USB-Geräte und Drop-Attacks.", en: "Risks from unknown USB devices and drop attacks." } },
    "Reisesicherheit": { scope: "global", tags: [{ de: "Arbeitsplatz", en: "Workplace" }, { de: "Reisen", en: "Travel" }, { de: "Hotel-WLAN", en: "Hotel Wi-Fi" }, { de: "Grenze", en: "Border" }, { de: "Device Hygiene", en: "Device Hygiene" }], color: CATEGORY_COLORS.workplace, status: "active", lessons: 6, duration: 25, description: { de: "Sicheres Arbeiten unterwegs — Hotel-WLAN, Grenzkontrollen, Device Hygiene.", en: "Working safely on the go — hotel Wi-Fi, border checks, device hygiene." } },
    "Ransomware Basics": { scope: "global", tags: [{ de: "IT-Sicherheit", en: "IT Security" }, { de: "Ransomware", en: "Ransomware" }, { de: "Vorfall", en: "Incident" }], color: CATEGORY_COLORS.itSec, status: "active", lessons: 8, duration: 30, description: { de: "Ransomware erkennen, melden und Erstschritte bei einem Vorfall.", en: "Detect ransomware, report incidents, and first-response steps." } },
    "Incident Reporting": { scope: "global", tags: [{ de: "Awareness", en: "Awareness" }, { de: "Meldewesen", en: "Reporting" }, { de: "Vorfall", en: "Incident" }], color: CATEGORY_COLORS.awareness, status: "active", lessons: 5, duration: 20, description: { de: "Wann, wie und an wen Sicherheitsvorfälle gemeldet werden.", en: "When, how, and to whom to report security incidents." } },
    "ACME Notfallplan": { scope: "organization", tags: [{ de: "Organisation", en: "Organization" }, { de: "Notfall", en: "Emergency" }, { de: "ACME", en: "ACME" }], color: CATEGORY_COLORS.organization, status: "active", lessons: 9, duration: 40, description: { de: "Interner ACME Notfallplan und Eskalationsprozesse.", en: "Internal ACME emergency plan and escalation processes." } },
    "ACME Datenschutz-Richtlinie": { scope: "organization", tags: [{ de: "Datenschutz", en: "Data Protection" }, { de: "Richtlinie", en: "Policy" }, { de: "ACME", en: "ACME" }], color: CATEGORY_COLORS.privacy, status: "active", lessons: 7, duration: 30, description: { de: "Verbindliche ACME-Datenschutzrichtlinien und Verantwortlichkeiten.", en: "Binding ACME data-protection policies and responsibilities." } },
    "ACME Secure Coding Standards": { scope: "organization", tags: [{ de: "IT-Sicherheit", en: "IT Security" }, { de: "Entwicklung", en: "Development" }, { de: "Code-Review", en: "Code Review" }, { de: "ACME", en: "ACME" }], color: CATEGORY_COLORS.itSec, status: "active", lessons: 12, duration: 60, description: { de: "ACME-interne Standards für sichere Entwicklung und Code-Review.", en: "ACME-internal standards for secure development and code review." } },
    "ACME Access Control Policy": { scope: "organization", tags: [{ de: "IT-Sicherheit", en: "IT Security" }, { de: "Zugriff", en: "Access" }, { de: "Rollen", en: "Roles" }, { de: "ACME", en: "ACME" }], color: CATEGORY_COLORS.itSec, status: "active", lessons: 6, duration: 25, description: { de: "Zugriffsrichtlinie von ACME — Rollen, Freigaben, Re-Zertifizierung.", en: "ACME access control policy — roles, approvals, recertification." } },
    "ACME Lieferanten-Onboarding": { scope: "organization", tags: [{ de: "Organisation", en: "Organization" }, { de: "Lieferanten", en: "Vendors" }, { de: "ACME", en: "ACME" }], color: CATEGORY_COLORS.organization, status: "draft", lessons: 5, duration: 20, description: { de: "Security-Checkliste für neue Lieferanten und Dritt-Integrationen.", en: "Security checklist for new vendors and third-party integrations." } },
    "ACME Forensik-Handbuch": { scope: "organization", tags: [{ de: "IT-Sicherheit", en: "IT Security" }, { de: "Forensik", en: "Forensics" }, { de: "ACME", en: "ACME" }], color: CATEGORY_COLORS.itSec, status: "draft", lessons: 10, duration: 50, description: { de: "Forensische Erstmaßnahmen nach ACME-Standard.", en: "First-response forensic steps per ACME standard." } },
    "ACME Cloud-Compliance": { scope: "organization", tags: [{ de: "Datenschutz", en: "Data Protection" }, { de: "Cloud", en: "Cloud" }, { de: "Compliance", en: "Compliance" }, { de: "Workloads", en: "Workloads" }, { de: "ACME", en: "ACME" }], color: CATEGORY_COLORS.privacy, status: "active", lessons: 8, duration: 35, description: { de: "Cloud-Compliance-Anforderungen für ACME-Workloads.", en: "Cloud compliance requirements for ACME workloads." } },
    "ACME MFA-Leitfaden": { scope: "organization", tags: [{ de: "IT-Sicherheit", en: "IT Security" }, { de: "MFA", en: "MFA" }, { de: "ACME", en: "ACME" }], color: CATEGORY_COLORS.itSec, status: "active", lessons: 4, duration: 15, description: { de: "ACME-Vorgaben zur Mehrfaktor-Authentifizierung.", en: "ACME guidelines for multi-factor authentication." } },
    "ACME Physical Security": { scope: "organization", tags: [{ de: "Arbeitsplatz", en: "Workplace" }, { de: "Zutritt", en: "Access Control" }, { de: "ACME", en: "ACME" }], color: CATEGORY_COLORS.workplace, status: "active", lessons: 6, duration: 25, description: { de: "Zutrittskontrolle, Clean-Desk und Besuchermanagement bei ACME.", en: "Access control, clean-desk, and visitor management at ACME." } },
    "ACME Krisen-Kommunikation": { scope: "organization", tags: [{ de: "Organisation", en: "Organization" }, { de: "Kommunikation", en: "Communication" }, { de: "Krise", en: "Crisis" }, { de: "ACME", en: "ACME" }], color: CATEGORY_COLORS.organization, status: "archived", lessons: 5, duration: 20, description: { de: "Interne Kommunikation während eines Sicherheitsvorfalls.", en: "Internal communication during a security incident." } },
  });
  const ADMIN_USER_ROLES = Object.freeze(["team_moderator", "team_owner", "user"]);
  const ADMIN_ROLE_LABELS = Object.freeze({
    de: Object.freeze({
      team_moderator: "Team Moderator",
      team_owner: "Team Owner",
      user: "Nutzer",
    }),
    en: Object.freeze({
      team_moderator: "Team Moderator",
      team_owner: "Team Owner",
      user: "User",
    }),
  });
  const ADMIN_ROLE_CAPABILITIES = Object.freeze({
    de: Object.freeze({
      team_moderator: ["Kurszuweisungen verwalten", "Lernfortschritt prüfen"],
      team_owner: ["Eigenes Team steuern", "Kurse im Team zuweisen"],
      user: ["Kurse absolvieren", "Quiz-Ergebnisse einsehen"],
    }),
    en: Object.freeze({
      team_moderator: ["Manage course assignments", "Review learning progress"],
      team_owner: ["Manage own team", "Assign training within team scope"],
      user: ["Complete courses", "Review quiz results"],
    }),
  });
  const ADMIN_ROLE_PERMISSIONS = Object.freeze({
    admin: Object.freeze(["admin_dashboard_access", "manage_user_lifecycle", "manage_enrollments", "manage_roles"]),
    owner: Object.freeze(["admin_dashboard_access", "manage_user_lifecycle", "manage_enrollments", "manage_roles"]),
    team_owner: Object.freeze(["admin_dashboard_access", "manage_enrollments"]),
    team_moderator: Object.freeze(["admin_dashboard_access", "manage_enrollments"]),
    user: Object.freeze([]),
    guest: Object.freeze([]),
  });
  const ADMIN_AVAILABLE_TEAMS = [
    "Incident Response", "Security Operations", "Marketing",
    "Finance", "HR", "Legal", "IT Infrastructure", "Product Development",
    "Customer Support", "Sales", "Data Engineering", "Cloud Operations",
    "Network Security", "Compliance", "Audit", "Research",
    "Quality Assurance", "DevOps", "Risk Management", "Communications",
  ];
  const ADMIN_TEAM_DETAILS = (() => {
    const base = {
      "Incident Response": {
        active: true,
        gradient: "from-primary-500/30 to-accent-500/30",
        tagColor: { bg: "bg-primary-500/15", text: "text-primary-300", border: "border-primary-500/30" },
        accentColor: "text-primary-400",
        description: { de: "Verantwortlich f\u00FCr interne IT-Sicherheitsschulungen und Compliance-Kurse.", en: "Responsible for internal IT security training and compliance courses." },
        courses: ["IT-Sicherheit Grundlagen", "Phishing Awareness Pro", "DSGVO Compliance", "Ransomware Basics", "Incident Reporting", "ACME Notfallplan", "ACME Forensik-Handbuch"],
      },
      "Security Operations": {
        active: true,
        gradient: "from-accent-500/30 to-primary-500/30",
        tagColor: { bg: "bg-accent-500/15", text: "text-accent-300", border: "border-accent-500/30" },
        accentColor: "text-accent-400",
        description: { de: "Security-Operations-Team mit Fokus auf Bedrohungsanalyse und Monitoring.", en: "Security operations team focused on threat analysis and monitoring." },
        courses: ["Social Engineering Abwehr", "KI-Betrug & Deepfakes", "Sicheres Home-Office", "Ransomware Basics", "ACME Access Control Policy", "ACME MFA-Leitfaden"],
      },
      "Marketing": {
        active: false,
        gradient: "from-cyber-blue/30 to-primary-500/30",
        tagColor: { bg: "bg-cyan-500/15", text: "text-cyan-300", border: "border-cyan-500/30" },
        accentColor: "text-cyan-400",
        description: { de: "Marketing-Team mit Fokus auf Phishing-Awareness und Datenschutzschulungen.", en: "Marketing team focused on phishing awareness and data protection training." },
        courses: ["Phishing Awareness Pro", "DSGVO Compliance", "Social Media Awareness"],
      },
    };
    const palette = [
      { gradient: "from-primary-500/30 to-accent-500/30", tagColor: { bg: "bg-primary-500/15", text: "text-primary-300", border: "border-primary-500/30" }, accentColor: "text-primary-400" },
      { gradient: "from-accent-500/30 to-primary-500/30", tagColor: { bg: "bg-accent-500/15", text: "text-accent-300", border: "border-accent-500/30" }, accentColor: "text-accent-400" },
      { gradient: "from-cyber-blue/30 to-primary-500/30", tagColor: { bg: "bg-cyan-500/15", text: "text-cyan-300", border: "border-cyan-500/30" }, accentColor: "text-cyan-400" },
      { gradient: "from-emerald-500/30 to-teal-500/30", tagColor: { bg: "bg-emerald-500/15", text: "text-emerald-300", border: "border-emerald-500/30" }, accentColor: "text-emerald-400" },
      { gradient: "from-amber-500/30 to-orange-500/30", tagColor: { bg: "bg-amber-500/15", text: "text-amber-300", border: "border-amber-500/30" }, accentColor: "text-amber-400" },
      { gradient: "from-rose-500/30 to-pink-500/30", tagColor: { bg: "bg-rose-500/15", text: "text-rose-300", border: "border-rose-500/30" }, accentColor: "text-rose-400" },
    ];
    const extras = {
      "Finance":            { de: "Finanzteam mit Fokus auf Compliance und Betrugserkennung.", en: "Finance team focused on compliance and fraud detection.", courses: ["DSGVO Compliance", "Phishing Awareness Pro", "ACME Datenschutz-Richtlinie"] },
      "HR":                 { de: "Personalabteilung und Onboarding-Training.", en: "HR and onboarding training.", courses: ["DSGVO Compliance", "IT-Sicherheit Grundlagen", "Reisesicherheit", "ACME Datenschutz-Richtlinie", "ACME Physical Security"] },
      "Legal":              { de: "Rechtsabteilung, Vertragsprüfung und Datenschutz.", en: "Legal, contract review, and data protection.", courses: ["DSGVO Compliance", "E-Mail-Verschlüsselung", "ACME Datenschutz-Richtlinie", "ACME Lieferanten-Onboarding"] },
      "IT Infrastructure":  { de: "Betrieb der IT-Infrastruktur und Endpoint-Security.", en: "IT infrastructure operations and endpoint security.", courses: ["IT-Sicherheit Grundlagen", "Sicheres Home-Office", "Mobile Device Security", "Cloud-Grundlagen", "ACME Access Control Policy"] },
      "Product Development":{ de: "Produktentwicklung und Secure-Coding-Grundlagen.", en: "Product development and secure-coding fundamentals.", courses: ["IT-Sicherheit Grundlagen", "Social Engineering Abwehr", "Passwort-Sicherheit", "ACME Secure Coding Standards"] },
      "Customer Support":   { de: "Kundensupport mit Social-Engineering-Fokus.", en: "Customer support with social-engineering focus.", courses: ["Social Engineering Abwehr", "Phishing Awareness Pro", "Social Media Awareness", "Secure Messaging"] },
      "Sales":              { de: "Vertrieb und Außendienst-Schulungen.", en: "Sales and field training.", courses: ["Phishing Awareness Pro", "Sicheres Home-Office", "Reisesicherheit", "Mobile Device Security", "Social Media Awareness"] },
      "Data Engineering":   { de: "Datenpipelines und Datenschutzkonformität.", en: "Data pipelines and privacy compliance.", courses: ["DSGVO Compliance", "IT-Sicherheit Grundlagen", "Cloud-Grundlagen", "ACME Cloud-Compliance"] },
      "Cloud Operations":   { de: "Cloud-Betrieb und Zugriffsmanagement.", en: "Cloud operations and access management.", courses: ["IT-Sicherheit Grundlagen", "Sicheres Home-Office", "Cloud-Grundlagen", "ACME Cloud-Compliance", "ACME MFA-Leitfaden"] },
      "Network Security":   { de: "Netzwerküberwachung und Perimeterschutz.", en: "Network monitoring and perimeter defense.", courses: ["IT-Sicherheit Grundlagen", "Social Engineering Abwehr", "Ransomware Basics", "USB & Peripheriegeräte", "ACME Access Control Policy"] },
      "Compliance":         { de: "Compliance-Programme und Audit-Vorbereitung.", en: "Compliance programs and audit preparation.", courses: ["DSGVO Compliance", "IT-Sicherheit Grundlagen", "ACME Datenschutz-Richtlinie", "ACME Cloud-Compliance"] },
      "Audit":              { de: "Interne Revision und Kontrollprüfungen.", en: "Internal audit and controls testing.", courses: ["DSGVO Compliance", "Phishing Awareness Pro", "Incident Reporting", "ACME Forensik-Handbuch"] },
      "Research":           { de: "Forschung mit Fokus auf KI-Sicherheit.", en: "Research with focus on AI safety.", courses: ["KI-Betrug & Deepfakes", "IT-Sicherheit Grundlagen", "Social Media Awareness", "E-Mail-Verschlüsselung"] },
      "Quality Assurance":  { de: "Qualitätssicherung und Testautomatisierung.", en: "Quality assurance and test automation.", courses: ["IT-Sicherheit Grundlagen", "Passwort-Sicherheit", "ACME Secure Coding Standards"] },
      "DevOps":             { de: "DevOps-Automatisierung und Pipeline-Security.", en: "DevOps automation and pipeline security.", courses: ["IT-Sicherheit Grundlagen", "Sicheres Home-Office", "Cloud-Grundlagen", "ACME Secure Coding Standards"] },
      "Risk Management":    { de: "Risikobewertung und Business-Continuity.", en: "Risk assessment and business continuity.", courses: ["DSGVO Compliance", "Social Engineering Abwehr", "Ransomware Basics", "Incident Reporting", "ACME Notfallplan"] },
      "Communications":     { de: "Unternehmenskommunikation und Krisenmanagement.", en: "Corporate communications and crisis management.", courses: ["Phishing Awareness Pro", "KI-Betrug & Deepfakes", "Social Media Awareness", "ACME Krisen-Kommunikation"] },
    };
    const result = { ...base };
    Object.keys(extras).forEach((name, i) => {
      const p = palette[(i + 3) % palette.length];
      const e = extras[name];
      result[name] = {
        active: i % 7 !== 6,
        gradient: p.gradient,
        tagColor: p.tagColor,
        accentColor: p.accentColor,
        description: { de: e.de, en: e.en },
        courses: e.courses,
      };
    });
    return result;
  })();
  const ADMIN_CUSTOM_COURSES = [];
  const READING_WPM = 200;
  function countWordsInHtml(html) {
    if (!html) return 0;
    const text = String(html).replace(/<[^>]*>/g, " ").replace(/&nbsp;/g, " ").replace(/\s+/g, " ").trim();
    if (!text) return 0;
    return text.split(" ").length;
  }
  function estimateLessonMinutes(lesson) {
    const chapters = (lesson && Array.isArray(lesson.chapters)) ? lesson.chapters : [];
    const totalWords = chapters.reduce((sum, ch) => sum + countWordsInHtml(ch && ch.content), 0);
    if (totalWords === 0) return 0;
    return Math.max(1, Math.ceil(totalWords / READING_WPM));
  }
  function getCourseDetail(courseName) {
    if (ADMIN_COURSE_DETAILS[courseName]) return ADMIN_COURSE_DETAILS[courseName];
    const custom = ADMIN_CUSTOM_COURSES.find((c) => c.name === courseName);
    if (!custom) return {};
    const lessons = custom.lessons || [];
    const totalMinutes = lessons.reduce((sum, l) => sum + estimateLessonMinutes(l), 0);
    const tags = Array.isArray(custom.tags) && custom.tags.length
      ? custom.tags
      : (custom.category ? [custom.category] : []);
    return {
      tags,
      color: custom.color || { bg: "rgba(148,163,184,0.15)", border: "rgba(148,163,184,0.4)", text: "#cbd5e1" },
      status: custom.status || "draft",
      lessons: lessons.length,
      duration: totalMinutes,
      description: custom.description,
    };
  }
  function getCourseTags(courseName, lang) {
    const safeLang = lang === "en" ? "en" : "de";
    const detail = getCourseDetail(courseName);
    const tags = Array.isArray(detail.tags) ? detail.tags : [];
    return tags.map((t) => (t && typeof t === "object" ? (t[safeLang] || t.de || "") : String(t || ""))).filter(Boolean);
  }
  function getAllCourseNames() {
    return [...ADMIN_DASHBOARD_COURSES, ...ADMIN_CUSTOM_COURSES.map((c) => c.name)];
  }
  function getUserEnrolledCourses(user) {
    if (!user || typeof user !== "object") return [];
    const teams = Array.isArray(user.teams) ? user.teams : [];
    const seen = new Set();
    const out = [];
    for (const entry of teams) {
      const teamName = entry && typeof entry === "object" ? entry.teamName : entry;
      const detail = teamName ? ADMIN_TEAM_DETAILS[teamName] : null;
      const courses = detail && Array.isArray(detail.courses) ? detail.courses : [];
      for (const course of courses) {
        if (!seen.has(course)) {
          seen.add(course);
          out.push(course);
        }
      }
    }
    return out;
  }
  const ADMIN_BASE_USERS = [
    {
      id: "u1",
      name: "Anna M.",
      email: "anna.m@acme.local",
      teams: [{ teamName: "Incident Response", role: "team_owner" }, { teamName: "Security Operations", role: "team_moderator" }],
      active: true,
      completedQuizzes: 18,
      certificates: ["IT-Sicherheit Grundlagen", "Phishing Awareness Pro", "Ransomware Basics", "ACME Notfallplan"],
      enrolledCourses: ["IT-Sicherheit Grundlagen", "Phishing Awareness Pro", "DSGVO Compliance", "Ransomware Basics", "Incident Reporting", "ACME Notfallplan", "ACME Forensik-Handbuch", "Social Engineering Abwehr", "KI-Betrug & Deepfakes", "Sicheres Home-Office", "ACME Access Control Policy", "ACME MFA-Leitfaden"],
      courseCompletions: [
        { course: "IT-Sicherheit Grundlagen", completedAt: "2026-03-15T14:00:00Z", score: 92, certificate: true },
        { course: "Phishing Awareness Pro", completedAt: "2026-04-01T10:30:00Z", score: 88, certificate: true },
        { course: "Ransomware Basics", completedAt: "2026-04-05T09:30:00Z", score: 81, certificate: true },
        { course: "ACME Notfallplan", completedAt: "2026-04-08T13:15:00Z", score: 94, certificate: true },
      ],
      lastLogin: "2026-04-09T09:14:00Z",
    },
    {
      id: "u2",
      name: "Ben K.",
      email: "ben.k@acme.local",
      teams: [{ teamName: "Incident Response", role: "team_moderator" }],
      active: true,
      completedQuizzes: 11,
      certificates: ["Sicheres Home-Office", "Incident Reporting"],
      enrolledCourses: ["IT-Sicherheit Grundlagen", "Phishing Awareness Pro", "DSGVO Compliance", "Ransomware Basics", "Incident Reporting", "ACME Notfallplan", "ACME Forensik-Handbuch"],
      courseCompletions: [
        { course: "Sicheres Home-Office", completedAt: "2026-03-28T09:15:00Z", score: 76, certificate: true },
        { course: "Incident Reporting", completedAt: "2026-04-02T11:45:00Z", score: 89, certificate: true },
        { course: "Ransomware Basics", completedAt: "2026-04-10T14:00:00Z", score: 68, certificate: false },
      ],
      lastLogin: "2026-04-09T08:52:00Z",
    },
    {
      id: "u3",
      name: "Chris R.",
      email: "chris.r@acme.local",
      teams: [{ teamName: "Marketing", role: "user" }],
      active: true,
      completedQuizzes: 2,
      certificates: [],
      enrolledCourses: ["IT-Sicherheit Grundlagen", "Phishing Awareness Pro", "DSGVO Compliance", "Ransomware Basics", "Incident Reporting", "ACME Notfallplan", "ACME Forensik-Handbuch"],
      courseCompletions: [],
      lastLogin: "2026-04-08T16:30:00Z",
    },
    {
      id: "u4",
      name: "Daria S.",
      email: "daria.s@acme.local",
      teams: [{ teamName: "Security Operations", role: "team_moderator" }],
      active: false,
      completedQuizzes: 6,
      certificates: ["DSGVO Compliance", "ACME MFA-Leitfaden"],
      enrolledCourses: ["Social Engineering Abwehr", "KI-Betrug & Deepfakes", "Sicheres Home-Office", "Ransomware Basics", "ACME Access Control Policy", "ACME MFA-Leitfaden"],
      courseCompletions: [
        { course: "DSGVO Compliance", completedAt: "2026-02-20T11:00:00Z", score: 85, certificate: true },
        { course: "Sicheres Home-Office", completedAt: "2026-03-05T16:00:00Z", score: 64, certificate: false },
        { course: "ACME MFA-Leitfaden", completedAt: "2026-03-18T10:30:00Z", score: 77, certificate: true },
      ],
      lastLogin: "2026-03-26T11:00:00Z",
    },
    {
      id: "u5",
      name: "Emre T.",
      email: "emre.t@acme.local",
      teams: [{ teamName: "Security Operations", role: "team_owner" }, { teamName: "Marketing", role: "user" }],
      active: true,
      completedQuizzes: 22,
      certificates: ["IT-Sicherheit Grundlagen", "Phishing Awareness Pro", "KI-Betrug & Deepfakes", "ACME Access Control Policy", "Social Media Awareness"],
      enrolledCourses: ["Social Engineering Abwehr", "KI-Betrug & Deepfakes", "Sicheres Home-Office", "Ransomware Basics", "ACME Access Control Policy", "ACME MFA-Leitfaden", "Phishing Awareness Pro", "DSGVO Compliance", "Social Media Awareness"],
      courseCompletions: [
        { course: "IT-Sicherheit Grundlagen", completedAt: "2026-02-10T13:00:00Z", score: 95, certificate: true },
        { course: "Phishing Awareness Pro", completedAt: "2026-03-12T15:30:00Z", score: 91, certificate: true },
        { course: "KI-Betrug & Deepfakes", completedAt: "2026-04-05T11:00:00Z", score: 87, certificate: true },
        { course: "ACME Access Control Policy", completedAt: "2026-04-07T09:20:00Z", score: 83, certificate: true },
        { course: "Social Media Awareness", completedAt: "2026-04-09T16:00:00Z", score: 90, certificate: true },
      ],
      lastLogin: "2026-04-09T10:01:00Z",
    },
    {
      id: "u6",
      name: "Fatima L.",
      email: "fatima.l@acme.local",
      teams: [{ teamName: "Marketing", role: "user" }],
      active: true,
      completedQuizzes: 6,
      certificates: ["DSGVO Compliance"],
      enrolledCourses: ["DSGVO Compliance", "Phishing Awareness Pro"],
      courseCompletions: [
        { course: "DSGVO Compliance", completedAt: "2026-03-30T12:10:00Z", score: 82, certificate: true },
      ],
      lastLogin: "2026-04-10T08:24:00Z",
    },
    {
      id: "u7",
      name: "Gina P.",
      email: "gina.p@acme.local",
      teams: [{ teamName: "Security Operations", role: "team_moderator" }],
      active: true,
      completedQuizzes: 9,
      certificates: ["Social Engineering Abwehr"],
      enrolledCourses: ["Social Engineering Abwehr", "KI-Betrug & Deepfakes"],
      courseCompletions: [
        { course: "Social Engineering Abwehr", completedAt: "2026-03-22T09:45:00Z", score: 90, certificate: true },
      ],
      lastLogin: "2026-04-10T11:40:00Z",
    },
    {
      id: "u8",
      name: "Hannes W.",
      email: "hannes.w@acme.local",
      teams: [{ teamName: "Incident Response", role: "user" }],
      active: true,
      completedQuizzes: 3,
      certificates: [],
      enrolledCourses: ["IT-Sicherheit Grundlagen"],
      courseCompletions: [],
      lastLogin: "2026-04-08T07:10:00Z",
    },
    {
      id: "u9",
      name: "Isabel N.",
      email: "isabel.n@acme.local",
      teams: [{ teamName: "Marketing", role: "user" }],
      active: false,
      completedQuizzes: 2,
      certificates: [],
      enrolledCourses: ["Phishing Awareness Pro"],
      courseCompletions: [],
      lastLogin: "2026-03-29T17:05:00Z",
    },
    {
      id: "u10",
      name: "Jonas E.",
      email: "jonas.e@acme.local",
      teams: [{ teamName: "Incident Response", role: "team_moderator" }],
      active: true,
      completedQuizzes: 11,
      certificates: ["IT-Sicherheit Grundlagen", "DSGVO Compliance"],
      enrolledCourses: ["IT-Sicherheit Grundlagen", "DSGVO Compliance", "Sicheres Home-Office"],
      courseCompletions: [
        { course: "IT-Sicherheit Grundlagen", completedAt: "2026-02-26T13:50:00Z", score: 89, certificate: true },
        { course: "DSGVO Compliance", completedAt: "2026-03-17T15:40:00Z", score: 84, certificate: true },
      ],
      lastLogin: "2026-04-09T14:35:00Z",
    },
    {
      id: "u11",
      name: "Klara B.",
      email: "klara.b@acme.local",
      teams: [{ teamName: "Security Operations", role: "user" }],
      active: true,
      completedQuizzes: 5,
      certificates: ["Sicheres Home-Office"],
      enrolledCourses: ["Sicheres Home-Office", "Social Engineering Abwehr"],
      courseCompletions: [
        { course: "Sicheres Home-Office", completedAt: "2026-03-21T10:00:00Z", score: 78, certificate: true },
      ],
      lastLogin: "2026-04-07T12:20:00Z",
    },
    {
      id: "u12",
      name: "Lukas F.",
      email: "lukas.f@acme.local",
      teams: [{ teamName: "Marketing", role: "user" }],
      active: true,
      completedQuizzes: 4,
      certificates: [],
      enrolledCourses: ["Phishing Awareness Pro", "DSGVO Compliance"],
      courseCompletions: [],
      lastLogin: "2026-04-09T06:55:00Z",
    },
    {
      id: "u13",
      name: "Mina D.",
      email: "mina.d@acme.local",
      teams: [{ teamName: "Incident Response", role: "team_owner" }],
      active: true,
      completedQuizzes: 13,
      certificates: ["IT-Sicherheit Grundlagen", "Phishing Awareness Pro", "DSGVO Compliance"],
      enrolledCourses: ["IT-Sicherheit Grundlagen", "Phishing Awareness Pro", "DSGVO Compliance", "KI-Betrug & Deepfakes"],
      courseCompletions: [
        { course: "IT-Sicherheit Grundlagen", completedAt: "2026-02-15T09:00:00Z", score: 94, certificate: true },
        { course: "Phishing Awareness Pro", completedAt: "2026-03-01T11:15:00Z", score: 92, certificate: true },
        { course: "DSGVO Compliance", completedAt: "2026-03-19T16:05:00Z", score: 88, certificate: true },
      ],
      lastLogin: "2026-04-10T09:18:00Z",
    },
    {
      id: "u14",
      name: "Noah C.",
      email: "noah.c@acme.local",
      teams: [{ teamName: "Security Operations", role: "user" }],
      active: true,
      completedQuizzes: 1,
      certificates: [],
      enrolledCourses: ["KI-Betrug & Deepfakes"],
      courseCompletions: [],
      lastLogin: "2026-04-06T18:42:00Z",
    },
    {
      id: "u15",
      name: "Olivia R.",
      email: "olivia.r@acme.local",
      teams: [{ teamName: "Marketing", role: "team_moderator" }],
      active: true,
      completedQuizzes: 8,
      certificates: ["Phishing Awareness Pro"],
      enrolledCourses: ["Phishing Awareness Pro", "DSGVO Compliance", "Social Engineering Abwehr"],
      courseCompletions: [
        { course: "Phishing Awareness Pro", completedAt: "2026-03-14T08:25:00Z", score: 86, certificate: true },
      ],
      lastLogin: "2026-04-10T10:05:00Z",
    },
  ];
  const ADMIN_BASE_ASSIGNMENTS = Object.freeze([
    { id: "a1", userId: "u5", courseName: "IT-Sicherheit Grundlagen", dueDate: "2026-04-14", progress: 100, status: "completed" },
    { id: "a2", userId: "u1", courseName: "IT-Sicherheit Grundlagen", dueDate: "2026-04-14", progress: 80, status: "in_progress" },
    { id: "a3", userId: "u2", courseName: "DSGVO Compliance", dueDate: "2026-04-30", progress: 100, status: "completed" },
    { id: "a4", userId: "u4", courseName: "DSGVO Compliance", dueDate: "2026-04-30", progress: 40, status: "paused" },
    { id: "a5", userId: "u3", courseName: "IT-Sicherheit Grundlagen", dueDate: "2026-04-01", progress: 0, status: "overdue" },
    { id: "a6", userId: "u5", courseName: "DSGVO Compliance", dueDate: "2026-04-30", progress: 70, status: "in_progress" },
    { id: "a7", userId: "u1", courseName: "DSGVO Compliance", dueDate: "2026-04-30", progress: 55, status: "in_progress" },
    // New courses — Anna M. (u1) on IR stack
    { id: "a8", userId: "u1", courseName: "Ransomware Basics", dueDate: "2026-04-20", progress: 100, status: "completed" },
    { id: "a9", userId: "u1", courseName: "Incident Reporting", dueDate: "2026-05-10", progress: 60, status: "in_progress" },
    { id: "a10", userId: "u1", courseName: "ACME Notfallplan", dueDate: "2026-04-25", progress: 100, status: "completed" },
    { id: "a11", userId: "u1", courseName: "ACME Forensik-Handbuch", dueDate: "2026-05-15", progress: 35, status: "in_progress" },
    { id: "a12", userId: "u1", courseName: "ACME Access Control Policy", dueDate: "2026-05-20", progress: 25, status: "paused" },
    // Ben K. (u2)
    { id: "a13", userId: "u2", courseName: "Ransomware Basics", dueDate: "2026-04-18", progress: 100, status: "completed" },
    { id: "a14", userId: "u2", courseName: "Incident Reporting", dueDate: "2026-04-22", progress: 100, status: "completed" },
    { id: "a15", userId: "u2", courseName: "ACME Notfallplan", dueDate: "2026-04-30", progress: 45, status: "in_progress" },
    { id: "a16", userId: "u2", courseName: "ACME Forensik-Handbuch", dueDate: "2026-05-05", progress: 10, status: "paused" },
    { id: "a17", userId: "u2", courseName: "Phishing Awareness Pro", dueDate: "2026-04-15", progress: 85, status: "in_progress" },
    // Chris R. (u3) — mostly overdue
    { id: "a18", userId: "u3", courseName: "Phishing Awareness Pro", dueDate: "2026-03-30", progress: 0, status: "overdue" },
    { id: "a19", userId: "u3", courseName: "Ransomware Basics", dueDate: "2026-04-10", progress: 15, status: "overdue" },
    { id: "a20", userId: "u3", courseName: "Incident Reporting", dueDate: "2026-05-01", progress: 30, status: "in_progress" },
    { id: "a21", userId: "u3", courseName: "ACME Notfallplan", dueDate: "2026-05-10", progress: 0, status: "paused" },
    // Daria S. (u4)
    { id: "a22", userId: "u4", courseName: "Sicheres Home-Office", dueDate: "2026-03-15", progress: 100, status: "completed" },
    { id: "a23", userId: "u4", courseName: "ACME MFA-Leitfaden", dueDate: "2026-03-25", progress: 100, status: "completed" },
    { id: "a24", userId: "u4", courseName: "ACME Access Control Policy", dueDate: "2026-04-30", progress: 50, status: "paused" },
    { id: "a25", userId: "u4", courseName: "Ransomware Basics", dueDate: "2026-04-10", progress: 0, status: "overdue" },
    { id: "a26", userId: "u4", courseName: "KI-Betrug & Deepfakes", dueDate: "2026-05-01", progress: 20, status: "paused" },
    // Emre T. (u5)
    { id: "a27", userId: "u5", courseName: "Social Media Awareness", dueDate: "2026-04-10", progress: 100, status: "completed" },
    { id: "a28", userId: "u5", courseName: "ACME Access Control Policy", dueDate: "2026-04-10", progress: 100, status: "completed" },
    { id: "a29", userId: "u5", courseName: "ACME MFA-Leitfaden", dueDate: "2026-04-25", progress: 75, status: "in_progress" },
    { id: "a30", userId: "u5", courseName: "Ransomware Basics", dueDate: "2026-05-01", progress: 65, status: "in_progress" },
    { id: "a31", userId: "u5", courseName: "Social Engineering Abwehr", dueDate: "2026-04-20", progress: 90, status: "in_progress" },
    { id: "a32", userId: "u5", courseName: "Sicheres Home-Office", dueDate: "2026-04-30", progress: 40, status: "paused" },
  ]);

  const { ADMIN_DASHBOARD_USERS, ADMIN_COURSE_ASSIGNMENTS } = (() => {
    const seed = 1337;
    let s = seed;
    const rand = () => {
      s = (s * 1664525 + 1013904223) >>> 0;
      return s / 0x100000000;
    };
    const randInt = (min, max) => Math.floor(rand() * (max - min + 1)) + min;
    const pick = (arr) => arr[Math.floor(rand() * arr.length)];

    const firstNames = ["Alex", "Bianca", "Cem", "Diana", "Erik", "Fatima", "Georg", "Hannah", "Ivan", "Jana", "Karl", "Lena", "Marco", "Nina", "Omar", "Paula", "Quirin", "Rita", "Stefan", "Tina", "Ulf", "Vera", "Willi", "Xenia", "Yannick", "Zoe", "Ahmed", "Bea", "Clara", "David", "Eva", "Felix", "Greta", "Henri", "Ines", "Jonas", "Katja", "Leon", "Mia", "Noah", "Olga", "Piet", "Ronja", "Saskia", "Tom", "Ulrich", "Viktor", "Wanda", "Xaver", "Yusuf"];
    const lastInitials = ["A.", "B.", "C.", "D.", "E.", "F.", "G.", "H.", "I.", "J.", "K.", "L.", "M.", "N.", "O.", "P.", "R.", "S.", "T.", "V.", "W.", "Z."];
    const teams = ADMIN_AVAILABLE_TEAMS;
    const roles = ["user", "user", "user", "user", "team_moderator", "team_owner"];

    const users = [...ADMIN_BASE_USERS];
    const assignments = [...ADMIN_BASE_ASSIGNMENTS];
    let aId = assignments.length + 1;

    const pad = (n) => String(n).padStart(2, "0");
    const randomIso = (fromDaysAgo, toDaysAgo) => {
      const now = Date.UTC(2026, 3, 15);
      const days = randInt(toDaysAgo, fromDaysAgo);
      const ms = now - days * 86400000 - randInt(0, 86399) * 1000;
      const d = new Date(ms);
      return `${d.getUTCFullYear()}-${pad(d.getUTCMonth() + 1)}-${pad(d.getUTCDate())}T${pad(d.getUTCHours())}:${pad(d.getUTCMinutes())}:00Z`;
    };
    const randomDueDate = () => {
      const now = Date.UTC(2026, 3, 15);
      const offset = randInt(-20, 90);
      const d = new Date(now + offset * 86400000);
      return `${d.getUTCFullYear()}-${pad(d.getUTCMonth() + 1)}-${pad(d.getUTCDate())}`;
    };

    const emailSeen = new Set(users.map((u) => u.email));
    for (let i = 0; i < 100; i++) {
      const uid = `u${6 + i}`;
      const first = pick(firstNames);
      const last = pick(lastInitials);
      const name = `${first} ${last}`;
      let email = `${first.toLowerCase()}.${last.replace(".", "").toLowerCase() || "x"}${i}@acme.local`;
      while (emailSeen.has(email)) email = `${first.toLowerCase()}.${last.replace(".", "").toLowerCase() || "x"}${i}_${randInt(10, 99)}@acme.local`;
      emailSeen.add(email);

      const teamCount = rand() < 0.2 ? 2 : 1;
      const userTeams = [];
      const usedTeams = new Set();
      for (let t = 0; t < teamCount; t++) {
        let teamName = pick(teams);
        let guard = 0;
        while (usedTeams.has(teamName) && guard++ < 10) teamName = pick(teams);
        usedTeams.add(teamName);
        userTeams.push({ teamName, role: pick(roles) });
      }

      const roll = rand();
      const isInvited = roll < 0.12;
      const isActive = !isInvited && roll < 0.82;
      const enrolledSet = new Set();
      userTeams.forEach((t) => {
        const tc = ADMIN_TEAM_DETAILS[t.teamName]?.courses || [];
        tc.forEach((c) => enrolledSet.add(c));
      });
      const enrolledCourses = [...enrolledSet];

      const courseCompletions = [];
      const certificates = [];
      let completedQuizzes = 0;
      if (isActive) {
        enrolledCourses.forEach((course) => {
          const r = rand();
          if (r < 0.45) {
            const score = randInt(60, 98);
            const completedAt = randomIso(90, 1);
            const cert = score >= 70;
            courseCompletions.push({ course, completedAt, score, certificate: cert });
            if (cert) certificates.push(course);
            completedQuizzes += randInt(1, 3);
          } else if (r < 0.7) {
            completedQuizzes += randInt(0, 2);
          }
        });
      }

      const lastLogin = isInvited ? "" : randomIso(isActive ? 14 : 120, isActive ? 0 : 30);
      const user = {
        id: uid,
        name,
        email,
        teams: userTeams,
        active: isActive || isInvited,
        status: isInvited ? "invited" : undefined,
        completedQuizzes,
        certificates,
        enrolledCourses,
        courseCompletions,
        lastLogin,
      };
      users.push(user);

      enrolledCourses.forEach((course) => {
        if (rand() < 0.55) {
          const completed = courseCompletions.find((c) => c.course === course);
          let progress, status;
          if (completed) {
            progress = 100;
            status = "completed";
          } else {
            progress = randInt(0, 95);
            const r2 = rand();
            if (progress === 0 && r2 < 0.4) status = "overdue";
            else if (r2 < 0.2) status = "paused";
            else status = "in_progress";
          }
          assignments.push({
            id: `a${aId++}`,
            userId: uid,
            courseName: course,
            dueDate: randomDueDate(),
            progress,
            status,
          });
        }
      });
    }

    return {
      ADMIN_DASHBOARD_USERS: Object.freeze(users),
      ADMIN_COURSE_ASSIGNMENTS: Object.freeze(assignments),
    };
  })();
  function ensureTeamOwner(teamName) {
    const detail = ADMIN_TEAM_DETAILS[teamName];
    if (!detail) return null;
    const currentOwner = detail.ownerId
      ? ADMIN_DASHBOARD_USERS.find((u) => u.id === detail.ownerId)
      : null;
    const currentEntry = currentOwner
      ? (currentOwner.teams || []).find((t) => t.teamName === teamName)
      : null;
    if (currentOwner && currentEntry && currentEntry.role === "team_owner") {
      return currentOwner;
    }
    let leader = ADMIN_DASHBOARD_USERS.find((u) =>
      (u.teams || []).some((t) => t.teamName === teamName && t.role === "team_owner")
    );
    if (!leader) {
      const firstMember = ADMIN_DASHBOARD_USERS.find((u) =>
        (u.teams || []).some((t) => t.teamName === teamName)
      );
      if (firstMember) {
        const entry = firstMember.teams.find((t) => t.teamName === teamName);
        if (entry) entry.role = "team_owner";
        leader = firstMember;
      }
    }
    detail.ownerId = leader ? leader.id : null;
    return leader || null;
  }
  ADMIN_AVAILABLE_TEAMS.forEach((teamName) => { ensureTeamOwner(teamName); });
  function renameTeam(oldName, newName) {
    const trimmed = String(newName || "").trim();
    if (!trimmed) return { ok: false, reason: "empty" };
    if (trimmed === oldName) return { ok: true };
    if (ADMIN_AVAILABLE_TEAMS.includes(trimmed)) return { ok: false, reason: "conflict" };
    const idx = ADMIN_AVAILABLE_TEAMS.indexOf(oldName);
    if (idx === -1) return { ok: false, reason: "missing" };
    ADMIN_AVAILABLE_TEAMS[idx] = trimmed;
    if (ADMIN_TEAM_DETAILS[oldName]) {
      ADMIN_TEAM_DETAILS[trimmed] = ADMIN_TEAM_DETAILS[oldName];
      delete ADMIN_TEAM_DETAILS[oldName];
    }
    ADMIN_DASHBOARD_USERS.forEach((u) => {
      if (!Array.isArray(u.teams)) return;
      u.teams = u.teams.map((t) =>
        t.teamName === oldName ? { ...t, teamName: trimmed } : t
      );
    });
    return { ok: true };
  }
  function deleteTeamFromData(name) {
    const idx = ADMIN_AVAILABLE_TEAMS.indexOf(name);
    if (idx !== -1) ADMIN_AVAILABLE_TEAMS.splice(idx, 1);
    if (ADMIN_TEAM_DETAILS[name]) delete ADMIN_TEAM_DETAILS[name];
    ADMIN_DASHBOARD_USERS.forEach((u) => {
      if (!Array.isArray(u.teams)) return;
      u.teams = u.teams.filter((t) => t.teamName !== name);
    });
  }
  const ADMIN_DASHBOARD_ACTIVITY = Object.freeze([
    { color: "#00ff88", text: { de: "Emre T. hat IT Security abgeschlossen", en: "Emre T. completed IT Security" }, time: { de: "vor 12 min", en: "12 min ago" } },
    { color: "#818cf8", text: { de: "Ben K. wurde Team Moderator zugewiesen", en: "Ben K. assigned as Team Moderator" }, time: { de: "vor 2 Std.", en: "2 hrs ago" } },
    { color: "#fbbf24", text: { de: "Daria S. seit 14 Tagen inaktiv", en: "Daria S. inactive for 14 days" }, time: { de: "heute", en: "today" } },
    { color: "#818cf8", text: { de: "Kurs DSGVO Basics veröffentlicht", en: "Course GDPR Basics published" }, time: { de: "gestern", en: "yesterday" } },
  ]);
  const ADMIN_REQUEST_TYPE_LABELS = Object.freeze({
    de: { course_access: "Kurs-Zugang", reactivation: "Reaktivierung", new_user: "Neuer Nutzer", role_change: "Rollen-Änderung", course_publish: "Kurs-Erstellung" },
    en: { course_access: "Course access", reactivation: "Reactivation", new_user: "New user", role_change: "Role change", course_publish: "Course publish" },
  });
  const ADMIN_REQUEST_TYPE_COLORS = Object.freeze({
    course_access: { bg: "rgba(99,102,241,0.2)", border: "rgba(99,102,241,0.4)", text: "#a5b4fc" },
    reactivation: { bg: "rgba(239,68,68,0.2)", border: "rgba(239,68,68,0.4)", text: "#fca5a5" },
    new_user: { bg: "rgba(34,197,94,0.2)", border: "rgba(34,197,94,0.4)", text: "#86efac" },
    role_change: { bg: "rgba(168,85,247,0.2)", border: "rgba(168,85,247,0.4)", text: "#d8b4fe" },
    course_publish: { bg: "rgba(14,165,233,0.2)", border: "rgba(14,165,233,0.4)", text: "#7dd3fc" },
  });
  const ADMIN_SEED_ENROLLMENT_REQUESTS = Object.freeze([
    // Pending
    { id: "req-seed-1", userId: "u3", userName: "Chris R.", email: "chris.r@acme.local", type: "course_access", courseName: "IT-Sicherheit Grundlagen", courseSlug: "it-sicherheit-grundlagen", description: { de: "Möchte Zugang zu \u201EIT Security Fundamentals\u201C erhalten.", en: "Requesting access to \"IT Security Fundamentals\"." }, status: "pending", createdAt: "2026-04-08T09:15:00Z", resolvedAt: "" },
    { id: "req-seed-2", userId: "u4", userName: "Daria S.", email: "daria.s@acme.local", type: "reactivation", courseName: "", courseSlug: "", description: { de: "Account wurde deaktiviert. Bitte um Reaktivierung nach Rückkehr aus dem Urlaub.", en: "Account was deactivated. Requesting reactivation after returning from leave." }, status: "pending", createdAt: "2026-04-07T14:30:00Z", resolvedAt: "" },
    { id: "req-seed-3", userId: "u2", userName: "Frank B.", email: "frank.b@acme.local", type: "new_user", courseName: "", courseSlug: "", description: { de: "Einladungsanfrage für frank.b@acme.local — Rolle: User, Team: Marketing.", en: "Invitation request for frank.b@acme.local — Role: User, Team: Marketing." }, status: "pending", createdAt: "2026-04-06T11:00:00Z", resolvedAt: "" },
    { id: "req-seed-4", userId: "u5", userName: "Emre T.", email: "emre.t@acme.local", type: "course_access", courseName: "DSGVO Compliance", courseSlug: "dsgvo-compliance", description: { de: "Zugang zu DSGVO Compliance angefragt.", en: "Requesting access to GDPR Compliance." }, status: "pending", createdAt: "2026-04-05T16:45:00Z", resolvedAt: "" },
    { id: "req-seed-5", userId: "u1", userName: "Anna M.", email: "anna.m@acme.local", type: "course_access", courseName: "KI-Betrug & Deepfakes", courseSlug: "ki-betrug-deepfakes", description: { de: "Zugang zu KI-Betrug & Deepfakes angefragt.", en: "Requesting access to AI Fraud & Deepfakes." }, status: "pending", createdAt: "2026-04-04T10:20:00Z", resolvedAt: "" },
    { id: "req-seed-6", userId: "u3", userName: "Chris R.", email: "chris.r@acme.local", type: "course_access", courseName: "Sicheres Home-Office", courseSlug: "sicheres-home-office", description: { de: "Zugang zu Sicheres Home-Office angefragt.", en: "Requesting access to Secure Home Office." }, status: "pending", createdAt: "2026-04-03T13:00:00Z", resolvedAt: "" },
    // Resolved
    { id: "req-seed-7", userId: "u2", userName: "Ben K.", email: "ben.k@acme.local", type: "role_change", courseName: "", courseSlug: "", description: { de: "Hochstufung zu Team Moderator", en: "Promotion to Team Moderator" }, status: "approved", createdAt: "2026-04-06T08:00:00Z", resolvedAt: "2026-04-07T10:30:00Z" },
    { id: "req-seed-8", userId: "u1", userName: "Anna M.", email: "anna.m@acme.local", type: "course_publish", courseName: "DSGVO Basics", courseSlug: "", description: { de: "DSGVO Basics veröffentlichen", en: "Publish GDPR Basics" }, status: "approved", createdAt: "2026-04-04T09:00:00Z", resolvedAt: "2026-04-05T14:00:00Z" },
    { id: "req-seed-9", userId: "u3", userName: "Chris R.", email: "chris.r@acme.local", type: "course_access", courseName: "Phishing Awareness", courseSlug: "phishing-awareness-pro", description: { de: "Phishing Awareness (Entwurf)", en: "Phishing Awareness (Draft)" }, status: "rejected", createdAt: "2026-04-03T11:00:00Z", resolvedAt: "2026-04-04T09:15:00Z" },
    { id: "req-seed-10", userId: "u5", userName: "Emre T.", email: "emre.t@acme.local", type: "course_access", courseName: "Social Engineering Abwehr", courseSlug: "social-engineering-abwehr", description: { de: "Zugang zu Social Engineering Abwehr", en: "Access to Social Engineering Defense" }, status: "approved", createdAt: "2026-04-02T10:00:00Z", resolvedAt: "2026-04-03T08:00:00Z" },
    { id: "req-seed-11", userId: "u4", userName: "Daria S.", email: "daria.s@acme.local", type: "reactivation", courseName: "", courseSlug: "", description: { de: "Account-Reaktivierung nach Sperrung", en: "Account reactivation after suspension" }, status: "approved", createdAt: "2026-04-01T14:00:00Z", resolvedAt: "2026-04-02T11:00:00Z" },
  ]);
  // "yes" = ✓ allowed, "limited" = ◆ restricted, "no" = — no access
  const ADMIN_PERMISSIONS_MATRIX = Object.freeze({
    roles: ["owner", "team_owner", "team_moderator", "user"],
    roleLabels: { de: { owner: "Owner", team_owner: "Team Owner", team_moderator: "Team Moderator", user: "Nutzer" }, en: { owner: "Owner", team_owner: "Team Owner", team_moderator: "Team Moderator", user: "User" } },
    permissions: [
      { key: "manage_users",        label: { de: "Nutzer verwalten", en: "Manage users" },               access: { owner: "yes", team_owner: "no", team_moderator: "no", user: "no" } },
      { key: "manage_teams",        label: { de: "Teams verwalten", en: "Manage teams" },                 access: { owner: "yes", team_owner: "limited", team_moderator: "no", user: "no" } },
      { key: "manage_roles",        label: { de: "Rollen verwalten", en: "Manage roles" },                access: { owner: "yes", team_owner: "limited", team_moderator: "no", user: "no" } },
      { key: "create_courses",      label: { de: "Kurse erstellen", en: "Create courses" },               access: { owner: "yes", team_owner: "yes", team_moderator: "no", user: "no" } },
      { key: "assign_courses",      label: { de: "Kurse zuweisen", en: "Assign courses" },                access: { owner: "yes", team_owner: "yes", team_moderator: "limited", user: "no" } },
      { key: "take_quizzes",        label: { de: "Quizzes absolvieren", en: "Take quizzes" },             access: { owner: "yes", team_owner: "yes", team_moderator: "yes", user: "yes" } },
      { key: "view_reports",        label: { de: "Berichte einsehen", en: "View reports" },               access: { owner: "yes", team_owner: "limited", team_moderator: "no", user: "no" } },
      { key: "submit_requests",     label: { de: "Anfragen stellen", en: "Submit requests" },             access: { owner: "yes", team_owner: "yes", team_moderator: "yes", user: "yes" } },
      { key: "approve_requests",    label: { de: "Anfragen genehmigen", en: "Approve requests" },         access: { owner: "yes", team_owner: "limited", team_moderator: "no", user: "no" } },
      { key: "platform_settings",   label: { de: "Plattformeinstellungen", en: "Platform settings" },     access: { owner: "yes", team_owner: "no", team_moderator: "no", user: "no" } },
    ],
    limitedNote: {
      de: "Eingeschr\u00E4nkt: Team Leaders k\u00F6nnen nur ihr eigenes Team verwalten und Rollen innerhalb ihres Teams zuweisen. Moderatoren k\u00F6nnen nur Kurse ihres eigenen Teams zuweisen.",
      en: "Restricted: Team Leaders can only manage their own team and assign roles within their team scope. Moderators can only assign courses within their own team.",
    },
  });
  const ADMIN_KPI_TRENDS = Object.freeze({
    users: { de: "↑ 1 diese Woche", en: "↑ 1 this week" },
    quizzes: { de: "↑ 12 diese Woche", en: "↑ 12 this week" },
    certs: { de: "= unverändert", en: "= unchanged" },
    requests: { de: "Aktion erforderlich", en: "Action required" },
  });
  const PUBLIC_TEST_ACCOUNT = Object.freeze({
    name: TEST_ACCOUNT.name,
    email: TEST_ACCOUNT.email,
    avatarUrl: TEST_ACCOUNT.avatarUrl,
    avatarPreset: TEST_ACCOUNT.avatarPreset,
  });
  const PUBLIC_ADMIN_ACCOUNT = Object.freeze({
    name: ADMIN_ACCOUNT.name,
    email: ADMIN_ACCOUNT.email,
    avatarUrl: ADMIN_ACCOUNT.avatarUrl,
    avatarPreset: ADMIN_ACCOUNT.avatarPreset,
  });
  const PUBLIC_ORG_ACCOUNT = Object.freeze({
    name: ORG_ACCOUNT.name,
    email: ORG_ACCOUNT.email,
    avatarUrl: ORG_ACCOUNT.avatarUrl,
    avatarPreset: ORG_ACCOUNT.avatarPreset,
  });
  const AVATAR_PRESET_IDS = Object.freeze(["cyber-guardian", "pixel-owl", "retro-bot", "neon-fox"]);
  // Mockup-only fixture credential. Must not be used for production auth flows.
  const MOCK_TEAM_LOGIN_PASSWORD = "User1234!";
  const ADMIN_ENROLLMENT_REQUESTS_STORAGE_KEY = "snappinquiz-mock-enrollment-requests";
  const ADMIN_COURSE_SLUGS = Object.freeze({
    "IT-Sicherheit Grundlagen": "it-sicherheit-grundlagen",
    "Phishing Awareness Pro": "phishing-awareness-pro",
    "DSGVO Compliance": "dsgvo-compliance",
    "Social Engineering Abwehr": "social-engineering-abwehr",
    "Sicheres Home-Office": "sicheres-home-office",
    "KI-Betrug & Deepfakes": "ki-betrug-und-deepfakes",
    "Passwort-Sicherheit": "passwort-sicherheit",
    "Mobile Device Security": "mobile-device-security",
    "Cloud-Grundlagen": "cloud-grundlagen",
    "E-Mail-Verschlüsselung": "e-mail-verschluesselung",
    "Social Media Awareness": "social-media-awareness",
    "Secure Messaging": "secure-messaging",
    "USB & Peripheriegeräte": "usb-und-peripheriegeraete",
    "Reisesicherheit": "reisesicherheit",
    "Ransomware Basics": "ransomware-basics",
    "Incident Reporting": "incident-reporting",
    "ACME Notfallplan": "acme-notfallplan",
    "ACME Datenschutz-Richtlinie": "acme-datenschutz-richtlinie",
    "ACME Secure Coding Standards": "acme-secure-coding-standards",
    "ACME Access Control Policy": "acme-access-control-policy",
    "ACME Lieferanten-Onboarding": "acme-lieferanten-onboarding",
    "ACME Forensik-Handbuch": "acme-forensik-handbuch",
    "ACME Cloud-Compliance": "acme-cloud-compliance",
    "ACME MFA-Leitfaden": "acme-mfa-leitfaden",
    "ACME Physical Security": "acme-physical-security",
    "ACME Krisen-Kommunikation": "acme-krisen-kommunikation",
  });
  const LEVEL_UP_XP_REQUIREMENTS = Object.freeze([
    100, 140, 180, 220, 260, 300, 340, 380, 420, 460,
    500, 540, 580, 620, 660, 700, 740, 780, 820, 860,
    900, 940, 980, 1020, 1060, 1100, 1140, 1180, 1220,
  ]);
  const XP_REWARD_GROUPS = Object.freeze({
    de: Object.freeze([
      Object.freeze({
        id: "base",
        title: "Basisaktivitäten",
        items: Object.freeze([
          "Täglicher Check-in: +5 XP",
          "Daily Challenge gestartet: +5 XP",
          "Quiz gestartet: +5 XP",
        ]),
      }),
      Object.freeze({
        id: "answers",
        title: "Antwort-Belohnungen",
        items: Object.freeze([
          "Korrekte Antwort: +10 XP",
          "Bonus für richtige Antwort beim ersten Versuch: +5 XP",
          "Schwierige Frage korrekt beantwortet: +10 XP extra",
          "Phishing-/Simulation-/Trick-Szenario korrekt gelöst: +15 XP extra",
        ]),
      }),
      Object.freeze({
        id: "quality",
        title: "Qualitätsboni",
        items: Object.freeze([
          "80 %+ Quiz-Score: +20 XP",
          "100 % perfekter Score: +40 XP",
          "Keine Hinweise genutzt: +10 XP",
          "Unter Zielzeit abgeschlossen bei korrekter Leistung: +10 XP",
        ]),
      }),
      Object.freeze({
        id: "completion",
        title: "Abschluss-Belohnungen",
        items: Object.freeze([
          "Quiz abgeschlossen: +25 XP",
          "Lektion abgeschlossen: +40 XP",
          "Kurs abgeschlossen: +150 XP",
          "Zertifikat erhalten: +250 XP",
        ]),
      }),
      Object.freeze({
        id: "habit",
        title: "Rückkehr-/Gewohnheits-Belohnungen",
        items: Object.freeze([
          "3-Tage-Serie: +15 XP",
          "7-Tage-Serie: +40 XP",
          "14-Tage-Serie: +80 XP",
          "30-Tage-Serie: +150 XP",
        ]),
      }),
    ]),
    en: Object.freeze([
      Object.freeze({
        id: "base",
        title: "Base activity",
        items: Object.freeze([
          "Daily check-in: +5 XP",
          "Daily Challenge started: +5 XP",
          "Quiz started: +5 XP",
        ]),
      }),
      Object.freeze({
        id: "answers",
        title: "Answer rewards",
        items: Object.freeze([
          "Correct answer: +10 XP",
          "First-try correct bonus: +5 XP",
          "Difficult question answered correctly: +10 XP extra",
          "Correct phishing/simulation/trick scenario: +15 XP extra",
        ]),
      }),
      Object.freeze({
        id: "quality",
        title: "Quality bonuses",
        items: Object.freeze([
          "80%+ quiz score: +20 XP",
          "100% perfect score: +40 XP",
          "No hints used: +10 XP",
          "Completed under target time with correct performance: +10 XP",
        ]),
      }),
      Object.freeze({
        id: "completion",
        title: "Completion rewards",
        items: Object.freeze([
          "Quiz completed: +25 XP",
          "Lesson completed: +40 XP",
          "Course completed: +150 XP",
          "Certificate earned: +250 XP",
        ]),
      }),
      Object.freeze({
        id: "habit",
        title: "Return / habit rewards",
        items: Object.freeze([
          "3-day streak: +15 XP",
          "7-day streak: +40 XP",
          "14-day streak: +80 XP",
          "30-day streak: +150 XP",
        ]),
      }),
    ]),
  });
  const RANK_BRACKETS = Object.freeze([
    Object.freeze({ minLevel: 1, maxLevel: 4, title: "Rookie" }),
    Object.freeze({ minLevel: 5, maxLevel: 9, title: "Scout" }),
    Object.freeze({ minLevel: 10, maxLevel: 14, title: "Analyst" }),
    Object.freeze({ minLevel: 15, maxLevel: 19, title: "Defender" }),
    Object.freeze({ minLevel: 20, maxLevel: 24, title: "Specialist" }),
    Object.freeze({ minLevel: 25, maxLevel: 29, title: "Guardian" }),
    Object.freeze({ minLevel: 30, maxLevel: Number.POSITIVE_INFINITY, title: "Security Champion" }),
  ]);

  const ACCOUNT_STORAGE_KEY = "snappinquiz-mock-account";
  const SESSION_STORAGE_KEY = "snappinquiz-mock-session";
  const ROLE_STORAGE_KEY = "snappinquiz-mock-role";
  const USER_ID_STORAGE_KEY = "snappinquiz-mock-user-id";
  const ADMIN_USERS_STORAGE_KEY = "snappinquiz-mock-admin-users";
  const PROFILE_DASHBOARD_TEXT = Object.freeze({
    de: {
      "profile.kicker": "PROFILE MOCKUP",
      "status.prefix.error": "Fehler",
      "status.prefix.success": "Erfolg",
      "profile.title": "Mein Profil",
      "profile.subtitle": "Dein Lernfortschritt, Favoriten und Erfolge auf einen Blick.",
      "profile.levelLabel": "LEVEL",
      "profile.rankLabel": "RANG",
      "profile.totalXpLabel": "Gesamt-XP",
      "profile.progressToLevel": "{current} / {required} XP bis Level {next}",
      "profile.gamification.open": "XP & Ränge",
      "profile.gamification.title": "XP-, Level- und Rangsystem",
      "profile.gamification.currentRankPrefix": "Aktueller Rang:",
      "profile.gamification.close": "Schlieï¿½Yen",
      "profile.gamification.closeAria": "XP- und Ranginformationen schließen",
      "profile.gamification.howHeading": "So funktioniert XP",
      "profile.gamification.howBody": "XP erhältst du für echten Lernfortschritt und regelmäï¿½Yiges Training. Nicht jeder Klick gibt XP. Korrekte Antworten und abgeschlossene Lerneinheiten werden deutlich stärker belohnt als passive Interaktion.",
      "profile.gamification.rewardsHeading": "XP-Belohnungen",
      "profile.gamification.rewardsHint": "Sinnvolle Lernaktionen geben mehr XP als passive Aktionen. Reines Klicken zählt nicht als belohnbarer Fortschritt.",
      "profile.gamification.levelHeading": "Level-Fortschritt",
      "profile.gamification.levelBody": "Levels benötigen mit der Zeit mehr XP. Frühe Levels erreichst du schnell, spätere dauern länger. So bleibt Fortschritt motivierend, aber nicht trivial.",
      "profile.gamification.rankHeading": "Ränge",
      "profile.gamification.rankBody": "Ränge werden automatisch aus deinem Level berechnet und spiegeln langfristigen Lernfortschritt wider.",
      "profile.gamification.dialogHint": "Drücke Escape, um den Dialog zu schließen.",
      "profile.stats.completedCourses": "Abgeschlossene Kurse",
      "profile.stats.favorites": "Favoriten",
      "profile.stats.certificates": "Zertifikate",
      "profile.stats.streak": "Lernserie",
      "profile.stats.days": "Tage",
      "profile.overview": "Profil",
      "profile.readingHistory": "Leseverlauf",
      "profile.completedCourses": "Abgeschlossene Kurse",
      "profile.favoriteCourses": "Kurs-Favoriten",
      "profile.favoriteBlog": "Blog-Favoriten",
      "profile.certificates": "Erreichte Zertifikate",
      "profile.manage": "Profil verwalten (Mockup)",
      "profile.avatarSelection": "Profilbild auswählen",
      "profile.avatarPreset.default": "Initialen",
      "profile.avatarPreset.cyber-guardian": "Cyber Guardian",
      "profile.avatarPreset.pixel-owl": "Pixel Owl",
      "profile.avatarPreset.retro-bot": "Retro Bot",
      "profile.avatarPreset.neon-fox": "Neon Fox",
      "profile.name": "Name",
      "profile.email": "E-Mail",
      "profile.password": "Neues Passwort (optional)",
      "profile.passwordPlaceholder": "Mindestens 8 Zeichen",
      "profile.passwordConfirm": "Neues Passwort bestätigen",
      "profile.passwordConfirmPlaceholder": "Passwort wiederholen",
      "profile.save": "Profil speichern",
      "profile.list.empty": "Noch keine Einträge vorhanden.",
      "profile.history.dateSuffix": "gelesen",
      "profile.certificate.badge": "Zertifikat",
      "profile.card.openCourse": "Kurs starten",
      "profile.card.openArticle": "Artikel lesen",
      "profile.card.detailsUnavailable": "Details derzeit nicht verfügbar",
      "profile.cards.scrollPrevious": "Vorherige Karten",
      "profile.cards.scrollNext": "Nächste Karten",
      "profile.certificates.expand": "Zertifikat anzeigen",
      "profile.certificate.description": "Kurzbeschreibung",
      "profile.certificate.fromCourse": "Kurs",
      "profile.certificate.earnedOn": "Erreicht am",
      "profile.certificate.download": "Zertifikat herunterladen",
      "profile.avatarAlt": "Profilbild",
      "profile.avatarPreviewAlt": "Profilbild Vorschau",
      "profile.settingsHint": "Verwalte dein Profil und deine Sicherheitseinstellungen zentral im Menüpunkt Einstellungen.",
      "profile.settingsCta": "Zu den Einstellungen",
      "settings.kicker": "EINSTELLUNGEN",
      "settings.title": "Alle Einstellungen",
      "settings.subtitle": "Verwalte Profil, Sicherheit und Benachrichtigungen an einem Ort.",
      "settings.nav.profile": "Profil",
      "settings.nav.notifications": "Benachrichtigungen",
      "settings.nav.privacy": "Datenschutz",
      "settings.nav.account": "Account",
      "settings.status.saved": "Einstellungen gespeichert (Mockup).",
      "settings.notifications.title": "Benachrichtigungen",
      "settings.notifications.course": "Kurs-Erinnerungen",
      "settings.notifications.blog": "Blog-Updates",
      "settings.notifications.security": "Sicherheitswarnungen",
      "settings.privacy.title": "Datenschutz",
      "settings.privacy.public": "Öffentliche Sichtbarkeit des Profils",
      "settings.privacy.analytics": "Lernanalysen erlauben",
      "settings.privacy.export": "Meine Daten exportieren",
      "settings.account.title": "Account",
      "settings.account.sessions": "Sitzungen verwalten",
      "settings.account.delete": "Account löschen",
      "admin.tabs.overview": "Übersicht",
      "admin.tabs.users": "Nutzer & Rollen",
      "admin.tabs.enrollments": "Kurszuweisungen",
      "admin.tabs.notifications": "Anfragen",
      "admin.tabs.rolesPermissions": "Rollen & Berechtigungen",
      "admin.tabs.teams": "Teams",
      "admin.tabs.courseManagement": "Kursmanagement",
      "admin.tabs.blogManagement": "Blog",
      "admin.tabs.reportsCompliance": "Reports & Compliance",
      "admin.tabs.platformSettings": "Plattform / Organisation",
      "admin.scope.admin": "Admin Dashboard - Plattformweite Steuerung",
      "admin.scope.owner": "Owner Dashboard - Organisationsweite Steuerung",
      "admin.scope.team_owner": "Teamleader Dashboard - Teamweite Steuerung",
      "admin.scope.team_moderator": "Teamleader Dashboard - Teamweite Steuerung",
      "admin.kpi.activeUsers": "Aktive Nutzer",
      "admin.kpi.completedQuizzes": "Quiz abgeschlossen",
      "admin.kpi.certificatesIssued": "Zertifikate vergeben",
      "admin.table.title": "Team Fortschritt",
      "admin.table.employee": "Mitarbeiter",
      "admin.table.status": "Status",
      "admin.table.role": "Rolle",
      "admin.table.quiz": "Quiz",
      "admin.table.certificates": "Zertifikate",
      "admin.users.createTitle": "Nutzer anlegen",
      "admin.users.createSubmit": "Nutzer erstellen",
      "admin.users.roleTitle": "Rollenmanagement",
      "admin.users.delete": "Nutzer löschen",
      "admin.enrollments.title": "Kurszuweisungen",
      "admin.enrollments.openCourse": "Kurs öffnen",
      "admin.notifications.title": "Einschreibeanfragen",
      "admin.notifications.empty": "Keine offenen Anfragen.",
      "admin.notifications.pending": "Offen",
      "admin.notifications.approved": "Genehmigt",
      "admin.notifications.rejected": "Abgelehnt",
      "admin.notifications.approve": "Genehmigen",
      "admin.notifications.reject": "Ablehnen",
      "admin.notifications.requestedBy": "Angefragt von",
      "admin.notifications.forCourse": "Kurs",
      "admin.users.createRole": "Rolle",
      "admin.users.selectedRole": "Rolle des ausgewählten Nutzers",
      "admin.users.selectedUserLabel": "Ausgewählter Nutzer",
      "teamleader.users.selectedUserLabel": "Ausgewähltes Teammitglied",
      "admin.users.roleCapabilities": "Funktionen der Rolle",
      "admin.users.roleSave": "Rolle speichern",
      "admin.roles.title": "Rollen & Berechtigungen",
      "admin.roles.admin": "Admin: globale Nutzer-, Team- und Plattformverwaltung",
      "admin.roles.teamleader": "Teamleader: Teammitglieder betreuen und Teamkurse zuweisen",
      "admin.roles.user": "Learner: Kurse absolvieren und Zertifikate erhalten",
      "admin.teams.title": "Teams",
      "admin.teams.metaOne": "Teamleader: Anna M. . 3 Mitglieder",
      "admin.teams.metaTwo": "Teamleader: Emre T. . 2 Mitglieder",
      "admin.courses.title": "Globales Kursmanagement",
      "admin.courses.itemOne": "IT-Sicherheit Grundlagen . Pflichtkurs . Veröffentlicht",
      "admin.courses.itemTwo": "Phishing Awareness Pro . Optional . Veröffentlicht",
      "admin.courses.itemThree": "KI-Betrug & Deepfakes . Optional . Entwurf",
      "admin.reports.title": "Reports & Compliance",
      "admin.reports.completion": "Pflichtkurs-Quote: 82%",
      "admin.reports.overdue": "Überfällige Trainings: 9",
      "admin.reports.certificates": "Zertifikate gesamt: 24",
      "admin.platform.title": "Plattform- / Organisationseinstellungen",
      "admin.platform.itemOne": "Standardsprache: Deutsch",
      "admin.platform.itemTwo": "Branding: Standard-CI aktiv",
      "admin.platform.itemThree": "Benachrichtigungen: Compliance-Reminder wöchentlich",
      "teamleader.tabs.myTeam": "Mein Team",
      "teamleader.tabs.progressTracking": "Progress Tracking",
      "teamleader.tabs.certificates": "Zertifikate",
      "teamleader.tabs.teamSettings": "Team-Einstellungen",
      "teamleader.myTeam.title": "Mein Team",
      "teamleader.myTeam.member": "Mitarbeiter",
      "teamleader.myTeam.assigned": "Zugewiesene Kurse",
      "teamleader.myTeam.status": "Status",
      "teamleader.myTeam.lastActive": "Zuletzt aktiv",
      "teamleader.progress.title": "Team-Fortschritt",
      "teamleader.progress.itemOne": "Team Completion Rate: 76%",
      "teamleader.progress.itemTwo": "Overdue Members: 2",
      "teamleader.progress.itemThree": "At-Risk Members: 1",
      "teamleader.certificates.title": "Team-Zertifikate",
      "teamleader.certificates.itemOne": "Anna M. . IT-Sicherheit Grundlagen . 01/03/2026",
      "teamleader.certificates.itemTwo": "Emre T. . Phishing Awareness Pro . 27/02/2026",
      "teamleader.settings.title": "Team-Einstellungen",
      "teamleader.settings.itemOne": "Reminder-Frequenz: Woechentlich",
      "teamleader.settings.itemTwo": "Fälligkeitswarnung: 7 Tage vorher",
      "teamleader.settings.itemThree": "Teamansicht: Fortschritt zuerst",
      "admin.status.enrollmentSaved": "Kurszuweisung gespeichert.",
      "admin.status.userCreated": "Nutzer erstellt.",
      "admin.status.userDeleted": "Nutzer gelöscht.",
      "admin.status.roleUpdated": "Rolle aktualisiert.",
      "admin.status.requestApproved": "Anfrage genehmigt und Einschreibung aktualisiert.",
      "admin.status.requestRejected": "Anfrage abgelehnt.",
      "admin.status.pending": "Wird gespeichert...",
      "admin.status.dataLoadError": "Daten konnten nicht geladen werden.",
      "admin.status.noSelection": "Kein Nutzer ausgewählt",
      "admin.status.noData": "Keine Daten verfügbar.",
      "admin.status.none": "Keine",
      "admin.delete.confirm": "Nutzer wirklich löschen?",
      "login.demo.teamUsers": "Team-Testnutzer",
      "login.demo.teamPassword": "Passwort für Team-Testnutzer",
    },
    en: {
      "profile.kicker": "PROFILE MOCKUP",
      "status.prefix.error": "Error",
      "status.prefix.success": "Success",
      "profile.title": "My Profile",
      "profile.subtitle": "Your learning progress, favorites, and achievements at a glance.",
      "profile.levelLabel": "LEVEL",
      "profile.rankLabel": "RANK",
      "profile.totalXpLabel": "Total XP",
      "profile.progressToLevel": "{current} / {required} XP to Level {next}",
      "profile.gamification.open": "XP & Ranks",
      "profile.gamification.title": "XP, Level, and Rank System",
      "profile.gamification.currentRankPrefix": "Current rank:",
      "profile.gamification.close": "Close",
      "profile.gamification.closeAria": "Close XP and rank information",
      "profile.gamification.howHeading": "How XP works",
      "profile.gamification.howBody": "XP is earned for meaningful learning progress and recurring engagement. Not every click grants XP. Correct answers and completed learning units are rewarded much more strongly than passive interaction.",
      "profile.gamification.rewardsHeading": "XP rewards",
      "profile.gamification.rewardsHint": "Meaningful learning actions give more XP than passive actions. Simply clicking around is not treated as rewardable progress.",
      "profile.gamification.levelHeading": "Level progression",
      "profile.gamification.levelBody": "Levels require increasing XP. Early levels are reached quickly, later levels take longer, and progression stays motivating without becoming trivial.",
      "profile.gamification.rankHeading": "Ranks",
      "profile.gamification.rankBody": "Ranks are assigned automatically from your level and represent long-term progress.",
      "profile.gamification.dialogHint": "Press Escape to close the dialog.",
      "profile.stats.completedCourses": "Completed courses",
      "profile.stats.favorites": "Favorites",
      "profile.stats.certificates": "Certificates",
      "profile.stats.streak": "Learning streak",
      "profile.stats.days": "days",
      "profile.overview": "Profile",
      "profile.readingHistory": "Reading history",
      "profile.completedCourses": "Completed courses",
      "profile.favoriteCourses": "Favorite courses",
      "profile.favoriteBlog": "Favorite blog posts",
      "profile.certificates": "Earned certificates",
      "profile.manage": "Manage profile (mockup)",
      "profile.avatarSelection": "Choose profile picture",
      "profile.avatarPreset.default": "Initials",
      "profile.avatarPreset.cyber-guardian": "Cyber Guardian",
      "profile.avatarPreset.pixel-owl": "Pixel Owl",
      "profile.avatarPreset.retro-bot": "Retro Bot",
      "profile.avatarPreset.neon-fox": "Neon Fox",
      "profile.name": "Name",
      "profile.email": "Email",
      "profile.password": "New password (optional)",
      "profile.passwordPlaceholder": "At least 8 characters",
      "profile.passwordConfirm": "Confirm new password",
      "profile.passwordConfirmPlaceholder": "Repeat password",
      "profile.save": "Save profile",
      "profile.list.empty": "No entries yet.",
      "profile.history.dateSuffix": "read",
      "profile.certificate.badge": "Certificate",
      "profile.card.openCourse": "Start course",
      "profile.card.openArticle": "Read article",
      "profile.card.detailsUnavailable": "Details currently unavailable",
      "profile.cards.scrollPrevious": "Previous cards",
      "profile.cards.scrollNext": "Next cards",
      "profile.certificates.expand": "Show certificate",
      "profile.certificate.description": "Short description",
      "profile.certificate.fromCourse": "Course",
      "profile.certificate.earnedOn": "Earned on",
      "profile.certificate.download": "Download certificate",
      "profile.avatarAlt": "Profile image",
      "profile.avatarPreviewAlt": "Profile image preview",
      "profile.settingsHint": "Manage your profile and security settings centrally in the Settings menu.",
      "profile.settingsCta": "Go to settings",
      "settings.kicker": "SETTINGS",
      "settings.title": "All settings",
      "settings.subtitle": "Manage profile, security, and notifications in one place.",
      "settings.nav.profile": "Profile",
      "settings.nav.notifications": "Notifications",
      "settings.nav.privacy": "Privacy",
      "settings.nav.account": "Account",
      "settings.status.saved": "Settings saved (mockup).",
      "settings.notifications.title": "Notifications",
      "settings.notifications.course": "Course reminders",
      "settings.notifications.blog": "Blog updates",
      "settings.notifications.security": "Security alerts",
      "settings.privacy.title": "Privacy",
      "settings.privacy.public": "Public profile visibility",
      "settings.privacy.analytics": "Allow learning analytics",
      "settings.privacy.export": "Export my data",
      "settings.account.title": "Account",
      "settings.account.sessions": "Manage sessions",
      "settings.account.delete": "Delete account",
      "admin.tabs.overview": "Overview",
      "admin.tabs.users": "Users & roles",
      "admin.tabs.enrollments": "Course assignments",
      "admin.tabs.notifications": "Requests",
      "admin.tabs.rolesPermissions": "Roles & permissions",
      "admin.tabs.teams": "Teams",
      "admin.tabs.courseManagement": "Course management",
      "admin.tabs.blogManagement": "Blog management",
      "admin.tabs.reportsCompliance": "Reports & compliance",
      "admin.tabs.platformSettings": "Platform / organization",
      "admin.scope.admin": "Admin dashboard - platform-wide control",
      "admin.scope.owner": "Owner dashboard - organization-wide control",
      "admin.scope.team_owner": "Teamleader dashboard - team scope control",
      "admin.scope.team_moderator": "Teamleader dashboard - team scope control",
      "admin.kpi.activeUsers": "Active users",
      "admin.kpi.completedQuizzes": "Quizzes completed",
      "admin.kpi.certificatesIssued": "Certificates issued",
      "admin.table.title": "Team progress",
      "admin.table.employee": "Employee",
      "admin.table.status": "Status",
      "admin.table.role": "Role",
      "admin.table.quiz": "Quizzes",
      "admin.table.certificates": "Certificates",
      "admin.users.createTitle": "Create user",
      "admin.users.createSubmit": "Create user",
      "admin.users.roleTitle": "Role management",
      "admin.users.delete": "Delete user",
      "admin.enrollments.title": "Course assignments",
      "admin.enrollments.openCourse": "Open course",
      "admin.notifications.title": "Enrollment requests",
      "admin.notifications.empty": "No pending requests.",
      "admin.notifications.pending": "Pending",
      "admin.notifications.approved": "Approved",
      "admin.notifications.rejected": "Rejected",
      "admin.notifications.approve": "Approve",
      "admin.notifications.reject": "Reject",
      "admin.notifications.requestedBy": "Requested by",
      "admin.notifications.forCourse": "Course",
      "admin.users.createRole": "Role",
      "admin.users.selectedRole": "Selected user role",
      "admin.users.selectedUserLabel": "Selected user",
      "teamleader.users.selectedUserLabel": "Selected team member",
      "admin.users.roleCapabilities": "Role capabilities",
      "admin.users.roleSave": "Save role",
      "admin.roles.title": "Roles & permissions",
      "admin.roles.admin": "Admin: manage users, teams, and platform globally",
      "admin.roles.teamleader": "Teamleader: manage team operations and assignments",
      "admin.roles.user": "Learner: complete training and quizzes",
      "admin.teams.title": "Teams",
      "admin.teams.metaOne": "Teamleader: Anna M. . 3 members",
      "admin.teams.metaTwo": "Teamleader: Emre T. . 2 members",
      "admin.courses.title": "Global course management",
      "admin.courses.itemOne": "IT Security Basics . Mandatory . Published",
      "admin.courses.itemTwo": "Phishing Awareness Pro . Optional . Published",
      "admin.courses.itemThree": "AI Fraud & Deepfakes . Optional . Draft",
      "admin.reports.title": "Reports & compliance",
      "admin.reports.completion": "Mandatory completion rate: 82%",
      "admin.reports.overdue": "Overdue trainings: 9",
      "admin.reports.certificates": "Certificates total: 24",
      "admin.platform.title": "Platform / organization settings",
      "admin.platform.itemOne": "Default language: German",
      "admin.platform.itemTwo": "Branding: default style active",
      "admin.platform.itemThree": "Notifications: weekly compliance reminders",
      "teamleader.tabs.myTeam": "My team",
      "teamleader.tabs.progressTracking": "Progress tracking",
      "teamleader.tabs.certificates": "Certificates",
      "teamleader.tabs.teamSettings": "Team settings",
      "teamleader.myTeam.title": "My team",
      "teamleader.myTeam.member": "Member",
      "teamleader.myTeam.assigned": "Assigned courses",
      "teamleader.myTeam.status": "Status",
      "teamleader.myTeam.lastActive": "Last active",
      "teamleader.progress.title": "Team progress",
      "teamleader.progress.itemOne": "Team completion rate: 76%",
      "teamleader.progress.itemTwo": "Overdue members: 2",
      "teamleader.progress.itemThree": "At-risk members: 1",
      "teamleader.certificates.title": "Team certificates",
      "teamleader.certificates.itemOne": "Anna M. . IT Security Basics . 03/01/2026",
      "teamleader.certificates.itemTwo": "Emre T. . Phishing Awareness Pro . 02/27/2026",
      "teamleader.settings.title": "Team settings",
      "teamleader.settings.itemOne": "Reminder cadence: weekly",
      "teamleader.settings.itemTwo": "Due-date warning: 7 days before",
      "teamleader.settings.itemThree": "Team view: progress first",
      "admin.status.enrollmentSaved": "Course assignment saved.",
      "admin.status.userCreated": "User created.",
      "admin.status.userDeleted": "User deleted.",
      "admin.status.roleUpdated": "Role updated.",
      "admin.status.requestApproved": "Request approved and enrollment updated.",
      "admin.status.requestRejected": "Request rejected.",
      "admin.status.pending": "Saving...",
      "admin.status.dataLoadError": "Data could not be loaded.",
      "admin.status.noSelection": "No user selected",
      "admin.status.noData": "No data available.",
      "admin.status.none": "None",
      "admin.delete.confirm": "Delete user?",
      "login.demo.teamUsers": "Team test users",
      "login.demo.teamPassword": "Password for team test users",
    },
  });

  function normalizeEmail(value) {
    return String(value || "").trim().toLowerCase();
  }

  function normalizeAdminRole(value) {
    const normalized = String(value || "").trim().toLowerCase();
    // Migrate legacy role keys
    if (normalized === "team_leader") return "team_owner";
    if (normalized === "moderator") return "team_moderator";
    return ADMIN_USER_ROLES.includes(normalized) ? normalized : "user";
  }

  function resolveCurrentLang() {
    const lang = String(document?.documentElement?.lang || "").toLowerCase();
    return lang.startsWith("en") ? "en" : "de";
  }

  function tProfile(key, lang = resolveCurrentLang()) {
    return PROFILE_DASHBOARD_TEXT[lang]?.[key] || PROFILE_DASHBOARD_TEXT.de[key] || key;
  }

  function getAdminRoleLabel(role, lang = resolveCurrentLang()) {
    const safeRole = normalizeAdminRole(role);
    return ADMIN_ROLE_LABELS[lang]?.[safeRole] || ADMIN_ROLE_LABELS.de[safeRole] || safeRole;
  }

  function toInitials(name) {
    return String(name || "")
      .trim()
      .split(/\s+/)
      .filter(Boolean)
      .map((part) => part[0])
      .join("")
      .slice(0, 2)
      .toUpperCase() || "DU";
  }

  function sanitizeAvatarUrl(rawValue) {
    const value = String(rawValue || "").trim();
    if (!value) return "";
    try {
      const parsed = new URL(value, window?.location?.origin || "https://snappinquiz.local");
      if (parsed.protocol !== "https:") {
        return "";
      }
      const hostname = String(parsed.hostname || "").toLowerCase();
      if (
        hostname === "localhost" ||
        hostname.endsWith(".local") ||
        hostname === "127.0.0.1" ||
        hostname === "::1" ||
        /^10\./.test(hostname) ||
        /^192\.168\./.test(hostname) ||
        /^172\.(1[6-9]|2\d|3[0-1])\./.test(hostname)
      ) {
        return "";
      }
      return parsed.toString();
    } catch (_) {
      return "";
    }
  }

  function sanitizeAvatarPreset(rawValue) {
    const value = String(rawValue || "").trim();
    return AVATAR_PRESET_IDS.includes(value) ? value : "";
  }

  function buildAvatarPresetDataUrl(presetId) {
    const sprites = {
      "cyber-guardian": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" shape-rendering="crispEdges"><rect width="12" height="12" fill="#12071f"/><rect x="2" y="1" width="8" height="2" fill="#a855f7"/><rect x="1" y="3" width="10" height="5" fill="#1f2937"/><rect x="3" y="4" width="2" height="2" fill="#67e8f9"/><rect x="7" y="4" width="2" height="2" fill="#67e8f9"/><rect x="4" y="7" width="4" height="1" fill="#ec4899"/><rect x="2" y="8" width="8" height="3" fill="#6b21a8"/></svg>`,
      "pixel-owl": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" shape-rendering="crispEdges"><rect width="12" height="12" fill="#0f172a"/><rect x="2" y="1" width="8" height="2" fill="#7e22ce"/><rect x="1" y="3" width="10" height="6" fill="#334155"/><rect x="3" y="4" width="2" height="2" fill="#fef08a"/><rect x="7" y="4" width="2" height="2" fill="#fef08a"/><rect x="4" y="7" width="1" height="1" fill="#f97316"/><rect x="7" y="7" width="1" height="1" fill="#f97316"/><rect x="3" y="8" width="6" height="3" fill="#1d4ed8"/></svg>`,
      "retro-bot": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" shape-rendering="crispEdges"><rect width="12" height="12" fill="#111827"/><rect x="4" y="1" width="4" height="1" fill="#93c5fd"/><rect x="2" y="2" width="8" height="6" fill="#475569"/><rect x="3" y="3" width="2" height="2" fill="#a5f3fc"/><rect x="7" y="3" width="2" height="2" fill="#a5f3fc"/><rect x="4" y="6" width="4" height="1" fill="#f472b6"/><rect x="2" y="8" width="8" height="3" fill="#7c3aed"/></svg>`,
      "neon-fox": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" shape-rendering="crispEdges"><rect width="12" height="12" fill="#1a0b2e"/><rect x="2" y="1" width="2" height="2" fill="#f472b6"/><rect x="8" y="1" width="2" height="2" fill="#f472b6"/><rect x="1" y="3" width="10" height="5" fill="#7e22ce"/><rect x="3" y="4" width="2" height="2" fill="#fef08a"/><rect x="7" y="4" width="2" height="2" fill="#fef08a"/><rect x="5" y="6" width="2" height="1" fill="#22d3ee"/><rect x="2" y="8" width="8" height="3" fill="#db2777"/></svg>`,
    };
    const svg = sprites[presetId];
    return svg ? `data:image/svg+xml,${encodeURIComponent(svg)}` : "";
  }

  function loadAvatarImage(url, onLoad, onError, ImageCtor = typeof Image !== "undefined" ? Image : null) {
    if (!url || typeof ImageCtor !== "function") {
      if (typeof onError === "function") onError();
      return null;
    }
    const probe = new ImageCtor();
    probe.decoding = "async";
    probe.onload = () => {
      if (typeof onLoad === "function") onLoad(url);
    };
    probe.onerror = () => {
      if (typeof onError === "function") onError();
    };
    probe.src = url;
    return probe;
  }

  function getCumulativeXpForLevel(level) {
    const safeLevel = Math.max(1, Math.floor(Number(level) || 1));
    let total = 0;
    for (let currentLevel = 1; currentLevel < safeLevel && currentLevel <= LEVEL_UP_XP_REQUIREMENTS.length; currentLevel += 1) {
      total += LEVEL_UP_XP_REQUIREMENTS[currentLevel - 1];
    }
    return total;
  }

  function getXpRequiredForNextLevel(level) {
    const safeLevel = Math.max(1, Math.floor(Number(level) || 1));
    const lastRequirement = LEVEL_UP_XP_REQUIREMENTS[LEVEL_UP_XP_REQUIREMENTS.length - 1];
    return LEVEL_UP_XP_REQUIREMENTS[safeLevel - 1] || lastRequirement;
  }

  function getLevelFromTotalXp(totalXp) {
    const safeTotalXp = Math.max(0, Math.floor(Number(totalXp) || 0));
    let level = 1;
    let remaining = safeTotalXp;
    for (let index = 0; index < LEVEL_UP_XP_REQUIREMENTS.length; index += 1) {
      const required = LEVEL_UP_XP_REQUIREMENTS[index];
      if (remaining < required) {
        break;
      }
      remaining -= required;
      level += 1;
    }
    return level;
  }

  function getXpProgressWithinLevel(totalXp) {
    const safeTotalXp = Math.max(0, Math.floor(Number(totalXp) || 0));
    const level = getLevelFromTotalXp(safeTotalXp);
    const xpAtCurrentLevelStart = getCumulativeXpForLevel(level);
    const xpRequired = getXpRequiredForNextLevel(level);
    const rawCurrentXp = Math.max(0, safeTotalXp - xpAtCurrentLevelStart);
    const currentXp = Math.min(xpRequired, rawCurrentXp);
    const nextLevel = level + 1;
    return {
      level,
      currentXp,
      xpRequired,
      nextLevel,
      progressPercent: Math.min(100, Math.max(0, Math.round((currentXp / xpRequired) * 100))),
    };
  }

  function getRankFromLevel(level) {
    const safeLevel = Math.max(1, Math.floor(Number(level) || 1));
    const matchedRank = RANK_BRACKETS.find((rank) => safeLevel >= rank.minLevel && safeLevel <= rank.maxLevel);
    return matchedRank ? matchedRank.title : "Security Champion";
  }

  function buildProfileDashboardData(account, lang) {
    const completedCourses = [
      "course-it-security",
      "course-phishing-awareness",
      "course-dsgvo",
      "course-home-office",
      "course-ai-deepfakes",
    ];
    // Keep this normalization logic in sync with main.js normalizeFavoriteRef().
    const normalizeRef = (ref) => {
      const raw = String(ref || "").trim();
      if (!raw) return "";
      try {
        const isAbsoluteUrl = /^[a-z][a-z0-9+.-]*:\/\//i.test(raw);
        const isRootRelative = raw.startsWith("/");
        const isLikelyAppPath = /^(?:de|en)\/(courses|blog)\//i.test(raw) || /^(courses|blog)\//i.test(raw);
        const input = (isAbsoluteUrl || isRootRelative) ? raw : (isLikelyAppPath ? `/${raw}` : raw);
        const url = new URL(input, document.baseURI || window.location.href);
        let pathname = url.pathname || "";
        pathname = pathname.replace(/\/index\.html$/i, "/");
        const trimmed = pathname.replace(/^\/+/, "");
        if (!trimmed) return "";
        const parts = trimmed.split("/").filter(Boolean);
        const markerIndex = parts.findIndex((segment) => segment === "courses" || segment === "blog");
        if (markerIndex === -1) return "";
        const relevant = (markerIndex > 0 ? parts.slice(markerIndex) : parts).join("/");
        const withoutLocale = relevant.replace(/^(de|en)\//i, "");
        if (!withoutLocale) return "";
        return withoutLocale.endsWith("/") ? withoutLocale : `${withoutLocale}/`;
      } catch (_) {
        const cleaned = raw.replace(/\/index\.html$/i, "/").replace(/^\/+/, "");
        if (!cleaned) return "";
        const parts = cleaned.split("/").filter(Boolean);
        const markerIndex = parts.findIndex((segment) => segment === "courses" || segment === "blog");
        if (markerIndex === -1) return "";
        const relevant = (markerIndex > 0 ? parts.slice(markerIndex) : parts).join("/");
        const withoutLocale = relevant.replace(/^(de|en)\//i, "");
        if (!withoutLocale) return "";
        return withoutLocale.endsWith("/") ? withoutLocale : `${withoutLocale}/`;
      }
    };
    const readFavorites = () => {
      try {
        const raw = window.localStorage?.getItem("snappinquiz-favorites-v1");
        if (!raw) return { courses: [], blog: [], meta: {} };
        const parsed = JSON.parse(raw);

        const coerceList = (value) => {
          if (Array.isArray(value)) return value;
          if (typeof value === "string") return [value];
          return [];
        };
        const cleanup = (ref) => {
          let next = normalizeRef(ref);
          while (next.startsWith("courses/courses/")) next = next.replace(/^courses\//, "");
          while (next.startsWith("blog/blog/")) next = next.replace(/^blog\//, "");
          return next;
        };
        const dedupe = (values) => [...new Set(values)];
        const courses = dedupe(coerceList(parsed?.courses).map(cleanup).filter((v) => v && v.startsWith("courses/")));
        const blog = dedupe(coerceList(parsed?.blog).map(cleanup).filter((v) => v && v.startsWith("blog/")));

        const meta = {};
        const rawMeta = parsed?.meta && typeof parsed.meta === "object" ? parsed.meta : {};
        Object.keys(rawMeta || {}).forEach((key) => {
          const normalizedKey = cleanup(key);
          if (!normalizedKey) return;
          if (!normalizedKey.startsWith("courses/") && !normalizedKey.startsWith("blog/")) return;
          const value = rawMeta[key];
          if (!value || typeof value !== "object") return;
          meta[normalizedKey] = value;
        });

        return { courses, blog, meta };
      } catch (_) {
        return { courses: [], blog: [], meta: {} };
      }
    };
    const stored = readFavorites();
    const storedCourses = (stored.courses || []).map(normalizeRef).filter((v) => v && v.startsWith("courses/"));
    const storedBlog = (stored.blog || []).map(normalizeRef).filter((v) => v && v.startsWith("blog/"));
    const favoriteCourses = storedCourses.map((ref) => (stored.meta && stored.meta[ref] ? stored.meta[ref] : ref));
    const favoriteBlog = storedBlog.map((ref) => (stored.meta && stored.meta[ref] ? stored.meta[ref] : ref));
    const readingHistory = [
      { id: "blog-deepfake-guide", date: "2026-03-10" },
      { id: "blog-phishing-methods", date: "2026-03-08" },
      { id: "course-social-engineering", date: "2026-03-05" },
    ];
    const certificates = [
      { id: "course-it-security", earnedOn: "2026-03-11" },
      { id: "course-phishing-awareness", earnedOn: "2026-02-24" },
      { id: "course-dsgvo", earnedOn: "2026-02-03" },
    ];
    const nameLengthSeed = Math.max(1, String(account?.name || "").trim().length);
    const totalXp = 600 + nameLengthSeed * 180;
    const progression = getXpProgressWithinLevel(totalXp);
    const streakDays = 6 + (nameLengthSeed % 5);

    return {
      level: progression.level,
      rank: getRankFromLevel(progression.level),
      totalXp,
      xpCurrent: progression.currentXp,
      xpRequired: progression.xpRequired,
      nextLevel: progression.nextLevel,
      xpPercent: progression.progressPercent,
      streakDays,
      completedCourses,
      favoriteCourses,
      favoriteBlog,
      readingHistory,
      certificates,
    };
  }

  function formatDateForDisplay(value) {
    const raw = String(value || "").trim();
    const isoMatch = raw.match(/^(\d{4})-(\d{2})-(\d{2})$/);
    if (!isoMatch) return raw;
    const [, year, month, day] = isoMatch;
    return `${day}/${month}/${year}`;
  }

  function applyProfileTranslations(container, lang) {
    if (!container) return;
    container.querySelectorAll("[data-profile-i18n]").forEach((node) => {
      const key = node.getAttribute("data-profile-i18n");
      if (!key) return;
      node.textContent = tProfile(key, lang);
    });
    container.querySelectorAll("[data-profile-i18n-aria-label]").forEach((node) => {
      const key = node.getAttribute("data-profile-i18n-aria-label");
      if (!key) return;
      node.setAttribute("aria-label", tProfile(key, lang));
    });
    container.querySelectorAll("[data-profile-i18n-placeholder]").forEach((node) => {
      const key = node.getAttribute("data-profile-i18n-placeholder");
      if (!key) return;
      node.setAttribute("placeholder", tProfile(key, lang));
    });
    container.querySelectorAll("[data-profile-i18n-title]").forEach((node) => {
      const key = node.getAttribute("data-profile-i18n-title");
      if (!key) return;
      node.setAttribute("title", tProfile(key, lang));
    });
  }

  function createMockAuth(storage) {
    const safeStorage = storage || {
      getItem() {
        return null;
      },
      setItem() {},
      removeItem() {},
    };
    let runtimePassword = TEST_ACCOUNT.password;

    function cloneTeams(teams) {
      if (!Array.isArray(teams) || !teams.length) return [];
      return teams.map((t) => ({
        teamName: String(t.teamName || "").trim(),
        role: normalizeAdminRole(t.role),
      })).filter((t) => t.teamName);
    }

    function cloneAdminUsers(users) {
      return users
        .map((user, index) => {
          if (!user || typeof user !== "object" || Array.isArray(user)) return null;
          const safeId =
            typeof user.id === "string" && user.id.trim()
              ? user.id.trim()
              : `u-${index + 1}`;
          const safeName = String(user.name || "").trim() || `User ${index + 1}`;
          const safeEmail = normalizeEmail(user.email || `${safeId}@acme.local`);
          const safeCompletedQuizzes = Number.isFinite(Number(user.completedQuizzes))
            ? Math.max(0, Number(user.completedQuizzes))
            : 0;
          // Multi-team: prefer teams array, fall back to legacy role+teamName
          const teams = Array.isArray(user.teams) && user.teams.length
            ? cloneTeams(user.teams)
            : [{ teamName: String(user.teamName || "").trim() || "Incident Response", role: normalizeAdminRole(user.role) }];
          const primaryTeam = teams[0] || { teamName: "Incident Response", role: "user" };
          return {
            id: safeId,
            name: safeName,
            email: safeEmail,
            teams,
            // Compat getters for code that still reads user.role / user.teamName
            role: primaryTeam.role,
            teamName: primaryTeam.teamName,
            active: Boolean(user.active),
            completedQuizzes: safeCompletedQuizzes,
            certificates: Array.isArray(user.certificates)
              ? user.certificates.map((entry) => String(entry || "").trim()).filter(Boolean)
              : [],
            lastLogin: String(user.lastLogin || ""),
            status: user.status || "",
            courseCompletions: Array.isArray(user.courseCompletions)
              ? user.courseCompletions.map((c) => ({ course: String(c.course || ""), completedAt: String(c.completedAt || ""), score: Number(c.score) || 0, certificate: Boolean(c.certificate) }))
              : [],
            enrolledCourses: Array.isArray(user.enrolledCourses)
              ? user.enrolledCourses.map((entry) => String(entry || "").trim()).filter(Boolean)
              : [],
          };
        })
        .filter(Boolean);
    }

    function readAdminUsers() {
      const raw = safeGetItem(ADMIN_USERS_STORAGE_KEY);
      if (!raw) {
        return cloneAdminUsers(ADMIN_DASHBOARD_USERS);
      }
      try {
        const parsed = JSON.parse(raw);
        if (!Array.isArray(parsed)) {
          return cloneAdminUsers(ADMIN_DASHBOARD_USERS);
        }
        return cloneAdminUsers(parsed);
      } catch (_) {
        return cloneAdminUsers(ADMIN_DASHBOARD_USERS);
      }
    }

    function writeAdminUsers(users) {
      const nextUsers = cloneAdminUsers(users);
      safeSetItem(ADMIN_USERS_STORAGE_KEY, JSON.stringify(nextUsers));
      return nextUsers;
    }

    function cloneEnrollmentRequests(requests) {
      return requests
        .map((entry, index) => {
          if (!entry || typeof entry !== "object" || Array.isArray(entry)) return null;
          const id = typeof entry.id === "string" && entry.id.trim() ? entry.id.trim() : `r-${index + 1}`;
          const status = ["pending", "approved", "rejected"].includes(entry.status) ? entry.status : "pending";
          const desc = entry.description;
          return {
            id,
            userId: String(entry.userId || "").trim(),
            userName: String(entry.userName || "").trim(),
            email: String(entry.email || entry.userEmail || "").trim(),
            userEmail: normalizeEmail(entry.email || entry.userEmail || ""),
            type: String(entry.type || "course_access"),
            description: desc && typeof desc === "object" ? { de: desc.de || "", en: desc.en || "" } : (desc ? String(desc) : ""),
            courseName: String(entry.courseName || "").trim(),
            courseSlug: String(entry.courseSlug || "").trim(),
            status,
            createdAt: String(entry.createdAt || ""),
            resolvedAt: String(entry.resolvedAt || ""),
          };
        })
        .filter(Boolean);
    }

    function readEnrollmentRequests() {
      const raw = safeGetItem(ADMIN_ENROLLMENT_REQUESTS_STORAGE_KEY);
      if (!raw) {
        return cloneEnrollmentRequests(ADMIN_SEED_ENROLLMENT_REQUESTS);
      }
      try {
        const parsed = JSON.parse(raw);
        if (!Array.isArray(parsed)) return cloneEnrollmentRequests(ADMIN_SEED_ENROLLMENT_REQUESTS);
        return cloneEnrollmentRequests(parsed);
      } catch (_) {
        return cloneEnrollmentRequests(ADMIN_SEED_ENROLLMENT_REQUESTS);
      }
    }

    function writeEnrollmentRequests(requests) {
      const nextRequests = cloneEnrollmentRequests(requests);
      safeSetItem(ADMIN_ENROLLMENT_REQUESTS_STORAGE_KEY, JSON.stringify(nextRequests));
      return nextRequests;
    }

    function resolveCourseNameFromSlug(courseSlug) {
      const cleanSlug = String(courseSlug || "").trim();
      const match = Object.entries(ADMIN_COURSE_SLUGS).find(([, slug]) => slug === cleanSlug);
      return match ? match[0] : "";
    }

    function safeGetItem(key) {
      try {
        return safeStorage.getItem(key);
      } catch (_) {
        return null;
      }
    }

    function safeSetItem(key, value) {
      try {
        safeStorage.setItem(key, value);
      } catch (_) {
        // No-op fallback for blocked or unavailable storage.
      }
    }

    function safeRemoveItem(key) {
      try {
        safeStorage.removeItem(key);
      } catch (_) {
        // No-op fallback for blocked or unavailable storage.
      }
    }

    function readAccount() {
      const raw = safeGetItem(ACCOUNT_STORAGE_KEY);
      if (!raw) {
        return {
          name: TEST_ACCOUNT.name,
          email: TEST_ACCOUNT.email,
          avatarUrl: TEST_ACCOUNT.avatarUrl,
          avatarPreset: TEST_ACCOUNT.avatarPreset,
        };
      }
      try {
        const parsed = JSON.parse(raw);
        if (typeof parsed.password === "string" && parsed.password) {
          runtimePassword = parsed.password;
        }
        return {
          name: String(parsed.name || TEST_ACCOUNT.name).trim(),
          email: normalizeEmail(parsed.email || TEST_ACCOUNT.email),
          avatarUrl: String(parsed.avatarUrl || ""),
          avatarPreset: sanitizeAvatarPreset(parsed.avatarPreset),
        };
      } catch (_) {
        return {
          name: TEST_ACCOUNT.name,
          email: TEST_ACCOUNT.email,
          avatarUrl: TEST_ACCOUNT.avatarUrl,
          avatarPreset: TEST_ACCOUNT.avatarPreset,
        };
      }
    }

    function writeAccount(account) {
      const sanitized = {
        name: String(account.name || "").trim(),
        email: normalizeEmail(account.email),
        avatarUrl: String(account.avatarUrl || "").trim(),
        avatarPreset: sanitizeAvatarPreset(account.avatarPreset),
      };
      safeSetItem(ACCOUNT_STORAGE_KEY, JSON.stringify(sanitized));
      return sanitized;
    }

    function getAccount() {
      if (isAdmin()) {
        return {
          name: ADMIN_ACCOUNT.name,
          email: ADMIN_ACCOUNT.email,
          avatarUrl: ADMIN_ACCOUNT.avatarUrl,
          avatarPreset: ADMIN_ACCOUNT.avatarPreset,
        };
      }
      if (isOwner()) {
        return {
          name: ORG_ACCOUNT.name,
          email: ORG_ACCOUNT.email,
          avatarUrl: ORG_ACCOUNT.avatarUrl,
          avatarPreset: ORG_ACCOUNT.avatarPreset,
        };
      }
      return readAccount();
    }

    function isLoggedIn() {
      return safeGetItem(SESSION_STORAGE_KEY) === "1";
    }

    function getRole() {
      return isLoggedIn() ? safeGetItem(ROLE_STORAGE_KEY) || "user" : "guest";
    }

    function isAdmin() {
      return getRole() === "admin";
    }

    function isOwner() {
      return getRole() === "owner";
    }

    function hasRolePermission(permissionKey) {
      const role = String(getRole() || "guest");
      const permissions = ADMIN_ROLE_PERMISSIONS[role] || ADMIN_ROLE_PERMISSIONS.guest;
      return permissions.includes(permissionKey);
    }

    function hasAdminDashboardAccess() {
      return hasRolePermission("admin_dashboard_access");
    }

    function login({ email, password }) {
      const cleanEmail = normalizeEmail(email);
      const cleanPassword = String(password || "");

      if (cleanEmail === normalizeEmail(ADMIN_ACCOUNT.email) && cleanPassword === String(ADMIN_ACCOUNT.password)) {
        safeSetItem(SESSION_STORAGE_KEY, "1");
        safeSetItem(ROLE_STORAGE_KEY, "admin");
        safeSetItem(USER_ID_STORAGE_KEY, "admin");
        return {
          ok: true,
          account: {
            name: ADMIN_ACCOUNT.name,
            email: ADMIN_ACCOUNT.email,
            avatarUrl: ADMIN_ACCOUNT.avatarUrl,
            avatarPreset: ADMIN_ACCOUNT.avatarPreset,
          },
          role: "admin",
        };
      }

      if (cleanEmail === normalizeEmail(ORG_ACCOUNT.email) && cleanPassword === String(ORG_ACCOUNT.password)) {
        safeSetItem(SESSION_STORAGE_KEY, "1");
        safeSetItem(ROLE_STORAGE_KEY, "owner");
        safeSetItem(USER_ID_STORAGE_KEY, "owner");
        return {
          ok: true,
          account: {
            name: ORG_ACCOUNT.name,
            email: ORG_ACCOUNT.email,
            avatarUrl: ORG_ACCOUNT.avatarUrl,
            avatarPreset: ORG_ACCOUNT.avatarPreset,
          },
          role: "owner",
        };
      }

      const teamUser = readAdminUsers().find(
        (user) => normalizeEmail(user.email) === cleanEmail && user.active
      );
      if (teamUser && cleanPassword === MOCK_TEAM_LOGIN_PASSWORD) {
        const account = writeAccount({
          name: teamUser.name,
          email: teamUser.email,
          avatarUrl: "",
          avatarPreset: "",
        });
        safeSetItem(SESSION_STORAGE_KEY, "1");
        safeSetItem(ROLE_STORAGE_KEY, normalizeAdminRole(teamUser.role));
        safeSetItem(USER_ID_STORAGE_KEY, teamUser.id);
        return { ok: true, account, role: normalizeAdminRole(teamUser.role) };
      }

      const account = readAccount();
      const matches = cleanEmail === normalizeEmail(account.email) && cleanPassword === String(runtimePassword);

      if (!matches) {
        return { ok: false, error: "invalid_credentials" };
      }
      safeSetItem(SESSION_STORAGE_KEY, "1");
      safeSetItem(ROLE_STORAGE_KEY, "user");
      safeRemoveItem(USER_ID_STORAGE_KEY);
      return { ok: true, account, role: "user" };
    }

    function signup({ name, email, password, confirmPassword }) {
      const cleanName = String(name || "").trim();
      const cleanEmail = normalizeEmail(email);
      const cleanPassword = String(password || "");
      const cleanConfirmPassword = String(confirmPassword || "");

      if (!cleanName || !cleanEmail || !cleanPassword || !cleanConfirmPassword) {
        return { ok: false, error: "required_fields" };
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
        return { ok: false, error: "invalid_email" };
      }

      if (cleanPassword.length < 8) {
        return { ok: false, error: "password_too_short" };
      }

      if (cleanPassword !== cleanConfirmPassword) {
        return { ok: false, error: "password_mismatch" };
      }

      const account = writeAccount({
        name: cleanName,
        email: cleanEmail,
        avatarUrl: "",
        avatarPreset: "",
      });
      runtimePassword = cleanPassword;

      safeSetItem(SESSION_STORAGE_KEY, "1");
      safeSetItem(ROLE_STORAGE_KEY, "user");
      safeRemoveItem(USER_ID_STORAGE_KEY);
      return { ok: true, account };
    }

    function getLoginTestUsers() {
      const users = readAdminUsers()
        .filter((user) => user.active)
        .map((user) => ({
          email: user.email,
          name: user.name,
          role: normalizeAdminRole(user.role),
          password: MOCK_TEAM_LOGIN_PASSWORD,
        }));
      return users;
    }

    function updateProfile(payload = {}) {
      if (!isLoggedIn()) {
        return { ok: false, error: "not_logged_in" };
      }
      if (isAdmin() || isOwner()) {
        return { ok: false, error: "admin_profile_locked" };
      }

      const { name, email, avatarUrl, avatarPreset, password, confirmPassword } = payload;
      const hasAvatarUrl = Object.prototype.hasOwnProperty.call(payload, "avatarUrl");
      const existing = readAccount();
      const nextName = String(name || "").trim();
      const nextEmail = normalizeEmail(email);
      const nextAvatarUrl = hasAvatarUrl
        ? String(avatarUrl || "").trim()
        : String(existing.avatarUrl || "").trim();
      const nextAvatarPreset = sanitizeAvatarPreset(avatarPreset);
      const nextPassword = String(password || "");
      const nextConfirmPassword = String(confirmPassword || "");

      if (!nextName || !nextEmail) {
        return { ok: false, error: "required_fields" };
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(nextEmail)) {
        return { ok: false, error: "invalid_email" };
      }

      let resolvedPassword = runtimePassword;
      if (nextPassword || nextConfirmPassword) {
        if (nextPassword.length < 8) {
          return { ok: false, error: "password_too_short" };
        }
        if (nextPassword !== nextConfirmPassword) {
          return { ok: false, error: "password_mismatch" };
        }
        resolvedPassword = nextPassword;
      }

      const account = writeAccount({
        name: nextName,
        email: nextEmail,
        avatarUrl: nextAvatarUrl,
        avatarPreset: nextAvatarPreset,
      });
      runtimePassword = resolvedPassword;

      return { ok: true, account };
    }

    function logout() {
      safeRemoveItem(SESSION_STORAGE_KEY);
      safeRemoveItem(ROLE_STORAGE_KEY);
      safeRemoveItem(USER_ID_STORAGE_KEY);
    }

    function resetTestAccount() {
      writeAccount({ ...TEST_ACCOUNT });
      runtimePassword = TEST_ACCOUNT.password;
      safeRemoveItem(SESSION_STORAGE_KEY);
      safeRemoveItem(ROLE_STORAGE_KEY);
      safeRemoveItem(USER_ID_STORAGE_KEY);
      safeRemoveItem(ADMIN_USERS_STORAGE_KEY);
      safeRemoveItem(ADMIN_ENROLLMENT_REQUESTS_STORAGE_KEY);
      return getAccount();
    }

    function resolveScopedTeamName(users = readAdminUsers()) {
      const role = String(getRole() || "");
      if (role === "owner") return "";
      const storedUserId = String(safeGetItem(USER_ID_STORAGE_KEY) || "").trim();
      const accountEmail = normalizeEmail(readAccount().email || "");
      const currentUser = users.find((user) => user.id === storedUserId)
        || users.find((user) => normalizeEmail(user.email) === accountEmail);
      return String(currentUser?.teamName || "").trim();
    }

    function getScopedAdminUsers() {
      const users = readAdminUsers();
      const role = String(getRole() || "");
      if (role === "admin" || role === "owner") return users;
      const scopedTeamName = resolveScopedTeamName(users);
      if (!scopedTeamName) return [];
      return users.filter((user) => String(user.teamName || "").trim() === scopedTeamName);
    }

    function getAdminDashboardData() {
      if (!hasAdminDashboardAccess()) {
        return null;
      }
      return {
        users: getScopedAdminUsers(),
        courses: [...ADMIN_DASHBOARD_COURSES],
      };
    }

    function updateAdminEnrollment({ userId, courseName, enrolled }) {
      if (!hasRolePermission("manage_enrollments")) return { ok: false, error: "forbidden" };
      const cleanUserId = String(userId || "").trim();
      const cleanCourse = String(courseName || "").trim();
      if (!cleanUserId || !cleanCourse || !ADMIN_DASHBOARD_COURSES.includes(cleanCourse)) {
        return { ok: false, error: "invalid_input" };
      }

      const users = readAdminUsers();
      const user = users.find((entry) => entry.id === cleanUserId);
      if (!user) return { ok: false, error: "user_not_found" };
      if (!isAdmin() && !isOwner()) {
        const scopedIds = new Set(getScopedAdminUsers().map((entry) => entry.id));
        if (!scopedIds.has(cleanUserId)) return { ok: false, error: "forbidden" };
      }

      const enrolledSet = new Set(user.enrolledCourses || []);
      if (enrolled) {
        enrolledSet.add(cleanCourse);
      } else {
        enrolledSet.delete(cleanCourse);
      }
      user.enrolledCourses = [...enrolledSet];
      writeAdminUsers(users);
      return { ok: true, user: { ...user } };
    }

    function createAdminUser({ name, email, role, active }) {
      if (!hasRolePermission("manage_user_lifecycle")) return { ok: false, error: "forbidden" };
      const cleanName = String(name || "").trim();
      const cleanEmail = normalizeEmail(email);
      const cleanRole = normalizeAdminRole(role);
      if (!cleanName || !cleanEmail) {
        return { ok: false, error: "required_fields" };
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
        return { ok: false, error: "invalid_email" };
      }

      const users = readAdminUsers();
      if (users.some((user) => normalizeEmail(user.email) === cleanEmail)) {
        return { ok: false, error: "email_in_use" };
      }

      const nextId = `u${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`;
      const newUser = {
        id: nextId,
        name: cleanName,
        email: cleanEmail,
        role: cleanRole,
        teamName: "Incident Response",
        active: active !== false,
        completedQuizzes: 0,
        certificates: [],
        enrolledCourses: [],
      };
      users.push(newUser);
      writeAdminUsers(users);
      return { ok: true, user: { ...newUser } };
    }

    function deleteAdminUser(userId) {
      if (!hasRolePermission("manage_user_lifecycle")) return { ok: false, error: "forbidden" };
      const cleanUserId = String(userId || "").trim();
      if (!cleanUserId) return { ok: false, error: "invalid_input" };

      const users = readAdminUsers();
      const nextUsers = users.filter((user) => user.id !== cleanUserId);
      if (nextUsers.length === users.length) {
        return { ok: false, error: "user_not_found" };
      }
      writeAdminUsers(nextUsers);
      return { ok: true };
    }

    function updateAdminUserRole({ userId, role }) {
      if (!hasRolePermission("manage_roles")) return { ok: false, error: "forbidden" };
      const cleanUserId = String(userId || "").trim();
      const cleanRole = normalizeAdminRole(role);
      if (!cleanUserId) return { ok: false, error: "invalid_input" };
      if (!isAdmin() && !isOwner() && cleanRole === "team_owner") return { ok: false, error: "forbidden" };

      const users = readAdminUsers();
      const user = users.find((entry) => entry.id === cleanUserId);
      if (!user) return { ok: false, error: "user_not_found" };
      const scopedUsers = getScopedAdminUsers();
      if (!isAdmin() && !isOwner() && !scopedUsers.some((entry) => entry.id === cleanUserId)) {
        return { ok: false, error: "forbidden" };
      }

      user.role = cleanRole;
      writeAdminUsers(users);
      return { ok: true, user: { ...user } };
    }

    function requestCourseEnrollment({ courseSlug }) {
      if (!isLoggedIn()) return { ok: false, error: "not_logged_in" };
      if (String(getRole() || "") !== "user") return { ok: false, error: "forbidden" };
      const cleanCourseSlug = String(courseSlug || "").trim();
      const courseName = resolveCourseNameFromSlug(cleanCourseSlug);
      if (!courseName || !ADMIN_DASHBOARD_COURSES.includes(courseName)) {
        return { ok: false, error: "invalid_input" };
      }

      const account = readAccount();
      const users = readAdminUsers();
      const storedUserId = String(safeGetItem(USER_ID_STORAGE_KEY) || "").trim();
      let requester = storedUserId ? users.find((user) => user.id === storedUserId) : null;
      if (!requester && !storedUserId) {
        requester = users.find((user) => normalizeEmail(user.email) === normalizeEmail(account.email));
      }
      if (!requester) return { ok: false, error: "user_not_found" };
      if (!requester.active) return { ok: false, error: "inactive_user" };
      if (new Set(getUserEnrolledCourses(requester)).has(courseName)) {
        return { ok: false, error: "already_enrolled" };
      }

      const requests = readEnrollmentRequests();
      const hasPending = requests.some(
        (entry) => entry.status === "pending" && entry.userId === requester.id && entry.courseSlug === cleanCourseSlug
      );
      if (hasPending) return { ok: false, error: "request_exists" };

      const request = {
        id: `r${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`,
        userId: requester.id,
        userName: requester.name,
        userEmail: requester.email,
        courseName,
        courseSlug: cleanCourseSlug,
        status: "pending",
        createdAt: new Date().toISOString(),
        resolvedAt: "",
      };
      requests.push(request);
      writeEnrollmentRequests(requests);
      return { ok: true, request };
    }

    function getAdminEnrollmentRequests() {
      if (!hasRolePermission("manage_enrollments")) return [];
      const requests = readEnrollmentRequests();
      if (isAdmin() || isOwner()) return requests;
      const scopedIds = new Set(getScopedAdminUsers().map((user) => user.id));
      return requests.filter((request) => scopedIds.has(request.userId));
    }

    function resolveAdminEnrollmentRequest({ requestId, approve }) {
      if (!hasRolePermission("manage_enrollments")) return { ok: false, error: "forbidden" };
      const cleanRequestId = String(requestId || "").trim();
      if (!cleanRequestId) return { ok: false, error: "invalid_input" };
      const requests = readEnrollmentRequests();
      const request = requests.find((entry) => entry.id === cleanRequestId);
      if (!request) return { ok: false, error: "request_not_found" };
      if (!isAdmin() && !isOwner()) {
        const scopedIds = new Set(getScopedAdminUsers().map((user) => user.id));
        if (!scopedIds.has(request.userId)) return { ok: false, error: "forbidden" };
      }
      if (request.status !== "pending") return { ok: false, error: "already_resolved" };

      if (approve) {
        const enrollmentResult = updateAdminEnrollment({
          userId: request.userId,
          courseName: request.courseName,
          enrolled: true,
        });
        if (!enrollmentResult.ok) {
          return enrollmentResult;
        }
      }

      request.status = approve ? "approved" : "rejected";
      request.resolvedAt = new Date().toISOString();
      writeEnrollmentRequests(requests);
      return { ok: true, request: { ...request } };
    }

    return {
      getAccount,
      getRole,
      isAdmin,
      isOwner,
      hasAdminDashboardAccess,
      hasAdminPermission: hasRolePermission,
      getAdminDashboardData,
      updateAdminEnrollment,
      createAdminUser,
      deleteAdminUser,
      updateAdminUserRole,
      getAdminEnrollmentRequests,
      resolveAdminEnrollmentRequest,
      requestCourseEnrollment,
      getLoginTestUsers,
      isLoggedIn,
      login,
      signup,
      updateProfile,
      logout,
      resetTestAccount,
    };
  }

  function createMemoryStorage() {
    const memory = new Map();
    return {
      getItem(key) {
        return memory.has(key) ? memory.get(key) : null;
      },
      setItem(key, value) {
        memory.set(key, String(value));
      },
      removeItem(key) {
        memory.delete(key);
      },
    };
  }

  function resolveStorage() {
    try {
      const storage = window.localStorage;
      const probeKey = "__snappinquiz_storage_probe__";
      storage.getItem(probeKey);
      storage.setItem(probeKey, "1");
      storage.removeItem(probeKey);
      return storage;
    } catch (_) {
      return createMemoryStorage();
    }
  }

  function updateAuthUiHint(authApi) {
    const loggedIn = authApi.isLoggedIn();
    const role = authApi.getRole();
    if (document.body) {
      document.body.dataset.authState = loggedIn ? "logged-in" : "logged-out";
      document.body.dataset.authRole = role;
    }
    window.dispatchEvent(new CustomEvent("snappinquiz:auth-changed", { detail: { loggedIn, role } }));
  }

  function setStatus(target, message, type) {
    if (!target) return;
    const lang = resolveCurrentLang();
    const errorPrefix = `${tProfile("status.prefix.error", lang)}:`;
    const successPrefix = `${tProfile("status.prefix.success", lang)}:`;
    if (message && type === "error" && !message.startsWith(errorPrefix)) {
      message = `${errorPrefix} ${message}`;
    } else if (message && type === "success" && !message.startsWith(successPrefix)) {
      message = `${successPrefix} ${message}`;
    }
    target.textContent = message || "";
    target.dataset.statusType = type || "";
  }

  function setPendingState(form, controls, isPending) {
    if (form) {
      form.setAttribute("aria-busy", String(isPending));
    }

    controls.forEach((control) => {
      if (!control) return;
      control.disabled = isPending;
      control.setAttribute("aria-disabled", String(isPending));
    });
  }

  function resolveScreen(container) {
    const screen = container?.dataset.authScreen;
    if (screen === "signup" || screen === "profile" || screen === "settings" || screen === "organisation" || screen === "admin" || screen === "teamleader") return screen;
    return "login";
  }

  function resolveMockupBasePath() {
    const marker = "/profile-mockup/";
    const pathname = window.location.pathname || "";
    const markerIndex = pathname.indexOf(marker);
    if (markerIndex === -1) return "/profile-mockup/";

    const localePrefix = pathname.slice(0, markerIndex);
    return `${localePrefix}${marker}`;
  }

  function navigateToScreen(screen) {
    if (!screen) return;
    window.location.assign(`${resolveMockupBasePath()}${screen}/`);
  }

  function getDashboardRouteForRole(role) {
    const safeRole = String(role || "");
    if (safeRole === "admin") return "admin";
    if (safeRole === "owner") return "organisation";
    if (safeRole === "team_owner" || safeRole === "team_moderator") return "teamleader";
    return "profile";
  }

  function statusMessageFor(action, errorCode) {
    const messages = {
      login: {
        invalid_credentials: "Login fehlgeschlagen. E-Mail oder Passwort stimmen nicht.",
      },
      signup: {
        required_fields: "Bitte alle Pflichtfelder ausfüllen.",
        invalid_email: "Bitte eine gültige E-Mail-Adresse eingeben.",
        password_too_short: "Passwort muss mindestens 8 Zeichen haben.",
        password_mismatch: "Passwörter stimmen nicht überein.",
      },
      profile: {
        not_logged_in: "Bitte zuerst einloggen.",
        admin_profile_locked: "Admin-Profile sind im Mockup schreibgeschützt.",
        required_fields: "Name und E-Mail sind Pflichtfelder.",
        invalid_email: "Bitte eine gültige E-Mail-Adresse eingeben.",
        password_too_short: "Neues Passwort muss mindestens 8 Zeichen haben.",
        password_mismatch: "Neue Passwörter stimmen nicht überein.",
      },
    };

    messages.admin = {
      forbidden: "Keine Berechtigung für diese Aktion.",
      invalid_input: "Ungültige Eingabe.",
      user_not_found: "Nutzer nicht gefunden.",
      request_not_found: "Anfrage nicht gefunden.",
      already_resolved: "Anfrage wurde bereits bearbeitet.",
      request_exists: "Für diesen Kurs liegt bereits eine offene Anfrage vor.",
      already_enrolled: "Nutzer ist bereits für diesen Kurs eingeschrieben.",
      inactive_user: "Inaktive Nutzer können keine Kursanfragen stellen.",
      not_logged_in: "Bitte zuerst einloggen.",
      required_fields: "Name und E-Mail sind Pflichtfelder.",
      invalid_email: "Bitte eine gültige E-Mail-Adresse eingeben.",
      email_in_use: "E-Mail wird bereits verwendet.",
    };

    return messages[action]?.[errorCode] || "Aktion fehlgeschlagen. Bitte Eingaben prüfen.";
  }

  function initProfileMockup() {
    const container = document.querySelector("[data-auth-mockup]");
    if (!container) return;

    const authApi = createMockAuth(resolveStorage());
    const currentScreen = resolveScreen(container);

    const signupForm = container.querySelector("[data-signup-form]");
    const loginForm = container.querySelector("[data-login-form]");
    const profileForm = container.querySelector("[data-profile-form]");

    const signupStatus = container.querySelector("[data-signup-status]");
    const loginStatus = container.querySelector("[data-login-status]");
    const profileStatus = container.querySelector("[data-profile-status]");
    const settingsStatus = container.querySelector("[data-settings-status]");
    const authStateBadge = container.querySelector("[data-auth-state-badge]");

    const loginEmail = container.querySelector("[data-login-email]");
    const loginPassword = container.querySelector("[data-login-password]");
    const signupName = container.querySelector("[data-signup-name]");
    const signupEmail = container.querySelector("[data-signup-email]");
    const signupPassword = container.querySelector("[data-signup-password]");
    const signupPasswordConfirm = container.querySelector("[data-signup-password-confirm]");

    const profileName = container.querySelector("[data-profile-name]");
    const profileEmail = container.querySelector("[data-profile-email]");
    const profileAvatarPresetInput = container.querySelector("[data-profile-avatar-preset]");
    const profileAvatarPresetList = container.querySelector("[data-profile-avatar-presets]");
    const profilePassword = container.querySelector("[data-profile-password]");
    const profilePasswordConfirm = container.querySelector("[data-profile-password-confirm]");
    const profileAvatarPreview = container.querySelector("[data-profile-avatar-preview]");
    const profileHeroAvatar = container.querySelector("[data-profile-hero-avatar]");
    const profileHeroName = container.querySelector("[data-profile-hero-name]");
    const profileLevel = container.querySelector("[data-profile-level]");
    const profileRank = container.querySelector("[data-profile-rank]");
    const profileTotalXp = container.querySelector("[data-profile-total-xp]");
    const profileLevelProgress = container.querySelector("[data-profile-level-progress]");
    const profileLevelProgressLabel = container.querySelector("[data-profile-level-progress-label]");
    const profileGamificationOpen = container.querySelector("[data-profile-gamification-open]");
    const profileGamificationDialog = container.querySelector("[data-profile-gamification-dialog]");
    const profileGamificationDialogClose = container.querySelector("[data-profile-gamification-close]");
    const profileGamificationCurrentRank = container.querySelector("[data-profile-gamification-current-rank]");
    const profileGamificationRewards = container.querySelector("[data-profile-gamification-rewards]");
    const profileGamificationLevels = container.querySelector("[data-profile-gamification-levels]");
    const profileGamificationRanks = container.querySelector("[data-profile-gamification-ranks]");
    const profileCompletedCount = container.querySelector("[data-profile-completed-count]");
    const profileFavoritesCount = container.querySelector("[data-profile-favorites-count]");
    const profileCertificatesCount = container.querySelector("[data-profile-certificates-count]");
    const profileStreakCount = container.querySelector("[data-profile-streak-count]");
    const profileReadingHistory = container.querySelector("[data-profile-reading-history]");
    const profileCompletedCourses = container.querySelector("[data-profile-completed-courses]");
    const profileFavoriteCourses = container.querySelector("[data-profile-favorite-courses]");
    const profileFavoriteBlog = container.querySelector("[data-profile-favorite-blog]");
    const profileCertificatesList = container.querySelector("[data-profile-certificates]");
    const profileTabButtons = [...container.querySelectorAll("[data-profile-tab-target]")];
    const profileTabPanels = [...container.querySelectorAll("[data-profile-tab-panel]")];
    const settingsTabButtons = [...container.querySelectorAll("[data-settings-tab-target]")];
    const settingsTabPanels = [...container.querySelectorAll("[data-settings-tab-panel]")];
    const settingsActionControls = [...container.querySelectorAll("[data-settings-action]")];

    const resetButtons = [...container.querySelectorAll("[data-mock-reset]")];
    const loginSubmitButton = loginForm?.querySelector("button[type='submit']");
    const loginTestUsersList = container.querySelector("[data-login-test-users]");
    const loginTestUsersPassword = container.querySelector("[data-login-test-users-password]");
    const signupSubmitButton = signupForm?.querySelector("button[type='submit']");
    const profileSubmitButton = profileForm?.querySelector("button[type='submit']");
    const adminTableBody = container.querySelector("[data-admin-users-table]");
    const adminSelectedLabel = container.querySelector("[data-admin-selected-user]");
    const adminEnrolledList = container.querySelector("[data-admin-enrolled]");
    const adminNotEnrolledList = container.querySelector("[data-admin-not-enrolled]");
    const adminActiveUsers = container.querySelector("[data-admin-active-users]");
    const adminFinishedQuizzes = container.querySelector("[data-admin-finished-quizzes]");
    const adminCertificates = container.querySelector("[data-admin-certificates]");
    const adminActiveLearners = container.querySelector("[data-admin-active-learners]");
    const adminActiveLearnersSub = container.querySelector("[data-admin-active-learners-sub]");
    const OVERVIEW_ROW_LIMIT = 10;
    const adminStatus = container.querySelector("[data-admin-status]");
    const adminContentHeading = container.querySelector("[data-admin-content-heading]");
    const adminGreeting = container.querySelector("[data-admin-greeting]");
    const adminMemberCount = container.querySelector("[data-admin-member-count]");
    const adminKpiTrendUsers = container.querySelector("[data-admin-kpi-trend-users]");
    const adminKpiTrendQuizzes = container.querySelector("[data-admin-kpi-trend-quizzes]");
    const adminKpiTrendCerts = container.querySelector("[data-admin-kpi-trend-certs]");
    const adminKpiOpenRequests = null;
    const adminKpiTrendRequests = null;
    const adminRequestBadge = null;
    const adminDashboardRequests = null;
    const adminDashboardActivity = container.querySelector("[data-admin-dashboard-activity]");
    const adminDashboardAssignments = container.querySelector("[data-admin-dashboard-assignments]");
    const adminNavRequestCount = null;
    const adminOverviewHeader = container.querySelector("[data-admin-overview-header]");
    const adminRoleScope = container.querySelector("[data-admin-role-scope]");
    const adminSelectedContext = container.querySelector("[data-admin-selected-context]");
    const adminSelectedContextLabel = container.querySelector("[data-admin-selected-context-label]");
    const adminSelectedContextValue = container.querySelector("[data-admin-selected-context-value]");
    const adminHelper = container.querySelector("[data-admin-helper]");
    const adminCreateForm = container.querySelector("[data-admin-create-form]");
    const adminCreateName = container.querySelector("[data-admin-create-name]");
    const adminCreateEmail = container.querySelector("[data-admin-create-email]");
    const adminCreateRole = container.querySelector("[data-admin-create-role]");
    const adminCreateActive = container.querySelector("[data-admin-create-active]");
    const adminDeleteButton = container.querySelector("[data-admin-delete-user]");
    const adminCreateSubmit = adminCreateForm?.querySelector("button[type='submit']");
    const adminRoleSelect = container.querySelector("[data-admin-user-role]");
    const adminRoleSave = container.querySelector("[data-admin-save-role]");
    const adminRoleCapabilities = container.querySelector("[data-admin-role-capabilities]");
    const adminNotificationsList = container.querySelector("[data-admin-notifications-list]");
    const adminRequestsSummary = container.querySelector("[data-admin-requests-summary]");
    const adminResolvedTable = null;
    const adminResolvedFilterButtons = [];
    const adminMatrixRoleHeads = [...container.querySelectorAll("[data-admin-matrix-role-head]")];
    const adminMatrixBody = container.querySelector("[data-admin-matrix-body]");
    const adminMatrixLegend = container.querySelector("[data-admin-matrix-legend]");
    const adminMatrixPermHead = container.querySelector("[data-admin-matrix-perm-head]");
    const adminAssignRoleBtn = container.querySelector("[data-admin-assign-role-btn]");
    const adminUsersPageTable = container.querySelector("[data-admin-users-page-table]");
    const adminTeamsTable = container.querySelector("[data-admin-teams-table]");
    const adminCoursesTable = container.querySelector("[data-admin-courses-table]");
    const adminCoursesThead = container.querySelector("[data-admin-courses-thead]");
    const adminReportsPeriod = container.querySelector("[data-admin-reports-period]");
    const adminReportsKpis = container.querySelector("[data-admin-reports-kpis]");
    const adminReportsCourseBars = container.querySelector("[data-admin-reports-course-bars]");
    const adminReportsTeamBars = container.querySelector("[data-admin-reports-team-bars]");
    const adminReportsTopLearners = container.querySelector("[data-admin-reports-top-learners]");
    const adminEnrollmentsSummary = container.querySelector("[data-admin-enrollments-summary]");
    const adminEnrollmentsFilters = container.querySelector("[data-admin-enrollments-filters]");
    const adminEnrollmentsTable = container.querySelector("[data-admin-enrollments-table]");
    const adminDetailView = container.querySelector("[data-admin-detail-view]");
    const adminUsersThead = container.querySelector("[data-admin-users-thead]");
    const adminEnrollmentsThead = container.querySelector("[data-admin-enrollments-thead]");
    const adminDashAssignThead = container.querySelector("[data-admin-dashboard-assignments-thead]");
    const adminTeamsThead = container.querySelector("[data-admin-teams-thead]");
    const adminResolvedThead = container.querySelector("[data-admin-resolved-thead]");
    const adminTabButtons = [...container.querySelectorAll("[data-admin-tab-target]")];
    const adminTabPanels = [...container.querySelectorAll("[data-admin-tab-panel]")];
    let selectedAdminUserId = "";
    let activeAdminTabId = adminTabButtons[0]?.dataset.adminTabTarget || "overview";
    let avatarRenderToken = 0;
    let selectedAvatarPreset = "";
    let activeProfileTabId = profileTabButtons[0]?.dataset.profileTabTarget || "reading-history";
    let activeSettingsTabId = settingsTabButtons[0]?.dataset.settingsTabTarget || "profile";
    let previousFocusElement = null;
    let activeDetailCleanup = null;
    let adminOverviewUsersLazyCleanup = null;
    let adminUsersPageLazyCleanup = null;

    const ADMIN_OVERVIEW_USERS_INITIAL_COUNT = 8;
    const ADMIN_OVERVIEW_USERS_BATCH_SIZE = 4;
    const ADMIN_USERS_INITIAL_COUNT = 15;
    const ADMIN_USERS_BATCH_SIZE = 15;

    function setAdminControlsPending(isPending) {
      const courseButtons = [...container.querySelectorAll("[data-admin-course-toggle]")];
      const requestButtons = [...container.querySelectorAll("[data-admin-request-action]")];
      setPendingState(
        null,
        [
          adminCreateName,
          adminCreateEmail,
          adminCreateRole,
          adminCreateActive,
          adminCreateSubmit,
          adminDeleteButton,
          adminRoleSelect,
          adminRoleSave,
          ...courseButtons,
          ...requestButtons,
        ],
        isPending
      );
    }

    function canManageUserLifecycle() {
      return Boolean(authApi.hasAdminPermission?.("manage_user_lifecycle"));
    }

    function canManageRoles() {
      return Boolean(authApi.hasAdminPermission?.("manage_roles"));
    }

    function canManageEnrollments() {
      return Boolean(authApi.hasAdminPermission?.("manage_enrollments"));
    }

    function getCurrentAdminRole() {
      return String(authApi.getRole?.() || "guest");
    }

    function isAdminNodeVisibleForRole(node, role) {
      if (!node) return false;
      const roleList = String(node.dataset.adminVisibleRoles || "")
        .split(",")
        .map((entry) => entry.trim())
        .filter(Boolean);
      if (!roleList.length) return true;
      return roleList.includes(role);
    }

    function getVisibleAdminTabButtons() {
      const role = getCurrentAdminRole();
      return adminTabButtons.filter((button) => isAdminNodeVisibleForRole(button, role));
    }

    function getVisibleAdminTabPanels() {
      const role = getCurrentAdminRole();
      return adminTabPanels.filter((panel) => isAdminNodeVisibleForRole(panel, role));
    }

    function syncAdminRoleScopedView() {
      const role = getCurrentAdminRole();
      adminTabButtons.forEach((button) => {
        const isVisible = isAdminNodeVisibleForRole(button, role);
        button.classList.toggle("hidden", !isVisible);
        button.setAttribute("aria-hidden", String(!isVisible));
      });
      adminTabPanels.forEach((panel) => {
        const isVisible = isAdminNodeVisibleForRole(panel, role);
        if (!isVisible) {
          panel.classList.add("hidden");
          panel.setAttribute("aria-hidden", "true");
        }
      });
      if (adminRoleScope) {
        adminRoleScope.textContent = tProfile(`admin.scope.${role}`);
      }
    }

    function syncAdminPermissionState() {
      const lifecycleAllowed = canManageUserLifecycle();
      const rolesAllowed = canManageRoles();
      const enrollmentsAllowed = canManageEnrollments();
      if (adminCreateForm) {
        const createControls = [...adminCreateForm.querySelectorAll("input, select, button")];
        createControls.forEach((node) => {
          node.disabled = !lifecycleAllowed;
          node.setAttribute("aria-disabled", String(!lifecycleAllowed));
        });
      }
      if (adminDeleteButton) {
        adminDeleteButton.disabled = !lifecycleAllowed || !selectedAdminUserId;
        adminDeleteButton.setAttribute("aria-disabled", String(adminDeleteButton.disabled));
      }
      if (adminRoleSelect) {
        adminRoleSelect.disabled = !rolesAllowed;
        adminRoleSelect.setAttribute("aria-disabled", String(!rolesAllowed));
      }
      if (adminRoleSave) {
        adminRoleSave.disabled = !rolesAllowed || !selectedAdminUserId;
        adminRoleSave.setAttribute("aria-disabled", String(adminRoleSave.disabled));
      }
      container.querySelectorAll("[data-admin-request-action]").forEach((node) => {
        node.disabled = !enrollmentsAllowed;
        node.setAttribute("aria-disabled", String(!enrollmentsAllowed));
      });
    }

    const profileContentCatalog = Object.freeze([
      {
        id: "course-it-security",
        type: "course",
        categoryKey: "security",
        mediaImage: "course-it-security",
        href: "courses/it-sicherheit-grundlagen/",
        title: { de: "IT-Sicherheit Grundlagen", en: "IT Security Basics" },
        tag: { de: "IT-Sicherheit", en: "IT Security" },
        description: { de: "Der perfekte Einstieg in die Welt der Cybersecurity.", en: "Perfect entry point into modern cybersecurity basics." },
        meta: { de: ["8 Lektionen", "45 Min"], en: ["8 lessons", "45 min"] },
      },
      {
        id: "course-phishing-awareness",
        type: "course",
        categoryKey: "phishing",
        mediaImage: "course-phishing-awareness",
        href: "courses/phishing-awareness-pro/",
        title: { de: "Phishing Awareness Pro", en: "Phishing Awareness Pro" },
        tag: { de: "Phishing", en: "Phishing" },
        description: { de: "Echte Beispiele, interaktive Uebungen und simulierte Angriffe.", en: "Hands-on scenarios with realistic attack simulations." },
        meta: { de: ["12 Lektionen", "90 Min"], en: ["12 lessons", "90 min"] },
      },
      {
        id: "course-dsgvo",
        type: "course",
        categoryKey: "gdpr",
        mediaImage: "course-dsgvo",
        href: "courses/dsgvo-compliance/",
        title: { de: "DSGVO Compliance", en: "GDPR Compliance" },
        tag: { de: "DSGVO", en: "GDPR" },
        description: { de: "Praktische Datenschutz-Tipps für den Arbeitsalltag.", en: "Apply data protection requirements in daily operations." },
        meta: { de: ["6 Lektionen", "60 Min"], en: ["6 lessons", "60 min"] },
      },
      {
        id: "course-social-engineering",
        type: "course",
        categoryKey: "social",
        mediaImage: "course-social-engineering",
        href: "courses/social-engineering-abwehr/",
        title: { de: "Social Engineering Abwehr", en: "Social Engineering Defense" },
        tag: { de: "Social Engineering", en: "Social Engineering" },
        description: { de: "Psychologische Tricks erkennen und sicher reagieren.", en: "Identify manipulation patterns and respond safely." },
        meta: { de: ["10 Lektionen", "75 Min"], en: ["10 lessons", "75 min"] },
      },
      {
        id: "course-home-office",
        type: "course",
        categoryKey: "homeoffice",
        mediaImage: "course-home-office",
        href: "courses/sicheres-home-office/",
        title: { de: "Sicheres Home-Office", en: "Secure Home Office" },
        tag: { de: "Home-Office", en: "Home Office" },
        description: { de: "VPN, WLAN-Sicherheit und Geräte-Schutz für verteilte Teams.", en: "Harden remote workplaces, networks and devices." },
        meta: { de: ["5 Lektionen", "30 Min"], en: ["5 lessons", "30 min"] },
      },
      {
        id: "course-ai-deepfakes",
        type: "course",
        categoryKey: "ai",
        mediaImage: "course-ai-deepfakes",
        href: "courses/ki-betrug-und-deepfakes/",
        title: { de: "KI-Betrug und Deepfakes", en: "AI Fraud and Deepfakes" },
        tag: { de: "KI & Deepfakes", en: "AI & Deepfakes" },
        description: { de: "Voice Cloning und Deepfake-Muster frühzeitig erkennen.", en: "Recognize voice-cloning and deepfake attack signals early." },
        meta: { de: ["8 Lektionen", "55 Min"], en: ["8 lessons", "55 min"] },
      },
      {
        id: "blog-phishing-methods",
        type: "blog",
        categoryKey: "phishing",
        mediaImage: "blog-phishing-methods",
        href: "blog/phishing-methods-2026/",
        title: { de: "Die 5 häufigsten Phishing-Methoden 2026", en: "The 5 most common phishing methods in 2026" },
        tag: { de: "Phishing", en: "Phishing" },
        description: { de: "Welche neuen Tricks Angreifer nutzen und worauf man achten sollte.", en: "What changed in current phishing campaigns and warning signs." },
        meta: { de: ["01/01/2026", "5 Min Lesezeit"], en: ["01/01/2026", "5 min read"] },
      },
      {
        id: "blog-deepfake-guide",
        type: "blog",
        categoryKey: "ai",
        mediaImage: "blog-deepfake-guide",
        href: "blog/deepfake-guide/",
        title: { de: "KI-generierte Deepfakes erkennen", en: "Detecting AI-generated deepfakes" },
        tag: { de: "KI", en: "AI" },
        description: { de: "So schützen Sie sich vor manipulierten Videos und Audio-Fälschungen.", en: "How to identify manipulated video and voice content." },
        meta: { de: ["01/12/2025", "8 Min Lesezeit"], en: ["01/12/2025", "8 min read"] },
      },
      {
        id: "blog-home-office-security",
        type: "blog",
        categoryKey: "homeoffice",
        mediaImage: "blog-home-office-security",
        href: "blog/secure-home-office/",
        title: { de: "Sicheres Arbeiten im Home-Office", en: "Secure working from home" },
        tag: { de: "Home-Office", en: "Home Office" },
        description: { de: "10 essenzielle Tipps für die IT-Sicherheit außerhalb des Büros.", en: "10 practical security checks for distributed teams." },
        meta: { de: ["01/11/2025", "6 Min Lesezeit"], en: ["01/11/2025", "6 min read"] },
      },
    ]);
    let expandedCertificateIds = new Set();
    const profileCardCarouselStates = new WeakMap();

    function resolveProfileEntry(entryRef) {
      const normalizedRef = String(entryRef || "").trim();
      if (!normalizedRef) return null;
      const normalizedHref = normalizedRef.replace(/^\/+/, "").replace(/^(de|en)\//i, "").replace(/\/index\.html$/i, "/");
      const normalizedHrefWithSlash = normalizedHref.endsWith("/") ? normalizedHref : `${normalizedHref}/`;
      return (
        profileContentCatalog.find((entry) => entry.id === normalizedRef) ||
        profileContentCatalog.find((entry) => entry.title.de === normalizedRef || entry.title.en === normalizedRef) ||
        profileContentCatalog.find((entry) => {
          const entryHref = String(entry.href || "").replace(/^\/+/, "").replace(/\/index\.html$/i, "/");
          const entryHrefWithSlash = entryHref.endsWith("/") ? entryHref : `${entryHref}/`;
          return entryHrefWithSlash === normalizedHrefWithSlash;
        }) ||
        null
      );
    }

    function renderCardList(target, entries, lang, emptyText, options = {}) {
      if (!target) return;
      target.innerHTML = "";
      if (!entries.length) {
        const item = document.createElement("li");
        item.className = "profile-tab-empty-item";
        const emptyCard = document.createElement("article");
        emptyCard.className = "content-library-card rounded-2xl p-4 text-sm text-gray-400";
        emptyCard.textContent = emptyText;
        item.appendChild(emptyCard);
        target.appendChild(item);
        return;
      }

      entries.forEach((entryItem) => {
        const isInlineEntry = (value) => Boolean(
          value
            && typeof value === "object"
            && !Array.isArray(value)
            && typeof value.href === "string"
            && value.href.trim()
            && value.title
            && typeof value.title === "object"
        );
        const resolveCandidate = typeof entryItem === "string"
          ? entryItem
          : (entryItem?.href || entryItem?.id || (typeof entryItem?.title === "string" ? entryItem.title : ""));
        const sourceEntry = resolveCandidate ? resolveProfileEntry(resolveCandidate) : null;
        const inlineEntry = !sourceEntry && isInlineEntry(entryItem) ? entryItem : null;
        const entry = sourceEntry || inlineEntry;
        const fallbackTitle = typeof entryItem === "string"
          ? entryItem
          : (entryItem?.title && typeof entryItem.title === "object"
            ? (entryItem.title[lang] || entryItem.title.de || entryItem.title.en || "")
            : String(entryItem?.title || entryItem?.id || entryItem?.href || "").trim());
        if (!entry && !fallbackTitle) return;
        if (!entry) {
          const fallbackItem = document.createElement("li");
          fallbackItem.className = "profile-tab-empty-item";
          const fallbackCard = document.createElement("article");
          fallbackCard.className = "content-library-card rounded-2xl p-4 space-y-1";
          const fallbackHeading = document.createElement("p");
          fallbackHeading.className = "text-base font-semibold text-white";
          fallbackHeading.textContent = fallbackTitle;
          const fallbackMeta = document.createElement("p");
          fallbackMeta.className = "text-xs text-gray-400";
          fallbackMeta.textContent = entryItem && typeof entryItem === "object" && entryItem.date
            ? `${formatDateForDisplay(entryItem.date)} | ${options.historySuffix || ""}`.trim()
            : tProfile("profile.card.detailsUnavailable", lang);
          fallbackCard.append(fallbackHeading, fallbackMeta);
          fallbackItem.appendChild(fallbackCard);
          target.appendChild(fallbackItem);
          return;
        }
        const resolvedTitle = entry.title?.[lang] || entry.title?.de || entry.title?.en || "";
        const resolvedDescription = entry.description?.[lang] || entry.description?.de || entry.description?.en || "";
        const resolvedTag = entry.tag?.[lang] || entry.tag?.de || entry.tag?.en || "";
        const metaParts = [...(entry.meta?.[lang] || entry.meta?.de || entry.meta?.en || [])];
        if (entryItem && typeof entryItem === "object" && entryItem.date && options.historySuffix) {
          metaParts.unshift(options.historySuffix);
          metaParts.unshift(formatDateForDisplay(entryItem.date));
        }

        const listItem = document.createElement("li");
        const article = document.createElement("article");
        article.className = "content-library-card profile-tab-entry-card rounded-2xl overflow-hidden group content-library-entry-card";
        const entryType = entry.type === "blog" ? "blog" : "course";
        article.setAttribute(entryType === "course" ? "data-course-category" : "data-blog-category", entry.categoryKey || "general");

        const media = document.createElement("div");
        media.className = "content-library-entry-media aspect-video";
        media.dataset.mediaImage = entry.mediaImage || "";
        const tagWrap = document.createElement("div");
        tagWrap.className = "absolute top-3 left-3";
        const tag = document.createElement("span");
        tag.className = "content-library-entry-tag bg-primary-500/15 text-primary-300 border border-primary-500/30";
        tag.textContent = resolvedTag || (entryType === "blog" ? "Blog" : "Kurs");
        tagWrap.appendChild(tag);
        media.appendChild(tagWrap);

        const content = document.createElement("div");
        content.className = "content-library-entry-content";
        const meta = document.createElement("div");
        meta.className = "content-library-entry-meta text-xs text-gray-400";
        metaParts.forEach((part, index) => {
          const piece = document.createElement("span");
          piece.textContent = part;
          meta.appendChild(piece);
          if (index < metaParts.length - 1) {
            const sep = document.createElement("span");
            sep.setAttribute("aria-hidden", "true");
            sep.textContent = "|";
            meta.appendChild(sep);
          }
        });

        const heading = document.createElement("h4");
        heading.className = "content-library-entry-title text-lg font-semibold text-white group-hover:text-primary-300 transition-colors";
        const titleLink = document.createElement("a");
        titleLink.href = entry.href || "#";
        titleLink.className = "inline-flex focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400";
        titleLink.textContent = resolvedTitle || fallbackTitle;
        heading.appendChild(titleLink);

        const description = document.createElement("p");
        description.className = "content-library-entry-description text-sm text-gray-400";
        description.textContent = resolvedDescription;

        const footer = document.createElement("div");
        footer.className = "content-library-entry-footer";
        const footerLink = document.createElement("a");
        footerLink.href = entry.href || "#";
        footerLink.className = "inline-flex items-center gap-2 text-sm font-semibold text-primary-300 hover:text-primary-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400";
        footerLink.textContent = entryType === "course" ? tProfile("profile.card.openCourse", lang) : tProfile("profile.card.openArticle", lang);
        const footerArrow = document.createElement("span");
        footerArrow.setAttribute("aria-hidden", "true");
        footerArrow.textContent = "->";
        footerLink.appendChild(footerArrow);
        footer.appendChild(footerLink);

        content.append(meta, heading, description, footer);
        article.append(media, content);
        listItem.appendChild(article);
        target.appendChild(listItem);
      });
    }

    function ensureProfileCardCarousel(target, lang) {
      if (!target || !target.classList.contains("profile-tab-card-list")) return;
      const panel = target.closest("[data-profile-tab-panel]");
      if (!panel) return;
      const existingState = profileCardCarouselStates.get(target);
      if (existingState) {
        existingState.prevButton.setAttribute("aria-label", tProfile("profile.cards.scrollPrevious", lang));
        existingState.nextButton.setAttribute("aria-label", tProfile("profile.cards.scrollNext", lang));
        existingState.update();
        return;
      }

      const controls = document.createElement("div");
      controls.className = "profile-tab-carousel-controls";

      const prevButton = document.createElement("button");
      prevButton.type = "button";
      prevButton.className = "profile-tab-carousel-control";
      prevButton.dataset.direction = "prev";
      prevButton.setAttribute("aria-label", tProfile("profile.cards.scrollPrevious", lang));
      prevButton.innerHTML = '<span aria-hidden="true">&larr;</span>';

      const nextButton = document.createElement("button");
      nextButton.type = "button";
      nextButton.className = "profile-tab-carousel-control";
      nextButton.dataset.direction = "next";
      nextButton.setAttribute("aria-label", tProfile("profile.cards.scrollNext", lang));
      nextButton.innerHTML = '<span aria-hidden="true">&rarr;</span>';

      const scrollByCard = (direction) => {
        const cardItems = [...target.querySelectorAll("li:not(.profile-tab-empty-item)")];
        if (!cardItems.length) return;
        const cardOffsets = cardItems.map((item) => item.offsetLeft);
        const currentScroll = target.scrollLeft;
        let activeIndex = 0;
        let bestDistance = Number.POSITIVE_INFINITY;
        cardOffsets.forEach((offset, index) => {
          const distance = Math.abs(offset - currentScroll);
          if (distance < bestDistance) {
            bestDistance = distance;
            activeIndex = index;
          }
        });
        const nextIndex = Math.max(0, Math.min(cardOffsets.length - 1, activeIndex + direction));
        const targetLeft = cardOffsets[nextIndex];
        const prefersReducedMotion = Boolean(window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches);
        target.scrollTo({ left: targetLeft, behavior: prefersReducedMotion ? "auto" : "smooth" });
      };

      prevButton.addEventListener("click", () => scrollByCard(-1));
      nextButton.addEventListener("click", () => scrollByCard(1));
      controls.append(prevButton, nextButton);
      panel.appendChild(controls);

      const update = () => {
        const maxScrollLeft = Math.max(0, target.scrollWidth - target.clientWidth);
        const canScroll = maxScrollLeft > 1;
        controls.hidden = !canScroll;
        if (!canScroll) return;
        const verticalCenter = target.offsetTop + target.clientHeight / 2;
        controls.style.top = `${verticalCenter}px`;
        prevButton.hidden = target.scrollLeft <= 1;
        nextButton.hidden = target.scrollLeft >= maxScrollLeft - 1;
      };

      target.addEventListener("scroll", update, { passive: true });
      window.addEventListener("resize", update);

      const state = { prevButton, nextButton, update };
      profileCardCarouselStates.set(target, state);
      update();
    }

    function refreshProfileCardCarousels() {
      [
        profileReadingHistory,
        profileCompletedCourses,
        profileFavoriteCourses,
        profileFavoriteBlog,
      ].forEach((list) => {
        const state = list ? profileCardCarouselStates.get(list) : null;
        if (state) state.update();
      });
    }

    function renderCertificates(target, entries, lang, emptyText) {
      if (!target) return;
      target.innerHTML = "";
      if (!entries.length) {
        const item = document.createElement("li");
        item.className = "text-gray-400";
        item.textContent = emptyText;
        target.appendChild(item);
        return;
      }

      const nextExpandedIds = new Set();
      entries.forEach((certificateEntry, index) => {
        const sourceEntry = typeof certificateEntry === "string"
          ? resolveProfileEntry(certificateEntry)
          : resolveProfileEntry(certificateEntry?.id || certificateEntry?.title);
        const fallbackEntryTitle = typeof certificateEntry === "string"
          ? String(certificateEntry || "").trim()
          : String(certificateEntry?.title || certificateEntry?.id || "").trim();
        if (!sourceEntry && !fallbackEntryTitle) return;
        const certKeySource = (sourceEntry?.id || sourceEntry?.title?.de || sourceEntry?.title?.en || fallbackEntryTitle || `entry-${index + 1}`)
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/^-+|-+$/g, "");
        const certId = `profile-certificate-${certKeySource || index + 1}`;
        const isExpanded = expandedCertificateIds.has(certId);
        if (isExpanded) nextExpandedIds.add(certId);

        const item = document.createElement("li");
        item.className = "profile-certificate-item rounded-xl";

        const toggle = document.createElement("button");
        toggle.type = "button";
        toggle.className = "profile-certificate-toggle";
        toggle.setAttribute("aria-expanded", String(isExpanded));
        toggle.setAttribute("aria-controls", `${certId}-content`);
        const resolvedCertificateTitle = sourceEntry ? (sourceEntry.title[lang] || sourceEntry.title.de) : fallbackEntryTitle;
        const resolvedCertificateDescription = sourceEntry
          ? (sourceEntry.description[lang] || sourceEntry.description.de)
          : tProfile("profile.card.detailsUnavailable", lang);
        toggle.setAttribute("aria-label", `${tProfile("profile.certificates.expand", lang)}: ${resolvedCertificateTitle}`);

        const heading = document.createElement("span");
        heading.className = "font-semibold text-white";
        heading.textContent = `${tProfile("profile.certificate.badge", lang)}: ${resolvedCertificateTitle}`;
        const arrow = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        arrow.classList.add("profile-certificate-arrow");
        arrow.setAttribute("viewBox", "0 0 20 20");
        arrow.setAttribute("fill", "none");
        arrow.setAttribute("stroke", "currentColor");
        arrow.setAttribute("aria-hidden", "true");
        const arrowPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
        arrowPath.setAttribute("stroke-linecap", "round");
        arrowPath.setAttribute("stroke-linejoin", "round");
        arrowPath.setAttribute("stroke-width", "2");
        arrowPath.setAttribute("d", "M7 5l6 5-6 5");
        arrow.appendChild(arrowPath);
        toggle.append(heading, arrow);

        const content = document.createElement("div");
        content.id = `${certId}-content`;
        content.className = "profile-certificate-content";
        content.setAttribute("aria-hidden", String(!isExpanded));
        const contentInner = document.createElement("div");
        contentInner.className = "profile-certificate-content-inner text-sm text-gray-300 space-y-2";
        const description = document.createElement("p");
        description.textContent = `${tProfile("profile.certificate.description", lang)}: ${resolvedCertificateDescription}`;
        const fromCourse = document.createElement("p");
        fromCourse.textContent = `${tProfile("profile.certificate.fromCourse", lang)}: ${resolvedCertificateTitle}`;
        const earnedOn = document.createElement("p");
        const resolvedEarnedOn = typeof certificateEntry === "object" && certificateEntry?.earnedOn
          ? formatDateForDisplay(certificateEntry.earnedOn)
          : formatDateForDisplay(index === 0 ? "2026-03-11" : index === 1 ? "2026-02-24" : "2026-02-03");
        earnedOn.textContent = `${tProfile("profile.certificate.earnedOn", lang)}: ${resolvedEarnedOn}`;
        const downloadButton = document.createElement("button");
        downloadButton.type = "button";
        downloadButton.className = "profile-fancy-cta mt-2 inline-flex min-h-[44px] items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold text-white transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400";
        downloadButton.textContent = tProfile("profile.certificate.download", lang);
        contentInner.append(description, fromCourse, earnedOn, downloadButton);
        content.appendChild(contentInner);

        toggle.addEventListener("click", () => {
          const nextExpanded = toggle.getAttribute("aria-expanded") !== "true";
          toggle.setAttribute("aria-expanded", String(nextExpanded));
          content.setAttribute("aria-hidden", String(!nextExpanded));
          if (nextExpanded) nextExpandedIds.add(certId);
          else nextExpandedIds.delete(certId);
          expandedCertificateIds = new Set(nextExpandedIds);
        });

        item.append(toggle, content);
        target.appendChild(item);
      });
      expandedCertificateIds = nextExpandedIds;
    }

    function activateProfileTab(tabId, shouldFocus = false) {
      if (!profileTabButtons.length || !profileTabPanels.length) return;
      let resolvedTabId = tabId;
      if (!profileTabButtons.some((button) => button.dataset.profileTabTarget === tabId)) {
        resolvedTabId = profileTabButtons[0]?.dataset.profileTabTarget || "";
      }
      activeProfileTabId = resolvedTabId;
      profileTabButtons.forEach((button) => {
        const isActive = button.dataset.profileTabTarget === resolvedTabId;
        button.setAttribute("aria-selected", String(isActive));
        button.setAttribute("tabindex", isActive ? "0" : "-1");
        if (shouldFocus && isActive) {
          button.focus();
        }
        if (isActive && typeof button.scrollIntoView === "function") {
          button.scrollIntoView({ block: "nearest", inline: "nearest" });
        }
      });
      profileTabPanels.forEach((panel) => {
        const isActive = panel.dataset.profileTabPanel === resolvedTabId;
        panel.classList.toggle("hidden", !isActive);
        panel.setAttribute("aria-hidden", String(!isActive));
      });
      if (typeof window?.requestAnimationFrame === "function") {
        window.requestAnimationFrame(() => refreshProfileCardCarousels());
      } else {
        refreshProfileCardCarousels();
      }
    }

    function activateSettingsTab(tabId, shouldFocus = false) {
      if (!settingsTabButtons.length || !settingsTabPanels.length) return;
      let resolvedTabId = tabId;
      if (!settingsTabButtons.some((button) => button.dataset.settingsTabTarget === tabId)) {
        resolvedTabId = settingsTabButtons[0]?.dataset.settingsTabTarget || "";
      }
      activeSettingsTabId = resolvedTabId;
      settingsTabButtons.forEach((button) => {
        const isActive = button.dataset.settingsTabTarget === resolvedTabId;
        button.setAttribute("aria-selected", String(isActive));
        button.setAttribute("tabindex", isActive ? "0" : "-1");
        if (shouldFocus && isActive) {
          button.focus();
        }
      });
      settingsTabPanels.forEach((panel) => {
        const isActive = panel.dataset.settingsTabPanel === resolvedTabId;
        panel.classList.toggle("hidden", !isActive);
        panel.setAttribute("aria-hidden", String(!isActive));
      });
    }

    function applyAvatarFallback(target, initials) {
      if (!target) return;
      target.style.backgroundImage = "";
      target.style.backgroundSize = "";
      target.style.backgroundPosition = "";
      target.style.imageRendering = "";
      target.style.color = "";
      target.textContent = initials;
    }

    function paintAvatarImage(targets, imageUrl, initials, options = {}) {
      targets.forEach((target) => {
        target.style.backgroundImage = `url("${imageUrl.replace(/"/g, "%22")}")`;
        target.style.backgroundSize = "cover";
        target.style.backgroundPosition = "center";
        target.style.imageRendering = options.pixelated ? "pixelated" : "";
        target.style.color = "transparent";
        target.textContent = initials;
      });
    }

    function renderAvatarPresetOptions(account, lang, options = {}) {
      if (!profileAvatarPresetList) return;
      const focusPresetId = Object.prototype.hasOwnProperty.call(options, "focusPresetId")
        ? sanitizeAvatarPreset(options.focusPresetId)
        : null;
      const baseAccount = account || authApi.getAccount();
      const selectedPreset = sanitizeAvatarPreset(selectedAvatarPreset || baseAccount?.avatarPreset);
      selectedAvatarPreset = selectedPreset;
      if (profileAvatarPresetInput) profileAvatarPresetInput.value = selectedPreset;
      profileAvatarPresetList.innerHTML = "";
      profileAvatarPresetList.setAttribute("aria-label", tProfile("profile.avatarSelection", lang));
      const presetOrder = ["", ...AVATAR_PRESET_IDS];
      presetOrder.forEach((presetId) => {
        const option = document.createElement("button");
        option.type = "button";
        option.className = "profile-avatar-option focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400";
        option.dataset.profileAvatarOption = presetId || "default";
        option.setAttribute("aria-pressed", String(selectedPreset === presetId));
        const labelKey = presetId ? `profile.avatarPreset.${presetId}` : "profile.avatarPreset.default";
        option.setAttribute("aria-label", tProfile(labelKey, lang));
        option.title = tProfile(labelKey, lang);
        const preview = document.createElement("span");
        preview.className = "profile-avatar-option-preview";
        if (!presetId) {
          preview.textContent = toInitials(baseAccount?.name);
          preview.style.display = "inline-flex";
          preview.style.alignItems = "center";
          preview.style.justifyContent = "center";
          preview.style.background = "rgba(168, 85, 247, 0.28)";
          preview.style.color = "#ffffff";
          preview.style.fontWeight = "700";
          preview.style.fontSize = "0.65rem";
        } else {
          preview.style.backgroundImage = `url("${buildAvatarPresetDataUrl(presetId)}")`;
        }
        option.appendChild(preview);
        option.addEventListener("click", () => {
          selectedAvatarPreset = presetId;
          if (profileAvatarPresetInput) profileAvatarPresetInput.value = presetId;
          renderAvatarPresetOptions(baseAccount, lang, { focusPresetId: presetId });
          renderAvatarTargets({ ...baseAccount, avatarPreset: presetId }, lang);
        });
        profileAvatarPresetList.appendChild(option);
      });
      if (focusPresetId !== null) {
        const focusedOption = profileAvatarPresetList.querySelector(
          `[data-profile-avatar-option="${focusPresetId || "default"}"]`
        );
        if (focusedOption instanceof HTMLButtonElement) focusedOption.focus();
      }
    }

    function renderAvatarTargets(account, lang) {
      const initials = toInitials(account.name);
      const presetUrl = buildAvatarPresetDataUrl(sanitizeAvatarPreset(account.avatarPreset));
      const safeAvatarUrl = sanitizeAvatarUrl(account.avatarUrl);
      const nextToken = ++avatarRenderToken;
      const targets = [profileHeroAvatar, profileAvatarPreview].filter(Boolean);

      targets.forEach((target) => applyAvatarFallback(target, initials));

      if (profileHeroAvatar) {
        profileHeroAvatar.setAttribute("aria-label", `${tProfile("profile.avatarAlt", lang)} ${account.name}`);
      }
      if (profileAvatarPreview) {
        profileAvatarPreview.setAttribute("aria-label", `${tProfile("profile.avatarPreviewAlt", lang)} ${account.name}`);
      }
      if (presetUrl) {
        paintAvatarImage(targets, presetUrl, initials, { pixelated: true });
        return;
      }
      if (!safeAvatarUrl) return;

      loadAvatarImage(
        safeAvatarUrl,
        (loadedUrl) => {
          if (avatarRenderToken !== nextToken) return;
          paintAvatarImage(targets, loadedUrl, initials);
        },
        () => {
          if (avatarRenderToken !== nextToken) return;
          targets.forEach((target) => applyAvatarFallback(target, initials));
        }
      );
    }

    function renderProfileDashboard(account) {
      const lang = resolveCurrentLang();
      applyProfileTranslations(container, lang);
      selectedAvatarPreset = sanitizeAvatarPreset(account?.avatarPreset);
      renderAvatarPresetOptions(account, lang);
      const dashboard = buildProfileDashboardData(account, lang);
      renderAvatarTargets(account, lang);
      if (profileHeroName) profileHeroName.textContent = account.name;
      if (profileLevel) profileLevel.textContent = String(dashboard.level);
      if (profileRank) profileRank.textContent = dashboard.rank;
      if (profileTotalXp) profileTotalXp.textContent = `${dashboard.totalXp} XP`;
      if (profileLevelProgress) profileLevelProgress.style.width = `${dashboard.xpPercent}%`;
      if (profileLevelProgressLabel) {
        profileLevelProgressLabel.textContent = tProfile("profile.progressToLevel", lang)
          .replace("{current}", String(dashboard.xpCurrent))
          .replace("{required}", String(dashboard.xpRequired))
          .replace("{next}", String(dashboard.nextLevel));
      }
      if (profileGamificationCurrentRank) {
        profileGamificationCurrentRank.textContent = dashboard.rank;
      }
      if (profileCompletedCount) profileCompletedCount.textContent = String(dashboard.completedCourses.length);
      if (profileFavoritesCount) profileFavoritesCount.textContent = String(dashboard.favoriteCourses.length + dashboard.favoriteBlog.length);
      if (profileCertificatesCount) profileCertificatesCount.textContent = String(dashboard.certificates.length);
      if (profileStreakCount) profileStreakCount.textContent = String(dashboard.streakDays);

      const emptyLabel = tProfile("profile.list.empty", lang);
      const historySuffix = tProfile("profile.history.dateSuffix", lang);
      renderCardList(profileReadingHistory, dashboard.readingHistory, lang, emptyLabel, { historySuffix });
      renderCardList(profileCompletedCourses, dashboard.completedCourses, lang, emptyLabel);
      renderCardList(profileFavoriteCourses, dashboard.favoriteCourses, lang, emptyLabel);
      renderCardList(profileFavoriteBlog, dashboard.favoriteBlog, lang, emptyLabel);
      renderCertificates(profileCertificatesList, dashboard.certificates, lang, emptyLabel);
      if (typeof window?.initCardClickNavigation === "function") {
        window.initCardClickNavigation();
      }
      activateProfileTab(activeProfileTabId);
    }

    function renderGamificationDetails(lang) {
      const safeLang = lang === "en" ? "en" : "de";
      if (profileGamificationRewards) {
        const rewardGroups = XP_REWARD_GROUPS[safeLang] || XP_REWARD_GROUPS.de;
        profileGamificationRewards.innerHTML = rewardGroups.map((group) => `
          <section class="space-y-2">
            <h4 class="text-sm font-semibold text-primary-200">${group.title}</h4>
            <ul class="space-y-1 text-sm text-gray-300">
              ${group.items.map((item) => `<li>${item}</li>`).join("")}
            </ul>
          </section>
        `).join("");
      }

      if (profileGamificationLevels) {
        profileGamificationLevels.innerHTML = LEVEL_UP_XP_REQUIREMENTS.map((requiredXp, index) => {
          const level = index + 1;
          if (safeLang === "en") {
            return `<li>Level ${level} -> ${level + 1}: ${requiredXp} XP</li>`;
          }
          return `<li>Level ${level} zu ${level + 1}: ${requiredXp} XP</li>`;
        }).join("");
      }

      if (profileGamificationRanks) {
        profileGamificationRanks.innerHTML = RANK_BRACKETS.map((rank) => {
          const label = Number.isFinite(rank.maxLevel)
            ? `Level ${rank.minLevel}-${rank.maxLevel}: ${rank.title}`
            : `Level ${rank.minLevel}+: ${rank.title}`;
          return `<li>${label}</li>`;
        }).join("");
      }
    }

    function closeGamificationDialog() {
      if (!profileGamificationDialog) return;
      profileGamificationDialog.classList.add("hidden");
      profileGamificationDialog.setAttribute("aria-hidden", "true");
      document.body.classList.remove("overflow-hidden");
      if (previousFocusElement && typeof previousFocusElement.focus === "function") {
        previousFocusElement.focus();
      }
    }

    function openGamificationDialog() {
      if (!profileGamificationDialog) return;
      const lang = resolveCurrentLang();
      applyProfileTranslations(profileGamificationDialog, lang);
      renderGamificationDetails(lang);
      previousFocusElement = document.activeElement;
      profileGamificationDialog.classList.remove("hidden");
      profileGamificationDialog.setAttribute("aria-hidden", "false");
      document.body.classList.add("overflow-hidden");
      if (profileGamificationDialogClose) {
        profileGamificationDialogClose.focus();
      }
    }

    if (profileTabButtons.length && profileTabPanels.length) {
      profileTabButtons.forEach((button) => {
        button.addEventListener("click", () => {
          activateProfileTab(button.dataset.profileTabTarget);
        });
        button.addEventListener("keydown", (event) => {
          if (!["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
          event.preventDefault();
          const currentIndex = profileTabButtons.indexOf(button);
          if (event.key === "Home") {
            activateProfileTab(profileTabButtons[0]?.dataset.profileTabTarget, true);
            return;
          }
          if (event.key === "End") {
            activateProfileTab(profileTabButtons[profileTabButtons.length - 1]?.dataset.profileTabTarget, true);
            return;
          }
          const direction = event.key === "ArrowDown" || event.key === "ArrowRight" ? 1 : -1;
          const nextIndex = (currentIndex + direction + profileTabButtons.length) % profileTabButtons.length;
          activateProfileTab(profileTabButtons[nextIndex]?.dataset.profileTabTarget, true);
        });
      });
      activateProfileTab(activeProfileTabId);
    }

    if (settingsTabButtons.length && settingsTabPanels.length) {
      settingsTabButtons.forEach((button) => {
        button.addEventListener("click", () => {
          activateSettingsTab(button.dataset.settingsTabTarget);
        });
        button.addEventListener("keydown", (event) => {
          if (!["ArrowUp", "ArrowDown", "Home", "End"].includes(event.key)) return;
          event.preventDefault();
          const currentIndex = settingsTabButtons.indexOf(button);
          if (event.key === "Home") {
            activateSettingsTab(settingsTabButtons[0]?.dataset.settingsTabTarget, true);
            return;
          }
          if (event.key === "End") {
            activateSettingsTab(settingsTabButtons[settingsTabButtons.length - 1]?.dataset.settingsTabTarget, true);
            return;
          }
          const direction = event.key === "ArrowDown" ? 1 : -1;
          const nextIndex = (currentIndex + direction + settingsTabButtons.length) % settingsTabButtons.length;
          activateSettingsTab(settingsTabButtons[nextIndex]?.dataset.settingsTabTarget, true);
        });
      });
      activateSettingsTab(activeSettingsTabId);
    }

    if (adminTabButtons.length && adminTabPanels.length) {
      adminTabButtons.forEach((button) => {
        button.addEventListener("click", () => {
          activateAdminTab(button.dataset.adminTabTarget);
        });
        button.addEventListener("keydown", (event) => {
          if (!["ArrowUp", "ArrowDown", "Home", "End"].includes(event.key)) return;
          const visibleButtons = getVisibleAdminTabButtons();
          if (!visibleButtons.length) return;
          event.preventDefault();
          const currentIndex = visibleButtons.indexOf(button);
          if (event.key === "Home") {
            activateAdminTab(visibleButtons[0]?.dataset.adminTabTarget, true);
            return;
          }
          if (event.key === "End") {
            activateAdminTab(visibleButtons[visibleButtons.length - 1]?.dataset.adminTabTarget, true);
            return;
          }
          const direction = event.key === "ArrowDown" ? 1 : -1;
          const nextIndex = (currentIndex + direction + visibleButtons.length) % visibleButtons.length;
          activateAdminTab(visibleButtons[nextIndex]?.dataset.adminTabTarget, true);
        });
      });
      syncAdminRoleScopedView();
      activateAdminTab(activeAdminTabId);
    }

    container.addEventListener("click", (event) => {
      const btn = event.target.closest("[data-admin-expand]");
      if (!btn || !container.contains(btn)) return;
      event.preventDefault();
      showExpandedOverview(btn.dataset.adminExpand);
    });

    container.addEventListener("click", (event) => {
      const btn = event.target.closest("[data-admin-org-link]");
      if (!btn || !container.contains(btn)) return;
      event.preventDefault();
      hideDetailView();
      activateAdminTab("platform-settings");
    });

    if (profileGamificationOpen) {
      profileGamificationOpen.addEventListener("click", openGamificationDialog);
    }
    if (profileGamificationDialogClose) {
      profileGamificationDialogClose.addEventListener("click", closeGamificationDialog);
    }
    if (profileGamificationDialog) {
      profileGamificationDialog.addEventListener("click", (event) => {
        if (event.target === profileGamificationDialog) {
          closeGamificationDialog();
        }
      });
      document.addEventListener("keydown", (event) => {
        const dialogOpen = !profileGamificationDialog.classList.contains("hidden");
        if (!dialogOpen) return;
        if (event.key === "Escape") {
          closeGamificationDialog();
          return;
        }
        if (event.key !== "Tab") return;
        const focusableElements = [...profileGamificationDialog.querySelectorAll(
          "button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])"
        )].filter((node) => !node.hasAttribute("disabled") && node.getAttribute("aria-hidden") !== "true");
        if (!focusableElements.length) return;
        const first = focusableElements[0];
        const last = focusableElements[focusableElements.length - 1];
        const active = document.activeElement;
        if (!event.shiftKey && active === last) {
          event.preventDefault();
          first.focus();
          return;
        }
        if (event.shiftKey && active === first) {
          event.preventDefault();
          last.focus();
        }
      });
    }

    if (settingsActionControls.length) {
      settingsActionControls.forEach((control) => {
        const eventType = control.matches("input[type='checkbox']") ? "change" : "click";
        control.addEventListener(eventType, () => {
          const lang = resolveCurrentLang();
          setStatus(settingsStatus, tProfile("settings.status.saved", lang), "success");
        });
      });
    }

    function fillAccountFields() {
      const account = authApi.getAccount();
      if (profileName) profileName.value = account.name;
      if (profileEmail) profileEmail.value = account.email;
      selectedAvatarPreset = sanitizeAvatarPreset(account.avatarPreset);
      if (profileAvatarPresetInput) profileAvatarPresetInput.value = selectedAvatarPreset;
      if (loginEmail) loginEmail.value = account.email;
      const isDefaultTestAccount =
        account.email === TEST_ACCOUNT.email &&
        account.name === TEST_ACCOUNT.name &&
        !account.avatarUrl &&
        !account.avatarPreset;
      if (loginPassword && isDefaultTestAccount) {
        loginPassword.value = TEST_ACCOUNT.password;
      }
      renderProfileDashboard(account);
    }

    function updateStateBadge() {
      if (!authStateBadge) return;
      authStateBadge.textContent = "";
      authStateBadge.classList.add("hidden");
    }

    function activateAdminTab(nextTabId, shouldFocus = false) {
      if (adminDetailView) {
        adminDetailView.classList.add("hidden");
        adminDetailView.innerHTML = "";
      }
      const visibleButtons = getVisibleAdminTabButtons();
      const visiblePanels = getVisibleAdminTabPanels();
      if (!visibleButtons.length || !visiblePanels.length) return;
      const candidate = visibleButtons.find((button) => button.dataset.adminTabTarget === nextTabId);
      const resolvedTabId = candidate?.dataset.adminTabTarget || visibleButtons[0]?.dataset.adminTabTarget || "overview";
      activeAdminTabId = resolvedTabId;
      adminTabButtons.forEach((button) => {
        const isActive = button.dataset.adminTabTarget === resolvedTabId;
        button.setAttribute("aria-selected", String(isActive));
        button.setAttribute("tabindex", isActive ? "0" : "-1");
        if (isActive && shouldFocus) {
          button.focus();
        }
      });
      adminTabPanels.forEach((panel) => {
        const isVisible = visiblePanels.includes(panel);
        const isActive = isVisible && panel.dataset.adminTabPanel === resolvedTabId;
        panel.classList.toggle("hidden", !isActive);
        panel.setAttribute("aria-hidden", String(!isActive));
      });
      if (adminOverviewHeader) {
        adminOverviewHeader.classList.toggle("hidden", resolvedTabId !== "overview");
      }
      if (resolvedTabId === "enrollments" && adminHelper) {
        adminHelper.classList.toggle("hidden", Boolean(selectedAdminUserId));
      }
      syncAdminPermissionState();
    }

    function renderRoleCapabilities(role) {
      if (!adminRoleCapabilities) return;
      const lang = resolveCurrentLang();
      const safeLang = lang === "en" ? "en" : "de";
      const safeRole = normalizeAdminRole(role);
      const capabilities = ADMIN_ROLE_CAPABILITIES[safeLang]?.[safeRole] || ADMIN_ROLE_CAPABILITIES.de[safeRole] || [];
      adminRoleCapabilities.innerHTML = "";
      if (!capabilities.length) {
        const item = document.createElement("li");
        item.className = "text-gray-400";
        item.textContent = tProfile("admin.status.none", lang);
        adminRoleCapabilities.appendChild(item);
        return;
      }
      capabilities.forEach((entry) => {
        const item = document.createElement("li");
        item.className = "text-gray-300";
        item.textContent = entry;
        adminRoleCapabilities.appendChild(item);
      });
    }

    function renderAdminRoleOptions(selectNode, selectedRole) {
      if (!selectNode) return;
      const lang = resolveCurrentLang();
      const safeSelectedRole = normalizeAdminRole(selectedRole);
      selectNode.innerHTML = "";
      ADMIN_USER_ROLES.forEach((roleId) => {
        const option = document.createElement("option");
        option.value = roleId;
        option.textContent = getAdminRoleLabel(roleId, lang);
        option.selected = roleId === safeSelectedRole;
        selectNode.appendChild(option);
      });
    }

    function renderLoginTestUsers() {
      if (!loginTestUsersList) return;
      const lang = resolveCurrentLang();
      const users = authApi.getLoginTestUsers?.() || [];
      loginTestUsersList.innerHTML = "";
      users.forEach((user) => {
        const item = document.createElement("li");
        item.className = "text-xs text-gray-200";
        item.textContent = `${user.email} (${getAdminRoleLabel(user.role, lang)})`;
        loginTestUsersList.appendChild(item);
      });
      if (loginTestUsersPassword) {
        loginTestUsersPassword.textContent = MOCK_TEAM_LOGIN_PASSWORD;
      }
    }

    function renderAdminSelectionContext(user) {
      const lang = resolveCurrentLang();
      const role = getCurrentAdminRole();
      const selectedLabelKey = role === "owner"
        ? "admin.users.selectedUserLabel"
        : "teamleader.users.selectedUserLabel";
      const detailText = user
        ? `${user.name} (${user.email})`
        : tProfile("admin.status.noSelection", lang);
      if (adminSelectedLabel) {
        adminSelectedLabel.textContent = detailText;
      }
      if (adminSelectedContextLabel) {
        adminSelectedContextLabel.textContent = tProfile(selectedLabelKey, lang);
      }
      if (adminSelectedContextValue) {
        adminSelectedContextValue.textContent = detailText;
      }
      if (adminSelectedContext) {
        adminSelectedContext.setAttribute(
          "aria-label",
          `${tProfile(selectedLabelKey, lang)}: ${detailText}`
        );
      }
    }

    function renderAdminCourseList(target, courses, selectedUserId, isEnrolledList) {
      if (!target) return;
      const lang = resolveCurrentLang();
      target.innerHTML = "";
      if (!courses.length) {
        const item = document.createElement("li");
        item.textContent = tProfile("admin.status.none", lang);
        target.appendChild(item);
        return;
      }
      courses.forEach((courseName) => {
        const item = document.createElement("li");
        item.className = "flex items-center gap-2";
        const button = document.createElement("button");
        button.type = "button";
        button.dataset.adminCourseToggle = courseName;
        button.dataset.adminCourseEnrolled = String(Boolean(isEnrolledList));
        button.className =
          "flex-1 text-left rounded-md px-2 py-1 text-sm text-gray-300 hover:text-white hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400";
        const actionLabel = lang === "en"
          ? (isEnrolledList ? "Remove" : "Assign")
          : (isEnrolledList ? "Entfernen" : "Einschreiben");
        button.textContent = `${actionLabel}: ${courseName}`;
        button.setAttribute("aria-label", `${actionLabel} ${courseName}`);
        button.disabled = !canManageEnrollments() || !selectedUserId;
        button.setAttribute("aria-disabled", String(button.disabled));
        button.addEventListener("click", () => {
          if (button.disabled) return;
          setAdminControlsPending(true);
          setStatus(adminStatus, tProfile("admin.status.pending", lang), "");
          try {
            const result = authApi.updateAdminEnrollment({
              userId: selectedUserId,
              courseName,
              enrolled: !isEnrolledList,
            });
            if (!result.ok) {
              setStatus(adminStatus, statusMessageFor("admin", result.error), "error");
              return;
            }
            setStatus(adminStatus, tProfile("admin.status.enrollmentSaved", lang), "success");
            renderAdminDashboard(selectedUserId);
          } finally {
            setAdminControlsPending(false);
          }
        });
        const slug = ADMIN_COURSE_SLUGS[courseName];
        if (slug) {
          const openLink = document.createElement("a");
          openLink.href = `courses/${slug}/`;
          openLink.className =
            "inline-flex items-center rounded-md border border-white/15 bg-white/5 px-2 py-1 text-xs font-semibold text-primary-200 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400";
          openLink.textContent = tProfile("admin.enrollments.openCourse", lang);
          item.appendChild(openLink);
        }
        item.appendChild(button);
        target.appendChild(item);
      });
    }

    function getRelativeTime(isoDate, lang) {
      if (!isoDate) return "";
      const diff = Date.now() - new Date(isoDate).getTime();
      const mins = Math.floor(diff / 60000);
      const hours = Math.floor(diff / 3600000);
      const days = Math.floor(diff / 86400000);
      if (lang === "en") {
        if (mins < 60) return `${mins} min ago`;
        if (hours < 24) return `${hours} hrs ago`;
        return `${days} days ago`;
      }
      if (mins < 60) return `vor ${mins} Min.`;
      if (hours < 24) return `vor ${hours} Std.`;
      return `vor ${days} Tagen`;
    }

    function buildTypeBadge(type, lang) {
      const safeLang = lang === "en" ? "en" : "de";
      const label = ADMIN_REQUEST_TYPE_LABELS[safeLang]?.[type] || type;
      const colors = ADMIN_REQUEST_TYPE_COLORS[type] || ADMIN_REQUEST_TYPE_COLORS.course_access;
      const badge = document.createElement("span");
      badge.className = "inline-flex px-2 py-0.5 rounded-full text-xs font-bold whitespace-nowrap";
      badge.style.backgroundColor = colors.bg;
      badge.style.border = `1px solid ${colors.border}`;
      badge.style.color = colors.text;
      badge.textContent = label;
      return badge;
    }

    function getRequestDescription(req, lang) {
      if (req.description) {
        const safeLang = lang === "en" ? "en" : "de";
        return typeof req.description === "object" ? (req.description[safeLang] || req.description.de || "") : String(req.description);
      }
      return req.courseName || "";
    }

    function renderAdminNotifications() {
      const lang = resolveCurrentLang();
      const safeLang = lang === "en" ? "en" : "de";
      const requests = authApi.getAdminEnrollmentRequests?.() || [];
      const pending = requests.filter((r) => r.status === "pending").sort((a, b) => String(b.createdAt || "").localeCompare(String(a.createdAt || "")));
      const resolved = requests.filter((r) => r.status !== "pending").sort((a, b) => String(b.resolvedAt || "").localeCompare(String(a.resolvedAt || "")));

      // Nav badge + summary
      if (adminNavRequestCount) adminNavRequestCount.textContent = String(pending.length);
      if (adminRequestsSummary) {
        adminRequestsSummary.textContent = safeLang === "en"
          ? `${pending.length} open · ${resolved.length} resolved`
          : `${pending.length} offen · ${resolved.length} abgeschlossen`;
      }

      // Open requests as cards
      if (adminNotificationsList) {
        adminNotificationsList.innerHTML = "";
        if (!pending.length) {
          const li = document.createElement("li");
          li.className = "text-sm text-gray-400";
          li.textContent = safeLang === "en" ? "No open requests" : "Keine offenen Anfragen";
          adminNotificationsList.appendChild(li);
        } else {
          pending.forEach((req) => {
            const li = document.createElement("li");
            li.className = "auth-mockup-panel rounded-2xl p-4 flex items-start gap-4";

            const avatar = document.createElement("span");
            avatar.className = "flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold text-white";
            avatar.style.backgroundColor = getInitialsColor(req.userName || "?");
            avatar.textContent = getUserInitials(req.userName || "?");

            const body = document.createElement("div");
            body.className = "flex-1 min-w-0 space-y-1";
            const topRow = document.createElement("div");
            topRow.className = "flex items-center gap-2 flex-wrap";
            const nameEl = document.createElement("span");
            nameEl.className = "text-sm font-bold text-white";
            nameEl.textContent = req.userName || req.userId;
            topRow.appendChild(nameEl);
            topRow.appendChild(buildTypeBadge(req.type || "course_access", lang));
            const descEl = document.createElement("p");
            descEl.className = "text-sm text-gray-300";
            descEl.textContent = getRequestDescription(req, lang);
            const metaEl = document.createElement("p");
            metaEl.className = "text-xs text-gray-500";
            metaEl.textContent = `${req.email || ""} · ${getRelativeTime(req.createdAt, safeLang)}`;
            body.appendChild(topRow);
            body.appendChild(descEl);
            body.appendChild(metaEl);

            const actions = document.createElement("div");
            actions.className = "flex-shrink-0 flex flex-col gap-2 sm:flex-row";
            const approveBtn = document.createElement("button");
            approveBtn.type = "button";
            approveBtn.className = "rounded-lg border border-green-500/40 bg-green-500/20 px-4 py-2 text-sm font-bold text-green-300 hover:bg-green-500/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400";
            approveBtn.textContent = safeLang === "en" ? "Approve" : "Genehmigen";
            approveBtn.addEventListener("click", () => showRequestConfirmModal(req, true, lang));
            const rejectBtn = document.createElement("button");
            rejectBtn.type = "button";
            rejectBtn.className = "rounded-lg border border-red-500/40 bg-red-500/20 px-4 py-2 text-sm font-bold text-red-300 hover:bg-red-500/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400";
            rejectBtn.textContent = safeLang === "en" ? "Reject" : "Ablehnen";
            rejectBtn.addEventListener("click", () => showRequestConfirmModal(req, false, lang));
            actions.appendChild(approveBtn);
            actions.appendChild(rejectBtn);

            li.appendChild(avatar);
            li.appendChild(body);
            li.appendChild(actions);
            adminNotificationsList.appendChild(li);
          });
        }
      }

      // Resolved table
      renderResolvedTable(resolved, lang);
    }

    function renderResolvedTable(resolved, lang) {
      if (!adminResolvedTable) return;
      const safeLang = lang === "en" ? "en" : "de";
      const str = ADMIN_UI_STRINGS[safeLang];
      const typeLabelOf = (r) => ADMIN_REQUEST_TYPE_LABELS[safeLang]?.[r.type] || r.type;
      const resStatusLabelOf = (r) => r.status === "approved" ? (safeLang === "en" ? "Approved" : "Genehmigt") : (safeLang === "en" ? "Rejected" : "Abgelehnt");
      const allTypes = [...new Set(resolved.map(typeLabelOf))];
      const allResStatuses = [...new Set(resolved.map(resStatusLabelOf))];
      const typePillStyles = {};
      allTypes.forEach((lbl) => {
        const typeKey = Object.entries(ADMIN_REQUEST_TYPE_LABELS[safeLang] || {}).find(([, v]) => v === lbl)?.[0];
        if (typeKey && ADMIN_REQUEST_TYPE_COLORS[typeKey]) typePillStyles[lbl] = ADMIN_REQUEST_TYPE_COLORS[typeKey];
      });
      const resStatusPillStyles = {
        [safeLang === "en" ? "Approved" : "Genehmigt"]: PILL_STYLE_GREEN,
        [safeLang === "en" ? "Rejected" : "Abgelehnt"]: PILL_STYLE_RED,
      };
      const typeCounts = buildCountMap(resolved, typeLabelOf);
      const resStatusCounts = buildCountMap(resolved, resStatusLabelOf);

      if (adminResolvedThead) {
        adminResolvedThead.innerHTML = "";
        adminResolvedThead.appendChild(createFilterableHeader([
          { key: "user", label: str["table.user"] || "Nutzer", filterable: true },
          { key: "type", label: str["table.type"] || "Typ", filterable: true, options: allTypes, pillStyles: typePillStyles, counts: typeCounts },
          { key: "description", label: str["table.description"] || "Beschreibung", filterable: true },
          { key: "status", label: "Status", filterable: true, options: allResStatuses, pillStyles: resStatusPillStyles, counts: resStatusCounts },
          { key: "date", label: str["table.resolvedAt"] || "Entschieden am", filterable: true, type: "date" },
        ], resolvedColFilters, () => renderResolvedTable(resolved, lang), resolvedSortState, () => renderResolvedTable(resolved, lang)));
      }

      const resolvedGetters = {
        user: (r) => r.userName || "",
        type: (r) => ADMIN_REQUEST_TYPE_LABELS[safeLang]?.[r.type] || r.type,
        description: (r) => getRequestDescription(r, lang),
        status: (r) => r.status === "approved" ? (safeLang === "en" ? "Approved" : "Genehmigt") : (safeLang === "en" ? "Rejected" : "Abgelehnt"),
        date: { type: "date", getValue: (r) => r.resolvedAt || "" },
      };
      let filtered = applyColumnFilters(resolved, resolvedColFilters, resolvedGetters);
      filtered = applySort(filtered, resolvedSortState, resolvedGetters);

      adminResolvedTable.innerHTML = "";
      if (!filtered.length) {
        const row = document.createElement("tr");
        const cell = document.createElement("td");
        cell.colSpan = 5;
        cell.className = "px-4 py-6 text-sm text-gray-400";
        cell.textContent = safeLang === "en" ? "No resolved requests" : "Keine abgeschlossenen Anfragen";
        row.appendChild(cell);
        adminResolvedTable.appendChild(row);
        return;
      }
      renderLazyRows(adminResolvedTable, filtered, (req) => {
        const row = document.createElement("tr");
        row.className = "border-t border-white/10 hover:bg-white/5 transition-colors";
        const userCell = document.createElement("td");
        userCell.className = "px-4 py-3";
        userCell.appendChild(buildUserCellContent(req.userName || req.userId, req.email));
        const typeCell = document.createElement("td");
        typeCell.className = "px-4 py-3";
        typeCell.appendChild(buildTypeBadge(req.type || "course_access", lang));
        const descCell = document.createElement("td");
        descCell.className = "px-4 py-3 text-sm text-gray-300";
        descCell.textContent = getRequestDescription(req, lang);
        const statusCell = document.createElement("td");
        statusCell.className = "px-4 py-3";
        const reqLabel = req.status === "approved"
          ? (safeLang === "en" ? "Approved" : "Genehmigt")
          : (safeLang === "en" ? "Rejected" : "Abgelehnt");
        const statusBadge = buildStatusBadge(
          reqLabel,
          req.status === "approved" ? PILL_STYLE_GREEN : PILL_STYLE_RED
        );
        statusCell.appendChild(statusBadge);
        const dateCell = document.createElement("td");
        dateCell.className = "px-4 py-3 text-sm text-gray-400 whitespace-nowrap";
        dateCell.textContent = req.resolvedAt ? new Date(req.resolvedAt).toLocaleDateString(safeLang, { day: "2-digit", month: "short", year: "numeric" }) : "—";
        row.appendChild(userCell);
        row.appendChild(typeCell);
        row.appendChild(descCell);
        row.appendChild(statusCell);
        row.appendChild(dateCell);
        return row;
      });
    }

    function getGreeting(lang) {
      const hour = new Date().getHours();
      if (hour < 12) return lang === "en" ? "Good morning" : "Guten Morgen";
      if (hour < 18) return lang === "en" ? "Good afternoon" : "Guten Tag";
      return lang === "en" ? "Good evening" : "Guten Abend";
    }

    function getUserInitials(name) {
      return name.split(/\s+/).map((p) => p[0]).join("").toUpperCase().slice(0, 2);
    }

    function getInitialsColor(name) {
      const colors = ["#a855f7", "#ec4899", "#6366f1", "#14b8a6", "#f59e0b", "#ef4444", "#8b5cf6", "#06b6d4"];
      let hash = 0;
      for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
      return colors[Math.abs(hash) % colors.length];
    }

    function buildUserCellContent(name, email) {
      const wrap = document.createElement("div");
      wrap.className = "flex items-center gap-3";
      const av = document.createElement("span");
      av.className = "flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white";
      av.style.backgroundColor = getInitialsColor(name || "?");
      av.textContent = getUserInitials(name || "?");
      const info = document.createElement("div");
      info.className = "min-w-0 flex flex-col leading-tight";
      const nm = document.createElement("span");
      nm.className = "text-sm font-semibold text-white truncate";
      applyTruncatedName(nm, name || "—");
      info.appendChild(nm);
      if (email) {
        const em = document.createElement("span");
        em.className = "text-xs text-gray-400 truncate";
        em.textContent = email;
        info.appendChild(em);
      }
      wrap.appendChild(av);
      wrap.appendChild(info);
      return wrap;
    }

    function applyTruncatedName(el, name, max = 20) {
      const full = String(name || "");
      if (full.length > max) {
        el.textContent = `${full.slice(0, max)}…`;
        el.title = full;
      } else {
        el.textContent = full;
      }
    }

    const ADMIN_UI_STRINGS = Object.freeze({
      de: {
        "nav.overview": "Übersicht",
        "nav.people": "Personen",
        "nav.access": "Zugriff",
        "nav.learning": "Lernen",
        "nav.management": "Verwaltung",
        "btn.inviteUser": "Nutzer einladen",
        "btn.export": "Export",
        "kpi.openRequests": "Offene Anfragen",
        "dashboard.openRequests": "Offene Anfragen",
        "dashboard.recentActivity": "Letzte Aktivität",
        "dashboard.courseProgress": "Kursfortschritt",
        "dashboard.showAll": "Alle anzeigen",
        "requests.openTitle": "Offene Anfragen",
        "requests.resolvedTitle": "Zuletzt abgeschlossen",
        "table.user": "Nutzer",
        "table.type": "Typ",
        "table.description": "Beschreibung",
        "table.status": "Status",
        "table.resolvedAt": "Entschieden am",
        "users.role": "Rolle",
        "users.team": "Team",
        "users.lastLogin": "Letzter Login",
        "users.actions": "Aktionen",
        "users.search": "Nutzer suchen\u2026",
        "users.all": "Alle",
        "users.active": "Aktiv",
        "users.inactive": "Inaktiv",
        "users.invited": "Eingeladen",
        "users.edit": "Bearbeiten",
        "users.reactivate": "Reaktivieren",
        "teams.createTeam": "Team erstellen",
        "teams.membersTitle": "Mitglieder-\u00DCbersicht",
        "teams.addMember": "Mitglied hinzuf\u00FCgen",
        "teams.members": "Mitglieder",
        "teams.quizzes": "Quizzes",
        "teams.certs": "Zert.",
        "teams.completion": "Abschlussrate",
        "teams.active": "Aktiv",
        "teams.inactive": "Inaktiv",
        "teams.total": "gesamt",
        "courses.create": "Kurs erstellen",
        "courses.active": "Aktiv",
        "courses.draft": "Entwurf",
        "courses.archived": "Archiviert",
        "courses.lessons": "Lektionen",
        "courses.min": "Min.",
        "courses.completion": "Abschlussrate",
        "courses.enrolled": "Eingeschrieben",
        "courses.completedBy": "Abgeschlossen von",
        "courses.publish": "Ver\u00F6ffentlichen",
        "courses.reactivate": "Reaktivieren",
        "courses.draftNote": "Entwurf \u2014 noch nicht ver\u00F6ffentlicht",
        "courses.archivedNote": "Abschlussrate (archiviert)",
        "blog.create": "Eintrag erstellen",
        "blog.entriesTitle": "Eintr\u00E4ge",
        "blog.placeholderTitle": "Blog-Management (Mockup)",
        "blog.placeholderHint": "Hier kommen Listen, Filter und Status (Entwurf/Ver\u00F6ffentlicht) hin.",
        "blog.createTitle": "Neuer Eintrag",
        "blog.title": "Titel",
        "blog.status": "Status",
        "blog.draft": "Entwurf",
        "blog.published": "Ver\u00F6ffentlicht",
        "platform.edit": "Bearbeiten",
        "platform.cancel": "Abbrechen",
        "platform.save": "\u00C4nderungen speichern",
        "platform.orgTitle": "Organisation",
        "platform.orgName": "Organisationsname",
        "platform.orgNameHint": "\u00D6ffentlich sichtbar",
        "platform.domainHint": "Nutzer-E-Mail-Endung",
        "platform.language": "Sprache",
        "platform.securityTitle": "Sicherheit",
        "platform.2fa": "Zwei-Faktor-Authentifizierung",
        "platform.2faHint": "F\u00FCr alle Nutzer verpflichtend",
        "platform.sessionHint": "Automatische Abmeldung",
        "platform.passwordPolicy": "Passwort-Richtlinie",
        "platform.passwordHint": "Mindestanforderungen",
        "platform.notificationsTitle": "Benachrichtigungen",
        "platform.notifRequests": "Neue Anfragen per E-Mail",
        "platform.notifInactive": "Inaktive Nutzer-Alerts",
        "platform.notifCompletion": "Kurs-Abschluss Benachrichtigung",
        "platform.notifWeekly": "W\u00F6chentlicher Report",
        "platform.currentPlan": "Aktueller Plan",
        "platform.userLimit": "Nutzer-Limit",
        "platform.courseLimit": "Kurse",
        "platform.courseLimitValue": "4 / unbegrenzt",
        "platform.upgradePlan": "Plan upgraden",
        "platform.dangerTitle": "Gefahrenzone",
        "platform.dangerText": "Diese Aktionen sind unwiderruflich. Alle Daten werden dauerhaft gel\u00F6scht.",
        "platform.deleteOrg": "Organisation l\u00F6schen",
        "reports.period": "Berichtszeitraum: M\u00E4rz \u2013 April 2026",
        "reports.last30": "Letzte 30 Tage",
        "reports.completionRate": "\u00D8 Abschlussrate",
        "reports.activeLearners": "Aktive Lernende",
        "reports.newCerts": "Neue Zertifikate",
        "reports.overdue": "\u00DCberf\u00E4llige Zuweisungen",
        "reports.vsLastMonth": "vs. Vormonat",
        "reports.of": "von",
        "reports.total": "gesamt",
        "reports.thisMonth": "dieser Monat",
        "reports.completionByCourse": "Abschlussrate nach Kurs",
        "reports.activityByTeam": "Aktivit\u00E4t nach Team",
        "reports.topLearners": "Top Lernende",
        "reports.certs": "Zert.",
        "enrollments.title": "Kurszuweisungen",
        "enrollments.create": "Zuweisung erstellen",
        "enrollments.course": "Kurs",
        "enrollments.dueAt": "F\u00E4llig am",
        "enrollments.progress": "Fortschritt",
        "enrollments.completed": "Abgeschlossen",
        "enrollments.inProgress": "In Bearbeitung",
        "enrollments.paused": "Pausiert",
        "enrollments.overdue": "\u00DCberf\u00E4llig",
        "enrollments.allFilter": "Alle",
        "enrollments.activeFilter": "Aktiv",
        "enrollments.assignments": "Zuweisungen",
        "enrollments.overdueShort": "\u00FCberf\u00E4llig",
      },
      en: {
        "nav.overview": "Overview",
        "nav.people": "People",
        "nav.access": "Access",
        "nav.learning": "Learning",
        "nav.management": "Management",
        "btn.inviteUser": "Invite user",
        "btn.export": "Export",
        "kpi.openRequests": "Open requests",
        "dashboard.openRequests": "Open requests",
        "dashboard.recentActivity": "Recent activity",
        "dashboard.courseProgress": "Course progress",
        "dashboard.showAll": "Show all",
        "requests.openTitle": "Open requests",
        "requests.resolvedTitle": "Recently resolved",
        "table.user": "User",
        "table.type": "Type",
        "table.description": "Description",
        "table.status": "Status",
        "table.resolvedAt": "Resolved at",
        "users.role": "Role",
        "users.team": "Team",
        "users.lastLogin": "Last login",
        "users.actions": "Actions",
        "users.search": "Search users\u2026",
        "users.all": "All",
        "users.active": "Active",
        "users.inactive": "Inactive",
        "users.invited": "Invited",
        "users.edit": "Edit",
        "users.reactivate": "Reactivate",
        "teams.createTeam": "Create team",
        "teams.membersTitle": "Members overview",
        "teams.addMember": "Add member",
        "teams.members": "Members",
        "teams.quizzes": "Quizzes",
        "teams.certs": "Certs",
        "teams.completion": "Completion",
        "teams.active": "Active",
        "teams.inactive": "Inactive",
        "teams.total": "total",
        "courses.create": "Create course",
        "courses.active": "Active",
        "courses.draft": "Draft",
        "courses.archived": "Archived",
        "courses.lessons": "lessons",
        "courses.min": "min",
        "courses.completion": "Completion rate",
        "courses.enrolled": "Enrolled",
        "courses.completedBy": "Completed by",
        "courses.publish": "Publish",
        "courses.reactivate": "Reactivate",
        "courses.draftNote": "Draft \u2014 not yet published",
        "courses.archivedNote": "Completion rate (archived)",
        "blog.create": "Create entry",
        "blog.entriesTitle": "Entries",
        "blog.placeholderTitle": "Blog management (mockup)",
        "blog.placeholderHint": "Lists, filters, and status (draft/published) go here.",
        "blog.createTitle": "New entry",
        "blog.title": "Title",
        "blog.status": "Status",
        "blog.draft": "Draft",
        "blog.published": "Published",
        "platform.edit": "Edit",
        "platform.cancel": "Cancel",
        "platform.save": "Save changes",
        "platform.orgTitle": "Organization",
        "platform.orgName": "Organization name",
        "platform.orgNameHint": "Publicly visible",
        "platform.domainHint": "User email domain",
        "platform.language": "Language",
        "platform.securityTitle": "Security",
        "platform.2fa": "Two-factor authentication",
        "platform.2faHint": "Required for all users",
        "platform.sessionHint": "Automatic logout",
        "platform.passwordPolicy": "Password policy",
        "platform.passwordHint": "Minimum requirements",
        "platform.notificationsTitle": "Notifications",
        "platform.notifRequests": "New requests via email",
        "platform.notifInactive": "Inactive user alerts",
        "platform.notifCompletion": "Course completion notification",
        "platform.notifWeekly": "Weekly report",
        "platform.currentPlan": "Current plan",
        "platform.userLimit": "User limit",
        "platform.courseLimit": "Courses",
        "platform.courseLimitValue": "4 / unlimited",
        "platform.upgradePlan": "Upgrade plan",
        "platform.dangerTitle": "Danger zone",
        "platform.dangerText": "These actions are irreversible. All data will be permanently deleted.",
        "platform.deleteOrg": "Delete organization",
        "reports.period": "Reporting period: March \u2013 April 2026",
        "reports.last30": "Last 30 days",
        "reports.completionRate": "\u00D8 Completion rate",
        "reports.activeLearners": "Active learners",
        "reports.newCerts": "New certificates",
        "reports.overdue": "Overdue assignments",
        "reports.vsLastMonth": "vs. last month",
        "reports.of": "of",
        "reports.total": "total",
        "reports.thisMonth": "this month",
        "reports.completionByCourse": "Completion by course",
        "reports.activityByTeam": "Activity by team",
        "reports.topLearners": "Top learners",
        "reports.certs": "Certs",
        "enrollments.title": "Course assignments",
        "enrollments.create": "Create assignment",
        "enrollments.course": "Course",
        "enrollments.dueAt": "Due at",
        "enrollments.progress": "Progress",
        "enrollments.completed": "Completed",
        "enrollments.inProgress": "In progress",
        "enrollments.paused": "Paused",
        "enrollments.overdue": "Overdue",
        "enrollments.allFilter": "All",
        "enrollments.activeFilter": "Active",
        "enrollments.assignments": "assignments",
        "enrollments.overdueShort": "overdue",
      },
    });

    function applyAdminI18n(lang) {
      const safeLang = lang === "en" ? "en" : "de";
      const strings = ADMIN_UI_STRINGS[safeLang];
      container.querySelectorAll("[data-admin-i18n]").forEach((el) => {
        const key = el.getAttribute("data-admin-i18n");
        if (strings[key] != null) el.textContent = strings[key];
      });
    }

    function renderDashboardGreeting(lang) {
      if (!adminGreeting) return;
      const greeting = getGreeting(lang);
      const sessionName = String(authApi.getAccount?.().name || "").split(" ")[0] || "Admin";
      adminGreeting.textContent = `${greeting}, ${sessionName}`;
    }

    function renderDashboardKpiTrends(lang) {
      const safeLang = lang === "en" ? "en" : "de";
      if (adminKpiTrendUsers) adminKpiTrendUsers.textContent = ADMIN_KPI_TRENDS.users[safeLang];
      if (adminKpiTrendQuizzes) adminKpiTrendQuizzes.textContent = ADMIN_KPI_TRENDS.quizzes[safeLang];
      if (adminKpiTrendCerts) adminKpiTrendCerts.textContent = ADMIN_KPI_TRENDS.certs[safeLang];
      if (adminKpiTrendRequests) adminKpiTrendRequests.textContent = ADMIN_KPI_TRENDS.requests[safeLang];
    }

    function showToast(message, type) {
      const toast = document.createElement("div");
      toast.className = "fixed bottom-6 right-6 z-[10000] max-w-sm rounded-lg px-4 py-3 text-sm font-semibold shadow-lg transition-all duration-300";
      toast.style.opacity = "0";
      toast.style.transform = "translateY(0.5rem)";
      if (type === "success") {
        toast.style.backgroundColor = "rgba(22, 101, 52, 0.9)";
        toast.style.border = "1px solid rgba(34, 197, 94, 0.4)";
        toast.style.color = "#bbf7d0";
      } else {
        toast.style.backgroundColor = "rgba(127, 29, 29, 0.9)";
        toast.style.border = "1px solid rgba(239, 68, 68, 0.4)";
        toast.style.color = "#fecaca";
      }
      toast.style.backdropFilter = "blur(8px)";
      toast.textContent = message;
      document.body.appendChild(toast);
      requestAnimationFrame(() => {
        toast.style.opacity = "1";
        toast.style.transform = "translateY(0)";
      });
      setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transform = "translateY(0.5rem)";
        setTimeout(() => toast.remove(), 300);
      }, 3000);
    }

    function createLazyBatchRenderer(options = {}) {
      const totalCount = Number.isFinite(options.totalCount) ? Math.max(0, options.totalCount) : 0;
      const initialCount = Number.isFinite(options.initialCount) ? Math.max(0, options.initialCount) : totalCount;
      const batchSize = Number.isFinite(options.batchSize) ? Math.max(1, options.batchSize) : totalCount || 1;
      const render = typeof options.render === "function" ? options.render : () => {};
      const onStatus = typeof options.onStatus === "function" ? options.onStatus : null;
      const sentinel = options.sentinel || null;
      const fallbackButton = options.fallbackButton || null;
      const fallbackContainer = options.fallbackContainer || null;
      const showFallbackWithObserver = Boolean(options.showFallbackWithObserver);

      let visibleCount = Math.min(initialCount, totalCount);
      let observer = null;

      function hasMore() {
        return visibleCount < totalCount;
      }

      function notify() {
        if (onStatus) onStatus({ visibleCount, totalCount, hasMore: hasMore() });
      }

      function renderNow() {
        if (fallbackButton) {
          fallbackButton.disabled = true;
          fallbackButton.setAttribute("aria-disabled", "true");
        }
        try {
          render(visibleCount);
        } finally {
          if (fallbackButton) {
            fallbackButton.disabled = false;
            fallbackButton.setAttribute("aria-disabled", "false");
          }
        }
        if (sentinel) sentinel.hidden = !hasMore();
        const supportsObserver = typeof IntersectionObserver === "function";
        const showFallback = hasMore() && (!supportsObserver || showFallbackWithObserver);
        if (fallbackButton) fallbackButton.hidden = !showFallback;
        if (fallbackContainer) fallbackContainer.hidden = !showFallback;
        notify();
      }

      function loadNextBatch() {
        if (!hasMore()) return;
        visibleCount = Math.min(totalCount, visibleCount + batchSize);
        renderNow();
      }

      function handleIntersect(entries) {
        const shouldLoad = Array.isArray(entries) && entries.some((entry) => entry && entry.isIntersecting);
        if (shouldLoad) loadNextBatch();
      }

      if (sentinel && typeof IntersectionObserver === "function") {
        observer = new IntersectionObserver(handleIntersect, { rootMargin: "0px 0px 180px 0px" });
        observer.observe(sentinel);
      }

      if (fallbackButton && typeof IntersectionObserver !== "function") {
        fallbackButton.addEventListener("click", loadNextBatch);
      }

      renderNow();

      return {
        destroy() {
          if (observer) observer.disconnect();
          if (fallbackButton && typeof IntersectionObserver !== "function") {
            fallbackButton.removeEventListener("click", loadNextBatch);
          }
        },
      };
    }

    // --- Detail view system (replaces overlay modals) ---
    function showDetailView(contentEl, breadcrumbs) {
      if (!adminDetailView) return;
      if (activeDetailCleanup) {
        activeDetailCleanup();
        activeDetailCleanup = null;
      }
      // Hide all panels + overview header + status
      adminTabPanels.forEach((p) => p.classList.add("hidden"));
      if (adminOverviewHeader) adminOverviewHeader.classList.add("hidden");
      // Build breadcrumb
      adminDetailView.innerHTML = "";
      if (breadcrumbs && breadcrumbs.length) {
        const nav = document.createElement("nav");
        nav.className = "flex items-center gap-2 font-pixel text-sm text-primary-400";
        breadcrumbs.forEach((crumb, i) => {
          if (i > 0) {
            const sep = document.createElement("span");
            sep.textContent = "\u203A";
            sep.className = "text-primary-400/50";
            nav.appendChild(sep);
          }
          if (crumb.onClick) {
            const link = document.createElement("button");
            link.type = "button";
            link.className = "text-primary-400/70 hover:text-primary-300 transition-colors";
            link.textContent = crumb.label;
            link.addEventListener("click", crumb.onClick);
            nav.appendChild(link);
          } else {
            const span = document.createElement("span");
            span.className = "text-primary-400";
            span.textContent = crumb.label;
            nav.appendChild(span);
          }
        });
        adminDetailView.appendChild(nav);
      }
      adminDetailView.appendChild(contentEl);
      adminDetailView.classList.remove("hidden");
    }

    function hideDetailView() {
      if (!adminDetailView) return;
      if (activeDetailCleanup) {
        activeDetailCleanup();
        activeDetailCleanup = null;
      }
      adminDetailView.classList.add("hidden");
      adminDetailView.innerHTML = "";
      // Re-show active panel
      activateAdminTab(activeAdminTabId);
    }

    function createModalOverlay() {
      const overlay = document.createElement("div");
      overlay.className = "fixed inset-0 z-[9999] flex items-center justify-center p-4";
      overlay.style.backgroundColor = "rgba(0,0,0,0.6)";
      overlay.style.backdropFilter = "blur(4px)";
      return overlay;
    }

    function createModalCard() {
      const card = document.createElement("div");
      card.className = "auth-mockup-panel rounded-2xl p-6 max-w-md w-full space-y-4 shadow-2xl";
      card.style.border = "1px solid rgba(168,85,247,0.25)";
      return card;
    }

    function createModalInput(type, placeholder, value) {
      const input = document.createElement("input");
      input.type = type;
      input.placeholder = placeholder;
      input.value = value || "";
      input.className = "w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-sm text-white placeholder-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400";
      return input;
    }

    function createSearchableSelect({ items, placeholder, getExcluded }) {
      const wrap = document.createElement("div");
      wrap.className = "relative";

      const input = document.createElement("input");
      input.type = "text";
      input.placeholder = placeholder;
      input.autocomplete = "off";
      input.className = "w-full rounded-lg border border-white/10 px-3 py-2 text-sm text-white placeholder-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400";
      input.style.backgroundColor = "#1a1a2e";

      const dropdown = document.createElement("div");
      dropdown.className = "absolute left-0 right-0 top-full mt-1 max-h-48 overflow-y-auto rounded-lg border border-white/10 shadow-lg z-50 hidden";
      dropdown.style.backgroundColor = "#1a1a2e";

      let selectedValue = "";
      let selectedLabel = "";
      let activeIndex = -1;
      let currentItems = [];

      function getAvailable() {
        const excluded = new Set((getExcluded?.() || []).map(String));
        return items.filter((it) => !excluded.has(String(it.value)));
      }

      function renderDropdown() {
        const query = input.value.trim().toLowerCase();
        currentItems = getAvailable().filter((it) => !query || it.label.toLowerCase().includes(query));
        dropdown.innerHTML = "";
        if (!currentItems.length) {
          const empty = document.createElement("p");
          empty.className = "px-3 py-2 text-xs text-gray-500 italic";
          empty.textContent = "—";
          dropdown.appendChild(empty);
          activeIndex = -1;
          return;
        }
        currentItems.forEach((it, i) => {
          const opt = document.createElement("button");
          opt.type = "button";
          opt.className = "block w-full text-left px-3 py-1.5 text-sm text-white hover:bg-white/10 focus:bg-white/10 focus:outline-none";
          if (i === activeIndex) opt.classList.add("bg-white/10");
          opt.textContent = it.label;
          opt.addEventListener("mousedown", (e) => {
            e.preventDefault();
            selectedValue = String(it.value);
            selectedLabel = it.label;
            input.value = it.label;
            close();
          });
          dropdown.appendChild(opt);
        });
      }

      function open() {
        renderDropdown();
        dropdown.classList.remove("hidden");
      }
      function close() {
        dropdown.classList.add("hidden");
        activeIndex = -1;
      }

      input.addEventListener("focus", open);
      input.addEventListener("input", () => {
        if (input.value !== selectedLabel) {
          selectedValue = "";
          selectedLabel = "";
        }
        activeIndex = -1;
        open();
      });
      input.addEventListener("keydown", (e) => {
        if (e.key === "ArrowDown") {
          e.preventDefault();
          if (dropdown.classList.contains("hidden")) open();
          activeIndex = Math.min(activeIndex + 1, currentItems.length - 1);
          renderDropdown();
        } else if (e.key === "ArrowUp") {
          e.preventDefault();
          activeIndex = Math.max(activeIndex - 1, 0);
          renderDropdown();
        } else if (e.key === "Enter") {
          if (activeIndex >= 0 && currentItems[activeIndex]) {
            e.preventDefault();
            const it = currentItems[activeIndex];
            selectedValue = String(it.value);
            selectedLabel = it.label;
            input.value = it.label;
            close();
          }
        } else if (e.key === "Escape") {
          close();
        }
      });
      document.addEventListener("mousedown", (e) => {
        if (!wrap.contains(e.target)) close();
      });

      wrap.appendChild(input);
      wrap.appendChild(dropdown);

      Object.defineProperty(wrap, "value", {
        get() { return selectedValue; },
        set(v) {
          const found = items.find((it) => String(it.value) === String(v));
          selectedValue = found ? String(found.value) : "";
          selectedLabel = found ? found.label : "";
          input.value = selectedLabel;
        },
      });
      wrap.reset = () => {
        selectedValue = "";
        selectedLabel = "";
        input.value = "";
        close();
      };
      wrap.refresh = renderDropdown;
      wrap.focusInput = () => input.focus();

      return wrap;
    }

    function createModalSelect(options, selected) {
      const select = document.createElement("select");
      select.className = "w-full rounded-lg border border-white/10 px-3 py-2 text-sm text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400";
      select.style.backgroundColor = "#1a1a2e";
      select.style.color = "#ffffff";
      options.forEach(({ value, label }) => {
        const opt = document.createElement("option");
        opt.value = value;
        opt.textContent = label;
        opt.selected = value === selected;
        opt.style.backgroundColor = "#1a1a2e";
        opt.style.color = "#ffffff";
        select.appendChild(opt);
      });
      return select;
    }

    function showInviteUserModal() {
      const lang = resolveCurrentLang();
      const safeLang = lang === "en" ? "en" : "de";

      const card = document.createElement("div");
      card.className = "space-y-4";

      const nameInput = createModalInput("text", "Name", "");
      const emailInput = createModalInput("email", "E-Mail", "");

      const inviteTeams = [];
      const teamsSection = document.createElement("div");
      teamsSection.className = "space-y-2";
      const teamsLabel = document.createElement("p");
      teamsLabel.className = "text-xs uppercase tracking-wide text-gray-400";
      teamsLabel.textContent = safeLang === "en" ? "Teams & roles" : "Teams & Rollen";
      const teamListEl = document.createElement("div");
      teamListEl.className = "space-y-2";
      teamsSection.appendChild(teamsLabel);
      teamsSection.appendChild(teamListEl);

      const addRow = document.createElement("div");
      addRow.className = "flex items-center gap-2";
      const addSelect = createSearchableSelect({
        items: ADMIN_AVAILABLE_TEAMS.map((t) => ({ value: t, label: t })),
        placeholder: safeLang === "en" ? "Add team\u2026" : "Team hinzuf\u00FCgen\u2026",
        getExcluded: () => inviteTeams.map((t) => t.teamName),
      });
      addSelect.classList.add("flex-1");
      const addBtn = document.createElement("button");
      addBtn.type = "button";
      addBtn.className = "flex-shrink-0 w-8 h-8 rounded-lg border border-green-500/30 bg-green-500/10 flex items-center justify-center text-green-400 hover:bg-green-500/25";
      addBtn.innerHTML = '<svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" shape-rendering="crispEdges"><rect x="7" y="2" width="2" height="12"/><rect x="2" y="7" width="12" height="2"/></svg>';
      addRow.appendChild(addSelect);
      addRow.appendChild(addBtn);
      teamsSection.appendChild(addRow);

      function renderInviteTeamList() {
        teamListEl.innerHTML = "";
        inviteTeams.forEach((t, idx) => {
          const row = document.createElement("div");
          row.className = "flex items-center gap-2 rounded-lg bg-white/5 border border-white/10 px-3 py-2";
          const teamNameEl = document.createElement("span");
          teamNameEl.className = "text-sm text-white flex-1 min-w-0 truncate";
          teamNameEl.textContent = t.teamName;
          const roleSelect = createModalSelect(getRoleOptions(safeLang), t.role);
          roleSelect.className = roleSelect.className.replace("w-full", "");
          roleSelect.style.width = "8rem";
          roleSelect.addEventListener("change", () => { inviteTeams[idx].role = roleSelect.value; });
          const removeBtn = document.createElement("button");
          removeBtn.type = "button";
          removeBtn.className = "flex-shrink-0 w-7 h-7 rounded-lg border border-red-500/30 bg-red-500/10 flex items-center justify-center text-red-400 hover:bg-red-500/25";
          removeBtn.innerHTML = '<svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor" shape-rendering="crispEdges"><rect x="2" y="7" width="12" height="2"/></svg>';
          removeBtn.addEventListener("click", () => {
            inviteTeams.splice(idx, 1);
            renderInviteTeamList();
          });
          row.appendChild(teamNameEl);
          row.appendChild(roleSelect);
          row.appendChild(removeBtn);
          teamListEl.appendChild(row);
        });
      }

      addBtn.addEventListener("click", () => {
        const teamName = addSelect.value;
        if (!teamName) return;
        inviteTeams.push({ teamName, role: "user" });
        addSelect.reset();
        renderInviteTeamList();
      });

      const actions = document.createElement("div");
      actions.className = "flex gap-3 pt-2";
      const confirmBtn = document.createElement("button");
      confirmBtn.type = "button";
      confirmBtn.className = `flex-1 ${BUTTON_PRIMARY_BASE}`;
      confirmBtn.textContent = safeLang === "en" ? "Send invitation" : "Einladung senden";
      actions.appendChild(confirmBtn);

      confirmBtn.addEventListener("click", () => {
        const result = authApi.createAdminUser({
          name: nameInput.value,
          email: emailInput.value,
          role: inviteTeams[0]?.role || "user",
          active: true,
        });
        if (result.ok) {
          const data = authApi.getAdminDashboardData();
          const newUser = data?.users?.find((u) => u.id === result.user?.id);
          if (newUser) {
            newUser.teams = inviteTeams.length ? inviteTeams.map((t) => ({ ...t })) : [{ teamName: "Incident Response", role: "user" }];
            newUser.role = newUser.teams[0]?.role || "user";
            newUser.teamName = newUser.teams[0]?.teamName || "";
            newUser.status = "invited";
          }
          showToast(safeLang === "en" ? "Invitation sent" : "Einladung gesendet", "success");
          hideDetailView();
          renderAdminDashboard();
          renderUsersPage();
        } else {
          showToast(statusMessageFor("admin", result.error), "error");
        }
      });

      card.appendChild(nameInput);
      card.appendChild(emailInput);
      card.appendChild(teamsSection);
      card.appendChild(actions);

      const usersLabel = safeLang === "en" ? "Users & roles" : "Nutzer & Rollen";
      const inviteLabel = safeLang === "en" ? "Invite user" : "Nutzer einladen";
      showDetailView(card, [
        { label: usersLabel, onClick: () => hideDetailView() },
        { label: inviteLabel },
      ]);
      nameInput.focus();
    }

    function buildUserModalAvatar(user) {
      const section = document.createElement("div");
      section.className = "flex items-center gap-3";
      const avatar = document.createElement("span");
      avatar.className = "flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold text-white";
      avatar.style.backgroundColor = getInitialsColor(user.name);
      avatar.textContent = getUserInitials(user.name);
      section.appendChild(avatar);
      return { section, avatar };
    }

    function getRoleOptions(safeLang) {
      return [
        { value: "user", label: safeLang === "en" ? "User" : "Nutzer" },
        { value: "team_moderator", label: "Team Moderator" },
        { value: "team_owner", label: "Team Owner" },
      ];
    }

    function getTeamOptions() {
      return [
        { value: "Incident Response", label: "Incident Response" },
        { value: "Security Operations", label: "Security Operations" },
        { value: "Marketing", label: "Marketing" },
      ];
    }

    function buildQuizStyleCheckbox({ checked, indeterminate, ariaLabel, onChange }) {
      const label = document.createElement("label");
      label.className = "inline-flex items-center justify-center cursor-pointer";
      const input = document.createElement("input");
      input.type = "checkbox";
      input.className = "sr-only";
      input.checked = Boolean(checked);
      input.indeterminate = Boolean(indeterminate && !checked);
      if (ariaLabel) input.setAttribute("aria-label", ariaLabel);
      const indicator = document.createElement("span");
      const isActive = Boolean(checked) || Boolean(indeterminate);
      indicator.className = `inline-flex h-5 w-5 shrink-0 items-center justify-center rounded border transition-colors focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-primary-400 ${
        isActive ? "border-primary-200/90 bg-primary-500/30 text-white" : "border-white/35 bg-transparent text-transparent"
      }`;
      const mark = document.createElement("span");
      mark.className = `text-xs font-bold leading-none transition-opacity ${isActive ? "opacity-100" : "opacity-0"}`;
      mark.innerHTML = indeterminate && !checked ? "&#8211;" : "&#10003;";
      indicator.appendChild(mark);
      label.appendChild(input);
      label.appendChild(indicator);
      input.addEventListener("change", () => {
        if (typeof onChange === "function") onChange(input.checked);
      });
      return label;
    }

    function buildTeamListReadonly(teams, lang) {
      const safeLang = lang === "en" ? "en" : "de";
      if (!teams.length) {
        const empty = document.createElement("p");
        empty.className = "text-sm text-gray-400";
        empty.textContent = safeLang === "en" ? "No teams assigned" : "Keine Teams zugewiesen";
        return empty;
      }
      const wrap = document.createElement("div");
      wrap.className = "auth-mockup-panel rounded-xl overflow-hidden";

      const filterState = {};
      const sortState = { key: null, direction: "asc" };
      const roleOptions = ADMIN_USER_ROLES.map((r) => ADMIN_ROLE_LABELS[safeLang][r]);
      const rolePillStyles = {};
      ADMIN_USER_ROLES.forEach((r) => {
        const lbl = ADMIN_ROLE_LABELS[safeLang][r];
        if (lbl && ROLE_PILL_STYLES[r]) rolePillStyles[lbl] = ROLE_PILL_STYLES[r];
      });
      const roleCounts = buildCountMap(teams, (t) => ADMIN_ROLE_LABELS[safeLang][t.role] || t.role);
      const columns = [
        { key: "team", label: safeLang === "en" ? "Team" : "Team", filterable: true },
        { key: "role", label: safeLang === "en" ? "Role" : "Rolle", filterable: true, options: roleOptions, pillStyles: rolePillStyles, counts: roleCounts },
      ];
      const getValueFns = {
        team: (t) => t.teamName,
        role: (t) => ADMIN_ROLE_LABELS[safeLang][t.role] || t.role,
      };

      const render = () => {
        wrap.innerHTML = "";
        const tableWrap = document.createElement("div");
        tableWrap.className = "overflow-x-auto";
        const table = document.createElement("table");
        table.className = "w-full text-sm";
        const thead = document.createElement("thead");
        thead.className = "bg-white/5 text-gray-300";
        thead.appendChild(createFilterableHeader(columns, filterState, render, sortState, render));
        const tbody = document.createElement("tbody");
        tbody.className = "divide-y divide-white/10";

        const filtered = applyColumnFilters(teams, filterState, getValueFns);
        const sorted = applySort(filtered, sortState, getValueFns);
        sorted.forEach((t) => {
          const row = document.createElement("tr");
          row.className = "border-t border-white/10";
          const teamCell = document.createElement("td");
          teamCell.className = "px-4 py-2.5 text-sm text-white";
          teamCell.textContent = t.teamName;
          const roleCell = document.createElement("td");
          roleCell.className = "px-4 py-2.5";
          roleCell.appendChild(buildRoleBadge(t.role, lang));
          row.appendChild(teamCell);
          row.appendChild(roleCell);
          tbody.appendChild(row);
        });
        table.appendChild(thead);
        table.appendChild(tbody);
        tableWrap.appendChild(table);
        wrap.appendChild(tableWrap);
      };

      render();
      return wrap;
    }

    function buildUserCoursesTable(user, lang, { onSelectionChange } = {}) {
      const safeLang = lang === "en" ? "en" : "de";
      const enrolled = getUserEnrolledCourses(user);
      const completions = user.courseCompletions || [];
      const completionMap = {};
      completions.forEach((c) => { completionMap[c.course] = c; });
      const allCourseNames = [...new Set([...enrolled, ...completions.map((c) => c.course)])];
      if (!allCourseNames.length) {
        const empty = document.createElement("p");
        empty.className = "text-sm text-gray-500";
        empty.textContent = safeLang === "en" ? "No courses assigned" : "Keine Kurse zugewiesen";
        return empty;
      }
      const statusLabels = {
        de: { in_progress: "Laufend", paused: "Pausiert", overdue: "Überfällig", completed: "Abgeschlossen" },
        en: { in_progress: "In progress", paused: "Paused", overdue: "Overdue", completed: "Completed" },
      };
      const courseRows = allCourseNames.map((courseName) => {
        const completion = completionMap[courseName];
        const assignment = ADMIN_COURSE_ASSIGNMENTS.find((a) => a.userId === user.id && a.courseName === courseName);
        const status = completion ? "completed" : (assignment?.status || "in_progress");
        const progress = completion ? 100 : Math.max(0, Math.min(100, Number(assignment?.progress) || 0));
        return { courseName, completion, assignment, status, progress };
      });

      const wrap = document.createElement("div");
      wrap.className = "auth-mockup-panel rounded-xl overflow-hidden";
      const selectedCourseIdxs = new Set();
      wrap.getSelectedCourseNames = () => [...selectedCourseIdxs].map((i) => courseRows[i]?.courseName).filter(Boolean);

      const filterState = {};
      const sortState = { key: null, direction: "asc" };
      const statusOptions = Object.values(statusLabels[safeLang]);
      const certYes = safeLang === "en" ? "Yes" : "Ja";
      const certNo = safeLang === "en" ? "No" : "Nein";
      const userCoursesStatusPillStyles = {
        [statusLabels[safeLang].completed]: PILL_STYLE_GREEN,
        [statusLabels[safeLang].in_progress]: PILL_STYLE_BLUE,
        [statusLabels[safeLang].paused]: PILL_STYLE_AMBER,
        [statusLabels[safeLang].overdue]: PILL_STYLE_RED,
      };
      const statusGetter = (r) => statusLabels[safeLang][r.status] || r.status;
      const certGetter = (r) => (r.completion && r.completion.certificate) ? certYes : certNo;
      const userCoursesStatusCounts = buildCountMap(courseRows, statusGetter);
      const userCoursesCertCounts = buildCountMap(courseRows, certGetter);
      const columns = [
        { key: "course", label: safeLang === "en" ? "Course" : "Kurs", filterable: true },
        { key: "status", label: "Status", filterable: true, options: statusOptions, pillStyles: userCoursesStatusPillStyles, counts: userCoursesStatusCounts },
        { key: "progress", label: safeLang === "en" ? "Progress" : "Fortschritt", filterable: true },
        { key: "score", label: safeLang === "en" ? "Score" : "Punkte", filterable: true },
        { key: "completed", label: safeLang === "en" ? "Completed" : "Abgeschlossen", filterable: true, type: "date" },
        { key: "certificate", label: safeLang === "en" ? "Certificate" : "Zertifikat", filterable: true, options: [certYes, certNo], counts: userCoursesCertCounts },
      ];
      const getValueFns = {
        course: (r) => r.courseName,
        status: (r) => statusLabels[safeLang][r.status] || r.status,
        progress: (r) => r.progress,
        score: (r) => r.completion ? r.completion.score : -1,
        completed: { type: "date", getValue: (r) => (r.completion && r.completion.completedAt) ? r.completion.completedAt : "" },
        certificate: (r) => (r.completion && r.completion.certificate) ? certYes : certNo,
      };

      const notifySelection = () => {
        if (typeof onSelectionChange === "function") onSelectionChange(selectedCourseIdxs.size);
      };

      const render = () => {
        wrap.innerHTML = "";
        const tableWrap = document.createElement("div");
        tableWrap.className = "overflow-x-auto";
        const table = document.createElement("table");
        table.className = "w-full text-sm";
        const thead = document.createElement("thead");
        thead.className = "bg-white/5 text-gray-300";
        const headerRow = createFilterableHeader(columns, filterState, render, sortState, render);

        const filtered = applyColumnFilters(courseRows, filterState, getValueFns);
        const sorted = applySort(filtered, sortState, getValueFns);
        const visibleOrigIdxs = sorted.map((r) => courseRows.indexOf(r));
        const allVisibleSelected = visibleOrigIdxs.length > 0 && visibleOrigIdxs.every((i) => selectedCourseIdxs.has(i));
        const someVisibleSelected = visibleOrigIdxs.some((i) => selectedCourseIdxs.has(i));
        const selectAllTh = document.createElement("th");
        selectAllTh.className = "w-10 px-2 py-2 text-center";
        const selectAllCb = buildQuizStyleCheckbox({
          checked: allVisibleSelected,
          indeterminate: someVisibleSelected && !allVisibleSelected,
          ariaLabel: safeLang === "en" ? "Select all courses" : "Alle Kurse auswählen",
          onChange: (checked) => {
            if (checked) visibleOrigIdxs.forEach((i) => selectedCourseIdxs.add(i));
            else visibleOrigIdxs.forEach((i) => selectedCourseIdxs.delete(i));
            notifySelection();
            render();
          },
        });
        selectAllTh.appendChild(selectAllCb);
        headerRow.insertBefore(selectAllTh, headerRow.firstChild);
        thead.appendChild(headerRow);

        const tbody = document.createElement("tbody");
        tbody.className = "divide-y divide-white/10";

        sorted.forEach((r) => {
          const origIdx = courseRows.indexOf(r);
          const { courseName, completion, status, progress } = r;

          const row = document.createElement("tr");
          row.className = "border-t border-white/10";

          const cbCell = document.createElement("td");
          cbCell.className = "w-10 px-2 py-2.5 text-center";
          const cb = buildQuizStyleCheckbox({
            checked: selectedCourseIdxs.has(origIdx),
            ariaLabel: courseName,
            onChange: (checked) => {
              if (checked) selectedCourseIdxs.add(origIdx);
              else selectedCourseIdxs.delete(origIdx);
              notifySelection();
              render();
            },
          });
          cbCell.appendChild(cb);

          const courseCell = document.createElement("td");
          courseCell.className = "px-4 py-2.5 text-sm text-white";
          courseCell.textContent = courseName;

          const statusCell = document.createElement("td");
          statusCell.className = "px-4 py-2.5";
          statusCell.appendChild(buildStatusBadge(
            statusLabels[safeLang][status] || statusLabels.de[status],
            ENROLLMENT_STATUS_PILL_STYLES[status] || PILL_STYLE_BLUE
          ));

          const progressCell = document.createElement("td");
          progressCell.className = "px-4 py-2.5";
          const userCourseColor = status === "completed" ? "#22c55e"
            : status === "overdue" ? "#ef4444"
            : status === "paused" ? "#f59e0b"
            : "#a855f7";
          progressCell.appendChild(buildProgressBarCell(progress, {
            color: userCourseColor,
            barWidthClass: "flex-1",
            pctWidthClass: "w-10 text-right tabular-nums",
          }));
          progressCell.firstChild.classList.add("min-w-[8rem]");

          const scoreCell = document.createElement("td");
          scoreCell.className = "px-4 py-2.5 text-sm";
          if (completion) {
            const scoreSpan = document.createElement("span");
            scoreSpan.className = "font-bold";
            scoreSpan.style.color = completion.score >= 80 ? "#22c55e" : completion.score >= 50 ? "#f59e0b" : "#ef4444";
            scoreSpan.textContent = `${completion.score}%`;
            scoreCell.appendChild(scoreSpan);
          } else {
            scoreCell.innerHTML = '<span class="text-gray-500">—</span>';
          }

          const dateCell = document.createElement("td");
          dateCell.className = "px-4 py-2.5 text-sm text-gray-300 whitespace-nowrap";
          dateCell.textContent = completion && completion.completedAt
            ? new Date(completion.completedAt).toLocaleDateString(safeLang, { day: "2-digit", month: "short", year: "numeric" })
            : "—";

          const certCell = document.createElement("td");
          certCell.className = "px-4 py-2.5";
          if (completion && completion.certificate) {
            const dlBtn = document.createElement("button");
            dlBtn.type = "button";
            dlBtn.className = "inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-label-caption font-semibold text-primary-300 hover:text-primary-200 border border-primary-400/30 bg-primary-500/10 hover:bg-primary-500/20";
            dlBtn.innerHTML = '<svg width="10" height="10" viewBox="0 0 16 16" fill="currentColor" shape-rendering="crispEdges"><rect x="7" y="1" width="2" height="8"/><rect x="4" y="6" width="2" height="2"/><rect x="10" y="6" width="2" height="2"/><rect x="2" y="12" width="12" height="2"/><rect x="2" y="10" width="2" height="2"/><rect x="12" y="10" width="2" height="2"/></svg> ' + (safeLang === "en" ? "Download" : "Herunterladen");
            dlBtn.addEventListener("click", () => showToast(safeLang === "en" ? "Certificate download started" : "Zertifikat-Download gestartet", "success"));
            certCell.appendChild(dlBtn);
          } else {
            certCell.innerHTML = '<span class="text-gray-500 text-sm">—</span>';
          }

          row.appendChild(cbCell);
          row.appendChild(courseCell);
          row.appendChild(statusCell);
          row.appendChild(progressCell);
          row.appendChild(scoreCell);
          row.appendChild(dateCell);
          row.appendChild(certCell);
          tbody.appendChild(row);
        });
        table.appendChild(thead);
        table.appendChild(tbody);
        tableWrap.appendChild(table);
        wrap.appendChild(tableWrap);
      };

      render();
      return wrap;
    }

    function showUserViewModal(user, returnTo) {
      const lang = resolveCurrentLang();
      const safeLang = lang === "en" ? "en" : "de";

      const card = document.createElement("div");
      card.className = "space-y-4";

      // --- Header row: avatar + info + actions menu ---
      const headerRow = document.createElement("div");
      headerRow.className = "flex items-center gap-3";
      const { section: avatarSection } = buildUserModalAvatar(user);
      const infoBlock = document.createElement("div");
      infoBlock.className = "flex-1 min-w-0";
      const nameEl = document.createElement("p");
      nameEl.className = "text-sm font-semibold text-white";
      nameEl.textContent = user.name;
      const emailEl = document.createElement("p");
      emailEl.className = "text-xs text-gray-400";
      emailEl.textContent = user.email;
      infoBlock.appendChild(nameEl);
      infoBlock.appendChild(emailEl);
      avatarSection.appendChild(infoBlock);
      avatarSection.className = "flex items-center gap-3 flex-1 min-w-0";

      const actionsMenuWrap = document.createElement("div");
      actionsMenuWrap.className = "relative flex-shrink-0";
      const actionsMenuBtn = document.createElement("button");
      actionsMenuBtn.type = "button";
      actionsMenuBtn.className = `${BUTTON_PRIMARY_BASE} inline-flex items-center gap-2`;
      actionsMenuBtn.setAttribute("aria-expanded", "false");
      actionsMenuBtn.innerHTML = `
        <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" shape-rendering="crispEdges" aria-hidden="true"><rect x="3" y="7" width="2" height="2"/><rect x="7" y="7" width="2" height="2"/><rect x="11" y="7" width="2" height="2"/></svg>
        <span>${safeLang === "en" ? "Manage user" : "Nutzer verwalten"}</span>
        <svg width="10" height="10" viewBox="0 0 16 16" fill="currentColor" shape-rendering="crispEdges" aria-hidden="true"><rect x="3" y="5" width="2" height="2"/><rect x="5" y="7" width="2" height="2"/><rect x="7" y="9" width="2" height="2"/><rect x="9" y="7" width="2" height="2"/><rect x="11" y="5" width="2" height="2"/></svg>
      `;
      const actionsMenu = document.createElement("div");
      actionsMenu.className = "hidden absolute right-0 top-full mt-1 z-20 min-w-[13rem] rounded-lg border border-white/10 bg-cyber-dark/95 backdrop-blur-md shadow-xl py-1";

      const viewUserSt = getUserStatus(user);
      if (viewUserSt === "active" || viewUserSt === "invited") {
        const editOption = document.createElement("button");
        editOption.type = "button";
        editOption.className = "w-full text-left px-3 py-2 text-sm text-gray-200 hover:bg-white/10";
        editOption.textContent = safeLang === "en" ? "Edit user" : "Nutzer bearbeiten";
        editOption.addEventListener("click", () => {
          actionsMenu.classList.add("hidden");
          showEditUserModal(user, returnTo);
        });
        actionsMenu.appendChild(editOption);
      } else {
        const reactivateOption = document.createElement("button");
        reactivateOption.type = "button";
        reactivateOption.className = "w-full text-left px-3 py-2 text-sm text-amber-300 hover:bg-amber-500/10";
        reactivateOption.textContent = safeLang === "en" ? "Reactivate" : "Reaktivieren";
        reactivateOption.addEventListener("click", () => {
          actionsMenu.classList.add("hidden");
          showReactivateModal(user);
        });
        actionsMenu.appendChild(reactivateOption);
      }
      const deleteOption = document.createElement("button");
      deleteOption.type = "button";
      deleteOption.className = "w-full text-left px-3 py-2 text-sm text-red-300 hover:bg-red-500/10";
      deleteOption.textContent = safeLang === "en" ? "Delete user" : "Nutzer löschen";
      deleteOption.addEventListener("click", () => {
        actionsMenu.classList.add("hidden");
        const overlay = createModalOverlay();
        const modal = createModalCard();
        modal.innerHTML = "";
        const msg = document.createElement("p");
        msg.className = "text-sm text-gray-200 mb-4";
        msg.textContent = safeLang === "en"
          ? `Are you sure you want to delete "${user.name}"?`
          : `Möchtest du "${user.name}" wirklich löschen?`;
        const btns = document.createElement("div");
        btns.className = "flex gap-3";
        const confirmBtn = document.createElement("button");
        confirmBtn.type = "button";
        confirmBtn.className = `flex-1 ${BUTTON_DANGER_STRONG_BASE}`;
        confirmBtn.textContent = safeLang === "en" ? "Delete" : "Löschen";
        confirmBtn.addEventListener("click", () => {
          const idx = ADMIN_DASHBOARD_USERS.findIndex((u) => u.id === user.id);
          if (idx !== -1) ADMIN_DASHBOARD_USERS.splice(idx, 1);
          overlay.remove();
          showToast(safeLang === "en" ? "User deleted" : "Nutzer gelöscht", "success");
          hideDetailView();
        });
        const cancelBtn = document.createElement("button");
        cancelBtn.type = "button";
        cancelBtn.className = `flex-1 ${BUTTON_SECONDARY_BASE}`;
        cancelBtn.textContent = safeLang === "en" ? "Cancel" : "Abbrechen";
        cancelBtn.addEventListener("click", () => overlay.remove());
        btns.appendChild(confirmBtn);
        btns.appendChild(cancelBtn);
        modal.appendChild(msg);
        modal.appendChild(btns);
        overlay.appendChild(modal);
        document.body.appendChild(overlay);
      });
      actionsMenu.appendChild(deleteOption);

      const removeOrgOption = document.createElement("button");
      removeOrgOption.type = "button";
      removeOrgOption.className = "w-full text-left px-3 py-2 text-sm text-red-300 hover:bg-red-500/10";
      removeOrgOption.textContent = safeLang === "en" ? "Remove from organization" : "Von Organisation entfernen";
      removeOrgOption.addEventListener("click", () => {
        actionsMenu.classList.add("hidden");
        const overlay = createModalOverlay();
        const modal = createModalCard();
        modal.innerHTML = "";
        const msg = document.createElement("p");
        msg.className = "text-sm text-gray-200 mb-4";
        msg.textContent = safeLang === "en"
          ? `Are you sure you want to remove "${user.name}" from the organization?`
          : `Möchtest du "${user.name}" wirklich von der Organisation entfernen?`;
        const btns = document.createElement("div");
        btns.className = "flex gap-3";
        const confirmBtn = document.createElement("button");
        confirmBtn.type = "button";
        confirmBtn.className = `flex-1 ${BUTTON_DANGER_STRONG_BASE}`;
        confirmBtn.textContent = safeLang === "en" ? "Remove" : "Entfernen";
        confirmBtn.addEventListener("click", () => {
          const idx = ADMIN_DASHBOARD_USERS.findIndex((u) => u.id === user.id);
          if (idx !== -1) ADMIN_DASHBOARD_USERS.splice(idx, 1);
          overlay.remove();
          showToast(safeLang === "en" ? "User removed from organization" : "Nutzer von Organisation entfernt", "success");
          hideDetailView();
        });
        const cancelBtn = document.createElement("button");
        cancelBtn.type = "button";
        cancelBtn.className = `flex-1 ${BUTTON_SECONDARY_BASE}`;
        cancelBtn.textContent = safeLang === "en" ? "Cancel" : "Abbrechen";
        cancelBtn.addEventListener("click", () => overlay.remove());
        btns.appendChild(confirmBtn);
        btns.appendChild(cancelBtn);
        modal.appendChild(msg);
        modal.appendChild(btns);
        overlay.appendChild(modal);
        document.body.appendChild(overlay);
      });
      actionsMenu.appendChild(removeOrgOption);

      actionsMenuWrap.appendChild(actionsMenuBtn);
      actionsMenuWrap.appendChild(actionsMenu);

      actionsMenuBtn.addEventListener("click", (ev) => {
        ev.stopPropagation();
        const nowHidden = actionsMenu.classList.toggle("hidden");
        actionsMenuBtn.setAttribute("aria-expanded", nowHidden ? "false" : "true");
      });
      document.addEventListener("click", () => {
        actionsMenu.classList.add("hidden");
        actionsMenuBtn.setAttribute("aria-expanded", "false");
      });
      actionsMenu.addEventListener("click", (ev) => ev.stopPropagation());

      headerRow.appendChild(avatarSection);
      headerRow.appendChild(actionsMenuWrap);

      // --- Status row ---
      const statusRow = document.createElement("div");
      statusRow.className = "grid grid-cols-2 gap-3";
      const statusField = document.createElement("div");
      const statusLbl = document.createElement("p");
      statusLbl.className = "text-xs uppercase tracking-wide text-gray-400 mb-1";
      statusLbl.textContent = "Status";
      const viewStLabel = viewUserSt === "invited" ? (safeLang === "en" ? "Invited" : "Eingeladen")
        : viewUserSt === "active" ? (safeLang === "en" ? "Active" : "Aktiv")
        : (safeLang === "en" ? "Inactive" : "Inaktiv");
      const statusPill = buildStatusBadge(viewStLabel, USER_STATUS_PILL_STYLES[viewUserSt] || PILL_STYLE_RED);
      statusField.appendChild(statusLbl);
      statusField.appendChild(statusPill);
      const loginField = document.createElement("div");
      const loginLbl = document.createElement("p");
      loginLbl.className = "text-xs uppercase tracking-wide text-gray-400 mb-1";
      loginLbl.textContent = safeLang === "en" ? "Last login" : "Letzter Login";
      const loginVal = document.createElement("p");
      loginVal.className = "text-sm text-white";
      loginVal.textContent = formatLastLogin(user.lastLogin, lang);
      loginField.appendChild(loginLbl);
      loginField.appendChild(loginVal);
      statusRow.appendChild(statusField);
      statusRow.appendChild(loginField);

      // --- Teams section with Add/Delete buttons and checkboxes ---
      const teamsHeader = document.createElement("div");
      teamsHeader.className = "flex items-center justify-between gap-2";
      const teamsLabel = document.createElement("p");
      teamsLabel.className = "text-xs uppercase tracking-wide text-gray-400";
      teamsLabel.textContent = safeLang === "en" ? "Teams & roles" : "Teams & Rollen";

      const teamsButtonsWrap = document.createElement("div");
      teamsButtonsWrap.className = "flex items-center gap-2 flex-shrink-0";
      const addTeamBtn = document.createElement("button");
      addTeamBtn.type = "button";
      addTeamBtn.className = `${BUTTON_PRIMARY_BASE} inline-flex items-center gap-1.5`;
      addTeamBtn.innerHTML = `<svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor" shape-rendering="crispEdges" aria-hidden="true"><rect x="7" y="3" width="2" height="10"/><rect x="3" y="7" width="10" height="2"/></svg><span>${safeLang === "en" ? "Add" : "Hinzufügen"}</span>`;
      const deleteTeamBtn = document.createElement("button");
      deleteTeamBtn.type = "button";
      deleteTeamBtn.className = `${BUTTON_DANGER_BASE} inline-flex items-center gap-1.5 opacity-50 cursor-not-allowed`;
      deleteTeamBtn.disabled = true;
      deleteTeamBtn.innerHTML = `<svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor" shape-rendering="crispEdges" aria-hidden="true"><rect x="2" y="3" width="12" height="2"/><rect x="6" y="1" width="4" height="2"/><rect x="3" y="5" width="2" height="9"/><rect x="5" y="5" width="6" height="2"/><rect x="5" y="12" width="6" height="2"/><rect x="11" y="5" width="2" height="9"/><rect x="6" y="7" width="2" height="5"/><rect x="8" y="7" width="2" height="5"/></svg><span>${safeLang === "en" ? "Delete" : "Löschen"}</span>`;
      teamsButtonsWrap.appendChild(addTeamBtn);
      teamsButtonsWrap.appendChild(deleteTeamBtn);
      teamsHeader.appendChild(teamsLabel);
      teamsHeader.appendChild(teamsButtonsWrap);

      const teamsWrap = document.createElement("div");
      teamsWrap.className = "auth-mockup-panel rounded-xl overflow-hidden";
      const selectedTeamIdxs = new Set();

      const teamsFilterState = {};
      const teamsSortState = { key: null, direction: "asc" };
      const userTeams = user.teams || [];
      const roleOptions = ADMIN_USER_ROLES.map((r) => ADMIN_ROLE_LABELS[safeLang][r]);
      const rolePillStyles = {};
      ADMIN_USER_ROLES.forEach((r) => {
        const lbl = ADMIN_ROLE_LABELS[safeLang][r];
        if (lbl && ROLE_PILL_STYLES[r]) rolePillStyles[lbl] = ROLE_PILL_STYLES[r];
      });
      const teamsColumns = [
        { key: "team", label: safeLang === "en" ? "Team" : "Team", filterable: true },
        { key: "role", label: safeLang === "en" ? "Role" : "Rolle", filterable: true, options: roleOptions, pillStyles: rolePillStyles },
      ];
      const teamsGetValueFns = {
        team: (t) => t.teamName,
        role: (t) => ADMIN_ROLE_LABELS[safeLang][t.role] || t.role,
      };

      const updateDeleteTeamBtn = () => {
        if (selectedTeamIdxs.size > 0) {
          deleteTeamBtn.disabled = false;
          deleteTeamBtn.className = `${BUTTON_DANGER_BASE} inline-flex items-center gap-1.5`;
        } else {
          deleteTeamBtn.disabled = true;
          deleteTeamBtn.className = `${BUTTON_DANGER_BASE} inline-flex items-center gap-1.5 opacity-50 cursor-not-allowed`;
        }
      };

      const renderTeamsTable = () => {
        teamsWrap.innerHTML = "";
        if (!userTeams.length) {
          const empty = document.createElement("p");
          empty.className = "text-sm text-gray-400 p-4";
          empty.textContent = safeLang === "en" ? "No teams assigned" : "Keine Teams zugewiesen";
          teamsWrap.appendChild(empty);
          return;
        }
        const tableWrap = document.createElement("div");
        tableWrap.className = "overflow-x-auto";
        const table = document.createElement("table");
        table.className = "w-full text-sm";
        const thead = document.createElement("thead");
        thead.className = "bg-white/5 text-gray-300";
        const headerRow2 = createFilterableHeader(teamsColumns, teamsFilterState, renderTeamsTable, teamsSortState, renderTeamsTable);

        const selectAllTh = document.createElement("th");
        selectAllTh.className = "w-10 px-2 py-2 text-center";
        const filtered = applyColumnFilters(userTeams, teamsFilterState, teamsGetValueFns);
        const sorted = applySort(filtered, teamsSortState, teamsGetValueFns);
        const visibleOrigIdxs = sorted.map((t) => userTeams.indexOf(t));
        const allVisibleSelected = visibleOrigIdxs.length > 0 && visibleOrigIdxs.every((i) => selectedTeamIdxs.has(i));
        const someVisibleSelected = visibleOrigIdxs.some((i) => selectedTeamIdxs.has(i));
        const selectAllCb = buildQuizStyleCheckbox({
          checked: allVisibleSelected,
          indeterminate: someVisibleSelected && !allVisibleSelected,
          ariaLabel: safeLang === "en" ? "Select all teams" : "Alle Teams auswählen",
          onChange: (checked) => {
            if (checked) visibleOrigIdxs.forEach((i) => selectedTeamIdxs.add(i));
            else visibleOrigIdxs.forEach((i) => selectedTeamIdxs.delete(i));
            updateDeleteTeamBtn();
            renderTeamsTable();
          },
        });
        selectAllTh.appendChild(selectAllCb);
        headerRow2.insertBefore(selectAllTh, headerRow2.firstChild);
        thead.appendChild(headerRow2);

        const tbody = document.createElement("tbody");
        tbody.className = "divide-y divide-white/10";
        sorted.forEach((t) => {
          const origIdx = userTeams.indexOf(t);
          const row = document.createElement("tr");
          row.className = "border-t border-white/10";
          const cbCell = document.createElement("td");
          cbCell.className = "w-10 px-2 py-2.5 text-center";
          const cb = buildQuizStyleCheckbox({
            checked: selectedTeamIdxs.has(origIdx),
            ariaLabel: t.teamName,
            onChange: (checked) => {
              if (checked) selectedTeamIdxs.add(origIdx);
              else selectedTeamIdxs.delete(origIdx);
              updateDeleteTeamBtn();
              renderTeamsTable();
            },
          });
          cbCell.appendChild(cb);
          const teamCell = document.createElement("td");
          teamCell.className = "px-4 py-2.5 text-sm text-white";
          teamCell.textContent = t.teamName;
          const roleCell = document.createElement("td");
          roleCell.className = "px-4 py-2.5";
          roleCell.appendChild(buildRoleBadge(t.role, lang));
          row.appendChild(cbCell);
          row.appendChild(teamCell);
          row.appendChild(roleCell);
          tbody.appendChild(row);
        });
        table.appendChild(thead);
        table.appendChild(tbody);
        tableWrap.appendChild(table);
        teamsWrap.appendChild(tableWrap);
      };

      renderTeamsTable();

      addTeamBtn.addEventListener("click", () => {
        const existingNames = userTeams.map((t) => t.teamName);
        const available = ADMIN_AVAILABLE_TEAMS.filter((tn) => !existingNames.includes(tn));
        if (!available.length) {
          showToast(safeLang === "en" ? "User is already in all teams" : "Nutzer ist bereits in allen Teams", "info");
          return;
        }
        const selWrapper = createSearchableSelect({
          items: available.map((n) => ({ value: n, label: n })),
          placeholder: safeLang === "en" ? "Search teams…" : "Teams suchen…",
          getExcluded: () => userTeams.map((t) => t.teamName),
        });
        selWrapper.classList.add("flex-1");
        const roleSelect = createModalSelect(getRoleOptions(safeLang), "user");
        roleSelect.className = roleSelect.className.replace("w-full", "");
        roleSelect.style.width = "8rem";
        const selectRow = document.createElement("div");
        selectRow.className = "flex items-center gap-2";
        selectRow.appendChild(selWrapper);
        selectRow.appendChild(roleSelect);
        const overlay = createModalOverlay();
        const modal = createModalCard();
        modal.innerHTML = "";
        const heading = document.createElement("p");
        heading.className = "text-sm font-semibold text-white mb-2";
        heading.textContent = safeLang === "en" ? "Add to team" : "Zum Team hinzufügen";
        const btns = document.createElement("div");
        btns.className = "flex gap-3 mt-3";
        const confirmBtn = document.createElement("button");
        confirmBtn.type = "button";
        confirmBtn.className = `flex-1 ${BUTTON_PRIMARY_BASE}`;
        confirmBtn.textContent = safeLang === "en" ? "Add" : "Hinzufügen";
        confirmBtn.addEventListener("click", () => {
          const sel = selWrapper.value;
          if (sel) {
            userTeams.push({ teamName: sel, role: roleSelect.value || "user" });
            selectedTeamIdxs.clear();
            updateDeleteTeamBtn();
            renderTeamsTable();
            showToast(safeLang === "en" ? "Team added" : "Team hinzugefügt", "success");
          }
          overlay.remove();
        });
        const cancelBtn = document.createElement("button");
        cancelBtn.type = "button";
        cancelBtn.className = `flex-1 ${BUTTON_SECONDARY_BASE}`;
        cancelBtn.textContent = safeLang === "en" ? "Cancel" : "Abbrechen";
        cancelBtn.addEventListener("click", () => overlay.remove());
        btns.appendChild(confirmBtn);
        btns.appendChild(cancelBtn);
        modal.appendChild(heading);
        modal.appendChild(selectRow);
        modal.appendChild(btns);
        overlay.appendChild(modal);
        document.body.appendChild(overlay);
      });

      deleteTeamBtn.addEventListener("click", () => {
        if (!selectedTeamIdxs.size) return;
        const names = [...selectedTeamIdxs].map((i) => userTeams[i]?.teamName).filter(Boolean);
        const overlay = createModalOverlay();
        const modal = createModalCard();
        modal.innerHTML = "";
        const msg = document.createElement("p");
        msg.className = "text-sm text-gray-200 mb-4";
        msg.textContent = safeLang === "en"
          ? `Remove user from ${names.length} team(s)?`
          : `Nutzer aus ${names.length} Team(s) entfernen?`;
        const btns = document.createElement("div");
        btns.className = "flex gap-3";
        const confirmBtn = document.createElement("button");
        confirmBtn.type = "button";
        confirmBtn.className = `flex-1 ${BUTTON_DANGER_STRONG_BASE}`;
        confirmBtn.textContent = safeLang === "en" ? "Remove" : "Entfernen";
        confirmBtn.addEventListener("click", () => {
          const idxsDesc = [...selectedTeamIdxs].sort((a, b) => b - a);
          idxsDesc.forEach((i) => userTeams.splice(i, 1));
          selectedTeamIdxs.clear();
          updateDeleteTeamBtn();
          renderTeamsTable();
          overlay.remove();
          showToast(safeLang === "en" ? "Removed from team(s)" : "Aus Team(s) entfernt", "success");
        });
        const cancelBtn = document.createElement("button");
        cancelBtn.type = "button";
        cancelBtn.className = `flex-1 ${BUTTON_SECONDARY_BASE}`;
        cancelBtn.textContent = safeLang === "en" ? "Cancel" : "Abbrechen";
        cancelBtn.addEventListener("click", () => overlay.remove());
        btns.appendChild(confirmBtn);
        btns.appendChild(cancelBtn);
        modal.appendChild(msg);
        modal.appendChild(btns);
        overlay.appendChild(modal);
        document.body.appendChild(overlay);
      });

      // --- Courses section with Reset progress button ---
      const coursesHeader = document.createElement("div");
      coursesHeader.className = "flex items-center justify-between gap-2";
      const coursesLabel = document.createElement("p");
      coursesLabel.className = "text-xs uppercase tracking-wide text-gray-400";
      coursesLabel.textContent = safeLang === "en" ? "Courses & certificates" : "Kurse & Zertifikate";
      const resetProgressBtn = document.createElement("button");
      resetProgressBtn.type = "button";
      resetProgressBtn.disabled = true;
      resetProgressBtn.className = `${BUTTON_DANGER_BASE} inline-flex items-center gap-1.5 opacity-50 cursor-not-allowed`;
      resetProgressBtn.innerHTML = `<svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor" shape-rendering="crispEdges" aria-hidden="true"><rect x="1" y="7" width="2" height="2"/><rect x="3" y="5" width="2" height="2"/><rect x="5" y="3" width="6" height="2"/><rect x="11" y="5" width="2" height="2"/><rect x="13" y="7" width="2" height="4"/><rect x="11" y="11" width="2" height="2"/><rect x="5" y="13" width="6" height="2"/><rect x="3" y="11" width="2" height="2"/><rect x="7" y="1" width="2" height="4"/><rect x="9" y="3" width="2" height="2"/></svg><span>${safeLang === "en" ? "Reset progress" : "Fortschritt zurücksetzen"}</span>`;
      const updateResetBtn = (count) => {
        if (count > 0) {
          resetProgressBtn.disabled = false;
          resetProgressBtn.className = `${BUTTON_DANGER_BASE} inline-flex items-center gap-1.5`;
        } else {
          resetProgressBtn.disabled = true;
          resetProgressBtn.className = `${BUTTON_DANGER_BASE} inline-flex items-center gap-1.5 opacity-50 cursor-not-allowed`;
        }
      };
      const coursesTable = buildUserCoursesTable(user, lang, { onSelectionChange: updateResetBtn });
      resetProgressBtn.addEventListener("click", () => {
        if (resetProgressBtn.disabled) return;
        const selectedNames = coursesTable.getSelectedCourseNames?.() || [];
        if (!selectedNames.length) return;
        const overlay = createModalOverlay();
        const modal = createModalCard();
        modal.innerHTML = "";
        const msg = document.createElement("p");
        msg.className = "text-sm text-gray-200 mb-4";
        msg.textContent = safeLang === "en"
          ? `Reset progress for ${selectedNames.length} course(s)?`
          : `Fortschritt für ${selectedNames.length} Kurs(e) zurücksetzen?`;
        const btns = document.createElement("div");
        btns.className = "flex gap-3";
        const confirmBtn = document.createElement("button");
        confirmBtn.type = "button";
        confirmBtn.className = `flex-1 ${BUTTON_DANGER_STRONG_BASE}`;
        confirmBtn.textContent = safeLang === "en" ? "Reset" : "Zurücksetzen";
        confirmBtn.addEventListener("click", () => {
          const nameSet = new Set(selectedNames);
          user.courseCompletions = (user.courseCompletions || []).filter((c) => !nameSet.has(c.course));
          ADMIN_COURSE_ASSIGNMENTS.filter((a) => a.userId === user.id && nameSet.has(a.courseName))
            .forEach((a) => { a.progress = 0; a.status = "in_progress"; });
          overlay.remove();
          showToast(safeLang === "en" ? "Progress reset" : "Fortschritt zurückgesetzt", "success");
          showUserViewModal(user, returnTo);
        });
        const cancelBtn = document.createElement("button");
        cancelBtn.type = "button";
        cancelBtn.className = `flex-1 ${BUTTON_SECONDARY_BASE}`;
        cancelBtn.textContent = safeLang === "en" ? "Cancel" : "Abbrechen";
        cancelBtn.addEventListener("click", () => overlay.remove());
        btns.appendChild(confirmBtn);
        btns.appendChild(cancelBtn);
        modal.appendChild(msg);
        modal.appendChild(btns);
        overlay.appendChild(modal);
        document.body.appendChild(overlay);
      });
      coursesHeader.appendChild(coursesLabel);
      coursesHeader.appendChild(resetProgressBtn);

      card.appendChild(headerRow);
      card.appendChild(statusRow);
      card.appendChild(teamsHeader);
      card.appendChild(teamsWrap);
      card.appendChild(coursesHeader);
      card.appendChild(coursesTable);

      const usersLabel = safeLang === "en" ? "Users & roles" : "Nutzer & Rollen";
      showDetailView(card, [
        { label: usersLabel, onClick: () => hideDetailView() },
        { label: user.name },
      ]);
    }

    function showEditUserModal(user, returnTo) {
      const lang = resolveCurrentLang();
      const safeLang = lang === "en" ? "en" : "de";

      const card = document.createElement("div");
      card.className = "space-y-4";

      const title = document.createElement("h3");
      title.className = "text-lg font-bold text-white";
      title.textContent = safeLang === "en" ? "Edit user" : "Nutzer bearbeiten";

      const { section: avatarSection } = buildUserModalAvatar(user);
      const infoBlock = document.createElement("div");
      infoBlock.className = "flex-1 space-y-2";
      const nameInput = createModalInput("text", "Name", user.name);
      const emailInput = createModalInput("email", "E-Mail", user.email);
      infoBlock.appendChild(nameInput);
      infoBlock.appendChild(emailInput);
      avatarSection.appendChild(infoBlock);

      // Editable teams list
      const editTeams = (user.teams || []).map((t) => ({ ...t }));
      const originalTeamsJson = JSON.stringify(editTeams);
      const teamsSection = document.createElement("div");
      teamsSection.className = "space-y-2";
      const teamsLabel = document.createElement("p");
      teamsLabel.className = "text-xs uppercase tracking-wide text-gray-400";
      teamsLabel.textContent = safeLang === "en" ? "Teams & roles" : "Teams & Rollen";
      const teamListEl = document.createElement("div");
      teamListEl.className = "space-y-2";
      teamsSection.appendChild(teamsLabel);
      teamsSection.appendChild(teamListEl);

      // Add team row
      const addRow = document.createElement("div");
      addRow.className = "flex items-center gap-2";
      const addSelect = createSearchableSelect({
        items: ADMIN_AVAILABLE_TEAMS.map((t) => ({ value: t, label: t })),
        placeholder: safeLang === "en" ? "Add team\u2026" : "Team hinzuf\u00FCgen\u2026",
        getExcluded: () => editTeams.map((t) => t.teamName),
      });
      addSelect.classList.add("flex-1");
      const addBtn = document.createElement("button");
      addBtn.type = "button";
      addBtn.className = "flex-shrink-0 w-8 h-8 rounded-lg border border-green-500/30 bg-green-500/10 flex items-center justify-center text-green-400 hover:bg-green-500/25";
      addBtn.innerHTML = '<svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" shape-rendering="crispEdges"><rect x="7" y="2" width="2" height="12"/><rect x="2" y="7" width="12" height="2"/></svg>';
      addRow.appendChild(addSelect);
      addRow.appendChild(addBtn);
      teamsSection.appendChild(addRow);

      function renderEditTeamList() {
        teamListEl.innerHTML = "";
        editTeams.forEach((t, idx) => {
          const row = document.createElement("div");
          row.className = "flex items-center gap-2 rounded-lg bg-white/5 border border-white/10 px-3 py-2";
          const teamNameEl = document.createElement("span");
          teamNameEl.className = "text-sm text-white flex-1 min-w-0 truncate";
          teamNameEl.textContent = t.teamName;
          const roleSelect = createModalSelect(getRoleOptions(safeLang), t.role);
          roleSelect.className = roleSelect.className.replace("w-full", "");
          roleSelect.style.width = "8rem";
          roleSelect.addEventListener("change", () => { editTeams[idx].role = roleSelect.value; });
          const removeBtn = document.createElement("button");
          removeBtn.type = "button";
          removeBtn.className = "flex-shrink-0 w-7 h-7 rounded-lg border border-red-500/30 bg-red-500/10 flex items-center justify-center text-red-400 hover:bg-red-500/25";
          removeBtn.innerHTML = '<svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor" shape-rendering="crispEdges"><rect x="2" y="7" width="12" height="2"/></svg>';
          removeBtn.addEventListener("click", () => {
            const confirmOverlay = createModalOverlay();
            confirmOverlay.style.zIndex = "10001";
            const confirmCard = createModalCard();
            confirmCard.style.maxWidth = "22rem";
            const msg = document.createElement("p");
            msg.className = "text-sm text-white font-semibold";
            msg.textContent = safeLang === "en"
              ? `Remove ${user.name} from ${t.teamName}?`
              : `${user.name} aus ${t.teamName} entfernen?`;
            const btns = document.createElement("div");
            btns.className = "flex gap-3 pt-2";
            const keepBtn = document.createElement("button");
            keepBtn.type = "button";
            keepBtn.className = `flex-1 ${BUTTON_SECONDARY_BASE}`;
            keepBtn.textContent = safeLang === "en" ? "Cancel" : "Abbrechen";
            const confirmRemBtn = document.createElement("button");
            confirmRemBtn.type = "button";
            confirmRemBtn.className = `flex-1 ${BUTTON_DANGER_STRONG_BASE}`;
            confirmRemBtn.textContent = safeLang === "en" ? "Remove" : "Entfernen";
            btns.appendChild(keepBtn);
            btns.appendChild(confirmRemBtn);
            confirmCard.appendChild(msg);
            confirmCard.appendChild(btns);
            confirmOverlay.appendChild(confirmCard);
            document.body.appendChild(confirmOverlay);
            keepBtn.addEventListener("click", () => confirmOverlay.remove());
            confirmOverlay.addEventListener("click", (e) => { if (e.target === confirmOverlay) confirmOverlay.remove(); });
            confirmRemBtn.addEventListener("click", () => {
              confirmOverlay.remove();
              editTeams.splice(idx, 1);
              renderEditTeamList();
            });
          });
          row.appendChild(teamNameEl);
          row.appendChild(roleSelect);
          row.appendChild(removeBtn);
          teamListEl.appendChild(row);
        });
      }
      renderEditTeamList();

      addBtn.addEventListener("click", () => {
        const teamName = addSelect.value;
        if (!teamName) return;
        editTeams.push({ teamName, role: "user" });
        addSelect.reset();
        renderEditTeamList();
      });

      // Track changes
      const originalData = { name: user.name, email: user.email };
      function hasChanges() {
        return nameInput.value !== originalData.name || emailInput.value !== originalData.email || JSON.stringify(editTeams) !== originalTeamsJson;
      }

      const saveBtn = document.createElement("button");
      saveBtn.type = "button";
      saveBtn.className = `w-full ${BUTTON_PRIMARY_LARGE_BASE}`;
      saveBtn.textContent = safeLang === "en" ? "Save" : "Speichern";

      const actions = document.createElement("div");
      actions.className = "flex gap-3 pt-2";
      const cancelBtn = document.createElement("button");
      cancelBtn.type = "button";
      cancelBtn.className = `flex-1 ${BUTTON_SECONDARY_BASE}`;
      cancelBtn.textContent = safeLang === "en" ? "Cancel" : "Abbrechen";
      const deleteBtn = document.createElement("button");
      deleteBtn.type = "button";
      deleteBtn.className = `flex-1 ${BUTTON_DANGER_BASE}`;
      deleteBtn.textContent = safeLang === "en" ? "Delete user" : "Nutzer löschen";
      actions.appendChild(cancelBtn);
      actions.appendChild(deleteBtn);

      card.appendChild(avatarSection);
      card.appendChild(teamsSection);
      card.appendChild(saveBtn);
      card.appendChild(actions);

      function goBack() {
        if (returnTo) returnTo();
        else { hideDetailView(); renderUsersPage(); }
      }

      cancelBtn.addEventListener("click", () => {
        if (!hasChanges()) { goBack(); return; }
        const co = createModalOverlay();
        const cc = createModalCard();
        cc.style.maxWidth = "20rem";
        const msg = document.createElement("p");
        msg.className = "text-sm text-gray-300";
        msg.textContent = safeLang === "en" ? "Discard unsaved changes?" : "Ungespeicherte \u00C4nderungen verwerfen?";
        const btns = document.createElement("div");
        btns.className = "flex gap-3 pt-2";
        const sb = document.createElement("button");
        sb.type = "button";
        sb.className = `flex-1 ${BUTTON_SECONDARY_BASE}`;
        sb.textContent = safeLang === "en" ? "Keep editing" : "Weiter bearbeiten";
        const db = document.createElement("button");
        db.type = "button";
        db.className = `flex-1 ${BUTTON_DANGER_STRONG_BASE}`;
        db.textContent = safeLang === "en" ? "Discard" : "Verwerfen";
        btns.appendChild(sb);
        btns.appendChild(db);
        cc.appendChild(msg);
        cc.appendChild(btns);
        co.appendChild(cc);
        document.body.appendChild(co);
        sb.addEventListener("click", () => co.remove());
        db.addEventListener("click", () => { co.remove(); goBack(); });
        co.addEventListener("click", (e) => { if (e.target === co) co.remove(); });
      });

      saveBtn.addEventListener("click", () => {
        user.teams = editTeams.map((t) => ({ ...t }));
        user.role = editTeams[0]?.role || "user";
        user.teamName = editTeams[0]?.teamName || "";
        user.name = nameInput.value.trim() || user.name;
        user.email = emailInput.value.trim() || user.email;
        showToast(safeLang === "en" ? "User updated" : "Nutzer aktualisiert", "success");
        goBack();
        renderAdminDashboard();
        renderUsersPage();
      });

      deleteBtn.addEventListener("click", () => {
        const co = createModalOverlay();
        const cc = createModalCard();
        cc.style.maxWidth = "20rem";
        const msg = document.createElement("p");
        msg.className = "text-sm text-white font-semibold";
        msg.textContent = safeLang === "en" ? "Delete this user?" : "Nutzer wirklich l\u00F6schen?";
        const det = document.createElement("p");
        det.className = "text-sm text-gray-400";
        det.textContent = safeLang === "en" ? `${user.name} will be permanently removed.` : `${user.name} wird dauerhaft entfernt.`;
        const btns = document.createElement("div");
        btns.className = "flex gap-3 pt-2";
        const kb = document.createElement("button");
        kb.type = "button";
        kb.className = `flex-1 ${BUTTON_SECONDARY_BASE}`;
        kb.textContent = safeLang === "en" ? "Cancel" : "Abbrechen";
        const cdb = document.createElement("button");
        cdb.type = "button";
        cdb.className = `flex-1 ${BUTTON_DANGER_STRONG_BASE}`;
        cdb.textContent = safeLang === "en" ? "Delete" : "L\u00F6schen";
        btns.appendChild(kb);
        btns.appendChild(cdb);
        cc.appendChild(msg);
        cc.appendChild(det);
        cc.appendChild(btns);
        co.appendChild(cc);
        document.body.appendChild(co);
        kb.addEventListener("click", () => co.remove());
        co.addEventListener("click", (e) => { if (e.target === co) co.remove(); });
        cdb.addEventListener("click", () => {
          co.remove();
          const result = authApi.deleteAdminUser(user.id);
          if (result.ok) {
            showToast(safeLang === "en" ? "User deleted" : "Nutzer gel\u00F6scht", "success");
            hideDetailView();
            renderAdminDashboard();
            renderUsersPage();
          } else {
            showToast(statusMessageFor("admin", result.error), "error");
          }
        });
      });

      const usersLabel = safeLang === "en" ? "Users & roles" : "Nutzer & Rollen";
      const editLabel = safeLang === "en" ? "Edit" : "Bearbeiten";
      showDetailView(card, [
        { label: usersLabel, onClick: () => { if (!hasChanges()) { hideDetailView(); } else { cancelBtn.click(); } } },
        { label: user.name, onClick: () => showUserViewModal(user, returnTo) },
        { label: editLabel },
      ]);
    }

    function showReactivateModal(user) {
      const lang = resolveCurrentLang();
      const safeLang = lang === "en" ? "en" : "de";
      const existing = document.getElementById("admin-modal");
      if (existing) existing.remove();

      const overlay = createModalOverlay();
      overlay.id = "admin-modal";
      const card = createModalCard();

      const title = document.createElement("h3");
      title.className = "text-lg font-bold text-white";
      title.textContent = safeLang === "en" ? "Reactivate user?" : "Nutzer reaktivieren?";

      const userSection = document.createElement("div");
      userSection.className = "flex items-center gap-3";
      const avatar = document.createElement("span");
      avatar.className = "flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white";
      avatar.style.backgroundColor = getInitialsColor(user.name);
      avatar.textContent = getUserInitials(user.name);
      const userInfo = document.createElement("div");
      const userName = document.createElement("p");
      userName.className = "text-sm font-semibold text-white";
      userName.textContent = user.name;
      const userEmail = document.createElement("p");
      userEmail.className = "text-xs text-gray-400";
      userEmail.textContent = user.email;
      userInfo.appendChild(userName);
      userInfo.appendChild(userEmail);
      userSection.appendChild(avatar);
      userSection.appendChild(userInfo);

      const details = document.createElement("div");
      details.className = "rounded-lg bg-white/5 border border-white/10 p-3 text-sm text-gray-300";
      details.textContent = safeLang === "en"
        ? `This will reactivate the account for ${user.name} and restore access.`
        : `Der Account von ${user.name} wird reaktiviert und der Zugang wiederhergestellt.`;

      const actions = document.createElement("div");
      actions.className = "flex gap-3 pt-2";
      const cancelBtn = document.createElement("button");
      cancelBtn.type = "button";
      cancelBtn.className = `flex-1 ${BUTTON_SECONDARY_BASE}`;
      cancelBtn.textContent = safeLang === "en" ? "Cancel" : "Abbrechen";
      const confirmBtn = document.createElement("button");
      confirmBtn.type = "button";
      confirmBtn.className = "flex-1 rounded-lg border border-green-500/40 bg-green-500/20 px-3 py-2 text-sm font-semibold text-green-300 hover:bg-green-500/30";
      confirmBtn.textContent = safeLang === "en" ? "Reactivate" : "Reaktivieren";

      actions.appendChild(cancelBtn);
      actions.appendChild(confirmBtn);
      card.appendChild(title);
      card.appendChild(userSection);
      card.appendChild(details);
      card.appendChild(actions);
      overlay.appendChild(card);
      document.body.appendChild(overlay);

      function close() { overlay.remove(); }
      cancelBtn.addEventListener("click", close);
      overlay.addEventListener("click", (e) => { if (e.target === overlay) close(); });
      confirmBtn.addEventListener("click", () => {
        const users = authApi.getAdminDashboardData()?.users || [];
        const target = users.find((u) => u.id === user.id);
        if (target) {
          target.active = true;
          target.lastLogin = new Date().toISOString();
        }
        close();
        showToast(safeLang === "en" ? "User reactivated" : "Nutzer reaktiviert", "success");
        renderAdminDashboard();
        renderUsersPage();
      });
      confirmBtn.focus();
    }

    function showRequestConfirmModal(req, approve, lang) {
      const safeLang = lang === "en" ? "en" : "de";
      const existing = document.getElementById("admin-request-confirm-modal");
      if (existing) existing.remove();

      const overlay = document.createElement("div");
      overlay.id = "admin-request-confirm-modal";
      overlay.className = "fixed inset-0 z-[9999] flex items-center justify-center p-4";
      overlay.style.backgroundColor = "rgba(0,0,0,0.6)";
      overlay.style.backdropFilter = "blur(4px)";

      const card = document.createElement("div");
      card.className = "auth-mockup-panel rounded-2xl p-6 max-w-sm w-full space-y-4 shadow-2xl";
      card.style.border = "1px solid rgba(168,85,247,0.25)";

      const title = document.createElement("h3");
      title.className = "text-lg font-bold text-white";
      title.textContent = approve
        ? (safeLang === "en" ? "Approve request?" : "Anfrage genehmigen?")
        : (safeLang === "en" ? "Reject request?" : "Anfrage ablehnen?");

      const userSection = document.createElement("div");
      userSection.className = "flex items-center gap-3";
      const avatar = document.createElement("span");
      const initials = getUserInitials(req.userName || "?");
      avatar.className = "flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-white";
      avatar.style.backgroundColor = getInitialsColor(req.userName || "?");
      avatar.textContent = initials;
      const userInfo = document.createElement("div");
      const userName = document.createElement("p");
      userName.className = "text-sm font-semibold text-white";
      userName.textContent = req.userName || req.userId;
      const userEmail = document.createElement("p");
      userEmail.className = "text-xs text-gray-400";
      userEmail.textContent = req.userId ? `ID: ${req.userId}` : "";
      userInfo.appendChild(userName);
      userInfo.appendChild(userEmail);
      userSection.appendChild(avatar);
      userSection.appendChild(userInfo);

      const details = document.createElement("div");
      details.className = "rounded-lg bg-white/5 border border-white/10 p-3 space-y-1 text-sm";
      const courseLine = document.createElement("p");
      courseLine.className = "text-gray-300";
      courseLine.innerHTML = `<span class="text-gray-400">${safeLang === "en" ? "Course:" : "Kurs:"}</span> ${req.courseName || "—"}`;
      const statusLine = document.createElement("p");
      statusLine.className = "text-gray-300";
      statusLine.innerHTML = `<span class="text-gray-400">Status:</span> <span class="text-yellow-400">${safeLang === "en" ? "Pending" : "Offen"}</span>`;
      const dateLine = document.createElement("p");
      dateLine.className = "text-gray-300";
      dateLine.innerHTML = `<span class="text-gray-400">${safeLang === "en" ? "Requested:" : "Angefragt:"}</span> ${req.createdAt ? new Date(req.createdAt).toLocaleDateString(safeLang) : "—"}`;
      details.appendChild(courseLine);
      details.appendChild(statusLine);
      details.appendChild(dateLine);

      const actions = document.createElement("div");
      actions.className = "flex gap-3 pt-2";
      const cancelBtn = document.createElement("button");
      cancelBtn.type = "button";
      cancelBtn.className = `flex-1 ${BUTTON_SECONDARY_BASE} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400`;
      cancelBtn.textContent = safeLang === "en" ? "Cancel" : "Abbrechen";
      const confirmBtn = document.createElement("button");
      confirmBtn.type = "button";
      confirmBtn.className = approve
        ? "flex-1 rounded-lg border border-green-500/40 bg-green-500/20 px-3 py-2 text-sm font-semibold text-green-300 hover:bg-green-500/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400"
        : `flex-1 ${BUTTON_DANGER_STRONG_BASE} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400`;
      confirmBtn.textContent = approve
        ? (safeLang === "en" ? "Approve" : "Genehmigen")
        : (safeLang === "en" ? "Reject" : "Ablehnen");
      actions.appendChild(cancelBtn);
      actions.appendChild(confirmBtn);

      card.appendChild(title);
      card.appendChild(userSection);
      card.appendChild(details);
      card.appendChild(actions);
      overlay.appendChild(card);
      document.body.appendChild(overlay);

      function close() { overlay.remove(); }
      cancelBtn.addEventListener("click", close);
      overlay.addEventListener("click", (e) => { if (e.target === overlay) close(); });
      confirmBtn.addEventListener("click", () => {
        const result = authApi.resolveAdminEnrollmentRequest({ requestId: req.id, approve });
        close();
        const currentLang = resolveCurrentLang();
        if (result.ok) {
          renderDashboardRequests(currentLang);
          renderAdminNotifications();
          renderAdminDashboard(selectedAdminUserId);
        }
        const msg = result.ok
          ? tProfile(approve ? "admin.status.requestApproved" : "admin.status.requestRejected", currentLang)
          : statusMessageFor("admin", result.error);
        showToast(msg, result.ok ? "success" : "error");
      });
      confirmBtn.focus();
    }

    function renderDashboardRequests(lang) {
      if (!adminDashboardRequests) return;
      const safeLang = lang === "en" ? "en" : "de";
      const requests = authApi.getAdminEnrollmentRequests?.() || [];
      const pending = requests.filter((n) => n.status === "pending");
      if (adminRequestBadge) adminRequestBadge.textContent = String(pending.length);
      if (adminNavRequestCount) adminNavRequestCount.textContent = String(pending.length);
      if (adminKpiOpenRequests) adminKpiOpenRequests.textContent = String(pending.length);
      adminDashboardRequests.innerHTML = "";
      if (!pending.length) {
        const li = document.createElement("li");
        li.className = "text-sm text-gray-400";
        li.textContent = safeLang === "en" ? "No open requests" : "Keine offenen Anfragen";
        adminDashboardRequests.appendChild(li);
        return;
      }
      pending.forEach((req) => {
        const li = document.createElement("li");
        li.className = "flex items-center gap-3";
        const avatar = document.createElement("span");
        const initials = getUserInitials(req.userName || "?");
        const color = getInitialsColor(req.userName || "?");
        avatar.className = "flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white";
        avatar.style.backgroundColor = color;
        avatar.textContent = initials;
        const info = document.createElement("div");
        info.className = "flex-1 min-w-0";
        const name = document.createElement("p");
        name.className = "text-sm font-semibold text-white truncate";
        name.textContent = req.userName || req.userId;
        const desc = document.createElement("p");
        desc.className = "text-xs text-gray-400 truncate";
        desc.textContent = safeLang === "en"
          ? `Course access: ${req.courseName || ""}`
          : `Kurs-Zugang: ${req.courseName || ""}`;
        info.appendChild(name);
        info.appendChild(desc);

        const btnWrap = document.createElement("div");
        btnWrap.className = "flex-shrink-0 flex items-center gap-1.5";
        const approveBtn = document.createElement("button");
        approveBtn.type = "button";
        approveBtn.className = "w-8 h-8 rounded-lg border border-green-500/30 bg-green-500/10 flex items-center justify-center text-green-400 hover:bg-green-500/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400";
        approveBtn.setAttribute("aria-label", safeLang === "en" ? "Approve" : "Genehmigen");
        approveBtn.innerHTML = '<svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" shape-rendering="crispEdges"><rect x="11" y="3" width="2" height="2"/><rect x="9" y="5" width="2" height="2"/><rect x="7" y="7" width="2" height="2"/><rect x="5" y="9" width="2" height="2"/><rect x="3" y="7" width="2" height="2"/></svg>';
        const rejectBtn = document.createElement("button");
        rejectBtn.type = "button";
        rejectBtn.className = "w-8 h-8 rounded-lg border border-red-500/30 bg-red-500/10 flex items-center justify-center text-red-400 hover:bg-red-500/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400";
        rejectBtn.setAttribute("aria-label", safeLang === "en" ? "Reject" : "Ablehnen");
        rejectBtn.innerHTML = '<svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" shape-rendering="crispEdges"><rect x="3" y="3" width="2" height="2"/><rect x="11" y="3" width="2" height="2"/><rect x="5" y="5" width="2" height="2"/><rect x="9" y="5" width="2" height="2"/><rect x="7" y="7" width="2" height="2"/><rect x="5" y="9" width="2" height="2"/><rect x="9" y="9" width="2" height="2"/><rect x="3" y="11" width="2" height="2"/><rect x="11" y="11" width="2" height="2"/></svg>';
        approveBtn.addEventListener("click", () => showRequestConfirmModal(req, true, lang));
        rejectBtn.addEventListener("click", () => showRequestConfirmModal(req, false, lang));
        btnWrap.appendChild(approveBtn);
        btnWrap.appendChild(rejectBtn);

        li.appendChild(avatar);
        li.appendChild(info);
        li.appendChild(btnWrap);
        adminDashboardRequests.appendChild(li);
      });
    }

    function renderDashboardAssignments(lang, opts = {}) {
      const { limit = OVERVIEW_ROW_LIMIT, tbody = adminDashboardAssignments, thead = adminDashAssignThead } = opts;
      if (!tbody) return;
      const safeLang = lang === "en" ? "en" : "de";
      const str = ADMIN_UI_STRINGS[safeLang];
      const data = authApi.getAdminDashboardData();
      const users = data?.users || [];
      const userMap = {};
      users.forEach((u) => { userMap[u.id] = u; });

      const dashStatusLabels = { completed: str["enrollments.completed"] || "Abgeschlossen", in_progress: str["enrollments.inProgress"] || "In Bearbeitung", paused: str["enrollments.paused"] || "Pausiert", overdue: str["enrollments.overdue"] || "\u00DCberf\u00E4llig" };
      const dashAllCourses = [...new Set(ADMIN_COURSE_ASSIGNMENTS.map((a) => a.courseName))];
      const dashAllStatuses = [...new Set(ADMIN_COURSE_ASSIGNMENTS.map((a) => dashStatusLabels[a.status] || a.status))];
      const dashStatusPillStyles = {
        [dashStatusLabels.completed]: PILL_STYLE_GREEN,
        [dashStatusLabels.in_progress]: PILL_STYLE_BLUE,
        [dashStatusLabels.paused]: PILL_STYLE_AMBER,
        [dashStatusLabels.overdue]: PILL_STYLE_RED,
      };
      const dashStatusCounts = buildCountMap(ADMIN_COURSE_ASSIGNMENTS, (a) => dashStatusLabels[a.status] || a.status);
      const dashCourseCounts = buildCountMap(ADMIN_COURSE_ASSIGNMENTS, (a) => a.courseName);
      if (thead) {
        thead.innerHTML = "";
        thead.appendChild(createFilterableHeader([
          { key: "user", label: str["table.user"] || "Nutzer", filterable: true },
          { key: "course", label: str["enrollments.course"] || "Kurs", filterable: true, options: dashAllCourses, counts: dashCourseCounts },
          { key: "progress", label: str["enrollments.progress"] || "Fortschritt", filterable: true },
          { key: "status", label: "Status", filterable: true, options: dashAllStatuses, pillStyles: dashStatusPillStyles, counts: dashStatusCounts },
        ], dashAssignColFilters, () => renderDashboardAssignments(lang, opts), dashAssignSortState, () => renderDashboardAssignments(lang, opts)));
      }

      let dashFiltered = ADMIN_COURSE_ASSIGNMENTS.map((a) => ({ ...a, user: userMap[a.userId] })).filter((a) => a.user);
      const dashGetters = {
        user: (a) => a.user?.name || "",
        course: (a) => a.courseName,
        progress: (a) => Number(a.progress) || 0,
        status: (a) => dashStatusLabels[a.status] || a.status,
      };
      dashFiltered = applyColumnFilters(dashFiltered, dashAssignColFilters, dashGetters);
      dashFiltered = applySort(dashFiltered, dashAssignSortState, dashGetters);
      if (limit != null && Number.isFinite(limit)) dashFiltered = dashFiltered.slice(0, limit);

      tbody.innerHTML = "";
      dashFiltered.forEach((a) => {
        const user = a.user;
        if (!user) return;
        const row = document.createElement("tr");
        row.className = "border-t border-white/10";

        const userCell = document.createElement("td");
        userCell.className = "px-4 py-2.5";
        userCell.appendChild(buildUserCellContent(user.name, user.email));

        const courseCell = document.createElement("td");
        courseCell.className = "px-4 py-2.5 text-sm text-gray-300";
        courseCell.textContent = a.courseName;

        const progressCell = document.createElement("td");
        progressCell.className = "px-4 py-2.5";
        const assignmentStatusColor = a.status === "completed" ? "#22c55e"
          : a.status === "paused" ? "#f59e0b"
          : a.status === "overdue" ? "#ef4444"
          : "#3b82f6";
        progressCell.appendChild(buildProgressBarCell(a.progress, {
          color: assignmentStatusColor,
          barWidthClass: "w-16",
          pctWidthClass: "",
        }));

        const statusCell = document.createElement("td");
        statusCell.className = "px-4 py-2.5";
        const statusLabelMap = {
          completed: str["enrollments.completed"] || "Abgeschlossen",
          in_progress: str["enrollments.inProgress"] || "In Bearbeitung",
          paused: str["enrollments.paused"] || "Pausiert",
          overdue: str["enrollments.overdue"] || "\u00DCberf\u00E4llig",
        };
        const pillStyle = ENROLLMENT_STATUS_PILL_STYLES[a.status] || PILL_STYLE_RED;
        const label = statusLabelMap[a.status] || statusLabelMap.overdue;
        statusCell.appendChild(buildStatusBadge(label, pillStyle, { size: "micro" }));

        row.appendChild(userCell);
        row.appendChild(courseCell);
        row.appendChild(progressCell);
        row.appendChild(statusCell);
        tbody.appendChild(row);
      });
    }

    function renderDashboardActivity(lang) {
      if (!adminDashboardActivity) return;
      const safeLang = lang === "en" ? "en" : "de";
      adminDashboardActivity.innerHTML = "";
      ADMIN_DASHBOARD_ACTIVITY.forEach((entry) => {
        const li = document.createElement("li");
        li.className = "flex items-start gap-3";
        const dot = document.createElement("span");
        dot.className = "flex-shrink-0 w-2.5 h-2.5 rounded-full mt-1.5";
        dot.style.backgroundColor = entry.color;
        const content = document.createElement("div");
        const text = document.createElement("p");
        text.className = "text-sm text-gray-200";
        text.textContent = entry.text[safeLang];
        const time = document.createElement("p");
        time.className = "text-xs text-gray-500";
        time.textContent = entry.time[safeLang];
        content.appendChild(text);
        content.appendChild(time);
        li.appendChild(dot);
        li.appendChild(content);
        adminDashboardActivity.appendChild(li);
      });
    }

    // --- Users & Roles page ---
    const usersColFilters = {};
    const enrollmentsColFilters = {};
    const dashAssignColFilters = {};
    const teamsColFilters = {};
    const coursesColFilters = {};
    const resolvedColFilters = {};
    const usersSortState = { key: null, direction: "asc" };
    const enrollmentsSortState = { key: null, direction: "asc" };
    const dashAssignSortState = { key: null, direction: "asc" };
    const teamsSortState = { key: null, direction: "asc" };
    const coursesSortState = { key: null, direction: "asc" };
    const resolvedSortState = { key: null, direction: "asc" };

    function getUserStatus(user) {
      if (user.status === "invited" || (user.active && !user.lastLogin)) return "invited";
      if (user.active) return "active";
      return "inactive";
    }

    function formatLastLogin(isoDate, lang) {
      if (!isoDate) return "—";
      const safeLang = lang === "en" ? "en" : "de";
      const date = new Date(isoDate);
      const now = new Date();
      const diffMs = now - date;
      const diffDays = Math.floor(diffMs / 86400000);
      const time = date.toLocaleTimeString(safeLang, { hour: "2-digit", minute: "2-digit" });
      if (diffDays === 0) return `${safeLang === "en" ? "Today" : "Heute"}, ${time}`;
      if (diffDays === 1) return `${safeLang === "en" ? "Yesterday" : "Gestern"}, ${time}`;
      return safeLang === "en" ? `${diffDays} days ago` : `vor ${diffDays} Tagen`;
    }

    function buildRoleBadge(role, lang) {
      const safeLang = lang === "en" ? "en" : "de";
      const label = ADMIN_PERMISSIONS_MATRIX.roleLabels[safeLang]?.[role] || role;
      const style = ROLE_PILL_STYLES[role] || ROLE_PILL_STYLES.user;
      const badge = document.createElement("span");
      badge.className = "inline-flex px-2 py-0.5 rounded-full text-xs font-bold whitespace-nowrap";
      badge.style.backgroundColor = style.bg;
      badge.style.border = `1px solid ${style.border}`;
      badge.style.color = style.text;
      badge.textContent = label;
      return badge;
    }

    function renderUsersPage() {
      if (adminUsersPageLazyCleanup) {
        adminUsersPageLazyCleanup();
        adminUsersPageLazyCleanup = null;
      }
      const lang = resolveCurrentLang();
      const safeLang = lang === "en" ? "en" : "de";
      const str = ADMIN_UI_STRINGS[safeLang];
      const data = authApi.getAdminDashboardData();
      const users = data?.users || [];

      // Filter users
      let filtered = users;

      // Column filters
      const userStatusLabelOf = (u) => { const s = getUserStatus(u); return s === "active" ? str["users.active"] : s === "inactive" ? str["users.inactive"] : str["users.invited"]; };
      const allStatuses = [...new Set(users.map(userStatusLabelOf))];
      const userStatusPillStyles = {
        [str["users.active"]]: PILL_STYLE_GREEN,
        [str["users.inactive"]]: PILL_STYLE_RED,
        [str["users.invited"]]: PILL_STYLE_BLUE,
      };
      const userStatusCounts = buildCountMap(users, userStatusLabelOf);
      if (adminUsersThead) {
        adminUsersThead.innerHTML = "";
        adminUsersThead.appendChild(createFilterableHeader([
          { key: "user", label: `${str["table.user"] || "Nutzer"} (${users.length})`, filterable: true },
          { key: "status", label: "Status", filterable: true, options: allStatuses, pillStyles: userStatusPillStyles, counts: userStatusCounts },
          { key: "login", label: str["users.lastLogin"] || "Letzter Login", filterable: true, type: "date" },
        ], usersColFilters, () => renderUsersPage(), usersSortState, () => renderUsersPage()));
      }
      const usersGetters = {
        user: (u) => u.name,
        status: (u) => { const s = getUserStatus(u); return s === "active" ? str["users.active"] : s === "inactive" ? str["users.inactive"] : str["users.invited"]; },
        login: { type: "date", getValue: (u) => u.lastLoginAt || u.lastLogin || "" },
      };
      filtered = applyColumnFilters(filtered, usersColFilters, usersGetters);
      filtered = applySort(filtered, usersSortState, usersGetters);

      // Table
      if (adminUsersPageTable) {
        adminUsersPageTable.innerHTML = "";
        if (!filtered.length) {
          const row = document.createElement("tr");
          const cell = document.createElement("td");
          cell.colSpan = 3;
          cell.className = "px-4 py-6 text-sm text-gray-400";
          cell.textContent = safeLang === "en" ? "No users found" : "Keine Nutzer gefunden";
          row.appendChild(cell);
          adminUsersPageTable.appendChild(row);
          return;
        }
        const lazyControls = createLazyTableControls(adminUsersPageTable, { colSpan: 3, lang: safeLang });
        adminUsersPageLazyCleanup = createLazyBatchRenderer({
          totalCount: filtered.length,
          initialCount: ADMIN_USERS_INITIAL_COUNT,
          batchSize: ADMIN_USERS_BATCH_SIZE,
          sentinel: lazyControls.sentinel,
          fallbackButton: lazyControls.fallbackButton,
          fallbackContainer: lazyControls.fallbackRow,
          showFallbackWithObserver: true,
          onStatus({ visibleCount, totalCount, hasMore }) {
            lazyControls.statusText.textContent = hasMore
              ? (safeLang === "en"
                  ? `Showing ${visibleCount} of ${totalCount} users`
                  : `${visibleCount} von ${totalCount} Nutzern angezeigt`)
              : (safeLang === "en"
                  ? `All ${totalCount} users loaded`
                  : `Alle ${totalCount} Nutzer geladen`);
          },
          render(visibleCount) {
            adminUsersPageTable.innerHTML = "";
            filtered.slice(0, visibleCount).forEach((user) => {
              const row = document.createElement("tr");
              row.className = "border-t border-white/10 hover:bg-white/5 transition-colors";
              const userCell = document.createElement("td");
              userCell.className = "px-4 py-3";
              userCell.appendChild(buildUserCellContent(user.name, user.email));

              const statusCell = document.createElement("td");
              statusCell.className = "px-4 py-3";
              const userSt = getUserStatus(user);
              const userStLabel = userSt === "invited" ? str["users.invited"]
                : userSt === "active" ? str["users.active"]
                : str["users.inactive"];
              statusCell.appendChild(buildStatusBadge(userStLabel, USER_STATUS_PILL_STYLES[userSt] || PILL_STYLE_RED));

              const loginCell = document.createElement("td");
              loginCell.className = "px-4 py-3 text-sm text-gray-400 whitespace-nowrap";
              loginCell.textContent = formatLastLogin(user.lastLogin, lang);

              row.appendChild(userCell);
              row.appendChild(statusCell);
              row.appendChild(loginCell);
              row.style.cursor = "pointer";
              row.addEventListener("click", () => { showUserViewModal(user); });
              adminUsersPageTable.appendChild(row);
            });
            lazyControls.append();
          },
        });
      }
    }

    function renderTeamsPage() {
      const lang = resolveCurrentLang();
      const safeLang = lang === "en" ? "en" : "de";
      const str = ADMIN_UI_STRINGS[safeLang];
      const data = authApi.getAdminDashboardData();
      const users = data?.users || [];

      // Compute per-team stats
      const teamStats = {};
      ADMIN_AVAILABLE_TEAMS.forEach((teamName) => {
        const members = users.filter((u) => (u.teams || []).some((t) => t.teamName === teamName));
        const quizzes = members.reduce((s, u) => s + (u.completedQuizzes || 0), 0);
        const certs = members.reduce((s, u) => s + (u.certificates?.length || 0), 0);
        const enrolled = members.reduce((s, u) => s + getUserEnrolledCourses(u).length, 0);
        const completed = members.reduce((s, u) => s + Math.min(u.completedQuizzes || 0, getUserEnrolledCourses(u).length), 0);
        const rate = enrolled > 0 ? Math.round((completed / enrolled) * 100) : 0;
        teamStats[teamName] = { members, quizzes, certs, rate };
      });
      // Teams table header
      const teamStatusLabelOf = (t) => (ADMIN_TEAM_DETAILS[t]?.active ? str["teams.active"] : str["teams.inactive"]);
      const allTeamStatuses = [...new Set(ADMIN_AVAILABLE_TEAMS.map(teamStatusLabelOf))];
      const teamStatusPillStyles = {
        [str["teams.active"]]: PILL_STYLE_GREEN,
        [str["teams.inactive"]]: PILL_STYLE_RED,
      };
      const teamStatusCounts = buildCountMap(ADMIN_AVAILABLE_TEAMS, teamStatusLabelOf);
      if (adminTeamsThead) {
        adminTeamsThead.innerHTML = "";
        adminTeamsThead.appendChild(createFilterableHeader([
          { key: "team", label: `Team (${ADMIN_AVAILABLE_TEAMS.length})`, filterable: true },
          { key: "members", label: str["teams.members"] || "Mitglieder", filterable: true },
          { key: "status", label: "Status", filterable: true, options: allTeamStatuses, pillStyles: teamStatusPillStyles, counts: teamStatusCounts },
          { key: "rate", label: str["teams.completion"] || "Abschlussrate", filterable: true },
        ], teamsColFilters, () => renderTeamsPage(), teamsSortState, () => renderTeamsPage()));
      }

      // Teams table
      if (adminTeamsTable) {
        adminTeamsTable.innerHTML = "";
        const teamsGetters = {
          team: (r) => r.team,
          status: (r) => r.status,
          members: (r) => Number(r.members) || 0,
          rate: (r) => Number(r.rate) || 0,
        };
        let teamRows = ADMIN_AVAILABLE_TEAMS.map((teamName) => {
          const detail = ADMIN_TEAM_DETAILS[teamName] || {};
          const stats = teamStats[teamName] || { members: [], quizzes: 0, certs: 0, rate: 0 };
          return {
            team: teamName,
            status: detail.active ? str["teams.active"] : str["teams.inactive"],
            members: Array.isArray(stats.members) ? stats.members.length : 0,
            rate: stats.rate,
          };
        });
        teamRows = applyColumnFilters(teamRows, teamsColFilters, teamsGetters);
        teamRows = applySort(teamRows, teamsSortState, teamsGetters);
        const filteredTeams = teamRows.map((r) => r.team);
        renderLazyRows(adminTeamsTable, filteredTeams, (teamName) => {
          const detail = ADMIN_TEAM_DETAILS[teamName] || {};
          const stats = teamStats[teamName] || { members: [], quizzes: 0, certs: 0, rate: 0 };
          const rate = stats.rate;

          const row = document.createElement("tr");
          row.className = "border-t border-white/10 hover:bg-white/5 transition-colors cursor-pointer";
          row.addEventListener("click", () => showTeamDetailModal(teamName, stats, lang));

          // Team name
          const nameCell = document.createElement("td");
          nameCell.className = "px-4 py-3";
          const nameEl = document.createElement("span");
          nameEl.className = "text-sm font-semibold text-white";
          nameEl.textContent = teamName;
          nameCell.appendChild(nameEl);

          // Members (count only)
          const membersCell = document.createElement("td");
          membersCell.className = "px-4 py-3";
          const countEl = document.createElement("span");
          countEl.className = "text-sm text-white";
          countEl.textContent = String(stats.members.length);
          membersCell.appendChild(countEl);

          // Status
          const statusCell = document.createElement("td");
          statusCell.className = "px-4 py-3";
          const teamStKey = detail.active ? "active" : "inactive";
          statusCell.appendChild(buildStatusBadge(
            detail.active ? str["teams.active"] : str["teams.inactive"],
            TEAM_STATUS_PILL_STYLES[teamStKey]
          ));

          // Completion rate
          const rateCell = document.createElement("td");
          rateCell.className = "px-4 py-3";
          rateCell.appendChild(buildProgressBarCell(rate));

          row.appendChild(nameCell);
          row.appendChild(membersCell);
          row.appendChild(statusCell);
          row.appendChild(rateCell);
          return row;
        });
      }
    }

    function renderCoursesPage() {
      const lang = resolveCurrentLang();
      const safeLang = lang === "en" ? "en" : "de";
      const str = ADMIN_UI_STRINGS[safeLang];
      const data = authApi.getAdminDashboardData();
      const users = data?.users || [];

      const courseNames = getAllCourseNames();

      const statusLabelOf = (s) => s === "active" ? str["courses.active"] : s === "draft" ? str["courses.draft"] : str["courses.archived"];
      const courseTagsOf = (c) => getCourseTags(c, safeLang);
      const courseStatusOf = (c) => statusLabelOf(getCourseDetail(c).status || "active");
      const scopeLabels = {
        global: safeLang === "en" ? "Official" : "Offiziell",
        organization: safeLang === "en" ? "Private" : "Privat",
      };
      const courseScopeOf = (c) => {
        const s = getCourseDetail(c).scope || "global";
        return scopeLabels[s] || scopeLabels.global;
      };
      const allTags = [...new Set(courseNames.flatMap(courseTagsOf).filter(Boolean))].sort((a, b) => a.localeCompare(b));
      const allStatuses = [...new Set(courseNames.map(courseStatusOf))];
      const allScopes = [scopeLabels.global, scopeLabels.organization];
      const coursesStatusPillStyles = {
        [str["courses.active"]]: PILL_STYLE_GREEN,
        [str["courses.draft"]]: PILL_STYLE_AMBER,
        [str["courses.archived"]]: PILL_STYLE_GRAY,
      };
      const coursesTagPillStyles = {};
      allTags.forEach((t) => { coursesTagPillStyles[t] = PILL_STYLE_TAG; });
      const coursesScopePillStyles = {
        [scopeLabels.global]: { bg: "rgba(56,189,248,0.15)", border: "rgba(56,189,248,0.4)", text: "#7dd3fc" },
        [scopeLabels.organization]: { bg: "rgba(99,102,241,0.15)", border: "rgba(99,102,241,0.4)", text: "#a5b4fc" },
      };
      const coursesStatusCounts = buildCountMap(courseNames, courseStatusOf);
      const coursesTagCounts = {};
      courseNames.forEach((c) => courseTagsOf(c).forEach((t) => { coursesTagCounts[t] = (coursesTagCounts[t] || 0) + 1; }));
      const coursesScopeCounts = buildCountMap(courseNames, courseScopeOf);

      if (adminCoursesThead) {
        adminCoursesThead.innerHTML = "";
        adminCoursesThead.appendChild(createFilterableHeader([
          { key: "course", label: `${safeLang === "en" ? "Course" : "Kurs"} (${courseNames.length})`, filterable: true },
          { key: "scope", label: safeLang === "en" ? "Scope" : "Geltungsbereich", filterable: true, options: allScopes, pillStyles: coursesScopePillStyles, counts: coursesScopeCounts },
          { key: "category", label: "Tags", filterable: true, options: allTags, pillStyles: coursesTagPillStyles, counts: coursesTagCounts },
          { key: "status", label: "Status", filterable: true, options: allStatuses, pillStyles: coursesStatusPillStyles, counts: coursesStatusCounts },
          { key: "enrolled", label: str["courses.enrolled"] || (safeLang === "en" ? "Enrolled" : "Teilnehmer"), filterable: true },
          { key: "completion", label: str["courses.completion"] || (safeLang === "en" ? "Completion" : "Abschluss"), filterable: true },
        ], coursesColFilters, () => renderCoursesPage(), coursesSortState, () => renderCoursesPage()));
      }

      if (adminCoursesTable) {
        adminCoursesTable.innerHTML = "";
        const rows = courseNames.map((courseName) => {
          const detail = getCourseDetail(courseName);
          const status = detail.status || "active";
          const enrolledUsers = users.filter((u) => getUserEnrolledCourses(u).includes(courseName));
          const completedUsers = users.filter((u) => (u.courseCompletions || []).some((c) => c.course === courseName));
          const rate = enrolledUsers.length > 0 ? Math.round((completedUsers.length / enrolledUsers.length) * 100) : 0;
          return { courseName, detail, status, enrolledUsers, completedUsers, rate };
        });
        const coursesGetters = {
          course: (r) => r.courseName,
          scope: (r) => courseScopeOf(r.courseName),
          category: (r) => courseTagsOf(r.courseName),
          status: (r) => statusLabelOf(r.status),
          enrolled: (r) => r.enrolledUsers.length,
          completion: (r) => r.rate,
        };
        let filtered = applyColumnFilters(rows, coursesColFilters, coursesGetters);
        filtered = applySort(filtered, coursesSortState, coursesGetters);

        renderLazyRows(adminCoursesTable, filtered, ({ courseName, detail, status, enrolledUsers, completedUsers, rate }) => {
          const row = document.createElement("tr");
          row.className = "border-t border-white/10 cursor-pointer hover:bg-white/5 transition-colors";
          row.addEventListener("click", () => showCourseDetailView(courseName, lang, false));

          const courseCell = document.createElement("td");
          courseCell.className = "px-4 py-3";
          const courseTitle = document.createElement("p");
          courseTitle.className = "text-sm font-semibold text-white";
          courseTitle.textContent = courseName;
          courseCell.appendChild(courseTitle);

          const scopeCell = document.createElement("td");
          scopeCell.className = "px-4 py-3";
          const scopeLabel = courseScopeOf(courseName);
          scopeCell.appendChild(buildStatusBadge(scopeLabel, coursesScopePillStyles[scopeLabel], { size: "micro" }));

          const categoryCell = document.createElement("td");
          categoryCell.className = "px-4 py-3";
          const tagsWrap = document.createElement("div");
          tagsWrap.className = "flex items-center gap-1 overflow-hidden flex-nowrap max-w-[16rem]";
          categoryCell.appendChild(tagsWrap);
          const rowTags = courseTagsOf(courseName);
          if (rowTags.length === 0) {
            const dash = document.createElement("span");
            dash.className = "text-xs text-gray-500";
            dash.textContent = "\u2014";
            tagsWrap.appendChild(dash);
          } else {
            renderTagPillsWithOverflow(tagsWrap, rowTags);
          }

          const statusCell = document.createElement("td");
          statusCell.className = "px-4 py-3";
          statusCell.appendChild(buildStatusBadge(
            statusLabelOf(status),
            COURSE_STATUS_PILL_STYLES[status] || PILL_STYLE_GRAY,
            { size: "micro" }
          ));

          const enrolledCell = document.createElement("td");
          enrolledCell.className = "px-4 py-3 text-sm text-gray-300";
          enrolledCell.textContent = status === "draft" ? "—" : String(status === "archived" ? completedUsers.length : enrolledUsers.length);

          const completionCell = document.createElement("td");
          completionCell.className = "px-4 py-3";
          if (status === "draft") {
            const dash = document.createElement("span");
            dash.className = "text-xs text-gray-500";
            dash.textContent = "—";
            completionCell.appendChild(dash);
          } else {
            completionCell.appendChild(buildProgressBarCell(rate));
          }

          row.appendChild(courseCell);
          row.appendChild(scopeCell);
          row.appendChild(categoryCell);
          row.appendChild(statusCell);
          row.appendChild(enrolledCell);
          row.appendChild(completionCell);
          return row;
        });
      }
    }

    function showCourseDetailView(courseName, lang, startInEditMode) {
      const safeLang = lang === "en" ? "en" : "de";
      const str = ADMIN_UI_STRINGS[safeLang];
      const detail = getCourseDetail(courseName);
      const data = authApi.getAdminDashboardData();
      const users = data?.users || [];
      const isEdit = Boolean(startInEditMode);
      const coursesLabel = safeLang === "en" ? "Course management" : "Kursverwaltung";
      const editLabel = safeLang === "en" ? "Edit" : "Bearbeiten";

      const enrolledUsers = users.filter((u) => getUserEnrolledCourses(u).includes(courseName));
      const completedUsers = users.filter((u) => (u.courseCompletions || []).some((c) => c.course === courseName));
      const rate = enrolledUsers.length > 0 ? Math.round((completedUsers.length / enrolledUsers.length) * 100) : 0;
      const assignedTeams = ADMIN_AVAILABLE_TEAMS.filter((t) => (ADMIN_TEAM_DETAILS[t]?.courses || []).includes(courseName));

      const editName = { value: courseName };
      const editStatus = { value: detail.status || "active" };
      const editTags = { values: getCourseTags(courseName, safeLang) };
      const editDescription = { value: detail.description?.[safeLang] || "" };
      const editTeams = [...assignedTeams];

      const card = document.createElement("div");
      card.className = "space-y-5";

      const statusLabelOf = (s) => s === "active" ? str["courses.active"] : s === "draft" ? str["courses.draft"] : str["courses.archived"];
      const coursePillStyleFor = (s) => COURSE_STATUS_PILL_STYLES[s] || PILL_STYLE_GRAY;

      // Header
      const headerEl = document.createElement("div");
      headerEl.className = "space-y-2";
      const nameRow = document.createElement("div");
      nameRow.className = "flex items-center gap-3 flex-wrap";

      const statusBadge = buildStatusBadge(statusLabelOf(editStatus.value), coursePillStyleFor(editStatus.value));

      const tagsEl = document.createElement("div");
      tagsEl.className = "flex items-center gap-1 flex-wrap";
      const refreshTagsEl = () => {
        tagsEl.innerHTML = "";
        if (editTags.values.length === 0) {
          const dash = document.createElement("span");
          dash.className = "text-xs text-gray-500";
          dash.textContent = "\u2014";
          tagsEl.appendChild(dash);
          return;
        }
        editTags.values.forEach((t) => tagsEl.appendChild(buildStatusBadge(t, PILL_STYLE_TAG, { size: "micro" })));
      };
      refreshTagsEl();

      if (isEdit) {
        const nameInput = document.createElement("input");
        nameInput.type = "text";
        nameInput.value = editName.value;
        nameInput.className = "bg-transparent border-b border-white/30 text-xl font-bold text-white flex-1 min-w-[200px] focus:outline-none focus:border-primary-400";
        nameInput.addEventListener("input", () => { editName.value = nameInput.value; });
        nameRow.appendChild(nameInput);
        nameRow.appendChild(statusBadge);
        headerEl.appendChild(nameRow);

        const editGrid = document.createElement("div");
        editGrid.className = "grid gap-3 sm:grid-cols-2";
        editGrid.appendChild(makeFieldInput(
          safeLang === "en" ? "Tags (comma-separated, max 5)" : "Tags (kommagetrennt, max. 5)",
          editTags.values.join(", "),
          (v) => {
            editTags.values = v.split(",").map((s) => s.trim()).filter(Boolean).slice(0, 5);
            refreshTagsEl();
          },
        ));
        const statusSelect = createModalSelect(
          [
            { value: "active", label: str["courses.active"] },
            { value: "draft", label: str["courses.draft"] },
            { value: "archived", label: str["courses.archived"] },
          ],
          editStatus.value,
        );
        statusSelect.addEventListener("change", () => {
          editStatus.value = statusSelect.value;
          const newStyle = coursePillStyleFor(editStatus.value);
          statusBadge.style.backgroundColor = newStyle.bg;
          statusBadge.style.borderColor = newStyle.border;
          statusBadge.style.color = newStyle.text;
          statusBadge.textContent = statusLabelOf(editStatus.value);
        });
        editGrid.appendChild(makeFieldWrap("Status", statusSelect));
        headerEl.appendChild(editGrid);

        const descWrap = document.createElement("label");
        descWrap.className = "block space-y-1";
        const descLabel = document.createElement("span");
        descLabel.className = "text-xs uppercase tracking-wide text-gray-400";
        descLabel.textContent = safeLang === "en" ? "Description" : "Kurzbeschreibung";
        const descInput = document.createElement("textarea");
        descInput.rows = 3;
        descInput.value = editDescription.value;
        descInput.className = "w-full bg-white/5 border border-white/15 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-primary-400 resize-y";
        descInput.addEventListener("input", () => { editDescription.value = descInput.value; });
        descWrap.appendChild(descLabel);
        descWrap.appendChild(descInput);
        headerEl.appendChild(descWrap);
      } else {
        const titleEl = document.createElement("h3");
        titleEl.className = "text-xl font-bold text-white";
        titleEl.textContent = courseName;
        nameRow.appendChild(titleEl);
        nameRow.appendChild(statusBadge);
        nameRow.appendChild(tagsEl);
        headerEl.appendChild(nameRow);

        if (editDescription.value) {
          const descEl = document.createElement("p");
          descEl.className = "text-sm text-gray-400 leading-relaxed max-w-2xl";
          descEl.textContent = editDescription.value;
          headerEl.appendChild(descEl);
        }
      }
      card.appendChild(headerEl);

      // Stats grid (read-only summary, useful in both modes)
      if (!isEdit) {
        const statsGrid = document.createElement("div");
        statsGrid.className = "grid gap-3 grid-cols-2 sm:grid-cols-4";
        const rateSubColor = rate >= 70 ? "text-green-400" : rate >= 40 ? "text-amber-400" : "text-red-400";
        statsGrid.appendChild(buildKpiCard({
          label: str["courses.lessons"] || (safeLang === "en" ? "Lessons" : "Lektionen"),
          value: String(detail.lessons || 0),
        }));
        statsGrid.appendChild(buildKpiCard({
          label: safeLang === "en" ? "Duration" : "Dauer",
          value: `${detail.duration || 0} ${str["courses.min"] || "min"}`,
        }));
        statsGrid.appendChild(buildKpiCard({
          label: str["courses.enrolled"] || (safeLang === "en" ? "Enrolled" : "Teilnehmer"),
          value: String(enrolledUsers.length),
          sub: `${completedUsers.length} ${safeLang === "en" ? "completed" : "abgeschlossen"}`,
        }));
        statsGrid.appendChild(buildKpiCard({
          label: str["courses.completion"] || (safeLang === "en" ? "Completion" : "Abschluss"),
          value: `${rate}%`,
          sub: `${completedUsers.length}/${enrolledUsers.length} ${safeLang === "en" ? "learners" : "Lernende"}`,
          subColor: rateSubColor,
          accent: true,
        }));
        card.appendChild(statsGrid);
      }

      // Content overview (read-only mode)
      if (!isEdit) {
        const custom = getCustomCourse(courseName);
        const lessonsArr = (custom && Array.isArray(custom.lessons)) ? custom.lessons : null;
        const quizQuestions = (custom && custom.quiz && Array.isArray(custom.quiz.questions)) ? custom.quiz.questions : null;

        const contentSection = document.createElement("div");
        contentSection.className = "space-y-4";

        // Lessons block
        const lessonsBlock = document.createElement("div");
        lessonsBlock.className = "space-y-2";
        const lessonsHeader = document.createElement("div");
        lessonsHeader.className = "flex items-center justify-between";
        const lessonsTitle = document.createElement("p");
        lessonsTitle.className = "text-xs uppercase tracking-wide text-gray-400 font-bold";
        lessonsTitle.textContent = safeLang === "en" ? "Lessons" : "Lektionen";
        lessonsHeader.appendChild(lessonsTitle);
        if (custom) {
          const editLessonsBtn = document.createElement("button");
          editLessonsBtn.type = "button";
          editLessonsBtn.className = "inline-flex items-center gap-1.5 rounded-md border border-white/15 bg-white/5 px-2 py-1 text-xs font-semibold text-gray-200 hover:bg-white/10";
          editLessonsBtn.innerHTML = '<svg width="10" height="10" viewBox="0 0 16 16" fill="currentColor" shape-rendering="crispEdges"><rect x="2" y="11" width="9" height="2"/><rect x="11" y="3" width="2" height="9"/><rect x="3" y="3" width="9" height="2"/></svg><span>' + (safeLang === "en" ? "Edit lessons" : "Lektionen bearbeiten") + '</span>';
          editLessonsBtn.addEventListener("click", () => showEditLessonsView(courseName, lang));
          lessonsHeader.appendChild(editLessonsBtn);
        }
        lessonsBlock.appendChild(lessonsHeader);

        const lessonsListEl = document.createElement("div");
        lessonsListEl.className = "auth-mockup-panel rounded-xl overflow-hidden divide-y divide-white/10";
        if (lessonsArr === null) {
          const note = document.createElement("p");
          note.className = "px-3 py-3 text-xs text-gray-500 italic";
          note.textContent = safeLang === "en"
            ? `Built-in course \u2022 ${detail.lessons || 0} lessons \u2022 ${detail.duration || 0} min total`
            : `Built-in-Kurs \u2022 ${detail.lessons || 0} Lektionen \u2022 ${detail.duration || 0} Min gesamt`;
          lessonsListEl.appendChild(note);
        } else if (lessonsArr.length === 0) {
          const empty = document.createElement("p");
          empty.className = "px-3 py-3 text-xs text-gray-500 italic";
          empty.textContent = safeLang === "en" ? "No lessons yet" : "Noch keine Lektionen";
          lessonsListEl.appendChild(empty);
        } else {
          lessonsArr.forEach((lesson, idx) => {
            const row = document.createElement("div");
            row.className = "px-3 py-2 flex items-center gap-3";
            const idxLabel = document.createElement("span");
            idxLabel.className = "text-xs text-gray-500 w-6 flex-shrink-0 font-semibold";
            idxLabel.textContent = `${idx + 1}.`;
            const main = document.createElement("div");
            main.className = "flex-1 min-w-0";
            const tt = document.createElement("p");
            tt.className = "text-sm font-semibold text-white truncate";
            tt.textContent = lesson.title || (safeLang === "en" ? "Untitled lesson" : "Unbenannte Lektion");
            main.appendChild(tt);
            if (lesson.description) {
              const dd = document.createElement("p");
              dd.className = "text-xs text-gray-400 truncate";
              dd.textContent = lesson.description;
              main.appendChild(dd);
            }
            const meta = document.createElement("span");
            meta.className = "text-label-caption font-semibold text-gray-300 flex-shrink-0";
            const chCount = Array.isArray(lesson.chapters) ? lesson.chapters.length : 0;
            const mins = estimateLessonMinutes(lesson);
            meta.textContent = safeLang === "en"
              ? `${chCount} ch \u2022 ~${mins} min`
              : `${chCount} Kap. \u2022 ~${mins} Min`;
            row.appendChild(idxLabel);
            row.appendChild(main);
            row.appendChild(meta);
            lessonsListEl.appendChild(row);
          });
        }
        lessonsBlock.appendChild(lessonsListEl);
        contentSection.appendChild(lessonsBlock);

        // Quiz block
        const quizBlock = document.createElement("div");
        quizBlock.className = "space-y-2";
        const quizHeader = document.createElement("div");
        quizHeader.className = "flex items-center justify-between";
        const quizTitle = document.createElement("p");
        quizTitle.className = "text-xs uppercase tracking-wide text-gray-400 font-bold";
        quizTitle.textContent = safeLang === "en" ? "Quiz" : "Quiz";
        quizHeader.appendChild(quizTitle);
        if (custom) {
          const editQuizBtn = document.createElement("button");
          editQuizBtn.type = "button";
          editQuizBtn.className = "inline-flex items-center gap-1.5 rounded-md border border-white/15 bg-white/5 px-2 py-1 text-xs font-semibold text-gray-200 hover:bg-white/10";
          editQuizBtn.innerHTML = '<svg width="10" height="10" viewBox="0 0 16 16" fill="currentColor" shape-rendering="crispEdges"><rect x="2" y="11" width="9" height="2"/><rect x="11" y="3" width="2" height="9"/><rect x="3" y="3" width="9" height="2"/></svg><span>' + (safeLang === "en" ? "Edit quiz" : "Quiz bearbeiten") + '</span>';
          editQuizBtn.addEventListener("click", () => showEditQuizView(courseName, lang));
          quizHeader.appendChild(editQuizBtn);
        }
        quizBlock.appendChild(quizHeader);

        const quizSummary = document.createElement("div");
        quizSummary.className = "auth-mockup-panel rounded-xl px-3 py-3 text-sm text-gray-300";
        if (quizQuestions === null) {
          quizSummary.textContent = safeLang === "en" ? "Built-in course quiz" : "Built-in-Kurs Quiz";
        } else if (quizQuestions.length === 0) {
          quizSummary.classList.add("italic", "text-gray-500");
          quizSummary.textContent = safeLang === "en" ? "No quiz questions yet" : "Noch keine Quiz-Fragen";
        } else {
          quizSummary.textContent = safeLang === "en"
            ? `${quizQuestions.length} ${quizQuestions.length === 1 ? "question" : "questions"}`
            : `${quizQuestions.length} ${quizQuestions.length === 1 ? "Frage" : "Fragen"}`;
        }
        quizBlock.appendChild(quizSummary);
        contentSection.appendChild(quizBlock);

        card.appendChild(contentSection);
      }

      // Teams section
      const teamsSection = document.createElement("div");
      teamsSection.className = "space-y-2";
      const teamsLabel = document.createElement("p");
      teamsLabel.className = "text-xs uppercase tracking-wide text-gray-400 font-bold";
      teamsLabel.textContent = safeLang === "en" ? "Assigned teams" : "Zugewiesene Teams";
      const teamsTableWrap = document.createElement("div");
      teamsTableWrap.className = "auth-mockup-panel rounded-xl overflow-hidden";
      teamsSection.appendChild(teamsLabel);
      teamsSection.appendChild(teamsTableWrap);

      function computeTeamCourseStats(teamName) {
        const members = users.filter((u) => (u.teams || []).some((t) => t.teamName === teamName));
        const enrolled = members.filter((u) => getUserEnrolledCourses(u).includes(courseName));
        const completed = members.filter((u) => (u.courseCompletions || []).some((c) => c.course === courseName));
        const pct = enrolled.length > 0 ? Math.round((completed.length / enrolled.length) * 100) : 0;
        return { members: members.length, enrolled: enrolled.length, completed: completed.length, pct };
      }

      function renderTeamRows() {
        teamsTableWrap.innerHTML = "";
        if (!editTeams.length) {
          const empty = document.createElement("p");
          empty.className = "px-3 py-3 text-xs text-gray-500 italic";
          empty.textContent = safeLang === "en" ? "No teams assigned" : "Keine Teams zugewiesen";
          teamsTableWrap.appendChild(empty);
          return;
        }
        const table = document.createElement("table");
        table.className = "w-full text-sm";
        const thead = document.createElement("thead");
        thead.className = "bg-white/5 text-gray-300";
        const memLabel = str["teams.members"] || (safeLang === "en" ? "Members" : "Mitglieder");
        const completedLabel = safeLang === "en" ? "Completed" : "Abgeschlossen";
        const completionLabel = str["courses.completion"] || (safeLang === "en" ? "Completion" : "Abschluss");
        thead.innerHTML = `<tr><th class="px-3 py-2 text-left font-medium text-xs">Team</th><th class="px-3 py-2 text-center font-medium text-xs">${memLabel}</th><th class="px-3 py-2 text-center font-medium text-xs">${completedLabel}</th><th class="px-3 py-2 text-left font-medium text-xs">${completionLabel}</th>${isEdit ? '<th class="px-3 py-2 text-center font-medium text-xs"></th>' : ""}</tr>`;
        const tbody = document.createElement("tbody");
        tbody.className = "divide-y divide-white/10";
        editTeams.forEach((teamName, idx) => {
          const stats = computeTeamCourseStats(teamName);
          const row = document.createElement("tr");
          row.className = "border-t border-white/10";

          const nameCell = document.createElement("td");
          nameCell.className = "px-3 py-2 text-sm font-semibold text-white";
          nameCell.textContent = teamName;

          const memCell = document.createElement("td");
          memCell.className = "px-3 py-2 text-center text-sm text-gray-300";
          memCell.textContent = String(stats.members);

          const compCell = document.createElement("td");
          compCell.className = "px-3 py-2 text-center text-sm text-gray-300";
          compCell.textContent = String(stats.completed);

          const rateCell = document.createElement("td");
          rateCell.className = "px-3 py-2";
          rateCell.appendChild(buildProgressBarCell(stats.pct));

          row.appendChild(nameCell);
          row.appendChild(memCell);
          row.appendChild(compCell);
          row.appendChild(rateCell);

          if (isEdit) {
            const removeCell = document.createElement("td");
            removeCell.className = "px-3 py-2 text-center";
            const removeBtn = document.createElement("button");
            removeBtn.type = "button";
            removeBtn.className = "w-7 h-7 rounded-lg border border-red-500/30 bg-red-500/10 flex items-center justify-center text-red-400 hover:bg-red-500/25 mx-auto";
            removeBtn.innerHTML = '<svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor" shape-rendering="crispEdges"><rect x="2" y="7" width="12" height="2"/></svg>';
            removeBtn.addEventListener("click", () => { editTeams.splice(idx, 1); renderTeamRows(); });
            removeCell.appendChild(removeBtn);
            row.appendChild(removeCell);
          }
          tbody.appendChild(row);
        });
        table.appendChild(thead);
        table.appendChild(tbody);
        teamsTableWrap.appendChild(table);
      }
      const renderTeamChips = renderTeamRows;
      renderTeamRows();

      if (isEdit) {
        const addRow = document.createElement("div");
        addRow.className = "flex items-center gap-2 mt-2";
        const addSelect = createSearchableSelect({
          items: ADMIN_AVAILABLE_TEAMS.map((t) => ({ value: t, label: t })),
          placeholder: safeLang === "en" ? "Add team\u2026" : "Team hinzuf\u00FCgen\u2026",
          getExcluded: () => editTeams,
        });
        addSelect.classList.add("flex-1");
        const addBtn = document.createElement("button");
        addBtn.type = "button";
        addBtn.className = "flex-shrink-0 w-8 h-8 rounded-lg border border-green-500/30 bg-green-500/10 flex items-center justify-center text-green-400 hover:bg-green-500/25";
        addBtn.innerHTML = '<svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" shape-rendering="crispEdges"><rect x="7" y="2" width="2" height="12"/><rect x="2" y="7" width="12" height="2"/></svg>';
        addRow.appendChild(addSelect);
        addRow.appendChild(addBtn);
        teamsSection.appendChild(addRow);
        addBtn.addEventListener("click", () => {
          const v = addSelect.value;
          if (!v) return;
          editTeams.push(v);
          addSelect.reset();
          renderTeamChips();
        });
      }
      card.appendChild(teamsSection);

      // Actions
      const actions = document.createElement("div");
      actions.className = "flex gap-3 pt-2";
      if (isEdit) {
        const saveBtn = document.createElement("button");
        saveBtn.type = "button";
        saveBtn.className = `flex-1 ${BUTTON_PRIMARY_BASE}`;
        saveBtn.textContent = safeLang === "en" ? "Save" : "Speichern";
        const cancelBtn = document.createElement("button");
        cancelBtn.type = "button";
        cancelBtn.className = `flex-1 ${BUTTON_SECONDARY_BASE}`;
        cancelBtn.textContent = safeLang === "en" ? "Cancel" : "Abbrechen";
        actions.appendChild(saveBtn);
        actions.appendChild(cancelBtn);
        saveBtn.addEventListener("click", () => {
          showToast(safeLang === "en" ? "Course updated" : "Kurs aktualisiert", "success");
          hideDetailView();
          renderCoursesPage();
        });
        cancelBtn.addEventListener("click", () => showCourseDetailView(courseName, lang, false));
      } else {
        const editBtn = document.createElement("button");
        editBtn.type = "button";
        editBtn.className = `flex-1 ${BUTTON_PRIMARY_BASE}`;
        editBtn.textContent = editLabel;
        const backBtn = document.createElement("button");
        backBtn.type = "button";
        backBtn.className = `flex-1 ${BUTTON_SECONDARY_BASE}`;
        backBtn.textContent = safeLang === "en" ? "Back" : "Zur\u00FCck";
        actions.appendChild(editBtn);
        actions.appendChild(backBtn);
        editBtn.addEventListener("click", () => showCourseDetailView(courseName, lang, true));
        backBtn.addEventListener("click", () => hideDetailView());
      }
      card.appendChild(actions);

      const breadcrumbs = isEdit
        ? [{ label: coursesLabel, onClick: () => hideDetailView() }, { label: courseName, onClick: () => showCourseDetailView(courseName, lang, false) }, { label: editLabel }]
        : [{ label: coursesLabel, onClick: () => hideDetailView() }, { label: courseName }];
      showDetailView(card, breadcrumbs);
    }

    function makeFieldWrap(label, controlEl) {
      const wrap = document.createElement("div");
      wrap.className = "space-y-1";
      const lbl = document.createElement("p");
      lbl.className = "text-xs uppercase tracking-wide text-gray-400";
      lbl.textContent = label;
      wrap.appendChild(lbl);
      wrap.appendChild(controlEl);
      return wrap;
    }
    function makeFieldInput(label, value, onInput) {
      const input = document.createElement("input");
      input.type = "text";
      input.value = value;
      input.className = "w-full rounded-lg bg-white/5 border border-white/10 px-3 py-1.5 text-sm text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400";
      input.style.backgroundColor = "#1a1a2e";
      input.addEventListener("input", () => onInput(input.value));
      return makeFieldWrap(label, input);
    }
    function makeFieldNumber(label, value, onInput) {
      const input = document.createElement("input");
      input.type = "number";
      input.min = "0";
      input.value = value;
      input.className = "w-full rounded-lg bg-white/5 border border-white/10 px-3 py-1.5 text-sm text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400";
      input.style.backgroundColor = "#1a1a2e";
      input.addEventListener("input", () => onInput(Number(input.value) || 0));
      return makeFieldWrap(label, input);
    }

    // --- Universal table filter system ---
    function createFilterableHeader(columns, filterState, onFilterChange, sortState, onSortChange) {
      const tr = document.createElement("tr");
      const sortArrow = (dir) => dir === "desc"
        ? '<svg width="8" height="8" viewBox="0 0 8 8" fill="currentColor" shape-rendering="crispEdges"><rect x="1" y="1" width="6" height="2"/><rect x="2" y="3" width="4" height="2"/><rect x="3" y="5" width="2" height="2"/></svg>'
        : '<svg width="8" height="8" viewBox="0 0 8 8" fill="currentColor" shape-rendering="crispEdges"><rect x="3" y="1" width="2" height="2"/><rect x="2" y="3" width="4" height="2"/><rect x="1" y="5" width="6" height="2"/></svg>';
      columns.forEach((col) => {
        const th = document.createElement("th");
        th.scope = "col";
        th.className = "px-4 py-3 text-left font-medium text-xs uppercase tracking-wide text-gray-300";
        if (!col.filterable) {
          th.textContent = col.label;
          tr.appendChild(th);
          return;
        }
        const btn = document.createElement("button");
        btn.type = "button";
        const colExtras = Array.isArray(col.extras) ? col.extras : [];
        const headerKeys = [col.key, ...colExtras.map((e) => e.key)];
        const isActive = headerKeys.some((k) => filterState[k]?.text || (filterState[k]?.selected?.size > 0) || filterState[k]?.dayRange);
        const isSorted = sortState && sortState.key === col.key;
        btn.className = "inline-flex items-center gap-1.5 transition-colors " + (isActive ? "text-accent-400" : "hover:text-white");
        const sortArrowHtml = isSorted ? `<span class="text-primary-300">${sortArrow(sortState.direction)}</span>` : "";
        btn.innerHTML = `<span>${col.label}</span>${sortArrowHtml}<svg width="10" height="10" viewBox="0 0 12 12" fill="currentColor" shape-rendering="crispEdges"><rect x="1" y="1" width="10" height="2"/><rect x="3" y="4" width="6" height="2"/><rect x="5" y="7" width="2" height="2"/></svg>`;
        th.appendChild(btn);

        btn.addEventListener("click", (e) => {
          e.stopPropagation();
          if (typeof window.__adminFilterCleanup === "function") window.__adminFilterCleanup();
          document.querySelectorAll(".admin-col-filter-dropdown").forEach((d) => d.remove());

          const dropdown = document.createElement("div");
          dropdown.className = "admin-col-filter-dropdown fixed z-[60] rounded-lg border border-white/15 bg-cyber-dark p-3 shadow-xl space-y-2";
          dropdown.style.minWidth = "16rem";

          const rect = btn.getBoundingClientRect();
          const viewportW = window.innerWidth || document.documentElement.clientWidth;
          const estimatedWidth = 256;
          const left = Math.min(rect.left, viewportW - estimatedWidth - 8);
          dropdown.style.top = `${rect.bottom + 4}px`;
          dropdown.style.left = `${Math.max(8, left)}px`;

          // Top row: text input + sort toggle
          const topRow = document.createElement("div");
          topRow.className = "flex items-stretch gap-2";

          const input = document.createElement("input");
          input.type = "text";
          input.placeholder = resolveCurrentLang() === "en" ? "Filter\u2026" : "Filtern\u2026";
          input.className = "flex-1 min-w-0 rounded-md bg-white/5 border border-white/10 px-2 py-1.5 text-xs text-white placeholder-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400";
          input.value = filterState[col.key]?.text || "";
          topRow.appendChild(input);

          if (sortState && onSortChange) {
            const sortBtn = document.createElement("button");
            sortBtn.type = "button";
            const renderSortBtn = () => {
              const isMine = sortState.key === col.key;
              const dir = isMine ? sortState.direction : null;
              const labelText = dir === "desc" ? "Z-A" : "A-Z";
              sortBtn.className = "inline-flex items-center gap-1 rounded-md border px-2 py-1 text-xs font-semibold transition-colors flex-shrink-0 " + (isMine ? "border-primary-400 bg-primary-500/20 text-primary-200" : "border-white/15 bg-white/5 text-gray-300 hover:bg-white/10");
              sortBtn.innerHTML = `${sortArrow(dir || "asc")}<span>${labelText}</span>`;
            };
            renderSortBtn();
            sortBtn.addEventListener("click", (ev) => {
              ev.stopPropagation();
              if (sortState.key !== col.key) {
                sortState.key = col.key;
                sortState.direction = "asc";
              } else if (sortState.direction === "asc") {
                sortState.direction = "desc";
              } else {
                sortState.key = null;
                sortState.direction = "asc";
              }
              renderSortBtn();
              onSortChange();
            });
            topRow.appendChild(sortBtn);
          }
          dropdown.appendChild(topRow);

          // Date range presets
          let renderRangeButtons = null;
          if (col.type === "date") {
            const rangeWrap = document.createElement("div");
            rangeWrap.className = "flex flex-wrap gap-1";
            const ranges = [
              { label: resolveCurrentLang() === "en" ? "All" : "Alle", value: null },
              { label: resolveCurrentLang() === "en" ? "Last 7 days" : "Letzte 7 Tage", value: 7 },
              { label: resolveCurrentLang() === "en" ? "Last 14 days" : "Letzte 14 Tage", value: 14 },
              { label: resolveCurrentLang() === "en" ? "Last 30 days" : "Letzte 30 Tage", value: 30 },
            ];
            renderRangeButtons = () => {
              rangeWrap.innerHTML = "";
              ranges.forEach(({ label, value }) => {
                const b = document.createElement("button");
                b.type = "button";
                const current = filterState[col.key]?.dayRange ?? null;
                const isActiveRange = current === value;
                b.className = "rounded-md border px-2 py-1 text-xs font-medium transition-colors " + (isActiveRange ? "border-primary-400 bg-primary-500/20 text-primary-200" : "border-white/15 bg-white/5 text-gray-300 hover:bg-white/10");
                b.textContent = label;
                b.addEventListener("click", (ev) => {
                  ev.stopPropagation();
                  if (!filterState[col.key]) filterState[col.key] = { text: "", selected: new Set(), dayRange: null };
                  filterState[col.key].dayRange = value;
                  renderRangeButtons();
                  updateClearVisibility();
                  onFilterChange();
                });
                rangeWrap.appendChild(b);
              });
            };
            renderRangeButtons();
            dropdown.appendChild(rangeWrap);
          }

          // Option list: pill-styled buttons when pillStyles is provided, else checkboxes.
          // Extras render as additional sections (divider + label + options) bound to their own filterState key.
          const pillRestyleFns = [];
          const extras = Array.isArray(col.extras) ? col.extras : [];
          const allFilterKeys = [col.key, ...extras.map((e) => e.key)];
          const renderOptionsSection = (targetKey, section) => {
            if (!section.options || !section.options.length) return;
            const list = document.createElement("div");
            list.className = "max-h-48 overflow-y-auto space-y-1";
            const usePills = section.pillStyles && typeof section.pillStyles === "object";
            section.options.forEach((opt) => {
              if (usePills) {
                const btn = document.createElement("button");
                btn.type = "button";
                btn.className = "flex w-full items-center justify-between gap-2 rounded-full border px-2.5 py-1 text-xs font-semibold transition-colors";
                const applyStyle = () => {
                  const isSel = (filterState[targetKey]?.selected || new Set()).has(opt);
                  const pillStyle = section.pillStyles[opt];
                  if (isSel && pillStyle) {
                    btn.style.backgroundColor = pillStyle.bg;
                    btn.style.borderColor = pillStyle.border;
                    btn.style.color = pillStyle.text;
                  } else {
                    btn.style.backgroundColor = "rgba(255,255,255,0.04)";
                    btn.style.borderColor = "rgba(255,255,255,0.12)";
                    btn.style.color = "#9ca3af";
                  }
                };
                applyStyle();
                pillRestyleFns.push(applyStyle);
                const labelSpan = document.createElement("span");
                labelSpan.className = "truncate";
                labelSpan.textContent = opt;
                const countSpan = document.createElement("span");
                countSpan.className = "flex-shrink-0 tabular-nums opacity-75";
                if (section.counts && Object.prototype.hasOwnProperty.call(section.counts, opt)) {
                  countSpan.textContent = String(section.counts[opt]);
                }
                btn.appendChild(labelSpan);
                btn.appendChild(countSpan);
                btn.addEventListener("click", (ev) => {
                  ev.stopPropagation();
                  if (!filterState[targetKey]) filterState[targetKey] = { text: "", selected: new Set(), dayRange: null };
                  if (filterState[targetKey].selected.has(opt)) filterState[targetKey].selected.delete(opt);
                  else filterState[targetKey].selected.add(opt);
                  applyStyle();
                  updateClearVisibility();
                  onFilterChange();
                });
                list.appendChild(btn);
              } else {
                const selectedSet = filterState[targetKey]?.selected || new Set();
                const label = document.createElement("label");
                label.className = "flex items-center gap-2 text-xs text-gray-300 hover:text-white cursor-pointer py-0.5";
                const cb = document.createElement("input");
                cb.type = "checkbox";
                cb.checked = selectedSet.has(opt);
                cb.className = "rounded border-white/20 bg-white/5 text-primary-500";
                const txt = document.createElement("span");
                txt.textContent = opt;
                if (section.counts && Object.prototype.hasOwnProperty.call(section.counts, opt)) {
                  txt.textContent = `${opt} (${section.counts[opt]})`;
                }
                label.appendChild(cb);
                label.appendChild(txt);
                cb.addEventListener("change", (ev) => {
                  ev.stopPropagation();
                  if (!filterState[targetKey]) filterState[targetKey] = { text: "", selected: new Set() };
                  if (cb.checked) filterState[targetKey].selected.add(opt);
                  else filterState[targetKey].selected.delete(opt);
                  updateClearVisibility();
                  onFilterChange();
                });
                list.appendChild(label);
              }
            });
            dropdown.appendChild(list);
          };
          renderOptionsSection(col.key, { options: col.options, pillStyles: col.pillStyles, counts: col.counts });
          extras.forEach((extra) => {
            const divider = document.createElement("div");
            divider.className = "h-px bg-white/10 my-1";
            dropdown.appendChild(divider);
            if (extra.label) {
              const lbl = document.createElement("p");
              lbl.className = "text-label-caption uppercase tracking-wide text-gray-400 font-semibold";
              lbl.textContent = extra.label;
              dropdown.appendChild(lbl);
            }
            renderOptionsSection(extra.key, extra);
          });

          // Clear filter button (only visible when filter is active)
          const clearBtn = document.createElement("button");
          clearBtn.type = "button";
          clearBtn.className = "w-full flex items-center justify-center gap-1 rounded-md border border-red-500/30 bg-red-500/10 px-2 py-1 text-xs font-semibold text-red-300 hover:bg-red-500/20";
          clearBtn.innerHTML = '<svg width="10" height="10" viewBox="0 0 16 16" fill="currentColor" shape-rendering="crispEdges"><rect x="3" y="3" width="2" height="2"/><rect x="11" y="3" width="2" height="2"/><rect x="5" y="5" width="2" height="2"/><rect x="9" y="5" width="2" height="2"/><rect x="7" y="7" width="2" height="2"/><rect x="5" y="9" width="2" height="2"/><rect x="9" y="9" width="2" height="2"/><rect x="3" y="11" width="2" height="2"/><rect x="11" y="11" width="2" height="2"/></svg> ' + (resolveCurrentLang() === "en" ? "Clear filter" : "Filter l\u00F6schen");
          const updateClearVisibility = () => {
            const active = allFilterKeys.some((k) => filterState[k]?.text || (filterState[k]?.selected?.size > 0) || filterState[k]?.dayRange);
            clearBtn.style.display = active ? "" : "none";
          };
          updateClearVisibility();
          clearBtn.addEventListener("click", (ev) => {
            ev.stopPropagation();
            allFilterKeys.forEach((k) => { filterState[k] = { text: "", selected: new Set(), dayRange: null }; });
            input.value = "";
            dropdown.querySelectorAll('input[type="checkbox"]').forEach((cb) => { cb.checked = false; });
            pillRestyleFns.forEach((fn) => fn());
            if (renderRangeButtons) renderRangeButtons();
            updateClearVisibility();
            onFilterChange();
          });
          dropdown.appendChild(clearBtn);

          input.addEventListener("input", () => {
            if (!filterState[col.key]) filterState[col.key] = { text: "", selected: new Set() };
            filterState[col.key].text = input.value;
            updateClearVisibility();
            onFilterChange();
          });
          input.addEventListener("click", (ev) => ev.stopPropagation());
          dropdown.addEventListener("click", (ev) => ev.stopPropagation());

          document.body.appendChild(dropdown);
          input.focus();

          const closeHandler = (ev) => {
            if (dropdown.contains(ev.target)) return;
            cleanup();
          };
          const cleanup = () => {
            dropdown.remove();
            document.removeEventListener("click", closeHandler);
            if (window.__adminFilterCleanup === cleanup) window.__adminFilterCleanup = null;
          };
          window.__adminFilterCleanup = cleanup;
          setTimeout(() => document.addEventListener("click", closeHandler), 0);
        });
        tr.appendChild(th);
      });
      return tr;
    }

    function applyColumnFilters(rows, filterState, getValueFns) {
      return rows.filter((row) => {
        for (const [key, state] of Object.entries(filterState)) {
          if (!state) continue;
          const cfg = getValueFns[key];
          if (!cfg) continue;
          const getValue = typeof cfg === "function" ? cfg : cfg.getValue;
          const type = typeof cfg === "function" ? "text" : (cfg.type || "text");
          if (!getValue) continue;
          const rawVal = getValue(row);

          if (type === "date") {
            const t = rawVal ? new Date(rawVal).getTime() : NaN;
            if (state.dayRange && state.dayRange > 0) {
              if (isNaN(t)) return false;
              const cutoff = Date.now() - state.dayRange * 86400000;
              if (t < cutoff) return false;
            }
            if (state.text) {
              const formatted = isNaN(t)
                ? ""
                : new Date(t).toLocaleDateString(resolveCurrentLang(), { day: "2-digit", month: "short", year: "numeric" });
              if (!formatted.toLowerCase().includes(state.text.toLowerCase())) return false;
            }
          } else if (Array.isArray(rawVal)) {
            const values = rawVal.map((v) => String(v ?? ""));
            if (state.text) {
              const needle = state.text.toLowerCase();
              if (!values.some((v) => v.toLowerCase().includes(needle))) return false;
            }
            if (state.selected && state.selected.size > 0 && !values.some((v) => state.selected.has(v))) return false;
          } else {
            const val = String(rawVal ?? "").toLowerCase();
            if (state.text && !val.includes(state.text.toLowerCase())) return false;
            if (state.selected && state.selected.size > 0 && !state.selected.has(rawVal)) return false;
          }
        }
        return true;
      });
    }

    function renderLazyRows(tbody, rows, makeRow, pageSize) {
      const batch = pageSize || 30;
      tbody.innerHTML = "";
      let idx = 0;
      const renderNext = () => {
        const end = Math.min(idx + batch, rows.length);
        for (let i = idx; i < end; i++) {
          const row = makeRow(rows[i], i);
          if (row) tbody.appendChild(row);
        }
        idx = end;
      };
      renderNext();
      if (rows.length <= batch) return;
      const sentinel = document.createElement("tr");
      sentinel.setAttribute("data-lazy-sentinel", "");
      const td = document.createElement("td");
      td.colSpan = 12;
      td.className = "px-4 py-2 text-center text-xs text-gray-500";
      sentinel.appendChild(td);
      tbody.appendChild(sentinel);
      const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          if (idx >= rows.length) {
            io.disconnect();
            sentinel.remove();
            return;
          }
          sentinel.remove();
          renderNext();
          if (idx < rows.length) tbody.appendChild(sentinel);
        });
      }, { root: null, rootMargin: "200px" });
      io.observe(sentinel);
    }

    function createLazyTableControls(tbody, options = {}) {
      const colSpan = Number.isFinite(options.colSpan) ? Math.max(1, options.colSpan) : 1;
      const safeLang = options.lang === "en" ? "en" : "de";
      const loadMoreLabel = options.loadMoreLabel || (safeLang === "en" ? "Load more" : "Mehr laden");

      const sentinelRow = document.createElement("tr");
      sentinelRow.setAttribute("aria-hidden", "true");
      sentinelRow.setAttribute("data-lazy-sentinel-row", "");
      const sentinelCell = document.createElement("td");
      sentinelCell.colSpan = colSpan;
      sentinelCell.className = "h-px p-0";
      const sentinel = document.createElement("span");
      sentinel.className = "block h-px w-full";
      sentinelCell.appendChild(sentinel);
      sentinelRow.appendChild(sentinelCell);

      const fallbackRow = document.createElement("tr");
      fallbackRow.setAttribute("data-lazy-fallback-row", "");
      const fallbackCell = document.createElement("td");
      fallbackCell.colSpan = colSpan;
      fallbackCell.className = "px-4 py-3 text-center";
      const fallbackButton = document.createElement("button");
      fallbackButton.type = "button";
      fallbackButton.className =
        "inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-3 py-1.5 text-xs font-semibold text-gray-300 hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400";
      fallbackButton.textContent = loadMoreLabel;
      fallbackCell.appendChild(fallbackButton);
      fallbackRow.appendChild(fallbackCell);

      const statusRow = document.createElement("tr");
      statusRow.setAttribute("data-lazy-status-row", "");
      const statusCell = document.createElement("td");
      statusCell.colSpan = colSpan;
      statusCell.className = "px-4 py-2 text-center";
      const statusText = document.createElement("span");
      statusText.className = "text-xs text-gray-500";
      statusText.setAttribute("role", "status");
      statusText.setAttribute("aria-live", "polite");
      statusText.setAttribute("aria-atomic", "true");
      statusCell.appendChild(statusText);
      statusRow.appendChild(statusCell);

      return {
        sentinel,
        fallbackButton,
        fallbackRow,
        statusText,
        append() {
          tbody.appendChild(sentinelRow);
          tbody.appendChild(statusRow);
          tbody.appendChild(fallbackRow);
        },
      };
    }

    function applySort(rows, sortState, getValueFns) {
      if (!sortState || !sortState.key) return rows;
      const cfg = getValueFns[sortState.key];
      if (!cfg) return rows;
      const getValue = typeof cfg === "function" ? cfg : cfg.getValue;
      const type = typeof cfg === "function" ? "text" : (cfg.type || "text");
      if (!getValue) return rows;
      const dir = sortState.direction === "desc" ? -1 : 1;
      return [...rows].sort((a, b) => {
        const av = getValue(a);
        const bv = getValue(b);
        if (type === "date") {
          const at = av ? new Date(av).getTime() : 0;
          const bt = bv ? new Date(bv).getTime() : 0;
          return (at - bt) * dir;
        }
        if (typeof av === "number" && typeof bv === "number") return (av - bv) * dir;
        return String(av ?? "").localeCompare(String(bv ?? ""), undefined, { numeric: true, sensitivity: "base" }) * dir;
      });
    }

    function buildProgressBar(pct, label) {
      const row = document.createElement("div");
      row.className = "flex items-center gap-3";
      const nameEl = document.createElement("span");
      nameEl.className = "text-sm text-gray-300 w-44 truncate flex-shrink-0";
      nameEl.textContent = label;
      const barBg = document.createElement("div");
      barBg.className = "flex-1 h-2 rounded-full bg-white/10 overflow-hidden";
      const barFill = document.createElement("div");
      barFill.className = "h-full rounded-full";
      barFill.style.width = `${pct}%`;
      barFill.style.backgroundColor = pct >= 70 ? "#22c55e" : pct >= 40 ? "#f59e0b" : "#ef4444";
      barBg.appendChild(barFill);
      const pctEl = document.createElement("span");
      pctEl.className = "text-sm font-bold w-10 text-right";
      pctEl.style.color = pct >= 70 ? "#22c55e" : pct >= 40 ? "#f59e0b" : "#ef4444";
      pctEl.textContent = pct > 0 ? `${pct}%` : "\u2014";
      row.appendChild(nameEl);
      row.appendChild(barBg);
      row.appendChild(pctEl);
      return row;
    }

    function buildChapterEditorContent(safeLang, initial, onSave) {
      const card = document.createElement("div");
      card.className = "space-y-3";

      const titleInput = document.createElement("input");
      titleInput.type = "text";
      titleInput.value = initial ? (initial.title || "") : "";
      titleInput.placeholder = safeLang === "en" ? "Chapter title" : "Kapiteltitel";
      titleInput.className = "w-full bg-white/5 border border-white/15 rounded-lg px-3 py-2 text-base font-semibold text-white focus:outline-none focus:border-primary-400 placeholder-gray-500";
      card.appendChild(titleInput);

      const toolbar = document.createElement("div");
      toolbar.className = "flex flex-wrap gap-1 rounded-lg border border-white/10 bg-white/5 p-1";

      const editor = document.createElement("div");
      editor.contentEditable = "true";
      editor.className = "min-h-[220px] max-h-[50vh] overflow-y-auto rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm text-white focus:outline-none focus:border-primary-400 prose-chapter";
      editor.style.lineHeight = "1.6";
      if (initial && initial.content) editor.innerHTML = initial.content;

      let savedSelection = null;
      function saveSelection() {
        const sel = window.getSelection();
        if (sel.rangeCount > 0 && editor.contains(sel.anchorNode)) {
          savedSelection = sel.getRangeAt(0).cloneRange();
        }
      }
      function restoreSelection() {
        editor.focus();
        const sel = window.getSelection();
        if (savedSelection) {
          sel.removeAllRanges();
          sel.addRange(savedSelection);
        } else if (sel.rangeCount === 0) {
          const range = document.createRange();
          range.selectNodeContents(editor);
          range.collapse(false);
          sel.removeAllRanges();
          sel.addRange(range);
        }
      }

      function execCmd(cmd, value) {
        restoreSelection();
        document.execCommand(cmd, false, value || null);
        saveSelection();
      }
      editor.addEventListener("keyup", saveSelection);
      editor.addEventListener("mouseup", saveSelection);

      function makeToolBtn(label, title, onClick) {
        const b = document.createElement("button");
        b.type = "button";
        b.title = title;
        b.className = "rounded-md px-2 py-1 text-xs font-semibold text-gray-200 hover:bg-white/10";
        b.innerHTML = label;
        b.addEventListener("mousedown", (e) => { e.preventDefault(); saveSelection(); });
        b.addEventListener("click", onClick);
        return b;
      }
      toolbar.appendChild(makeToolBtn("H2", safeLang === "en" ? "Heading 2" : "\u00DCberschrift 2", () => execCmd("formatBlock", "<h2>")));
      toolbar.appendChild(makeToolBtn("H3", safeLang === "en" ? "Heading 3" : "\u00DCberschrift 3", () => execCmd("formatBlock", "<h3>")));
      toolbar.appendChild(makeToolBtn("&para;", safeLang === "en" ? "Paragraph" : "Absatz", () => execCmd("formatBlock", "<p>")));
      const sep1 = document.createElement("span"); sep1.className = "w-px self-stretch bg-white/10 mx-1"; toolbar.appendChild(sep1);
      toolbar.appendChild(makeToolBtn("<b>B</b>", safeLang === "en" ? "Bold" : "Fett", () => execCmd("bold")));
      toolbar.appendChild(makeToolBtn("<i>I</i>", safeLang === "en" ? "Italic" : "Kursiv", () => execCmd("italic")));
      toolbar.appendChild(makeToolBtn("<u>U</u>", safeLang === "en" ? "Underline" : "Unterstrichen", () => execCmd("underline")));
      const sep2 = document.createElement("span"); sep2.className = "w-px self-stretch bg-white/10 mx-1"; toolbar.appendChild(sep2);
      toolbar.appendChild(makeToolBtn("&bull; List", safeLang === "en" ? "Bulleted list" : "Aufz\u00E4hlung", () => execCmd("insertUnorderedList")));
      toolbar.appendChild(makeToolBtn("1. List", safeLang === "en" ? "Numbered list" : "Nummerierte Liste", () => execCmd("insertOrderedList")));
      const sep3 = document.createElement("span"); sep3.className = "w-px self-stretch bg-white/10 mx-1"; toolbar.appendChild(sep3);
      toolbar.appendChild(makeToolBtn("&#128279;", safeLang === "en" ? "Insert link" : "Link einf\u00FCgen", () => {
        const url = window.prompt(safeLang === "en" ? "Link URL" : "Link-URL", "https://");
        if (url) execCmd("createLink", url);
      }));
      const imgInput = document.createElement("input");
      imgInput.type = "file";
      imgInput.accept = "image/*";
      imgInput.style.display = "none";
      imgInput.addEventListener("change", () => {
        const file = imgInput.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = () => {
          restoreSelection();
          const img = document.createElement("img");
          img.src = reader.result;
          img.alt = file.name.replace(/\.[^.]+$/, "");
          img.style.maxWidth = "100%";
          img.style.borderRadius = "0.5rem";
          img.style.margin = "0.5rem 0";
          const sel = window.getSelection();
          if (sel.rangeCount > 0) {
            const range = sel.getRangeAt(0);
            range.deleteContents();
            range.insertNode(img);
            range.setStartAfter(img);
            range.collapse(true);
            sel.removeAllRanges();
            sel.addRange(range);
          }
          saveSelection();
          editor.dispatchEvent(new Event("input"));
        };
        reader.readAsDataURL(file);
        imgInput.value = "";
      });
      card.appendChild(imgInput);
      toolbar.appendChild(makeToolBtn("&#128247;", safeLang === "en" ? "Insert image" : "Bild einf\u00FCgen", () => {
        imgInput.click();
      }));
      toolbar.appendChild(makeToolBtn("&mdash;", safeLang === "en" ? "Horizontal rule" : "Trennlinie", () => execCmd("insertHorizontalRule")));

      card.appendChild(toolbar);
      card.appendChild(editor);

      const stats = document.createElement("p");
      stats.className = "text-xs text-gray-500";
      function refreshStats() {
        const words = countWordsInHtml(editor.innerHTML);
        const mins = words === 0 ? 0 : Math.max(1, Math.ceil(words / READING_WPM));
        stats.textContent = safeLang === "en"
          ? `${words} words \u2022 ~${mins} min read`
          : `${words} W\u00F6rter \u2022 ~${mins} Min. Lesezeit`;
      }
      editor.addEventListener("input", refreshStats);
      refreshStats();
      card.appendChild(stats);

      const saveBtn = document.createElement("button");
      saveBtn.type = "button";
      saveBtn.className = `w-full ${BUTTON_PRIMARY_BASE}`;
      saveBtn.textContent = safeLang === "en" ? "Save chapter" : "Kapitel speichern";
      card.appendChild(saveBtn);

      saveBtn.addEventListener("click", () => {
        const title = titleInput.value.trim();
        if (!title) {
          showToast(safeLang === "en" ? "Chapter title is required" : "Kapiteltitel ist erforderlich", "error");
          titleInput.focus();
          return;
        }
        onSave({ title, content: editor.innerHTML });
      });

      return { el: card, focusTitle: () => setTimeout(() => titleInput.focus(), 0) };
    }

    function openChapterEditor(safeLang, initial, onSave, breadcrumbs) {
      const { el, focusTitle } = buildChapterEditorContent(safeLang, initial, onSave);
      const chapterLabel = initial
        ? (initial.title || (safeLang === "en" ? "Edit chapter" : "Kapitel bearbeiten"))
        : (safeLang === "en" ? "New chapter" : "Neues Kapitel");
      showDetailView(el, [
        ...(breadcrumbs || []),
        { label: chapterLabel },
      ]);
      focusTitle();
    }

    function getCustomCourse(courseName) {
      return ADMIN_CUSTOM_COURSES.find((c) => c.name === courseName) || null;
    }

    function buildLessonsEditor(safeLang, draft, { onChapterNav } = {}) {
      const section = document.createElement("section");
      section.className = "space-y-2";
      const header = document.createElement("div");
      header.className = "flex items-center justify-between";
      const label = document.createElement("p");
      label.className = "text-xs uppercase tracking-wide text-gray-400 font-bold";
      label.textContent = safeLang === "en" ? "Lessons" : "Lektionen";
      const addLessonBtn = document.createElement("button");
      addLessonBtn.type = "button";
      addLessonBtn.className = "inline-flex items-center gap-1.5 rounded-lg border border-green-500/30 bg-green-500/10 px-2 py-1 text-xs font-semibold text-green-300 hover:bg-green-500/25";
      addLessonBtn.innerHTML = '<svg width="10" height="10" viewBox="0 0 16 16" fill="currentColor" shape-rendering="crispEdges"><rect x="7" y="2" width="2" height="12"/><rect x="2" y="7" width="12" height="2"/></svg><span>' + (safeLang === "en" ? "Add lesson" : "Lektion hinzuf\u00FCgen") + '</span>';
      header.appendChild(label);
      header.appendChild(addLessonBtn);
      const list = document.createElement("div");
      list.className = "auth-mockup-panel rounded-xl overflow-hidden divide-y divide-white/10";
      section.appendChild(header);
      section.appendChild(list);

      function render() {
        list.innerHTML = "";
        if (draft.lessons.length === 0) {
          const empty = document.createElement("div");
          empty.className = "px-3 py-3 text-sm text-gray-500 italic";
          empty.textContent = safeLang === "en" ? "No lessons yet" : "Noch keine Lektionen";
          list.appendChild(empty);
          return;
        }
        draft.lessons.forEach((lesson, idx) => {
          const lessonWrap = document.createElement("div");
          lessonWrap.className = "px-3 py-3 space-y-2";

          const topRow = document.createElement("div");
          topRow.className = "flex items-center gap-2";
          const indexLabel = document.createElement("span");
          indexLabel.className = "text-xs text-gray-500 w-6 flex-shrink-0 font-semibold";
          indexLabel.textContent = `${idx + 1}.`;
          const titleInput = document.createElement("input");
          titleInput.type = "text";
          titleInput.value = lesson.title || "";
          titleInput.placeholder = safeLang === "en" ? "Lesson title" : "Lektionstitel";
          titleInput.className = "flex-1 bg-white/5 border border-white/10 rounded-lg px-2 py-1 text-sm font-semibold text-white focus:outline-none focus:border-primary-400 placeholder-gray-500";
          titleInput.addEventListener("input", () => { draft.lessons[idx].title = titleInput.value; });
          const minsBadge = document.createElement("span");
          minsBadge.className = "inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/5 px-2 py-1 text-label-caption font-semibold text-gray-300";
          const minsValue = estimateLessonMinutes(lesson);
          minsBadge.textContent = safeLang === "en" ? `~${minsValue} min` : `~${minsValue} Min`;
          minsBadge.title = safeLang === "en" ? "Auto-estimated from chapter word count" : "Automatisch aus Wortzahl der Kapitel gesch\u00E4tzt";
          const removeBtn = document.createElement("button");
          removeBtn.type = "button";
          removeBtn.className = "flex-shrink-0 w-7 h-7 rounded-lg border border-red-500/30 bg-red-500/10 flex items-center justify-center text-red-400 hover:bg-red-500/25";
          removeBtn.setAttribute("aria-label", safeLang === "en" ? "Remove lesson" : "Lektion entfernen");
          removeBtn.innerHTML = '<svg width="10" height="10" viewBox="0 0 16 16" fill="currentColor" shape-rendering="crispEdges"><rect x="2" y="7" width="12" height="2"/></svg>';
          removeBtn.addEventListener("click", () => { draft.lessons.splice(idx, 1); render(); });
          topRow.appendChild(indexLabel);
          topRow.appendChild(titleInput);
          topRow.appendChild(minsBadge);
          topRow.appendChild(removeBtn);
          lessonWrap.appendChild(topRow);

          const descInputL = document.createElement("input");
          descInputL.type = "text";
          descInputL.value = lesson.description || "";
          descInputL.placeholder = safeLang === "en" ? "Short lesson description (optional)" : "Kurzbeschreibung der Lektion (optional)";
          descInputL.className = "w-full bg-white/5 border border-white/10 rounded-lg px-2 py-1 text-xs text-gray-300 focus:outline-none focus:border-primary-400 placeholder-gray-500 ml-8";
          descInputL.style.width = "calc(100% - 2rem)";
          descInputL.addEventListener("input", () => { draft.lessons[idx].description = descInputL.value; });
          lessonWrap.appendChild(descInputL);

          const chaptersWrap = document.createElement("div");
          chaptersWrap.className = "ml-8 space-y-1";
          const chaptersLabel = document.createElement("p");
          chaptersLabel.className = "text-label-caption uppercase tracking-wide text-gray-500 font-bold";
          chaptersLabel.textContent = safeLang === "en" ? "Chapters" : "Kapitel";
          chaptersWrap.appendChild(chaptersLabel);

          const chaptersList = document.createElement("div");
          chaptersList.className = "auth-mockup-panel rounded-lg overflow-hidden divide-y divide-white/10";
          chaptersWrap.appendChild(chaptersList);

          const chapters = Array.isArray(lesson.chapters) ? lesson.chapters : [];
          if (chapters.length === 0) {
            const empty = document.createElement("div");
            empty.className = "px-3 py-2 text-xs text-gray-500 italic";
            empty.textContent = safeLang === "en" ? "No chapters yet" : "Noch keine Kapitel";
            chaptersList.appendChild(empty);
          } else {
            chapters.forEach((chapter, cIdx) => {
              const cRow = document.createElement("div");
              cRow.className = "flex items-center gap-2 px-3 py-2";
              const cIndex = document.createElement("span");
              cIndex.className = "text-label-caption text-gray-500 w-8 flex-shrink-0";
              cIndex.textContent = `${idx + 1}.${cIdx + 1}`;
              const cTitle = document.createElement("span");
              cTitle.className = "flex-1 text-xs text-gray-200 truncate";
              cTitle.textContent = chapter.title || (safeLang === "en" ? "Untitled chapter" : "Unbenanntes Kapitel");
              const cWords = countWordsInHtml(chapter.content);
              const cWordsBadge = document.createElement("span");
              cWordsBadge.className = "text-label-caption text-gray-500 flex-shrink-0";
              cWordsBadge.textContent = safeLang === "en" ? `${cWords} w` : `${cWords} W`;
              const cEdit = document.createElement("button");
              cEdit.type = "button";
              cEdit.className = "flex-shrink-0 rounded-md border border-white/15 bg-white/5 px-2 py-1 text-label-caption font-semibold text-gray-200 hover:bg-white/10";
              cEdit.textContent = safeLang === "en" ? "Edit" : "Bearbeiten";
              cEdit.addEventListener("click", () => {
                if (onChapterNav) {
                  onChapterNav(idx, cIdx, chapter);
                }
              });
              const cRemove = document.createElement("button");
              cRemove.type = "button";
              cRemove.className = "flex-shrink-0 w-6 h-6 rounded-md border border-red-500/30 bg-red-500/10 flex items-center justify-center text-red-400 hover:bg-red-500/25";
              cRemove.setAttribute("aria-label", safeLang === "en" ? "Remove chapter" : "Kapitel entfernen");
              cRemove.innerHTML = '<svg width="8" height="8" viewBox="0 0 16 16" fill="currentColor" shape-rendering="crispEdges"><rect x="2" y="7" width="12" height="2"/></svg>';
              cRemove.addEventListener("click", () => {
                draft.lessons[idx].chapters.splice(cIdx, 1);
                render();
              });
              cRow.appendChild(cIndex);
              cRow.appendChild(cTitle);
              cRow.appendChild(cWordsBadge);
              cRow.appendChild(cEdit);
              cRow.appendChild(cRemove);
              chaptersList.appendChild(cRow);
            });
          }

          const addChapterBtn = document.createElement("button");
          addChapterBtn.type = "button";
          addChapterBtn.className = "inline-flex items-center gap-1.5 rounded-md border border-green-500/30 bg-green-500/10 px-2 py-1 text-label-caption font-semibold text-green-300 hover:bg-green-500/25";
          addChapterBtn.innerHTML = '<svg width="8" height="8" viewBox="0 0 16 16" fill="currentColor" shape-rendering="crispEdges"><rect x="7" y="2" width="2" height="12"/><rect x="2" y="7" width="12" height="2"/></svg><span>' + (safeLang === "en" ? "Add chapter" : "Kapitel hinzuf\u00FCgen") + '</span>';
          addChapterBtn.addEventListener("click", () => {
            if (onChapterNav) {
              onChapterNav(idx, -1, null);
            }
          });
          chaptersWrap.appendChild(addChapterBtn);

          lessonWrap.appendChild(chaptersWrap);
          list.appendChild(lessonWrap);
        });
      }
      addLessonBtn.addEventListener("click", () => {
        draft.lessons.push({ title: "", description: "", chapters: [] });
        render();
      });
      render();
      section._renderLessons = render;
      return section;
    }

    function buildQuizEditor(safeLang, draft) {
      const section = document.createElement("section");
      section.className = "space-y-2";
      const header = document.createElement("div");
      header.className = "flex items-center justify-between";
      const label = document.createElement("p");
      label.className = "text-xs uppercase tracking-wide text-gray-400 font-bold";
      label.textContent = safeLang === "en" ? "Quiz questions" : "Quiz-Fragen";
      const addBtn = document.createElement("button");
      addBtn.type = "button";
      addBtn.className = "inline-flex items-center gap-1.5 rounded-lg border border-green-500/30 bg-green-500/10 px-2 py-1 text-xs font-semibold text-green-300 hover:bg-green-500/25";
      addBtn.innerHTML = '<svg width="10" height="10" viewBox="0 0 16 16" fill="currentColor" shape-rendering="crispEdges"><rect x="7" y="2" width="2" height="12"/><rect x="2" y="7" width="12" height="2"/></svg><span>' + (safeLang === "en" ? "Add question" : "Frage hinzuf\u00FCgen") + '</span>';
      header.appendChild(label);
      header.appendChild(addBtn);
      const list = document.createElement("div");
      list.className = "space-y-3";
      section.appendChild(header);
      section.appendChild(list);

      function render() {
        list.innerHTML = "";
        if (draft.quiz.questions.length === 0) {
          const empty = document.createElement("div");
          empty.className = "auth-mockup-panel rounded-xl px-3 py-3 text-sm text-gray-500 italic";
          empty.textContent = safeLang === "en" ? "No questions yet" : "Noch keine Fragen";
          list.appendChild(empty);
          return;
        }
        draft.quiz.questions.forEach((question, qIdx) => {
          const wrap = document.createElement("div");
          wrap.className = "auth-mockup-panel rounded-xl p-3 space-y-2";
          const topRow = document.createElement("div");
          topRow.className = "flex items-center gap-2";
          const qIndexLabel = document.createElement("span");
          qIndexLabel.className = "text-xs font-bold text-primary-300 flex-shrink-0";
          qIndexLabel.textContent = `${safeLang === "en" ? "Q" : "F"}${qIdx + 1}`;
          const qInput = document.createElement("input");
          qInput.type = "text";
          qInput.value = question.question || "";
          qInput.placeholder = safeLang === "en" ? "Question text" : "Fragetext";
          qInput.className = "flex-1 bg-white/5 border border-white/10 rounded-lg px-2 py-1 text-sm text-white focus:outline-none focus:border-primary-400 placeholder-gray-500";
          qInput.addEventListener("input", () => { draft.quiz.questions[qIdx].question = qInput.value; });
          const qRemove = document.createElement("button");
          qRemove.type = "button";
          qRemove.className = "flex-shrink-0 w-7 h-7 rounded-lg border border-red-500/30 bg-red-500/10 flex items-center justify-center text-red-400 hover:bg-red-500/25";
          qRemove.setAttribute("aria-label", safeLang === "en" ? "Remove question" : "Frage entfernen");
          qRemove.innerHTML = '<svg width="10" height="10" viewBox="0 0 16 16" fill="currentColor" shape-rendering="crispEdges"><rect x="2" y="7" width="12" height="2"/></svg>';
          qRemove.addEventListener("click", () => { draft.quiz.questions.splice(qIdx, 1); render(); });
          topRow.appendChild(qIndexLabel);
          topRow.appendChild(qInput);
          topRow.appendChild(qRemove);
          wrap.appendChild(topRow);

          const answersHint = document.createElement("p");
          answersHint.className = "text-label-caption uppercase tracking-wide text-gray-500";
          answersHint.textContent = safeLang === "en" ? "Tick the correct answer" : "Richtige Antwort markieren";
          wrap.appendChild(answersHint);

          const answers = Array.isArray(question.answers) ? question.answers : ["", "", "", ""];
          answers.forEach((answer, aIdx) => {
            const aRow = document.createElement("label");
            aRow.className = "flex items-center gap-2";
            const radio = document.createElement("input");
            radio.type = "radio";
            radio.name = `quiz-q-${qIdx}-correct-${Math.random().toString(36).slice(2, 8)}`;
            radio.checked = question.correctIndex === aIdx;
            radio.className = "accent-primary-500 flex-shrink-0";
            radio.addEventListener("change", () => { draft.quiz.questions[qIdx].correctIndex = aIdx; });
            const aInput = document.createElement("input");
            aInput.type = "text";
            aInput.value = answer || "";
            aInput.placeholder = `${safeLang === "en" ? "Answer" : "Antwort"} ${aIdx + 1}`;
            aInput.className = "flex-1 bg-white/5 border border-white/10 rounded-lg px-2 py-1 text-sm text-white focus:outline-none focus:border-primary-400 placeholder-gray-500";
            aInput.addEventListener("input", () => { draft.quiz.questions[qIdx].answers[aIdx] = aInput.value; });
            aRow.appendChild(radio);
            aRow.appendChild(aInput);
            wrap.appendChild(aRow);
          });

          list.appendChild(wrap);
        });
      }
      addBtn.addEventListener("click", () => {
        draft.quiz.questions.push({ question: "", answers: ["", "", "", ""], correctIndex: 0 });
        render();
      });
      render();
      return section;
    }

    function showCreateCourseView(lang) {
      const safeLang = lang === "en" ? "en" : "de";
      const str = ADMIN_UI_STRINGS[safeLang];
      const coursesLabel = safeLang === "en" ? "Course management" : "Kursverwaltung";
      const createLabel = safeLang === "en" ? "New course" : "Neuer Kurs";

      const stepLabels = safeLang === "en"
        ? ["Details", "Lessons & Chapters", "Quiz"]
        : ["Details", "Lektionen & Kapitel", "Quiz"];

      const draft = {
        name: "",
        tags: [],
        status: "draft",
        description: "",
        lessons: [],
        quiz: { questions: [] },
      };

      let currentStep = 0;
      let chapterSubStep = null;
      const card = document.createElement("div");
      card.className = "space-y-5";

      const chevronSvg = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 5l7 7-7 7"/></svg>';

      // --- Step indicator ---
      const stepIndicator = document.createElement("nav");
      stepIndicator.className = "flex items-center gap-2 flex-wrap";
      stepIndicator.setAttribute("aria-label", safeLang === "en" ? "Wizard steps" : "Wizard-Schritte");
      card.appendChild(stepIndicator);

      function buildStepEl(numText, label, onClick) {
        const step = document.createElement("button");
        step.type = "button";
        step.className = "flex items-center gap-2 text-sm font-semibold transition-colors";
        const num = document.createElement("span");
        num.className = "inline-flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold border transition-colors";
        num.textContent = numText;
        const text = document.createElement("span");
        text.className = "hidden sm:inline";
        text.textContent = label;
        step.appendChild(num);
        step.appendChild(text);
        if (onClick) step.addEventListener("click", onClick);
        return { el: step, num, text };
      }

      function makeChevron() {
        const sep = document.createElement("span");
        sep.className = "flex-shrink-0 text-gray-600";
        sep.innerHTML = chevronSvg;
        sep.setAttribute("aria-hidden", "true");
        return sep;
      }

      function applyStepStyle(s, state) {
        const styles = {
          active: {
            el: "flex items-center gap-2 text-sm font-semibold transition-colors text-primary-300",
            num: "inline-flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold border transition-colors border-primary-400 bg-primary-500/20 text-primary-300",
            text: "hidden sm:inline text-primary-300",
          },
          completed: {
            el: "flex items-center gap-2 text-sm font-semibold transition-colors text-green-400 cursor-pointer",
            num: "inline-flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold border transition-colors border-green-500/40 bg-green-500/15 text-green-400",
            text: "hidden sm:inline text-green-400",
          },
          upcoming: {
            el: "flex items-center gap-2 text-sm font-semibold transition-colors text-gray-500 cursor-pointer",
            num: "inline-flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold border transition-colors border-white/15 bg-white/5 text-gray-500",
            text: "hidden sm:inline text-gray-500",
          },
        };
        const st = styles[state];
        s.el.className = st.el;
        s.num.className = st.num;
        s.text.className = st.text;
      }

      function renderStepIndicator() {
        stepIndicator.innerHTML = "";
        const mainSteps = stepLabels.map((label, i) => buildStepEl(`${i + 1}`, label, () => {
          chapterSubStep = null;
          goToStep(i);
        }));

        mainSteps.forEach((s, i) => {
          const isActive = !chapterSubStep && i === currentStep;
          const isCompleted = i < currentStep || (i === 1 && chapterSubStep);
          applyStepStyle(s, isActive ? "active" : isCompleted ? "completed" : "upcoming");
          stepIndicator.appendChild(s.el);

          if (i === 1 && chapterSubStep) {
            stepIndicator.appendChild(makeChevron());
            const subEl = buildStepEl(chapterSubStep.num, chapterSubStep.label);
            applyStepStyle(subEl, "active");
            stepIndicator.appendChild(subEl.el);
          }

          if (i < stepLabels.length - 1) {
            stepIndicator.appendChild(makeChevron());
          }
        });
      }

      // --- Step 1: Details ---
      const step1 = document.createElement("div");
      step1.className = "space-y-3";
      const titleRow = document.createElement("div");
      titleRow.className = "flex items-center gap-3 flex-wrap";
      const nameInput = document.createElement("input");
      nameInput.type = "text";
      nameInput.placeholder = safeLang === "en" ? "Course name" : "Kursname";
      nameInput.className = "bg-transparent border-b border-white/30 text-xl font-bold text-white flex-1 min-w-[200px] focus:outline-none focus:border-primary-400 placeholder-gray-500";
      nameInput.addEventListener("input", () => { draft.name = nameInput.value; });
      titleRow.appendChild(nameInput);
      step1.appendChild(titleRow);

      const metaGrid = document.createElement("div");
      metaGrid.className = "grid gap-3 sm:grid-cols-2";
      metaGrid.appendChild(makeFieldInput(
        safeLang === "en" ? "Tags (comma-separated, max 5)" : "Tags (kommagetrennt, max. 5)",
        draft.tags.join(", "),
        (v) => { draft.tags = v.split(",").map((s) => s.trim()).filter(Boolean).slice(0, 5); },
      ));
      const statusSelect = createModalSelect(
        [
          { value: "active", label: str["courses.active"] },
          { value: "draft", label: str["courses.draft"] },
          { value: "archived", label: str["courses.archived"] },
        ],
        draft.status,
      );
      statusSelect.addEventListener("change", () => { draft.status = statusSelect.value; });
      metaGrid.appendChild(makeFieldWrap("Status", statusSelect));
      step1.appendChild(metaGrid);

      const descWrap = document.createElement("label");
      descWrap.className = "block space-y-1";
      const descLabel = document.createElement("span");
      descLabel.className = "text-xs uppercase tracking-wide text-gray-400";
      descLabel.textContent = safeLang === "en" ? "Description" : "Kurzbeschreibung";
      const descInput = document.createElement("textarea");
      descInput.rows = 3;
      descInput.placeholder = safeLang === "en" ? "Short description..." : "Kurzbeschreibung...";
      descInput.className = "w-full bg-white/5 border border-white/15 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-primary-400 placeholder-gray-500 resize-y";
      descInput.addEventListener("input", () => { draft.description = descInput.value; });
      descWrap.appendChild(descLabel);
      descWrap.appendChild(descInput);
      step1.appendChild(descWrap);

      // --- Step 2: Lessons & Chapters ---
      const lessonsEditor = buildLessonsEditor(safeLang, draft, {
        onChapterNav: (lessonIdx, chapterIdx, chapter) => {
          const initial = chapterIdx >= 0 ? chapter : null;
          const chapterNum = chapterIdx >= 0 ? chapterIdx + 1 : (Array.isArray(draft.lessons[lessonIdx].chapters) ? draft.lessons[lessonIdx].chapters.length + 1 : 1);
          const chapterLabel = initial
            ? (initial.title || (safeLang === "en" ? "Edit chapter" : "Kapitel bearbeiten"))
            : (safeLang === "en" ? "New chapter" : "Neues Kapitel");
          chapterSubStep = { num: `2.${chapterNum}`, label: chapterLabel };

          const { el, focusTitle } = buildChapterEditorContent(safeLang, initial, (saved) => {
            if (!Array.isArray(draft.lessons[lessonIdx].chapters)) {
              draft.lessons[lessonIdx].chapters = [];
            }
            if (chapterIdx >= 0) {
              draft.lessons[lessonIdx].chapters[chapterIdx] = saved;
            } else {
              draft.lessons[lessonIdx].chapters.push(saved);
            }
            chapterSubStep = null;
            renderStep();
            if (lessonsEditor._renderLessons) lessonsEditor._renderLessons();
          });

          stepsContainer.innerHTML = "";
          stepsContainer.appendChild(el);
          renderStepIndicator();
          backBtn.style.display = "";
          backBtn.textContent = safeLang === "en" ? "Back to lessons" : "Zurück zu Lektionen";
          nextBtn.style.display = "none";
          saveBtn.style.display = "none";
          cancelBtn.style.display = "none";
          focusTitle();
        },
      });
      const step2 = lessonsEditor;

      // --- Step 3: Quiz ---
      const step3 = buildQuizEditor(safeLang, draft);

      const steps = [step1, step2, step3];

      // --- Navigation ---
      const navActions = document.createElement("div");
      navActions.className = "flex items-center gap-3 pt-2";

      const cancelBtn = document.createElement("button");
      cancelBtn.type = "button";
      cancelBtn.className = BUTTON_SECONDARY_BASE;
      cancelBtn.textContent = safeLang === "en" ? "Cancel" : "Abbrechen";

      const backBtn = document.createElement("button");
      backBtn.type = "button";
      backBtn.className = BUTTON_SECONDARY_BASE;
      backBtn.textContent = safeLang === "en" ? "Back" : "Zurück";

      const spacer = document.createElement("div");
      spacer.className = "flex-1";

      const nextBtn = document.createElement("button");
      nextBtn.type = "button";
      nextBtn.className = BUTTON_PRIMARY_BASE;
      nextBtn.textContent = safeLang === "en" ? "Next" : "Weiter";

      const saveBtn = document.createElement("button");
      saveBtn.type = "button";
      saveBtn.className = BUTTON_PRIMARY_BASE;
      saveBtn.textContent = safeLang === "en" ? "Create course" : "Kurs erstellen";

      navActions.appendChild(cancelBtn);
      navActions.appendChild(backBtn);
      navActions.appendChild(spacer);
      navActions.appendChild(nextBtn);
      navActions.appendChild(saveBtn);

      const stepsContainer = document.createElement("div");
      card.appendChild(stepsContainer);
      card.appendChild(navActions);

      function goToStep(idx) {
        if (idx === 0 || validateStep(currentStep, idx > currentStep)) {
          currentStep = idx;
          chapterSubStep = null;
          renderStep();
        }
      }

      function validateStep(stepIdx, isForward) {
        if (!isForward) return true;
        if (stepIdx === 0) {
          if (!draft.name.trim()) {
            showToast(safeLang === "en" ? "Course name is required" : "Kursname ist erforderlich", "error");
            nameInput.focus();
            return false;
          }
        }
        return true;
      }

      function renderStep() {
        stepsContainer.innerHTML = "";
        stepsContainer.appendChild(steps[currentStep]);
        renderStepIndicator();
        cancelBtn.style.display = "";
        backBtn.style.display = currentStep === 0 ? "none" : "";
        backBtn.textContent = safeLang === "en" ? "Back" : "Zurück";
        nextBtn.style.display = currentStep < 2 ? "" : "none";
        saveBtn.style.display = currentStep === 2 ? "" : "none";
      }

      backBtn.addEventListener("click", () => {
        if (chapterSubStep) {
          chapterSubStep = null;
          currentStep = 1;
          renderStep();
          if (lessonsEditor._renderLessons) lessonsEditor._renderLessons();
        } else {
          goToStep(currentStep - 1);
        }
      });
      nextBtn.addEventListener("click", () => goToStep(currentStep + 1));

      function hasChanges() {
        return Boolean(
          draft.name.trim() || draft.tags.length || draft.description.trim() ||
          draft.lessons.length || draft.quiz.questions.length,
        );
      }

      function goBack() {
        hideDetailView();
        renderCoursesPage();
      }

      function confirmCancel() {
        if (!hasChanges()) { goBack(); return; }
        const co = createModalOverlay();
        const cc = createModalCard();
        cc.style.maxWidth = "20rem";
        const msg = document.createElement("p");
        msg.className = "text-sm text-gray-300";
        msg.textContent = safeLang === "en" ? "Discard unsaved changes?" : "Ungespeicherte \u00C4nderungen verwerfen?";
        const btns = document.createElement("div");
        btns.className = "flex gap-3 pt-2";
        const sb = document.createElement("button");
        sb.type = "button";
        sb.className = `flex-1 ${BUTTON_SECONDARY_BASE}`;
        sb.textContent = safeLang === "en" ? "Keep editing" : "Weiter bearbeiten";
        const db = document.createElement("button");
        db.type = "button";
        db.className = `flex-1 ${BUTTON_DANGER_STRONG_BASE}`;
        db.textContent = safeLang === "en" ? "Discard" : "Verwerfen";
        btns.appendChild(sb);
        btns.appendChild(db);
        cc.appendChild(msg);
        cc.appendChild(btns);
        co.appendChild(cc);
        document.body.appendChild(co);
        sb.addEventListener("click", () => co.remove());
        db.addEventListener("click", () => { co.remove(); goBack(); });
        co.addEventListener("click", (e) => { if (e.target === co) co.remove(); });
      }

      cancelBtn.addEventListener("click", () => confirmCancel());

      saveBtn.addEventListener("click", () => {
        const cleanName = draft.name.trim();
        if (!cleanName) {
          showToast(safeLang === "en" ? "Course name is required" : "Kursname ist erforderlich", "error");
          goToStep(0);
          return;
        }
        const existingNames = new Set(getAllCourseNames());
        if (existingNames.has(cleanName)) {
          showToast(safeLang === "en" ? "A course with this name already exists" : "Kurs mit diesem Namen existiert bereits", "error");
          goToStep(0);
          return;
        }
        const tagObjs = draft.tags.map((label) => ({ de: label, en: label }));
        const descObj = draft.description.trim()
          ? { de: draft.description.trim(), en: draft.description.trim() }
          : { de: "", en: "" };
        ADMIN_CUSTOM_COURSES.push({
          name: cleanName,
          tags: tagObjs,
          status: draft.status,
          description: descObj,
          lessons: draft.lessons.map((l) => ({
            title: (l.title || "").trim(),
            description: (l.description || "").trim(),
            chapters: (Array.isArray(l.chapters) ? l.chapters : []).map((ch) => ({
              title: (ch.title || "").trim(),
              content: ch.content || "",
            })),
          })),
          quiz: {
            questions: draft.quiz.questions.map((q) => ({
              question: q.question.trim(),
              answers: q.answers.map((a) => a.trim()),
              correctIndex: Number(q.correctIndex) || 0,
            })),
          },
        });
        showToast(safeLang === "en" ? "Course created" : "Kurs erstellt", "success");
        goBack();
      });

      function showWizard() {
        renderStep();
        showDetailView(card, [
          { label: coursesLabel, onClick: () => confirmCancel() },
          { label: createLabel },
        ]);
      }

      showWizard();
    }

    function cloneLessons(lessons) {
      return (Array.isArray(lessons) ? lessons : []).map((l) => ({
        title: l.title || "",
        description: l.description || "",
        chapters: (Array.isArray(l.chapters) ? l.chapters : []).map((ch) => ({
          title: ch.title || "",
          content: ch.content || "",
        })),
      }));
    }
    function cloneQuiz(quiz) {
      const questions = (quiz && Array.isArray(quiz.questions)) ? quiz.questions : [];
      return {
        questions: questions.map((q) => ({
          question: q.question || "",
          answers: Array.isArray(q.answers) ? [...q.answers] : ["", "", "", ""],
          correctIndex: Number(q.correctIndex) || 0,
        })),
      };
    }

    function showEditLessonsView(courseName, lang) {
      const safeLang = lang === "en" ? "en" : "de";
      const custom = getCustomCourse(courseName);
      if (!custom) {
        showToast(safeLang === "en" ? "This course's content is not editable" : "Kursinhalt ist nicht editierbar", "error");
        return;
      }
      const coursesLabel = safeLang === "en" ? "Course management" : "Kursverwaltung";
      const draft = { lessons: cloneLessons(custom.lessons) };

      const card = document.createElement("div");
      card.className = "space-y-5";

      const editLessonsLabel = safeLang === "en" ? "Edit lessons" : "Lektionen bearbeiten";
      const editBreadcrumbs = [
        { label: coursesLabel, onClick: () => hideDetailView() },
        { label: courseName, onClick: () => showCourseDetailView(courseName, lang, false) },
        { label: editLessonsLabel, onClick: () => showEditLessonsView(courseName, lang) },
      ];

      const lessonsEditor = buildLessonsEditor(safeLang, draft, {
        onChapterNav: (lessonIdx, chapterIdx, chapter) => {
          const initial = chapterIdx >= 0 ? chapter : null;
          openChapterEditor(safeLang, initial, (saved) => {
            if (!Array.isArray(draft.lessons[lessonIdx].chapters)) {
              draft.lessons[lessonIdx].chapters = [];
            }
            if (chapterIdx >= 0) {
              draft.lessons[lessonIdx].chapters[chapterIdx] = saved;
            } else {
              draft.lessons[lessonIdx].chapters.push(saved);
            }
            showEditLessonsView(courseName, lang);
            if (lessonsEditor._renderLessons) lessonsEditor._renderLessons();
          }, editBreadcrumbs);
        },
      });
      card.appendChild(lessonsEditor);

      const actions = document.createElement("div");
      actions.className = "space-y-3 pt-2";
      const saveBtn = document.createElement("button");
      saveBtn.type = "button";
      saveBtn.className = `w-full ${BUTTON_PRIMARY_LARGE_BASE}`;
      saveBtn.textContent = safeLang === "en" ? "Save lessons" : "Lektionen speichern";
      const cancelBtn = document.createElement("button");
      cancelBtn.type = "button";
      cancelBtn.className = `w-full ${BUTTON_SECONDARY_BASE}`;
      cancelBtn.textContent = safeLang === "en" ? "Cancel" : "Abbrechen";
      actions.appendChild(saveBtn);
      actions.appendChild(cancelBtn);
      card.appendChild(actions);

      saveBtn.addEventListener("click", () => {
        custom.lessons = draft.lessons.map((l) => ({
          title: (l.title || "").trim(),
          description: (l.description || "").trim(),
          chapters: (Array.isArray(l.chapters) ? l.chapters : []).map((ch) => ({
            title: (ch.title || "").trim(),
            content: ch.content || "",
          })),
        }));
        showToast(safeLang === "en" ? "Lessons saved" : "Lektionen gespeichert", "success");
        showCourseDetailView(courseName, lang, false);
      });
      cancelBtn.addEventListener("click", () => showCourseDetailView(courseName, lang, false));

      showDetailView(card, [
        { label: coursesLabel, onClick: () => hideDetailView() },
        { label: courseName, onClick: () => showCourseDetailView(courseName, lang, false) },
        { label: editLessonsLabel },
      ]);
    }

    function showEditQuizView(courseName, lang) {
      const safeLang = lang === "en" ? "en" : "de";
      const custom = getCustomCourse(courseName);
      if (!custom) {
        showToast(safeLang === "en" ? "This course's content is not editable" : "Kursinhalt ist nicht editierbar", "error");
        return;
      }
      const coursesLabel = safeLang === "en" ? "Course management" : "Kursverwaltung";
      const draft = { quiz: cloneQuiz(custom.quiz) };

      const card = document.createElement("div");
      card.className = "space-y-5";



      card.appendChild(buildQuizEditor(safeLang, draft));

      const actions = document.createElement("div");
      actions.className = "space-y-3 pt-2";
      const saveBtn = document.createElement("button");
      saveBtn.type = "button";
      saveBtn.className = `w-full ${BUTTON_PRIMARY_LARGE_BASE}`;
      saveBtn.textContent = safeLang === "en" ? "Save quiz" : "Quiz speichern";
      const cancelBtn = document.createElement("button");
      cancelBtn.type = "button";
      cancelBtn.className = `w-full ${BUTTON_SECONDARY_BASE}`;
      cancelBtn.textContent = safeLang === "en" ? "Cancel" : "Abbrechen";
      actions.appendChild(saveBtn);
      actions.appendChild(cancelBtn);
      card.appendChild(actions);

      saveBtn.addEventListener("click", () => {
        custom.quiz = {
          questions: draft.quiz.questions.map((q) => ({
            question: (q.question || "").trim(),
            answers: (q.answers || []).map((a) => (a || "").trim()),
            correctIndex: Number(q.correctIndex) || 0,
          })),
        };
        showToast(safeLang === "en" ? "Quiz saved" : "Quiz gespeichert", "success");
        showCourseDetailView(courseName, lang, false);
      });
      cancelBtn.addEventListener("click", () => showCourseDetailView(courseName, lang, false));

      showDetailView(card, [
        { label: coursesLabel, onClick: () => hideDetailView() },
        { label: courseName, onClick: () => showCourseDetailView(courseName, lang, false) },
        { label: safeLang === "en" ? "Edit quiz" : "Quiz bearbeiten" },
      ]);
    }

    let enrollmentsFilterState = "all";

    function renderEnrollmentsPage() {
      if (!adminEnrollmentsTable) return;
      const lang = resolveCurrentLang();
      const safeLang = lang === "en" ? "en" : "de";
      const str = ADMIN_UI_STRINGS[safeLang];
      const data = authApi.getAdminDashboardData();
      const users = data?.users || [];
      const userMap = {};
      users.forEach((u) => { userMap[u.id] = u; });

      const assignments = ADMIN_COURSE_ASSIGNMENTS.map((a) => ({ ...a, user: userMap[a.userId] })).filter((a) => a.user);
      const counts = {
        all: assignments.length,
        in_progress: assignments.filter((a) => a.status === "in_progress" || a.status === "paused").length,
        completed: assignments.filter((a) => a.status === "completed").length,
        overdue: assignments.filter((a) => a.status === "overdue").length,
      };

      // Summary
      if (adminEnrollmentsSummary) {
        const parts = [`${counts.all} ${str["enrollments.assignments"]}`];
        if (counts.overdue) parts.push(`${counts.overdue} ${str["enrollments.overdueShort"]}`);
        adminEnrollmentsSummary.textContent = parts.join(" \u00B7 ");
      }

      // Filter pills
      if (adminEnrollmentsFilters) {
        adminEnrollmentsFilters.innerHTML = "";
        const filters = [
          { key: "all", label: `${str["enrollments.allFilter"]} (${counts.all})` },
          { key: "in_progress", label: `${str["enrollments.activeFilter"]} (${counts.in_progress})` },
          { key: "completed", label: `${str["enrollments.completed"]} (${counts.completed})` },
          { key: "overdue", label: `${str["enrollments.overdue"]} (${counts.overdue})` },
        ];
        filters.forEach(({ key, label }) => {
          const pill = document.createElement("button");
          pill.type = "button";
          pill.className = "rounded-full px-3 py-1 text-xs font-semibold border transition-colors";
          if (enrollmentsFilterState === key) {
            pill.style.borderColor = "rgba(168,85,247,0.5)";
            pill.style.backgroundColor = "rgba(168,85,247,0.18)";
            pill.style.color = "#d8b4fe";
          } else {
            pill.style.borderColor = "rgba(255,255,255,0.15)";
            pill.style.backgroundColor = "transparent";
            pill.style.color = "#d1d5db";
          }
          pill.textContent = label;
          pill.addEventListener("click", () => { enrollmentsFilterState = key; renderEnrollmentsPage(); });
          adminEnrollmentsFilters.appendChild(pill);
        });
      }

      // Column filters
      const allCourseNames = [...new Set(assignments.map((a) => a.courseName))];
      const statusLabels = { completed: str["enrollments.completed"], in_progress: str["enrollments.inProgress"], paused: str["enrollments.paused"], overdue: str["enrollments.overdue"] };
      const allStatusLabels = [...new Set(assignments.map((a) => statusLabels[a.status] || a.status))];
      const enrollmentsStatusPillStyles = {
        [statusLabels.completed]: PILL_STYLE_GREEN,
        [statusLabels.in_progress]: PILL_STYLE_BLUE,
        [statusLabels.paused]: PILL_STYLE_AMBER,
        [statusLabels.overdue]: PILL_STYLE_RED,
      };
      const enrollmentsStatusCounts = buildCountMap(assignments, (a) => statusLabels[a.status] || a.status);
      const enrollmentsCourseCounts = buildCountMap(assignments, (a) => a.courseName);
      if (adminEnrollmentsThead) {
        adminEnrollmentsThead.innerHTML = "";
        adminEnrollmentsThead.appendChild(createFilterableHeader([
          { key: "user", label: str["table.user"] || "Nutzer", filterable: true },
          { key: "course", label: str["enrollments.course"] || "Kurs", filterable: true, options: allCourseNames, counts: enrollmentsCourseCounts },
          { key: "due", label: str["enrollments.dueAt"] || "F\u00E4llig am", filterable: true, type: "date" },
          { key: "progress", label: str["enrollments.progress"] || "Fortschritt", filterable: true },
          { key: "status", label: "Status", filterable: true, options: allStatusLabels, pillStyles: enrollmentsStatusPillStyles, counts: enrollmentsStatusCounts },
        ], enrollmentsColFilters, () => renderEnrollmentsPage(), enrollmentsSortState, () => renderEnrollmentsPage()));
      }

      // Filtered assignments
      let filtered = assignments;
      if (enrollmentsFilterState === "in_progress") filtered = assignments.filter((a) => a.status === "in_progress" || a.status === "paused");
      else if (enrollmentsFilterState !== "all") filtered = assignments.filter((a) => a.status === enrollmentsFilterState);
      const enrollmentsGetters = {
        user: (a) => a.user?.name || "",
        course: (a) => a.courseName,
        due: { type: "date", getValue: (a) => a.dueDate || a.dueAt || a.due || "" },
        progress: (a) => Number(a.progress) || 0,
        status: (a) => statusLabels[a.status] || a.status,
      };
      filtered = applyColumnFilters(filtered, enrollmentsColFilters, enrollmentsGetters);
      filtered = applySort(filtered, enrollmentsSortState, enrollmentsGetters);

      // Table
      if (adminEnrollmentsTable) {
        adminEnrollmentsTable.innerHTML = "";
        renderLazyRows(adminEnrollmentsTable, filtered, (a) => {
          const row = document.createElement("tr");
          row.className = "border-t border-white/10 hover:bg-white/5 transition-colors";

          // User
          const userCell = document.createElement("td");
          userCell.className = "px-4 py-3";
          userCell.appendChild(buildUserCellContent(a.user.name, a.user.email));

          // Course
          const courseCell = document.createElement("td");
          courseCell.className = "px-4 py-3 text-sm text-gray-300";
          courseCell.textContent = a.courseName;

          // Due date
          const dueCell = document.createElement("td");
          dueCell.className = "px-4 py-3 text-sm whitespace-nowrap";
          const isOverdue = a.status === "overdue";
          dueCell.style.color = isOverdue ? "#f87171" : "#d1d5db";
          if (isOverdue) dueCell.style.fontWeight = "700";
          dueCell.textContent = (a.dueDate ? new Date(a.dueDate).toLocaleDateString(safeLang, { day: "2-digit", month: "short", year: "numeric" }) : "\u2014") + (isOverdue ? " !" : "");

          // Progress
          const progressCell = document.createElement("td");
          progressCell.className = "px-4 py-3";
          const enrollmentProgColor = a.status === "completed" ? "#22c55e"
            : a.status === "paused" ? "#f59e0b"
            : a.status === "overdue" ? "#ef4444"
            : "#3b82f6";
          progressCell.appendChild(buildProgressBarCell(a.progress, { color: enrollmentProgColor }));

          // Status badge
          const statusCell = document.createElement("td");
          statusCell.className = "px-4 py-3";
          const enrollmentStatusLabels = {
            completed: str["enrollments.completed"],
            in_progress: str["enrollments.inProgress"],
            paused: str["enrollments.paused"],
            overdue: str["enrollments.overdue"],
          };
          statusCell.appendChild(buildStatusBadge(
            enrollmentStatusLabels[a.status] || enrollmentStatusLabels.overdue,
            ENROLLMENT_STATUS_PILL_STYLES[a.status] || PILL_STYLE_RED
          ));

          row.appendChild(userCell);
          row.appendChild(courseCell);
          row.appendChild(dueCell);
          row.appendChild(progressCell);
          row.appendChild(statusCell);
          return row;
        });
      }
    }

    function renderTopLearnerRows(target, users) {
      if (!target) return;
      target.innerHTML = "";
      users.forEach((user) => {
        const row = document.createElement("tr");
        row.className = "border-t border-white/10";
        const userCell = document.createElement("td");
        userCell.className = "px-4 py-2.5";
        userCell.appendChild(buildUserCellContent(user.name, user.email));
        const quizCell = document.createElement("td");
        quizCell.className = "px-4 py-2.5 text-center text-sm font-bold text-primary-300";
        quizCell.textContent = String(user.completedQuizzes || 0);
        const certCell = document.createElement("td");
        certCell.className = "px-4 py-2.5 text-center text-sm font-bold text-white";
        certCell.textContent = String(user.certificates?.length || 0);
        row.appendChild(userCell);
        row.appendChild(quizCell);
        row.appendChild(certCell);
        target.appendChild(row);
      });
    }

    function renderReportsPage(opts = {}) {
      const { limit = OVERVIEW_ROW_LIMIT, courseBars = adminReportsCourseBars, teamBars = adminReportsTeamBars, topLearners = adminReportsTopLearners } = opts;
      const lang = resolveCurrentLang();
      const safeLang = lang === "en" ? "en" : "de";
      const str = ADMIN_UI_STRINGS[safeLang];
      const data = authApi.getAdminDashboardData();
      const users = data?.users || [];

      if (adminReportsPeriod) adminReportsPeriod.textContent = str["reports.period"];

      // KPIs
      const totalEnrolled = users.reduce((s, u) => s + getUserEnrolledCourses(u).length, 0);
      const totalCompleted = users.reduce((s, u) => s + Math.min(u.completedQuizzes || 0, getUserEnrolledCourses(u).length), 0);
      const avgRate = totalEnrolled > 0 ? Math.round((totalCompleted / totalEnrolled) * 100) : 0;
      const activeLearners = users.filter((u) => u.active && (u.completedQuizzes || 0) > 0).length;
      const totalCerts = users.reduce((s, u) => s + (u.certificates?.length || 0), 0);
      const overdueUsers = users.filter((u) => u.active && getUserEnrolledCourses(u).length > 0 && (u.completedQuizzes || 0) === 0);

      if (adminActiveLearners) adminActiveLearners.textContent = String(activeLearners);
      if (adminActiveLearnersSub) adminActiveLearnersSub.textContent = `${str["reports.of"]} ${users.length} ${str["reports.total"]}`;

      if (adminReportsKpis) {
        adminReportsKpis.innerHTML = "";
        const kpis = [
          { label: str["reports.completionRate"], value: `${avgRate}%`, sub: `\u2191 8% ${str["reports.vsLastMonth"]}`, subColor: "text-green-400" },
          { label: str["reports.activeLearners"], value: String(activeLearners), sub: `${str["reports.of"]} ${users.length} ${str["reports.total"]}`, subColor: "text-gray-400" },
          { label: str["reports.newCerts"], value: String(totalCerts), sub: str["reports.thisMonth"], subColor: "text-primary-300" },
          { label: str["reports.overdue"], value: String(overdueUsers.length), sub: overdueUsers[0]?.name || "", subColor: "text-red-300", accent: true },
        ];
        kpis.forEach((kpi) => {
          adminReportsKpis.appendChild(buildKpiCard(kpi));
        });
      }

      // Completion by course
      if (courseBars) {
        courseBars.innerHTML = "";
        const courseList = ADMIN_DASHBOARD_COURSES.filter((c) => ADMIN_COURSE_DETAILS[c]?.status !== "archived");
        const sliced = limit != null && Number.isFinite(limit) ? courseList.slice(0, limit) : courseList;
        sliced.forEach((courseName) => {
          const enrolled = users.filter((u) => getUserEnrolledCourses(u).includes(courseName));
          const completed = users.filter((u) => (u.courseCompletions || []).some((c) => c.course === courseName));
          const pct = enrolled.length > 0 ? Math.round((completed.length / enrolled.length) * 100) : 0;
          courseBars.appendChild(buildProgressBar(pct, courseName));
        });
      }

      // Activity by team
      if (teamBars) {
        teamBars.innerHTML = "";
        const teamList = limit != null && Number.isFinite(limit) ? ADMIN_AVAILABLE_TEAMS.slice(0, limit) : ADMIN_AVAILABLE_TEAMS;
        teamList.forEach((teamName) => {
          const members = users.filter((u) => (u.teams || []).some((t) => t.teamName === teamName));
          const enrolled = members.reduce((s, u) => s + getUserEnrolledCourses(u).length, 0);
          const completed = members.reduce((s, u) => s + Math.min(u.completedQuizzes || 0, getUserEnrolledCourses(u).length), 0);
          const pct = enrolled > 0 ? Math.round((completed / enrolled) * 100) : 0;
          teamBars.appendChild(buildProgressBar(pct, teamName));
        });
      }

      // Top learners
      if (topLearners) {
        let sorted = [...users].sort((a, b) => (b.completedQuizzes || 0) - (a.completedQuizzes || 0));
        if (limit != null && Number.isFinite(limit)) sorted = sorted.slice(0, limit);
        renderTopLearnerRows(topLearners, sorted);
      }
    }

    function showExpandedOverview(kind) {
      if (!adminDetailView) return;
      const lang = resolveCurrentLang();
      const safeLang = lang === "en" ? "en" : "de";
      const str = ADMIN_UI_STRINGS[safeLang];
      const overviewCrumb = { label: str["nav.overview"] || (safeLang === "en" ? "Overview" : "Übersicht"), onClick: hideDetailView };
      let detailCleanup = null;

      const wrapper = document.createElement("div");
      wrapper.className = "space-y-4 mt-4";

      const titleMap = {
        "assignments": str["dashboard.courseProgress"] || "Kursfortschritt",
        "course-bars": str["reports.completionByCourse"] || "Abschlussrate nach Kurs",
        "team-bars": str["reports.activityByTeam"] || "Aktivität nach Team",
        "top-learners": str["reports.topLearners"] || "Top Lernende",
      };

      const panel = document.createElement("section");
      panel.className = "auth-mockup-panel rounded-2xl overflow-hidden";
      const body = document.createElement("div");
      panel.appendChild(body);
      wrapper.appendChild(panel);

      if (kind === "assignments") {
        const scroll = document.createElement("div");
        scroll.className = "overflow-x-auto";
        const table = document.createElement("table");
        table.className = "w-full text-sm";
        const thead = document.createElement("thead");
        thead.className = "bg-white/5 text-gray-300";
        const tbody = document.createElement("tbody");
        tbody.className = "divide-y divide-white/10";
        table.appendChild(thead);
        table.appendChild(tbody);
        scroll.appendChild(table);
        body.appendChild(scroll);
        renderDashboardAssignments(lang, { limit: null, tbody, thead });
      } else if (kind === "course-bars") {
        const inner = document.createElement("div");
        inner.className = "space-y-3 p-6";
        body.appendChild(inner);
        renderReportsPage({ limit: null, courseBars: inner, teamBars: null, topLearners: null });
      } else if (kind === "team-bars") {
        const inner = document.createElement("div");
        inner.className = "space-y-3 p-6";
        body.appendChild(inner);
        renderReportsPage({ limit: null, courseBars: null, teamBars: inner, topLearners: null });
      } else if (kind === "top-learners") {
        const scroll = document.createElement("div");
        scroll.className = "overflow-x-auto";
        const table = document.createElement("table");
        table.className = "w-full text-sm";
        table.innerHTML = `<thead class="bg-white/5 text-gray-300"><tr><th scope="col" class="px-4 py-2 text-left font-medium text-xs">${str["table.user"] || "Nutzer"}</th><th scope="col" class="px-4 py-2 text-center font-medium text-xs">Quiz</th><th scope="col" class="px-4 py-2 text-center font-medium text-xs">${str["reports.certs"] || "Zert."}</th></tr></thead>`;
        const tbody = document.createElement("tbody");
        tbody.className = "divide-y divide-white/10";
        table.appendChild(tbody);
        scroll.appendChild(table);
        body.appendChild(scroll);
        const loadMeta = document.createElement("div");
        loadMeta.className = "space-y-3 px-4 pb-4 pt-3";
        const loadStatus = document.createElement("p");
        loadStatus.className = "text-xs text-gray-400";
        loadStatus.setAttribute("aria-live", "off");
        loadStatus.setAttribute("data-admin-top-learners-load-status", "");
        const srLoadStatus = document.createElement("p");
        srLoadStatus.className = "sr-only";
        srLoadStatus.setAttribute("role", "status");
        srLoadStatus.setAttribute("aria-live", "polite");
        srLoadStatus.setAttribute("data-admin-top-learners-load-status-sr", "");
        const loadMoreButton = document.createElement("button");
        loadMoreButton.type = "button";
        loadMoreButton.className = "inline-flex min-h-[44px] items-center rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-xs font-semibold text-gray-200 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400";
        loadMoreButton.textContent = safeLang === "en" ? "Show more users" : "Mehr Nutzer anzeigen";
        loadMoreButton.setAttribute("data-admin-top-learners-load-more", "");
        const sentinel = document.createElement("div");
        sentinel.className = "h-px w-full";
        sentinel.setAttribute("aria-hidden", "true");
        sentinel.setAttribute("data-admin-top-learners-load-sentinel", "");
        loadMeta.appendChild(loadStatus);
        loadMeta.appendChild(srLoadStatus);
        loadMeta.appendChild(loadMoreButton);
        loadMeta.appendChild(sentinel);
        body.appendChild(loadMeta);

        const data = authApi.getAdminDashboardData();
        const sortedUsers = [...(data?.users || [])].sort((a, b) => (b.completedQuizzes || 0) - (a.completedQuizzes || 0));
        const totalUsers = sortedUsers.length;
        if (!totalUsers) {
          const row = document.createElement("tr");
          row.className = "border-t border-white/10";
          const cell = document.createElement("td");
          cell.colSpan = 3;
          cell.className = "px-4 py-6 text-sm text-gray-400";
          cell.textContent = safeLang === "en" ? "No users found" : "Keine Nutzer gefunden";
          row.appendChild(cell);
          tbody.appendChild(row);
          loadMeta.classList.add("hidden");
          showDetailView(wrapper, [overviewCrumb, { label: titleMap[kind] || "" }]);
          activeDetailCleanup = null;
          return;
        }
        detailCleanup = createLazyBatchRenderer({
          totalCount: totalUsers,
          initialCount: ADMIN_OVERVIEW_USERS_INITIAL_COUNT,
          batchSize: ADMIN_OVERVIEW_USERS_BATCH_SIZE,
          sentinel,
          fallbackButton: loadMoreButton,
          render: (visibleCount) => {
            renderTopLearnerRows(tbody, sortedUsers.slice(0, visibleCount));
          },
          onStatus: ({ visibleCount, totalCount: count, hasMore }) => {
            const statusText = hasMore
              ? (safeLang === "en" ? `${visibleCount} of ${count} users` : `${visibleCount} von ${count} Nutzern`)
              : "";
            loadStatus.textContent = statusText;
            srLoadStatus.textContent = statusText;
          },
        });
      }

      showDetailView(wrapper, [overviewCrumb, { label: titleMap[kind] || "" }]);
      activeDetailCleanup = detailCleanup;
    }

    function showCreateTeamModal() {
      const lang = resolveCurrentLang();
      const safeLang = lang === "en" ? "en" : "de";

      const card = document.createElement("div");
      card.className = "space-y-4";

      const nameInput = createModalInput("text", safeLang === "en" ? "Team name" : "Teamname", "");
      const descInput = document.createElement("textarea");
      descInput.rows = 3;
      descInput.className = "w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-sm text-white placeholder-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400 resize-none";
      descInput.placeholder = safeLang === "en" ? "Description..." : "Beschreibung...";
      descInput.style.backgroundColor = "#1a1a2e";

      const actions = document.createElement("div");
      actions.className = "flex gap-3 pt-2";
      const confirmBtn = document.createElement("button");
      confirmBtn.type = "button";
      confirmBtn.className = `flex-1 ${BUTTON_PRIMARY_BASE}`;
      confirmBtn.textContent = safeLang === "en" ? "Create" : "Erstellen";
      actions.appendChild(confirmBtn);

      confirmBtn.addEventListener("click", () => {
        const name = nameInput.value.trim();
        if (!name) { showToast(safeLang === "en" ? "Please enter a team name" : "Bitte Teamname eingeben", "error"); return; }
        if (ADMIN_AVAILABLE_TEAMS.includes(name)) { showToast(safeLang === "en" ? "Team already exists" : "Team existiert bereits", "error"); return; }
        showToast(safeLang === "en" ? "Team created" : "Team erstellt", "success");
        hideDetailView();
        renderTeamsPage();
      });

      card.appendChild(nameInput);
      card.appendChild(descInput);
      card.appendChild(actions);

      const teamsLabel = "Teams";
      const createLabel = safeLang === "en" ? "Create team" : "Team erstellen";
      showDetailView(card, [
        { label: teamsLabel, onClick: () => hideDetailView() },
        { label: createLabel },
      ]);
      nameInput.focus();
    }

    function showUserCourseDetailPopup(user, teamName, stats, lang) {
      const safeLang = lang === "en" ? "en" : "de";
      const detail = ADMIN_TEAM_DETAILS[teamName] || {};
      const teamCourses = detail.courses || [];
      const completionMap = new Map();
      (user.courseCompletions || []).forEach((cc) => completionMap.set(cc.course, cc));

      const card = document.createElement("div");
      card.className = "space-y-4";

      const { section: avatarSection } = buildUserModalAvatar(user);
      const infoBlock = document.createElement("div");
      const nameEl = document.createElement("p");
      nameEl.className = "text-sm font-semibold text-white";
      nameEl.textContent = user.name;
      const emailEl = document.createElement("p");
      emailEl.className = "text-xs text-gray-400";
      emailEl.textContent = user.email;
      infoBlock.appendChild(nameEl);
      infoBlock.appendChild(emailEl);
      avatarSection.appendChild(infoBlock);

      const goToUserBtn = document.createElement("button");
      goToUserBtn.type = "button";
      goToUserBtn.className = `${BUTTON_SECONDARY_BASE} inline-flex items-center gap-1.5 ml-auto`;
      goToUserBtn.innerHTML = `
        <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor" shape-rendering="crispEdges" aria-hidden="true"><rect x="1" y="7" width="10" height="2"/><rect x="9" y="5" width="2" height="2"/><rect x="11" y="3" width="2" height="2"/><rect x="9" y="9" width="2" height="2"/><rect x="11" y="11" width="2" height="2"/></svg>
        <span>${safeLang === "en" ? "User details" : "Nutzerdetails"}</span>
      `;
      goToUserBtn.addEventListener("click", () => {
        showUserViewModal(user);
      });
      avatarSection.style.display = "flex";
      avatarSection.style.alignItems = "center";
      avatarSection.appendChild(goToUserBtn);

      const tableWrap = document.createElement("div");
      tableWrap.className = "auth-mockup-panel rounded-xl overflow-hidden";

      const progressColFilters = {};
      const progressSortState = { key: null, direction: "asc" };

      const completedL = safeLang === "en" ? "Completed" : "Abgeschlossen";
      const notCompletedL = safeLang === "en" ? "Not completed" : "Nicht abgeschlossen";
      const courseRows = teamCourses.map((courseName) => {
        const cc = completionMap.get(courseName);
        return {
          name: courseName,
          score: cc ? cc.score : -1,
          statusLabel: cc ? completedL : notCompletedL,
          date: cc?.completedAt || "",
          hasCert: Boolean(cc?.certificate),
          cc,
        };
      });

      const statusOptions = [completedL, notCompletedL];
      const statusPillStyles = { [completedL]: PILL_STYLE_GREEN, [notCompletedL]: PILL_STYLE_GRAY };
      const statusCounts = buildCountMap(courseRows, (r) => r.statusLabel);

      const kursL = safeLang === "en" ? "Course" : "Kurs";
      const statusL = safeLang === "en" ? "Score" : "Ergebnis";
      const dateL = safeLang === "en" ? "Date" : "Datum";
      const certL = safeLang === "en" ? "Cert" : "Zert.";

      const progressGetters = {
        course: (r) => r.name,
        score: (r) => r.statusLabel,
        date: { type: "date", getValue: (r) => r.date },
        cert: (r) => r.hasCert ? "1" : "0",
      };

      function renderProgressTable() {
        tableWrap.innerHTML = "";
        const table = document.createElement("table");
        table.className = "w-full text-sm";
        const thead = document.createElement("thead");
        thead.className = "bg-white/5 text-gray-300";

        let filtered = applyColumnFilters(courseRows, progressColFilters, progressGetters);
        filtered = applySort(filtered, progressSortState, progressGetters);

        const headerRow = createFilterableHeader([
          { key: "course", label: kursL, filterable: true },
          { key: "score", label: statusL, filterable: true, options: statusOptions, pillStyles: statusPillStyles, counts: statusCounts },
          { key: "date", label: dateL, filterable: true, type: "date" },
          { key: "cert", label: certL, filterable: false },
        ], progressColFilters, () => renderProgressTable(), progressSortState, () => renderProgressTable());
        thead.appendChild(headerRow);

        const tbody = document.createElement("tbody");
        tbody.className = "divide-y divide-white/10";

        if (filtered.length === 0) {
          const emptyRow = document.createElement("tr");
          const emptyCell = document.createElement("td");
          emptyCell.colSpan = 4;
          emptyCell.className = "px-3 py-3 text-sm text-gray-500 italic text-center";
          emptyCell.textContent = teamCourses.length > 0
            ? (safeLang === "en" ? "No courses match filters" : "Keine Kurse entsprechen den Filtern")
            : (safeLang === "en" ? "No courses assigned to this team" : "Keine Kurse diesem Team zugewiesen");
          emptyRow.appendChild(emptyCell);
          tbody.appendChild(emptyRow);
        } else {
          filtered.forEach((r) => {
            const row = document.createElement("tr");
            row.className = "hover:bg-white/5 transition-colors";

            const nameCell = document.createElement("td");
            nameCell.className = "px-3 py-2 text-sm text-gray-200";
            nameCell.textContent = r.name;

            const scoreCell = document.createElement("td");
            scoreCell.className = "px-3 py-2";
            if (r.cc) {
              const pillStyle = r.score >= 80 ? PILL_STYLE_GREEN : r.score >= 50 ? PILL_STYLE_AMBER : PILL_STYLE_RED;
              scoreCell.appendChild(buildStatusBadge(`${r.score}%`, pillStyle, { weight: "bold" }));
            } else {
              const pending = document.createElement("span");
              pending.className = "text-xs text-gray-500";
              pending.textContent = notCompletedL;
              scoreCell.appendChild(pending);
            }

            const dateCell = document.createElement("td");
            dateCell.className = "px-3 py-2 text-xs text-gray-400";
            dateCell.textContent = r.date
              ? new Date(r.date).toLocaleDateString(safeLang, { day: "2-digit", month: "short", year: "numeric" })
              : "\u2014";

            const certCell = document.createElement("td");
            certCell.className = "px-3 py-2";
            if (r.hasCert) {
              const dlBtn = document.createElement("button");
              dlBtn.type = "button";
              dlBtn.className = "inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-semibold text-primary-300 hover:text-primary-200 border border-primary-400/30 bg-primary-500/10 hover:bg-primary-500/20";
              dlBtn.innerHTML = '<svg width="10" height="10" viewBox="0 0 16 16" fill="currentColor" shape-rendering="crispEdges"><rect x="7" y="1" width="2" height="8"/><rect x="4" y="6" width="2" height="2"/><rect x="10" y="6" width="2" height="2"/><rect x="2" y="12" width="12" height="2"/><rect x="2" y="10" width="2" height="2"/><rect x="12" y="10" width="2" height="2"/></svg> ' + (safeLang === "en" ? "Download" : "Download");
              dlBtn.addEventListener("click", () => showToast(safeLang === "en" ? "Certificate download started" : "Zertifikat-Download gestartet", "success"));
              certCell.appendChild(dlBtn);
            } else {
              certCell.textContent = "\u2014";
            }

            row.appendChild(nameCell);
            row.appendChild(scoreCell);
            row.appendChild(dateCell);
            row.appendChild(certCell);
            tbody.appendChild(row);
          });
        }

        table.appendChild(thead);
        table.appendChild(tbody);
        tableWrap.appendChild(table);
      }
      renderProgressTable();

      card.appendChild(avatarSection);
      card.appendChild(tableWrap);

      const teamsLabel = safeLang === "en" ? "Teams" : "Teams";
      const courseLabel = safeLang === "en" ? "Course progress" : "Kursfortschritt";
      showDetailView(card, [
        { label: teamsLabel, onClick: () => hideDetailView() },
        { label: teamName, onClick: () => showTeamDetailModal(teamName, stats, lang, false) },
        { label: `${user.name} \u2014 ${courseLabel}` },
      ]);
    }

    function showTeamDetailModal(teamName, stats, lang, startInEditMode) {
      const safeLang = lang === "en" ? "en" : "de";
      const str = ADMIN_UI_STRINGS[safeLang];
      const detail = ADMIN_TEAM_DETAILS[teamName] || {};
      const isEdit = Boolean(startInEditMode);

      const card = document.createElement("div");
      card.className = "space-y-4";

      // Editable state
      const editName = { value: teamName };
      const editDesc = { value: detail.description?.[safeLang] || "" };
      const editCourses = [...(detail.courses || [])];
      const editMembers = stats.members.map((u) => {
        const entry = (u.teams || []).find((t) => t.teamName === teamName);
        return { user: u, role: entry?.role || "user" };
      });
      const originalJson = JSON.stringify({ name: editName.value, desc: editDesc.value, courses: editCourses, members: editMembers.map((m) => ({ id: m.user.id, role: m.role })) });

      function hasChanges() {
        const current = JSON.stringify({ name: editName.value, desc: editDesc.value, courses: editCourses, members: editMembers.map((m) => ({ id: m.user.id, role: m.role })) });
        return current !== originalJson;
      }

      // Header
      const headerEl = document.createElement("div");
      headerEl.className = "space-y-3";
      const statusBadge = buildStatusBadge(
        detail.active ? str["teams.active"] : str["teams.inactive"],
        TEAM_STATUS_PILL_STYLES[detail.active ? "active" : "inactive"]
      );
      const nameRow = document.createElement("div");
      nameRow.className = "flex items-center gap-3";

      if (isEdit) {
        const nameInput = document.createElement("input");
        nameInput.type = "text";
        nameInput.value = teamName;
        nameInput.className = "bg-transparent border-b border-white/30 text-xl font-bold text-white w-full focus:outline-none focus:border-primary-400 placeholder-gray-400";
        nameInput.addEventListener("input", () => { editName.value = nameInput.value; });
        nameRow.appendChild(nameInput);
        nameRow.appendChild(statusBadge);
        const descInput = document.createElement("textarea");
        descInput.value = editDesc.value;
        descInput.rows = 2;
        descInput.className = "bg-transparent border border-white/15 rounded-lg text-sm text-gray-300 w-full p-2 focus:outline-none focus:border-primary-400 placeholder-gray-400 resize-none";
        descInput.placeholder = safeLang === "en" ? "Team description..." : "Teambeschreibung...";
        descInput.addEventListener("input", () => { editDesc.value = descInput.value; });
        headerEl.appendChild(nameRow);
        headerEl.appendChild(descInput);
      } else {
        nameRow.className = "flex items-start justify-between gap-3";

        const titleWrap = document.createElement("div");
        titleWrap.className = "flex items-center gap-3 flex-wrap min-w-0";
        const titleEl = document.createElement("h3");
        titleEl.className = "text-xl font-bold text-white";
        titleEl.textContent = teamName;
        titleWrap.appendChild(titleEl);
        titleWrap.appendChild(statusBadge);

        const actionsMenuWrap = document.createElement("div");
        actionsMenuWrap.className = "relative flex-shrink-0";
        const actionsMenuBtn = document.createElement("button");
        actionsMenuBtn.type = "button";
        actionsMenuBtn.className = `${BUTTON_PRIMARY_BASE} inline-flex items-center gap-2`;
        actionsMenuBtn.setAttribute("aria-haspopup", "menu");
        actionsMenuBtn.setAttribute("aria-expanded", "false");
        actionsMenuBtn.innerHTML = `
          <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" shape-rendering="crispEdges" aria-hidden="true"><rect x="3" y="7" width="2" height="2"/><rect x="7" y="7" width="2" height="2"/><rect x="11" y="7" width="2" height="2"/></svg>
          <span>${safeLang === "en" ? "Manage team" : "Team verwalten"}</span>
          <svg width="10" height="10" viewBox="0 0 16 16" fill="currentColor" shape-rendering="crispEdges" aria-hidden="true"><rect x="3" y="5" width="2" height="2"/><rect x="5" y="7" width="2" height="2"/><rect x="7" y="9" width="2" height="2"/><rect x="9" y="7" width="2" height="2"/><rect x="11" y="5" width="2" height="2"/></svg>
        `;
        const actionsMenu = document.createElement("div");
        actionsMenu.className = "hidden absolute right-0 top-full mt-1 z-20 min-w-[13rem] rounded-lg border border-white/10 bg-cyber-dark/95 backdrop-blur-md shadow-xl py-1";
        const editTeamOption = document.createElement("button");
        editTeamOption.type = "button";
        editTeamOption.className = "w-full text-left px-3 py-2 text-sm text-gray-200 hover:bg-white/10";
        editTeamOption.textContent = safeLang === "en" ? "Edit team" : "Team bearbeiten";
        const deleteTeamOption = document.createElement("button");
        deleteTeamOption.type = "button";
        deleteTeamOption.className = "w-full text-left px-3 py-2 text-sm text-red-300 hover:bg-red-500/10";
        deleteTeamOption.textContent = safeLang === "en" ? "Delete team" : "Team löschen";
        actionsMenu.appendChild(editTeamOption);
        actionsMenu.appendChild(deleteTeamOption);
        actionsMenuWrap.appendChild(actionsMenuBtn);
        actionsMenuWrap.appendChild(actionsMenu);

        nameRow.appendChild(titleWrap);
        nameRow.appendChild(actionsMenuWrap);

        const descEl = document.createElement("p");
        descEl.className = "text-sm text-gray-300";
        descEl.textContent = detail.description?.[safeLang] || "";

        const viewSection = document.createElement("div");
        viewSection.className = "space-y-3";
        viewSection.appendChild(nameRow);
        viewSection.appendChild(descEl);

        const editSection = document.createElement("div");
        editSection.className = "hidden space-y-3 rounded-xl border border-primary-500/30 bg-white/5 p-4";

        headerEl.appendChild(viewSection);
        headerEl.appendChild(editSection);

        actionsMenuBtn.addEventListener("click", (ev) => {
          ev.stopPropagation();
          const nowHidden = actionsMenu.classList.toggle("hidden");
          actionsMenuBtn.setAttribute("aria-expanded", nowHidden ? "false" : "true");
        });
        document.addEventListener("click", () => {
          actionsMenu.classList.add("hidden");
          actionsMenuBtn.setAttribute("aria-expanded", "false");
        });
        actionsMenu.addEventListener("click", (ev) => ev.stopPropagation());

        const closeTeamEdit = () => {
          editSection.innerHTML = "";
          editSection.classList.add("hidden");
          viewSection.classList.remove("hidden");
        };

        const openTeamEdit = () => {
          editSection.innerHTML = "";

          const buildField = (labelText) => {
            const wrap = document.createElement("div");
            wrap.className = "space-y-1";
            const lbl = document.createElement("label");
            lbl.className = "block text-xs uppercase tracking-wide text-gray-400 font-bold";
            lbl.textContent = labelText;
            wrap.appendChild(lbl);
            return { wrap, lbl };
          };

          const heading = document.createElement("p");
          heading.className = "text-base text-white font-semibold";
          heading.textContent = safeLang === "en" ? "Edit team" : "Team bearbeiten";

          const nameField = buildField(safeLang === "en" ? "Team name" : "Teamname");
          const nameInput = document.createElement("input");
          nameInput.type = "text";
          nameInput.value = teamName;
          nameInput.className = "bg-transparent border border-white/15 rounded-lg text-sm text-white w-full px-3 py-2 focus:outline-none focus:border-primary-400 placeholder-gray-400";
          nameField.wrap.appendChild(nameInput);

          const descField = buildField(safeLang === "en" ? "Description" : "Beschreibung");
          const textarea = document.createElement("textarea");
          textarea.value = detail.description?.[safeLang] || "";
          textarea.rows = 3;
          textarea.className = "bg-transparent border border-white/15 rounded-lg text-sm text-gray-200 w-full p-2 focus:outline-none focus:border-primary-400 placeholder-gray-400 resize-none";
          textarea.placeholder = safeLang === "en" ? "Team description..." : "Teambeschreibung...";
          descField.wrap.appendChild(textarea);

          const statusField = buildField(safeLang === "en" ? "Status" : "Status");
          const statusSelect = createModalSelect(
            [
              { value: "active", label: safeLang === "en" ? "Active" : "Aktiv" },
              { value: "inactive", label: safeLang === "en" ? "Inactive" : "Inaktiv" },
            ],
            detail.active ? "active" : "inactive"
          );
          statusField.wrap.appendChild(statusSelect);

          const btns = document.createElement("div");
          btns.className = "flex gap-3 pt-2";
          const cancel = document.createElement("button");
          cancel.type = "button";
          cancel.className = `flex-1 ${BUTTON_SECONDARY_BASE}`;
          cancel.textContent = safeLang === "en" ? "Cancel" : "Abbrechen";
          const save = document.createElement("button");
          save.type = "button";
          save.className = `flex-1 ${BUTTON_PRIMARY_BASE}`;
          save.textContent = safeLang === "en" ? "Save" : "Speichern";
          btns.appendChild(cancel);
          btns.appendChild(save);

          editSection.appendChild(heading);
          editSection.appendChild(nameField.wrap);
          editSection.appendChild(descField.wrap);
          editSection.appendChild(statusField.wrap);
          editSection.appendChild(btns);

          viewSection.classList.add("hidden");
          editSection.classList.remove("hidden");
          setTimeout(() => nameInput.focus(), 0);

          cancel.addEventListener("click", closeTeamEdit);

          save.addEventListener("click", () => {
            const nextName = nameInput.value.trim();
            if (!nextName) {
              showToast(safeLang === "en" ? "Team name cannot be empty" : "Teamname darf nicht leer sein", "error");
              nameInput.focus();
              return;
            }
            if (nextName !== teamName && ADMIN_AVAILABLE_TEAMS.includes(nextName)) {
              showToast(safeLang === "en" ? "A team with this name already exists" : "Ein Team mit diesem Namen existiert bereits", "error");
              nameInput.focus();
              return;
            }

            const nextDesc = textarea.value.trim();
            const nextActive = statusSelect.value === "active";

            if (!ADMIN_TEAM_DETAILS[teamName]) ADMIN_TEAM_DETAILS[teamName] = { courses: [] };
            if (!ADMIN_TEAM_DETAILS[teamName].description) ADMIN_TEAM_DETAILS[teamName].description = { de: "", en: "" };
            ADMIN_TEAM_DETAILS[teamName].description[safeLang] = nextDesc;
            ADMIN_TEAM_DETAILS[teamName].active = nextActive;

            const renaming = nextName !== teamName;
            if (renaming) {
              const res = renameTeam(teamName, nextName);
              if (!res.ok) {
                showToast(safeLang === "en" ? "Could not rename team" : "Team konnte nicht umbenannt werden", "error");
                return;
              }
              showToast(safeLang === "en" ? "Team updated" : "Team aktualisiert", "success");
              hideDetailView();
              renderTeamsPage();
              return;
            }

            descEl.textContent = nextDesc;
            const nextPill = TEAM_STATUS_PILL_STYLES[nextActive ? "active" : "inactive"];
            statusBadge.textContent = nextActive ? str["teams.active"] : str["teams.inactive"];
            statusBadge.style.backgroundColor = nextPill.bg;
            statusBadge.style.borderColor = nextPill.border;
            statusBadge.style.color = nextPill.text;


            closeTeamEdit();
            showToast(safeLang === "en" ? "Team updated" : "Team aktualisiert", "success");
          });
        };

        editTeamOption.addEventListener("click", () => {
          actionsMenu.classList.add("hidden");
          actionsMenuBtn.setAttribute("aria-expanded", "false");
          openTeamEdit();
        });
        deleteTeamOption.addEventListener("click", () => {
          actionsMenu.classList.add("hidden");
          actionsMenuBtn.setAttribute("aria-expanded", "false");
          const co = createModalOverlay();
          const cc = createModalCard();
          cc.style.maxWidth = "20rem";
          const msg = document.createElement("p");
          msg.className = "text-sm text-white font-semibold";
          msg.textContent = safeLang === "en" ? "Delete this team?" : "Team wirklich löschen?";
          const det = document.createElement("p");
          det.className = "text-sm text-gray-400";
          det.textContent = safeLang === "en"
            ? `${teamName} will be permanently removed.`
            : `${teamName} wird dauerhaft entfernt.`;
          const btns = document.createElement("div");
          btns.className = "flex gap-3 pt-2";
          const keep = document.createElement("button");
          keep.type = "button";
          keep.className = `flex-1 ${BUTTON_SECONDARY_BASE}`;
          keep.textContent = safeLang === "en" ? "Cancel" : "Abbrechen";
          const confirm = document.createElement("button");
          confirm.type = "button";
          confirm.className = `flex-1 ${BUTTON_DANGER_STRONG_BASE}`;
          confirm.textContent = safeLang === "en" ? "Delete" : "Löschen";
          btns.appendChild(keep);
          btns.appendChild(confirm);
          cc.appendChild(msg);
          cc.appendChild(det);
          cc.appendChild(btns);
          co.appendChild(cc);
          document.body.appendChild(co);
          keep.addEventListener("click", () => co.remove());
          co.addEventListener("click", (ev) => { if (ev.target === co) co.remove(); });
          confirm.addEventListener("click", () => {
            deleteTeamFromData(teamName);
            co.remove();
            showToast(safeLang === "en" ? "Team deleted" : "Team gelöscht", "success");
            hideDetailView();
            renderTeamsPage();
          });
        });
      }

      // Body
      const body = document.createElement("div");
      body.className = "space-y-5";

      // --- Courses section ---
      const coursesSection = document.createElement("div");
      coursesSection.className = "space-y-2";

      const coursesHeader = document.createElement("div");
      coursesHeader.className = "flex items-center justify-between gap-3";

      const coursesLabel = document.createElement("p");
      coursesLabel.className = "text-xs uppercase tracking-wide text-gray-400 font-bold";

      const coursesButtonsWrap = document.createElement("div");
      coursesButtonsWrap.className = "flex items-center gap-2 flex-shrink-0";
      const addCourseBtn = document.createElement("button");
      addCourseBtn.type = "button";
      addCourseBtn.className = `${BUTTON_PRIMARY_BASE} inline-flex items-center gap-1.5`;
      addCourseBtn.innerHTML = `
        <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor" shape-rendering="crispEdges" aria-hidden="true"><rect x="7" y="3" width="2" height="10"/><rect x="3" y="7" width="10" height="2"/></svg>
        <span>${safeLang === "en" ? "Add" : "Hinzufügen"}</span>
      `;
      const deleteSelectedBtn = document.createElement("button");
      deleteSelectedBtn.type = "button";
      deleteSelectedBtn.className = `${BUTTON_DANGER_BASE} inline-flex items-center gap-1.5 opacity-50 cursor-not-allowed`;
      deleteSelectedBtn.disabled = true;
      deleteSelectedBtn.innerHTML = `
        <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor" shape-rendering="crispEdges" aria-hidden="true"><rect x="2" y="3" width="12" height="2"/><rect x="6" y="1" width="4" height="2"/><rect x="3" y="5" width="2" height="9"/><rect x="5" y="5" width="6" height="2"/><rect x="5" y="12" width="6" height="2"/><rect x="11" y="5" width="2" height="9"/><rect x="6" y="7" width="2" height="5"/><rect x="8" y="7" width="2" height="5"/></svg>
        <span>${safeLang === "en" ? "Delete" : "Löschen"}</span>
      `;
      coursesButtonsWrap.appendChild(addCourseBtn);
      coursesButtonsWrap.appendChild(deleteSelectedBtn);

      coursesHeader.appendChild(coursesLabel);
      coursesHeader.appendChild(coursesButtonsWrap);

      const coursesTableWrap = document.createElement("div");
      coursesTableWrap.className = "auth-mockup-panel rounded-xl overflow-hidden";

      coursesSection.appendChild(coursesHeader);
      coursesSection.appendChild(coursesTableWrap);

      let coursesMode = "view";
      const selectedForDelete = new Set();
      const coursesColFilters = {};
      const coursesSortState = { key: null, direction: "asc" };

      function persistCoursesIfNeeded() {
        if (isEdit) return;
        if (!ADMIN_TEAM_DETAILS[teamName]) ADMIN_TEAM_DETAILS[teamName] = { courses: [] };
        ADMIN_TEAM_DETAILS[teamName].courses = [...editCourses];
      }

      function updateDeleteBtnState() {
        const empty = selectedForDelete.size === 0;
        deleteSelectedBtn.disabled = empty;
        deleteSelectedBtn.classList.toggle("opacity-50", empty);
        deleteSelectedBtn.classList.toggle("cursor-not-allowed", empty);
      }

      function renderCoursesTable() {
        coursesLabel.textContent = `${safeLang === "en" ? "Assigned courses" : "Zugewiesene Kurse"} (${editCourses.length})`;
        coursesTableWrap.innerHTML = "";
        const table = document.createElement("table");
        table.className = "w-full text-sm";
        const thead = document.createElement("thead");
        thead.className = "bg-white/5 text-gray-300";
        const kursL = safeLang === "en" ? "Course" : "Kurs";
        const progL = safeLang === "en" ? "Progress" : "Fortschritt";

        const courseRows = editCourses.map((c, idx) => {
          const enrolledN = editMembers.filter(({ user }) => getUserEnrolledCourses(user).includes(c)).length;
          const completedN = editMembers.filter(({ user }) => (user.courseCompletions || []).some((cc) => cc.course === c)).length;
          const rate = enrolledN > 0 ? Math.round((completedN / enrolledN) * 100) : 0;
          return { name: c, idx, rate };
        });
        const coursesGetters = {
          course: (r) => r.name,
          progress: (r) => r.rate,
        };
        let filtered = applyColumnFilters(courseRows, coursesColFilters, coursesGetters);
        filtered = applySort(filtered, coursesSortState, coursesGetters);

        const headerRow = createFilterableHeader([
          { key: "course", label: kursL, filterable: true },
          { key: "progress", label: progL, filterable: true },
        ], coursesColFilters, () => renderCoursesTable(), coursesSortState, () => renderCoursesTable());

        const selectAllTh = document.createElement("th");
        selectAllTh.setAttribute("scope", "col");
        selectAllTh.className = "px-3 py-2 w-10";
        const visibleIdxs = filtered.map((r) => r.idx);
        const allSelected = visibleIdxs.length > 0 && visibleIdxs.every((i) => selectedForDelete.has(i));
        const someSelected = visibleIdxs.some((i) => selectedForDelete.has(i)) && !allSelected;
        const selectAllCb = buildQuizStyleCheckbox({
          checked: allSelected,
          indeterminate: someSelected,
          ariaLabel: safeLang === "en" ? "Select all" : "Alle auswählen",
          onChange: () => {
            if (allSelected) {
              visibleIdxs.forEach((i) => selectedForDelete.delete(i));
            } else {
              visibleIdxs.forEach((i) => selectedForDelete.add(i));
            }
            renderCoursesTable();
          },
        });
        selectAllTh.appendChild(selectAllCb);
        headerRow.insertBefore(selectAllTh, headerRow.firstChild);
        thead.appendChild(headerRow);

        const tbody = document.createElement("tbody");
        tbody.className = "divide-y divide-white/10";
        const totalCols = 3;

        if (coursesMode === "add") {
          const addRow = document.createElement("tr");
          addRow.className = "bg-white/[0.03]";
          const addCell = document.createElement("td");
          addCell.className = "px-3 py-2";
          addCell.colSpan = totalCols;
          const addContainer = document.createElement("div");
          addContainer.className = "flex items-center gap-2";
          const sel = createSearchableSelect({
            items: ADMIN_DASHBOARD_COURSES.map((c) => ({ value: c, label: c })),
            placeholder: safeLang === "en" ? "Add course\u2026" : "Kurs hinzuf\u00FCgen\u2026",
            getExcluded: () => editCourses,
          });
          sel.classList.add("flex-1");
          const confirmAddBtn = document.createElement("button");
          confirmAddBtn.type = "button";
          confirmAddBtn.className = "flex-shrink-0 w-8 h-8 rounded-lg border border-green-500/30 bg-green-500/10 flex items-center justify-center text-green-400 hover:bg-green-500/25";
          confirmAddBtn.setAttribute("aria-label", safeLang === "en" ? "Confirm add" : "Hinzufügen bestätigen");
          confirmAddBtn.innerHTML = '<svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor" shape-rendering="crispEdges"><rect x="3" y="7" width="2" height="2"/><rect x="5" y="9" width="2" height="2"/><rect x="7" y="7" width="2" height="2"/><rect x="9" y="5" width="2" height="2"/><rect x="11" y="3" width="2" height="2"/></svg>';
          confirmAddBtn.addEventListener("click", () => {
            const val = sel.value;
            if (!val) return;
            editCourses.unshift(val);
            persistCoursesIfNeeded();
            if (!isEdit) showToast(safeLang === "en" ? "Course added" : "Kurs hinzugefügt", "success");
            coursesMode = "view";
            renderCoursesTable();
          });
          const cancelAddBtn = document.createElement("button");
          cancelAddBtn.type = "button";
          cancelAddBtn.className = "flex-shrink-0 w-8 h-8 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-gray-400 hover:bg-white/10";
          cancelAddBtn.setAttribute("aria-label", safeLang === "en" ? "Cancel add" : "Hinzufügen abbrechen");
          cancelAddBtn.innerHTML = '<svg width="10" height="10" viewBox="0 0 16 16" fill="currentColor" shape-rendering="crispEdges"><rect x="3" y="3" width="2" height="2"/><rect x="11" y="3" width="2" height="2"/><rect x="5" y="5" width="2" height="2"/><rect x="9" y="5" width="2" height="2"/><rect x="7" y="7" width="2" height="2"/><rect x="5" y="9" width="2" height="2"/><rect x="9" y="9" width="2" height="2"/><rect x="3" y="11" width="2" height="2"/><rect x="11" y="11" width="2" height="2"/></svg>';
          cancelAddBtn.addEventListener("click", () => {
            coursesMode = "view";
            renderCoursesTable();
          });
          addContainer.appendChild(sel);
          addContainer.appendChild(confirmAddBtn);
          addContainer.appendChild(cancelAddBtn);
          addCell.appendChild(addContainer);
          addRow.appendChild(addCell);
          tbody.appendChild(addRow);
        }

        if (filtered.length === 0 && coursesMode !== "add") {
          const emptyRow = document.createElement("tr");
          const emptyCell = document.createElement("td");
          emptyCell.colSpan = totalCols;
          emptyCell.className = "px-3 py-3 text-sm text-gray-500 italic text-center";
          emptyCell.textContent = editCourses.length > 0
            ? (safeLang === "en" ? "No courses match filters" : "Keine Kurse entsprechen den Filtern")
            : (safeLang === "en" ? "No courses assigned" : "Keine Kurse zugewiesen");
          emptyRow.appendChild(emptyCell);
          tbody.appendChild(emptyRow);
        } else {
          filtered.forEach((r) => {
            const row = document.createElement("tr");
            row.className = "hover:bg-white/5 transition-colors";

            const cbCell = document.createElement("td");
            cbCell.className = "px-3 py-2 text-center";
            const cb = buildQuizStyleCheckbox({
              checked: selectedForDelete.has(r.idx),
              ariaLabel: safeLang === "en" ? `Select ${r.name}` : `${r.name} auswählen`,
              onChange: (nowChecked) => {
                if (nowChecked) selectedForDelete.add(r.idx);
                else selectedForDelete.delete(r.idx);
                renderCoursesTable();
              },
            });
            cbCell.appendChild(cb);
            row.appendChild(cbCell);

            const nameCell = document.createElement("td");
            nameCell.className = "px-3 py-2 text-sm text-gray-200";
            nameCell.textContent = r.name;
            row.appendChild(nameCell);

            const progCell = document.createElement("td");
            progCell.className = "px-3 py-2";
            progCell.appendChild(buildProgressBarCell(r.rate));
            row.appendChild(progCell);

            tbody.appendChild(row);
          });
        }

        table.appendChild(thead);
        table.appendChild(tbody);
        coursesTableWrap.appendChild(table);

        updateDeleteBtnState();
      }

      addCourseBtn.addEventListener("click", () => {
        coursesMode = "add";
        renderCoursesTable();
      });
      deleteSelectedBtn.addEventListener("click", () => {
        if (selectedForDelete.size === 0) return;
        const count = selectedForDelete.size;
        const targetNames = [...selectedForDelete].sort((a, b) => a - b).map((i) => editCourses[i]);
        const co = createModalOverlay();
        const cc = createModalCard();
        cc.style.maxWidth = "22rem";
        const msg = document.createElement("p");
        msg.className = "text-sm text-white font-semibold";
        msg.textContent = safeLang === "en"
          ? (count === 1 ? "Remove this course from the team?" : `Remove ${count} courses from the team?`)
          : (count === 1 ? "Diesen Kurs aus dem Team entfernen?" : `${count} Kurse aus dem Team entfernen?`);
        const det = document.createElement("p");
        det.className = "text-sm text-gray-400 break-words";
        det.textContent = targetNames.join(", ");
        const btns = document.createElement("div");
        btns.className = "flex gap-3 pt-2";
        const keepBtn = document.createElement("button");
        keepBtn.type = "button";
        keepBtn.className = `flex-1 ${BUTTON_SECONDARY_BASE}`;
        keepBtn.textContent = safeLang === "en" ? "Cancel" : "Abbrechen";
        const confirmBtn = document.createElement("button");
        confirmBtn.type = "button";
        confirmBtn.className = `flex-1 ${BUTTON_DANGER_STRONG_BASE}`;
        confirmBtn.textContent = safeLang === "en" ? "Remove" : "Entfernen";
        btns.appendChild(keepBtn);
        btns.appendChild(confirmBtn);
        cc.appendChild(msg);
        cc.appendChild(det);
        cc.appendChild(btns);
        co.appendChild(cc);
        document.body.appendChild(co);
        keepBtn.addEventListener("click", () => co.remove());
        co.addEventListener("click", (ev) => { if (ev.target === co) co.remove(); });
        confirmBtn.addEventListener("click", () => {
          co.remove();
          const idxList = [...selectedForDelete].sort((a, b) => b - a);
          idxList.forEach((i) => editCourses.splice(i, 1));
          selectedForDelete.clear();
          persistCoursesIfNeeded();
          if (!isEdit) {
            const toastMsg = safeLang === "en"
              ? (count === 1 ? "1 course removed" : `${count} courses removed`)
              : (count === 1 ? "1 Kurs entfernt" : `${count} Kurse entfernt`);
            showToast(toastMsg, "success");
          }
          coursesMode = "view";
          renderCoursesTable();
        });
      });

      renderCoursesTable();

      // --- Members section ---
      const membersSection = document.createElement("div");
      membersSection.className = "space-y-2";

      const membersHeader = document.createElement("div");
      membersHeader.className = "flex items-center justify-between gap-3";

      const membersLabel = document.createElement("p");
      membersLabel.className = "text-xs uppercase tracking-wide text-gray-400 font-bold";

      const membersButtonsWrap = document.createElement("div");
      membersButtonsWrap.className = "flex items-center gap-2 flex-shrink-0";
      const addMemberBtn = document.createElement("button");
      addMemberBtn.type = "button";
      addMemberBtn.className = `${BUTTON_PRIMARY_BASE} inline-flex items-center gap-1.5`;
      addMemberBtn.innerHTML = `
        <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor" shape-rendering="crispEdges" aria-hidden="true"><rect x="7" y="3" width="2" height="10"/><rect x="3" y="7" width="10" height="2"/></svg>
        <span>${safeLang === "en" ? "Add" : "Hinzufügen"}</span>
      `;
      const deleteMembersBtn = document.createElement("button");
      deleteMembersBtn.type = "button";
      deleteMembersBtn.className = `${BUTTON_DANGER_BASE} inline-flex items-center gap-1.5 opacity-50 cursor-not-allowed`;
      deleteMembersBtn.disabled = true;
      deleteMembersBtn.innerHTML = `
        <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor" shape-rendering="crispEdges" aria-hidden="true"><rect x="2" y="3" width="12" height="2"/><rect x="6" y="1" width="4" height="2"/><rect x="3" y="5" width="2" height="9"/><rect x="5" y="5" width="6" height="2"/><rect x="5" y="12" width="6" height="2"/><rect x="11" y="5" width="2" height="9"/><rect x="6" y="7" width="2" height="5"/><rect x="8" y="7" width="2" height="5"/></svg>
        <span>${safeLang === "en" ? "Delete" : "Löschen"}</span>
      `;
      membersButtonsWrap.appendChild(addMemberBtn);
      membersButtonsWrap.appendChild(deleteMembersBtn);

      membersHeader.appendChild(membersLabel);
      membersHeader.appendChild(membersButtonsWrap);

      const membersTableWrap = document.createElement("div");
      membersTableWrap.className = "auth-mockup-panel rounded-xl overflow-hidden";

      membersSection.appendChild(membersHeader);
      membersSection.appendChild(membersTableWrap);

      const data = authApi.getAdminDashboardData();
      const allUsers = data?.users || [];

      let membersMode = "view";
      const selectedMembersForDelete = new Set();
      const membersColFilters = {};
      const membersSortState = { key: null, direction: "asc" };

      function persistMembersIfNeeded() {
        if (isEdit) return;
        const currentIds = new Set(editMembers.map((m) => m.user.id));
        allUsers.forEach((u) => {
          const hasTeam = Array.isArray(u.teams) && u.teams.some((t) => t.teamName === teamName);
          if (currentIds.has(u.id) && !hasTeam) {
            const roleEntry = editMembers.find((m) => m.user.id === u.id);
            u.teams = [...(u.teams || []), { teamName, role: roleEntry?.role || "user" }];
          } else if (!currentIds.has(u.id) && hasTeam) {
            u.teams = (u.teams || []).filter((t) => t.teamName !== teamName);
          } else if (currentIds.has(u.id) && hasTeam) {
            const roleEntry = editMembers.find((m) => m.user.id === u.id);
            u.teams = (u.teams || []).map((t) => t.teamName === teamName ? { ...t, role: roleEntry?.role || t.role } : t);
          }
        });
        ensureTeamOwner(teamName);
        if (teamOwnerRefresh) teamOwnerRefresh();
      }

      function updateDeleteMembersBtnState() {
        const empty = selectedMembersForDelete.size === 0;
        deleteMembersBtn.disabled = empty;
        deleteMembersBtn.classList.toggle("opacity-50", empty);
        deleteMembersBtn.classList.toggle("cursor-not-allowed", empty);
      }

      let activeMemberActionsMenu = null;
      function closeMemberRowActionsMenu() {
        if (!activeMemberActionsMenu) return;
        const s = activeMemberActionsMenu;
        if (s.menu?.parentNode) s.menu.parentNode.removeChild(s.menu);
        if (s.buttonEl) s.buttonEl.setAttribute("aria-expanded", "false");
        document.removeEventListener("click", s.outsideHandler, true);
        document.removeEventListener("keydown", s.keyHandler);
        window.removeEventListener("scroll", s.scrollHandler, true);
        window.removeEventListener("resize", s.scrollHandler);
        activeMemberActionsMenu = null;
      }

      function openRemoveMemberConfirmation(memberIdx, user, safeLang) {
        const co = createModalOverlay();
        const cc = createModalCard();
        cc.style.maxWidth = "22rem";
        const msg = document.createElement("p");
        msg.className = "text-sm text-white font-semibold";
        msg.textContent = safeLang === "en" ? "Remove this member from the team?" : "Dieses Mitglied aus dem Team entfernen?";
        const det = document.createElement("p");
        det.className = "text-sm text-gray-400 break-words";
        det.textContent = user.name;
        const btns = document.createElement("div");
        btns.className = "flex gap-3 pt-2";
        const keepBtn = document.createElement("button");
        keepBtn.type = "button";
        keepBtn.className = `flex-1 ${BUTTON_SECONDARY_BASE}`;
        keepBtn.textContent = safeLang === "en" ? "Cancel" : "Abbrechen";
        const confirmBtn = document.createElement("button");
        confirmBtn.type = "button";
        confirmBtn.className = `flex-1 ${BUTTON_DANGER_STRONG_BASE}`;
        confirmBtn.textContent = safeLang === "en" ? "Remove" : "Entfernen";
        btns.appendChild(keepBtn);
        btns.appendChild(confirmBtn);
        cc.appendChild(msg);
        cc.appendChild(det);
        cc.appendChild(btns);
        co.appendChild(cc);
        document.body.appendChild(co);
        keepBtn.addEventListener("click", () => co.remove());
        co.addEventListener("click", (ev) => { if (ev.target === co) co.remove(); });
        confirmBtn.addEventListener("click", () => {
          co.remove();
          editMembers.splice(memberIdx, 1);
          selectedMembersForDelete.clear();
          persistMembersIfNeeded();
          if (!isEdit) showToast(safeLang === "en" ? "Member removed" : "Mitglied entfernt", "success");
          renderMembersTable();
        });
      }

      function openMemberRowActionsMenu(buttonEl, rowData, safeLang) {
        closeMemberRowActionsMenu();
        const currentRole = normalizeAdminRole(rowData.entry.role);
        const user = rowData.user;
        const memberIdx = rowData.idx;

        const menu = document.createElement("div");
        menu.className = "fixed z-50 min-w-[12rem] rounded-lg border border-white/10 bg-cyber-dark/95 backdrop-blur-md shadow-xl py-1";
        menu.setAttribute("role", "menu");

        // Role change item with submenu
        const roleItem = document.createElement("div");
        roleItem.className = "relative";
        const roleBtn = document.createElement("button");
        roleBtn.type = "button";
        roleBtn.className = "w-full text-left px-3 py-2 text-sm text-gray-200 hover:bg-white/10 flex items-center justify-between gap-3";
        const roleLabelEl = document.createElement("span");
        roleLabelEl.textContent = safeLang === "en" ? "Change role" : "Rolle ändern";
        const chevron = document.createElement("span");
        chevron.className = "text-gray-500 text-xs";
        chevron.textContent = "›";
        roleBtn.appendChild(roleLabelEl);
        roleBtn.appendChild(chevron);

        const submenu = document.createElement("div");
        submenu.className = "hidden absolute right-full top-0 mr-1 min-w-[10rem] rounded-lg border border-white/10 bg-cyber-dark/95 backdrop-blur-md shadow-xl py-1";
        submenu.setAttribute("role", "menu");

        getRoleOptions(safeLang).forEach((opt) => {
          const item = document.createElement("button");
          item.type = "button";
          const isCurrent = opt.value === currentRole;
          item.className = `w-full text-left px-3 py-2 text-sm flex items-center justify-between gap-3 ${isCurrent ? "text-gray-500 cursor-default" : "text-gray-200 hover:bg-white/10"}`;
          const labelSpan = document.createElement("span");
          labelSpan.textContent = opt.label;
          item.appendChild(labelSpan);
          if (isCurrent) {
            const check = document.createElement("span");
            check.className = "text-green-400";
            check.innerHTML = '<svg width="10" height="10" viewBox="0 0 16 16" fill="currentColor" shape-rendering="crispEdges" aria-hidden="true"><rect x="3" y="7" width="2" height="2"/><rect x="5" y="9" width="2" height="2"/><rect x="7" y="7" width="2" height="2"/><rect x="9" y="5" width="2" height="2"/><rect x="11" y="3" width="2" height="2"/></svg>';
            item.appendChild(check);
            item.disabled = true;
          } else {
            item.addEventListener("click", (ev) => {
              ev.stopPropagation();
              editMembers[memberIdx].role = opt.value;
              persistMembersIfNeeded();
              closeMemberRowActionsMenu();
              if (!isEdit) showToast(safeLang === "en" ? `Role changed to ${opt.label}` : `Rolle geändert zu ${opt.label}`, "success");
              renderMembersTable();
            });
          }
          submenu.appendChild(item);
        });

        roleItem.appendChild(roleBtn);
        roleItem.appendChild(submenu);

        let submenuCloseTimer = null;
        const openSubmenu = () => {
          if (submenuCloseTimer) { clearTimeout(submenuCloseTimer); submenuCloseTimer = null; }
          submenu.classList.remove("hidden");
        };
        const scheduleCloseSubmenu = () => {
          if (submenuCloseTimer) clearTimeout(submenuCloseTimer);
          submenuCloseTimer = setTimeout(() => submenu.classList.add("hidden"), 150);
        };
        roleItem.addEventListener("mouseenter", openSubmenu);
        roleItem.addEventListener("mouseleave", scheduleCloseSubmenu);
        submenu.addEventListener("mouseenter", openSubmenu);
        submenu.addEventListener("mouseleave", scheduleCloseSubmenu);
        roleBtn.addEventListener("click", (ev) => {
          ev.stopPropagation();
          if (submenu.classList.contains("hidden")) openSubmenu();
          else submenu.classList.add("hidden");
        });

        menu.appendChild(roleItem);

        const sep = document.createElement("div");
        sep.className = "my-1 border-t border-white/10";
        menu.appendChild(sep);

        const removeItem = document.createElement("button");
        removeItem.type = "button";
        removeItem.className = "w-full text-left px-3 py-2 text-sm text-red-300 hover:bg-red-500/10";
        removeItem.textContent = safeLang === "en" ? "Remove from team" : "Aus Team entfernen";
        removeItem.addEventListener("click", (ev) => {
          ev.stopPropagation();
          closeMemberRowActionsMenu();
          openRemoveMemberConfirmation(memberIdx, user, safeLang);
        });
        menu.appendChild(removeItem);

        document.body.appendChild(menu);

        const rect = buttonEl.getBoundingClientRect();
        const menuRect = menu.getBoundingClientRect();
        let top = rect.bottom + 4;
        if (top + menuRect.height > window.innerHeight - 8) {
          top = Math.max(8, rect.top - menuRect.height - 4);
        }
        const rightOffset = window.innerWidth - rect.right;
        menu.style.top = `${top}px`;
        menu.style.right = `${rightOffset}px`;

        buttonEl.setAttribute("aria-expanded", "true");

        const outsideHandler = (ev) => {
          if (!menu.contains(ev.target) && ev.target !== buttonEl && !buttonEl.contains(ev.target)) {
            closeMemberRowActionsMenu();
          }
        };
        const keyHandler = (ev) => { if (ev.key === "Escape") closeMemberRowActionsMenu(); };
        const scrollHandler = () => closeMemberRowActionsMenu();

        activeMemberActionsMenu = { menu, buttonEl, outsideHandler, keyHandler, scrollHandler };
        setTimeout(() => {
          document.addEventListener("click", outsideHandler, true);
          document.addEventListener("keydown", keyHandler);
          window.addEventListener("scroll", scrollHandler, true);
          window.addEventListener("resize", scrollHandler);
        }, 0);
      }

      function renderMembersTable() {
        closeMemberRowActionsMenu();
        membersLabel.textContent = `${str["teams.members"]} (${editMembers.length})`;
        membersTableWrap.innerHTML = "";
        const table = document.createElement("table");
        table.className = "w-full text-sm";
        const thead = document.createElement("thead");
        thead.className = "bg-white/5 text-gray-300";
        const completedLabel = safeLang === "en" ? "Courses" : "Kurse";
        const certLabel = safeLang === "en" ? "Certs" : "Zert.";
        const adding = membersMode === "add";
        const totalMemberCols = isEdit ? 5 : 6;

        const teamCourseSet = new Set(editCourses);
        const memberRows = editMembers.map((entry, idx) => {
          const user = entry.user;
          const enrolled = editCourses.length;
          const completed = (user.courseCompletions || []).filter((cc) => teamCourseSet.has(cc.course)).length;
          const pct = enrolled > 0 ? (completed / enrolled) * 100 : 0;
          const certs = (user.certificates || []).filter((c) => teamCourseSet.has(c)).length;
          const roleLabel = ADMIN_ROLE_LABELS[safeLang]?.[normalizeAdminRole(entry.role)] || entry.role;
          return { entry, user, idx, enrolled, completed, pct, certs, roleLabel, role: normalizeAdminRole(entry.role) };
        });

        const allRoleLabels = [...new Set(memberRows.map((r) => r.roleLabel))];
        const rolePillStyles = {};
        allRoleLabels.forEach((lbl) => {
          const role = Object.entries(ADMIN_ROLE_LABELS[safeLang] || {}).find(([, v]) => v === lbl)?.[0];
          if (role && ROLE_PILL_STYLES[role]) rolePillStyles[lbl] = ROLE_PILL_STYLES[role];
        });
        const roleCounts = buildCountMap(memberRows, (r) => r.roleLabel);

        const membersGetters = {
          user: (r) => r.user.name,
          role: (r) => r.roleLabel,
          courses: (r) => r.pct,
          certs: (r) => r.certs,
        };
        let filtered = applyColumnFilters(memberRows, membersColFilters, membersGetters);
        filtered = applySort(filtered, membersSortState, membersGetters);

        const headerRow = createFilterableHeader([
          { key: "user", label: str["table.user"] || "Nutzer", filterable: true },
          { key: "role", label: str["users.role"] || "Rolle", filterable: true, options: allRoleLabels, pillStyles: rolePillStyles, counts: roleCounts },
          { key: "courses", label: completedLabel, filterable: true },
          { key: "certs", label: certLabel, filterable: true },
        ], membersColFilters, () => renderMembersTable(), membersSortState, () => renderMembersTable());

        const selectAllTh = document.createElement("th");
        selectAllTh.setAttribute("scope", "col");
        selectAllTh.className = "px-3 py-2 w-10";
        const visibleIdxs = filtered.map((r) => r.idx);
        const allSelected = visibleIdxs.length > 0 && visibleIdxs.every((i) => selectedMembersForDelete.has(i));
        const someSelected = visibleIdxs.some((i) => selectedMembersForDelete.has(i)) && !allSelected;
        const selectAllCb = buildQuizStyleCheckbox({
          checked: allSelected,
          indeterminate: someSelected,
          ariaLabel: safeLang === "en" ? "Select all" : "Alle auswählen",
          onChange: () => {
            if (allSelected) {
              visibleIdxs.forEach((i) => selectedMembersForDelete.delete(i));
            } else {
              visibleIdxs.forEach((i) => selectedMembersForDelete.add(i));
            }
            renderMembersTable();
          },
        });
        selectAllTh.appendChild(selectAllCb);
        headerRow.insertBefore(selectAllTh, headerRow.firstChild);
        if (!isEdit) {
          const actionsTh = document.createElement("th");
          actionsTh.setAttribute("scope", "col");
          actionsTh.className = "px-3 py-2 w-10";
          headerRow.appendChild(actionsTh);
        }
        thead.appendChild(headerRow);

        const tbody = document.createElement("tbody");
        tbody.className = "divide-y divide-white/10";

        if (adding) {
          const addRow = document.createElement("tr");
          addRow.className = "bg-white/[0.03]";
          const addCell = document.createElement("td");
          addCell.className = "px-3 py-2";
          addCell.colSpan = totalMemberCols;
          const addContainer = document.createElement("div");
          addContainer.className = "flex items-center gap-2";
          const memberSel = createSearchableSelect({
            items: allUsers.map((u) => ({ value: u.id, label: `${u.name} (${u.email})` })),
            placeholder: safeLang === "en" ? "Add member\u2026" : "Mitglied hinzuf\u00FCgen\u2026",
            getExcluded: () => editMembers.map((m) => m.user.id),
          });
          memberSel.classList.add("flex-1");
          const newMemberRoleSel = createModalSelect(getRoleOptions(safeLang), "user");
          newMemberRoleSel.className = newMemberRoleSel.className.replace("w-full", "");
          newMemberRoleSel.style.width = "8rem";
          newMemberRoleSel.classList.add("flex-shrink-0");
          newMemberRoleSel.setAttribute("aria-label", safeLang === "en" ? "Role for new member" : "Rolle für neues Mitglied");
          const confirmMemberBtn = document.createElement("button");
          confirmMemberBtn.type = "button";
          confirmMemberBtn.className = "flex-shrink-0 w-8 h-8 rounded-lg border border-green-500/30 bg-green-500/10 flex items-center justify-center text-green-400 hover:bg-green-500/25";
          confirmMemberBtn.setAttribute("aria-label", safeLang === "en" ? "Confirm add" : "Hinzufügen bestätigen");
          confirmMemberBtn.innerHTML = '<svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor" shape-rendering="crispEdges"><rect x="3" y="7" width="2" height="2"/><rect x="5" y="9" width="2" height="2"/><rect x="7" y="7" width="2" height="2"/><rect x="9" y="5" width="2" height="2"/><rect x="11" y="3" width="2" height="2"/></svg>';
          confirmMemberBtn.addEventListener("click", () => {
            const userId = memberSel.value;
            if (!userId) return;
            const u = allUsers.find((x) => x.id === userId);
            if (!u) return;
            const pickedRole = newMemberRoleSel.value || "user";
            editMembers.unshift({ user: u, role: pickedRole });
            persistMembersIfNeeded();
            if (!isEdit) showToast(safeLang === "en" ? "Member added" : "Mitglied hinzugefügt", "success");
            membersMode = "view";
            renderMembersTable();
          });
          const cancelAddMemberBtn = document.createElement("button");
          cancelAddMemberBtn.type = "button";
          cancelAddMemberBtn.className = "flex-shrink-0 w-8 h-8 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-gray-400 hover:bg-white/10";
          cancelAddMemberBtn.setAttribute("aria-label", safeLang === "en" ? "Cancel add" : "Hinzufügen abbrechen");
          cancelAddMemberBtn.innerHTML = '<svg width="10" height="10" viewBox="0 0 16 16" fill="currentColor" shape-rendering="crispEdges"><rect x="3" y="3" width="2" height="2"/><rect x="11" y="3" width="2" height="2"/><rect x="5" y="5" width="2" height="2"/><rect x="9" y="5" width="2" height="2"/><rect x="7" y="7" width="2" height="2"/><rect x="5" y="9" width="2" height="2"/><rect x="9" y="9" width="2" height="2"/><rect x="3" y="11" width="2" height="2"/><rect x="11" y="11" width="2" height="2"/></svg>';
          cancelAddMemberBtn.addEventListener("click", () => {
            membersMode = "view";
            renderMembersTable();
          });
          addContainer.appendChild(memberSel);
          addContainer.appendChild(newMemberRoleSel);
          addContainer.appendChild(confirmMemberBtn);
          addContainer.appendChild(cancelAddMemberBtn);
          addCell.appendChild(addContainer);
          addRow.appendChild(addCell);
          tbody.appendChild(addRow);
        }

        if (filtered.length === 0 && !adding) {
          const emptyRow = document.createElement("tr");
          const emptyCell = document.createElement("td");
          emptyCell.colSpan = totalMemberCols;
          emptyCell.className = "px-3 py-3 text-sm text-gray-500 italic text-center";
          emptyCell.textContent = editMembers.length > 0
            ? (safeLang === "en" ? "No members match filters" : "Keine Mitglieder entsprechen den Filtern")
            : (safeLang === "en" ? "No members" : "Keine Mitglieder");
          emptyRow.appendChild(emptyCell);
          tbody.appendChild(emptyRow);
        } else {
          filtered.forEach((r) => {
            const user = r.user;
            const row = document.createElement("tr");
            row.className = "hover:bg-white/5 transition-colors cursor-pointer";
            row.addEventListener("click", (ev) => {
              if (ev.target.closest("label, input, select, [data-row-action]")) return;
              showUserCourseDetailPopup(user, teamName, stats, lang);
            });

            const cbCell = document.createElement("td");
            cbCell.className = "px-3 py-2 text-center";
            const cb = buildQuizStyleCheckbox({
              checked: selectedMembersForDelete.has(r.idx),
              ariaLabel: safeLang === "en" ? `Select ${user.name}` : `${user.name} auswählen`,
              onChange: (nowChecked) => {
                if (nowChecked) selectedMembersForDelete.add(r.idx);
                else selectedMembersForDelete.delete(r.idx);
                renderMembersTable();
              },
            });
            cbCell.appendChild(cb);
            row.appendChild(cbCell);

            const userCell = document.createElement("td");
            userCell.className = "px-3 py-2";
            userCell.appendChild(buildUserCellContent(user.name, user.email));

            const roleCell = document.createElement("td");
            roleCell.className = "px-3 py-2";
            if (isEdit) {
              const roleSelect = createModalSelect(getRoleOptions(safeLang), r.entry.role);
              roleSelect.className = roleSelect.className.replace("w-full", "");
              roleSelect.style.width = "7rem";
              roleSelect.addEventListener("change", () => { editMembers[r.idx].role = roleSelect.value; });
              roleSelect.addEventListener("click", (ev) => ev.stopPropagation());
              roleCell.appendChild(roleSelect);
            } else {
              roleCell.appendChild(buildRoleBadge(r.role, lang));
            }

            const courseCell = document.createElement("td");
            courseCell.className = "px-3 py-2";
            const courseWrap = document.createElement("div");
            courseWrap.className = "flex items-center gap-1.5";
            const courseText = document.createElement("span");
            courseText.className = "text-xs text-gray-300";
            courseText.textContent = `${r.completed}/${r.enrolled}`;
            courseWrap.appendChild(courseText);
            const memberBar = buildProgressBarCell(r.pct, {
              barWidthClass: "w-12",
              showPct: false,
              thresholds: { good: 80, ok: 40 },
            });
            courseWrap.appendChild(memberBar.firstChild);
            courseCell.appendChild(courseWrap);

            const certCell = document.createElement("td");
            certCell.className = "px-3 py-2 text-xs text-gray-300";
            certCell.textContent = String(r.certs);

            row.appendChild(userCell);
            row.appendChild(roleCell);
            row.appendChild(courseCell);
            row.appendChild(certCell);

            if (!isEdit) {
              const actionsCell = document.createElement("td");
              actionsCell.className = "px-3 py-2 w-10 text-right";
              actionsCell.setAttribute("data-row-action", "true");
              const actionsBtn = document.createElement("button");
              actionsBtn.type = "button";
              actionsBtn.className = "w-8 h-8 rounded-lg flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-white ml-auto";
              actionsBtn.setAttribute("aria-haspopup", "true");
              actionsBtn.setAttribute("aria-expanded", "false");
              actionsBtn.setAttribute("aria-label", safeLang === "en" ? `Actions for ${user.name}` : `Aktionen für ${user.name}`);
              actionsBtn.innerHTML = '<svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" shape-rendering="crispEdges" aria-hidden="true"><rect x="3" y="7" width="2" height="2"/><rect x="7" y="7" width="2" height="2"/><rect x="11" y="7" width="2" height="2"/></svg>';
              actionsBtn.addEventListener("click", (ev) => {
                ev.stopPropagation();
                openMemberRowActionsMenu(actionsBtn, r, safeLang);
              });
              actionsCell.appendChild(actionsBtn);
              row.appendChild(actionsCell);
            }

            tbody.appendChild(row);
          });
        }

        table.appendChild(thead);
        table.appendChild(tbody);
        membersTableWrap.appendChild(table);

        updateDeleteMembersBtnState();
      }

      addMemberBtn.addEventListener("click", () => {
        membersMode = "add";
        renderMembersTable();
      });
      deleteMembersBtn.addEventListener("click", () => {
        if (selectedMembersForDelete.size === 0) return;
        const count = selectedMembersForDelete.size;
        const targetNames = [...selectedMembersForDelete].sort((a, b) => a - b).map((i) => editMembers[i].user.name);
        const co = createModalOverlay();
        const cc = createModalCard();
        cc.style.maxWidth = "22rem";
        const msg = document.createElement("p");
        msg.className = "text-sm text-white font-semibold";
        msg.textContent = safeLang === "en"
          ? (count === 1 ? "Remove this member from the team?" : `Remove ${count} members from the team?`)
          : (count === 1 ? "Dieses Mitglied aus dem Team entfernen?" : `${count} Mitglieder aus dem Team entfernen?`);
        const det = document.createElement("p");
        det.className = "text-sm text-gray-400 break-words";
        det.textContent = targetNames.join(", ");
        const btns = document.createElement("div");
        btns.className = "flex gap-3 pt-2";
        const keepBtn = document.createElement("button");
        keepBtn.type = "button";
        keepBtn.className = `flex-1 ${BUTTON_SECONDARY_BASE}`;
        keepBtn.textContent = safeLang === "en" ? "Cancel" : "Abbrechen";
        const confirmBtn = document.createElement("button");
        confirmBtn.type = "button";
        confirmBtn.className = `flex-1 ${BUTTON_DANGER_STRONG_BASE}`;
        confirmBtn.textContent = safeLang === "en" ? "Remove" : "Entfernen";
        btns.appendChild(keepBtn);
        btns.appendChild(confirmBtn);
        cc.appendChild(msg);
        cc.appendChild(det);
        cc.appendChild(btns);
        co.appendChild(cc);
        document.body.appendChild(co);
        keepBtn.addEventListener("click", () => co.remove());
        co.addEventListener("click", (ev) => { if (ev.target === co) co.remove(); });
        confirmBtn.addEventListener("click", () => {
          co.remove();
          const idxList = [...selectedMembersForDelete].sort((a, b) => b - a);
          idxList.forEach((i) => editMembers.splice(i, 1));
          selectedMembersForDelete.clear();
          persistMembersIfNeeded();
          if (!isEdit) {
            const toastMsg = safeLang === "en"
              ? (count === 1 ? "1 member removed" : `${count} members removed`)
              : (count === 1 ? "1 Mitglied entfernt" : `${count} Mitglieder entfernt`);
            showToast(toastMsg, "success");
          }
          membersMode = "view";
          renderMembersTable();
        });
      });

      renderMembersTable();

      // --- Actions ---
      const actions = document.createElement("div");
      actions.className = "flex gap-3 pt-2";

      body.appendChild(coursesSection);
      body.appendChild(membersSection);
      if (isEdit) body.appendChild(actions);
      card.appendChild(headerEl);
      card.appendChild(body);

      const teamsLabel = "Teams";

      if (isEdit) {
        actions.className = "space-y-3 pt-2";

        const saveBtn = document.createElement("button");
        saveBtn.type = "button";
        saveBtn.className = `w-full ${BUTTON_PRIMARY_LARGE_BASE}`;
        saveBtn.textContent = safeLang === "en" ? "Save" : "Speichern";

        const secondaryRow = document.createElement("div");
        secondaryRow.className = "flex gap-3";
        const cancelBtn = document.createElement("button");
        cancelBtn.type = "button";
        cancelBtn.className = `flex-1 ${BUTTON_SECONDARY_BASE}`;
        cancelBtn.textContent = safeLang === "en" ? "Cancel" : "Abbrechen";
        const deleteTeamBtn = document.createElement("button");
        deleteTeamBtn.type = "button";
        deleteTeamBtn.className = `flex-1 ${BUTTON_DANGER_BASE}`;
        deleteTeamBtn.textContent = safeLang === "en" ? "Delete team" : "Team löschen";
        secondaryRow.appendChild(cancelBtn);
        secondaryRow.appendChild(deleteTeamBtn);

        actions.appendChild(saveBtn);
        actions.appendChild(secondaryRow);

        deleteTeamBtn.addEventListener("click", () => {
          const co = createModalOverlay();
          const cc = createModalCard();
          cc.style.maxWidth = "20rem";
          const msg = document.createElement("p");
          msg.className = "text-sm text-white font-semibold";
          msg.textContent = safeLang === "en" ? "Delete this team?" : "Team wirklich l\u00F6schen?";
          const det = document.createElement("p");
          det.className = "text-sm text-gray-400";
          det.textContent = safeLang === "en"
            ? `${teamName} will be permanently removed.`
            : `${teamName} wird dauerhaft entfernt.`;
          const btns = document.createElement("div");
          btns.className = "flex gap-3 pt-2";
          const kb = document.createElement("button");
          kb.type = "button";
          kb.className = `flex-1 ${BUTTON_SECONDARY_BASE}`;
          kb.textContent = safeLang === "en" ? "Cancel" : "Abbrechen";
          const cdb = document.createElement("button");
          cdb.type = "button";
          cdb.className = `flex-1 ${BUTTON_DANGER_STRONG_BASE}`;
          cdb.textContent = safeLang === "en" ? "Delete" : "L\u00F6schen";
          btns.appendChild(kb);
          btns.appendChild(cdb);
          cc.appendChild(msg);
          cc.appendChild(det);
          cc.appendChild(btns);
          co.appendChild(cc);
          document.body.appendChild(co);
          kb.addEventListener("click", () => co.remove());
          co.addEventListener("click", (e) => { if (e.target === co) co.remove(); });
          cdb.addEventListener("click", () => {
            co.remove();
            showToast(safeLang === "en" ? "Team deleted" : "Team gel\u00F6scht", "success");
            hideDetailView();
            renderTeamsPage();
          });
        });

        cancelBtn.addEventListener("click", () => {
          if (!hasChanges()) { hideDetailView(); return; }
          const co = createModalOverlay();
          const cc = createModalCard();
          cc.style.maxWidth = "20rem";
          const msg = document.createElement("p");
          msg.className = "text-sm text-gray-300";
          msg.textContent = safeLang === "en" ? "Discard unsaved changes?" : "Ungespeicherte \u00C4nderungen verwerfen?";
          const btns = document.createElement("div");
          btns.className = "flex gap-3 pt-2";
          const sb = document.createElement("button");
          sb.type = "button";
          sb.className = `flex-1 ${BUTTON_SECONDARY_BASE}`;
          sb.textContent = safeLang === "en" ? "Keep editing" : "Weiter bearbeiten";
          const db = document.createElement("button");
          db.type = "button";
          db.className = `flex-1 ${BUTTON_DANGER_STRONG_BASE}`;
          db.textContent = safeLang === "en" ? "Discard" : "Verwerfen";
          btns.appendChild(sb);
          btns.appendChild(db);
          cc.appendChild(msg);
          cc.appendChild(btns);
          co.appendChild(cc);
          document.body.appendChild(co);
          sb.addEventListener("click", () => co.remove());
          db.addEventListener("click", () => { co.remove(); hideDetailView(); });
          co.addEventListener("click", (e) => { if (e.target === co) co.remove(); });
        });
        saveBtn.addEventListener("click", () => {
          showToast(safeLang === "en" ? "Team updated" : "Team aktualisiert", "success");
          hideDetailView();
          renderTeamsPage();
        });

        const editLabel = safeLang === "en" ? "Edit" : "Bearbeiten";
        showDetailView(card, [
          { label: teamsLabel, onClick: () => hideDetailView() },
          { label: teamName, onClick: () => showTeamDetailModal(teamName, stats, lang, false) },
          { label: editLabel },
        ]);
      } else {
        showDetailView(card, [
          { label: teamsLabel, onClick: () => hideDetailView() },
          { label: teamName },
        ]);
      }
    }

    const ROLE_PILL_STYLES = Object.freeze({
      admin:       { bg: "rgba(236,72,153,0.2)",  border: "rgba(236,72,153,0.4)",  text: "#f9a8d4" },
      team_owner: { bg: "rgba(168,85,247,0.2)",  border: "rgba(168,85,247,0.4)",  text: "#d8b4fe" },
      team_moderator:   { bg: "rgba(59,130,246,0.2)",  border: "rgba(59,130,246,0.4)",  text: "#93c5fd" },
      user:        { bg: "rgba(255,255,255,0.08)", border: "rgba(255,255,255,0.15)", text: "#d1d5db" },
    });

    const PILL_STYLE_GREEN  = { bg: "rgba(34,197,94,0.2)",  border: "rgba(34,197,94,0.4)",  text: "#86efac" };
    const PILL_STYLE_BLUE   = { bg: "rgba(59,130,246,0.2)", border: "rgba(59,130,246,0.4)", text: "#93c5fd" };
    const PILL_STYLE_AMBER  = { bg: "rgba(245,158,11,0.2)", border: "rgba(245,158,11,0.4)", text: "#fde68a" };
    const PILL_STYLE_RED    = { bg: "rgba(239,68,68,0.2)",  border: "rgba(239,68,68,0.4)",  text: "#fca5a5" };
    const PILL_STYLE_GRAY   = { bg: "rgba(107,114,128,0.2)", border: "rgba(107,114,128,0.4)", text: "#d1d5db" };
    const PILL_STYLE_TAG    = { bg: "rgba(168,85,247,0.12)", border: "rgba(168,85,247,0.3)",  text: "#d8b4fe" };

    const USER_STATUS_PILL_STYLES = Object.freeze({
      invited:  PILL_STYLE_BLUE,
      active:   PILL_STYLE_GREEN,
      inactive: PILL_STYLE_RED,
    });
    const TEAM_STATUS_PILL_STYLES = Object.freeze({
      active:   PILL_STYLE_GREEN,
      inactive: PILL_STYLE_RED,
    });
    const COURSE_STATUS_PILL_STYLES = Object.freeze({
      active:   PILL_STYLE_GREEN,
      draft:    PILL_STYLE_AMBER,
      archived: PILL_STYLE_GRAY,
    });
    const ENROLLMENT_STATUS_PILL_STYLES = Object.freeze({
      completed:   PILL_STYLE_GREEN,
      in_progress: PILL_STYLE_BLUE,
      paused:      PILL_STYLE_AMBER,
      overdue:     PILL_STYLE_RED,
    });

    const BUTTON_PRIMARY_BASE       = "rounded-lg border border-primary-400/40 bg-primary-500/20 px-3 py-2 text-sm font-semibold text-primary-200 hover:bg-primary-500/30";
    const BUTTON_PRIMARY_LARGE_BASE = "rounded-lg border border-primary-400/40 bg-primary-500/20 px-3 py-3 text-base font-semibold text-primary-200 hover:bg-primary-500/30";
    const BUTTON_SECONDARY_BASE     = "rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm font-semibold text-gray-300 hover:bg-white/10";
    const BUTTON_DANGER_BASE        = "rounded-lg border border-red-500/40 bg-red-500/10 px-3 py-2 text-sm font-semibold text-red-300 hover:bg-red-500/20";
    const BUTTON_DANGER_STRONG_BASE = "rounded-lg border border-red-500/40 bg-red-500/20 px-3 py-2 text-sm font-semibold text-red-300 hover:bg-red-500/30";

    function buildStatusBadge(label, pillStyle, options = {}) {
      const sizeClass = options.size === "micro" ? "text-label-caption" : "text-xs";
      const weightClass = options.weight === "bold" ? "font-bold" : "font-semibold";
      const badge = document.createElement("span");
      badge.className = `inline-flex px-2 py-0.5 rounded-full ${sizeClass} ${weightClass} border whitespace-nowrap`;
      badge.style.backgroundColor = pillStyle.bg;
      badge.style.borderColor = pillStyle.border;
      badge.style.color = pillStyle.text;
      badge.textContent = label;
      return badge;
    }

    function renderTagPillsWithOverflow(container, tags) {
      const safeTags = Array.isArray(tags) ? tags.filter(Boolean) : [];
      const compute = () => {
        container.innerHTML = "";
        if (!safeTags.length) return;
        const available = container.clientWidth;
        if (!available) return;
        const gap = 4;
        const pills = safeTags.map((t) => buildStatusBadge(String(t), PILL_STYLE_TAG, { size: "micro" }));
        pills.forEach((p) => container.appendChild(p));
        const widths = pills.map((p) => p.offsetWidth);
        let used = 0;
        let fitCount = 0;
        for (let i = 0; i < pills.length; i++) {
          const add = widths[i] + (i > 0 ? gap : 0);
          if (used + add > available) break;
          used += add;
          fitCount++;
        }
        if (fitCount === pills.length) return;
        const probe = buildStatusBadge(`+${safeTags.length - fitCount}`, PILL_STYLE_TAG, { size: "micro" });
        container.appendChild(probe);
        const overflowWidth = probe.offsetWidth;
        container.removeChild(probe);
        const reserved = available - overflowWidth - gap;
        used = 0;
        fitCount = 0;
        for (let i = 0; i < pills.length; i++) {
          const add = widths[i] + (i > 0 ? gap : 0);
          if (used + add > reserved) break;
          used += add;
          fitCount++;
        }
        // Always show at least one tag pill alongside the "+X" overflow pill
        if (fitCount === 0 && pills.length > 1) fitCount = 1;
        container.innerHTML = "";
        for (let i = 0; i < fitCount; i++) {
          container.appendChild(buildStatusBadge(safeTags[i], PILL_STYLE_TAG, { size: "micro" }));
        }
        const remaining = safeTags.length - fitCount;
        if (remaining > 0) {
          container.appendChild(buildStatusBadge(`+${remaining}`, PILL_STYLE_TAG, { size: "micro" }));
        }
      };
      requestAnimationFrame(compute);
      if (typeof ResizeObserver !== "undefined") {
        const ro = new ResizeObserver(() => requestAnimationFrame(compute));
        ro.observe(container);
      }
    }

    function progressColorFor(pct, thresholds) {
      const t = thresholds || { good: 70, ok: 40 };
      return pct >= t.good ? "#22c55e" : pct >= t.ok ? "#f59e0b" : "#ef4444";
    }

    function buildProgressBarCell(pct, options = {}) {
      const color = options.color || progressColorFor(pct, options.thresholds);
      const barWidthClass = options.barWidthClass || "w-20";
      const barHeightClass = options.barHeightClass || "h-1.5";
      const showPct = options.showPct !== false;
      const wrap = document.createElement("div");
      wrap.className = "flex items-center gap-2";
      const barBg = document.createElement("div");
      barBg.className = `${barWidthClass} ${barHeightClass} rounded-full bg-white/10 overflow-hidden flex-shrink-0`;
      const barFill = document.createElement("div");
      barFill.className = "h-full rounded-full";
      barFill.style.width = `${pct}%`;
      barFill.style.backgroundColor = color;
      barBg.appendChild(barFill);
      wrap.appendChild(barBg);
      if (showPct) {
        const pctEl = document.createElement("span");
        pctEl.className = options.pctWidthClass ? `text-xs font-bold ${options.pctWidthClass}` : "text-xs font-bold w-10";
        pctEl.style.color = color;
        pctEl.textContent = options.pctLabel != null ? options.pctLabel : `${pct}%`;
        wrap.appendChild(pctEl);
      }
      return wrap;
    }

    function buildKpiCard({ label, value, sub, subColor, accent }) {
      const card = document.createElement("article");
      card.className = accent
        ? "auth-mockup-panel rounded-2xl space-component-panel border-accent-400/30 bg-gradient-to-br from-accent-500/15 to-transparent"
        : "auth-mockup-panel rounded-2xl space-component-panel";
      const lbl = document.createElement("p");
      lbl.className = accent
        ? "text-xs uppercase tracking-wide text-accent-300 font-bold"
        : "text-xs uppercase tracking-wide text-gray-400";
      lbl.textContent = label;
      const val = document.createElement("p");
      val.className = "mt-2 text-3xl font-bold text-white";
      val.textContent = value;
      card.appendChild(lbl);
      card.appendChild(val);
      if (sub) {
        const subEl = document.createElement("p");
        subEl.className = `mt-1 text-xs ${subColor || "text-gray-400"}`;
        subEl.textContent = sub;
        card.appendChild(subEl);
      }
      return card;
    }

    function buildCountMap(rows, getValue) {
      const m = {};
      rows.forEach((r) => {
        const k = getValue(r);
        if (k == null || k === "") return;
        m[k] = (m[k] || 0) + 1;
      });
      return m;
    }

    function renderPermissionsMatrix() {
      const lang = resolveCurrentLang();
      const safeLang = lang === "en" ? "en" : "de";
      const matrix = ADMIN_PERMISSIONS_MATRIX;

      // Translate static elements
      if (adminMatrixLegend) {
        adminMatrixLegend.innerHTML = safeLang === "en"
          ? '<span class="text-green-400">✓</span> allowed · <span class="text-amber-400">◆</span> restricted · <span class="text-gray-500">—</span> no access'
          : '<span class="text-green-400">✓</span> erlaubt · <span class="text-amber-400">◆</span> eingeschr\u00E4nkt · <span class="text-gray-500">—</span> kein Zugriff';
      }
      if (adminMatrixPermHead) {
        adminMatrixPermHead.textContent = safeLang === "en" ? "Permission" : "Berechtigung";
      }
      if (adminAssignRoleBtn) {
        adminAssignRoleBtn.textContent = safeLang === "en" ? "Assign role" : "Rolle zuweisen";
      }

      // Role header pills
      adminMatrixRoleHeads.forEach((th, i) => {
        const role = matrix.roles[i];
        if (!role) { th.textContent = ""; return; }
        const label = matrix.roleLabels[safeLang]?.[role] || role;
        th.innerHTML = "";
        const pill = document.createElement("span");
        pill.className = "inline-flex px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide whitespace-nowrap";
        const style = ROLE_PILL_STYLES[role] || ROLE_PILL_STYLES.user;
        pill.style.backgroundColor = style.bg;
        pill.style.border = `1px solid ${style.border}`;
        pill.style.color = style.text;
        pill.textContent = label;
        th.appendChild(pill);
      });

      // Permission rows
      if (adminMatrixBody) {
        adminMatrixBody.innerHTML = "";
        matrix.permissions.forEach((perm) => {
          const row = document.createElement("tr");
          row.className = "hover:bg-white/5 transition-colors";
          const labelCell = document.createElement("td");
          labelCell.className = "px-4 py-3 text-sm text-gray-300";
          labelCell.textContent = perm.label[safeLang] || perm.label.de;
          row.appendChild(labelCell);

          matrix.roles.forEach((role) => {
            const cell = document.createElement("td");
            cell.className = "px-4 py-3 text-center";
            const level = perm.access[role] || "no";
            if (level === "yes") {
              cell.innerHTML = '<span class="text-green-400 text-base">✓</span>';
            } else if (level === "limited") {
              cell.innerHTML = '<span class="text-amber-400 text-sm">◆</span>';
            } else {
              cell.innerHTML = '<span class="text-gray-600">—</span>';
            }
            row.appendChild(cell);
          });
          adminMatrixBody.appendChild(row);
        });
      }
    }

    function renderAdminDashboard(preferredUserId) {
      if (adminOverviewUsersLazyCleanup) {
        adminOverviewUsersLazyCleanup();
        adminOverviewUsersLazyCleanup = null;
      }
      const lang = resolveCurrentLang();
      const data = authApi.getAdminDashboardData();
      renderAdminRoleOptions(adminCreateRole, "user");
      renderDashboardGreeting(lang);
      renderDashboardKpiTrends(lang);
      renderDashboardRequests(lang);
      renderDashboardActivity(lang);
      renderDashboardAssignments(lang);
      renderReportsPage();
      if (!data) {
        setStatus(adminStatus, tProfile("admin.status.dataLoadError", lang), "error");
        renderAdminSelectionContext(null);
        if (adminHelper) adminHelper.classList.remove("hidden");
        renderAdminCourseList(adminEnrolledList, [], "", true);
        renderAdminCourseList(adminNotEnrolledList, [], "", false);
        renderAdminNotifications();
        renderRoleCapabilities("user");
        renderAdminRoleOptions(adminRoleSelect, "user");
        if (adminTableBody) adminTableBody.innerHTML = "";
        selectedAdminUserId = "";
        syncAdminPermissionState();
        return;
      }

      const activeUsers = data.users.filter((user) => user.active).length;
      const totalQuizzes = data.users.reduce((sum, user) => sum + user.completedQuizzes, 0);
      const certificates = data.users.reduce((sum, user) => sum + user.certificates.length, 0);
      if (adminActiveUsers) adminActiveUsers.textContent = String(activeUsers);
      if (adminFinishedQuizzes) adminFinishedQuizzes.textContent = String(totalQuizzes);
      if (adminCertificates) adminCertificates.textContent = String(certificates);
      if (adminMemberCount) {
        const countLabel = lang === "en" ? `${data.users.length} members` : `${data.users.length} Mitglieder`;
        adminMemberCount.textContent = countLabel;
      }
      setStatus(adminStatus, "", "");

      if (!data.users.length || !adminTableBody) {
        selectedAdminUserId = "";
        renderAdminSelectionContext(null);
        if (adminHelper) adminHelper.classList.remove("hidden");
        renderAdminCourseList(adminEnrolledList, [], "", true);
        renderAdminCourseList(adminNotEnrolledList, [], "", false);
        renderAdminNotifications();
        renderRoleCapabilities("user");
        renderAdminRoleOptions(adminRoleSelect, "user");
        if (adminTableBody) adminTableBody.innerHTML =
          `<tr class="border-t border-white/10"><td colspan="3" class="px-4 py-6 text-sm text-gray-400">${tProfile("admin.status.noData", lang)}</td></tr>`;
        syncAdminPermissionState();
        return;
      }

      function showUserDetails(user, selectedButton) {
        selectedAdminUserId = user.id;
        renderAdminSelectionContext(user);
        if (adminHelper) {
          adminHelper.classList.add("hidden");
        }
        adminTableBody.querySelectorAll("[data-admin-user-row]").forEach((button) => {
          const isSelected = button === selectedButton;
          button.classList.toggle("text-white", isSelected);
          button.classList.toggle("font-semibold", isSelected);
          button.setAttribute("aria-pressed", String(isSelected));
          const row = button.closest("tr");
          if (row) {
            row.classList.toggle("bg-white/5", isSelected);
          }
        });
        const enrolledSet = new Set(getUserEnrolledCourses(user));
        const notEnrolled = data.courses.filter((course) => !enrolledSet.has(course));
        renderAdminCourseList(adminEnrolledList, [...enrolledSet], user.id, true);
        renderAdminCourseList(adminNotEnrolledList, notEnrolled, user.id, false);
        renderAdminRoleOptions(adminRoleSelect, normalizeAdminRole(user.role));
        renderRoleCapabilities(user.role);
        syncAdminPermissionState();
      }

      if (!adminTableBody) { renderAdminNotifications(); syncAdminPermissionState(); return; }
      const userLookup = new Map(data.users.map((user) => [user.id, user]));
      const prioritizedIds = [preferredUserId, selectedAdminUserId]
        .filter((id, index, arr) => id && arr.indexOf(id) === index && userLookup.has(id));
      const orderedUsers = [
        ...prioritizedIds.map((id) => userLookup.get(id)),
        ...data.users.filter((user) => !prioritizedIds.includes(user.id)),
      ];
      if (selectedAdminUserId && !userLookup.has(selectedAdminUserId)) selectedAdminUserId = "";
      const lazyControls = createLazyTableControls(adminTableBody, { colSpan: 3, lang });
      adminOverviewUsersLazyCleanup = createLazyBatchRenderer({
        totalCount: orderedUsers.length,
        initialCount: ADMIN_USERS_INITIAL_COUNT,
        batchSize: ADMIN_USERS_BATCH_SIZE,
        sentinel: lazyControls.sentinel,
        fallbackButton: lazyControls.fallbackButton,
        fallbackContainer: lazyControls.fallbackRow,
        showFallbackWithObserver: true,
        onStatus({ visibleCount, totalCount, hasMore }) {
          lazyControls.statusText.textContent = hasMore
            ? (lang === "en"
                ? `Showing ${visibleCount} of ${totalCount} users`
                : `${visibleCount} von ${totalCount} Nutzern angezeigt`)
            : (lang === "en"
                ? `All ${totalCount} users loaded`
                : `Alle ${totalCount} Nutzer geladen`);
        },
        render(visibleCount) {
          adminTableBody.innerHTML = "";
          const renderedSelectable = [];
          orderedUsers.slice(0, visibleCount).forEach((user) => {
            const row = document.createElement("tr");
            row.className = "border-t border-white/10 hover:bg-white/5 transition-colors";

            const primaryCell = document.createElement("td");
            primaryCell.className = "px-4 py-3";
            const primaryWrap = document.createElement("div");
            primaryWrap.className = "flex items-center gap-3";
            const avatar = document.createElement("span");
            avatar.className = "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-label-caption font-bold text-white";
            avatar.style.backgroundColor = getInitialsColor(user.name);
            avatar.textContent = getUserInitials(user.name);
            const nameBlock = document.createElement("div");
            const userButton = document.createElement("button");
            userButton.type = "button";
            userButton.dataset.adminUserRow = user.id;
            userButton.setAttribute("aria-pressed", "false");
            userButton.className =
              "text-left text-primary-300 hover:text-primary-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400 rounded-sm";
            userButton.textContent = user.name;
            const userEmail = document.createElement("div");
            userEmail.className = "text-xs text-gray-400";
            userEmail.textContent = user.email;
            nameBlock.appendChild(userButton);
            nameBlock.appendChild(userEmail);
            primaryWrap.appendChild(avatar);
            primaryWrap.appendChild(nameBlock);
            primaryCell.appendChild(primaryWrap);

            const statusCell = document.createElement("td");
            statusCell.className = "px-4 py-3";
            const userActiveLabel = user.active
              ? (lang === "en" ? "Active" : "Aktiv")
              : (lang === "en" ? "Inactive" : "Inaktiv");
            statusCell.appendChild(buildStatusBadge(
              userActiveLabel,
              user.active ? PILL_STYLE_GREEN : PILL_STYLE_RED
            ));

            const certCell = document.createElement("td");
            certCell.className = "px-4 py-3 text-gray-300";
            certCell.textContent = String(user.certificates.length);

            row.appendChild(primaryCell);
            row.appendChild(statusCell);
            row.appendChild(certCell);
            adminTableBody.appendChild(row);

            renderedSelectable.push({ user, button: userButton });
            userButton.addEventListener("click", () => showUserDetails(user, userButton));
            row.addEventListener("click", (event) => {
              if (event.target.closest("[data-admin-user-row]")) return;
              showUserDetails(user, userButton);
            });
          });
          lazyControls.append();

          const preferredSelectable = preferredUserId
            ? renderedSelectable.find((entry) => entry.user.id === preferredUserId)
            : null;
          const selectedSelectable = !preferredSelectable && selectedAdminUserId
            ? renderedSelectable.find((entry) => entry.user.id === selectedAdminUserId)
            : null;
          const fallbackSelectable = !preferredSelectable && !selectedSelectable && !selectedAdminUserId
            ? renderedSelectable[0]
            : null;
          const nextSelected = preferredSelectable || selectedSelectable || fallbackSelectable || null;
          if (nextSelected) {
            showUserDetails(nextSelected.user, nextSelected.button);
          } else if (selectedAdminUserId) {
            selectedAdminUserId = "";
            renderAdminSelectionContext(null);
            if (adminHelper) adminHelper.classList.remove("hidden");
            renderAdminCourseList(adminEnrolledList, [], "", true);
            renderAdminCourseList(adminNotEnrolledList, [], "", false);
            renderRoleCapabilities("user");
            renderAdminRoleOptions(adminRoleSelect, "user");
            syncAdminPermissionState();
          }
        },
      });

      renderAdminNotifications();
      syncAdminPermissionState();
    }
    if (loginForm) {
      loginForm.addEventListener("submit", (event) => {
        event.preventDefault();
        setPendingState(loginForm, [loginSubmitButton, ...resetButtons], true);
        try {
          const result = authApi.login({
            email: loginEmail?.value,
            password: loginPassword?.value,
          });

          if (!result.ok) {
            setStatus(loginStatus, statusMessageFor("login", result.error), "error");
            return;
          }

          updateAuthUiHint(authApi);
          updateStateBadge();
          fillAccountFields();
          setStatus(loginStatus, "", "");
          const nextScreen = getDashboardRouteForRole(result.role);
          navigateToScreen(nextScreen);
        } finally {
          setPendingState(loginForm, [loginSubmitButton, ...resetButtons], false);
        }
      });
    }

    if (signupForm) {
      signupForm.addEventListener("submit", (event) => {
        event.preventDefault();
        setPendingState(signupForm, [signupSubmitButton], true);
        try {
          const result = authApi.signup({
            name: signupName?.value,
            email: signupEmail?.value,
            password: signupPassword?.value,
            confirmPassword: signupPasswordConfirm?.value,
          });

          if (!result.ok) {
            setStatus(signupStatus, statusMessageFor("signup", result.error), "error");
            return;
          }

          updateAuthUiHint(authApi);
          updateStateBadge();
          fillAccountFields();
          setStatus(signupStatus, "Account erstellt. Profilansicht wird geöffnet.", "success");
          navigateToScreen("profile");
        } finally {
          setPendingState(signupForm, [signupSubmitButton], false);
        }
      });
    }

    if (profileForm) {
      profileForm.addEventListener("submit", (event) => {
        event.preventDefault();
        setPendingState(profileForm, [profileSubmitButton], true);
        try {
          const result = authApi.updateProfile({
            name: profileName?.value,
            email: profileEmail?.value,
            avatarUrl: "",
            avatarPreset: selectedAvatarPreset,
            password: profilePassword?.value,
            confirmPassword: profilePasswordConfirm?.value,
          });

          if (!result.ok) {
            setStatus(profileStatus, statusMessageFor("profile", result.error), "error");
            return;
          }

          fillAccountFields();
          if (profilePassword) profilePassword.value = "";
          if (profilePasswordConfirm) profilePasswordConfirm.value = "";
          setStatus(profileStatus, "Profil gespeichert (Mock-Daten lokal).", "success");
        } finally {
          setPendingState(profileForm, [profileSubmitButton], false);
        }
      });
    }

    resetButtons.forEach((button) => {
      button.addEventListener("click", () => {
        button.disabled = true;
        button.setAttribute("aria-disabled", "true");
        try {
          authApi.resetTestAccount();
          updateAuthUiHint(authApi);
          updateStateBadge();
          fillAccountFields();
          selectedAdminUserId = "";
          renderAdminDashboard();
          renderLoginTestUsers();
          setStatus(loginStatus, "Test-Account zurückgesetzt. Bitte erneut einloggen.", "success");
        } finally {
          button.disabled = false;
          button.setAttribute("aria-disabled", "false");
        }
      });
    });

    if ((currentScreen === "profile" || currentScreen === "settings" || currentScreen === "organisation" || currentScreen === "admin" || currentScreen === "teamleader") && !authApi.isLoggedIn()) {
      navigateToScreen("login");
      return;
    }
    const currentRole = String(authApi.getRole?.() || "");
    if (currentScreen === "organisation" && currentRole !== "owner") {
      navigateToScreen(getDashboardRouteForRole(currentRole));
      return;
    }
    if (currentScreen === "admin" && currentRole !== "admin") {
      navigateToScreen(getDashboardRouteForRole(currentRole));
      return;
    }
    if (currentScreen === "teamleader" && !["team_owner", "team_moderator"].includes(currentRole)) {
      navigateToScreen(getDashboardRouteForRole(currentRole));
      return;
    }
    if ((currentScreen === "organisation" || currentScreen === "admin") && !authApi.hasAdminDashboardAccess()) {
      navigateToScreen("profile");
      return;
    }

    window.addEventListener("snappinquiz:logout-request", () => {
      authApi.logout();
      updateAuthUiHint(authApi);
      updateStateBadge();
      if (currentScreen === "profile" || currentScreen === "settings" || currentScreen === "organisation" || currentScreen === "admin" || currentScreen === "teamleader") {
        navigateToScreen("login");
      }
    });

    window.addEventListener("snappinquiz:auth-changed", () => {
      updateStateBadge();
      syncAdminRoleScopedView();
      applyAdminI18n(resolveCurrentLang());
      if ((currentScreen === "profile" || currentScreen === "settings" || currentScreen === "organisation" || currentScreen === "admin" || currentScreen === "teamleader") && !authApi.isLoggedIn()) {
        navigateToScreen("login");
      }
      const nextRole = String(authApi.getRole?.() || "");
      if (currentScreen === "organisation" && nextRole !== "owner") {
        navigateToScreen(getDashboardRouteForRole(nextRole));
      }
      if (currentScreen === "admin" && nextRole !== "admin") {
        navigateToScreen(getDashboardRouteForRole(nextRole));
      }
      if (currentScreen === "teamleader" && !["team_owner", "team_moderator"].includes(nextRole)) {
        navigateToScreen(getDashboardRouteForRole(nextRole));
      }
    });

    if (typeof MutationObserver !== "undefined" && document?.documentElement) {
      const langObserver = new MutationObserver(() => {
        renderProfileDashboard(authApi.getAccount());
        renderLoginTestUsers();
      });
      langObserver.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["lang"],
      });
    }

    if (currentScreen === "profile") {
      if (window.__snappinquizProfileFavoritesListenerBound) {
        // Listener already registered (e.g. if init is called again).
      } else {
        window.__snappinquizProfileFavoritesListenerBound = true;
      const rerenderFavorites = () => renderProfileDashboard(authApi.getAccount());
      window.addEventListener("snappinquiz:favorites-changed", rerenderFavorites);
      window.addEventListener("storage", (event) => {
        if (event?.key === "snappinquiz-favorites-v1") {
          rerenderFavorites();
        }
      });
      }
    }

    fillAccountFields();
    renderLoginTestUsers();
    updateAuthUiHint(authApi);
    updateStateBadge();
    syncAdminRoleScopedView();
    applyAdminI18n(resolveCurrentLang());
    renderAdminDashboard();
    renderPermissionsMatrix();
    renderUsersPage();
    renderTeamsPage();
    renderCoursesPage();
    renderReportsPage();
    renderEnrollmentsPage();

    container.querySelectorAll("[data-admin-invite-user]").forEach((btn) => {
      btn.addEventListener("click", showInviteUserModal);
    });
    const createTeamBtn = container.querySelector("[data-admin-create-team]");
    if (createTeamBtn) createTeamBtn.addEventListener("click", showCreateTeamModal);
    const createCourseBtn = container.querySelector("[data-admin-create-course]");
    if (createCourseBtn) createCourseBtn.addEventListener("click", () => showCreateCourseView(resolveCurrentLang()));
    container.querySelectorAll("[data-admin-create-blog]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const safeLang = resolveCurrentLang() === "en" ? "en" : "de";
        showToast(safeLang === "en" ? "Blog entry created (mockup)" : "Blog-Eintrag erstellt (Mockup)", "success");
      });
    });

    (function setupPlatformEditMode() {
      const panel = container.querySelector("[data-admin-platform-panel]");
      if (!panel) return;
      const editBtn = panel.querySelector("[data-admin-platform-edit]");
      const saveBtn = panel.querySelector("[data-admin-platform-save]");
      const cancelBtn = panel.querySelector("[data-admin-platform-cancel]");
      if (!editBtn || !saveBtn || !cancelBtn) return;
      const controls = () => panel.querySelectorAll("input, select, textarea");
      let snapshot = null;
      function setEditMode(on) {
        controls().forEach((el) => {
          if (on) el.removeAttribute("disabled");
          else el.setAttribute("disabled", "disabled");
        });
        editBtn.classList.toggle("hidden", on);
        saveBtn.classList.toggle("hidden", !on);
        cancelBtn.classList.toggle("hidden", !on);
      }
      function takeSnapshot() {
        snapshot = [];
        controls().forEach((el) => {
          if (el.type === "checkbox" || el.type === "radio") snapshot.push({ el, checked: el.checked });
          else snapshot.push({ el, value: el.value });
        });
      }
      function restoreSnapshot() {
        if (!snapshot) return;
        snapshot.forEach((entry) => {
          if ("checked" in entry) entry.el.checked = entry.checked;
          else entry.el.value = entry.value;
        });
      }
      setEditMode(false);
      editBtn.addEventListener("click", () => { takeSnapshot(); setEditMode(true); });
      cancelBtn.addEventListener("click", () => { restoreSnapshot(); setEditMode(false); });
      saveBtn.addEventListener("click", () => {
        const lang = resolveCurrentLang();
        const safeLang = lang === "en" ? "en" : "de";
        setEditMode(false);
        showToast(safeLang === "en" ? "Platform settings saved" : "Plattform-Einstellungen gespeichert", "success");
      });
    })();

    if (adminCreateForm) {
      adminCreateForm.addEventListener("submit", (event) => {
        event.preventDefault();
        setAdminControlsPending(true);
        setStatus(adminStatus, tProfile("admin.status.pending"), "");
        try {
          const result = authApi.createAdminUser({
            name: adminCreateName?.value,
            email: adminCreateEmail?.value,
            role: adminCreateRole?.value,
            active: Boolean(adminCreateActive?.checked),
          });
          if (!result.ok) {
            setStatus(adminStatus, statusMessageFor("admin", result.error), "error");
            return;
          }
          adminCreateForm.reset();
          renderAdminRoleOptions(adminCreateRole, "user");
          setStatus(adminStatus, tProfile("admin.status.userCreated"), "success");
          selectedAdminUserId = result.user.id;
          renderAdminDashboard(result.user.id);
        } finally {
          setAdminControlsPending(false);
        }
      });
    }

    if (adminRoleSelect) {
      adminRoleSelect.addEventListener("change", () => {
        renderRoleCapabilities(adminRoleSelect.value);
      });
    }

    if (adminRoleSave) {
      adminRoleSave.addEventListener("click", () => {
        if (!selectedAdminUserId || !adminRoleSelect) return;
        setAdminControlsPending(true);
        setStatus(adminStatus, tProfile("admin.status.pending"), "");
        try {
          const result = authApi.updateAdminUserRole({
            userId: selectedAdminUserId,
            role: adminRoleSelect.value,
          });
          if (!result.ok) {
            setStatus(adminStatus, statusMessageFor("admin", result.error), "error");
            return;
          }
          setStatus(adminStatus, tProfile("admin.status.roleUpdated"), "success");
          renderAdminDashboard(selectedAdminUserId);
        } finally {
          setAdminControlsPending(false);
        }
      });
    }

    if (adminNotificationsList) {
      adminNotificationsList.addEventListener("click", (event) => {
        const actionButton = event.target.closest("[data-admin-request-action]");
        if (!actionButton) return;
        const requestId = actionButton.dataset.adminRequestId;
        const action = actionButton.dataset.adminRequestAction;
        if (!requestId || (action !== "approve" && action !== "reject")) return;
        setAdminControlsPending(true);
        setStatus(adminStatus, tProfile("admin.status.pending"), "");
        try {
          const result = authApi.resolveAdminEnrollmentRequest?.({
            requestId,
            approve: action === "approve",
          });
          if (!result?.ok) {
            setStatus(adminStatus, statusMessageFor("admin", result?.error), "error");
            return;
          }
          setStatus(
            adminStatus,
            tProfile(action === "approve" ? "admin.status.requestApproved" : "admin.status.requestRejected"),
            "success"
          );
          renderAdminDashboard(selectedAdminUserId);
        } finally {
          setAdminControlsPending(false);
        }
      });
    }

    if (adminDeleteButton) {
      adminDeleteButton.addEventListener("click", () => {
        if (!selectedAdminUserId) return;
        if (!readAdminDeleteConfirmation()) {
          return;
        }
        setAdminControlsPending(true);
        setStatus(adminStatus, tProfile("admin.status.pending"), "");
        try {
          const result = authApi.deleteAdminUser(selectedAdminUserId);
          if (!result.ok) {
            setStatus(adminStatus, statusMessageFor("admin", result.error), "error");
            return;
          }
          selectedAdminUserId = "";
          setStatus(adminStatus, tProfile("admin.status.userDeleted"), "success");
          renderAdminDashboard();
        } finally {
          setAdminControlsPending(false);
        }
      });
    }
  }

  function readAdminDeleteConfirmation() {
    if (typeof window === "undefined" || typeof window.confirm !== "function") {
      return true;
    }
    return window.confirm(tProfile("admin.delete.confirm"));
  }

  globalScope.SnappinQuizProfileMockup = {
    TEST_ACCOUNT: PUBLIC_TEST_ACCOUNT,
    ADMIN_ACCOUNT: PUBLIC_ADMIN_ACCOUNT,
    ORG_ACCOUNT: PUBLIC_ORG_ACCOUNT,
    createMockAuth,
    initProfileMockup,
    __test: {
      sanitizeAvatarUrl,
      sanitizeAvatarPreset,
      buildAvatarPresetDataUrl,
      loadAvatarImage,
      LEVEL_UP_XP_REQUIREMENTS,
      RANK_BRACKETS,
      getLevelFromTotalXp,
      getXpProgressWithinLevel,
      getXpRequiredForNextLevel,
      getRankFromLevel,
    },
  };

  if (typeof document !== "undefined") {
    document.addEventListener("DOMContentLoaded", initProfileMockup);
  }
})(window);



