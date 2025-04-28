import Header from './components/Header';
import Hero from './components/sections/Hero';
import Features from './components/sections/Features';
import About from './components/sections/About';
import FAQ from './components/sections/FAQ';
import Pricing from './components/sections/Pricing';
import HowItWorks from './components/sections/HowItWorks';
import Contact from './components/sections/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <About />
        <HowItWorks />
        <FAQ />
        <Pricing />
        <Contact />
      </main>
    </div>
  );
}

export default App;
