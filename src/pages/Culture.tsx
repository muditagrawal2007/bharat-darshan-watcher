import Header from "@/components/Header";
import CulturalFeatures from "@/components/CulturalFeatures";

const Culture = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <div className="py-20 px-4 bg-gradient-warm">
          <div className="container mx-auto text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-cultural bg-clip-text text-transparent">
              Indian Culture & Heritage
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore the rich tapestry of Indian civilization - from ancient scriptures and philosophy 
              to vibrant festivals and classical arts that have flourished for millennia.
            </p>
          </div>
        </div>
        <CulturalFeatures />
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

export default Culture;