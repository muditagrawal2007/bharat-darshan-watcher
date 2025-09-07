import { Button } from "@/components/ui/button";
import heroImage from "@/assets/indian-temple-hero.jpg";
import { MessageCircle, Compass } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-background/30" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
            भारत
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            BHARAT
          </h2>
        </div>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          Discover the profound wisdom and rich cultural heritage of India through AI-powered conversations
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button 
            variant="hero" 
            size="lg" 
            className="group min-w-[200px]"
          >
            <Compass className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
            Start Cultural Journey
          </Button>
          <Button 
            variant="cultural" 
            size="lg" 
            className="group min-w-[200px]"
          >
            <MessageCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            Ask AI Assistant
          </Button>
        </div>
        
        <div className="text-center">
          <p className="text-lg md:text-xl text-spiritual font-medium mb-2">
            "सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः"
          </p>
          <p className="text-muted-foreground italic">
            May all beings be happy, may all beings be free from disease
          </p>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 animate-pulse">
        <div className="w-16 h-16 bg-gradient-cultural rounded-full opacity-20" />
      </div>
      <div className="absolute bottom-20 right-10 animate-pulse delay-1000">
        <div className="w-12 h-12 bg-gradient-hero rounded-full opacity-20" />
      </div>
    </section>
  );
};

export default Hero;