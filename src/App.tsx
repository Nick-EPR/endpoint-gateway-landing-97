
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";
import Index from "./pages/Index";
import Security from "./pages/Security";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import HeliAM from "./pages/HeliAM";
import Toolbox from "./pages/Toolbox";
import Luemin from "./pages/Luemin";
import Leadership from "./pages/Leadership";
import SecurityWhitepaper from "./pages/SecurityWhitepaper";
import Mission from "./pages/Mission";
import Status from "./pages/Status";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import WhatIsITAM from "./pages/WhatIsITAM";
import Pricing from "./pages/Pricing";
import ChatButton from "./components/ChatButton";
import { useNavigation } from "./hooks/useNavigation";

// Create a client
const queryClient = new QueryClient();

function App() {
  const { isChatOpen, handleChatClick } = useNavigation();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <div className="min-h-screen bg-background text-foreground">
          <Router>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/security" element={<Security />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/leadership" element={<Leadership />} />
              <Route path="/heliam" element={<HeliAM />} />
              <Route path="/toolbox" element={<Toolbox />} />
              <Route path="/luemin" element={<Luemin />} />
              <Route path="/mission" element={<Mission />} />
              <Route path="/status" element={<Status />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/what-is-itam" element={<WhatIsITAM />} />
              <Route path="/security/whitepaper" element={<SecurityWhitepaper />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <ChatButton isOpen={isChatOpen} onToggle={handleChatClick} />
          </Router>
        </div>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
