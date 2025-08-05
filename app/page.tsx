import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';
import FeatureSection from '@/components/FeatureSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
     <Header />
      <div id="home" className="pt-20"><Hero /></div>
      <div id="aboutus"><AboutUs /></div>
      <div id="services"><FeatureSection /></div>
      <div id="contact"><CTASection /></div>
      <Footer />
    </>
  );
}
