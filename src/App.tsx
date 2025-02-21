
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Security from "./pages/Security";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import HeliAM from "./pages/HeliAM";
import Toolbox from "./pages/Toolbox";
import Leadership from "./pages/Leadership";
import SecurityWhitepaper from "./pages/SecurityWhitepaper";
import Mission from "./pages/Mission";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/security" element={<Security />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/heliam" element={<HeliAM />} />
        <Route path="/toolbox" element={<Toolbox />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/security/whitepaper" element={<SecurityWhitepaper />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
