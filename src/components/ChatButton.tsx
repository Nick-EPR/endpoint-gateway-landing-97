
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Send, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";

interface ChatButtonProps {
  isOpen: boolean;
  onToggle: () => void;
}

interface Message {
  role: 'assistant' | 'user';
  content: string;
}

const ChatButton = ({ isOpen, onToggle }: ChatButtonProps) => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Hello! I'm Chad from Lifetime EPR support. How can I help you today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const chatRef = useRef<HTMLDivElement>(null);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (chatRef.current && !chatRef.current.contains(event.target as Node)) {
        onToggle();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onToggle]);

  // Auto-focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  const sendMessage = async (content: string) => {
    if (!content.trim()) return;
    
    setInput('');
    setIsLoading(true);
    
    const userMessage: Message = { role: 'user', content };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);

    try {
      const { data, error } = await supabase.functions.invoke('chat-with-chad', {
        body: { messages: newMessages }
      });

      if (error) {
        console.error('Supabase function error:', error);
        throw error;
      }

      if (data?.choices?.[0]?.message) {
        const assistantMessage: Message = {
          role: 'assistant',
          content: data.choices[0].message.content
        };
        setMessages([...newMessages, assistantMessage]);
      }
    } catch (error) {
      console.error('Error:', error);
      const errorMessage: Message = {
        role: 'assistant',
        content: "I apologize, but I'm having trouble connecting right now. Please email support@lifetimeepr.com for immediate assistance."
      };
      setMessages([...newMessages, errorMessage]);
    } finally {
      setIsLoading(false);
      // Refocus input after sending message
      inputRef.current?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  if (!isOpen) return null;

  return (
    <div ref={chatRef} className="fixed bottom-24 right-6 w-[380px] bg-background border rounded-lg shadow-lg animate-in slide-in-from-bottom-2 z-50">
      <div className="p-4 border-b flex justify-between items-center">
        <h2 className="font-semibold text-lg">Chat with Support</h2>
        <Button
          variant="ghost"
          size="icon"
          onClick={onToggle}
          className="h-8 w-8 rounded-full"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
      
      <div className="h-[400px] flex flex-col">
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-lg px-4 py-2 ${
                  message.role === 'user'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted'
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-muted rounded-lg px-4 py-2">
                <span className="animate-pulse">Typing...</span>
              </div>
            </div>
          )}
        </div>

        <div className="border-t p-4">
          <form onSubmit={handleSubmit} className="flex gap-2">
            <Input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              disabled={isLoading}
              className="flex-1"
            />
            <Button 
              type="submit" 
              size="icon" 
              disabled={isLoading || !input.trim()}
              className="bg-[#93C851] hover:bg-[#84b449] transition-colors duration-200 text-white dark:bg-[#93C851] dark:hover:bg-[#84b449] dark:text-white"
            >
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatButton;
