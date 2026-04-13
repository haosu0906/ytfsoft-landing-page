
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import HeroBanner from './components/Herobanner'



function App() {
 
  return (
    <div className='min-h-screen flex flex-col font-sans'>
    
      <Header/>
          <main className='flex-grow bg-slate-50'>

             <HeroBanner/>
          </main>

      <Footer/>
      
    </div>
  )
}

export default App
