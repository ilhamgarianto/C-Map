import { useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import InteractiveMap from './components/InteractiveMap';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Drone from './components/Drone';
function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      
      <div className={`min-h-screen transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Navbar />
        <Hero />
        <Drone />
        <About />
        <Features />
        <InteractiveMap />
        <CTA />
        <Footer />
      </div>
    </>
  );
}

export default App;
