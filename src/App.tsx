import { ScrollProgress } from './components/ScrollProgress';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { LuxuryStats } from './components/LuxuryStats';
import { AIFeatures } from './components/AIFeatures';
import { PreCheckinShowcase } from './components/PreCheckinShowcase';
import { AIAssistantDemo } from './components/AIAssistantDemo';
import { RoomsSuites } from './components/RoomsSuites';
import { Testimonials } from './components/Testimonials';
import { FixedAIChatBubble } from './components/FixedAIChatBubble';
import { Footer } from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <ScrollProgress />
      <Navigation />
      <Hero />
      <LuxuryStats />
      <AIFeatures />
      <PreCheckinShowcase />
      <AIAssistantDemo />
      <RoomsSuites />
      <Testimonials />
      <Footer />
      <FixedAIChatBubble />
    </div>
  );
}

export default App;
