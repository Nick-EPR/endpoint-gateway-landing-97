
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { toast } from "sonner";

const ChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    toast.info("Chat support is currently unavailable. Please email support@lifetimeepr.com for assistance.");
  };

  return (
    <Button
      onClick={handleClick}
      className="fixed bottom-6 right-6 rounded-full shadow-lg z-50"
      size="lg"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="ml-2">Chat</span>
    </Button>
  );
};

export default ChatButton;
