import React from 'react';
import TopNav from "../components/TopNav";
import Sidebar from "../components/Sidebar";
import MatrixRain from "../components/MatrixRain";
import GlitchText from "../components/GlitchText";
import { Server, Cpu, CircuitBoard, HardDrive } from 'lucide-react';
import { useLanguage } from "@/contexts/LanguageContext";

const Systems = () => {
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
            <GlitchText text="SYSTEM STATUS" className="text-3xl mb-6" />
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* System Metrics */}
              <div className="cyber-panel p-6 space-y-6">
                <div className="flex items-center space-x-3">
                  <Server className="w-6 h-6 text-matrix-green" />
                  <h3 className="text-xl cyber-text">Core Systems</h3>
                </div>
                
                {[
                  { name: "CPU Usage", value: 42, icon: Cpu },
                  { name: "Memory Allocation", value: 78, icon: CircuitBoard },
                  { name: "Storage", value: 65, icon: HardDrive }
                ].map((metric) => (
                  <div key={metric.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <metric.icon className="w-4 h-4" />
                        <span className="cyber-text">{metric.name}</span>
                      </div>
                      <span className="text-matrix-light">{metric.value}%</span>
                    </div>
                    <div className="h-2 bg-cyber-dark rounded overflow-hidden">
                      <div 
                        className="h-full bg-matrix-green rounded-r transition-all duration-1000 animate-pulse"
                        style={{ width: `${metric.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* System Processes */}
              <div className="cyber-panel p-6">
                <h3 className="text-xl cyber-text mb-4">Active Processes</h3>
                <div className="space-y-4">
                  {[
                    { name: "Matrix.sys", status: "Running", pid: "0x1A2B" },
                    { name: "Neural.net", status: "Active", pid: "0x3C4D" },
                    { name: "Crypto.exe", status: "Standby", pid: "0x5E6F" },
                    { name: "Guard.sys", status: "Running", pid: "0x7G8H" }
                  ].map((process) => (
                    <div 
                      key={process.pid}
                      className="flex items-center justify-between p-3 cyber-panel hover:bg-matrix-green/10 transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="h-2 w-2 bg-matrix-green rounded-full animate-cyber-pulse" />
                        <span className="cyber-text">{process.name}</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span className="text-sm text-matrix-light">{process.status}</span>
                        <span className="text-sm text-matrix-accent">{process.pid}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Systems;