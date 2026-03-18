import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsStrip } from './components/StatsStrip';
import { FeaturesGrid } from './components/FeaturesGrid';
import { HowItWorks } from './components/HowItWorks';
import { PricingTeaser } from './components/PricingTeaser';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="page-shell">
      <div className="bg-accent bg-accent-a" />
      <div className="bg-accent bg-accent-b" />
      <Navbar />
      <main>
        <Hero />
        <StatsStrip />
        <FeaturesGrid />
        <HowItWorks />
        <PricingTeaser />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}

export default App;
