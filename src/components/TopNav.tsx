import { Github, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const TopNav = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 h-16 cyber-panel z-50 px-4">
      <div className="container mx-auto h-full flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link to="/" className="cyber-text text-xl font-bold hover:text-matrix-light transition-colors">
            Matrix Oracle
          </Link>
        </div>
        
        <div className="flex items-center space-x-6">
          <a
            href="https://x.com/MatrixOracleSui"
            target="_blank"
            rel="noopener noreferrer"
            className="cyber-text hover:text-matrix-light transition-colors"
          >
            <Twitter className="h-5 w-5" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="cyber-text hover:text-matrix-light transition-colors"
          >
            <Github className="h-5 w-5" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;