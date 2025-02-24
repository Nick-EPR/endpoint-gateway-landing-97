
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const ChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);

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
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Chat Support</DialogTitle>
            <DialogDescription>
              Chat support is currently unavailable. Please email support@lifetimeepr.com for assistance.
            </DialogDescription>
          </DialogHeader>
          <div 
            className="opacity-5 pointer-events-none absolute inset-0 z-0" 
            style={{
              backgroundImage: `url('/lovable-uploads/ba322697-6a94-43af-a340-e3a4e4a5fdfd.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ChatButton;
