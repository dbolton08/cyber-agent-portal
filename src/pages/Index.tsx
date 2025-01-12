import TopNav from "../components/TopNav";
import Sidebar from "../components/Sidebar";
import MatrixRain from "../components/MatrixRain";
import GlitchText from "../components/GlitchText";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { ArrowRight, Brain, Shield, Cpu } from "lucide-react";

const Index = () => {
  const { translations } = useLanguage();

  return (
    <div className="min-h-screen bg-cyber-dark overflow-hidden">
      <MatrixRain />
      
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-cyber-dark/80 to-transparent" />
      </div>
      
      <TopNav />
      <Sidebar />
      
      <main className="relative z-10 pt-24 pb-16 px-4 md:px-8">
        <div className="container mx-auto max-w-7xl">
          {/* Hero Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-matrix-green/10 px-4 py-2 rounded-full">
                <div className="h-2 w-2 bg-matrix-green rounded-full animate-pulse" />
                <span className="text-matrix-green text-sm">
                  {translations.common.online}
                </span>
              </div>
              
              <GlitchText 
                text={translations.common.welcome}
                className="text-5xl md:text-7xl leading-tight"
              />
              
              <p className="text-matrix-light text-lg md:text-xl leading-relaxed max-w-2xl">
                {translations.common.subtitle}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/console" 
                  className="cyber-button group inline-flex items-center justify-center"
                >
                  <span className="mr-2">{translations.common.initConnection}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="/lovable-uploads/0627d7e8-74b2-4a50-901b-f87ee724c18c.png"
                alt="Cyberpunk Character"
                className="w-full rounded-lg cyber-panel p-2"
              />
              <div className="absolute -inset-4 bg-gradient-to-r from-matrix-green/20 to-matrix-accent/20 rounded-lg -z-10 blur-xl" />
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: Brain,
                title: translations.features.neuralProcessing,
                description: translations.features.neuralDesc
              },
              {
                icon: Shield,
                title: translations.features.secureProtocol,
                description: translations.features.secureDesc
              },
              {
                icon: Cpu,
                title: translations.features.performance,
                description: translations.features.performanceDesc
              }
            ].map((feature, i) => (
              <div 
                key={feature.title}
                className="cyber-panel p-6 hover:scale-[1.02] transition-all duration-300"
              >
                <feature.icon className="w-12 h-12 mb-4 text-matrix-green" />
                <h3 className="text-xl mb-2 cyber-text">{feature.title}</h3>
                <p className="text-matrix-light/80">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Console Preview */}
          <div className="cyber-panel p-8">
            <div className="relative rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark to-transparent z-10" />
              <img 
                src="/lovable-uploads/17dd5bed-63f0-4fd3-a52b-a5c493b01dad.png"
                alt="Matrix Oracle Interface"
                className="w-full h-auto rounded-lg border border-matrix-green/30"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;