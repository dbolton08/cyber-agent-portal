import TopNav from "../components/TopNav";
import Sidebar from "../components/Sidebar";
import MatrixRain from "../components/MatrixRain";
import GlitchText from "../components/GlitchText";
import HexagonGrid from "../components/HexagonGrid";
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Brain, Shield, Cpu } from "lucide-react";
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
        className="relative z-10 pt-24 pb-16 px-4 md:px-8 transition-all duration-300 md:pr-72"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="cyber-panel p-8 mb-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyber-dark/90 to-transparent z-10" />
            <div className="relative z-20 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1 text-left">
                <div className="mb-2 text-matrix-light text-sm tracking-wider animate-pulse">
                  {translations.common.online}
                </div>
                <GlitchText 
                  text="MATRIX ORACLE"
                  className="block text-4xl md:text-6xl mb-6 font-bold font-mono"
                />
                <p className="cyber-text text-lg md:text-xl mb-8 leading-relaxed max-w-3xl opacity-80">
                  Enter a realm where artificial intelligence and human consciousness converge on the Sui blockchain.
                </p>
                <Link 
                  to="/console" 
                  className="cyber-button group relative inline-flex justify-center overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    <Cpu className="w-5 h-5 mr-2" />
                    Initialize Connection
                  </span>
                </Link>
              </div>
              <div className="flex-1 relative w-full max-w-md">
                <img 
                  src="/photo-1485827404703-89b55fcc595e.jpg"
                  alt="AI Agent"
                  className="rounded-lg w-full shadow-lg shadow-matrix-green/20 border border-matrix-green/30 transform hover:scale-105 transition-all duration-500"
                />
                <div className="absolute -inset-0.5 bg-gradient-to-r from-matrix-green/30 to-matrix-accent/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg blur" />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Brain,
                title: "Neural Processing",
                description: "Advanced AI algorithms powered by quantum computing"
              },
              {
                icon: Shield,
                title: "Secure Protocol",
                description: "Military-grade encryption for all operations"
              },
              {
                icon: Cpu,
                title: "High Performance",
                description: "Leveraging Sui's parallel execution engine"
              }
            ].map((feature, i) => (
              <div 
                key={feature.title}
                className="cyber-panel p-6 group hover:scale-[1.02] transition-all duration-300 relative overflow-hidden bg-cyber-dark/50"
              >
                <feature.icon className="w-12 h-12 mb-4 text-matrix-light" />
                <h3 className="text-xl mb-2 cyber-text">{feature.title}</h3>
                <p className="text-matrix-green/80">{feature.description}</p>
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-matrix-green/5 rounded-full blur-3xl transform translate-x-16 translate-y-16" />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;