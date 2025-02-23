import './App.scss';

import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import Features from './components/FeaturesSection/Features';

function App() {
  return (
    <div className="app">
      <Header />
      <HeroSection />
      <Features />
      {/* <Extensions /> */}
      {/* <FAQSection /> */}
      {/* <ContactSection /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
