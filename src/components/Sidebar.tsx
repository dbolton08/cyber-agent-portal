import { useState } from "react";
import { Menu, X, User, Terminal, Database, Network } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from '@/contexts/LanguageContext';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { translations } = useLanguage();

  const menuItems = [
    { icon: User, label: translations.system.agents, href: "/agents" },
    { icon: Terminal, label: translations.system.console, href: "/console" },
    { icon: Database, label: translations.system.systems, href: "/systems" },
    { icon: Network, label: translations.system.network, href: "/network" },
  ];

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 cyber-button p-2 md:hidden"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      <aside
        className={`fixed top-0 right-0 h-full w-64 transform transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"
        }`}
      >
        <div className="h-full cyber-panel backdrop-blur-sm">
          <div className="p-4 space-y-6">
            <div className="cyber-text text-lg font-bold mb-8 text-center md:text-left pt-16 md:pt-4">
              {translations.system.platformStatus}
            </div>
            
            <nav className="space-y-3">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`flex items-center space-x-3 cyber-button w-full ${
                    location.pathname === item.href ? 'bg-matrix-green/20' : ''
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="h-5 w-5 flex-shrink-0" />
                  <span className="truncate">{item.label}</span>
                </Link>
              ))}
            </nav>

            <div className="mt-8 p-4 cyber-panel">
              <div className="cyber-text text-sm mb-2">{translations.system.systemStatus}</div>
              <div className="flex items-center space-x-2">
                <div className="h-2 w-2 rounded-full bg-matrix-green animate-cyber-pulse" />
                <span className="text-sm">{translations.system.online}</span>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;