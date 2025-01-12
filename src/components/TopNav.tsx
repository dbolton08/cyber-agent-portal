import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const TopNav = () => {
  const { translations } = useLanguage();
  
  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-cyber-dark/90 backdrop-blur-sm border-b border-matrix-green/20 z-50">
      <div className="container mx-auto h-full px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-4">
          <img 
            src="/lovable-uploads/94d7f101-f080-48a9-85c9-1ccfa746eafd.png" 
            alt="Matrix Oracle Logo" 
            className="h-12 w-12"
          />
          <span className="text-xl font-bold cyber-text">{translations.common.welcome}</span>
        </Link>
      </div>
    </nav>
  );
};

export default TopNav;