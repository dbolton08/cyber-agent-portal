import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'es' | 'fr' | 'de' | 'it' | 'zh';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  translations: Record<string, string>;
}

const translations = {
  en: {
    welcome: "MATRIX ORACLE",
    subtitle: "Enter a realm where artificial intelligence and human consciousness converge on the Sui blockchain.",
    initConnection: "Initialize Connection",
    neuralProcessing: "Neural Processing",
    neuralDesc: "Advanced AI algorithms powered by quantum computing",
    suiIntegration: "Sui Integration",
    suiDesc: "Seamless blockchain operations on Sui's high-performance network",
    secureProtocol: "Secure Protocol",
    secureDesc: "Military-grade encryption for all operations",
    performance: "High Performance",
    performanceDesc: "Leveraging Sui's parallel execution engine",
    smartContracts: "Smart Contracts",
    smartContractsDesc: "Advanced Move-based smart contracts",
    connectWallet: "Connect SUI Wallet",
    totalStake: "Total Stake",
    epoch: "Epoch",
    marketCap: "Market Cap",
    tps: "TPS (Peak)",
    validators: "Validators",
    selectLanguage: "Select Language",
    chooseLanguage: "Choose your preferred language",
    decryptingData: "Decrypting agent data...",
    agents: "Agents",
    console: "Console",
    systems: "Systems",
    network: "Network",
    platformStatus: "Platform Status",
    systemStatus: "System Status",
    online: "Online",
    projectOverview: "PROJECT OVERVIEW"
  },
  es: {
    welcome: "ORÁCULO MATRIX",
    subtitle: "Entra en un reino donde la inteligencia artificial y la consciencia humana convergen en la blockchain Sui.",
    initConnection: "Iniciar Conexión",
    neuralProcessing: "Procesamiento Neural",
    neuralDesc: "Algoritmos avanzados de IA",
    suiIntegration: "Integración Sui",
    suiDesc: "Operaciones blockchain fluidas",
    secureProtocol: "Protocolo Seguro",
    secureDesc: "Encriptación de grado militar",
    performance: "Alto Rendimiento",
    performanceDesc: "Motor de ejecución paralela de Sui",
    smartContracts: "Contratos Inteligentes",
    smartContractsDesc: "Contratos inteligentes Move",
    connectWallet: "Conectar Billetera SUI",
    totalStake: "Stake Total",
    epoch: "Época",
    marketCap: "Cap. de Mercado",
    tps: "TPS (Pico)",
    validators: "Validadores",
    selectLanguage: "Seleccionar Idioma",
    chooseLanguage: "Elige tu idioma preferido",
    decryptingData: "Descifrando datos del agente...",
    agents: "Agentes",
    console: "Consola",
    systems: "Sistemas",
    network: "Red",
    platformStatus: "Estado de la Plataforma",
    systemStatus: "Estado del Sistema",
    online: "En línea",
    projectOverview: "DESCRIPCIÓN DEL PROYECTO"
  },
  fr: {
    welcome: "ORACLE MATRIX",
    subtitle: "Entrez dans un monde où l'intelligence artificielle et la conscience humaine convergent sur la blockchain Sui.",
    initConnection: "Initialiser la Connexion",
    neuralProcessing: "Traitement Neural",
    neuralDesc: "Algorithmes IA avancés",
    suiIntegration: "Intégration Sui",
    suiDesc: "Opérations blockchain fluides",
    secureProtocol: "Protocole Sécurisé",
    secureDesc: "Cryptage militaire",
    performance: "Haute Performance",
    performanceDesc: "Moteur d'exécution parallèle Sui",
    smartContracts: "Contrats Intelligents",
    smartContractsDesc: "Contrats intelligents Move",
    connectWallet: "Connecter Portefeuille SUI",
    totalStake: "Stake Total",
    epoch: "Époque",
    marketCap: "Cap. Marché",
    tps: "TPS (Pic)",
    validators: "Validateurs",
    selectLanguage: "Choisir la Langue",
    chooseLanguage: "Choisissez votre langue préférée",
    decryptingData: "Décryptage des données de l'agent...",
    agents: "Agents",
    console: "Console",
    systems: "Systèmes",
    network: "Réseau",
    platformStatus: "État de la Plateforme",
    systemStatus: "État du Système",
    online: "En ligne",
    projectOverview: "APERÇU DU PROJET"
  },
  de: {
    welcome: "MATRIX ORAKEL",
    subtitle: "Betreten Sie eine Welt, in der künstliche Intelligenz und menschliches Bewusstsein auf der Sui-Blockchain zusammenkommen.",
    initConnection: "Verbindung Initialisieren",
    neuralProcessing: "Neurale Verarbeitung",
    neuralDesc: "Fortgeschrittene KI-Algorithmen",
    suiIntegration: "Sui Integration",
    suiDesc: "Nahtlose Blockchain-Operationen",
    secureProtocol: "Sicheres Protokoll",
    secureDesc: "Militärische Verschlüsselung",
    performance: "Hohe Leistung",
    performanceDesc: "Sui Parallel-Ausführungsengine",
    smartContracts: "Smart Contracts",
    smartContractsDesc: "Move Smart Contracts",
    connectWallet: "SUI Wallet Verbinden",
    totalStake: "Gesamt-Stake",
    epoch: "Epoche",
    marketCap: "Marktkapitalisierung",
    tps: "TPS (Spitze)",
    validators: "Validatoren",
    selectLanguage: "Sprache Wählen",
    chooseLanguage: "Wählen Sie Ihre bevorzugte Sprache",
    decryptingData: "Entschlüssele Agentendaten...",
    agents: "Agenten",
    console: "Konsole",
    systems: "Systeme",
    network: "Netzwerk",
    platformStatus: "Plattformstatus",
    systemStatus: "Systemstatus",
    online: "Online",
    projectOverview: "PROJEKTÜBERSICHT"
  },
  it: {
    welcome: "ORACOLO MATRIX",
    subtitle: "Entra in un regno dove l'intelligenza artificiale e la coscienza umana convergono sulla blockchain Sui.",
    initConnection: "Inizializza Connessione",
    neuralProcessing: "Elaborazione Neurale",
    neuralDesc: "Algoritmi IA avanzati",
    suiIntegration: "Integrazione Sui",
    suiDesc: "Operazioni blockchain fluide",
    secureProtocol: "Protocollo Sicuro",
    secureDesc: "Crittografia militare",
    performance: "Alta Performance",
    performanceDesc: "Motore di esecuzione parallela Sui",
    smartContracts: "Smart Contract",
    smartContractsDesc: "Smart contract Move",
    connectWallet: "Connetti Wallet SUI",
    totalStake: "Stake Totale",
    epoch: "Epoca",
    marketCap: "Cap. di Mercato",
    tps: "TPS (Picco)",
    validators: "Validatori",
    selectLanguage: "Seleziona Lingua",
    chooseLanguage: "Scegli la tua lingua preferita",
    decryptingData: "Decrittazione dati agente...",
    agents: "Agenti",
    console: "Console",
    systems: "Sistemi",
    network: "Rete",
    platformStatus: "Stato Piattaforma",
    systemStatus: "Stato Sistema",
    online: "Online",
    projectOverview: "PANORAMICA PROGETTO"
  },
  zh: {
    welcome: "矩阵神谕",
    subtitle: "进入一个人工智能与人类意识在Sui区块链上融合的领域。",
    initConnection: "初始化连接",
    neuralProcessing: "神经处理",
    neuralDesc: "先进AI算法",
    suiIntegration: "Sui集成",
    suiDesc: "无缝区块链操作",
    secureProtocol: "安全协议",
    secureDesc: "军事级加密",
    performance: "高性能",
    performanceDesc: "Sui并行执行引擎",
    smartContracts: "智能合约",
    smartContractsDesc: "Move智能合约",
    connectWallet: "连接SUI钱包",
    totalStake: "总质押量",
    epoch: "周期",
    marketCap: "市值",
    tps: "TPS (峰值)",
    validators: "验证者",
    selectLanguage: "选择语言",
    chooseLanguage: "选择您的首选语言",
    decryptingData: "正在解密代理数据...",
    agents: "代理",
    console: "控制台",
    systems: "系统",
    network: "网络",
    platformStatus: "平台状态",
    systemStatus: "系统状态",
    online: "在线",
    projectOverview: "项目概述"
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

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
