import TopNav from "../components/TopNav";
import Sidebar from "../components/Sidebar";
import MatrixRain from "../components/MatrixRain";
import GlitchText from "../components/GlitchText";
import HexagonGrid from "../components/HexagonGrid";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Database, Home, Cpu, Network, Shield } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const fetchSuiStats = async () => {
  const response = await fetch('https://api.sui.network/stats');
  if (!response.ok) {
    throw new Error('Failed to fetch Sui stats');
  }
  return response.json();
};

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const { translations } = useLanguage();
  const { toast } = useToast();

  const { data: suiStats, isLoading } = useQuery({
    queryKey: ['suiStats'],
    queryFn: fetchSuiStats,
    refetchInterval: 30000 // Refresh every 30 seconds
  });

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
          <div className="cyber-panel p-8 mb-8 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-cyber-dark/90 to-transparent z-10" />
            <div className="relative z-20">
              <div className="mb-2 text-matrix-light text-sm tracking-wider animate-pulse">
                SYSTEM ONLINE
              </div>
              <GlitchText 
                text={translations.welcome}
                className="block text-4xl md:text-6xl mb-6"
              />
              <p className="cyber-text text-lg md:text-xl mb-8 leading-relaxed max-w-3xl">
                {translations.subtitle}
              </p>
              <div className="flex gap-4">
                <Link to="/console" className="cyber-button group relative">
                  <span className="relative z-10">{translations.initConnection}</span>
                  <div className="absolute inset-0 bg-matrix-green/20 group-hover:bg-matrix-green/30 transition-colors duration-300" />
                </Link>
                <Button 
                  onClick={handleConnectSui}
                  className="cyber-button bg-matrix-green/10 hover:bg-matrix-green/20"
                >
                  Connect SUI Wallet
                </Button>
              </div>
            </div>
          </div>

          {/* SUI Network Stats */}
          <div className="cyber-panel p-8 mb-8">
            <GlitchText text="SUI NETWORK STATUS" className="text-2xl mb-6" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {!isLoading && suiStats && [
                { label: "Total Transactions", value: suiStats.totalTransactions?.toLocaleString() || "Loading..." },
                { label: "TPS", value: suiStats.tps || "Loading..." },
                { label: "Active Validators", value: suiStats.activeValidators || "Loading..." }
              ].map((stat, index) => (
                <div key={index} className="cyber-panel p-4">
                  <h3 className="text-matrix-light text-sm mb-2">{stat.label}</h3>
                  <p className="text-2xl font-mono animate-pulse">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Feature Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: Database,
                title: translations.neuralProcessing,
                description: translations.neuralDesc
              },
              {
                icon: Shield,
                title: translations.secureProtocol,
                description: translations.secureDesc
              },
              {
                icon: Network,
                title: translations.performance,
                description: translations.performanceDesc
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
        </div>
      </main>
    </div>
  );
};

export default Index;