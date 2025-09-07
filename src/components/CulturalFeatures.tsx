import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Music, Palette, Heart, Star, Lightbulb } from "lucide-react";
import sanskritImage from "@/assets/sanskrit-manuscript.jpg";
import danceImage from "@/assets/cultural-dance.jpg";

const features = [
  {
    icon: BookOpen,
    title: "Ancient Scriptures",
    description: "Explore the wisdom of Vedas, Upanishads, and Puranas with AI guidance",
    image: sanskritImage,
    color: "spiritual"
  },
  {
    icon: Music,
    title: "Classical Arts",
    description: "Discover Indian classical music, dance forms, and their spiritual significance",
    image: danceImage,
    color: "culture"
  },
  {
    icon: Palette,
    title: "Festivals & Traditions",
    description: "Learn about vibrant festivals and age-old traditions across regions",
    image: null,
    color: "primary"
  },
  {
    icon: Heart,
    title: "Philosophy & Values",
    description: "Understand the philosophical foundations of Indian thought and values",
    image: null,
    color: "accent"
  },
  {
    icon: Star,
    title: "Yoga & Meditation",
    description: "Explore the science and spirituality of yoga and meditation practices",
    image: null,
    color: "spiritual"
  },
  {
    icon: Lightbulb,
    title: "Modern Relevance",
    description: "Discover how ancient wisdom applies to contemporary life challenges",
    image: null,
    color: "culture"
  }
];

const CulturalFeatures = () => {
  return (
    <section id="explore" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-cultural bg-clip-text text-transparent">
            Explore India's Rich Heritage
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Immerse yourself in the diverse cultural tapestry of Bharat through interactive AI-powered experiences
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden bg-card hover:shadow-warm transition-all duration-500 hover:-translate-y-2 border-2 hover:border-primary/20"
            >
              {feature.image && (
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              )}
              
              <div className="p-6">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-${feature.color} text-${feature.color}-foreground mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {feature.description}
                </p>
                
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                >
                  Explore →
                </Button>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            View All Cultural Topics
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CulturalFeatures;