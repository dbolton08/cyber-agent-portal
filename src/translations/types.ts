export type Language = 'en' | 'es' | 'fr' | 'de' | 'it' | 'zh';

export interface CommonTranslations {
  welcome: string;
  subtitle: string;
  initConnection: string;
  projectOverview: string;
  liveStatus: string;
  platformStatus: string;
  online: string;
  error: string;
  errorFetchingData: string;
  home: string;
  connectWallet: string;
}

export interface SystemTranslations {
  totalStake: string;
  epoch: string;
  marketCap: string;
  tps: string;
  validators: string;
  decryptingData: string;
  selectLanguage: string;
  chooseLanguage: string;
}

export interface FeaturesTranslations {
  neuralProcessing: string;
  neuralDesc: string;
  secureProtocol: string;
  secureDesc: string;
  performance: string;
  performanceDesc: string;
  aiAssistant: string;
  aiAssistantDesc: string;
  quantumComputing: string;
  quantumDesc: string;
  neuralInterface: string;
  neuralInterfaceDesc: string;
}

export interface AgentTranslations {
  matrixAiDesc: string;
  neuralNetDesc: string;
  cyberCoreDesc: string;
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
}

export interface NetworkTranslations {
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
}

export interface Translations {
  common: CommonTranslations;
  system: SystemTranslations;
  features: FeaturesTranslations;
  agent: AgentTranslations;
  network: NetworkTranslations;
}