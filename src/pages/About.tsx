import Header from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Book, Heart, Globe, Star } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <div className="py-20 px-4 bg-gradient-warm">
          <div className="container mx-auto text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-cultural bg-clip-text text-transparent">
              About Bharat Darshan
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Bharat Darshan is your gateway to understanding and experiencing the profound 
              wisdom and vibrant culture of India through modern technology.
            </p>
          </div>
        </div>

        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <Card className="p-8 bg-card/80 backdrop-blur-sm border-2 border-primary/10 shadow-warm">
                <div className="flex items-center mb-4">
                  <Book className="h-8 w-8 text-primary mr-3" />
                  <h3 className="text-2xl font-bold">Ancient Wisdom</h3>
                </div>
                <p className="text-muted-foreground">
                  Explore thousands of years of philosophical insights from the Vedas, 
                  Upanishads, and great epics that continue to guide humanity.
                </p>
              </Card>

              <Card className="p-8 bg-card/80 backdrop-blur-sm border-2 border-primary/10 shadow-warm">
                <div className="flex items-center mb-4">
                  <Heart className="h-8 w-8 text-primary mr-3" />
                  <h3 className="text-2xl font-bold">Living Culture</h3>
                </div>
                <p className="text-muted-foreground">
                  Experience the vibrant festivals, classical arts, and traditions 
                  that make Indian culture uniquely beautiful and diverse.
                </p>
              </Card>

              <Card className="p-8 bg-card/80 backdrop-blur-sm border-2 border-primary/10 shadow-warm">
                <div className="flex items-center mb-4">
                  <Globe className="h-8 w-8 text-primary mr-3" />
                  <h3 className="text-2xl font-bold">Universal Values</h3>
                </div>
                <p className="text-muted-foreground">
                  Discover how India's philosophy of "Vasudhaiva Kutumbakam" 
                  (the world is one family) promotes global harmony and understanding.
                </p>
              </Card>

              <Card className="p-8 bg-card/80 backdrop-blur-sm border-2 border-primary/10 shadow-warm">
                <div className="flex items-center mb-4">
                  <Star className="h-8 w-8 text-primary mr-3" />
                  <h3 className="text-2xl font-bold">AI-Powered Learning</h3>
                </div>
                <p className="text-muted-foreground">
                  Learn through interactive conversations with our AI cultural guide, 
                  making ancient wisdom accessible to modern minds.
                </p>
              </Card>
            </div>

            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6 bg-gradient-cultural bg-clip-text text-transparent">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                To bridge the gap between India's ancient wisdom and modern understanding, 
                making the profound insights of Bharatiya culture accessible to everyone 
                through technology and authentic storytelling.
              </p>
              <div className="text-2xl font-bold text-primary">
                "सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः"
              </div>
              <p className="text-muted-foreground mt-2">
                May all beings be happy, may all beings be free from disease
              </p>
            </div>
          </div>
        </section>
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
            <p>"वसुधैव कुटुम्बकम्" - The world is one family</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;