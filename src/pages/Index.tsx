import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import MobiliarioSection from '@/components/MobiliarioSection';
import HerreriaSection from '@/components/HerreriaSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-stone-50 font-inter">
      <Navigation />
      <Hero />
      <MobiliarioSection />
      <HerreriaSection />
      <Footer />
    </div>
  );
};

export default Index;
