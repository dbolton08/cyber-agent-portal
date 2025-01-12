import React, { useState, useEffect, useRef } from 'react';
import TopNav from "../components/TopNav";
import Sidebar from "../components/Sidebar";
import MatrixRain from "../components/MatrixRain";
import GlitchText from "../components/GlitchText";
import { Terminal, Cpu, Shield, Network, Database } from 'lucide-react';
import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "@/components/ui/use-toast";

const Console = () => {
  const { translations } = useLanguage();
  const { toast } = useToast();
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [isTyping, setIsTyping] = useState(true);
  const [systemStatus, setSystemStatus] = useState({
    cpu: Math.floor(Math.random() * 40) + 60,
    memory: Math.floor(Math.random() * 30) + 70,
    network: Math.floor(Math.random() * 20) + 80,
    security: Math.floor(Math.random() * 10) + 90
  });
  const consoleEndRef = useRef<HTMLDivElement>(null);

  const initialMessages = [
    "MATRIX ORACLE v1.0.0",
    "Initializing quantum neural network...",
    "Establishing secure connection...",
    "Connection established.",
    "Welcome to the Matrix Oracle Console",
    "",
    "Available Commands:",
    "help     - Show available commands",
    "clear    - Clear console output",
    "status   - Show system status",
    "scan     - Scan network activity",
    "connect  - Initialize connection",
    "analyze  - Run market analysis",
    "upgrade  - Upgrade neural network",
    "encrypt  - Encrypt message",
    "decrypt  - Decrypt message",
    "ping     - Test network latency",
    "",
    "Type 'help' for more information."
  ];

  useEffect(() => {
    let index = 0;
    const typeNextMessage = () => {
      if (index < initialMessages.length) {
        setHistory(prev => [...prev, initialMessages[index]]);
        index++;
        setTimeout(typeNextMessage, Math.random() * 100 + 50);
      } else {
        setIsTyping(false);
      }
    };
    typeNextMessage();

    // Update system status periodically
    const statusInterval = setInterval(() => {
      setSystemStatus(prev => ({
        cpu: Math.min(100, Math.max(60, prev.cpu + (Math.random() * 10 - 5))),
        memory: Math.min(100, Math.max(70, prev.memory + (Math.random() * 8 - 4))),
        network: Math.min(100, Math.max(80, prev.network + (Math.random() * 6 - 3))),
        security: Math.min(100, Math.max(90, prev.security + (Math.random() * 4 - 2)))
      }));
    }, 3000);

    return () => clearInterval(statusInterval);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [history]);

  const scrollToBottom = () => {
    consoleEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleCommand = (cmd: string) => {
    const commands: Record<string, () => string> = {
      help: () => "Available Commands:\n" +
        "help     - Show available commands\n" +
        "clear    - Clear console output\n" +
        "status   - Show system status\n" +
        "scan     - Scan network activity\n" +
        "connect  - Initialize connection\n" +
        "analyze  - Run market analysis\n" +
        "upgrade  - Upgrade neural network\n" +
        "encrypt  - Encrypt message\n" +
        "decrypt  - Decrypt message\n" +
        "ping     - Test network latency",
      clear: () => {
        setHistory([]);
        return '';
      },
      status: () => `System Status:\n` +
        `CPU Usage: ${systemStatus.cpu.toFixed(1)}%\n` +
        `Memory: ${systemStatus.memory.toFixed(1)}%\n` +
        `Network: ${systemStatus.network.toFixed(1)}%\n` +
        `Security: ${systemStatus.security.toFixed(1)}%`,
      scan: () => {
        toast({
          title: "Network Scan Initiated",
          description: "Scanning for active nodes...",
          duration: 2000,
        });
        return "Scanning network...\nActive nodes detected: 42\nNetwork traffic: Normal\nNo threats detected";
      },
      connect: () => "Establishing secure connection...\nInitializing quantum encryption...\nConnection established",
      analyze: () => "Analyzing market conditions...\nBullish patterns detected\nAI confidence: 89.4%\nRecommended action: ACCUMULATE",
      upgrade: () => {
        toast({
          title: "System Upgrade",
          description: "Neural network optimization in progress...",
          duration: 2000,
        });
        return "Upgrading neural network...\nOptimizing synaptic connections...\nUpgrade complete. Performance increased by 15%";
      },
      encrypt: () => "Message encrypted using quantum-resistant algorithm\nKey exchange successful",
      decrypt: () => "Decryption successful\nMessage integrity verified\nQuantum state preserved",
      ping: () => {
        const latency = Math.floor(Math.random() * 20) + 10;
        return `Pinging network nodes...\nLatency: ${latency}ms\nPacket loss: 0%`;
      }
    };

    const newOutput = commands[cmd.toLowerCase()]?.() || `Error: Unknown command '${cmd}'`;
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
      
      <main className="pt-24 pb-16 px-4 md:ml-64 relative z-10">
        <div className="container mx-auto max-w-6xl">
          {/* System Status Panel */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="cyber-panel p-4 flex items-center space-x-3">
              <Cpu className="w-5 h-5 text-matrix-green animate-pulse" />
              <div>
                <div className="text-sm text-matrix-green">CPU</div>
                <div className="text-lg font-mono">{systemStatus.cpu.toFixed(1)}%</div>
              </div>
            </div>
            <div className="cyber-panel p-4 flex items-center space-x-3">
              <Database className="w-5 h-5 text-matrix-green animate-pulse" />
              <div>
                <div className="text-sm text-matrix-green">Memory</div>
                <div className="text-lg font-mono">{systemStatus.memory.toFixed(1)}%</div>
              </div>
            </div>
            <div className="cyber-panel p-4 flex items-center space-x-3">
              <Network className="w-5 h-5 text-matrix-green animate-pulse" />
              <div>
                <div className="text-sm text-matrix-green">Network</div>
                <div className="text-lg font-mono">{systemStatus.network.toFixed(1)}%</div>
              </div>
            </div>
            <div className="cyber-panel p-4 flex items-center space-x-3">
              <Shield className="w-5 h-5 text-matrix-green animate-pulse" />
              <div>
                <div className="text-sm text-matrix-green">Security</div>
                <div className="text-lg font-mono">{systemStatus.security.toFixed(1)}%</div>
              </div>
            </div>
          </div>

          <div className="cyber-panel p-6 mb-8">
            <div className="flex items-center mb-4">
              <Terminal className="w-6 h-6 mr-2 text-matrix-green" />
              <GlitchText text="MATRIX CONSOLE" className="text-2xl" />
            </div>
            
            <div className="cyber-panel bg-cyber-dark/90 p-4 h-[60vh] overflow-y-auto font-mono text-sm space-y-1">
              {history.map((line, i) => (
                <div key={i} className={`text-matrix-green ${line.startsWith('>') ? 'pl-2 border-l border-matrix-green' : ''}`}>
                  {line}
                </div>
              ))}
              {isTyping && (
                <div className="text-matrix-green animate-pulse">_</div>
              )}
              <div ref={consoleEndRef} />
            </div>
            
            <form onSubmit={handleSubmit} className="mt-4 flex items-center space-x-2">
              <span className="text-matrix-green animate-pulse">></span>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent border-none outline-none text-matrix-green font-mono focus:ring-1 focus:ring-matrix-green/30 rounded px-2 py-1"
                placeholder={isTyping ? "" : "Enter command..."}
                disabled={isTyping}
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