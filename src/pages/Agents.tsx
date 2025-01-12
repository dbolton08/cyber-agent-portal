import React from 'react';
import TopNav from "../components/TopNav";
import Sidebar from "../components/Sidebar";
import MatrixRain from "../components/MatrixRain";
import GlitchText from "../components/GlitchText";
import { ExternalLink } from 'lucide-react';
import { useLanguage } from "@/contexts/LanguageContext";

const Agents = () => {
  const { translations } = useLanguage();

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
          <div className="cyber-panel p-8 mb-8">
            <GlitchText text="MATRIX AI AGENT" className="text-3xl mb-6" />
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <p className="cyber-text text-lg">
                  Interface with our advanced AI agent, trained on the principles of the Matrix.
                  Unlock the secrets of the digital realm through natural conversation.
                </p>
                <div className="space-y-4">
                  <h3 className="text-xl cyber-text">Capabilities:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <div className="h-2 w-2 bg-matrix-green rounded-full animate-pulse" />
                      <span>Natural Language Processing</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="h-2 w-2 bg-matrix-green rounded-full animate-pulse" />
                      <span>Blockchain Integration</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="h-2 w-2 bg-matrix-green rounded-full animate-pulse" />
                      <span>Advanced Problem Solving</span>
                    </li>
                  </ul>
                </div>
                <a 
                  href="https://matrixoracle.xyz/oldindex.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cyber-button inline-flex items-center space-x-2"
                >
                  <span>Access AI Agent</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              <div className="cyber-panel p-4">
                <img 
                  src="/lovable-uploads/24412fd5-2e8b-4dd9-8497-3a6cb8a279a6.png"
                  alt="Matrix AI Agent Interface"
                  className="w-full h-auto rounded-lg border border-matrix-green/30"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Agents;