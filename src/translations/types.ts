export type Language = 'en' | 'es' | 'fr' | 'de' | 'it' | 'zh';

export interface CommonTranslations {
  welcome: string;
  subtitle: string;
  initConnection: string;
  projectOverview: string;
  error: string;
  errorFetchingData: string;
  home: string;
  online: string;
  liveStatus: string;
}

export interface SystemTranslations {
  agents: string;
  console: string;
  systems: string;
  network: string;
  platformStatus: string;
  systemStatus: string;
  online: string;
  totalStake: string;
  epoch: string;
  marketCap: string;
  tps: string;
  validators: string;
  decryptingData: string;
  selectLanguage: string;
  chooseLanguage: string;
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

export interface ConsoleTranslations {
  title: string;
  description: string;
  enterCommand: string;
  executeCommand: string;
  availableCommands: string;
  systemHealth: string;
  performance: string;
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

export interface FeaturesTranslations {
  neuralProcessing: string;
  neuralDesc: string;
  suiIntegration: string;
  suiDesc: string;
  secureProtocol: string;
  secureDesc: string;
  performance: string;
  performanceDesc: string;
  smartContracts: string;
  smartContractsDesc: string;
}

export interface Translations {
  common: CommonTranslations;
  system: SystemTranslations;
  network: NetworkTranslations;
  console: ConsoleTranslations;
  agent: AgentTranslations;
  features: FeaturesTranslations;
  error: string;
  errorFetchingData: string;
  totalStake: string;
  epoch: string;
  marketCap: string;
  tps: string;
  validators: string;
}