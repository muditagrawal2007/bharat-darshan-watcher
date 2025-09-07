import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-warm/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link to="/">
            <h1 className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent cursor-pointer hover:opacity-80 transition-opacity">
              भारत दर्शन
            </h1>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-foreground hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/culture" className="text-foreground hover:text-primary transition-colors">
            Culture
          </Link>
          <Link to="/about" className="text-foreground hover:text-primary transition-colors">
            About
          </Link>
          <Link to="/chat" className="text-foreground hover:text-primary transition-colors">
            AI Chat
          </Link>
        </nav>

        <div className="flex items-center space-x-3">
          <Link to="/culture">
            <Button variant="ghost" size="sm">
              Explore
            </Button>
          </Link>
          <Link to="/chat">
            <Button variant="cultural" size="sm">
              Ask AI
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;