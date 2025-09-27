import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { supabase } from '@/integrations/supabase/client';
import { Send, Bot, User, Sparkles } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { useSearchParams } from 'react-router-dom';

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

const GeminiChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const { toast } = useToast();
  const [searchParams] = useSearchParams();
  const journeyId = searchParams.get('journey');

  const journeyPaths = {
    1: {
      title: "Festivals & Celebrations",
      icon: "🪔",
      welcome: "Welcome to your Festivals & Celebrations journey! Let's explore the vibrant world of Indian festivals together.",
      questions: [
        "Tell me about the significance of Diwali and how it's celebrated",
        "What is the story behind Holi and why is it called the festival of colors?",
        "Explain the ten days of Navratri and their meaning",
        "How is Durga Puja celebrated in Bengal?"
      ]
    },
    2: {
      title: "Philosophy & Spirituality", 
      icon: "🕉️",
      welcome: "Welcome to your Philosophy & Spirituality journey! Let's dive deep into ancient Indian wisdom.",
      questions: [
        "Explain the concept of Karma and its significance in Indian philosophy",
        "What are the four main paths of Yoga mentioned in the Bhagavad Gita?",
        "Tell me about the concept of Dharma and its importance",
        "What is the meaning of Om in Hindu philosophy?"
      ]
    },
    3: {
      title: "Arts & Classical Traditions",
      icon: "🎭", 
      welcome: "Welcome to your Arts & Classical Traditions journey! Let's discover India's rich artistic heritage.",
      questions: [
        "Tell me about Bharatanatyam and its spiritual significance",
        "What are the main characteristics of Hindustani classical music?",
        "Explain the art of Indian miniature painting",
        "What are the different forms of Indian classical poetry?"
      ]
    },
    4: {
      title: "Ancient Wisdom & Scriptures",
      icon: "📚",
      welcome: "Welcome to your Ancient Wisdom & Scriptures journey! Let's explore India's sacred texts.",
      questions: [
        "What are the four Vedas and their significance?",
        "Explain the main teachings of the Bhagavad Gita",
        "Tell me about the wisdom found in the Upanishads",
        "What life lessons can we learn from the Ramayana?"
      ]
    },
    5: {
      title: "Traditions & Customs",
      icon: "🏠",
      welcome: "Welcome to your Traditions & Customs journey! Let's learn about daily life and customs.",
      questions: [
        "Explain the significance of traditional Indian wedding rituals",
        "What is the philosophy behind Indian hospitality?",
        "Tell me about the importance of food culture in Indian traditions",
        "What are the meanings behind different Indian greeting customs?"
      ]
    },
    6: {
      title: "Ayurveda & Wellness",
      icon: "🌿",
      welcome: "Welcome to your Ayurveda & Wellness journey! Let's explore the ancient science of life.",
      questions: [
        "What are the three doshas in Ayurveda and their characteristics?",
        "Tell me about important Ayurvedic herbs and their benefits",
        "Explain the Ayurvedic approach to daily routine and lifestyle",
        "What is Pranayama and how does it benefit health?"
      ]
    }
  };

  const generalQuestions = [
    "Tell me about Diwali festival and its significance",
    "What is the meaning of Namaste?", 
    "Explain the philosophy of Yoga and its benefits",
    "What are the main teachings of the Bhagavad Gita?",
    "Tell me about Indian classical dance forms",
    "What is Ayurveda and how does it work?",
    "Explain the significance of Om in Hindu philosophy",
    "What are the different types of Indian festivals?"
  ];

  const currentJourney = journeyId ? journeyPaths[parseInt(journeyId)] : null;
  const suggestedQuestions = currentJourney ? currentJourney.questions : generalQuestions;

  const handleSuggestedQuestion = (question: string) => {
    setInput(question);
  };

  const startWelcomeMessage = () => {
    setShowWelcome(false);
    const welcomeText = currentJourney 
      ? `${currentJourney.welcome} I'm here to guide you through the ${currentJourney.title} journey. What would you like to explore first?`
      : "🙏 Welcome to Understanding Bharat! 🙏\n\nI am here to help you explore the rich traditions, culture, philosophy, and heritage of India. Feel free to ask me anything about our beautiful culture!\n\n\"सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः\" - May all beings be happy and free from illness";

    const welcomeMessage: Message = {
      id: Date.now().toString(),
      content: welcomeText,
      isUser: false,
      timestamp: new Date(),
    };
    
    setMessages([welcomeMessage]);
  };

  useEffect(() => {
    if (journeyId && showWelcome) {
      // Auto-start welcome message for journey paths
      const timer = setTimeout(() => {
        startWelcomeMessage();
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [journeyId, showWelcome]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    setShowWelcome(false);

    try {
      const { data, error } = await supabase.functions.invoke('gemini-chat', {
        body: { message: input }
      });

      if (error) throw error;

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: data.response,
        isUser: false,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const formatMessage = (content: string) => {
    // Convert **text** to bold
    let formatted = content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    
    // Convert bullet points
    formatted = formatted.replace(/^• (.*$)/gim, '<li class="ml-4">$1</li>');
    
    // Wrap consecutive <li> elements in <ul>
    formatted = formatted.replace(/(<li class="ml-4">.*<\/li>\s*)+/g, '<ul class="list-disc list-inside space-y-1">$&</ul>');
    
    return formatted;
  };

  return (
    <div className="flex flex-col h-full max-w-4xl mx-auto p-4">
      <div className="flex-1 mb-4">
        <ScrollArea className="h-[600px] pr-4">
          <div className="space-y-4">
            {messages.length === 0 && showWelcome && (
              <div className="text-center py-8">
                <div className="mb-6">
                  {currentJourney ? (
                    <div className="text-6xl mb-4">{currentJourney.icon}</div>
                  ) : (
                    <Bot className="mx-auto h-16 w-16 mb-6 text-primary" />
                  )}
                  <h2 className="text-2xl font-bold mb-2 bg-gradient-cultural bg-clip-text text-transparent">
                    {currentJourney 
                      ? `${currentJourney.title} Journey`
                      : "🙏 Welcome to Understanding Bharat 🙏"
                    }
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    {currentJourney
                      ? `Ready to explore ${currentJourney.title.toLowerCase()}? Let's begin this cultural journey together!`
                      : "I am here to help you explore the rich traditions, culture, philosophy, and heritage of India."
                    }
                  </p>
                  {!currentJourney && (
                    <p className="text-sm text-muted-foreground">
                      "सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः" - May all beings be happy and free from illness
                    </p>
                  )}
                </div>
                
                <div className="text-left max-w-2xl mx-auto mb-6">
                  <h3 className="text-lg font-semibold mb-4 text-center">
                    {currentJourney ? "🌟 Start with these questions:" : "✨ Try asking me about:"}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                    {suggestedQuestions.map((question, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        className="text-left justify-start h-auto p-3 hover:bg-primary/5"
                        onClick={() => handleSuggestedQuestion(question)}
                      >
                        <span className="text-sm">{question}</span>
                      </Button>
                    ))}
                  </div>
                </div>

                <Button 
                  onClick={startWelcomeMessage}
                  variant="cultural" 
                  size="lg"
                  className="shadow-lg"
                >
                  <Sparkles className="h-4 w-4 mr-2" />
                  {currentJourney ? "Begin Journey" : "Start Conversation"}
                </Button>
              </div>
            )}
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                {!message.isUser && (
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Bot className="h-4 w-4 text-primary" />
                    </div>
                  </div>
                )}
                <Card className={`max-w-[80%] ${message.isUser ? 'bg-primary text-primary-foreground' : ''}`}>
                  <CardContent className="p-3">
                    <div 
                      className="text-sm whitespace-pre-wrap"
                      dangerouslySetInnerHTML={{ __html: formatMessage(message.content) }}
                    />
                    <span className="text-xs opacity-70 mt-2 block">
                      {message.timestamp.toLocaleTimeString()}
                    </span>
                  </CardContent>
                </Card>
                {message.isUser && (
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                      <User className="h-4 w-4 text-primary-foreground" />
                    </div>
                  </div>
                )}
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-3 justify-start">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Bot className="h-4 w-4 text-primary animate-pulse" />
                  </div>
                </div>
                <Card>
                  <CardContent className="p-3">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </ScrollArea>
      </div>
      
      <div className="flex gap-2">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type your message here..."
          disabled={isLoading}
          className="flex-1"
        />
        <Button onClick={sendMessage} disabled={isLoading || !input.trim()}>
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default GeminiChat;