import React from 'react';
import TopNav from "../components/TopNav";
import Sidebar from "../components/Sidebar";
import MatrixRain from "../components/MatrixRain";
import GlitchText from "../components/GlitchText";
import { ExternalLink, TrendingUp, Coins, Home } from 'lucide-react';
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

const Agents = () => {
  const { translations } = useLanguage();

  const launchedTokens = [
    {
      name: "MatrixAI",
      symbol: "MTXAI",
      launchDate: "2024-02-15",
      marketCap: "$45.2M",
      growth: "+324%",
      description: translations.agent.matrixAiDesc
    },
    {
      name: "NeuralNet",
      symbol: "NNET",
      launchDate: "2024-01-30",
      marketCap: "$28.7M",
      growth: "+156%",
      description: translations.agent.neuralNetDesc
    },
    {
      name: "CyberCore",
      symbol: "CYBR",
      launchDate: "2024-03-01",
      marketCap: "$15.3M",
      growth: "+89%",
      description: translations.agent.cyberCoreDesc
    }
  ];

  return (
    <div className="min-h-screen bg-cyber-grid overflow-hidden">
      <MatrixRain />
      
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-cyber-dark/80 to-transparent" />
      </div>
      
      <TopNav />
      <Sidebar />
      
      <main className="pt-24 pb-16 px-4 md:ml-0 md:mr-64 relative z-10">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-8">
            <GlitchText text={translations.agent.matrixAiAgent} className="text-3xl" />
            <Link to="/" className="cyber-button flex items-center gap-2">
              <Home className="w-4 h-4" />
              <span>{translations.common.home}</span>
            </Link>
          </div>

          <div className="cyber-panel p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <p className="cyber-text text-lg">
                  {translations.agent.agentDescription}
                </p>
                <div className="space-y-4">
                  <h3 className="text-xl cyber-text">{translations.agent.capabilities}:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <div className="h-2 w-2 bg-matrix-green rounded-full animate-pulse" />
                      <span>{translations.agent.nlpCapability}</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="h-2 w-2 bg-matrix-green rounded-full animate-pulse" />
                      <span>{translations.agent.marketAnalysis}</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="h-2 w-2 bg-matrix-green rounded-full animate-pulse" />
                      <span>{translations.agent.problemSolving}</span>
                    </li>
                  </ul>
                </div>
                <a 
                  href="https://matrixoracle.xyz/oldindex.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cyber-button inline-flex items-center space-x-2"
                >
                  <span>{translations.agent.accessAgent}</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              <div className="cyber-panel p-4">
                <img 
                  src="/lovable-uploads/24412fd5-2e8b-4dd9-8497-3a6cb8a279a6.png"
                  alt={translations.agent.aiAgentInterface}
                  className="w-full h-auto rounded-lg border border-matrix-green/30"
                />
              </div>
            </div>
          </div>

          <div className="cyber-panel p-8">
            <GlitchText text={translations.agent.aiLaunchedTokens} className="text-2xl mb-6" />
            <div className="grid md:grid-cols-3 gap-6">
              {launchedTokens.map((token) => (
                <div key={token.name} className="cyber-panel p-6 space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl cyber-text">{token.name}</h3>
                      <p className="text-matrix-green/60">{token.symbol}</p>
                    </div>
                    <div className="flex items-center text-matrix-light">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      <span>{token.growth}</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-matrix-green/60">{translations.agent.marketCap}</span>
                      <span className="font-mono">{token.marketCap}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-matrix-green/60">{translations.agent.launchDate}</span>
                      <span className="font-mono">{token.launchDate}</span>
                    </div>
                  </div>
                  <p className="text-sm text-matrix-green/80">{token.description}</p>
                  <div className="h-1 bg-matrix-green/20 rounded overflow-hidden">
                    <div className="h-full bg-matrix-green animate-pulse" style={{ width: token.growth.replace('+', '').replace('%', '') + '%' }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Agents;