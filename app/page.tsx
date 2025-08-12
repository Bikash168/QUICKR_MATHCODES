import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';
import FeatureSection from '@/components/FeatureSection';
import ServicesSection from '@/components/ServicesSection';
import CoursesSection from '@/components/CoursesSection';
import HowItWorks from '@/components/HowItWorks';
import WhyDifferent from '@/components/WhyDifferent';
import Testimonials from '@/components/Testimonials';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <div id="home" className="pt-20">
        <Hero />
      </div>

      {/* About Us */}
      <div id="aboutus">
        <AboutUs />
      </div>

      {/* Features */}
      <div id="features">
        <FeatureSection />
      </div>

      {/* Services */}
      <div id="services">
        <ServicesSection />
      </div>

      {/* Courses */}
      <div id="courses">
        <CoursesSection />
      </div>

      {/* How It Works */}
      <div id="howitworks">
        <HowItWorks />
      </div>

      {/* Why Different */}
      <div id="whydifferent">
        <WhyDifferent />
      </div>

      {/* Testimonials */}
      <div id="testimonials">
        <Testimonials />
      </div>

      {/* Contact Section */}
      <div id="contact">
        <ContactSection />
      </div>

   

      {/* Footer */}
      <Footer />
    </>
  );
}
