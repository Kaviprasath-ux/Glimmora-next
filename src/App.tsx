import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { AIFeatures } from './components/AIFeatures';
import { PreCheckinShowcase } from './components/PreCheckinShowcase';
import { AIAssistantDemo } from './components/AIAssistantDemo';
import { RoomsSuites } from './components/RoomsSuites';
import { FixedAIChatBubble } from './components/FixedAIChatBubble';
import { Footer } from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navigation />
      <Hero />
      <AIFeatures />
      <PreCheckinShowcase />
      <AIAssistantDemo />
      <RoomsSuites />
      <Footer />
      <FixedAIChatBubble />
    </div>
  );
}

export default App;
