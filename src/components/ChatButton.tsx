
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, X, Send } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const ChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message with explicit type
    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');

    // Generate bot response
    const response = await generateResponse(input);
    const assistantMessage: Message = { role: 'assistant', content: response };
    setMessages(prev => [...prev, assistantMessage]);
  };

  const generateResponse = async (message: string): Promise<string> => {
    const lowerMessage = message.toLowerCase();
    const words = lowerMessage.split(' ');
    
    // Product related queries
    if (words.some(w => w.includes('product')) || words.some(w => w.includes('solution'))) {
      return "Our main products include:\n\n" +
        "1. LifeTrack™ - Complete IT asset lifecycle management\n" +
        "2. SecureWipe™ - Secure data erasure solution\n" +
        "3. AssetGuard™ - Physical asset tracking and security\n\n" +
        "Would you like to learn more about any specific product?";
    }

    // Service and support queries
    if (lowerMessage.includes('help') || lowerMessage.includes('support') || lowerMessage.includes('service')) {
      if (lowerMessage.includes('technical') || lowerMessage.includes('tech')) {
        navigate('/contact');
        return "For technical support, I've directed you to our contact page. Our support team is available 24/7 at support@lifetimeepr.com or via phone at 1-800-LIFETIME.";
      }
      if (lowerMessage.includes('sales')) {
        return "Our sales team would be happy to help! You can reach them at sales@lifetimeepr.com or schedule a call through our contact page.";
      }
      navigate('/contact');
      return "I've directed you to our contact page where you can find all support options. How else can I assist you?";
    }

    // Navigation and information queries
    if (lowerMessage.includes('security') || lowerMessage.includes('secure')) {
      navigate('/security');
      return "I've taken you to our security page. Our platform meets ISO 27001 standards and includes features like:\n\n" +
        "• End-to-end encryption\n" +
        "• Multi-factor authentication\n" +
        "• Regular security audits\n\n" +
        "Would you like to know more about any specific security feature?";
    }
    
    if (lowerMessage.includes('mission') || lowerMessage.includes('about')) {
      navigate('/mission');
      return "I've taken you to our mission page. Our mission is to revolutionize IT asset management through innovative solutions that enhance efficiency, security, and sustainability. Let me know if you'd like to learn more about our values or leadership team.";
    }

    // ITAM specific queries
    if (lowerMessage.includes('what is itam') || lowerMessage.includes('itam')) {
      navigate('/what-is-itam');
      return "I've directed you to our detailed ITAM explanation page. IT Asset Management (ITAM) is crucial for:\n\n" +
        "• Cost optimization\n" +
        "• Risk management\n" +
        "• Compliance\n" +
        "• Resource efficiency\n\n" +
        "Would you like to learn how our solutions can enhance your ITAM practices?";
    }

    // Pricing and demo queries
    if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('pricing')) {
      return "Our pricing is customized based on:\n\n" +
        "• Number of assets managed\n" +
        "• Required features\n" +
        "• Service level needed\n\n" +
        "Would you like to speak with our sales team for a detailed quote?";
    }

    if (lowerMessage.includes('demo') || lowerMessage.includes('try')) {
      return "I'd be happy to help you schedule a demo! Our demos include:\n\n" +
        "• Live platform walkthrough\n" +
        "• Q&A session with experts\n" +
        "• Custom solution discussion\n\n" +
        "Please contact sales@lifetimeepr.com to schedule your demo.";
    }

    // Integration queries
    if (lowerMessage.includes('integrate') || lowerMessage.includes('integration') || lowerMessage.includes('connect')) {
      return "Our platform integrates with:\n\n" +
        "• Enterprise resource planning (ERP) systems\n" +
        "• IT service management (ITSM) tools\n" +
        "• Active Directory\n" +
        "• Mobile device management (MDM) solutions\n\n" +
        "Which integration would you like to learn more about?";
    }

    // Default response with conversation continuation
    const suggestions = [
      "Would you like to learn about our products?",
      "Would you like to see a demo?",
      "Would you like to speak with our team?",
      "Would you like to know more about our security features?"
    ];
    const randomSuggestion = suggestions[Math.floor(Math.random() * suggestions.length)];
    
    return "I'm here to help you learn more about our IT asset management solutions. " + randomSuggestion;
  };

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 rounded-full shadow-lg z-50"
        size="lg"
      >
        <MessageCircle className="h-5 w-5" />
        <span className="ml-2">Chat</span>
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[400px] h-[600px] flex flex-col">
          <DialogHeader>
            <DialogTitle>Chat Support</DialogTitle>
          </DialogHeader>
          
          <ScrollArea className="flex-1 pr-4">
            <div className="flex flex-col gap-4">
              {messages.length === 0 && (
                <div className="text-center text-muted-foreground p-4">
                  👋 Hi! How can I help you today?
                </div>
              )}
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${
                    message.role === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`rounded-lg px-4 py-2 max-w-[80%] ${
                      message.role === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted'
                    }`}
                  >
                    {message.content.split('\n').map((line, i) => (
                      <p key={i} className={i > 0 ? 'mt-1' : ''}>
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>

          <form onSubmit={handleSendMessage} className="flex gap-2 mt-4">
            <Input
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1"
            />
            <Button type="submit" size="icon">
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ChatButton;
