import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'es' | 'fr' | 'de' | 'it' | 'zh';

interface Translations {
  // Common translations
  decryptingData: string;
  selectLanguage: string;
  chooseLanguage: string;
  error: string;
  errorFetchingData: string;
  
  // Navigation
  agents: string;
  console: string;
  systems: string;
  network: string;
  platformStatus: string;
  systemStatus: string;
  online: string;
  home: string;
  
  // Stats
  totalStake: string;
  epoch: string;
  marketCap: string;
  tps: string;
  validators: string;
  
  // Network
  networkTitle: string;
  networkActivity: string;
  connectionStrength: string;
  activeNodes: string;
  securityLevel: string;
  maximum: string;
  networkLoad: string;
  recentEvents: string;
  securityScanCompleted: string;
  bandwidthOptimization: string;
  
  // Agents
  matrixAiAgent: string;
  agentDescription: string;
  capabilities: string;
  nlpCapability: string;
  marketAnalysis: string;
  problemSolving: string;
  accessAgent: string;
  aiAgentInterface: string;
  aiLaunchedTokens: string;
  launchDate: string;
  matrixAiDesc: string;
  neuralNetDesc: string;
  cyberCoreDesc: string;
}

const translations: Record<Language, Translations> = {
  en: {
    decryptingData: "Decrypting agent data...",
    selectLanguage: "Select Language",
    chooseLanguage: "Choose your preferred language",
    error: "Error",
    errorFetchingData: "Error fetching data. Please try again later.",
    agents: "Agents",
    console: "Console",
    systems: "Systems",
    network: "Network",
    platformStatus: "Platform Status",
    systemStatus: "System Status",
    online: "Online",
    home: "Home",
    totalStake: "Total Stake",
    epoch: "Epoch",
    marketCap: "Market Cap",
    tps: "TPS (Peak)",
    validators: "Validators",
    networkTitle: "Network Status",
    networkActivity: "Network Activity",
    connectionStrength: "Connection Strength",
    activeNodes: "Active Nodes",
    securityLevel: "Security Level",
    maximum: "Maximum",
    networkLoad: "Network Load",
    recentEvents: "Recent Events",
    securityScanCompleted: "Security scan completed",
    bandwidthOptimization: "Bandwidth optimization complete",
    matrixAiAgent: "MATRIX AI AGENT",
    agentDescription: "Interface with our advanced AI agent, trained on the principles of the Matrix.",
    capabilities: "Capabilities",
    nlpCapability: "Natural Language Processing",
    marketAnalysis: "Market Analysis",
    problemSolving: "Problem Solving",
    accessAgent: "Access Agent",
    aiAgentInterface: "AI Agent Interface",
    aiLaunchedTokens: "AI LAUNCHED TOKENS",
    launchDate: "Launch Date",
    matrixAiDesc: "AI-powered DeFi protocol",
    neuralNetDesc: "Decentralized ML network",
    cyberCoreDesc: "AI governance token"
  },
  es: {
    decryptingData: "Descifrando datos del agente...",
    selectLanguage: "Seleccionar Idioma",
    chooseLanguage: "Elige tu idioma preferido",
    error: "Error",
    errorFetchingData: "Error al obtener datos. Por favor, inténtelo más tarde.",
    agents: "Agentes",
    console: "Consola",
    systems: "Sistemas",
    network: "Red",
    platformStatus: "Estado de la Plataforma",
    systemStatus: "Estado del Sistema",
    online: "En línea",
    home: "Inicio",
    totalStake: "Stake Total",
    epoch: "Época",
    marketCap: "Cap. de Mercado",
    tps: "TPS (Pico)",
    validators: "Validadores",
    networkTitle: "Estado de la Red",
    networkActivity: "Actividad de Red",
    connectionStrength: "Fuerza de Conexión",
    activeNodes: "Nodos Activos",
    securityLevel: "Nivel de Seguridad",
    maximum: "Máximo",
    networkLoad: "Carga de Red",
    recentEvents: "Eventos Recientes",
    securityScanCompleted: "Escaneo de seguridad completado",
    bandwidthOptimization: "Optimización de ancho de banda completada",
    matrixAiAgent: "AGENTE IA MATRIX",
    agentDescription: "Interactúa con nuestro agente de IA avanzado, entrenado en los principios de Matrix.",
    capabilities: "Capacidades",
    nlpCapability: "Procesamiento de Lenguaje Natural",
    marketAnalysis: "Análisis de Mercado",
    problemSolving: "Resolución de Problemas",
    accessAgent: "Acceder al Agente",
    aiAgentInterface: "Interfaz del Agente IA",
    aiLaunchedTokens: "TOKENS LANZADOS POR IA",
    launchDate: "Fecha de Lanzamiento",
    matrixAiDesc: "Protocolo DeFi impulsado por IA",
    neuralNetDesc: "Red de aprendizaje automático",
    cyberCoreDesc: "Token de gobernanza IA"
  },
  fr: {
    decryptingData: "Déchiffrer les données de l'agent...",
    selectLanguage: "Sélectionner la langue",
    chooseLanguage: "Choisissez votre langue préférée",
    error: "Erreur",
    errorFetchingData: "Erreur lors de la récupération des données. Veuillez réessayer plus tard.",
    agents: "Agents",
    console: "Console",
    systems: "Systèmes",
    network: "Réseau",
    platformStatus: "État de la plateforme",
    systemStatus: "État du système",
    online: "En ligne",
    home: "Accueil",
    totalStake: "Total des mises",
    epoch: "Époque",
    marketCap: "Cap. de marché",
    tps: "TPS (Pic)",
    validators: "Validateurs",
    networkTitle: "État du réseau",
    networkActivity: "Activité du réseau",
    connectionStrength: "Force de connexion",
    activeNodes: "Nœuds actifs",
    securityLevel: "Niveau de sécurité",
    maximum: "Maximum",
    networkLoad: "Charge du réseau",
    recentEvents: "Événements récents",
    securityScanCompleted: "Analyse de sécurité terminée",
    bandwidthOptimization: "Optimisation de la bande passante terminée",
    matrixAiAgent: "AGENT IA MATRIX",
    agentDescription: "Interagissez avec notre agent IA avancé, formé sur les principes de la Matrice.",
    capabilities: "Capacités",
    nlpCapability: "Traitement du langage naturel",
    marketAnalysis: "Analyse de marché",
    problemSolving: "Résolution de problèmes",
    accessAgent: "Accéder à l'agent",
    aiAgentInterface: "Interface de l'agent IA",
    aiLaunchedTokens: "TOKENS LANCÉS PAR IA",
    launchDate: "Date de lancement",
    matrixAiDesc: "Protocole DeFi alimenté par IA",
    neuralNetDesc: "Réseau d'apprentissage décentralisé",
    cyberCoreDesc: "Jeton de gouvernance IA"
  },
  de: {
    decryptingData: "Entschlüsseln der Agentendaten...",
    selectLanguage: "Sprache auswählen",
    chooseLanguage: "Wählen Sie Ihre bevorzugte Sprache",
    error: "Fehler",
    errorFetchingData: "Fehler beim Abrufen der Daten. Bitte versuchen Sie es später erneut.",
    agents: "Agenten",
    console: "Konsole",
    systems: "Systeme",
    network: "Netzwerk",
    platformStatus: "Plattformstatus",
    systemStatus: "Systemstatus",
    online: "Online",
    home: "Startseite",
    totalStake: "Gesamtstake",
    epoch: "Epoche",
    marketCap: "Marktkapitalisierung",
    tps: "TPS (Spitze)",
    validators: "Validatoren",
    networkTitle: "Netzwerkstatus",
    networkActivity: "Netzwerkaktivität",
    connectionStrength: "Verbindungsstärke",
    activeNodes: "Aktive Knoten",
    securityLevel: "Sicherheitsstufe",
    maximum: "Maximal",
    networkLoad: "Netzwerklast",
    recentEvents: "Aktuelle Ereignisse",
    securityScanCompleted: "Sicherheitsüberprüfung abgeschlossen",
    bandwidthOptimization: "Bandbreitenoptimierung abgeschlossen",
    matrixAiAgent: "MATRIX IA AGENT",
    agentDescription: "Interagieren Sie mit unserem fortschrittlichen KI-Agenten, der auf den Prinzipien der Matrix trainiert wurde.",
    capabilities: "Fähigkeiten",
    nlpCapability: "Verarbeitung natürlicher Sprache",
    marketAnalysis: "Marktanalyse",
    problemSolving: "Problemlösung",
    accessAgent: "Zugriff auf Agent",
    aiAgentInterface: "KI-Agenten-Schnittstelle",
    aiLaunchedTokens: "VON IA STARTENDE TOKEN",
    launchDate: "Startdatum",
    matrixAiDesc: "KI-gestütztes DeFi-Protokoll",
    neuralNetDesc: "Dezentralisiertes ML-Netzwerk",
    cyberCoreDesc: "KI-Governance-Token"
  },
  it: {
    decryptingData: "Decrittazione dei dati dell'agente...",
    selectLanguage: "Seleziona lingua",
    chooseLanguage: "Scegli la tua lingua preferita",
    error: "Errore",
    errorFetchingData: "Errore durante il recupero dei dati. Riprova più tardi.",
    agents: "Agenti",
    console: "Console",
    systems: "Sistemi",
    network: "Rete",
    platformStatus: "Stato della piattaforma",
    systemStatus: "Stato del sistema",
    online: "Online",
    home: "Home",
    totalStake: "Stake totale",
    epoch: "Epoca",
    marketCap: "Cap. di mercato",
    tps: "TPS (Picco)",
    validators: "Validatori",
    networkTitle: "Stato della rete",
    networkActivity: "Attività di rete",
    connectionStrength: "Forza della connessione",
    activeNodes: "Nodi attivi",
    securityLevel: "Livello di sicurezza",
    maximum: "Massimo",
    networkLoad: "Carico di rete",
    recentEvents: "Eventi recenti",
    securityScanCompleted: "Scansione di sicurezza completata",
    bandwidthOptimization: "Ottimizzazione della larghezza di banda completata",
    matrixAiAgent: "AGENTE IA MATRIX",
    agentDescription: "Interagisci con il nostro agente IA avanzato, addestrato sui principi della Matrice.",
    capabilities: "Capacità",
    nlpCapability: "Elaborazione del linguaggio naturale",
    marketAnalysis: "Analisi di mercato",
    problemSolving: "Risoluzione dei problemi",
    accessAgent: "Accedi all'agente",
    aiAgentInterface: "Interfaccia dell'agente IA",
    aiLaunchedTokens: "TOKEN LANCIO DA IA",
    launchDate: "Data di lancio",
    matrixAiDesc: "Protocollo DeFi alimentato da IA",
    neuralNetDesc: "Rete di apprendimento decentralizzata",
    cyberCoreDesc: "Token di governance IA"
  },
  zh: {
    decryptingData: "正在解密代理数据...",
    selectLanguage: "选择语言",
    chooseLanguage: "选择您喜欢的语言",
    error: "错误",
    errorFetchingData: "获取数据时出错。请稍后再试。",
    agents: "代理",
    console: "控制台",
    systems: "系统",
    network: "网络",
    platformStatus: "平台状态",
    systemStatus: "系统状态",
    online: "在线",
    home: "主页",
    totalStake: "总质押",
    epoch: "纪元",
    marketCap: "市场资本",
    tps: "TPS（峰值）",
    validators: "验证者",
    networkTitle: "网络状态",
    networkActivity: "网络活动",
    connectionStrength: "连接强度",
    activeNodes: "活跃节点",
    securityLevel: "安全级别",
    maximum: "最大",
    networkLoad: "网络负载",
    recentEvents: "最近事件",
    securityScanCompleted: "安全扫描完成",
    bandwidthOptimization: "带宽优化完成",
    matrixAiAgent: "矩阵人工智能代理",
    agentDescription: "与我们先进的人工智能代理互动，该代理基于矩阵原则进行训练。",
    capabilities: "能力",
    nlpCapability: "自然语言处理",
    marketAnalysis: "市场分析",
    problemSolving: "问题解决",
    accessAgent: "访问代理",
    aiAgentInterface: "人工智能代理接口",
    aiLaunchedTokens: "人工智能启动的代币",
    launchDate: "启动日期",
    matrixAiDesc: "基于人工智能的去中心化金融协议",
    neuralNetDesc: "去中心化机器学习网络",
    cyberCoreDesc: "人工智能治理代币"
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  translations: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>('es');

  return (
    <LanguageContext.Provider value={{ 
      language, 
      setLanguage,
      translations: translations[language]
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
