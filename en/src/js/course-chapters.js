(() => {
  const SUPPORTED_LOCALES = ["de", "en"];
  const DEFAULT_LOCALE = "de";
  const KNOWN_ROUTE_SEGMENTS = new Set([
    "app",
    "profile-mockup",
    "business",
    "about-us",
    "courses",
    "blog",
    "impressum",
    "datenschutzerklarung",
    "faq",
  ]);

  const UI_COPY = {
    de: {
      topicsHeading: "Lektionsthemen",
      topicsCountSuffix: "Themen",
      chapterCountSuffix: "Kapitel",
      topicStart: "Mit Kapitel 1 starten",
      chapterLabel: "Kapitel",
      chapterListAriaLabel: "Kapitel in diesem Thema",
      chapterProgress: "{current} von {total}",
      chapterLead: "Lernen Sie die Inhalte Schritt für Schritt und setzen Sie sie direkt im Alltag um.",
      backToCourse: "Zur Kursübersicht",
      previousChapter: "Zurück",
      nextChapter: "Nächstes Kapitel",
      durationSuffix: "Min",
      missingContent: "Dieser Abschnitt ist derzeit nicht verfügbar.",
      topicsLoading: "Inhalte laden...",
      topicsEmpty: "Derzeit keine Themen.",
      topicsError: "Themen konnten nicht geladen werden.",
      topicsExpandAll: "Alle Lektionen ausklappen",
      topicsCollapseAll: "Alle Lektionen einklappen",
      quizStartRetake: "Quiz erneut starten",
      quizStartPassed: "Quiz bestanden",
      courseCertificateDownload: "Zertifikat herunterladen",
      chapterErrorTitle: "Inhalt nicht gefunden",
      chapterErrorBody: "Bitte den Link kontrollieren und erneut aus der Kursübersicht starten.",
      quizIntroFallback:
        "Prüfen Sie Ihr Wissen mit praxisnahen Fragen aus den Lektionen. Lesen Sie jede Aufgabe aufmerksam und entscheiden Sie Schritt für Schritt.",
      quizQuestionsLabel: "Fragen",
      quizTimeLabel: "Zeitlimit",
      quizPassLabel: "Zum Bestehen",
      quizPassSuffix: "richtige Antworten",
      quizBack: "Zurück",
      quizBackToIntro: "Quiz verlassen",
      quizStart: "Quiz starten",
      quizStartHint: "Der Timer startet mit der ersten Frage.",
      quizIntroEyebrow: "Bereit für das Quiz?",
      quizIntroHighlightsTitle: "Was dich erwartet",
      quizMetaQuestionsLabel: "Anzahl Fragen",
      quizMetaDurationLabel: "Geschätzte Dauer",
      quizMetaEvaluationLabel: "Auswertung",
      quizMetaEvaluationValue: "Am Ende des Quiz",
      quizQuestionTabsLabel: "Fragenübersicht",
      quizQuestionLabel: "Frage",
      quizQuestionWindowPrevious: "Vorherige Fragen",
      quizQuestionWindowNext: "Nächste Fragen",
      quizQuestionWindowRangePattern: "Fragen {start}\u2013{end} von {total}",
      quizQuestionSingleHint: "Eine Antwort auswählen.",
      quizQuestionMultiHint: "Mehrere Antworten auswählen.",
      quizTabCurrent: "aktuell",
      quizTabAnswered: "beantwortet",
      quizTabOpen: "offen",
      quizTimerLabel: "Verbleibende Zeit",
      quizProgressLabel: "Fortschritt",
      quizProgressPercentLabel: "Beantwortet",
      quizBlindRunHint: "Antworten werden am Ende ausgewertet",
      quizRewardsDeferredHint: "Belohnungen werden nach Abschluss berechnet",
      quizRemainingPattern: "Noch {count} Fragen bis zum Ergebnis",
      quizMilestoneHalfway: "Halbzeit erreicht",
      quizMilestoneFinalThree: "Finale 3 Fragen",
      quizMilestoneLastQuestion: "Letzte Frage",
      quizMilestoneDefault: "Dranbleiben",
      quizMilestoneAlmostThere: "Fast geschafft",
      quizSavedAnswer: "Antwort gespeichert",
      quizSavedAnswerWithNext: "Deine Antwort wurde übernommen. Weiter zur nächsten Frage.",
      quizProgressPattern: "Frage {current} von {total}",
      quizPreviousQuestion: "Vorherige Frage",
      quizNextQuestion: "Nächste Frage",
      quizResult: "Ergebnis ansehen",
      quizResultHint: "Weiter zur Auswertung",
      quizSelectionRequired: "Bitte mindestens eine Antwort auswählen, um fortzufahren.",
      quizLeaveConfirm: "Das Quiz läuft noch. Wirklich zur Einführung zurückkehren?",
      quizTimeOverAlert: "Die Zeit ist abgelaufen.",
      quizReviewTitle: "Quiz abgeschlossen",
      quizReviewHint: "Dein Quizbericht mit Auswertung und Belohnungen.",
      quizReviewTimeInvestedLabel: "Zeit",
      quizReviewTimeSubtitle: "Minuten",
      quizReviewOverviewTitle: "Dein Ergebnis im Überblick",
      quizReviewCorrectLabel: "Richtig",
      quizReviewCorrectSubtitlePattern: "von {total} Fragen",
      quizReviewWrongLabel: "Falsch",
      quizReviewWrongSubtitlePattern: "Fragen",
      quizReviewRatioLabel: "Genauigkeit",
      quizReviewXpGainLabel: "Verdient",
      quizReviewXpGainSubtitle: "XP",
      quizReviewRingAccuracy: "Genauigkeit",
      quizReviewRingScoreTitle: "Dein Ergebnis",
      quizReviewRingCorrectTotal: "Richtig / Gesamt",
      quizReviewRingMissingToGoal: "Fehlend zum Ziel",
      quizReviewRingGoalTitle: "Ziel zum Bestehen",
      quizReviewRingMinScore: "Mindestpunktzahl",
      quizReviewRingBestResult: "Bestes Ergebnis",
      quizReviewRingThisQuiz: "Dieses Quiz",
      quizReviewRingAboveTitle: "Über dem Ziel",
      quizReviewRingRange: "Bereich",
      quizReviewRingMarginFromGoal: "Spielraum ab Ziel",
      quizReviewRingBestHere: "Bestes Ergebnis liegt hier",
      quizReviewXpBreakdownTitle: "Dein XP-Breakdown",
      quizReviewXpBreakdownEmpty: "Keine zusätzlichen Boni in diesem Lauf.",
      quizReviewBreakdownCorrectAnswers: "Richtige Antworten",
      quizReviewBreakdownFirstTry: "Erster Versuch",
      quizReviewBreakdownDifficult: "Schwierige Fragen",
      quizReviewBreakdownScenario: "Simulationen / Trickfragen",
      quizReviewBreakdownQuizCompleted: "Quiz abgeschlossen",
      quizReviewBreakdownScore80: "80 %+ Bonus",
      quizReviewBreakdownPerfect: "Perfekter Lauf",
      quizReviewBreakdownNoHints: "Ohne Hinweise",
      quizReviewBreakdownTargetTime: "Zeitbonus",
      quizReviewProfileLabel: "Spielerprofil",
      quizReviewGamificationRegionLabel: "Spielerprofil und Fortschritt",
      quizReviewPlayerName: "SnappinQuiz Player",
      quizReviewLevelLabel: "Level",
      quizReviewLevelProgressLabel: "Fortschritt bis Level {nextLevel}",
      quizReviewLevelProgressPattern: "Level-Fortschritt: {percent}%",
      quizReviewLevelProgressHintPattern: "{current} / {required} XP bis Level {nextLevel}",
      quizReviewStatusLabel: "Status",
      quizReviewResultPattern: "{correct} von {total}",
      quizReviewPassed: "Bestanden",
      quizReviewFailed: "Nicht bestanden",
      quizReviewGradePattern: "Bewertung: {grade}",
      quizReviewBestFirstRun: "Erster Lauf: {score}%",
      quizReviewBestImproved: "Neuer Bestwert: {score}%",
      quizReviewBestCurrent: "Bester Lauf: {score}%",
      quizReviewReplayHintPassed: "Starker Lauf. Nächste Challenge wartet.",
      quizReviewReplayHintFailed: "Du bist nah dran. Mit einem Wiederholungsversuch holst du mehr raus.",
      quizReviewAnswerBreakdownTitle: "Auswertung",
      quizReviewAnswerCorrect: "Korrekt",
      quizReviewAnswerIncorrect: "Nicht korrekt",
      quizReviewAnswerYourChoice: "Deine Antwort",
      quizReviewAnswerCorrectChoice: "Richtige Antwort",
      quizReviewRetry: "Quiz wiederholen",
      quizReviewBackToCourses: "Zur Kursübersicht",
      quizReviewErrorTitle: "Auswertung nicht verfügbar",
      quizReviewErrorBody: "Das Ergebnis konnte nicht geladen werden. Bitte starten Sie das Quiz erneut.",
      quizPlayErrorTitle: "Quiz nicht verfügbar",
      quizPlayErrorBody: "Die Quizfragen konnten nicht geladen werden. Bitte starten Sie erneut über die Kursseite.",
      quizPlayErrorHint: "Bitte zur Quiz-Einführung zurückkehren und neu starten.",
      quizErrorTitle: "Quiz nicht verfügbar",
      quizErrorBody: "Dieses Quiz konnte nicht geladen werden. Bitte starten Sie erneut aus dem Kurs.",
      quizErrorHint: "Bitte zur Kursseite wechseln und Quiz erneut starten.",
      paragraphTwo:
        "Arbeiten Sie mit einem 60-Sekunden-Check: Kontext klären, Identität über einen zweiten Kanal bestätigen, Auswirkungen auf Daten und Systeme einschätzen und erst dann handeln.",
    },
    en: {
      topicsHeading: "Lesson topics",
      topicsCountSuffix: "topics",
      chapterCountSuffix: "chapters",
      topicStart: "Start with chapter 1",
      chapterLabel: "Chapter",
      chapterListAriaLabel: "Chapters in this topic",
      chapterProgress: "{current} of {total}",
      chapterLead: "Learn one step at a time and apply each concept directly in your daily routine.",
      backToCourse: "Back to course overview",
      previousChapter: "Back",
      nextChapter: "Next chapter",
      durationSuffix: "min",
      missingContent: "This section is currently unavailable.",
      topicsLoading: "Loading topics...",
      topicsEmpty: "No topics are currently available.",
      topicsError: "Topics could not be loaded.",
      topicsExpandAll: "Expand all lessons",
      topicsCollapseAll: "Collapse all lessons",
      quizStartRetake: "Retry quiz",
      quizStartPassed: "Quiz passed",
      courseCertificateDownload: "Download certificate",
      chapterErrorTitle: "Content not found",
      chapterErrorBody: "Please verify the link and restart from the course overview.",
      quizIntroFallback:
        "Check your knowledge with practical questions based on the lessons. Read each prompt carefully and decide step by step.",
      quizQuestionsLabel: "Questions",
      quizTimeLabel: "Time limit",
      quizPassLabel: "Required to pass",
      quizPassSuffix: "correct answers",
      quizBack: "Back",
      quizBackToIntro: "Exit quiz",
      quizStart: "Start quiz",
      quizStartHint: "The timer starts with the first question.",
      quizIntroEyebrow: "Ready for the quiz?",
      quizIntroHighlightsTitle: "What to expect",
      quizMetaQuestionsLabel: "Number of questions",
      quizMetaDurationLabel: "Estimated duration",
      quizMetaEvaluationLabel: "Evaluation",
      quizMetaEvaluationValue: "At the end of the quiz",
      quizQuestionTabsLabel: "Question overview",
      quizQuestionLabel: "Question",
      quizQuestionWindowPrevious: "Previous questions",
      quizQuestionWindowNext: "Next questions",
      quizQuestionWindowRangePattern: "Questions {start}\u2013{end} of {total}",
      quizQuestionSingleHint: "Select one answer.",
      quizQuestionMultiHint: "Select one or more answers.",
      quizTabCurrent: "current",
      quizTabAnswered: "answered",
      quizTabOpen: "open",
      quizTimerLabel: "Time remaining",
      quizProgressLabel: "Progress",
      quizProgressPercentLabel: "Answered",
      quizBlindRunHint: "Answers are evaluated at the end",
      quizRewardsDeferredHint: "Rewards are calculated after completion",
      quizRemainingPattern: "{count} questions left until your result",
      quizMilestoneHalfway: "Halfway reached",
      quizMilestoneFinalThree: "Final 3 questions",
      quizMilestoneLastQuestion: "Last question",
      quizMilestoneDefault: "Stay focused",
      quizMilestoneAlmostThere: "Almost there",
      quizSavedAnswer: "Answer saved",
      quizSavedAnswerWithNext: "Your answer was recorded. Continue to the next question.",
      quizProgressPattern: "Question {current} of {total}",
      quizPreviousQuestion: "Previous question",
      quizNextQuestion: "Next question",
      quizResult: "View result",
      quizResultHint: "Continue to review",
      quizSelectionRequired: "Select at least one answer to continue.",
      quizLeaveConfirm: "The quiz is still running. Do you want to go back?",
      quizTimeOverAlert: "Time is over.",
      quizReviewTitle: "Quiz completed",
      quizReviewHint: "Your quiz report with evaluation and rewards.",
      quizReviewTimeInvestedLabel: "Time",
      quizReviewTimeSubtitle: "Minutes",
      quizReviewOverviewTitle: "Your result at a glance",
      quizReviewCorrectLabel: "Correct",
      quizReviewCorrectSubtitlePattern: "of {total} questions",
      quizReviewWrongLabel: "Wrong",
      quizReviewWrongSubtitlePattern: "questions",
      quizReviewRatioLabel: "Accuracy",
      quizReviewXpGainLabel: "Earned",
      quizReviewXpGainSubtitle: "XP",
      quizReviewRingAccuracy: "Accuracy",
      quizReviewRingScoreTitle: "Your Result",
      quizReviewRingCorrectTotal: "Correct / Total",
      quizReviewRingMissingToGoal: "Missing to Goal",
      quizReviewRingGoalTitle: "Goal to Pass",
      quizReviewRingMinScore: "Minimum Score",
      quizReviewRingBestResult: "Best Result",
      quizReviewRingThisQuiz: "This Quiz",
      quizReviewRingAboveTitle: "Above the Goal",
      quizReviewRingRange: "Range",
      quizReviewRingMarginFromGoal: "Margin from Goal",
      quizReviewRingBestHere: "Best result is here",
      quizReviewXpBreakdownTitle: "Your XP breakdown",
      quizReviewXpBreakdownEmpty: "No additional bonuses for this run.",
      quizReviewBreakdownCorrectAnswers: "Correct answers",
      quizReviewBreakdownFirstTry: "First try",
      quizReviewBreakdownDifficult: "Difficult questions",
      quizReviewBreakdownScenario: "Simulations / trick questions",
      quizReviewBreakdownQuizCompleted: "Quiz completed",
      quizReviewBreakdownScore80: "80%+ bonus",
      quizReviewBreakdownPerfect: "Perfect run",
      quizReviewBreakdownNoHints: "No hints",
      quizReviewBreakdownTargetTime: "Time bonus",
      quizReviewProfileLabel: "Player profile",
      quizReviewGamificationRegionLabel: "Player profile and progress",
      quizReviewPlayerName: "SnappinQuiz Player",
      quizReviewLevelLabel: "Level",
      quizReviewLevelProgressLabel: "Progress to Level {nextLevel}",
      quizReviewLevelProgressPattern: "Level progress: {percent}%",
      quizReviewLevelProgressHintPattern: "{current} / {required} XP to Level {nextLevel}",
      quizReviewStatusLabel: "Status",
      quizReviewResultPattern: "{correct} of {total}",
      quizReviewPassed: "Passed",
      quizReviewFailed: "Not passed",
      quizReviewGradePattern: "Grade: {grade}",
      quizReviewBestFirstRun: "First run: {score}%",
      quizReviewBestImproved: "New best score: {score}%",
      quizReviewBestCurrent: "Best run: {score}%",
      quizReviewReplayHintPassed: "Strong run. Next challenge is ready.",
      quizReviewReplayHintFailed: "Close run. A replay can improve your result.",
      quizReviewAnswerBreakdownTitle: "Evaluation",
      quizReviewAnswerCorrect: "Correct",
      quizReviewAnswerIncorrect: "Incorrect",
      quizReviewAnswerYourChoice: "Your answer",
      quizReviewAnswerCorrectChoice: "Correct answer",
      quizReviewRetry: "Retry quiz",
      quizReviewBackToCourses: "Back to courses overview",
      quizReviewErrorTitle: "Review unavailable",
      quizReviewErrorBody: "The result could not be loaded. Please start the quiz again.",
      quizPlayErrorTitle: "Quiz unavailable",
      quizPlayErrorBody: "The quiz questions could not be loaded. Please restart from the course page.",
      quizPlayErrorHint: "Please return to the quiz intro and start again.",
      quizErrorTitle: "Quiz unavailable",
      quizErrorBody: "This quiz could not be loaded. Please reopen it from the course page.",
      quizErrorHint: "Please return to the course page and reopen the quiz.",
      paragraphTwo:
        "Use a short 60-second check every time: verify context, validate identity in a second channel, estimate impact on systems and data, and then act.",
    },
  };

  const CHAPTER_TEMPLATES = {
    de: [
      { id: "risiko", title: "Risiko verstehen" },
      { id: "sicher-handeln", title: "Sicher handeln" },
      { id: "team-routine", title: "Im Team verankern" },
    ],
    en: [
      { id: "understand-risk", title: "Understand the risk" },
      { id: "act-safely", title: "Act safely" },
      { id: "team-routine", title: "Embed in team routine" },
    ],
  };

  const TOPIC_LIBRARY = {
    "password-sicherheit": {
      de: { title: "Passwort-Sicherheit", summary: "Starke Passphrasen, sichere Ablage und klare Regeln für Zugangsdaten." },
      en: { title: "Password Security", summary: "Strong passphrases, secure storage, and clear handling rules for credentials." },
    },
    "email-betrug": {
      de: { title: "Email-Betrug", summary: "Warnsignale in eingehenden Nachrichten erkennen und sicher reagieren." },
      en: { title: "Email Fraud", summary: "Detect warning signs in incoming messages and respond safely." },
    },
    "phishing-erkennen": {
      de: { title: "Phishing erkennen", summary: "Gefälschte Login-Seiten und manipulative Nachrichten frühzeitig entlarven." },
      en: { title: "Detecting Phishing", summary: "Identify fake login pages and manipulative messages at an early stage." },
    },
    "home-office-sicher": {
      de: { title: "Sicheres Arbeiten im Home-Office", summary: "Gerät, Netzwerk und Arbeitsumgebung absichern ohne Produktivitaetsverlust." },
      en: { title: "Secure Remote Work", summary: "Protect device, network, and workspace without losing productivity." },
    },
    "interaktive-lektionen": {
      de: { title: "Interaktive Lektionen", summary: "Aktive Übungen mit Feedback für nachhaltigen Lernerfolg." },
      en: { title: "Interactive Lessons", summary: "Active exercises with feedback for lasting learning impact." },
    },
    "dsgvo-compliance": {
      de: { title: "DSGVO Compliance", summary: "Rechtliche Grundlagen in klare Schritte für den Alltag übersetzen." },
      en: { title: "GDPR Compliance", summary: "Turn legal foundations into clear day-to-day actions." },
    },
    datenschutz: {
      de: { title: "Datenschutz", summary: "Personenbezogene Daten korrekt klassifizieren und sicher verarbeiten." },
      en: { title: "Data Protection", summary: "Classify personal data correctly and process it securely." },
    },
    kontaktformular: {
      de: { title: "Kontaktformular", summary: "Formulardaten datensparsam erfassen und nachvollziehbar weiterleiten." },
      en: { title: "Contact Forms", summary: "Collect form data minimally and route it transparently." },
    },
    auftragsverarbeitung: {
      de: { title: "Auftragsverarbeitung", summary: "Dienstleister steuern und Verantwortlichkeiten sauber dokumentieren." },
      en: { title: "Data Processing Agreements", summary: "Manage service providers and document responsibilities clearly." },
    },
    "berichte-fortschritt": {
      de: { title: "Berichte und Fortschritt", summary: "Sicherheits- und Compliance-Status mit Kennzahlen steuern." },
      en: { title: "Reports and Progress", summary: "Manage security and compliance status through meaningful metrics." },
    },
    "ki-betrug-und-deepfakes": {
      de: { title: "KI-Betrug und Deepfakes", summary: "Neue KI-basierte Angriffe verstehen und frühzeitig absichern." },
      en: { title: "AI Fraud and Deepfakes", summary: "Understand new AI-driven attacks and protect early." },
    },
    "deepfakes-erkennen": {
      de: { title: "KI-generierte Deepfakes erkennen", summary: "Audio- und Video-Manipulationen anhand von Mustern und Kontext aufdecken." },
      en: { title: "Detect AI-generated Deepfakes", summary: "Expose manipulated audio and video using pattern and context checks." },
    },
    "email-legitim": {
      de: { title: "Ist diese E-Mail legitim?", summary: "Nachrichten strukturiert prüfen und legitime Kommunikation trennen." },
      en: { title: "Is this email legitimate?", summary: "Assess messages systematically and separate legitimate communication." },
    },
    wiederholung: {
      de: { title: "Mehr Sicherheit durch Wiederholung", summary: "Wissen verankern durch kurze, regelmaessige Sicherheitsimpulse." },
      en: { title: "More security through repetition", summary: "Anchor knowledge through short and recurring security impulses." },
    },
    "social-engineering": {
      de: { title: "Social Engineering", summary: "Manipulationstechniken erkennen und Informationsgrenzen klar ziehen." },
      en: { title: "Social Engineering", summary: "Recognize manipulation tactics and set clear boundaries on sensitive data." },
    },
    "offline-modus": {
      de: { title: "Offline-Modus", summary: "Auch ohne Netz sicher arbeiten und Datenverlust vermeiden." },
      en: { title: "Offline Mode", summary: "Work securely without connectivity and avoid data loss." },
    },
    "besserer-schutz": {
      de: { title: "Besserer Schutz", summary: "Massnahmen priorisieren und systematisch zu robusten Standards ausbauen." },
      en: { title: "Stronger Protection", summary: "Prioritize controls and evolve them into robust standards." },
    },
  };

  const COURSE_LIBRARY = {
    "it-sicherheit-grundlagen": {
      de: {
        title: "IT-Sicherheit Grundlagen",
        description: "Der perfekte Einstieg in die Welt der Cybersecurity. Lernen Sie die wichtigsten Begriffe und Konzepte.",
      },
      en: {
        title: "IT Security Fundamentals",
        description: "The perfect introduction to cybersecurity. Learn the key terms and concepts.",
      },
      topics: [
        { id: "password-sicherheit", minutes: 8 },
        { id: "email-betrug", minutes: 9 },
        { id: "phishing-erkennen", minutes: 7 },
        { id: "home-office-sicher", minutes: 11 },
        { id: "interaktive-lektionen", minutes: 10 },
      ],
    },
    "phishing-awareness-pro": {
      de: {
        title: "Phishing Awareness Pro",
        description: "Erkennen Sie Phishing-Angriffe zuverlässig. Mit echten Beispielen und interaktiven Übungen.",
      },
      en: {
        title: "Phishing Awareness Pro",
        description: "Detect phishing attacks reliably with real examples and interactive exercises.",
      },
      topics: [
        { id: "phishing-erkennen", minutes: 12 },
        { id: "email-legitim", minutes: 10 },
        { id: "email-betrug", minutes: 9 },
        { id: "social-engineering", minutes: 11 },
        { id: "wiederholung", minutes: 8 },
      ],
    },
    "dsgvo-compliance": {
      de: {
        title: "DSGVO Compliance",
        description: "Alles zur Datenschutz-Grundverordnung. Praktische Tipps für den Arbeitsalltag.",
      },
      en: {
        title: "GDPR Compliance",
        description: "Everything about GDPR with practical guidance for daily work.",
      },
      topics: [
        { id: "dsgvo-compliance", minutes: 10 },
        { id: "datenschutz", minutes: 12 },
        { id: "kontaktformular", minutes: 11 },
        { id: "auftragsverarbeitung", minutes: 13 },
        { id: "berichte-fortschritt", minutes: 9 },
      ],
    },
    "social-engineering-abwehr": {
      de: {
        title: "Social Engineering Abwehr",
        description: "Psychologische Tricks erkennen und sicher reagieren.",
      },
      en: {
        title: "Social Engineering Defense",
        description: "Recognize psychological manipulation tactics and respond safely.",
      },
      topics: [
        { id: "social-engineering", minutes: 10 },
        { id: "phishing-erkennen", minutes: 8 },
        { id: "email-legitim", minutes: 7 },
        { id: "interaktive-lektionen", minutes: 9 },
        { id: "besserer-schutz", minutes: 8 },
      ],
    },
    "sicheres-home-office": {
      de: {
        title: "Sicheres Home-Office",
        description: "VPN, WLAN-Sicherheit und Gerät-Schutz für verteilte Teams.",
      },
      en: {
        title: "Secure Home Office",
        description: "VPN, Wi-Fi security, and device protection for distributed teams.",
      },
      topics: [
        { id: "home-office-sicher", minutes: 6 },
        { id: "offline-modus", minutes: 5 },
        { id: "password-sicherheit", minutes: 7 },
        { id: "phishing-erkennen", minutes: 6 },
        { id: "besserer-schutz", minutes: 6 },
      ],
    },
    "ki-betrug-und-deepfakes": {
      de: {
        title: "KI-Betrug und Deepfakes",
        description: "Voice Cloning und Deepfake-Muster frühzeitig erkennen.",
      },
      en: {
        title: "AI Fraud and Deepfakes",
        description: "Detect voice cloning and deepfake patterns early.",
      },
      topics: [
        { id: "ki-betrug-und-deepfakes", minutes: 12 },
        { id: "deepfakes-erkennen", minutes: 10 },
        { id: "email-legitim", minutes: 9 },
        { id: "phishing-erkennen", minutes: 11 },
        { id: "wiederholung", minutes: 8 },
      ],
    },
  };

  const QUIZ_LIBRARY = {
    "it-sicherheit-grundlagen": {
      de: {
        title: "IT-Sicherheit Grundlagen Abschlussquiz",
        intro:
          "Dieses Quiz fasst die wichtigsten Grundlagen aus dem Kurs zusammen. Sie trainieren sichere Entscheidungen rund um Passwörter, E-Mails und tägliche Schutzmaßnahmen.",
      },
      en: {
        title: "IT Security Fundamentals Final Quiz",
        intro:
          "This quiz consolidates the key fundamentals from the course. You will practice secure decisions for passwords, email, and day-to-day protection steps.",
      },
      questions: 12,
      minutes: 15,
      requiredCorrect: 9,
    },
    "phishing-awareness-pro": {
      de: {
        title: "Phishing Awareness Pro Abschlussquiz",
        intro:
          "Im Abschlussquiz prüfen Sie, ob Sie typische Phishing-Muster zuverlässig erkennen und angemessen reagieren. Die Aufgaben orientieren sich an realistischen Nachrichtensituationen.",
      },
      en: {
        title: "Phishing Awareness Pro Final Quiz",
        intro:
          "In this final quiz, you validate whether you can reliably spot common phishing patterns and respond appropriately. The questions are based on realistic messaging scenarios.",
      },
      questions: 50,
      minutes: 65,
      requiredCorrect: 38,
    },
    "dsgvo-compliance": {
      de: {
        title: "DSGVO Compliance Praxisquiz",
        intro:
          "Dieses Praxisquiz überprüft Ihr Verständnis zu Datenschutzpflichten und sicheren Prozessen. Im Fokus stehen typische Entscheidungen aus dem Arbeitsalltag.",
      },
      en: {
        title: "GDPR Compliance Practice Quiz",
        intro:
          "This practice quiz checks your understanding of data protection obligations and secure processes. It focuses on typical decisions from daily work.",
      },
      questions: 13,
      minutes: 17,
      requiredCorrect: 10,
    },
    "social-engineering-abwehr": {
      de: {
        title: "Social Engineering Abwehr Szenarioquiz",
        intro:
          "Im Szenarioquiz wenden Sie Ihr Wissen direkt auf manipulative Gesprächs- und Kommunikationssituationen an. Ziel ist ein ruhiges, strukturiertes Vorgehen unter Druck.",
      },
      en: {
        title: "Social Engineering Defense Scenario Quiz",
        intro:
          "In this scenario quiz, you apply your knowledge to manipulative communication and conversation situations. The goal is calm and structured action under pressure.",
      },
      questions: 11,
      minutes: 15,
      requiredCorrect: 8,
    },
    "sicheres-home-office": {
      de: {
        title: "Sicheres Home-Office Sicherheitsquiz",
        intro:
          "Dieses Sicherheitsquiz prüft Ihr Wissen zu WLAN, Geräten und Arbeitsumgebung im Home-Office. Sie trainieren Prioritäten für sichere Routineentscheidungen.",
      },
      en: {
        title: "Secure Home Office Security Quiz",
        intro:
          "This security quiz checks your knowledge of Wi-Fi, devices, and workspace setup in home office environments. You will train priorities for secure routine decisions.",
      },
      questions: 10,
      minutes: 12,
      requiredCorrect: 7,
    },
    "ki-betrug-und-deepfakes": {
      de: {
        title: "KI-Betrug und Deepfakes Erkennungsquiz",
        intro:
          "Im Erkennungsquiz analysieren Sie Hinweise auf KI-gestützte Täuschung in Text, Audio und Video. So stärken Sie schnelle und belastbare Prüfprozesse.",
      },
      en: {
        title: "AI Fraud and Deepfakes Detection Quiz",
        intro:
          "In this detection quiz, you analyze indicators of AI-driven deception across text, audio, and video. This strengthens fast and reliable verification routines.",
      },
      questions: 3,
      minutes: 5,
      requiredCorrect: 2,
    },
  };

  const MOCK_ACCOUNT_STORAGE_KEY = "snappinquiz-mock-account";
  const MOCK_SESSION_STORAGE_KEY = "snappinquiz-mock-session";
  const MOCK_ROLE_STORAGE_KEY = "snappinquiz-mock-role";
  const AVATAR_PRESET_IDS = Object.freeze(["cyber-guardian", "pixel-owl", "retro-bot", "neon-fox"]);
  const LEVEL_UP_XP_REQUIREMENTS = Object.freeze([
    100, 140, 180, 220, 260, 300, 340, 380, 420, 460,
    500, 540, 580, 620, 660, 700, 740, 780, 820, 860,
    900, 940, 980, 1020, 1060, 1100, 1140, 1180, 1220,
  ]);
  const QUIZ_XP_REWARDS = Object.freeze({
    correctAnswer: 10,
    firstTryBonus: 5,
    difficultCorrectBonus: 10,
    scenarioCorrectBonus: 15,
    score80Bonus: 20,
    perfectScoreBonus: 40,
    noHintsBonus: 10,
    targetTimeBonus: 10,
    quizCompleted: 25,
    lessonCompleted: 40,
    courseCompleted: 150,
    certificateEarned: 250,
  });

  function buildQuizQuestions(courseSlug, locale) {
    const quiz = QUIZ_LIBRARY[courseSlug];
    const course = COURSE_LIBRARY[courseSlug];
    if (!quiz || !course) {
      return [];
    }

    const resolvedLocale = SUPPORTED_LOCALES.includes(locale) ? locale : DEFAULT_LOCALE;
    const totalQuestions = Number(quiz.questions) || 0;
    const topicRefs = course.topics || [];
    if (!topicRefs.length || totalQuestions < 1) {
      return [];
    }

    const courseHasScenarioFocus = /(phishing|social-engineering|ki-betrug|deepfake)/i.test(courseSlug);
    const isQuickVerificationQuiz = courseSlug === "ki-betrug-und-deepfakes";
    const markCorrectOptions = (question) => {
      if (!isQuickVerificationQuiz || !question || !Array.isArray(question.options)) {
        return question;
      }
      const correctSuffix = resolvedLocale === "en" ? " (correct)" : " (richtig)";
      const correctAnswerSet = new Set(Array.isArray(question.correctAnswers) ? question.correctAnswers : []);
      return {
        ...question,
        options: question.options.map((option) => ({
          ...option,
          text:
            typeof option?.text === "string" && correctAnswerSet.has(option.id)
              ? `${option.text}${correctSuffix}`
              : option.text,
        })),
      };
    };

    return Array.from({ length: totalQuestions }, (_, index) => {
      const questionNumber = index + 1;
      const topicRef = topicRefs[index % topicRefs.length];
      const topicText = resolveLocalizedText(TOPIC_LIBRARY[topicRef.id], resolvedLocale);
      const topicTitle = topicText?.title || topicRef.id;
      const isMultiple = questionNumber % 3 === 0;
      const includeOptionImages = !isMultiple && questionNumber <= 2;
      const optionImagePaths = includeOptionImages
        ? [
            "/assets/images/quiz-options/option-a-secure-check.jpg",
            "/assets/images/quiz-options/option-b-phish-link.jpg",
            "/assets/images/quiz-options/option-c-data-leak.jpg",
            "/assets/images/quiz-options/option-d-urgent-pressure.jpg",
          ]
        : [];
      const rewardMeta = {
        isDifficult: questionNumber % 5 === 0,
        isScenario: courseHasScenarioFocus && questionNumber % 4 === 0,
      };

      if (resolvedLocale === "en") {
        if (isMultiple) {
          return markCorrectOptions({
            id: `question-${questionNumber}`,
            type: "multiple",
            rewardMeta,
            prompt: `Which actions match the lesson "${topicTitle}"?`,
            correctAnswers: [`q${questionNumber}-a`, `q${questionNumber}-c`],
            options: [
              { id: `q${questionNumber}-a`, text: "Verify the request through a second trusted channel." },
              { id: `q${questionNumber}-b`, text: "Share credentials quickly to keep the process moving." },
              { id: `q${questionNumber}-c`, text: "Document unusual behavior and alert the team." },
              { id: `q${questionNumber}-d`, text: "Ignore policy exceptions when pressure is high." },
            ],
          });
        }

        return markCorrectOptions({
          id: `question-${questionNumber}`,
          type: "single",
          rewardMeta,
          prompt: `What is the safest first step for "${topicTitle}"?`,
          correctAnswers: [`q${questionNumber}-a`],
          options: [
            {
              id: `q${questionNumber}-a`,
              text: "Review context and source before taking action.",
              ...(includeOptionImages
                ? { image: optionImagePaths[0], imageAlt: "Secure verification workflow preview" }
                : {}),
            },
            {
              id: `q${questionNumber}-b`,
              text: "Open links immediately to save time.",
              ...(includeOptionImages
                ? { image: optionImagePaths[1], imageAlt: "Suspicious phishing message preview" }
                : {}),
            },
            {
              id: `q${questionNumber}-c`,
              text: "Post sensitive details in a public channel.",
              ...(includeOptionImages
                ? { image: optionImagePaths[2], imageAlt: "Sensitive data disclosure scenario preview" }
                : {}),
            },
            {
              id: `q${questionNumber}-d`,
              text: "Skip verification if the sender sounds urgent.",
              ...(includeOptionImages
                ? { image: optionImagePaths[3], imageAlt: "Social engineering urgency scenario preview" }
                : {}),
            },
          ],
        });
      }

      if (isMultiple) {
        return markCorrectOptions({
          id: `question-${questionNumber}`,
          type: "multiple",
          rewardMeta,
          prompt: `Welche Maßnahmen passen zum Thema "${topicTitle}"?`,
          correctAnswers: [`q${questionNumber}-a`, `q${questionNumber}-c`],
          options: [
            { id: `q${questionNumber}-a`, text: "Anfrage über einen zweiten vertrauenswürdigen Kanal bestätigen." },
            { id: `q${questionNumber}-b`, text: "Zugangsdaten zur Beschleunigung direkt weitergeben." },
            { id: `q${questionNumber}-c`, text: "Ungewöhnliches Verhalten dokumentieren und im Team melden." },
            { id: `q${questionNumber}-d`, text: "Richtlinien bei Zeitdruck ignorieren." },
          ],
        });
      }

      return markCorrectOptions({
        id: `question-${questionNumber}`,
        type: "single",
        rewardMeta,
        prompt: `Was ist der sicherste erste Schritt bei "${topicTitle}"?`,
        correctAnswers: [`q${questionNumber}-a`],
        options: [
          {
            id: `q${questionNumber}-a`,
            text: "Vor dem Handeln Kontext und Quelle prüfen.",
            ...(includeOptionImages
              ? { image: optionImagePaths[0], imageAlt: "Vorschau sicherer Prüfablauf" }
              : {}),
          },
          {
            id: `q${questionNumber}-b`,
            text: "Links sofort öffnen, um schneller zu sein.",
            ...(includeOptionImages
              ? { image: optionImagePaths[1], imageAlt: "Vorschau verdächtige Nachricht" }
              : {}),
          },
          {
            id: `q${questionNumber}-c`,
            text: "Sensible Details in einem offenen Kanal teilen.",
            ...(includeOptionImages
              ? { image: optionImagePaths[2], imageAlt: "Vorschau ungeschützte Datenweitergabe" }
              : {}),
          },
          {
            id: `q${questionNumber}-d`,
            text: "Überprüfung überspringen, wenn es dringend klingt.",
            ...(includeOptionImages
              ? { image: optionImagePaths[3], imageAlt: "Vorschau Social-Engineering-Drucksituation" }
              : {}),
          },
        ],
      });
    });
  }

  function readMockStorageValue(key) {
    if (!key) {
      return null;
    }
    try {
      const storage = window.localStorage;
      if (!storage) {
        return null;
      }
      return storage.getItem(key);
    } catch {
      return null;
    }
  }

  function toInitials(name, fallback = "SQ") {
    const normalized = String(name || "").trim();
    if (!normalized) {
      return fallback;
    }
    const segments = normalized.split(/\s+/).filter(Boolean);
    if (segments.length > 1) {
      return `${segments[0][0]}${segments[1][0]}`.toUpperCase();
    }
    const compact = normalized.replace(/\s+/g, "");
    return compact.slice(0, 2).toUpperCase() || fallback;
  }

  function sanitizeAvatarPreset(rawValue) {
    const value = String(rawValue || "").trim();
    return AVATAR_PRESET_IDS.includes(value) ? value : "";
  }

  function sanitizeAvatarUrl(rawValue) {
    const value = String(rawValue || "").trim();
    if (!value) return "";
    try {
      const parsed = new URL(value, window?.location?.origin || "https://snappinquiz.local");
      if (parsed.protocol !== "https:") return "";
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
    } catch {
      return "";
    }
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

  function deriveProfileLevelFromName(name) {
    const nameLengthSeed = Math.max(1, String(name || "").trim().length);
    return Math.min(25, 4 + (nameLengthSeed % 7));
  }

  function deriveProfileTotalXp(name) {
    const nameLengthSeed = Math.max(1, String(name || "").trim().length);
    return 600 + nameLengthSeed * 180;
  }

  const RANK_BRACKETS = Object.freeze([
    Object.freeze({ minLevel: 1, maxLevel: 4, title: "Rookie" }),
    Object.freeze({ minLevel: 5, maxLevel: 9, title: "Scout" }),
    Object.freeze({ minLevel: 10, maxLevel: 14, title: "Analyst" }),
    Object.freeze({ minLevel: 15, maxLevel: 19, title: "Defender" }),
    Object.freeze({ minLevel: 20, maxLevel: 24, title: "Specialist" }),
    Object.freeze({ minLevel: 25, maxLevel: 29, title: "Guardian" }),
    Object.freeze({ minLevel: 30, maxLevel: Number.POSITIVE_INFINITY, title: "Security Champion" }),
  ]);

  function getRankFromLevel(level) {
    const safeLevel = Math.max(1, Math.floor(Number(level) || 1));
    const matchedRank = RANK_BRACKETS.find((rank) => safeLevel >= rank.minLevel && safeLevel <= rank.maxLevel);
    return matchedRank ? matchedRank.title : "Security Champion";
  }

  function resolveQuizReviewPlayer(copy) {
    const fallbackName = copy.quizReviewPlayerName || "SnappinQuiz Player";
    // Mock profile identity is UI-only state from local storage.
    // Never use this for authorization decisions.
    const isLoggedIn = readMockStorageValue(MOCK_SESSION_STORAGE_KEY) === "1";
    if (!isLoggedIn) {
      return { name: fallbackName, initials: toInitials(fallbackName), avatarUrl: "", avatarPreset: "", profileLevel: null };
    }

    const role = readMockStorageValue(MOCK_ROLE_STORAGE_KEY);
    if (role === "admin") {
      return { name: "Admin User", initials: "AU", avatarUrl: "", avatarPreset: "", profileLevel: deriveProfileLevelFromName("Admin User") };
    }

    const rawAccount = readMockStorageValue(MOCK_ACCOUNT_STORAGE_KEY);
    if (rawAccount) {
      try {
        const parsed = JSON.parse(rawAccount);
        const resolvedName = String(parsed?.name || "").trim();
        if (resolvedName) {
          return {
            name: resolvedName,
            initials: toInitials(resolvedName),
            avatarUrl: sanitizeAvatarUrl(parsed?.avatarUrl),
            avatarPreset: sanitizeAvatarPreset(parsed?.avatarPreset),
            profileLevel: deriveProfileLevelFromName(resolvedName),
          };
        }
      } catch {
        // Ignore malformed account payloads and fallback to role-based/default identity.
      }
    }

    return { name: fallbackName, initials: toInitials(fallbackName), avatarUrl: "", avatarPreset: "", profileLevel: null };
  }

  function renderQuizReviewAvatar(avatarNode, avatarInitialsNode, playerProfile) {
    if (!avatarNode || !avatarInitialsNode || !playerProfile) {
      return;
    }

    const initials = playerProfile.initials || "SQ";
    const presetUrl = buildAvatarPresetDataUrl(playerProfile.avatarPreset);
    const safeAvatarUrl = playerProfile.avatarUrl;

    avatarNode.style.backgroundImage = "";
    avatarNode.style.backgroundSize = "";
    avatarNode.style.backgroundPosition = "";
    avatarNode.style.imageRendering = "";
    avatarInitialsNode.style.color = "";
    avatarInitialsNode.textContent = initials;

    if (presetUrl) {
      avatarNode.style.backgroundImage = `url("${presetUrl.replace(/"/g, "%22")}")`;
      avatarNode.style.backgroundSize = "cover";
      avatarNode.style.backgroundPosition = "center";
      avatarNode.style.imageRendering = "pixelated";
      avatarInitialsNode.style.color = "transparent";
      return;
    }

    if (!safeAvatarUrl || typeof Image !== "function") {
      return;
    }

    const probe = new Image();
    probe.decoding = "async";
    probe.onload = () => {
      avatarNode.style.backgroundImage = `url("${safeAvatarUrl.replace(/"/g, "%22")}")`;
      avatarNode.style.backgroundSize = "cover";
      avatarNode.style.backgroundPosition = "center";
      avatarNode.style.imageRendering = "";
      avatarInitialsNode.style.color = "transparent";
    };
    probe.onerror = () => {
      // Keep initials visible when external avatar loading fails.
    };
    probe.src = safeAvatarUrl;
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function getLocalePosition(pathname = window.location.pathname) {
    const segments = String(pathname || "/")
      .split("/")
      .filter(Boolean);
    const localeIndex = segments.findIndex((segment) => SUPPORTED_LOCALES.includes(segment.toLowerCase()));
    const routeIndex = segments.findIndex((segment) => KNOWN_ROUTE_SEGMENTS.has(segment.toLowerCase()));
    const basePrefixSegments =
      localeIndex >= 0 ? segments.slice(0, localeIndex) : routeIndex > 0 ? segments.slice(0, routeIndex) : [];
    if (localeIndex < 0) {
      return {
        locale: DEFAULT_LOCALE,
        localeIndex: -1,
        basePrefix: basePrefixSegments.length ? `/${basePrefixSegments.join("/")}` : "",
      };
    }

    return {
      locale: segments[localeIndex].toLowerCase(),
      localeIndex,
      basePrefix: basePrefixSegments.length ? `/${basePrefixSegments.join("/")}` : "",
    };
  }

  function detectLocale(pathname = window.location.pathname) {
    return getLocalePosition(pathname).locale;
  }

  function resolveLocalizedText(entry, locale) {
    return entry?.[locale] || entry?.[DEFAULT_LOCALE] || null;
  }

  function toLocalizedPath(route, locale, pathname = window.location.pathname) {
    const cleanRoute = String(route || "").replace(/^\/+/, "").replace(/\/+$/, "");
    const { localeIndex, basePrefix } = getLocalePosition(pathname);
    const resolvedLocale = SUPPORTED_LOCALES.includes(locale) ? locale : DEFAULT_LOCALE;
    const hasBaseHref = typeof document !== "undefined" && Boolean(document.querySelector("base[href]"));
    if (localeIndex < 0) {
      if (!cleanRoute) {
        return hasBaseHref ? "." : "/";
      }
      return hasBaseHref ? cleanRoute : `${basePrefix}/${cleanRoute}`;
    }
    if (!cleanRoute) {
      return `${basePrefix}/${resolvedLocale}`;
    }
    return `${basePrefix}/${resolvedLocale}/${cleanRoute}`;
  }

  function toChapterUrl(locale, courseSlug, topicId, chapterId) {
    const basePath = `${toLocalizedPath("courses/chapter", locale)}/`;
    const params = new URLSearchParams({ course: courseSlug, topic: topicId, chapter: chapterId });
    return `${basePath}?${params.toString()}`;
  }

  function toCourseUrl(locale, courseSlug) {
    return toLocalizedPath(`courses/${courseSlug}`, locale);
  }

  function toQuizIntroUrl(locale, courseSlug) {
    const basePath = `${toLocalizedPath("courses/quiz", locale)}/`;
    const params = new URLSearchParams({ course: courseSlug });
    return `${basePath}?${params.toString()}`;
  }

  function toQuizPlayUrl(locale, courseSlug, questionNumber = 1, fresh = false) {
    const basePath = `${toLocalizedPath("courses/quiz/play", locale)}/`;
    const params = new URLSearchParams({
      course: courseSlug,
      question: String(Math.max(1, Number(questionNumber) || 1)),
    });
    if (fresh) {
      params.set("fresh", "1");
    }
    return `${basePath}?${params.toString()}`;
  }

  function toQuizReviewUrl(locale, courseSlug) {
    const basePath = `${toLocalizedPath("courses/quiz/review", locale)}/`;
    const params = new URLSearchParams({ course: courseSlug });
    return `${basePath}?${params.toString()}`;
  }

  function formatDuration(minutes, locale) {
    return `${minutes} ${UI_COPY[locale]?.durationSuffix || UI_COPY[DEFAULT_LOCALE].durationSuffix}`;
  }

  function buildChapterList(locale) {
    const localizedTemplates = CHAPTER_TEMPLATES[locale] || CHAPTER_TEMPLATES[DEFAULT_LOCALE];
    return localizedTemplates.map((chapter, index) => ({
      id: `chapter-${index + 1}-${chapter.id}`,
      title: chapter.title,
    }));
  }

  function applyText(selector, value) {
    const element = document.querySelector(selector);
    if (element) {
      element.textContent = value;
    }
  }

  function resolveChapterIndex(requestedChapterId, chapterList) {
    if (!requestedChapterId) {
      return -1;
    }

    const exactIndex = chapterList.findIndex((chapter) => chapter.id === requestedChapterId);
    if (exactIndex >= 0) {
      return exactIndex;
    }

    // Keep chapter navigation robust for legacy or cross-locale chapter IDs (chapter-N-...).
    const chapterNumberMatch = requestedChapterId.match(/^chapter-(\d+)-/i);
    if (!chapterNumberMatch) {
      return -1;
    }

    const parsedIndex = Number.parseInt(chapterNumberMatch[1], 10) - 1;
    if (!Number.isFinite(parsedIndex) || parsedIndex < 0 || parsedIndex >= chapterList.length) {
      return -1;
    }

    return parsedIndex;
  }

  function renderTopicsState(topicsRoot, message, tone = "neutral") {
    const toneClass = tone === "error" ? "text-red-300" : "text-gray-300";
    topicsRoot.innerHTML = `<li class="content-library-card rounded-2xl px-5 py-4 text-sm ${toneClass}" role="status">${escapeHtml(message)}</li>`;
  }

  function renderCourseTopicsPage() {
    const topicsRoot = document.querySelector("[data-course-topics]");
    if (!topicsRoot) {
      return;
    }

    const locale = detectLocale();
    const copy = UI_COPY[locale] || UI_COPY[DEFAULT_LOCALE];
    const expandAllButton = document.querySelector("[data-course-expand-all]");
    const expandAllLabel = expandAllButton?.querySelector("[data-course-expand-all-label]");
    const expandAllChevron = expandAllButton?.querySelector("[data-course-expand-all-chevron]");
    const setExpandAllState = (expanded) => {
      if (!expandAllButton) return;
      expandAllButton.setAttribute("aria-expanded", String(expanded));
      if (expandAllLabel) expandAllLabel.textContent = expanded ? copy.topicsCollapseAll : copy.topicsExpandAll;
      expandAllButton.setAttribute("aria-label", expanded ? copy.topicsCollapseAll : copy.topicsExpandAll);
      if (expandAllChevron) expandAllChevron.classList.toggle("rotate-180", expanded);
    };
    setExpandAllState(false);
    topicsRoot.setAttribute("aria-live", "polite");
    topicsRoot.setAttribute("aria-busy", "true");
    renderTopicsState(topicsRoot, copy.topicsLoading);

    const courseSlug = document.body?.dataset?.courseSlug;
    const course = COURSE_LIBRARY[courseSlug];
    if (!course) {
      applyText("[data-course-topics-count]", `0 ${copy.topicsCountSuffix}`);
      applyText("[data-course-total-duration]", formatDuration(0, locale));
      topicsRoot.setAttribute("aria-busy", "false");
      renderTopicsState(topicsRoot, copy.topicsError, "error");
      if (expandAllButton) expandAllButton.disabled = true;
      return;
    }

    const chapterList = buildChapterList(locale);
    const courseText = resolveLocalizedText(course, locale);
    const resolvedTopics = course.topics
      .map((topicRef) => {
        const topic = TOPIC_LIBRARY[topicRef.id];
        const topicText = resolveLocalizedText(topic, locale);
        if (!topic || !topicText) {
          return null;
        }
        return { ...topicRef, topicText };
      })
      .filter(Boolean);
    const totalMinutes = resolvedTopics.reduce((sum, topicRef) => sum + topicRef.minutes, 0);

    applyText("[data-course-topics-heading]", copy.topicsHeading);
    applyText("[data-course-topics-count]", `${resolvedTopics.length} ${copy.topicsCountSuffix}`);
    applyText("[data-course-total-duration]", formatDuration(totalMinutes, locale));
    applyText("[data-course-runtime-title]", courseText?.title || "");
    applyText("[data-course-runtime-description]", courseText?.description || "");

    if (!resolvedTopics.length || !chapterList.length) {
      topicsRoot.setAttribute("aria-busy", "false");
      renderTopicsState(topicsRoot, copy.topicsEmpty);
      if (expandAllButton) expandAllButton.disabled = true;
      return;
    }

    topicsRoot.innerHTML = resolvedTopics
      .map((topicRef, topicIndex) => {
        const firstChapter = chapterList[0];
        const firstChapterUrl = toChapterUrl(locale, courseSlug, topicRef.id, firstChapter.id);
        const chaptersMarkup = chapterList
          .map(
            (chapter, chapterIndex) => `
            <li>
              <a
                data-course-chapter-link
                href="${escapeHtml(toChapterUrl(locale, courseSlug, topicRef.id, chapter.id))}"
                class="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-left transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400"
              >
                <span class="font-mono text-xs text-primary-300 mt-0.5">${escapeHtml(String(chapterIndex + 1).padStart(2, "0"))}</span>
                <span class="text-sm font-medium text-white">${escapeHtml(chapter.title)}</span>
              </a>
            </li>`
          )
          .join("");

        return `
          <li data-course-topic-item class="content-library-card rounded-2xl overflow-hidden">
            <details class="group">
              <summary class="list-none cursor-pointer px-5 py-4 transition-colors duration-200 hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400">
                <div class="flex flex-wrap items-start gap-4">
                  <span class="font-mono text-xs text-primary-300 mt-1">${escapeHtml(String(topicIndex + 1).padStart(2, "0"))}</span>
                  <div class="min-w-0 flex-1">
                    <h3 class="text-lg font-semibold text-white transition-colors group-hover:text-primary-300">${escapeHtml(topicRef.topicText.title)}</h3>
                    <p class="text-sm text-gray-400 mt-1">${escapeHtml(topicRef.topicText.summary)}</p>
                  </div>
                  <div class="ml-auto flex shrink-0 flex-col items-end gap-1 text-xs text-gray-400 sm:whitespace-nowrap">
                    <span>${escapeHtml(formatDuration(topicRef.minutes, locale))}</span>
                    <span class="text-primary-300">${escapeHtml(String(chapterList.length))} ${escapeHtml(copy.chapterCountSuffix)}</span>
                  </div>
                  <span
                    aria-hidden="true"
                    class="ml-1 inline-block shrink-0 self-center font-pixel text-micro leading-none text-primary-300 transition-transform duration-200 motion-reduce:transition-none group-open:rotate-180 motion-reduce:group-open:rotate-0"
                  >V</span>
                </div>
              </summary>
              <div class="px-5 pb-5">
                <div class="border-t border-white/10 pt-4">
                  <div class="mb-3 flex flex-wrap items-center gap-2">
                    <span class="text-xs uppercase tracking-[0.14em] text-gray-400">${escapeHtml(copy.chapterListAriaLabel)}</span>
                  </div>
                  <ul aria-label="${escapeHtml(copy.chapterListAriaLabel)}" class="space-y-2">
                    ${chaptersMarkup}
                  </ul>
                  <div class="mt-4 flex justify-end">
                    <a
                      data-course-topic-start
                      href="${escapeHtml(firstChapterUrl)}"
                      class="inline-flex min-h-11 items-center rounded-xl border border-primary-500/35 bg-primary-500/12 px-4 py-2 text-sm font-semibold text-primary-200 transition-colors hover:bg-primary-500/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400"
                    >${escapeHtml(copy.topicStart)}</a>
                  </div>
                </div>
              </div>
            </details>
          </li>`;
      })
      .join("");

    topicsRoot.setAttribute("aria-busy", "false");

    const detailItems = [...topicsRoot.querySelectorAll("[data-course-topic-item] > details")];
    const syncExpandAllState = () => {
      setExpandAllState(detailItems.length > 0 && detailItems.every((item) => item.open));
    };
    detailItems.forEach((item) => {
      item.addEventListener("toggle", syncExpandAllState);
    });
    if (expandAllButton) {
      expandAllButton.disabled = detailItems.length === 0;
      expandAllButton.onclick = () => {
        const nextExpanded = !detailItems.every((item) => item.open);
        detailItems.forEach((item) => {
          item.open = nextExpanded;
        });
        setExpandAllState(nextExpanded);
      };
    }
    syncExpandAllState();
  }

  function renderCourseDetailQuizSection() {
    const quizSection = document.querySelector("[data-course-quiz-section]");
    if (!quizSection) {
      return;
    }

    const quizStartButton = document.querySelector("[data-course-quiz-start]");
    const certificateButton = document.querySelector("[data-course-certificate-download]");
    if (!quizStartButton) {
      return;
    }

    const locale = detectLocale();
    const copy = UI_COPY[locale] || UI_COPY[DEFAULT_LOCALE];
    const courseSlug = document.body?.dataset?.courseSlug;
    const course = COURSE_LIBRARY[courseSlug];
    const quiz = QUIZ_LIBRARY[courseSlug];
    if (!course || !quiz) {
      quizStartButton.setAttribute("data-course-quiz-state", "default");
      if (certificateButton) {
        certificateButton.classList.add("hidden");
        certificateButton.setAttribute("aria-hidden", "true");
      }
      return;
    }

    const questions = buildQuizQuestions(courseSlug, locale);
    const sessionStorageKey = getQuizSessionStorageKey(courseSlug);
    const passedStorageKey = getQuizPassedStorageKey(courseSlug);
    const quizSession = readQuizSession(sessionStorageKey);
    const hasCompletedSession = hasCompletedQuizSession(quizSession);
    const hasPassedLatestSession = hasCompletedSession && buildQuizReviewResult(quiz, questions, quizSession).passed;
    writeQuizPassedState(passedStorageKey, hasPassedLatestSession);
    const hasPassedQuiz = hasPassedLatestSession || readQuizPassedState(passedStorageKey);
    const quizState = hasPassedQuiz ? "passed" : hasCompletedSession ? "retry" : "default";

    quizStartButton.textContent = hasPassedQuiz ? copy.quizStartPassed : hasCompletedSession ? copy.quizStartRetake : copy.quizStart;
    quizStartButton.setAttribute("data-course-quiz-state", quizState);

    if (certificateButton) {
      certificateButton.textContent = copy.courseCertificateDownload;
      certificateButton.classList.toggle("hidden", !hasPassedQuiz);
      certificateButton.setAttribute("aria-hidden", String(!hasPassedQuiz));
      certificateButton.disabled = true;
      certificateButton.setAttribute("aria-disabled", "true");
    }
  }

  function setLinkState(linkElement, enabled, text, href, keepDisabledFocusable = false) {
    if (!linkElement) {
      return;
    }

    linkElement.textContent = text;
    if (enabled) {
      linkElement.href = href;
      linkElement.removeAttribute("aria-disabled");
      linkElement.removeAttribute("tabindex");
      linkElement.classList.remove("pointer-events-none", "opacity-60", "cursor-not-allowed", "saturate-50");
      return;
    }

    linkElement.removeAttribute("href");
    linkElement.setAttribute("aria-disabled", "true");
    linkElement.setAttribute("tabindex", keepDisabledFocusable ? "0" : "-1");
    linkElement.classList.add("pointer-events-none", "opacity-60", "cursor-not-allowed", "saturate-50");
  }

  function renderChapterPage() {
    const chapterPageRoot = document.querySelector("[data-course-chapter-page]");
    if (!chapterPageRoot) {
      return;
    }

    const locale = detectLocale();
    const copy = UI_COPY[locale] || UI_COPY[DEFAULT_LOCALE];
    const chapterList = buildChapterList(locale);
    const params = new URLSearchParams(window.location.search);

    const requestedCourseSlug = params.get("course");
    const hasCourseParam = Boolean(requestedCourseSlug);
    const isValidCourse = hasCourseParam ? Boolean(COURSE_LIBRARY[requestedCourseSlug]) : true;
    const courseSlug = isValidCourse && requestedCourseSlug ? requestedCourseSlug : Object.keys(COURSE_LIBRARY)[0];
    const course = COURSE_LIBRARY[courseSlug];
    const courseText = resolveLocalizedText(course, locale);

    const requestedTopicId = params.get("topic");
    const hasTopicParam = Boolean(requestedTopicId);
    const topicRef = course.topics.find((entry) => entry.id === requestedTopicId) || course.topics[0];
    const isValidTopic = hasTopicParam ? course.topics.some((entry) => entry.id === requestedTopicId) : true;
    const topicText = resolveLocalizedText(TOPIC_LIBRARY[topicRef.id], locale);

    const requestedChapterId = params.get("chapter");
    const hasChapterParam = Boolean(requestedChapterId);
    const chapterIndex = resolveChapterIndex(requestedChapterId, chapterList);
    const safeChapterIndex = chapterIndex >= 0 ? chapterIndex : 0;
    const isValidChapter = hasChapterParam ? chapterIndex >= 0 : true;
    const chapter = chapterList[safeChapterIndex];
    const isInvalidRequest = !isValidCourse || !isValidTopic || !isValidChapter;

    applyText("[data-course-title]", courseText?.title || "");
    applyText("[data-course-description]", courseText?.description || "");
    applyText("[data-course-topic-title]", topicText?.title || "");
    applyText("[data-course-chapter-label]", copy.chapterLabel);

    const backLink = document.querySelector("[data-course-back-link]");
    if (backLink) {
      backLink.textContent = copy.backToCourse;
      backLink.href = toCourseUrl(locale, courseSlug);
    }

    const prevLink = document.querySelector("[data-course-prev-link]");
    const nextLink = document.querySelector("[data-course-next-link]");
    const content = document.querySelector("[data-course-chapter-content]");

    if (isInvalidRequest) {
      applyText("[data-course-chapter-title]", copy.chapterErrorTitle);
      applyText("[data-course-chapter-lead]", copy.chapterErrorBody);
      applyText("[data-course-chapter-progress]", "-");
      if (content) {
        content.innerHTML = `<p class="text-base leading-8 text-gray-300">${escapeHtml(copy.chapterErrorBody)}</p>`;
      }
      document.title = `SnappinQuiz - ${copy.chapterErrorTitle}`;
      setLinkState(prevLink, false, copy.previousChapter, "");
      setLinkState(nextLink, false, copy.nextChapter, "");
      return;
    }

    applyText("[data-course-chapter-title]", chapter.title || "");
    applyText("[data-course-chapter-lead]", copy.chapterLead);
    applyText(
      "[data-course-chapter-progress]",
      copy.chapterProgress.replace("{current}", String(safeChapterIndex + 1)).replace("{total}", String(chapterList.length))
    );

    if (content) {
      const paragraphOne =
        locale === "en"
          ? `This section applies ${topicText?.title?.toLowerCase() || "the lesson topic"} to realistic work situations and shows how to make secure decisions without slowing down your team.`
          : `Dieser Abschnitt überträgt ${topicText?.title?.toLowerCase() || "das Thema"} in realistische Arbeitssituationen und zeigt, wie Sie sichere Entscheidungen treffen, ohne das Team auszubremsen.`;
      content.innerHTML = `
        <p class="text-base leading-8 text-gray-300">${escapeHtml(paragraphOne)}</p>
        <p class="text-base leading-8 text-gray-300">${escapeHtml(copy.paragraphTwo)}</p>`;
    }

    const pageTitlePrefix = courseText?.title || "SnappinQuiz";
    document.title = `${pageTitlePrefix} - ${chapter.title}`;

    const hasPrev = safeChapterIndex > 0;
    const hasNext = safeChapterIndex < chapterList.length - 1;
    const prevChapter = hasPrev ? chapterList[safeChapterIndex - 1] : null;
    const nextChapter = hasNext ? chapterList[safeChapterIndex + 1] : null;

    setLinkState(prevLink, hasPrev, copy.previousChapter, hasPrev ? toChapterUrl(locale, courseSlug, topicRef.id, prevChapter.id) : "");
    setLinkState(nextLink, hasNext, copy.nextChapter, hasNext ? toChapterUrl(locale, courseSlug, topicRef.id, nextChapter.id) : "");
  }

  function renderQuizIntroPage() {
    const quizPageRoot = document.querySelector("[data-course-quiz-page]");
    if (!quizPageRoot) {
      return;
    }

    const locale = detectLocale();
    const copy = UI_COPY[locale] || UI_COPY[DEFAULT_LOCALE];
    const params = new URLSearchParams(window.location.search);

    const requestedCourseSlug = (params.get("course") || "").trim();
    const hasCourseParam = Boolean(requestedCourseSlug);
    const isValidCourse = hasCourseParam && Boolean(COURSE_LIBRARY[requestedCourseSlug] && QUIZ_LIBRARY[requestedCourseSlug]);
    const fallbackCourseSlug = Object.keys(QUIZ_LIBRARY)[0];
    const courseSlug = isValidCourse ? requestedCourseSlug : fallbackCourseSlug;
    const course = COURSE_LIBRARY[courseSlug];
    const courseText = resolveLocalizedText(course, locale);
    const quiz = QUIZ_LIBRARY[courseSlug];
    const quizText = resolveLocalizedText(quiz, locale);
    const isInvalidRequest = !isValidCourse || !quiz || !quizText;

    const titleNode = document.querySelector("[data-course-quiz-title]");
    const eyebrowNode = document.querySelector("[data-course-quiz-eyebrow]");
    const highlightsTitleNode = document.querySelector("[data-course-quiz-highlights-title]");
    const introNode = document.querySelector("[data-course-quiz-intro]");
    const metaNode = document.querySelector("[data-course-quiz-meta]");
    const statusNode = document.querySelector("[data-course-quiz-status]");
    const backLink = document.querySelector("[data-course-quiz-back-link]");
    const startButton = document.querySelector("[data-course-quiz-start-button]");

    if (backLink) {
      backLink.textContent = copy.quizBack;
      backLink.href = isValidCourse ? toCourseUrl(locale, courseSlug) : toLocalizedPath("courses", locale);
      backLink.addEventListener("click", (event) => {
        let referrerOrigin = "";
        try {
          referrerOrigin = document.referrer ? new URL(document.referrer).origin : "";
        } catch {
          referrerOrigin = "";
        }
        if (window.history.length > 1 && referrerOrigin === window.location.origin) {
          event.preventDefault();
          window.history.back();
        }
      });
    }

    if (startButton) {
      startButton.textContent = copy.quizStart;
      startButton.removeAttribute("disabled");
      startButton.removeAttribute("aria-disabled");
    }
    if (eyebrowNode) {
      eyebrowNode.textContent = copy.quizIntroEyebrow;
    }
    if (highlightsTitleNode) {
      highlightsTitleNode.textContent = copy.quizIntroHighlightsTitle;
    }
    if (statusNode) {
      statusNode.textContent = copy.quizStartHint;
      statusNode.classList.remove("text-red-300");
      statusNode.classList.add("text-gray-400");
    }

    if (isInvalidRequest) {
      if (titleNode) {
        titleNode.textContent = copy.quizErrorTitle;
      }
      if (introNode) {
        introNode.textContent = copy.quizErrorBody;
        introNode.classList.remove("text-gray-300");
        introNode.classList.add("text-red-300");
      }
      if (metaNode) {
        metaNode.innerHTML = "";
      }
      if (statusNode) {
        statusNode.textContent = copy.quizErrorHint;
        statusNode.classList.remove("text-gray-400");
        statusNode.classList.add("text-red-300");
      }
      setLinkState(startButton, false, copy.quizStart, "");
      document.title = `SnappinQuiz - ${copy.quizErrorTitle}`;
      return;
    }

    if (titleNode) {
      titleNode.textContent = quizText.title || copy.quizErrorTitle;
    }
    if (introNode) {
      introNode.textContent = quizText.intro || copy.quizIntroFallback;
      introNode.classList.remove("text-red-300");
      introNode.classList.add("text-gray-300");
    }
    if (metaNode) {
      const iconMarkup = {
        questions:
          '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 6h11M9 12h11M9 18h11M5 6h.01M5 12h.01M5 18h.01"/>',
        duration:
          '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>',
        pass:
          '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>',
        evaluation:
          '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4V7m3 10V9M4 19h16"/>',
      };
      const metaItems = [
        {
          label: copy.quizMetaQuestionsLabel,
          value: String(quiz.questions),
          iconBgClass: "bg-primary-500/20",
          iconToneClass: "text-primary-400",
          iconPath: iconMarkup.questions,
        },
        {
          label: copy.quizMetaDurationLabel,
          value: `${String(quiz.minutes)} ${copy.durationSuffix}`,
          iconBgClass: "bg-cyber-blue/20",
          iconToneClass: "text-cyber-blue",
          iconPath: iconMarkup.duration,
        },
        {
          label: copy.quizPassLabel,
          value: `${String(quiz.requiredCorrect)} ${copy.quizPassSuffix}`,
          iconBgClass: "bg-cyber-green/20",
          iconToneClass: "text-cyber-green",
          iconPath: iconMarkup.pass,
        },
        {
          label: copy.quizMetaEvaluationLabel,
          value: copy.quizMetaEvaluationValue,
          iconBgClass: "bg-accent-500/20",
          iconToneClass: "text-accent-400",
          iconPath: iconMarkup.evaluation,
        },
      ];
      metaNode.innerHTML = metaItems
        .map(
          (item) => `
            <li class="sq-feature-box" data-course-quiz-meta-item>
              <span class="sq-feature-icon-wrap ${escapeHtml(item.iconBgClass)}" data-course-quiz-meta-icon-wrap>
                <svg class="sq-feature-icon ${escapeHtml(item.iconToneClass)}" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false" data-course-quiz-meta-icon>
                  ${item.iconPath}
                </svg>
              </span>
              <p class="sq-feature-title">${escapeHtml(item.label)}</p>
              <p class="sq-feature-value text-primary-300">${escapeHtml(item.value)}</p>
            </li>`
        )
        .join("");
    }
    setLinkState(startButton, true, copy.quizStart, toQuizPlayUrl(locale, courseSlug, 1, true));

    const pageTitlePrefix = courseText?.title || "SnappinQuiz";
    document.title = `${pageTitlePrefix} - ${quizText.title}`;
  }

  function getQuizSessionStorageKey(courseSlug) {
    return `snappinquiz:quiz-session:${courseSlug}`;
  }

  function readQuizSession(storageKey) {
    try {
      // Treat storage as untrusted UI state. Never use it for authorization or compliance decisions.
      const raw = window.sessionStorage.getItem(storageKey);
      if (!raw) {
        return null;
      }
      const parsed = JSON.parse(raw);
      if (!parsed || typeof parsed !== "object") {
        return null;
      }
      return parsed;
    } catch {
      return null;
    }
  }

  function writeQuizSession(storageKey, value) {
    try {
      window.sessionStorage.setItem(storageKey, JSON.stringify(value));
    } catch {
      // Ignore storage write errors so quiz navigation still works.
    }
  }

  function getQuizPassedStorageKey(courseSlug) {
    return `snappinquiz:quiz-passed:${courseSlug}`;
  }

  function readQuizPassedState(storageKey) {
    try {
      return window.localStorage.getItem(storageKey) === "true";
    } catch {
      return false;
    }
  }

  function writeQuizPassedState(storageKey, isPassed) {
    try {
      if (isPassed) {
        window.localStorage.setItem(storageKey, "true");
      }
    } catch {
      // Ignore storage write errors so course detail state still renders.
    }
  }

  function formatCountdown(milliseconds) {
    const totalSeconds = Math.max(0, Math.ceil(milliseconds / 1000));
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }

  function normalizeAnswerSet(values) {
    if (!Array.isArray(values)) {
      return [];
    }
    return Array.from(new Set(values.filter(Boolean))).sort();
  }

  function sanitizeQuizOptionImageUrl(rawUrl) {
    const value = typeof rawUrl === "string" ? rawUrl.trim() : "";
    if (!value) {
      return "";
    }
    if (/^(javascript|data|vbscript|file):/i.test(value)) {
      return "";
    }
    if (/^\/assets\/images\/[a-z0-9/_-]+\.(png|jpe?g|webp|gif)$/i.test(value)) {
      return value;
    }
    if (/^assets\/images\/[a-z0-9/_-]+\.(png|jpe?g|webp|gif)$/i.test(value)) {
      return `/${value}`;
    }

    try {
      const parsedUrl = new URL(value, window?.location?.href || "https://snappinquiz.local/");
      const isSameOrigin = parsedUrl.origin === (window?.location?.origin || "");
      if (!isSameOrigin) {
        return "";
      }
      if (!/^\/assets\/images\/[a-z0-9/_-]+\.(png|jpe?g|webp|gif)$/i.test(parsedUrl.pathname)) {
        return "";
      }
      return `${parsedUrl.pathname}${parsedUrl.search || ""}${parsedUrl.hash || ""}`;
    } catch {
      return "";
    }
  }

  function areAnswerSetsEqual(left, right) {
    const normalizedLeft = normalizeAnswerSet(left);
    const normalizedRight = normalizeAnswerSet(right);
    if (normalizedLeft.length !== normalizedRight.length) {
      return false;
    }
    return normalizedLeft.every((value, index) => value === normalizedRight[index]);
  }

  function isQuestionAnsweredCorrectly(question, selectedAnswers) {
    const expectedAnswers = normalizeAnswerSet(question?.correctAnswers);
    const actualAnswers = normalizeAnswerSet(selectedAnswers);
    if (!expectedAnswers.length) {
      return false;
    }
    if (expectedAnswers.length !== actualAnswers.length) {
      return false;
    }
    return expectedAnswers.every((answer, index) => answer === actualAnswers[index]);
  }

  function countCorrectAnswers(questions, answersByQuestion) {
    return questions.reduce((count, question) => {
      const selectedAnswers = answersByQuestion?.[question.id];
      if (!isQuestionAnsweredCorrectly(question, selectedAnswers)) {
        return count;
      }
      return count + 1;
    }, 0);
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
    return {
      level,
      currentXp,
      xpRequired,
      nextLevel: level + 1,
      progressPercent: Math.min(100, Math.max(0, Math.round((currentXp / xpRequired) * 100))),
      remainingXp: Math.max(0, xpRequired - currentXp),
    };
  }

  function sanitizeQuestionAttempts(questions, attemptsByQuestion) {
    if (!attemptsByQuestion || typeof attemptsByQuestion !== "object" || Array.isArray(attemptsByQuestion)) {
      return {};
    }
    const validQuestionIds = new Set(questions.map((question) => question.id));
    const safeAttempts = {};
    for (const [questionId, attemptCount] of Object.entries(attemptsByQuestion)) {
      if (!validQuestionIds.has(questionId)) continue;
      const safeValue = Math.max(0, Math.floor(Number(attemptCount) || 0));
      if (safeValue > 0) {
        safeAttempts[questionId] = safeValue;
      }
    }
    return safeAttempts;
  }

  function sanitizeAwardedQuestionXp(questions, awardedQuestionXp) {
    if (!awardedQuestionXp || typeof awardedQuestionXp !== "object" || Array.isArray(awardedQuestionXp)) {
      return {};
    }
    const validQuestionIds = new Set(questions.map((question) => question.id));
    const maxQuestionRewardXp =
      QUIZ_XP_REWARDS.correctAnswer +
      QUIZ_XP_REWARDS.firstTryBonus +
      QUIZ_XP_REWARDS.difficultCorrectBonus +
      QUIZ_XP_REWARDS.scenarioCorrectBonus;
    const safeAwarded = {};
    for (const [questionId, xpValue] of Object.entries(awardedQuestionXp)) {
      if (!validQuestionIds.has(questionId)) continue;
      const safeValue = Math.min(maxQuestionRewardXp, Math.max(0, Math.floor(Number(xpValue) || 0)));
      if (safeValue > 0) {
        safeAwarded[questionId] = safeValue;
      }
    }
    return safeAwarded;
  }

  function sanitizeAwardedCompletionBonuses(bonusState) {
    const safeState =
      bonusState && typeof bonusState === "object" && !Array.isArray(bonusState)
        ? bonusState
        : {};
    const safeAmount = (value) => Math.max(0, Math.floor(Number(value) || 0));
    return {
      quizCompleted: Math.min(QUIZ_XP_REWARDS.quizCompleted, safeAmount(safeState.quizCompleted)),
      score80: Math.min(QUIZ_XP_REWARDS.score80Bonus, safeAmount(safeState.score80)),
      perfectScore: Math.min(QUIZ_XP_REWARDS.perfectScoreBonus, safeAmount(safeState.perfectScore)),
      noHintsUsed: Math.min(QUIZ_XP_REWARDS.noHintsBonus, safeAmount(safeState.noHintsUsed)),
      targetTime: Math.min(QUIZ_XP_REWARDS.targetTimeBonus, safeAmount(safeState.targetTime)),
      lessonCompleted: Math.min(QUIZ_XP_REWARDS.lessonCompleted, safeAmount(safeState.lessonCompleted)),
      courseCompleted: Math.min(QUIZ_XP_REWARDS.courseCompleted, safeAmount(safeState.courseCompleted)),
      certificateEarned: Math.min(QUIZ_XP_REWARDS.certificateEarned, safeAmount(safeState.certificateEarned)),
    };
  }

  function getQuestionAttemptCount(quizSession, questionId, selectedAnswers = []) {
    const storedAttemptCount = Math.max(0, Math.floor(Number(quizSession?.questionAttempts?.[questionId]) || 0));
    if (storedAttemptCount > 0) {
      return storedAttemptCount;
    }
    return normalizeAnswerSet(selectedAnswers).length > 0 ? 1 : 0;
  }

  function evaluateQuestionReward(question, submittedAnswers, context = {}) {
    const isCorrect = isQuestionAnsweredCorrectly(question, submittedAnswers);
    if (!isCorrect) {
      return { xp: 0, isCorrect: false };
    }
    let xp = QUIZ_XP_REWARDS.correctAnswer;
    if ((Number(context.attemptCount) || 0) <= 1) {
      xp += QUIZ_XP_REWARDS.firstTryBonus;
    }
    if (Boolean(question?.rewardMeta?.isDifficult)) {
      xp += QUIZ_XP_REWARDS.difficultCorrectBonus;
    }
    if (Boolean(question?.rewardMeta?.isScenario)) {
      xp += QUIZ_XP_REWARDS.scenarioCorrectBonus;
    }
    return { xp, isCorrect: true };
  }

  function calculateQuizCompletionBonus(quiz, questions, quizSession, result = null) {
    const calculatedResult = result || {
      correctAnswers: countCorrectAnswers(questions, quizSession?.answers || {}),
      totalQuestions: questions.length,
      timeInvestedMs: Math.max(0, (Number(quizSession?.completedAt) || Date.now()) - (Number(quizSession?.startedAt) || Date.now())),
    };
    const totalQuestions = Math.max(0, Number(calculatedResult.totalQuestions) || 0);
    const correctAnswers = Math.max(0, Number(calculatedResult.correctAnswers) || 0);
    const scorePercent = totalQuestions > 0 ? Math.round((correctAnswers / totalQuestions) * 100) : 0;
    const hintsUsed = Math.max(0, Math.floor(Number(quizSession?.hintsUsed) || 0));
    const targetTimeMs = Math.round((Number(quiz?.minutes) || 0) * 60 * 1000 * 0.75);
    const completedUnderTargetTime = targetTimeMs > 0 && calculatedResult.timeInvestedMs <= targetTimeMs;
    const hasCorrectPerformance = scorePercent >= 80;

    return {
      quizCompleted: QUIZ_XP_REWARDS.quizCompleted,
      score80: scorePercent >= 80 ? QUIZ_XP_REWARDS.score80Bonus : 0,
      perfectScore: scorePercent === 100 ? QUIZ_XP_REWARDS.perfectScoreBonus : 0,
      noHintsUsed: hintsUsed === 0 ? QUIZ_XP_REWARDS.noHintsBonus : 0,
      targetTime: completedUnderTargetTime && hasCorrectPerformance ? QUIZ_XP_REWARDS.targetTimeBonus : 0,
      lessonCompleted: 0,
      courseCompleted: 0,
      certificateEarned: 0,
    };
  }

  function getCompletionBonusTotal(awardedCompletionBonuses) {
    const safeBonuses = awardedCompletionBonuses || {};
    return Object.values(safeBonuses).reduce((sum, value) => sum + Math.max(0, Math.floor(Number(value) || 0)), 0);
  }

  function calculateQuestionXpMapFromAnswers(questions, quizSession) {
    const questionXpMap = {};
    for (const question of questions) {
      if (!question?.id) continue;
      const selectedAnswers = quizSession?.answers?.[question.id];
      const attemptCount = getQuestionAttemptCount(quizSession, question.id, selectedAnswers);
      const reward = evaluateQuestionReward(question, selectedAnswers, { attemptCount });
      const safeXp = Math.max(0, Math.floor(Number(reward.xp) || 0));
      if (safeXp > 0) {
        questionXpMap[question.id] = safeXp;
      }
    }
    return questionXpMap;
  }

  function getQuizEarnedXpBreakdown(quiz, questions, quizSession, result = null) {
    const committedQuestionXpMap = sanitizeAwardedQuestionXp(questions, quizSession?.awardedQuestionXp);
    const fallbackQuestionXpMap = calculateQuestionXpMapFromAnswers(questions, quizSession);
    const questionIds = new Set([
      ...Object.keys(fallbackQuestionXpMap),
      ...Object.keys(committedQuestionXpMap),
    ]);
    const questionXp = Array.from(questionIds).reduce((sum, questionId) => {
      const committedXp = Math.max(0, Math.floor(Number(committedQuestionXpMap[questionId]) || 0));
      const fallbackXp = Math.max(0, Math.floor(Number(fallbackQuestionXpMap[questionId]) || 0));
      return sum + (committedXp > 0 ? committedXp : fallbackXp);
    }, 0);

    const committedCompletionMap = sanitizeAwardedCompletionBonuses(quizSession?.awardedCompletionBonuses);
    const fallbackCompletion = calculateQuizCompletionBonus(quiz, questions, quizSession, result);
    const completionBonusKeys = new Set([
      ...Object.keys(fallbackCompletion),
      ...Object.keys(committedCompletionMap),
    ]);
    const completionXp = Array.from(completionBonusKeys).reduce((sum, bonusKey) => {
      const committedXp = Math.max(0, Math.floor(Number(committedCompletionMap[bonusKey]) || 0));
      const fallbackXp = Math.max(0, Math.floor(Number(fallbackCompletion[bonusKey]) || 0));
      return sum + (committedXp > 0 ? committedXp : fallbackXp);
    }, 0);

    return {
      questionXp,
      completionXp,
      totalXp: questionXp + completionXp,
    };
  }

  function getQuizDetailedXpBreakdown(quiz, questions, quizSession, result = null) {
    const committedCompletionMap = sanitizeAwardedCompletionBonuses(quizSession?.awardedCompletionBonuses);
    const fallbackCompletionMap = calculateQuizCompletionBonus(quiz, questions, quizSession, result);
    const answers = quizSession?.answers || {};

    let correctAnswersXp = 0;
    let firstTryXp = 0;
    let difficultXp = 0;
    let scenarioXp = 0;

    for (const question of questions) {
      if (!question?.id) continue;
      const selectedAnswers = answers?.[question.id];
      if (!Array.isArray(selectedAnswers) || !selectedAnswers.length) {
        continue;
      }
      const isCorrect = isQuestionAnsweredCorrectly(question, selectedAnswers);
      if (!isCorrect) {
        continue;
      }
      const attemptCount = getQuestionAttemptCount(quizSession, question.id, selectedAnswers);
      correctAnswersXp += QUIZ_XP_REWARDS.correctAnswer;
      if (attemptCount <= 1) {
        firstTryXp += QUIZ_XP_REWARDS.firstTryBonus;
      }
      if (Boolean(question?.rewardMeta?.isDifficult)) {
        difficultXp += QUIZ_XP_REWARDS.difficultCorrectBonus;
      }
      if (Boolean(question?.rewardMeta?.isScenario)) {
        scenarioXp += QUIZ_XP_REWARDS.scenarioCorrectBonus;
      }
    }

    const resolveCompletion = (key) => {
      const committed = Math.max(0, Math.floor(Number(committedCompletionMap[key]) || 0));
      const fallback = Math.max(0, Math.floor(Number(fallbackCompletionMap[key]) || 0));
      return committed > 0 ? committed : fallback;
    };

    return {
      correctAnswers: correctAnswersXp,
      firstTry: firstTryXp,
      difficult: difficultXp,
      scenario: scenarioXp,
      quizCompleted: resolveCompletion("quizCompleted"),
      score80: resolveCompletion("score80"),
      perfectScore: resolveCompletion("perfectScore"),
      noHintsUsed: resolveCompletion("noHintsUsed"),
      targetTime: resolveCompletion("targetTime"),
    };
  }

  function getQuizGrade(scorePercent) {
    const safePercent = Math.max(0, Math.min(100, Math.floor(Number(scorePercent) || 0)));
    if (safePercent >= 95) return "A+";
    if (safePercent >= 90) return "A";
    if (safePercent >= 80) return "B";
    if (safePercent >= 70) return "C";
    if (safePercent >= 60) return "D";
    return "E";
  }

  function formatElapsedDuration(milliseconds) {
    const totalSeconds = Math.max(0, Math.floor(milliseconds / 1000));
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }

  function buildQuizReviewResult(quiz, questions, quizSession) {
    const expiresAt = Number.isFinite(quizSession?.expiresAt) ? quizSession.expiresAt : Date.now();
    const quizDurationMs = Math.max(0, (Number(quiz?.minutes) || 0) * 60 * 1000);
    const startedAt = Number.isFinite(quizSession?.startedAt) ? quizSession.startedAt : Math.max(0, expiresAt - quizDurationMs);
    const completedAt = Number.isFinite(quizSession?.completedAt) ? quizSession.completedAt : Math.min(Date.now(), expiresAt);
    const boundedCompletedAt = Math.max(startedAt, Math.min(completedAt, expiresAt));
    const answers =
      quizSession?.answers && typeof quizSession.answers === "object" && !Array.isArray(quizSession.answers)
        ? quizSession.answers
        : {};
    const correctAnswers = countCorrectAnswers(questions, answers);
    const totalQuestions = questions.length;
    const requiredCorrect = Number(quiz?.requiredCorrect) || 0;

    return {
      timeInvestedMs: Math.max(0, boundedCompletedAt - startedAt),
      correctAnswers,
      totalQuestions,
      passed: correctAnswers >= requiredCorrect,
    };
  }

  function hasCompletedQuizSession(quizSession) {
    if (!quizSession || typeof quizSession !== "object") {
      return false;
    }
    if (quizSession.completionReason !== "submitted" && quizSession.completionReason !== "timeout") {
      return false;
    }
    return (
      Number.isFinite(quizSession.startedAt) &&
      Number.isFinite(quizSession.expiresAt) &&
      Number.isFinite(quizSession.completedAt)
    );
  }

  const QUIZ_SESSION_MAX_AGE_MS = 12 * 60 * 60 * 1000;
  const QUIZ_SESSION_MAX_ANSWERS_PER_QUESTION = 8;

  function createDefaultQuizSession(now, quizDurationMs) {
    return {
      startedAt: now,
      expiresAt: now + quizDurationMs,
      answers: {},
      questionAttempts: {},
      awardedQuestionXp: {},
      awardedCompletionBonuses: {},
      hintsUsed: 0,
      completedAt: null,
      completionReason: null,
    };
  }

  function sanitizeQuizAnswers(questions, answersByQuestion) {
    if (!answersByQuestion || typeof answersByQuestion !== "object" || Array.isArray(answersByQuestion)) {
      return {};
    }

    const allowedOptionIdsByQuestion = new Map(
      questions.map((question) => [question.id, new Set((question.options || []).map((option) => option.id))])
    );
    const safeAnswers = {};

    for (const [questionId, selectedValues] of Object.entries(answersByQuestion)) {
      const allowedOptions = allowedOptionIdsByQuestion.get(questionId);
      if (!allowedOptions || !Array.isArray(selectedValues)) {
        continue;
      }

      const safeValues = Array.from(
        new Set(
          selectedValues.filter(
            (value) => typeof value === "string" && value.length > 0 && allowedOptions.has(value)
          )
        )
      ).slice(0, QUIZ_SESSION_MAX_ANSWERS_PER_QUESTION);

      if (safeValues.length) {
        safeAnswers[questionId] = safeValues;
      }
    }

    return safeAnswers;
  }

  function buildSafeQuizSession(existingSession, now, quizDurationMs, questions) {
    const fallback = createDefaultQuizSession(now, quizDurationMs);
    if (!existingSession || typeof existingSession !== "object") {
      return fallback;
    }

    if (!Number.isFinite(existingSession.expiresAt) || Math.abs(existingSession.expiresAt - now) > QUIZ_SESSION_MAX_AGE_MS) {
      return fallback;
    }

    const expiresAt = existingSession.expiresAt;
    const earliestStart = expiresAt - quizDurationMs;
    const startedAtCandidate = Number.isFinite(existingSession.startedAt) ? existingSession.startedAt : earliestStart;
    const startedAt = Math.max(earliestStart, Math.min(startedAtCandidate, expiresAt));
    const completionReason =
      existingSession.completionReason === "submitted" || existingSession.completionReason === "timeout"
        ? existingSession.completionReason
        : null;
    const completedAt = Number.isFinite(existingSession.completedAt)
      ? Math.max(startedAt, Math.min(existingSession.completedAt, expiresAt))
      : null;

    return {
      startedAt,
      expiresAt,
      answers: sanitizeQuizAnswers(questions, existingSession.answers),
      questionAttempts: sanitizeQuestionAttempts(questions, existingSession.questionAttempts),
      awardedQuestionXp: sanitizeAwardedQuestionXp(questions, existingSession.awardedQuestionXp),
      awardedCompletionBonuses: sanitizeAwardedCompletionBonuses(existingSession.awardedCompletionBonuses),
      hintsUsed: Math.max(0, Math.floor(Number(existingSession.hintsUsed) || 0)),
      completedAt,
      completionReason,
    };
  }

  function renderQuizPlayPage() {
    const quizPlayRoot = document.querySelector("[data-course-quiz-play-page]");
    if (!quizPlayRoot) {
      return;
    }

    const locale = detectLocale();
    const copy = UI_COPY[locale] || UI_COPY[DEFAULT_LOCALE];
    const params = new URLSearchParams(window.location.search);
    const requestedCourseSlug = (params.get("course") || "").trim();
    const hasCourseParam = Boolean(requestedCourseSlug);
    const isValidCourse = hasCourseParam && Boolean(COURSE_LIBRARY[requestedCourseSlug] && QUIZ_LIBRARY[requestedCourseSlug]);
    const fallbackCourseSlug = Object.keys(QUIZ_LIBRARY)[0];
    const courseSlug = isValidCourse ? requestedCourseSlug : fallbackCourseSlug;
    const course = COURSE_LIBRARY[courseSlug];
    const courseText = resolveLocalizedText(course, locale);
    const quiz = QUIZ_LIBRARY[courseSlug];
    const quizText = resolveLocalizedText(quiz, locale);
    const questions = isValidCourse ? buildQuizQuestions(courseSlug, locale) : [];
    const isInvalidRequest = !isValidCourse || !quiz || !quizText || !questions.length;

    const titleNode = document.querySelector("[data-course-quiz-play-title]");
    const backLink = document.querySelector("[data-course-quiz-play-back-link]");
    const tabsNavNode = document.querySelector("[data-course-quiz-question-tabs-nav]");
    const tabsNode = document.querySelector("[data-course-quiz-question-tabs]");
    const tabsWindowLabelNode = document.querySelector("[data-course-quiz-question-window-label]");
    const timerPanelNode = document.querySelector("[data-course-quiz-status-panel]");
    const progressLabelNode = document.querySelector("[data-course-quiz-progress-label]");
    const progressPercentLabelNode = document.querySelector("[data-course-quiz-progress-percent-label]");
    const progressNode = document.querySelector("[data-course-quiz-play-progress]");
    const progressPercentNode = document.querySelector("[data-course-quiz-play-progress-percent]");
    const progressBarNode = document.querySelector("[data-course-quiz-play-progress-bar]");
    const progressBarFillNode = document.querySelector("[data-course-quiz-play-progress-bar-fill]");
    const passMarkerNode = document.querySelector("[data-course-quiz-play-pass-marker]");
    const remainingNode = document.querySelector("[data-course-quiz-remaining]");
    const milestoneChipNode = document.querySelector("[data-course-quiz-milestone-chip]");
    const milestoneTextNode = document.querySelector("[data-course-quiz-milestone-text]");
    const timerLabelNode = document.querySelector("[data-course-quiz-play-timer-label]");
    const timerNode = document.querySelector("[data-course-quiz-play-timer]");
    const questionTitleNode = document.querySelector("[data-course-quiz-question-title]");
    const questionHintNode = document.querySelector("[data-course-quiz-question-hint]");
    const optionsNode = document.querySelector("[data-course-quiz-answer-options]");
    const statusNode = document.querySelector("[data-course-quiz-play-status]");
    const prevLink = document.querySelector("[data-course-quiz-prev-question-link]");
    const nextLink = document.querySelector("[data-course-quiz-next-question-link]");
    const resultButton = document.querySelector("[data-course-quiz-result-button]");
    if (statusNode && !statusNode.id) {
      statusNode.id = "course-quiz-play-status";
    }

    if (backLink) {
      backLink.textContent = copy.quizBackToIntro;
      backLink.href = isValidCourse ? toQuizIntroUrl(locale, courseSlug) : toLocalizedPath("courses", locale);
    }
    if (timerLabelNode) {
      timerLabelNode.textContent = copy.quizTimerLabel;
    }
    if (timerPanelNode) {
      timerPanelNode.setAttribute("data-course-quiz-timer-state", "normal");
    }
    if (progressLabelNode) {
      progressLabelNode.textContent = copy.quizProgressLabel;
    }
    if (progressPercentLabelNode) {
      progressPercentLabelNode.textContent = copy.quizProgressPercentLabel;
    }
    if (progressBarNode) {
      progressBarNode.setAttribute("aria-label", copy.quizProgressPercentLabel);
      progressBarNode.setAttribute("aria-valuetext", `${copy.quizProgressPercentLabel}: 0%`);
    }
    if (tabsNavNode) {
      tabsNavNode.setAttribute("aria-label", copy.quizQuestionTabsLabel);
    }

    if (isInvalidRequest) {
      if (titleNode) {
        titleNode.textContent = copy.quizPlayErrorTitle;
      }
      if (tabsNode) {
        tabsNode.innerHTML = "";
      }
      if (tabsWindowLabelNode) {
        tabsWindowLabelNode.textContent = "";
      }
      if (questionTitleNode) {
        questionTitleNode.textContent = copy.quizPlayErrorTitle;
      }
      if (questionHintNode) {
        questionHintNode.textContent = copy.quizPlayErrorBody;
      }
      if (optionsNode) {
        optionsNode.innerHTML = "";
      }
      if (statusNode) {
        statusNode.textContent = copy.quizPlayErrorHint;
        statusNode.classList.remove("text-gray-400");
        statusNode.classList.add("text-red-300");
      }
      if (timerNode) {
        timerNode.textContent = "00:00";
      }
      if (progressNode) {
        progressNode.textContent = "--";
      }
      if (progressPercentNode) {
        progressPercentNode.textContent = "--%";
      }
      if (progressBarNode) {
        progressBarNode.setAttribute("aria-valuenow", "0");
        progressBarNode.setAttribute("aria-valuetext", `${copy.quizProgressPercentLabel}: 0%`);
      }
      if (progressBarFillNode) {
        progressBarFillNode.setAttribute("style", "width: 0%;");
      }
      setLinkState(prevLink, false, copy.quizPreviousQuestion, "");
      setLinkState(nextLink, false, copy.quizNextQuestion, "");
      if (resultButton) {
        resultButton.textContent = copy.quizResult;
        resultButton.setAttribute("disabled", "");
        resultButton.setAttribute("aria-disabled", "true");
      }
      document.title = `SnappinQuiz - ${copy.quizPlayErrorTitle}`;
      return;
    }

    let requestedQuestionNumber = Number.parseInt(params.get("question") || "1", 10);
    if (!Number.isFinite(requestedQuestionNumber)) {
      requestedQuestionNumber = 1;
    }
    const safeQuestionIndex = Math.min(Math.max(requestedQuestionNumber, 1), questions.length) - 1;
    const currentQuestion = questions[safeQuestionIndex];
    const questionNumber = safeQuestionIndex + 1;
    const totalQuestions = questions.length;
    const progressText = copy.quizProgressPattern
      .replace("{current}", String(questionNumber))
      .replace("{total}", String(totalQuestions));

    if (progressNode) {
      progressNode.textContent = progressText;
    }

    const requiredCorrect = Number(quiz.requiredCorrect) || 0;
    const passMarkerPercent = totalQuestions > 0 ? Math.round((requiredCorrect / totalQuestions) * 100) : 0;
    if (passMarkerNode) {
      passMarkerNode.style.left = `${passMarkerPercent}%`;
    }

    const storageKey = getQuizSessionStorageKey(courseSlug);
    const shouldResetSession = params.get("fresh") === "1";
    const existingSession = readQuizSession(storageKey);
    const now = Date.now();
    const quizDurationMs = quiz.minutes * 60 * 1000;
    const quizSession = shouldResetSession
      ? createDefaultQuizSession(now, quizDurationMs)
      : buildSafeQuizSession(existingSession, now, quizDurationMs, questions);

    if (!shouldResetSession && hasCompletedQuizSession(quizSession)) {
      writeQuizSession(storageKey, quizSession);
      window.location.assign(toQuizReviewUrl(locale, courseSlug));
      return;
    }

    writeQuizSession(storageKey, quizSession);

    let timerInterval = 0;
    let isFinishingQuiz = false;
    let removePopStateGuard = null;
    let removeAnchorGuard = null;

    const clearRuntimeListeners = () => {
      if (timerInterval) {
        window.clearInterval(timerInterval);
        timerInterval = 0;
      }
      if (typeof removePopStateGuard === "function") {
        removePopStateGuard();
        removePopStateGuard = null;
      }
      if (typeof removeAnchorGuard === "function") {
        removeAnchorGuard();
        removeAnchorGuard = null;
      }
    };

    const finishQuizAndGoToReview = (reason) => {
      if (isFinishingQuiz) {
        return;
      }
      isFinishingQuiz = true;
      reconcileQuestionRewards({ includeCurrentQuestion: true });
      clearRuntimeListeners();
      const finishedAt = reason === "timeout" ? quizSession.expiresAt : Date.now();
      const boundedFinishedAt = Math.max(quizSession.startedAt, Math.min(finishedAt, quizSession.expiresAt));
      quizSession.completedAt = boundedFinishedAt;
      quizSession.completionReason = reason;
      const completionResult = buildQuizReviewResult(quiz, questions, quizSession);
      applyCompletionBonusesOnce(completionResult);
      writeQuizSession(storageKey, quizSession);
      window.location.assign(toQuizReviewUrl(locale, courseSlug));
    };

    const confirmLeaveQuiz = () => {
      if (isFinishingQuiz) {
        return true;
      }
      return window.confirm(copy.quizLeaveConfirm);
    };

    const getSelectedAnswers = (questionId) => {
      const selected = quizSession.answers?.[questionId];
      if (!Array.isArray(selected)) {
        return [];
      }
      return selected;
    };

    const getAnsweredQuestionCount = () => {
      return questions.reduce((count, question) => {
        return count + (getSelectedAnswers(question.id).length > 0 ? 1 : 0);
      }, 0);
    };

    const reconcileQuestionRewards = (options = {}) => {
      const includeCurrentQuestion = Boolean(options.includeCurrentQuestion);
      let gainedXp = 0;
      for (const question of questions) {
        if (!question?.id) continue;
        if (!includeCurrentQuestion && question.id === currentQuestion.id) {
          continue;
        }
        if (Number(quizSession.awardedQuestionXp?.[question.id]) > 0) {
          continue;
        }
        const selectedAnswers = getSelectedAnswers(question.id);
        if (!selectedAnswers.length) {
          continue;
        }
        const attemptCount = getQuestionAttemptCount(quizSession, question.id, selectedAnswers);
        const reward = evaluateQuestionReward(question, selectedAnswers, { attemptCount });
        if ((Number(reward.xp) || 0) <= 0) {
          continue;
        }
        quizSession.awardedQuestionXp[question.id] = reward.xp;
        gainedXp += reward.xp;
      }
      if (gainedXp > 0) {
        writeQuizSession(storageKey, quizSession);
      }
      return gainedXp;
    };

    const applyCompletionBonusesOnce = (result = null) => {
      const completionRewards = calculateQuizCompletionBonus(quiz, questions, quizSession, result);
      const awardedFlags = quizSession.awardedCompletionBonuses || {};
      let gainedXp = 0;
      for (const [bonusKey, rewardValue] of Object.entries(completionRewards)) {
        if (awardedFlags[bonusKey] || (Number(rewardValue) || 0) <= 0) {
          continue;
        }
        awardedFlags[bonusKey] = rewardValue;
        gainedXp += rewardValue;
      }
      quizSession.awardedCompletionBonuses = awardedFlags;
      if (gainedXp > 0) {
        writeQuizSession(storageKey, quizSession);
      }
      return gainedXp;
    };

    const syncQuizProgressPercent = () => {
      if (!progressPercentNode && !progressBarNode && !progressBarFillNode && !remainingNode && !milestoneTextNode) {
        return;
      }
      const answeredQuestionCount = getAnsweredQuestionCount();
      const rawProgressPercent = totalQuestions > 0 ? Math.round((answeredQuestionCount / totalQuestions) * 100) : 0;
      const progressPercent = Number.isFinite(rawProgressPercent) ? Math.min(100, Math.max(0, rawProgressPercent)) : 0;
      const remainingCount = Math.max(0, totalQuestions - answeredQuestionCount);
      const isHalfwayReached = answeredQuestionCount >= Math.ceil(totalQuestions / 2) && answeredQuestionCount > 0;
      let milestone = copy.quizMilestoneDefault;
      if (answeredQuestionCount >= totalQuestions) {
        milestone = copy.quizMilestoneAlmostThere;
      } else if (remainingCount <= 1) {
        milestone = copy.quizMilestoneLastQuestion;
      } else if (remainingCount <= 3) {
        milestone = copy.quizMilestoneFinalThree;
      } else if (isHalfwayReached) {
        milestone = copy.quizMilestoneHalfway;
      } else if (remainingCount <= 5) {
        milestone = copy.quizMilestoneAlmostThere;
      }
      if (progressPercentNode) {
        progressPercentNode.textContent = `${progressPercent}%`;
      }
      if (progressBarNode) {
        progressBarNode.setAttribute("aria-valuenow", String(progressPercent));
        progressBarNode.setAttribute("aria-valuetext", `${copy.quizProgressPercentLabel}: ${progressPercent}%`);
      }
      if (progressBarFillNode) {
        progressBarFillNode.setAttribute("style", `width: ${progressPercent}%;`);
        if (progressPercent >= passMarkerPercent && passMarkerPercent > 0) {
          progressBarFillNode.classList.remove("from-primary-700", "via-primary-500", "to-primary-300");
          progressBarFillNode.classList.add("from-primary-500", "via-accent-500", "to-primary-400");
        } else {
          progressBarFillNode.classList.remove("from-primary-500", "via-accent-500", "to-primary-400");
          progressBarFillNode.classList.add("from-primary-700", "via-primary-500", "to-primary-300");
        }
      }
      if (remainingNode) {
        remainingNode.textContent = copy.quizRemainingPattern.replace("{count}", String(remainingCount));
      }
      if (milestoneTextNode) {
        milestoneTextNode.textContent = milestone;
      }
      if (milestoneChipNode) {
        const isDefaultMilestone = milestone === copy.quizMilestoneDefault;
        milestoneChipNode.setAttribute("data-course-quiz-milestone-state", isDefaultMilestone ? "default" : "active");
      }
    };

    const renderTabs = () => {
      if (!tabsNode) {
        return;
      }
      const TAB_MIN_WIDTH = 44;
      const GAP = 8;
      const containerWidth = tabsNode.getBoundingClientRect().width || 400;
      const maxSlots = Math.max(3, Math.min(12, Math.floor((containerWidth + GAP) / (TAB_MIN_WIDTH + GAP))));
      const needsPrev = safeQuestionIndex >= maxSlots;
      const arrowSlots = (needsPrev ? 1 : 0) + (totalQuestions > maxSlots ? 1 : 0);
      const windowSize = Math.max(1, maxSlots - arrowSlots);
      const windowStart = Math.floor(safeQuestionIndex / windowSize) * windowSize;
      const windowEnd = Math.min(windowStart + windowSize, totalQuestions) - 1;
      const hasPreviousWindow = windowStart > 0;
      const hasNextWindow = windowEnd < totalQuestions - 1;
      const totalSlots = windowSize + (hasPreviousWindow ? 1 : 0) + (hasNextWindow ? 1 : 0);
      const previousWindowStartQuestion = Math.max(1, windowStart - windowSize + 1);
      if (tabsWindowLabelNode) {
        tabsWindowLabelNode.textContent = copy.quizQuestionWindowRangePattern
          .replace("{start}", String(windowStart + 1))
          .replace("{end}", String(windowEnd + 1))
          .replace("{total}", String(totalQuestions));
      }

      const renderWindowArrow = (targetQuestionNumber, direction) => {
        const isNext = direction === "next";
        const href = toQuizPlayUrl(locale, courseSlug, targetQuestionNumber, false);
        const label = isNext ? copy.quizQuestionWindowNext : copy.quizQuestionWindowPrevious;
        const symbol = isNext ? "›" : "‹";
        return `
            <li class="flex-none" style="width: calc((100% - ${(totalSlots - 1) * GAP}px) / ${totalSlots});">
              <a
                href="${escapeHtml(href)}"
                data-course-quiz-question-tab-arrow="${isNext ? "next" : "prev"}"
                class="inline-flex min-h-11 w-full items-center justify-center rounded-lg border border-white/20 bg-white/5 px-1 text-sm font-semibold text-gray-200 transition-colors motion-reduce:transition-none hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400 sm:text-base"
                aria-label="${escapeHtml(label)}"
              >${symbol}</a>
            </li>`;
      };

      const tabItems = questions
        .slice(windowStart, windowEnd + 1)
        .map((question, windowIndex) => {
          const index = windowStart + windowIndex;
          const isCurrent = index === safeQuestionIndex;
          const isAnswered = getSelectedAnswers(question.id).length > 0;
          const tabHref = toQuizPlayUrl(locale, courseSlug, index + 1, false);
          const toneClass = isCurrent
            ? "border-primary-300/75 bg-gradient-to-r from-primary-500/40 to-accent-500/40 text-white"
            : isAnswered
              ? "border-primary-400/40 bg-primary-500/10 text-primary-200"
              : "border-white/15 bg-white/5 text-gray-400";
          const tabState = isCurrent ? copy.quizTabCurrent : isAnswered ? copy.quizTabAnswered : copy.quizTabOpen;
          const tabStateKey = isCurrent ? "current" : isAnswered ? "answered" : "open";
          const ariaCurrent = isCurrent ? ' aria-current="page"' : "";
          return `
            <li class="flex-none" style="width: calc((100% - ${(totalSlots - 1) * GAP}px) / ${totalSlots});">
              <a
                href="${escapeHtml(tabHref)}"
                data-course-quiz-question-tab
                data-course-quiz-tab-state="${tabStateKey}"
                class="inline-flex min-h-11 w-full items-center justify-center rounded-lg border px-1 text-xs font-semibold transition-colors motion-reduce:transition-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400 sm:text-sm ${toneClass}"
                aria-label="${escapeHtml(`${copy.quizQuestionLabel} ${index + 1} ${tabState}`)}"${ariaCurrent}
              >${escapeHtml(String(index + 1))}</a>
            </li>`;
        });

      if (hasPreviousWindow) {
        tabItems.unshift(renderWindowArrow(previousWindowStartQuestion, "prev"));
      }
      if (hasNextWindow) {
        tabItems.push(renderWindowArrow(windowEnd + 2, "next"));
      }

      tabsNode.innerHTML = tabItems.join("");
    };

    if (titleNode) {
      titleNode.textContent = quizText.title;
    }
    if (questionTitleNode) {
      questionTitleNode.textContent = currentQuestion.prompt;
    }
    if (questionHintNode) {
      if (!questionHintNode.id) {
        questionHintNode.id = "course-quiz-question-hint";
      }
      questionHintNode.textContent = currentQuestion.type === "multiple" ? copy.quizQuestionMultiHint : copy.quizQuestionSingleHint;
    }
    if (optionsNode) {
      if (questionHintNode?.id) {
        optionsNode.setAttribute("aria-describedby", questionHintNode.id);
      }
      const hasImageOptions = currentQuestion.options.some((option) => Boolean(sanitizeQuizOptionImageUrl(option.image)));
      optionsNode.setAttribute("data-course-quiz-option-layout", hasImageOptions ? "image-grid" : "list");
      if (hasImageOptions) {
        optionsNode.classList.remove("space-y-3");
      } else {
        optionsNode.classList.add("space-y-3");
      }
      const selectedAnswers = getSelectedAnswers(currentQuestion.id);
      optionsNode.setAttribute("data-course-quiz-has-selection", selectedAnswers.length > 0 ? "true" : "false");
      const inputType = currentQuestion.type === "multiple" ? "checkbox" : "radio";
      optionsNode.innerHTML = currentQuestion.options
        .map((option) => {
          const checked = selectedAnswers.includes(option.id) ? " checked" : "";
          const isChecked = Boolean(checked);
          const optionImage = sanitizeQuizOptionImageUrl(option.image);
          const optionImageAlt = typeof option.imageAlt === "string" ? option.imageAlt.trim() : option.text;
          const showImageLayout = hasImageOptions;
          const optionMediaMarkup = showImageLayout
            ? optionImage
              ? `<span data-course-quiz-option-image-wrap class="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg border border-white/15 bg-white/5">
                           <img data-course-quiz-option-image src="${escapeHtml(optionImage)}" alt="${escapeHtml(optionImageAlt)}" class="h-full w-full object-cover" loading="lazy" decoding="async" />
                         </span>`
              : `<span data-course-quiz-option-image-wrap data-course-quiz-option-image-fallback="true" class="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg border border-white/15 bg-white/5" aria-hidden="true"></span>`
            : "";
          const indicatorShapeClass = inputType === "checkbox" ? "rounded border" : "rounded-full border";
          const indicatorFillMarkup =
            inputType === "checkbox"
              ? `<span data-course-quiz-control-fill class="text-caption font-bold leading-none transition-opacity ${isChecked ? "opacity-100" : "opacity-0"}">&#10003;</span>`
              : `<span data-course-quiz-control-fill class="h-2 w-2 rounded-full bg-primary-300 transition-opacity ${isChecked ? "opacity-100" : "opacity-0"}"></span>`;
          const cardToneClass = isChecked
            ? "border-primary-300/75 bg-primary-500/16 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.07)]"
            : "border-white/15 bg-white/5";
          const textToneClass = isChecked ? "text-white" : "text-gray-200";
          const controlToneClass = isChecked
            ? "border-primary-200/90 bg-primary-500/30 text-white"
            : "border-white/35 bg-transparent text-transparent";
          return `
            <label data-course-quiz-answer-option data-course-quiz-selected="${isChecked ? "true" : "false"}" class="block cursor-pointer">
              <input
                type="${inputType}"
                name="quiz-${escapeHtml(currentQuestion.id)}"
                value="${escapeHtml(option.id)}"
                aria-describedby="course-quiz-question-hint"
                class="sr-only"
                ${checked}
              />
              <span data-course-quiz-option-card class="flex items-start gap-3 rounded-xl border px-4 py-3 transition-all motion-reduce:transition-none focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-primary-400 ${cardToneClass}">
                <span data-course-quiz-option-content class="flex min-w-0 flex-1 items-start gap-3 flex-col">
                  <span class="flex items-start gap-3">
                    <span data-course-quiz-control-indicator class="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center border ${controlToneClass} ${indicatorShapeClass}">
                      ${indicatorFillMarkup}
                    </span>
                    <span data-course-quiz-option-text title="${escapeHtml(option.text)}" class="min-w-0 break-words text-sm leading-6 transition-colors ${textToneClass}">${escapeHtml(option.text)}</span>
                  </span>
                  ${optionMediaMarkup}
                </span>
              </span>
            </label>`;
        })
        .join("");
    }
    reconcileQuestionRewards();
    renderTabs();
    let resizeTimer;
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(renderTabs, 150);
    });
    syncQuizProgressPercent();
    if (progressBarFillNode) {
      const scheduleProgressHydration =
        typeof window.requestAnimationFrame === "function"
          ? window.requestAnimationFrame.bind(window)
          : (callback) => callback();
      scheduleProgressHydration(() => {
        progressBarFillNode.setAttribute("data-progress-hydrated", "true");
      });
    }

    const hasPrevious = safeQuestionIndex > 0;
    const hasNext = safeQuestionIndex < questions.length - 1;
    const showResultButton = !hasNext;

    const syncQuizActionState = () => {
      setLinkState(
        prevLink,
        hasPrevious,
        copy.quizPreviousQuestion,
        hasPrevious ? toQuizPlayUrl(locale, courseSlug, safeQuestionIndex, false) : ""
      );
      setLinkState(
        nextLink,
        hasNext,
        copy.quizNextQuestion,
        hasNext ? toQuizPlayUrl(locale, courseSlug, safeQuestionIndex + 2, false) : "",
        true
      );

      if (nextLink) {
        nextLink.classList.toggle("hidden", showResultButton);
        nextLink.removeAttribute("aria-describedby");
      }

      if (resultButton) {
        resultButton.textContent = copy.quizResult;
        resultButton.classList.toggle("hidden", hasNext);
        resultButton.onclick = null;
        if (showResultButton) {
          resultButton.removeAttribute("disabled");
          resultButton.removeAttribute("aria-disabled");
          resultButton.classList.remove("opacity-80", "cursor-not-allowed");
          resultButton.onclick = () => finishQuizAndGoToReview("submitted");
        } else {
          resultButton.setAttribute("disabled", "");
          resultButton.setAttribute("aria-disabled", "true");
          resultButton.classList.add("opacity-80", "cursor-not-allowed");
        }
      }

      if (statusNode) {
        statusNode.textContent = showResultButton ? copy.quizResultHint : copy.quizBlindRunHint;
        statusNode.classList.remove("text-red-300");
        statusNode.classList.add("text-gray-400");
      }
    };

    syncQuizActionState();

    const syncAnswerOptionStates = () => {
      if (!optionsNode) {
        return;
      }
      const hasSelection = optionsNode.querySelectorAll("input:checked").length > 0;
      optionsNode.setAttribute("data-course-quiz-has-selection", hasSelection ? "true" : "false");
      optionsNode.querySelectorAll("[data-course-quiz-answer-option]").forEach((optionLabel) => {
        const input = optionLabel.querySelector("input");
        const isChecked = Boolean(input?.checked);
        optionLabel.setAttribute("data-course-quiz-selected", isChecked ? "true" : "false");

        const optionCard = optionLabel.querySelector("[data-course-quiz-option-card]");
        optionCard?.classList.toggle("border-primary-300/75", isChecked);
        optionCard?.classList.toggle("bg-primary-500/16", isChecked);
        optionCard?.classList.toggle("shadow-[inset_0_0_0_1px_rgba(255,255,255,0.07)]", isChecked);
        optionCard?.classList.toggle("border-white/15", !isChecked);
        optionCard?.classList.toggle("bg-white/5", !isChecked);

        const optionText = optionLabel.querySelector("[data-course-quiz-option-text]");
        optionText?.classList.toggle("text-white", isChecked);
        optionText?.classList.toggle("text-gray-200", !isChecked);

        const controlIndicator = optionLabel.querySelector("[data-course-quiz-control-indicator]");
        controlIndicator?.classList.toggle("border-primary-200/90", isChecked);
        controlIndicator?.classList.toggle("bg-primary-500/30", isChecked);
        controlIndicator?.classList.toggle("text-white", isChecked);
        controlIndicator?.classList.toggle("border-white/35", !isChecked);
        controlIndicator?.classList.toggle("bg-transparent", !isChecked);
        controlIndicator?.classList.toggle("text-transparent", !isChecked);

        const controlFill = optionLabel.querySelector("[data-course-quiz-control-fill]");
        controlFill?.classList.toggle("opacity-100", isChecked);
        controlFill?.classList.toggle("opacity-0", !isChecked);
      });
    };

    if (optionsNode) {
      optionsNode.addEventListener("change", () => {
        syncAnswerOptionStates();
        const previousValues = getSelectedAnswers(currentQuestion.id);
        const selectedValues = Array.from(optionsNode.querySelectorAll("input:checked"))
          .map((input) => input.value)
          .filter(Boolean);
        const selectionChanged = !areAnswerSetsEqual(previousValues, selectedValues);
        if (selectedValues.length) {
          quizSession.answers[currentQuestion.id] = selectedValues;
          if (selectionChanged) {
            const nextAttemptCount =
              Math.max(0, Math.floor(Number(quizSession.questionAttempts?.[currentQuestion.id]) || 0)) + 1;
            quizSession.questionAttempts[currentQuestion.id] = nextAttemptCount;
          }
        } else {
          delete quizSession.answers[currentQuestion.id];
        }
        writeQuizSession(storageKey, quizSession);
        if (isFinishingQuiz) {
          return;
        }
        syncQuizProgressPercent();
        renderTabs();
        syncQuizActionState();
        if (statusNode) {
          statusNode.textContent = copy.quizSavedAnswer;
          statusNode.classList.remove("text-red-300");
          statusNode.classList.add("text-gray-400");
        }
      });
    }

    if (backLink) {
      const backHref = backLink.href;
      backLink.addEventListener("click", (event) => {
        event.preventDefault();
        if (!confirmLeaveQuiz()) {
          return;
        }
        clearRuntimeListeners();
        window.location.assign(backHref);
      });

      const historySupportsGuard = Boolean(window.history && typeof window.history.pushState === "function");
      if (historySupportsGuard) {
        const guardState = { snappinquizQuizBackGuard: true, course: courseSlug };
        window.history.pushState(guardState, "", window.location.href);
        const onPopState = () => {
          if (!confirmLeaveQuiz()) {
            if (typeof window.history.forward === "function") {
              window.history.forward();
            }
            return;
          }
          clearRuntimeListeners();
          window.history.back();
        };
        window.addEventListener("popstate", onPopState);
        removePopStateGuard = () => {
          window.removeEventListener("popstate", onPopState);
        };
      }
    }

    if (typeof document.addEventListener === "function") {
      const onAnchorNavigation = (event) => {
        if (isFinishingQuiz) {
          return;
        }
        if (event?.defaultPrevented) {
          return;
        }
        const isModifiedClick = Boolean(event?.metaKey || event?.ctrlKey || event?.shiftKey || event?.altKey);
        const pointerButton = typeof event?.button === "number" ? event.button : 0;
        if (isModifiedClick || pointerButton !== 0) {
          return;
        }

        const target = event?.target;
        if (!target || typeof target.closest !== "function") {
          return;
        }

        const anchor = target.closest("a[href]");
        if (!anchor) {
          return;
        }

        if (
          anchor.matches(
            "[data-course-quiz-play-back-link], [data-course-quiz-question-tab], [data-course-quiz-question-tab-arrow], [data-course-quiz-next-question-link], [data-course-quiz-prev-question-link]"
          )
        ) {
          return;
        }

        if (anchor.hasAttribute("download") || anchor.getAttribute("target") === "_blank") {
          return;
        }

        const rawHref = anchor.getAttribute("href") || "";
        if (!rawHref || rawHref.startsWith("#") || /^javascript:/i.test(rawHref)) {
          return;
        }

        let targetUrl = null;
        let currentUrl = null;
        try {
          targetUrl = new URL(anchor.href, window.location.href);
          currentUrl = new URL(window.location.href);
        } catch {
          return;
        }

        if (targetUrl.origin !== currentUrl.origin) {
          return;
        }

        if (
          targetUrl.pathname === currentUrl.pathname &&
          targetUrl.search === currentUrl.search &&
          targetUrl.hash === currentUrl.hash
        ) {
          return;
        }

        event.preventDefault();
        if (!confirmLeaveQuiz()) {
          return;
        }

        clearRuntimeListeners();
        window.location.assign(targetUrl.toString());
      };

      document.addEventListener("click", onAnchorNavigation, true);
      removeAnchorGuard = () => {
        document.removeEventListener("click", onAnchorNavigation, true);
      };
    }

    if (timerNode) {
      const updateTimer = () => {
        const remainingMs = Math.max(0, quizSession.expiresAt - Date.now());
        timerNode.textContent = formatCountdown(remainingMs);
        const remainingSeconds = Math.ceil(remainingMs / 1000);
        const timerState = remainingSeconds <= 60 ? "urgent" : remainingSeconds <= 300 ? "warning" : "normal";
        timerNode.setAttribute("data-quiz-timer-state", timerState);
        if (timerPanelNode) {
          timerPanelNode.setAttribute("data-course-quiz-timer-state", timerState);
        }
        if (remainingMs <= 0 && !isFinishingQuiz) {
          window.alert(copy.quizTimeOverAlert);
          finishQuizAndGoToReview("timeout");
        }
      };
      updateTimer();
      timerInterval = window.setInterval(updateTimer, 1000);
    }
    window.addEventListener("beforeunload", clearRuntimeListeners, { once: true });

    const pageTitlePrefix = courseText?.title || "SnappinQuiz";
    document.title = `${pageTitlePrefix} - ${quizText.title} - ${copy.quizQuestionLabel} ${safeQuestionIndex + 1}`;
  }

  function renderQuizReviewPage() {
    const quizReviewRoot = document.querySelector("[data-course-quiz-review-page]");
    if (!quizReviewRoot) {
      return;
    }

    const locale = detectLocale();
    const copy = UI_COPY[locale] || UI_COPY[DEFAULT_LOCALE];
    const params = new URLSearchParams(window.location.search);
    const requestedCourseSlug = (params.get("course") || "").trim();
    const hasCourseParam = Boolean(requestedCourseSlug);
    const isValidCourse = hasCourseParam && Boolean(COURSE_LIBRARY[requestedCourseSlug] && QUIZ_LIBRARY[requestedCourseSlug]);
    const fallbackCourseSlug = Object.keys(QUIZ_LIBRARY)[0];
    const courseSlug = isValidCourse ? requestedCourseSlug : fallbackCourseSlug;
    const course = COURSE_LIBRARY[courseSlug];
    const quiz = QUIZ_LIBRARY[courseSlug];
    const courseText = resolveLocalizedText(course, locale);
    const quizText = resolveLocalizedText(quiz, locale);
    const questions = isValidCourse ? buildQuizQuestions(courseSlug, locale) : [];
    const isInvalidRequest = !isValidCourse || !quiz || !quizText || !questions.length;

    const titleNode = document.querySelector("[data-course-quiz-review-title]");
    const hintNode = document.querySelector("[data-course-quiz-review-hint]");
    const timeLabelNode = document.querySelector("[data-course-quiz-review-time-label]");
    const overviewTitleNode = document.querySelector("[data-course-quiz-review-overview-title]");
    const timeValueNode = document.querySelector("[data-course-quiz-review-time-value]");
    const timeSubtitleNode = document.querySelector("[data-course-quiz-review-time-subtitle]");
    const scoreLabelNode = document.querySelector("[data-course-quiz-review-score-label]");
    const scoreValueNode = document.querySelector("[data-course-quiz-review-score-value]");
    const scoreSubtitleNode = document.querySelector("[data-course-quiz-review-score-subtitle]");
    const gamificationPanelNode = document.querySelector("[data-course-quiz-review-gamification-panel]");
    const wrongLabelNode = document.querySelector("[data-course-quiz-review-wrong-label]");
    const wrongValueNode = document.querySelector("[data-course-quiz-review-wrong-value]");
    const wrongSubtitleNode = document.querySelector("[data-course-quiz-review-wrong-subtitle]");
    const xpGainSubtitleNode = document.querySelector("[data-course-quiz-review-xp-gain-subtitle]");
    const ratioLabelNode = document.querySelector("[data-course-quiz-review-ratio-label]");
    const ratioValueNode = document.querySelector("[data-course-quiz-review-ratio-value]");
    const xpGainLabelNode = document.querySelector("[data-course-quiz-review-xp-gain-label]");
    const xpGainValueNode = document.querySelector("[data-course-quiz-review-xp-gain-value]");
    const xpBreakdownTitleNode = document.querySelector("[data-course-quiz-review-xp-breakdown-title]");
    const xpBreakdownListNode = document.querySelector("[data-course-quiz-review-xp-breakdown-list]");
    const ringWrapNode = document.querySelector("[data-course-quiz-review-score-ring]");
    const ringSegScore = document.querySelector("[data-ring-seg-score]");
    const ringSegGoal = document.querySelector("[data-ring-seg-goal]");
    const ringSegRemaining = document.querySelector("[data-ring-seg-remaining]");
    const ringHitScore = document.querySelector("[data-ring-hit-score]");
    const ringHitGoal = document.querySelector("[data-ring-hit-goal]");
    const ringHitRemaining = document.querySelector("[data-ring-hit-remaining]");
    const ringZeroDot = document.querySelector("[data-ring-zero-dot]");
    const ringCenterNode = document.querySelector("[data-ring-center]");
    const ringCenterValue = document.querySelector("[data-ring-center-value]");
    const ringCenterLabel = document.querySelector("[data-i18n-ring-accuracy]");
    const ringTooltipNode = document.querySelector("[data-ring-tooltip]");
    const statusLabelNode = document.querySelector("[data-course-quiz-review-status-label]");
    const statusValueNode = document.querySelector("[data-course-quiz-review-status-value]");
    const statusChipNode = document.querySelector("[data-course-quiz-review-status-chip]");
    const gradeNode = document.querySelector("[data-course-quiz-review-grade]");
    const bestScoreNode = document.querySelector("[data-course-quiz-review-best-score]");
    const replayHintNode = document.querySelector("[data-course-quiz-review-replay-hint]");
    const profileLabelNode = document.querySelector("[data-course-quiz-review-profile-label]");
    const playerNameNode = document.querySelector("[data-course-quiz-review-player-name]");
    const avatarNode = document.querySelector("[data-course-quiz-review-avatar]");
    const avatarInitialsNode = document.querySelector("[data-course-quiz-review-avatar-initials]");
    const levelLabelNode = document.querySelector("[data-course-quiz-review-level-label]");
    const levelValueNode = document.querySelector("[data-course-quiz-review-level-value]");
    const xpTotalValueNode = document.querySelector("[data-course-quiz-review-xp-total-value]");
    const rankValueNode = document.querySelector("[data-course-quiz-review-rank-value]");
    const levelProgressLabelNode = document.querySelector("[data-course-quiz-review-level-progress-label]");
    const levelProgressPercentNode = document.querySelector("[data-course-quiz-review-level-progress-percent]");
    const levelProgressBarNode = document.querySelector("[data-course-quiz-review-level-progress-bar]");
    const levelProgressFillNode = document.querySelector("[data-course-quiz-review-level-progress-fill]");
    const levelProgressHintNode = document.querySelector("[data-course-quiz-review-level-progress-hint]");
    const answerBreakdownTitleNode = document.querySelector("[data-course-quiz-review-answer-breakdown-title]");
    const answerBreakdownListNode = document.querySelector("[data-course-quiz-review-answer-breakdown-list]");
    const retryLinks = document.querySelectorAll("[data-course-quiz-review-retry-link], [data-course-quiz-review-retry-link-top]");
    const backLinks = document.querySelectorAll("[data-course-quiz-review-back-link], [data-course-quiz-review-back-link-top]");

    if (titleNode) {
      titleNode.textContent = isInvalidRequest ? copy.quizReviewErrorTitle : quizText.title;
    }
    if (hintNode) {
      hintNode.textContent = isInvalidRequest ? copy.quizReviewErrorBody : copy.quizReviewHint;
      hintNode.classList.toggle("text-red-300", isInvalidRequest);
      hintNode.classList.toggle("text-gray-300", !isInvalidRequest);
    }
    if (timeLabelNode) {
      timeLabelNode.textContent = copy.quizReviewTimeInvestedLabel;
    }
    if (timeSubtitleNode) {
      timeSubtitleNode.textContent = copy.quizReviewTimeSubtitle;
    }
    if (overviewTitleNode) {
      overviewTitleNode.textContent = copy.quizReviewOverviewTitle;
    }
    if (scoreLabelNode) {
      scoreLabelNode.textContent = copy.quizReviewCorrectLabel;
    }
    if (gamificationPanelNode) {
      gamificationPanelNode.setAttribute("aria-label", copy.quizReviewGamificationRegionLabel);
    }
    if (wrongLabelNode) {
      wrongLabelNode.textContent = copy.quizReviewWrongLabel;
    }
    if (wrongSubtitleNode) {
      wrongSubtitleNode.textContent = copy.quizReviewWrongSubtitlePattern;
    }
    if (ratioLabelNode) {
      ratioLabelNode.textContent = copy.quizReviewRatioLabel;
    }
    if (xpGainLabelNode) {
      xpGainLabelNode.textContent = copy.quizReviewXpGainLabel;
    }
    if (xpGainSubtitleNode) {
      xpGainSubtitleNode.textContent = copy.quizReviewXpGainSubtitle;
    }
    if (xpBreakdownTitleNode) {
      xpBreakdownTitleNode.textContent = copy.quizReviewXpBreakdownTitle;
    }
    if (statusLabelNode) {
      statusLabelNode.textContent = copy.quizReviewStatusLabel;
    }
    if (profileLabelNode) {
      profileLabelNode.textContent = copy.quizReviewProfileLabel;
    }
    const playerProfile = resolveQuizReviewPlayer(copy);
    if (playerNameNode) {
      playerNameNode.textContent = playerProfile.name;
    }
    if (avatarInitialsNode) {
      avatarInitialsNode.textContent = playerProfile.initials;
    }
    renderQuizReviewAvatar(avatarNode, avatarInitialsNode, playerProfile);
    if (levelLabelNode) {
      levelLabelNode.textContent = copy.quizReviewLevelLabel;
    }
    if (levelProgressLabelNode) {
      levelProgressLabelNode.textContent = copy.quizReviewLevelProgressLabel.replace("{nextLevel}", "2");
    }
    if (levelProgressBarNode) {
      levelProgressBarNode.setAttribute("aria-labelledby", "course-quiz-review-level-progress-label");
    }
    if (answerBreakdownTitleNode) {
      answerBreakdownTitleNode.textContent = copy.quizReviewAnswerBreakdownTitle;
    }
    retryLinks.forEach((link) => {
      link.textContent = copy.quizReviewRetry;
      link.href = toQuizPlayUrl(locale, courseSlug, 1, true);
    });
    backLinks.forEach((link) => {
      link.textContent = copy.quizReviewBackToCourses;
      link.href = toLocalizedPath("courses", locale);
    });

    const setNeutralReviewValues = () => {
      if (timeValueNode) {
        timeValueNode.textContent = "--:--";
      }
      if (scoreValueNode) {
        scoreValueNode.textContent = "--";
      }
      if (scoreSubtitleNode) {
        scoreSubtitleNode.textContent = copy.quizReviewCorrectSubtitlePattern.replace("{total}", "--");
      }
      if (statusValueNode) {
        statusValueNode.textContent = "--";
        statusValueNode.classList.remove("text-green-300", "text-red-300");
        statusValueNode.classList.add("text-gray-300");
      }
      if (wrongValueNode) {
        wrongValueNode.textContent = "--";
        wrongValueNode.classList.remove("text-red-400");
        wrongValueNode.classList.add("text-gray-300");
      }
      if (ratioValueNode) {
        ratioValueNode.textContent = "--%";
      }
      if (ringSegScore) ringSegScore.setAttribute("stroke-dasharray", "0 314.16");
      if (ringSegGoal) { ringSegGoal.setAttribute("stroke-dasharray", "0 314.16"); ringSegGoal.setAttribute("stroke-dashoffset", "0"); }
      if (ringSegRemaining) { ringSegRemaining.setAttribute("stroke-dasharray", "0 314.16"); ringSegRemaining.setAttribute("stroke-dashoffset", "0"); }
      if (ringCenterValue) ringCenterValue.textContent = "--%";
      if (ringZeroDot) ringZeroDot.classList.add("hidden");
      if (xpGainValueNode) {
        xpGainValueNode.textContent = "+0";
      }
      if (xpBreakdownListNode) {
        xpBreakdownListNode.innerHTML = `<li>${escapeHtml(copy.quizReviewXpBreakdownEmpty)}</li>`;
      }
      if (gradeNode) {
        gradeNode.textContent = copy.quizReviewGradePattern.replace("{grade}", "--");
      }
      if (bestScoreNode) {
        bestScoreNode.textContent = copy.quizReviewBestCurrent.replace("{score}", "--");
      }
      if (replayHintNode) {
        replayHintNode.textContent = copy.quizReviewReplayHintFailed;
      }
      if (levelValueNode) {
        levelValueNode.textContent = "01";
      }
      if (xpTotalValueNode) {
        xpTotalValueNode.textContent = "0";
      }
      if (levelProgressPercentNode) {
        levelProgressPercentNode.textContent = "0%";
      }
      if (levelProgressBarNode) {
        levelProgressBarNode.setAttribute("aria-valuenow", "0");
        levelProgressBarNode.setAttribute(
          "aria-valuetext",
          copy.quizReviewLevelProgressPattern.replace("{percent}", "0")
        );
      }
      if (levelProgressFillNode) {
        levelProgressFillNode.setAttribute("style", "width: 0%;");
      }
      if (levelProgressHintNode) {
        levelProgressHintNode.textContent = copy.quizReviewLevelProgressHintPattern
          .replace("{current}", "0")
          .replace("{required}", String(getXpRequiredForNextLevel(1)))
          .replace("{nextLevel}", "2");
      }
      if (answerBreakdownListNode) {
        answerBreakdownListNode.innerHTML = "";
      }
      if (statusChipNode) {
        statusChipNode.classList.remove("border-green-400/40", "bg-green-500/10", "border-red-400/40", "bg-red-500/10");
      }
      quizReviewRoot.removeAttribute("data-course-quiz-review-outcome");
    };

    if (isInvalidRequest) {
      setNeutralReviewValues();
      document.title = `SnappinQuiz - ${copy.quizReviewErrorTitle}`;
      return;
    }

    const sessionKey = getQuizSessionStorageKey(courseSlug);
    const quizSession = readQuizSession(sessionKey);
    if (!hasCompletedQuizSession(quizSession)) {
      if (titleNode) {
        titleNode.textContent = copy.quizReviewErrorTitle;
      }
      if (hintNode) {
        hintNode.textContent = copy.quizReviewErrorBody;
        hintNode.classList.remove("text-gray-300");
        hintNode.classList.add("text-red-300");
      }
      setNeutralReviewValues();
      document.title = `SnappinQuiz - ${copy.quizReviewErrorTitle}`;
      return;
    }
    const result = buildQuizReviewResult(quiz, questions, quizSession);
    const wrongAnswers = Math.max(0, result.totalQuestions - result.correctAnswers);
    const ratioPercent = result.totalQuestions > 0 ? Math.round((result.correctAnswers / result.totalQuestions) * 100) : 0;
    const xpBreakdown = getQuizEarnedXpBreakdown(quiz, questions, quizSession, result);
    const detailedXp = getQuizDetailedXpBreakdown(quiz, questions, quizSession, result);
    const gainedXp = xpBreakdown.totalXp;
    const profileBaseXp = deriveProfileTotalXp(playerProfile.name);
    const previousTotalXp = profileBaseXp;
    const newTotalXp = profileBaseXp + gainedXp;
    const previousProgress = getXpProgressWithinLevel(previousTotalXp);
    const levelProgress = getXpProgressWithinLevel(newTotalXp);
    const grade = getQuizGrade(ratioPercent);
    const bestScoreStorageKey = `snappinquiz:quiz-best-score:${courseSlug}`;
    let previousBestScore = 0;
    try {
      const safeStorage = window?.localStorage;
      previousBestScore = Math.max(0, Math.floor(Number(safeStorage?.getItem?.(bestScoreStorageKey)) || 0));
    } catch (_) {
      previousBestScore = 0;
    }
    const nextBestScore = Math.max(previousBestScore, ratioPercent);
    try {
      const safeStorage = window?.localStorage;
      safeStorage?.setItem?.(bestScoreStorageKey, String(nextBestScore));
    } catch (_) {
      // ignore storage-write failures in privacy-constrained contexts
    }

    if (timeValueNode) {
      timeValueNode.textContent = formatElapsedDuration(result.timeInvestedMs);
    }
    if (scoreValueNode) {
      scoreValueNode.textContent = String(result.correctAnswers);
    }
    if (scoreSubtitleNode) {
      scoreSubtitleNode.textContent = copy.quizReviewCorrectSubtitlePattern
        .replace("{total}", String(result.totalQuestions));
    }
    if (statusValueNode) {
      statusValueNode.textContent = result.passed ? copy.quizReviewPassed : copy.quizReviewFailed;
      statusValueNode.classList.remove("text-gray-300");
      statusValueNode.classList.toggle("text-green-300", result.passed);
      statusValueNode.classList.toggle("text-red-300", !result.passed);
    }
    if (wrongValueNode) {
      wrongValueNode.textContent = String(wrongAnswers);
      wrongValueNode.classList.remove("text-gray-300");
      wrongValueNode.classList.add("text-red-400");
    }
    if (ratioValueNode) {
      ratioValueNode.textContent = `${ratioPercent}%`;
    }
    if (ringWrapNode) {
      const C = 314.16;
      const score = ratioPercent;
      const goalPercent = result.totalQuestions > 0 ? Math.round(((Number(quiz?.requiredCorrect) || 0) / result.totalQuestions) * 100) : 70;
      const best = nextBestScore;
      const scoreDash = (score / 100) * C;
      const goalDash = (goalPercent / 100) * C;
      const remainDash = C - goalDash;
      const missingToGoal = Math.max(0, goalPercent - score);

      if (ringSegGoal) {
        ringSegGoal.setAttribute("stroke-dasharray", `${goalDash} ${C - goalDash}`);
        ringSegGoal.setAttribute("stroke-dashoffset", "0");
      }
      if (ringSegRemaining) {
        ringSegRemaining.setAttribute("stroke-dasharray", `${remainDash} ${C - remainDash}`);
        ringSegRemaining.setAttribute("stroke-dashoffset", String(-goalDash));
      }
      if (ringSegScore) {
        ringSegScore.setAttribute("stroke-dasharray", score > 0 ? `${scoreDash} ${C - scoreDash}` : `0 ${C}`);
        ringSegScore.setAttribute("stroke-dashoffset", "0");
      }
      if (ringZeroDot) {
        ringZeroDot.classList.toggle("hidden", score > 0);
      }
      if (ringCenterValue) {
        ringCenterValue.textContent = `${score}%`;
      }
      if (ringCenterLabel) {
        ringCenterLabel.textContent = copy.quizReviewRingAccuracy;
      }

      const minHitPct = 0.08;
      const scoreHitDash = Math.max(scoreDash, minHitPct * C);
      const goalHitStart = scoreHitDash;
      const goalHitDash = Math.max(0, goalDash - goalHitStart);
      if (ringHitScore) {
        ringHitScore.setAttribute("stroke-dasharray", `${scoreHitDash} ${C - scoreHitDash}`);
        ringHitScore.setAttribute("stroke-dashoffset", "0");
      }
      if (ringHitGoal) {
        ringHitGoal.setAttribute("stroke-dasharray", `${goalHitDash} ${C - goalHitDash}`);
        ringHitGoal.setAttribute("stroke-dashoffset", String(-goalHitStart));
      }
      if (ringHitRemaining) {
        ringHitRemaining.setAttribute("stroke-dasharray", `${remainDash} ${C - remainDash}`);
        ringHitRemaining.setAttribute("stroke-dashoffset", String(-goalDash));
      }

      const buildTooltipHtml = (accent, title, rows) => {
        const rowsHtml = rows.map((r) =>
          `<div class="score-ring-tooltip-row"><span class="score-ring-tooltip-label"><span class="score-ring-tooltip-dot" style="background:${r.dot}"></span>${escapeHtml(r.label)}</span><span class="score-ring-tooltip-value" style="color:${r.valueColor || '#fff'}">${escapeHtml(r.value)}</span></div>`
        ).join("");
        return `<div class="score-ring-tooltip-bar" style="background:${accent}"></div><div class="score-ring-tooltip-title">${escapeHtml(title)}</div>${rowsHtml}`;
      };

      const scoreTooltipHtml = buildTooltipHtml("#f87171", copy.quizReviewRingScoreTitle, [
        { dot: "#f87171", label: copy.quizReviewRingAccuracy, value: `${score}%` },
        { dot: "#f87171", label: copy.quizReviewRingCorrectTotal, value: `${result.correctAnswers} / ${result.totalQuestions}` },
        { dot: "#1e1a2e", label: copy.quizReviewRingMissingToGoal, value: `\u2013${missingToGoal}%`, valueColor: "#f87171" },
      ]);
      const goalTooltipHtml = buildTooltipHtml("#a78bfa", copy.quizReviewRingGoalTitle, [
        { dot: "#a78bfa", label: copy.quizReviewRingMinScore, value: `${goalPercent}%` },
        { dot: "#fbbf24", label: copy.quizReviewRingBestResult, value: `${best}% \u2713`, valueColor: "#fbbf24" },
        { dot: "#f87171", label: copy.quizReviewRingThisQuiz, value: `${score}%`, valueColor: "#f87171" },
      ]);
      const goalMargin = 100 - goalPercent;
      const remainTooltipHtml = buildTooltipHtml("#4a4660", copy.quizReviewRingAboveTitle, [
        { dot: "#4a4660", label: copy.quizReviewRingRange, value: `${goalPercent}\u2013100%` },
        { dot: "#34d399", label: copy.quizReviewRingMarginFromGoal, value: `+${goalMargin}%`, valueColor: "#34d399" },
        { dot: "#fbbf24", label: copy.quizReviewRingBestHere, value: `${best}%`, valueColor: "#fbbf24" },
      ]);

      if (ringTooltipNode) {
        const showTooltip = (html) => {
          ringTooltipNode.innerHTML = html;
          ringTooltipNode.classList.add("visible");
          if (ringCenterNode) ringCenterNode.style.opacity = "0.3";
        };
        const hideTooltip = () => {
          ringTooltipNode.classList.remove("visible");
          if (ringCenterNode) ringCenterNode.style.opacity = "1";
          if (ringSegGoal) { ringSegGoal.style.stroke = ""; ringSegGoal.style.strokeWidth = ""; }
          if (ringSegRemaining) { ringSegRemaining.style.stroke = ""; ringSegRemaining.style.strokeWidth = ""; }
          if (ringSegScore) ringSegScore.style.strokeWidth = "";
          if (ringZeroDot) ringZeroDot.classList.remove("score-ring-dot-glow");
        };
        const moveTooltip = (e) => {
          ringTooltipNode.style.left = e.clientX + "px";
          ringTooltipNode.style.top = e.clientY + "px";
        };

        const hitAreas = [
          { hit: ringHitScore, html: scoreTooltipHtml, enter: () => {
            if (ringSegScore) ringSegScore.style.strokeWidth = "12";
            if (score === 0 && ringZeroDot) ringZeroDot.classList.add("score-ring-dot-glow");
          }},
          { hit: ringHitGoal, html: goalTooltipHtml, enter: () => {
            if (ringSegGoal) { ringSegGoal.style.stroke = "rgba(167,139,250,0.7)"; ringSegGoal.style.strokeWidth = "12"; }
          }},
          { hit: ringHitRemaining, html: remainTooltipHtml, enter: () => {
            if (ringSegRemaining) { ringSegRemaining.style.stroke = "#3d3960"; ringSegRemaining.style.strokeWidth = "12"; }
          }},
        ];
        hitAreas.forEach(({ hit, html, enter }) => {
          if (!hit) return;
          hit.addEventListener("mouseenter", () => { showTooltip(html); enter(); });
          hit.addEventListener("mousemove", moveTooltip);
          hit.addEventListener("mouseleave", hideTooltip);
        });
      }
    }
    if (gradeNode) {
      gradeNode.textContent = copy.quizReviewGradePattern.replace("{grade}", grade);
    }
    if (bestScoreNode) {
      if (previousBestScore <= 0) {
        bestScoreNode.textContent = copy.quizReviewBestFirstRun.replace("{score}", String(nextBestScore));
      } else if (ratioPercent > previousBestScore) {
        bestScoreNode.textContent = copy.quizReviewBestImproved.replace("{score}", String(nextBestScore));
      } else {
        bestScoreNode.textContent = copy.quizReviewBestCurrent.replace("{score}", String(nextBestScore));
      }
    }
    if (replayHintNode) {
      replayHintNode.textContent = result.passed ? copy.quizReviewReplayHintPassed : copy.quizReviewReplayHintFailed;
    }
    if (xpGainValueNode) {
      xpGainValueNode.textContent = `+${gainedXp}`;
    }
    if (xpBreakdownListNode) {
      const rows = [
        [copy.quizReviewBreakdownCorrectAnswers, detailedXp.correctAnswers],
        [copy.quizReviewBreakdownFirstTry, detailedXp.firstTry],
        [copy.quizReviewBreakdownDifficult, detailedXp.difficult],
        [copy.quizReviewBreakdownScenario, detailedXp.scenario],
        [copy.quizReviewBreakdownQuizCompleted, detailedXp.quizCompleted],
        [copy.quizReviewBreakdownScore80, detailedXp.score80],
        [copy.quizReviewBreakdownPerfect, detailedXp.perfectScore],
        [copy.quizReviewBreakdownNoHints, detailedXp.noHintsUsed],
        [copy.quizReviewBreakdownTargetTime, detailedXp.targetTime],
      ].filter(([, value]) => Number(value) > 0);
      xpBreakdownListNode.innerHTML = rows.length
        ? rows
          .map(
            ([label, value]) =>
              `<li class="flex items-center justify-between gap-3"><span>${escapeHtml(label)}</span><strong class="text-primary-300">+${Math.floor(Number(value) || 0)} XP</strong></li>`
          )
          .join("")
        : `<li>${escapeHtml(copy.quizReviewXpBreakdownEmpty)}</li>`;
    }
    if (levelValueNode) {
      levelValueNode.textContent = String(previousProgress.level).padStart(2, "0");
    }
    if (rankValueNode) {
      rankValueNode.textContent = getRankFromLevel(previousProgress.level);
    }
    if (levelProgressBarNode) {
      levelProgressBarNode.setAttribute("aria-valuenow", String(levelProgress.progressPercent));
    }

    // Phase 1: Show previous state immediately
    if (xpTotalValueNode) {
      xpTotalValueNode.innerHTML = `${previousTotalXp} XP <span class="text-cyber-green">+${gainedXp}</span>`;
    }
    if (levelProgressLabelNode) {
      levelProgressLabelNode.textContent = `${previousProgress.currentXp} / ${previousProgress.xpRequired} XP to Level ${previousProgress.nextLevel}`;
    }
    if (levelProgressFillNode) {
      levelProgressFillNode.setAttribute("style", `width: ${previousProgress.progressPercent}%;`);
    }

    // Phase 2: Build level-up segments and animate
    const segments = [];
    let segXp = previousTotalXp;
    while (segXp < newTotalXp) {
      const segProgress = getXpProgressWithinLevel(segXp);
      const xpToFillLevel = segProgress.xpRequired - segProgress.currentXp;
      const xpRemaining = newTotalXp - segXp;
      if (xpRemaining >= xpToFillLevel && xpToFillLevel > 0) {
        segments.push({ fromXp: segXp, toXp: segXp + xpToFillLevel, levelUp: true, newLevel: segProgress.nextLevel });
        segXp += xpToFillLevel;
      } else {
        segments.push({ fromXp: segXp, toXp: newTotalXp, levelUp: false });
        segXp = newTotalXp;
      }
    }
    if (segments.length === 0) {
      segments.push({ fromXp: previousTotalXp, toXp: newTotalXp, levelUp: false });
    }

    function animateSegment(index) {
      if (index >= segments.length) return;
      const seg = segments[index];
      const segGain = seg.toXp - seg.fromXp;
      const segFromProgress = getXpProgressWithinLevel(seg.fromXp);
      const segToProgress = getXpProgressWithinLevel(seg.toXp);
      const targetPercent = seg.levelUp ? 100 : segToProgress.progressPercent;
      const duration = Math.max(400, Math.min(800, segGain * 8));
      const steps = 25;
      const stepMs = duration / steps;

      if (levelProgressFillNode) {
        levelProgressFillNode.style.width = `${targetPercent}%`;
      }

      let step = 0;
      const ticker = setInterval(() => {
        step += 1;
        const t = Math.min(1, step / steps);
        const easedT = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
        const currentXpTotal = Math.round(seg.fromXp + segGain * easedT);
        const currentProgress = getXpProgressWithinLevel(currentXpTotal);
        if (xpTotalValueNode) {
          const remaining = newTotalXp - currentXpTotal;
          xpTotalValueNode.innerHTML = remaining > 0
            ? `${currentXpTotal} XP <span class="text-cyber-green">+${remaining}</span>`
            : `${currentXpTotal} XP`;
        }
        if (levelProgressLabelNode) {
          levelProgressLabelNode.textContent = `${currentProgress.currentXp} / ${currentProgress.xpRequired} XP to Level ${currentProgress.nextLevel}`;
        }
        if (step >= steps) {
          clearInterval(ticker);
          if (seg.levelUp) {
            if (levelValueNode) {
              levelValueNode.textContent = String(seg.newLevel).padStart(2, "0");
            }
            if (rankValueNode) {
              rankValueNode.textContent = getRankFromLevel(seg.newLevel);
            }
            const panel = document.querySelector("[data-course-quiz-review-gamification-panel]");
            if (panel) {
              const flash = document.createElement("div");
              flash.setAttribute("aria-hidden", "true");
              flash.style.cssText = "position:absolute;inset:0;margin:0;border-radius:inherit;background:linear-gradient(135deg,rgba(168,85,247,0.3),rgba(236,72,153,0.3));opacity:0;animation:levelup-flash 0.8s ease-out forwards;pointer-events:none;z-index:10;";
              panel.style.position = "relative";
              panel.appendChild(flash);
              setTimeout(() => flash.remove(), 900);
            }
            setTimeout(() => {
              if (levelProgressFillNode) {
                levelProgressFillNode.style.transition = "none";
                levelProgressFillNode.style.width = "0%";
                void levelProgressFillNode.offsetWidth;
                levelProgressFillNode.style.transition = "";
              }
              setTimeout(() => animateSegment(index + 1), 100);
            }, 600);
          } else {
            animateSegment(index + 1);
          }
        }
      }, stepMs);
    }

    setTimeout(() => animateSegment(0), 800);
    if (answerBreakdownListNode) {
      const answerRows = questions.map((question) => {
        const selectedIds = normalizeAnswerSet(quizSession.answers?.[question.id] || []);
        const selectedTexts = question.options
          .filter((option) => selectedIds.includes(option.id))
          .map((option) => option.text);
        const correctTexts = question.options.filter((option) => option.correct).map((option) => option.text);
        const isCorrect = isQuestionAnsweredCorrectly(question, selectedIds);
        const selectedText = selectedTexts.length ? selectedTexts.join(", ") : "—";
        const correctText = correctTexts.length ? correctTexts.join(", ") : "—";
        const stateText = isCorrect ? copy.quizReviewAnswerCorrect : copy.quizReviewAnswerIncorrect;
        const stateTone = isCorrect ? "text-cyber-green" : "text-red-300";
        return `
          <li class="rounded-xl border border-white/10 bg-white/5 p-3">
            <p class="text-sm font-semibold text-white">${escapeHtml(question.prompt)}</p>
            <p class="mt-1 text-xs ${stateTone}">${escapeHtml(stateText)}</p>
            <p class="mt-2 break-words text-xs text-gray-300"><span class="text-gray-400">${escapeHtml(copy.quizReviewAnswerYourChoice)}:</span> ${escapeHtml(selectedText)}</p>
            <p class="mt-1 break-words text-xs text-gray-300"><span class="text-gray-400">${escapeHtml(copy.quizReviewAnswerCorrectChoice)}:</span> ${escapeHtml(correctText)}</p>
          </li>`;
      });
      answerBreakdownListNode.innerHTML = answerRows.join("");
    }
    if (statusChipNode) {
      statusChipNode.classList.toggle("border-green-400/40", result.passed);
      statusChipNode.classList.toggle("bg-green-500/10", result.passed);
      statusChipNode.classList.toggle("border-red-400/40", !result.passed);
      statusChipNode.classList.toggle("bg-red-500/10", !result.passed);
    }
    quizReviewRoot.setAttribute("data-course-quiz-review-outcome", result.passed ? "passed" : "failed");

    const pageTitlePrefix = courseText?.title || "SnappinQuiz";
    document.title = `${pageTitlePrefix} - ${copy.quizReviewTitle}`;
  }

  document.addEventListener("DOMContentLoaded", () => {
    renderCourseTopicsPage();
    renderCourseDetailQuizSection();
    renderChapterPage();
    renderQuizIntroPage();
    renderQuizPlayPage();
    renderQuizReviewPage();
  });

  window.addEventListener("pageshow", () => {
    renderCourseDetailQuizSection();
  });

  window.SnappinQuizCourseChapters = {
    COURSE_LIBRARY,
    TOPIC_LIBRARY,
    QUIZ_LIBRARY,
  };
})();
