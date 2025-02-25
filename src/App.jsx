import './App.scss';

import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import Features from './components/FeaturesSection/Features';
import Extensions from './components/Extensions/Extensions';
import FAQSection from './components/FAQSection/FAQSection';
import ContactSection from './components/ContactSection/ContactSection';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <HeroSection />
      <Features />
      <Extensions />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
