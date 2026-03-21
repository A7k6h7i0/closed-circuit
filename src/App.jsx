import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';

// Pages
import Home from './pages/Home';
import Features from './pages/Features';
import FlowText from './pages/FlowText';
import FlowDiagram from './pages/FlowDiagram';
import FlowVoice from './pages/FlowVoice';
import DifferSocial from './pages/DifferSocial';
import DifferFacebook from './pages/DifferFacebook';
import DifferWhatsapp from './pages/DifferWhatsapp';
import TopReasons from './pages/TopReasons';
import Gifts from './pages/Gifts';
import UseCases from './pages/UseCases';
import Taglines from './pages/Taglines';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50">
        <ScrollToTop />
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/flow-text" element={<FlowText />} />
            <Route path="/flow-diagram" element={<FlowDiagram />} />
            <Route path="/flow-voice" element={<FlowVoice />} />
            <Route path="/differ-social" element={<DifferSocial />} />
            <Route path="/differ-facebook" element={<DifferFacebook />} />
            <Route path="/differ-whatsapp" element={<DifferWhatsapp />} />
            <Route path="/top-reasons" element={<TopReasons />} />
            <Route path="/gifts" element={<Gifts />} />
            <Route path="/use-cases" element={<UseCases />} />
            <Route path="/taglines" element={<Taglines />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
}
