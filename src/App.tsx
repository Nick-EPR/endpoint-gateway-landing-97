
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Page imports
import Index from "./pages/Index";
import Security from "./pages/Security";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Leadership from "./pages/Leadership";
import SecurityWhitepaper from "./pages/SecurityWhitepaper";
import Mission from "./pages/Mission";
import Status from "./pages/Status";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import WhatIsITAM from "./pages/WhatIsITAM";
import WhyChooseUs from "./pages/WhyChooseUs";
import MoviusPartnership from "./pages/MoviusPartnership";
import PCaaS from "./pages/PCaaS";
import ChatButton from "./components/ChatButton";
import { NavigationProvider, useNavigation } from "./hooks/useNavigation";
import { Toaster } from "./components/ui/toaster";

// Create a client
const queryClient = new QueryClient();

function AppContent() {
  const { isChatOpen, handleChatClick } = useNavigation();
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/security" element={<Security />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/status" element={<Status />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/what-is-itam" element={<WhatIsITAM />} />
          <Route path="/why-choose-us" element={<WhyChooseUs />} />
          <Route path="/security/whitepaper" element={<SecurityWhitepaper />} />
          <Route path="/partnerships/movius" element={<MoviusPartnership />} />
          <Route path="/pcaas" element={<PCaaS />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ChatButton isOpen={isChatOpen} onToggle={handleChatClick} />
      </Router>
      <Toaster />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <NavigationProvider>
          <AppContent />
        </NavigationProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
