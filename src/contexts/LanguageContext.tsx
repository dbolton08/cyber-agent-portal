import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'es' | 'zh' | 'ja';

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
    performanceDesc: "Leveraging Sui's parallel execution engine for unprecedented throughput and minimal latency",
    smartContracts: "Smart Contracts",
    smartContractsDesc: "Advanced Move-based smart contracts ensuring secure and efficient operations",
  },
  es: {
    welcome: "ORÁCULO MATRIX",
    subtitle: "Entra en un reino donde la inteligencia artificial y la consciencia humana convergen en la blockchain Sui.",
    initConnection: "Iniciar Conexión",
    neuralProcessing: "Procesamiento Neural",
    neuralDesc: "Algoritmos avanzados de IA impulsados por computación cuántica",
    suiIntegration: "Integración Sui",
    suiDesc: "Operaciones blockchain fluidas en la red de alto rendimiento de Sui",
    secureProtocol: "Protocolo Seguro",
    secureDesc: "Encriptación de grado militar para todas las operaciones",
    performance: "Alto Rendimiento",
    performanceDesc: "Aprovechando el motor de ejecución paralela de Sui para un rendimiento sin precedentes",
    smartContracts: "Contratos Inteligentes",
    smartContractsDesc: "Contratos inteligentes avanzados basados en Move que garantizan operaciones seguras y eficientes",
  },
  zh: {
    welcome: "矩阵神谕",
    subtitle: "进入一个人工智能与人类意识在Sui区块链上融合的领域。",
    initConnection: "初始化连接",
    neuralProcessing: "神经处理",
    neuralDesc: "由量子计算支持的先进AI算法",
    suiIntegration: "Sui集成",
    suiDesc: "在Sui高性能网络上无缝区块链操作",
    secureProtocol: "安全协议",
    secureDesc: "军事级加密保护所有操作",
    performance: "高性能",
    performanceDesc: "利用Sui的并行执行引擎实现前所未有的吞吐量",
    smartContracts: "智能合约",
    smartContractsDesc: "基于Move的先进智能合约确保安全高效的操作",
  },
  ja: {
    welcome: "マトリックス・オラクル",
    subtitle: "人工知能と人間の意識がSuiブロックチェーン上で融合する領域へ。",
    initConnection: "接続を開始",
    neuralProcessing: "ニューラル処理",
    neuralDesc: "量子コンピューティングを活用した先進的なAIアルゴリズム",
    suiIntegration: "Sui統合",
    suiDesc: "Suiの高性能ネットワークでシームレスなブロックチェーン操作",
    secureProtocol: "セキュアプロトコル",
    secureDesc: "すべての操作に軍事級の暗号化を適用",
    performance: "高性能",
    performanceDesc: "Suiの並列実行エンジンを活用した前例のないスループット",
    smartContracts: "スマートコントラクト",
    smartContractsDesc: "Move言語ベースの先進的なスマートコントラクトで安全で効率的な操作を実現",
  },
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