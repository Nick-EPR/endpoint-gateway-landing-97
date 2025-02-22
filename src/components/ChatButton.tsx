
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
    
    // Navigation related queries
    if (lowerMessage.includes('security') || lowerMessage.includes('secure')) {
      navigate('/security');
      return "I've taken you to our security page where you can learn more about our security features and compliance standards.";
    }
    
    if (lowerMessage.includes('contact') || lowerMessage.includes('support')) {
      navigate('/contact');
      return "I've directed you to our contact page where you can find all our contact information and support options.";
    }

    if (lowerMessage.includes('mission') || lowerMessage.includes('about')) {
      navigate('/mission');
      return "I've taken you to our mission page where you can learn more about our company values and goals.";
    }

    // Common questions
    if (lowerMessage.includes('what is itam') || lowerMessage.includes('itam')) {
      navigate('/what-is-itam');
      return "I've directed you to our detailed explanation of IT Asset Management (ITAM). ITAM is the practice of managing, deploying, maintaining, upgrading, and disposing of IT assets in a cost-effective way.";
    }

    if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('pricing')) {
      return "Our pricing varies based on your organization's specific needs. Please visit our contact page or email sales@lifetimeepr.com for a customized quote.";
    }

    if (lowerMessage.includes('demo') || lowerMessage.includes('try')) {
      return "We'd be happy to show you a demo of our platform. Please reach out to us at sales@lifetimeepr.com to schedule a demonstration.";
    }

    // Default response
    return "I'm here to help you learn more about our IT asset management solutions. Feel free to ask about our security features, pricing, or schedule a demo. You can also visit our contact page for direct support.";
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
                    {message.content}
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
