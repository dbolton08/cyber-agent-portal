import TopNav from "../components/TopNav";
import Sidebar from "../components/Sidebar";
import MatrixRain from "../components/MatrixRain";
import GlitchText from "../components/GlitchText";
import HexagonGrid from "../components/HexagonGrid";
import { useEffect, useState } from "react";

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    setIsLoaded(true);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-cyber-grid overflow-hidden">
      <MatrixRain />
      <HexagonGrid />
      
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-cyber-dark/80 to-transparent" />
      </div>
      
      <TopNav />
      <Sidebar />
      
      <main className="pt-24 pb-16 px-4 md:pr-72 relative">
        <div className="container mx-auto">
          {/* Hero Section */}
          <div className="cyber-panel p-8 mb-8 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-cyber-dark/90 to-transparent z-10" />
            <img 
              src="/lovable-uploads/24412fd5-2e8b-4dd9-8497-3a6cb8a279a6.png"
              alt="Matrix Oracle"
              className="absolute inset-0 w-full h-full object-cover object-center opacity-40 group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="relative z-20">
              <div className="mb-2 text-matrix-light text-sm tracking-wider animate-pulse">
                SYSTEM ONLINE
              </div>
              <GlitchText 
                text="MATRIX ORACLE"
                className="block text-5xl md:text-6xl mb-6"
              />
              <p className="cyber-text text-lg md:text-xl mb-8 leading-relaxed max-w-3xl">
                Enter a realm where artificial intelligence and human consciousness converge. 
                The Matrix Oracle stands as your gateway to digital enlightenment, powered by 
                next-generation AI agents ready to unlock the secrets of the digital universe.
              </p>
              <button className="cyber-button group relative">
                <span className="relative z-10">Initialize Connection</span>
                <div className="absolute inset-0 bg-matrix-green/20 group-hover:bg-matrix-green/30 transition-colors duration-300" />
              </button>
            </div>
          </div>

          {/* Agent Status Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="cyber-panel p-6 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-matrix-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <h2 className="cyber-text text-xl mb-4 flex items-center">
                <span className="h-2 w-2 bg-matrix-green rounded-full mr-2 animate-pulse" />
                Active Agents
              </h2>
              <div className="space-y-4">
                {["Sentinel", "Guardian", "Observer"].map((agent, i) => (
                  <div key={agent} className="flex items-center space-x-3 cyber-text">
                    <div className="h-3 w-3 rounded-full bg-matrix-green animate-cyber-pulse" 
                         style={{ animationDelay: `${i * 200}ms` }} />
                    <span>{agent}</span>
                    <div className="flex-1 h-[1px] bg-matrix-green/30" />
                    <span className="text-matrix-light">ONLINE</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="cyber-panel p-6">
              <h2 className="cyber-text text-xl mb-4">System Metrics</h2>
              <div className="space-y-6">
                {[
                  { name: "Neural Network", value: 92 },
                  { name: "Quantum Processing", value: 87 },
                  { name: "Data Streams", value: 95 }
                ].map((metric) => (
                  <div key={metric.name} className="space-y-2">
                    <div className="flex justify-between cyber-text text-sm">
                      <span>{metric.name}</span>
                      <span>{metric.value}%</span>
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
            </div>
          </div>

          {/* Neural Network Status */}
          <div className="cyber-panel p-6 relative overflow-hidden">
            <div className="absolute inset-0 flex">
              {[...Array(20)].map((_, i) => (
                <div 
                  key={i} 
                  className="flex-1 overflow-hidden"
                  style={{ 
                    animationDelay: `${i * 0.1}s`,
                    opacity: 0.1 + (i % 3) * 0.1
                  }}
                >
                  <div className="animate-matrix-rain text-matrix-green font-mono text-xl">
                    {[...Array(30)].map((_, j) => (
                      <div key={j} className="whitespace-pre">
                        {String.fromCharCode(33 + Math.random() * 93)}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="relative z-10">
              <GlitchText 
                text="Neural Network Status"
                className="block text-2xl mb-4"
              />
              <p className="cyber-text">
                Matrix protocols active. All systems operational.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;