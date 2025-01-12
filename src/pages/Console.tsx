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
    'Matrix Console v1.0.0',
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
      help: () => 'Available commands: help, clear, status, scan, connect, disconnect',
      clear: () => {
        setHistory(['Matrix Console v1.0.0']);
        return '';
      },
      status: () => 'All systems operational. Connection secure.',
      scan: () => 'Scanning network...\nFound 42 active nodes\nNo threats detected',
      connect: () => 'Establishing secure connection...\nConnection established',
      disconnect: () => 'Disconnecting...\nConnection terminated'
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