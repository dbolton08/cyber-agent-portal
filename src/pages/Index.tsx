import TopNav from "../components/TopNav";
import Sidebar from "../components/Sidebar";
import MatrixRain from "../components/MatrixRain";
import GlitchText from "../components/GlitchText";
import HexagonGrid from "../components/HexagonGrid";
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Brain, Shield, Cpu, Sparkles, Network, Database } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const { translations } = useLanguage();
  const { toast } = useToast();
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

  const features = [
    {
      icon: Brain,
      title: translations.features.neuralProcessing,
      description: translations.features.neuralDesc,
      color: "from-purple-500 to-pink-500",
      image: "/placeholder_images/photo-1485827404703-89b55fcc595e.jpg"
    },
    {
      icon: Shield,
      title: translations.features.secureProtocol,
      description: translations.features.secureDesc,
      color: "from-green-500 to-emerald-500",
      image: "/placeholder_images/photo-1526374965328-7f61d4dc18c5.jpg"
    },
    {
      icon: Cpu,
      title: translations.features.performance,
      description: translations.features.performanceDesc,
      color: "from-blue-500 to-cyan-500",
      image: "/placeholder_images/photo-1518770660439-4636190af475.jpg"
    },
    {
      icon: Sparkles,
      title: translations.features.aiAssistant,
      description: translations.features.aiAssistantDesc,
      color: "from-yellow-500 to-orange-500",
      image: "/placeholder_images/photo-1518770660439-4636190af475.jpg"
    },
    {
      icon: Network,
      title: translations.features.quantumComputing,
      description: translations.features.quantumDesc,
      color: "from-red-500 to-rose-500",
      image: "/placeholder_images/photo-1518770660439-4636190af475.jpg"
    },
    {
      icon: Database,
      title: translations.features.neuralInterface,
      description: translations.features.neuralInterfaceDesc,
      color: "from-indigo-500 to-violet-500",
      image: "/placeholder_images/photo-1518770660439-4636190af475.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-cyber-grid overflow-hidden">
      <MatrixRain />
      <HexagonGrid />
      
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none">
        <div 
          className="absolute inset-0 bg-gradient-to-b from-cyber-dark/80 to-transparent"
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
          <div className="cyber-panel p-8 mb-8 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-cyber-dark/90 to-transparent z-10" />
            <div className="relative z-20">
              <div className="mb-2 text-matrix-light text-sm tracking-wider animate-pulse">
                {translations.common.online}
              </div>
              <GlitchText 
                text={translations.common.welcome}
                className="block text-4xl md:text-6xl mb-6"
              />
              <p className="cyber-text text-lg md:text-xl mb-8 leading-relaxed max-w-3xl">
                {translations.common.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/console" 
                  className="cyber-button group relative inline-flex justify-center overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    <Cpu className="w-5 h-5 mr-2" />
                    {translations.common.initConnection}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-matrix-green/20 to-matrix-accent/20 group-hover:from-matrix-green/30 group-hover:to-matrix-accent/30 transition-colors duration-300" />
                </Link>
              </div>
            </div>
            <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-96 h-96 opacity-30">
              <img 
                src="/placeholder_images/photo-1485827404703-89b55fcc595e.jpg"
                alt="AI Bot"
                className="w-full h-full object-cover rounded-full animate-float"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {features.map((feature, i) => (
              <div 
                key={feature.title}
                className="cyber-panel p-6 group hover:scale-[1.02] transition-all duration-300 relative overflow-hidden"
                style={{ 
                  animationDelay: `${i * 200}ms`,
                  background: `linear-gradient(135deg, rgba(0,0,0,0.9), rgba(0,0,0,0.8))`
                }}
              >
                <div className={`absolute inset-0 opacity-10 bg-gradient-to-br ${feature.color}`} />
                <feature.icon className="w-12 h-12 mb-4 text-matrix-light relative z-10" />
                <h3 className="text-xl mb-2 cyber-text relative z-10">{feature.title}</h3>
                <p className="text-matrix-green/80 relative z-10">{feature.description}</p>
                {feature.image && (
                  <div className="absolute -bottom-10 -right-10 w-32 h-32 opacity-20 rotate-12">
                    <img 
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
