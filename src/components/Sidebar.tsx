import { Link } from "react-router-dom";
import { Brain, Terminal, Network, Database } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Sidebar = () => {
  const { translations } = useLanguage();

  return (
    <aside className="fixed right-0 top-16 bottom-0 w-72 bg-cyber-panel/80 backdrop-blur-md border-l border-matrix-green/30 p-4 overflow-y-auto z-20 hidden md:block">
      <nav className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-matrix-green text-sm font-mono uppercase tracking-wider mb-4">
            {translations.coreSystemsTitle}
          </h2>
          
          <div className="space-y-4">
            <Link to="/agents" className="flex items-center space-x-3 text-matrix-green/80 hover:text-matrix-green transition-colors p-2 rounded hover:bg-matrix-green/10">
              <Brain className="w-5 h-5" />
              <span className="font-mono">{translations.agents}</span>
            </Link>
            
            <Link to="/console" className="flex items-center space-x-3 text-matrix-green/80 hover:text-matrix-green transition-colors p-2 rounded hover:bg-matrix-green/10">
              <Terminal className="w-5 h-5" />
              <span className="font-mono">{translations.console}</span>
            </Link>
            
            <Link to="/systems" className="flex items-center space-x-3 text-matrix-green/80 hover:text-matrix-green transition-colors p-2 rounded hover:bg-matrix-green/10">
              <Database className="w-5 h-5" />
              <span className="font-mono">{translations.systems}</span>
            </Link>
            
            <Link to="/network" className="flex items-center space-x-3 text-matrix-green/80 hover:text-matrix-green transition-colors p-2 rounded hover:bg-matrix-green/10">
              <Network className="w-5 h-5" />
              <span className="font-mono">{translations.network}</span>
            </Link>
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;