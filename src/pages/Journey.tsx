import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Star, Clock, Users, Sparkles, ArrowRight, Bot } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Journey = () => {
  const navigate = useNavigate();

  const journeyPaths = [
    {
      id: 1,
      title: "Festivals & Celebrations",
      description: "Explore the vibrant world of Indian festivals, their meanings, and cultural significance",
      duration: "2-3 hours",
      lessons: 8,
      difficulty: "Beginner",
      topics: ["Diwali", "Holi", "Dussehra", "Durga Puja", "Karva Chauth", "Onam"],
      color: "from-orange-500 to-red-500",
      icon: "🪔"
    },
    {
      id: 2,
      title: "Philosophy & Spirituality",
      description: "Dive deep into ancient Indian philosophy, yoga, meditation, and spiritual wisdom",
      duration: "4-5 hours",
      lessons: 12,
      difficulty: "Intermediate",
      topics: ["Karma", "Dharma", "Moksha", "Yoga", "Vedanta", "Buddhist Philosophy"],
      color: "from-blue-500 to-purple-500",
      icon: "🕉️"
    },
    {
      id: 3,
      title: "Arts & Classical Traditions",
      description: "Discover the beauty of Indian classical music, dance, and artistic expressions",
      duration: "3-4 hours",
      lessons: 10,
      difficulty: "Beginner",
      topics: ["Bharatanatyam", "Hindustani Music", "Miniature Painting", "Classical Poetry"],
      color: "from-green-500 to-teal-500",
      icon: "🎭"
    },
    {
      id: 4,
      title: "Ancient Wisdom & Scriptures",
      description: "Explore sacred texts like Vedas, Upanishads, Bhagavad Gita, and their teachings",
      duration: "5-6 hours",
      lessons: 15,
      difficulty: "Advanced",
      topics: ["Vedas", "Bhagavad Gita", "Ramayana", "Mahabharata", "Upanishads"],
      color: "from-purple-500 to-pink-500",
      icon: "📚"
    },
    {
      id: 5,
      title: "Traditions & Customs",
      description: "Learn about daily life, customs, family traditions, and social practices",
      duration: "2-3 hours",
      lessons: 9,
      difficulty: "Beginner",
      topics: ["Wedding Rituals", "Food Culture", "Hospitality", "Greetings", "Clothing"],
      color: "from-yellow-500 to-orange-500",
      icon: "🏠"
    },
    {
      id: 6,
      title: "Ayurveda & Wellness",
      description: "Understand the ancient science of life, health, and natural healing",
      duration: "3-4 hours",
      lessons: 11,
      difficulty: "Intermediate",
      topics: ["Doshas", "Herbs", "Lifestyle", "Meditation", "Pranayama"],
      color: "from-emerald-500 to-green-500",
      icon: "🌿"
    }
  ];

  const handleStartJourney = (journeyId: number) => {
    // For now, navigate to chat with a welcome message about the journey
    navigate(`/chat?journey=${journeyId}`);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <div className="py-20 px-4 bg-gradient-warm">
          <div className="container mx-auto text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-cultural bg-clip-text text-transparent">
              Start Your Cultural Journey
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Embark on guided learning paths to discover the depth and beauty of Indian culture, 
              philosophy, and traditions through structured lessons and interactive conversations.
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                <span>65+ Lessons</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>Self-paced</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span>AI-guided</span>
              </div>
            </div>
          </div>
        </div>

        {/* Journey Paths */}
        <div className="py-20 px-4">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {journeyPaths.map((path) => (
                <Card key={path.id} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`text-4xl bg-gradient-to-r ${path.color} bg-clip-text text-transparent`}>
                        {path.icon}
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {path.difficulty}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                      {path.title}
                    </CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      {path.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{path.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <BookOpen className="h-3 w-3" />
                        <span>{path.lessons} lessons</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <p className="text-xs font-medium text-muted-foreground">Topics covered:</p>
                      <div className="flex flex-wrap gap-1">
                        {path.topics.slice(0, 4).map((topic, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {topic}
                          </Badge>
                        ))}
                        {path.topics.length > 4 && (
                          <Badge variant="outline" className="text-xs">
                            +{path.topics.length - 4} more
                          </Badge>
                        )}
                      </div>
                    </div>
                    
                    <Button 
                      onClick={() => handleStartJourney(path.id)}
                      className="w-full group-hover:shadow-md transition-all"
                      variant="cultural"
                    >
                      <Sparkles className="h-4 w-4 mr-2" />
                      Start Journey
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="py-16 px-4 bg-gradient-subtle">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-cultural bg-clip-text text-transparent">
              Not sure where to start?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Chat with our AI cultural guide for personalized recommendations based on your interests and current knowledge.
            </p>
            <Link to="/chat">
              <Button size="lg" variant="cultural" className="shadow-lg">
                <Bot className="h-5 w-5 mr-2" />
                Ask AI Guide
              </Button>
            </Link>
          </div>
        </div>
      </main>
      
      <footer className="bg-gradient-cultural text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">
            भारत दर्शन
          </h3>
          <p className="text-white/80 mb-6 max-w-md mx-auto">
            Connecting you with the timeless wisdom and vibrant culture of India
          </p>
          <div className="text-white/60 text-sm">
            <p>"विद्या ददाति विनयं" - Knowledge gives humility</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Journey;