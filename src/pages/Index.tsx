import TopNav from "../components/TopNav";
import Sidebar from "../components/Sidebar";
import MatrixRain from "../components/MatrixRain";
import GlitchText from "../components/GlitchText";
import HexagonGrid from "../components/HexagonGrid";
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Brain, Shield, Cpu, Terminal, Network, Database, Lock, Zap, Code } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const { translations } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    setIsLoaded(true);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setMousePosition({ x, y });
    }
  };

  return (
    <div className="min-h-screen bg-cyber-dark overflow-hidden">
      <MatrixRain />
      <HexagonGrid />
      
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none">
        <div 
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(0,255,65,0.15) 0%, rgba(0,0,0,0.95) 50%)`
          }}
        />
      </div>
      
      <TopNav />
      <Sidebar />
      
      <main 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className="relative z-10 pt-16 pb-16 px-4 md:px-8 transition-all duration-300 md:pr-72"
      >
        <div className="container mx-auto max-w-7xl">
          {/* Hero Section */}
          <div className="cyber-panel p-8 mb-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyber-dark/90 to-transparent z-10" />
            <div className="relative z-20 flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-1 text-left">
                <div className="mb-2 text-matrix-light text-sm tracking-wider animate-pulse">
                  {translations.common.online}
                </div>
                <GlitchText 
                  text="MATRIX ORACLE"
                  className="block text-4xl md:text-6xl mb-6 font-bold font-mono"
                />
                <p className="cyber-text text-lg md:text-xl mb-8 leading-relaxed max-w-3xl opacity-80">
                  Welcome to the future of AI-powered blockchain intelligence. Matrix Oracle bridges the gap between artificial consciousness and decentralized networks.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link 
                    to="/console" 
                    className="cyber-button group relative inline-flex justify-center"
                  >
                    <span className="relative z-10 flex items-center">
                      <Terminal className="w-5 h-5 mr-2" />
                      Access Terminal
                    </span>
                  </Link>
                  <Link 
                    to="/agents" 
                    className="cyber-button group relative inline-flex justify-center"
                  >
                    <span className="relative z-10 flex items-center">
                      <Network className="w-5 h-5 mr-2" />
                      Connect Network
                    </span>
                  </Link>
                </div>
              </div>
              <div className="flex-1 relative w-full max-w-md group">
                <div className="absolute -inset-1 bg-gradient-to-r from-matrix-green to-matrix-accent opacity-75 blur-lg group-hover:opacity-100 transition duration-1000"></div>
                <img 
                  src="/lovable-uploads/737a1806-6fe2-4d45-a8e0-a7f359862ffb.png"
                  alt="Matrix Agent"
                  className="relative rounded-lg w-full shadow-lg border border-matrix-green/30 transform hover:scale-105 transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: Brain,
                title: "Neural Processing",
                description: "Advanced AI algorithms powered by quantum computing architecture"
              },
              {
                icon: Shield,
                title: "Secure Protocol",
                description: "Military-grade encryption ensuring maximum data protection"
              },
              {
                icon: Cpu,
                title: "High Performance",
                description: "Leveraging Sui's parallel execution engine for optimal speed"
              }
            ].map((feature, i) => (
              <div 
                key={feature.title}
                className="cyber-panel p-6 group hover:scale-[1.02] transition-all duration-300 relative overflow-hidden bg-cyber-dark/50"
              >
                <feature.icon className="w-12 h-12 mb-4 text-matrix-light animate-pulse" />
                <h3 className="text-xl mb-2 cyber-text">{feature.title}</h3>
                <p className="text-matrix-green/80">{feature.description}</p>
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-matrix-green/5 rounded-full blur-3xl transform translate-x-16 translate-y-16" />
              </div>
            ))}
          </div>

          {/* About Section */}
          <div className="cyber-panel p-8 mb-12 relative overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl mb-6 cyber-text">What is Matrix Oracle?</h2>
                <div className="space-y-4">
                  <p className="text-matrix-green/90">
                    Matrix Oracle is a revolutionary AI-powered platform that combines advanced artificial intelligence with blockchain technology. Our system provides unprecedented insights and capabilities for the decentralized future.
                  </p>
                  <p className="text-matrix-green/90">
                    Through our neural networks and quantum processing capabilities, we offer real-time analysis, predictive modeling, and secure data processing for the next generation of decentralized applications.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Lock, label: "Secure Encryption", value: "256-bit" },
                  { icon: Zap, label: "Processing Power", value: "1.2 TFLOPS" },
                  { icon: Database, label: "Data Nodes", value: "10,000+" },
                  { icon: Code, label: "Smart Contracts", value: "Automated" }
                ].map((stat, i) => (
                  <div key={stat.label} className="cyber-panel p-4 bg-cyber-dark/30 hover:bg-cyber-dark/50 transition-all duration-300">
                    <stat.icon className="w-8 h-8 mb-2 text-matrix-light" />
                    <div className="text-sm text-matrix-green/70">{stat.label}</div>
                    <div className="text-xl cyber-text">{stat.value}</div>
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