
import './App.css'
import AboutSection from './components/AboutSection'
import Footer from './components/Footer'
import Header from './components/Header'
import HeroBanner from './components/Herobanner'
import ServicesPolicySection from './components/ServicesPolicySection'



function App() {
 
  return (
    <div className='min-h-screen flex flex-col font-sans'>
    
      <Header/>
          <main className='flex-grow bg-slate-50'>

             <HeroBanner/>
             <AboutSection/>
             <ServicesPolicySection/>
          </main>

      <Footer/>
      
    </div>
  )
}

export default App
