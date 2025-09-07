import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-warm/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <h1 className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
            भारत
          </h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#explore" className="text-foreground hover:text-primary transition-colors">
            Explore
          </a>
          <a href="#culture" className="text-foreground hover:text-primary transition-colors">
            Culture
          </a>
          <a href="#wisdom" className="text-foreground hover:text-primary transition-colors">
            Wisdom
          </a>
          <a href="#chat" className="text-foreground hover:text-primary transition-colors">
            AI Chat
          </a>
        </nav>

        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="sm">
            Explore
          </Button>
          <Button variant="cultural" size="sm">
            Ask AI
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;