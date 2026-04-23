
import Header from '../components/Header';
import HeroBanner from '../components/Herobanner';
import AboutSection from '../components/AboutSection';
import ServicesPolicySection from '../components/ServicesPolicySection';
import TimelineSection from '../components/TimelineSection';
import NewsSection from '../components/NewsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="bg-white">
      <Header />
      <HeroBanner />
      <AboutSection />
      <ServicesPolicySection />
      <TimelineSection />
      <NewsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;