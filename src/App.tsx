
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Comparison } from './components/Comparison';
import { CTA } from './components/CTA';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { Pricing } from './components/Pricing';
import { Problem } from './components/Problem';
import { ScrollSection } from './components/ScrollSection';
import { UseCases } from './components/UseCases';
import { Waitlist } from './components/Waitlist';

const Home = () => (
  <>
    <Hero />
    <Problem />
    <HowItWorks />
    <ScrollSection />
    <UseCases />
    <Comparison />
    <Pricing />
    <FAQ />
    <CTA />
  </>
);

function App() {
  return (
    <BrowserRouter>
      <div style={{ paddingBottom: '0' }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/waitlist" element={<Waitlist />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
