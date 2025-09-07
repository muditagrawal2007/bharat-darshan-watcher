import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Send, Bot, User, Sparkles } from "lucide-react";

const sampleQuestions = [
  "What is the significance of Diwali?",
  "Tell me about Indian classical music",
  "Explain the philosophy of Karma",
  "What are the main Hindu festivals?",
  "Describe traditional Indian dance forms",
];

const AIChat = () => {
  const [messages, setMessages] = useState([
    {
      type: "bot",
      content: "Namaste! I'm your AI guide to Indian culture and wisdom. Ask me anything about Bharat's rich heritage!"
    }
  ]);
  const [inputValue, setInputValue] = useState("");

  const culturalDatabase = {
    greetings: ["namaste", "hello", "hi", "सलाम", "आदाब"],
    festivals: {
      diwali: "🪔 Diwali (Deepavali) is India's most celebrated festival, the Festival of Lights symbolizing the victory of light over darkness, good over evil. It marks Lord Rama's return to Ayodhya after 14 years of exile. Celebrated for 5 days, people decorate with diyas (oil lamps), rangoli, burst fireworks, exchange sweets, and worship Goddess Lakshmi for prosperity and wealth.",
      holi: "🎨 Holi, the Festival of Colors, celebrates the arrival of spring and the victory of good over evil. Based on the legend of Prahlad and Holika, people play with gulal (colored powder), dance, sing, and enjoy traditional sweets like gujiya. It breaks social barriers as people of all backgrounds celebrate together.",
      durga: "🕉️ Durga Puja honors Goddess Durga's victory over demon Mahishasura, symbolizing the triumph of divine feminine power (Shakti). Especially grand in Bengal, it involves elaborate pandals, artistic idols, cultural programs, and communal feasting over 10 days culminating in Vijayadashami.",
      dussehra: "🏹 Dussehra celebrates Lord Rama's victory over Ravana, representing good conquering evil. Marked by burning effigies of Ravana, Kumbhakarna, and Meghnath, it signifies that truth and dharma always prevail. Different regions have unique traditions like Mysore's royal procession.",
    },
    philosophy: {
      karma: "⚖️ Karma (कर्म) literally means 'action' in Sanskrit. It's the universal law of cause and effect - every thought, word, and deed creates consequences. Good actions (punya) lead to positive results, while harmful actions create suffering. This encourages ethical living and personal responsibility for one's destiny.",
      dharma: "🕉️ Dharma (धर्म) is righteous living according to cosmic law and moral duty. It varies by age, caste, gender, and occupation (svadharma). The Mahabharata says 'Dharma exists to promote the welfare of all beings, so whatever conduces to welfare is dharma.'",
      moksha: "🙏 Moksha (मोक्ष) is liberation from the cycle of birth, death, and rebirth (samsara). It's the ultimate spiritual goal in Hinduism, achieved through various paths: karma yoga (action), bhakti yoga (devotion), raja yoga (meditation), and jnana yoga (knowledge).",
    },
    arts: {
      music: "🎵 Indian classical music has two main traditions: Hindustani (North India) and Carnatic (South India). Based on ragas (melodic frameworks) and talas (rhythmic cycles), it's deeply spiritual. Legendary artists like Pandit Ravi Shankar, Ustad Allauddin Khan, and M.S. Subbulakshmi have elevated this divine art globally.",
      dance: "💃 India's classical dances are devotional art forms: Bharatanatyam (Tamil Nadu), Kathak (North India), Odissi (Odisha), Kuchipudi (Andhra Pradesh), Manipuri (Manipur), Mohiniyattam (Kerala), Kathakali (Kerala), and Sattriya (Assam). Each uses mudras (hand gestures), facial expressions, and rhythmic movements to tell stories from epics.",
    },
    literature: {
      vedas: "📚 The Vedas are humanity's oldest spiritual texts (1500-500 BCE): Rigveda (hymns), Samaveda (melodies), Yajurveda (rituals), and Atharveda (spells/medicine). They contain profound wisdom about cosmic principles, meditation, and righteous living.",
      epics: "📖 The Ramayana and Mahabharata are India's great epics. Ramayana tells of Lord Rama's journey, dharma, and devotion. Mahabharata, containing the Bhagavad Gita, explores complex moral dilemmas through the Kurukshetra war between Pandavas and Kauravas.",
    }
  };

  const generateResponse = (question: string) => {
    const lowerQuestion = question.toLowerCase();
    
    // Greetings
    if (culturalDatabase.greetings.some(greeting => lowerQuestion.includes(greeting))) {
      return "🙏 Namaste! Welcome to the world of Indian culture and wisdom. I'm here to share the rich heritage of Bharat - from ancient scriptures to vibrant festivals, from philosophical insights to classical arts. What aspect of Indian culture would you like to explore?";
    }
    
    // Festivals
    if (lowerQuestion.includes('diwali') || lowerQuestion.includes('deepavali')) {
      return culturalDatabase.festivals.diwali;
    }
    if (lowerQuestion.includes('holi')) {
      return culturalDatabase.festivals.holi;
    }
    if (lowerQuestion.includes('durga') || lowerQuestion.includes('navratri')) {
      return culturalDatabase.festivals.durga;
    }
    if (lowerQuestion.includes('dussehra') || lowerQuestion.includes('vijayadashami')) {
      return culturalDatabase.festivals.dussehra;
    }
    
    // Philosophy
    if (lowerQuestion.includes('karma')) {
      return culturalDatabase.philosophy.karma;
    }
    if (lowerQuestion.includes('dharma')) {
      return culturalDatabase.philosophy.dharma;
    }
    if (lowerQuestion.includes('moksha') || lowerQuestion.includes('liberation')) {
      return culturalDatabase.philosophy.moksha;
    }
    
    // Arts
    if (lowerQuestion.includes('music') || lowerQuestion.includes('classical') || lowerQuestion.includes('raga')) {
      return culturalDatabase.arts.music;
    }
    if (lowerQuestion.includes('dance') || lowerQuestion.includes('bharatanatyam') || lowerQuestion.includes('kathak')) {
      return culturalDatabase.arts.dance;
    }
    
    // Literature
    if (lowerQuestion.includes('veda') || lowerQuestion.includes('rigveda')) {
      return culturalDatabase.literature.vedas;
    }
    if (lowerQuestion.includes('ramayana') || lowerQuestion.includes('mahabharata') || lowerQuestion.includes('gita')) {
      return culturalDatabase.literature.epics;
    }
    
    // General festivals
    if (lowerQuestion.includes('festival')) {
      return "🎊 India celebrates countless festivals throughout the year! Major ones include: Diwali (lights), Holi (colors), Dussehra (good over evil), Durga Puja (divine feminine), Eid (Muslim celebration), Christmas, Guru Nanak Jayanti (Sikh), Onam (Kerala), Pongal (Tamil harvest), and many regional celebrations. Each festival has deep spiritual meaning and brings communities together. Which festival would you like to know more about?";
    }
    
    // Yoga and meditation
    if (lowerQuestion.includes('yoga') || lowerQuestion.includes('meditation')) {
      return "🧘‍♀️ Yoga, meaning 'union' in Sanskrit, is India's gift to the world for physical, mental, and spiritual well-being. The eight limbs (Ashtanga) include ethical guidelines, physical postures (asanas), breath control (pranayama), and meditation (dhyana). Different paths include Hatha, Kundalini, Bhakti, and Raja yoga, all leading to self-realization.";
    }
    
    // Food and cuisine
    if (lowerQuestion.includes('food') || lowerQuestion.includes('cuisine') || lowerQuestion.includes('spice')) {
      return "🍛 Indian cuisine reflects our diverse culture with regional specialties: North Indian curries and breads, South Indian rice dishes and sambars, Bengali fish preparations, Gujarati vegetarian thalis, Rajasthani dal-baati, and countless street foods. Spices like turmeric, cumin, coriander are used for both flavor and Ayurvedic health benefits. Food is considered sacred - 'Annam Brahma' (food is divine).";
    }
    
    // Default response
    return "🕉️ India's cultural heritage spans thousands of years, encompassing profound philosophy, vibrant festivals, classical arts, ancient wisdom texts, and diverse traditions. From the Vedic period to modern times, Bharat has been a beacon of spiritual knowledge and cultural richness. Feel free to ask about specific festivals, philosophical concepts, classical arts, ancient texts, yoga, Ayurveda, or any aspect of Indian culture you're curious about!";
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;
    
    const userMessage = inputValue;
    const botResponse = generateResponse(userMessage);
    
    setMessages(prev => [...prev, 
      { type: "user", content: userMessage },
      { type: "bot", content: botResponse }
    ]);
    setInputValue("");
  };

  const handleSampleQuestion = (question: string) => {
    setInputValue(question);
  };

  return (
    <section id="chat" className="py-20 px-4 bg-gradient-warm">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-cultural bg-clip-text text-transparent">
            Chat with AI Guru
          </h2>
          <p className="text-xl text-muted-foreground">
            Ask questions about Indian culture, philosophy, and traditions
          </p>
        </div>

        <Card className="bg-card/80 backdrop-blur-sm border-2 border-primary/10 shadow-warm">
          <div className="h-96 overflow-y-auto p-6 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex items-start gap-3 ${
                  message.type === "user" ? "flex-row-reverse" : ""
                }`}
              >
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                  message.type === "bot" 
                    ? "bg-gradient-cultural text-white" 
                    : "bg-primary text-primary-foreground"
                }`}>
                  {message.type === "bot" ? <Bot className="h-4 w-4" /> : <User className="h-4 w-4" />}
                </div>
                <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-xl ${
                  message.type === "bot"
                    ? "bg-muted text-foreground"
                    : "bg-gradient-hero text-primary-foreground"
                }`}>
                  {message.content}
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 border-t border-border">
            <div className="flex gap-2 mb-4">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about Indian culture, traditions, or philosophy..."
                className="flex-1"
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
              />
              <Button onClick={handleSend} variant="cultural">
                <Send className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex flex-wrap gap-2">
              {sampleQuestions.map((question, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="sm"
                  onClick={() => handleSampleQuestion(question)}
                  className="text-xs"
                >
                  <Sparkles className="h-3 w-3 mr-1" />
                  {question}
                </Button>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default AIChat;