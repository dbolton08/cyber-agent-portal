export type Language = 'en' | 'es' | 'fr' | 'de' | 'it' | 'zh';

export interface SystemTranslations {
  totalStake: string;
  epoch: string;
  marketCap: string;
  tps: string;
  validators: string;
  agents: string;
  console: string;
  systems: string;
  network: string;
  decryptingData: string;
  selectLanguage: string;
  chooseLanguage: string;
  platformStatus: string;
  systemStatus: string;
  online: string;
  error: string;
  errorFetchingData: string;
}

export interface AgentTranslations {
  matrixAiDesc: string;
  neuralNetDesc: string;
  cyberCoreDesc: string;
  matrixAiAgent: string;
  home: string;
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
  system: SystemTranslations;
  agent: AgentTranslations;
  network: NetworkTranslations;
}