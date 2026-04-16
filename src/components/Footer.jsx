import logoImg from '../assets/logo.png';

const Footer = () =>{
    return (
        <footer className="bg-white text-slate-900 py-12 mt-auto border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10 text-sm">
                  <div className="col-span-1 md:col-span-2 space-y-3"> 
                     <div className="flex items-center gap-2 mb-3">
                         <div className="flex-shrinl-0 flex items-center cursor-pointer">
                              <img src={logoImg} alt="logo" className="h-20 w-auto" />
                          </div>
                     
                     </div>

                  </div>

                  <div className="space-y-3">
                    <h4 className="text-white font-semibold text-base mb-3 border-l-2 border-cyan-500 pl-2">Contact</h4>
                    <p>Copywright 2023 ytfsoft.com</p>
                   
                  </div>

                  <div className="space-y-3">
                        <h4 className="text-white font-semibold text-base mb-3 border-l-2 border-cyan-500 pl-2">About us</h4>
                        <a href="#" className="block hover:text-cyan-400 transition">Services</a>
                        <a href="#" className="block hover:text-cyan-400 transition">Policy</a>
                        <a href="#" className="block hover:text-cyan-400 transition">News</a>
                  </div>

                </div>
                <div className="border-t border-slate-800 pt-8 mt-8 text-xs text-slate-500 flex flex-col md:flex-row justify-between gap-4 items-center">
                      
                      <div className="flex space-x-6">
                        <a href="#" className="hover:text-white transition duration-300">Facebook</a>
                        <a href="#" className="hover:text-white transition duration-300">LinkedIn</a>
                        <a href="#" className="hover:text-white transition duration-300">Twitter</a>
                      </div>
                </div>

            </div>
        </footer>
    )
}

export default Footer