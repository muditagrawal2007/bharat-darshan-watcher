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

  const handleSend = () => {
    if (!inputValue.trim()) return;
    
    setMessages(prev => [...prev, 
      { type: "user", content: inputValue },
      { type: "bot", content: "Thank you for your question! This is a demo - in the full version, I would provide detailed insights about Indian culture and traditions." }
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