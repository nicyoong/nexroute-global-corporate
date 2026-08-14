import TopBar from '@/components/layout/TopBar';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Stats from '@/components/sections/Stats';
import Industries from '@/components/sections/Industries';
import Testimonials from '@/components/sections/Testimonials';
import CTA from '@/components/sections/CTA';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <>
      <TopBar />
      <Navbar />
      <Hero />
      <Services />
      <Stats />
      <Industries />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}
