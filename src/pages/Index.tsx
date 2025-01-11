import TopNav from "../components/TopNav";
import Sidebar from "../components/Sidebar";
import MatrixRain from "../components/MatrixRain";
import GlitchText from "../components/GlitchText";
import HexagonGrid from "../components/HexagonGrid";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Database, Brain, Cpu, Network, Shield } from "lucide-react";

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
      
      <main className="pt-24 pb-16 px-4 md:ml-0 md:mr-64 relative z-10">
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
                className="block text-4xl md:text-6xl mb-6"
              />
              <p className="cyber-text text-lg md:text-xl mb-8 leading-relaxed max-w-3xl">
                Enter a realm where artificial intelligence and human consciousness converge on the Sui blockchain. 
                The Matrix Oracle stands as your gateway to digital enlightenment, powered by 
                next-generation AI agents ready to unlock the secrets of the digital universe.
              </p>
              <Link to="/console" className="cyber-button group relative">
                <span className="relative z-10">Initialize Connection</span>
                <div className="absolute inset-0 bg-matrix-green/20 group-hover:bg-matrix-green/30 transition-colors duration-300" />
              </Link>
            </div>
          </div>

          {/* Feature Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: Brain,
                title: "Neural Processing",
                description: "Advanced AI algorithms powered by quantum computing"
              },
              {
                icon: Database,
                title: "Sui Integration",
                description: "Seamless blockchain operations on Sui's high-performance network"
              },
              {
                icon: Shield,
                title: "Secure Protocol",
                description: "Military-grade encryption for all operations"
              }
            ].map((feature, i) => (
              <div key={feature.title} 
                   className="cyber-panel p-6 group hover:scale-[1.02] transition-transform duration-300"
                   style={{ animationDelay: `${i * 200}ms` }}>
                <feature.icon className="w-12 h-12 mb-4 text-matrix-light" />
                <h3 className="text-xl mb-2 cyber-text">{feature.title}</h3>
                <p className="text-matrix-green/80">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Sui Blockchain Section */}
          <div className="cyber-panel p-8 mb-12 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-matrix-green/5 to-transparent opacity-50" />
            <div className="relative z-10">
              <GlitchText 
                text="SUI BLOCKCHAIN INTEGRATION"
                className="block text-2xl md:text-3xl mb-6"
              />
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl cyber-text">High Performance</h3>
                  <p className="text-matrix-green/80">
                    Leveraging Sui's parallel execution engine for unprecedented throughput and minimal latency.
                  </p>
                  <div className="h-2 bg-cyber-dark rounded overflow-hidden">
                    <div className="h-full bg-matrix-light w-[95%] rounded-r animate-pulse" />
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl cyber-text">Smart Contracts</h3>
                  <p className="text-matrix-green/80">
                    Advanced Move-based smart contracts ensuring secure and efficient operations.
                  </p>
                  <div className="h-2 bg-cyber-dark rounded overflow-hidden">
                    <div className="h-full bg-matrix-light w-[90%] rounded-r animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Live Network Stats */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="cyber-panel p-6">
              <h2 className="cyber-text text-xl mb-6 flex items-center">
                <Network className="mr-2" />
                Network Statistics
              </h2>
              <div className="space-y-6">
                {[
                  { name: "Network Uptime", value: 99.99 },
                  { name: "Transaction Speed", value: 95 },
                  { name: "Node Distribution", value: 88 }
                ].map((stat) => (
                  <div key={stat.name} className="space-y-2">
                    <div className="flex justify-between cyber-text text-sm">
                      <span>{stat.name}</span>
                      <span>{stat.value}%</span>
                    </div>
                    <div className="h-2 bg-cyber-dark rounded overflow-hidden">
                      <div 
                        className="h-full bg-matrix-green rounded-r transition-all duration-1000 animate-pulse"
                        style={{ width: `${stat.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="cyber-panel p-6">
              <h2 className="cyber-text text-xl mb-6 flex items-center">
                <Cpu className="mr-2" />
                System Performance
              </h2>
              <div className="space-y-4">
                {[
                  { name: "AI Processing", value: "1.2 PetaFLOPS" },
                  { name: "Active Nodes", value: "1,337" },
                  { name: "Response Time", value: "< 100ms" }
                ].map((metric) => (
                  <div key={metric.name} className="flex items-center space-x-3 cyber-text">
                    <div className="h-3 w-3 rounded-full bg-matrix-green animate-cyber-pulse" />
                    <span>{metric.name}</span>
                    <div className="flex-1 h-[1px] bg-matrix-green/30" />
                    <span className="text-matrix-light">{metric.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
