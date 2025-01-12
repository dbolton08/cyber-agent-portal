import React, { useState, useEffect, useRef } from 'react';
import TopNav from "../components/TopNav";
import Sidebar from "../components/Sidebar";
import MatrixRain from "../components/MatrixRain";
import GlitchText from "../components/GlitchText";
import { Terminal } from 'lucide-react';
import { useLanguage } from "@/contexts/LanguageContext";

const Console = () => {
  const { translations } = useLanguage();
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([
    translations.console.title + ' v1.0.0',
    translations.console.availableCommands
  ]);
  const consoleEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    consoleEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [history]);

  const handleCommand = (cmd: string) => {
    const commands: Record<string, () => string> = {
      help: () => translations.console.availableCommands + `:\n
help - ${translations.console.availableCommands}
clear - ${translations.console.description}
status - ${translations.system.systemStatus}
scan - ${translations.network.networkActivity}
connect - ${translations.system.initConnection}`,
      clear: () => {
        setHistory([translations.console.title + ' v1.0.0']);
        return '';
      },
      status: () => translations.system.systemStatus + ': ' + translations.system.online,
      scan: () => translations.network.networkActivity + '...\n' + translations.network.activeNodes + ': 42',
      connect: () => 'Establishing secure connection...\nInitializing quantum encryption...\nConnection established',
      disconnect: () => 'Disconnecting...\nSaving neural state...\nConnection terminated',
      analyze: () => 'Analyzing market conditions...\nBullish patterns detected\nAI confidence: 89.4%\nRecommended action: ACCUMULATE',
      deploy: () => 'Deploying smart contract...\nCompiling Move code...\nVerifying bytecode...\nContract deployed successfully',
      mine: () => 'Mining SUI blocks...\nHash rate: 42.5 TH/s\nBlock found! Height: 1,337,420',
      hack: () => 'UNAUTHORIZED ACCESS ATTEMPT DETECTED\nInitiating countermeasures...\nThreat neutralized',
      upgrade: () => 'Upgrading neural network...\nOptimizing synaptic connections...\nUpgrade complete. Performance increased by 15%',
      train: () => 'Training AI model...\nEpoch 1/10: Loss 0.0342\nEpoch 10/10: Loss 0.0021\nTraining complete',
      market: () => 'Market Analysis:\nSUI Price: $1.23\n24h Volume: $142M\nMarket Sentiment: Bullish',
      network: () => 'Network Status:\nNodes: 1,337\nTPS: 2,345\nLatency: 42ms',
      ping: () => 'Pinging network nodes...\nAverage latency: 42ms\nPacket loss: 0%',
      encrypt: () => 'Message encrypted using quantum-resistant algorithm\nKey exchange successful',
      decrypt: () => 'Decryption successful\nMessage integrity verified\nQuantum state preserved',
      benchmark: () => 'Running benchmark...\nCPU Score: 9,842\nMemory Score: 7,654\nNetwork Score: 8,921'
    };

    const newOutput = commands[cmd.toLowerCase()]?.() || `${translations.error}: ${cmd}`;
    if (newOutput) {
      setHistory(prev => [...prev, `> ${cmd}`, ...newOutput.split('\n')]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    handleCommand(input.trim());
    setInput('');
  };

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
          <div className="cyber-panel p-6 mb-8">
            <div className="flex items-center mb-4">
              <Terminal className="w-6 h-6 mr-2" />
              <GlitchText text={translations.console.title} className="text-2xl" />
            </div>
            
            <div className="cyber-panel bg-cyber-dark/90 p-4 h-[60vh] overflow-y-auto font-mono text-sm space-y-2">
              {history.map((line, i) => (
                <div key={i} className="text-matrix-green">
                  {line}
                </div>
              ))}
              <div ref={consoleEndRef} />
            </div>
            
            <form onSubmit={handleSubmit} className="mt-4 flex">
              <span className="text-matrix-green mr-2">&gt;</span>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent border-none outline-none text-matrix-green font-mono"
                placeholder={translations.console.enterCommand}
                autoFocus
              />
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Console;
