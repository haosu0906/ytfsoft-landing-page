
import { useEffect } from 'react'
import './App.css'
import AboutSection from './components/AboutSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import Header from './components/Header'
import HeroBanner from './components/Herobanner'
import ServicesPolicySection from './components/ServicesPolicySection'
import AOS from 'aos';
import 'aos/dist/aos.css';



function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    })
  }, []);


  return (
    <div className='min-h-screen flex flex-col font-sans'>

      <Header />
      <main className='flex-grow bg-slate-50'>

        <HeroBanner />
        <AboutSection />
        <ServicesPolicySection />
        <ContactSection />
      </main>

      <Footer />

    </div>
  )
}

export default App
