import { useState } from "react";
import { Menu, X, User, Terminal, Database, Network } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from '@/contexts/LanguageContext';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { translations } = useLanguage();

  const menuItems = [
    { icon: User, label: translations.agents, href: "/agents" },
    { icon: Terminal, label: translations.console, href: "/console" },
    { icon: Database, label: translations.systems, href: "/systems" },
    { icon: Network, label: translations.network, href: "/network" },
  ];

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-20 right-4 z-50 cyber-button md:hidden"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      <div
        className={`fixed top-16 right-0 h-full w-64 cyber-panel transform transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"
        }`}
      >
        <div className="p-4 space-y-6">
          <div className="cyber-text text-lg font-bold mb-8">{translations.platformStatus}</div>
          
          {menuItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className={`flex items-center space-x-3 cyber-button w-full mb-4 ${
                location.pathname === item.href ? 'bg-matrix-green/20' : ''
              }`}
              onClick={() => setIsOpen(false)}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.label}</span>
            </Link>
          ))}

          <div className="mt-8 p-4 cyber-panel">
            <div className="cyber-text text-sm mb-2">{translations.systemStatus}</div>
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 rounded-full bg-matrix-green animate-cyber-pulse" />
              <span className="text-sm">{translations.online}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;