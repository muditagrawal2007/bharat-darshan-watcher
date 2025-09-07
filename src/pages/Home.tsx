import Header from "@/components/Header";
import Hero from "@/components/Hero";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
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

export default Home;