import React, { useEffect, useRef } from 'react';
import TopNav from "../components/TopNav";
import Sidebar from "../components/Sidebar";
import MatrixRain from "../components/MatrixRain";
import GlitchText from "../components/GlitchText";
import { Wifi, Activity, Globe, Shield } from 'lucide-react';
import { useLanguage } from "@/contexts/LanguageContext";

const Network = () => {
  const { translations } = useLanguage();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const nodes: { x: number; y: number; vx: number; vy: number }[] = [];
    const numNodes = 20;

    // Initialize nodes
    for (let i = 0; i < numNodes; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2
      });
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(13, 2, 8, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw nodes
      nodes.forEach((node, i) => {
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off walls
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        // Draw connections
        nodes.forEach((otherNode, j) => {
          if (i === j) return;
          const dx = otherNode.x - node.x;
          const dy = otherNode.y - node.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 255, 65, ${1 - distance / 100})`;
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(otherNode.x, otherNode.y);
            ctx.stroke();
          }
        });

        // Draw node
        ctx.beginPath();
        ctx.fillStyle = '#00FF41';
        ctx.arc(node.x, node.y, 3, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
            <GlitchText text="NETWORK STATUS" className="text-3xl mb-6" />
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Network Visualization */}
              <div className="cyber-panel p-4 aspect-square">
                <canvas 
                  ref={canvasRef}
                  className="w-full h-full rounded-lg"
                />
              </div>

              {/* Network Stats */}
              <div className="space-y-8">
                <div className="cyber-panel p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Activity className="w-6 h-6 text-matrix-green" />
                    <h3 className="text-xl cyber-text">Network Activity</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {[
                      { icon: Wifi, label: "Connection Strength", value: "98%" },
                      { icon: Globe, label: "Active Nodes", value: "1,337" },
                      { icon: Shield, label: "Security Level", value: "Maximum" },
                      { icon: Activity, label: "Network Load", value: "45%" }
                    ].map((stat) => (
                      <div key={stat.label} className="flex items-center justify-between p-3 cyber-panel">
                        <div className="flex items-center space-x-3">
                          <stat.icon className="w-4 h-4 text-matrix-green" />
                          <span className="cyber-text">{stat.label}</span>
                        </div>
                        <span className="text-matrix-light">{stat.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="cyber-panel p-6">
                  <h3 className="text-xl cyber-text mb-4">Recent Events</h3>
                  <div className="space-y-3">
                    {[
                      "New node connected: 0xF7A9",
                      "Security scan completed",
                      "Bandwidth optimization in progress",
                      "Protocol update: v2.1.4"
                    ].map((event, i) => (
                      <div 
                        key={i}
                        className="flex items-center space-x-3 text-sm"
                      >
                        <div className="h-2 w-2 bg-matrix-green rounded-full animate-cyber-pulse" />
                        <span>{event}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Network;