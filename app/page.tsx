import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Architecture from '@/components/Architecture';
import UseCases from '@/components/UseCases';
import Ecosystem from '@/components/Ecosystem';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      <div className="pt-16">
        <Hero />
        <Features />
        <Architecture />
        <UseCases />
        <Ecosystem />
        <CTA />
      </div>
      <Footer />
    </main>
  );
}
