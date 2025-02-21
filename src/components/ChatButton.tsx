
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

const ChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          className="fixed bottom-6 right-6 rounded-full shadow-lg z-50"
          size="lg"
        >
          {isOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <MessageCircle className="h-5 w-5" />
          )}
          {!isOpen && <span className="ml-2">Chat</span>}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <iframe
          src="https://web.powerva.microsoft.com/environments/Default-96276c86-6dba-4f0b-8db4-de3067177f5c/bots/new_bot_1c17af7c77394c9c8a5f6e5025f32929/canvas"
          className="w-full h-[500px] border-0"
          title="Chat"
        />
      </DialogContent>
    </Dialog>
  );
};

export default ChatButton;
