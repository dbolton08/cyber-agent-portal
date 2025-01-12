import React, { useState, useEffect, useRef } from 'react';
import TopNav from "../components/TopNav";
import Sidebar from "../components/Sidebar";
import MatrixRain from "../components/MatrixRain";
import GlitchText from "../components/GlitchText";
import { Terminal } from 'lucide-react';
import { useLanguage } from "@/contexts/LanguageContext";

const Console = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([
    'Matrix Oracle v1.0.0',
    'Type "help" for available commands'
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
      help: () => `Available commands:
help - Show this help message
clear - Clear console
status - Check system status
scan - Scan network for nodes
connect - Establish secure connection
disconnect - Terminate connection
analyze - Analyze market conditions
deploy - Deploy smart contract
mine - Mine SUI blocks
hack - Attempt system breach (simulated)
upgrade - Upgrade neural network
train - Train AI model
market - Show market statistics
network - Display network metrics
ping - Test network latency
encrypt - Encrypt message
decrypt - Decrypt message
benchmark - Run system benchmark`,
      clear: () => {
        setHistory(['Matrix Oracle v1.0.0']);
        return '';
      },
      status: () => 'All systems operational. Neural network at 98.7% efficiency.',
      scan: () => 'Scanning network...\nFound 42 active nodes\nDetected 3 potential threats\nNetwork security: OPTIMAL',
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

    const newOutput = commands[cmd.toLowerCase()]?.() || `Command not found: ${cmd}`;
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
              <GlitchText text="MATRIX CONSOLE" className="text-2xl" />
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