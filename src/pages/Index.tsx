import TopNav from "../components/TopNav";
import Sidebar from "../components/Sidebar";
import MatrixRain from "../components/MatrixRain";
import GlitchText from "../components/GlitchText";
import HexagonGrid from "../components/HexagonGrid";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Database, Shield, Cpu, Network, ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

// Dummy SUI Network Stats
const dummyStats = {
  totalTransactions: "2,456,789,123",
  tps: "2,345",
  activeValidators: "157",
  totalStake: "458.7M SUI",
  epochNumber: "491"
};

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const { translations } = useLanguage();
  const { toast } = useToast();

  const handleConnectSui = () => {
    toast({
      title: "SUI Integration Coming Soon",
      description: "The SUI wallet integration will be available in the next update.",
      duration: 3000,
    });
  };

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
      
      <main className="relative z-10 pt-24 pb-16 px-4 md:px-8 transition-all duration-300 md:pr-72">
        <div className="container mx-auto max-w-6xl">
          {/* Hero Section */}
          <div className="cyber-panel p-8 mb-8 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-cyber-dark/90 to-transparent z-10" />
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
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/console" className="cyber-button group relative inline-flex justify-center">
                  <span className="relative z-10">Initialize Connection</span>
                  <div className="absolute inset-0 bg-matrix-green/20 group-hover:bg-matrix-green/30 transition-colors duration-300" />
                </Link>
                <button 
                  onClick={handleConnectSui}
                  className="cyber-button bg-matrix-green/10 hover:bg-matrix-green/20 inline-flex items-center justify-center gap-2"
                >
                  <span>Connect SUI Wallet</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* SUI Network Stats */}
          <div className="cyber-panel p-8 mb-8">
            <GlitchText text="SUI NETWORK STATUS" className="text-2xl mb-6" />
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {[
                { label: "Total Transactions", value: dummyStats.totalTransactions },
                { label: "TPS", value: dummyStats.tps },
                { label: "Active Validators", value: dummyStats.activeValidators },
                { label: "Total Stake", value: dummyStats.totalStake },
                { label: "Epoch", value: dummyStats.epochNumber }
              ].map((stat, index) => (
                <div key={index} className="cyber-panel p-4">
                  <h3 className="text-matrix-light text-sm mb-2">{stat.label}</h3>
                  <p className="text-xl font-mono animate-pulse">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Feature Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: Database,
                title: "Neural Processing",
                description: "Advanced AI algorithms powered by quantum computing"
              },
              {
                icon: Shield,
                title: "Secure Protocol",
                description: "Military-grade encryption for all operations"
              },
              {
                icon: Network,
                title: "High Performance",
                description: "Leveraging Sui's parallel execution engine for unprecedented throughput"
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

          {/* Project Description */}
          <div className="cyber-panel p-8 mb-8">
            <GlitchText text="PROJECT OVERVIEW" className="text-2xl mb-6" />
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="cyber-text leading-relaxed">
                  Matrix Oracle represents the convergence of artificial intelligence and blockchain technology. 
                  Our AI agents analyze market conditions, predict trends, and execute strategies with unprecedented precision.
                </p>
                <p className="cyber-text leading-relaxed">
                  Built on the Sui blockchain, we leverage its high-performance infrastructure to deliver 
                  real-time analysis and execution capabilities that were previously impossible.
                </p>
                <div className="flex items-center space-x-2 text-matrix-light">
                  <div className="h-2 w-2 bg-matrix-green rounded-full animate-pulse" />
                  <span>Live System Status: Operational</span>
                </div>
              </div>
              <div className="cyber-panel p-4">
                <img 
                  src="/lovable-uploads/17dd5bed-63f0-4fd3-a52b-a5c493b01dad.png"
                  alt="Matrix Oracle Interface"
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

export default Index;