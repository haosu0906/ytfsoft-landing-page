
import officeImg from '../assets/office.png'; 

const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
     
        <div data-aos="fade-up" className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-cyan-50 text-cyan-500 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
            About Us
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 uppercase">
            About Us
          </h2>
         
          <div className="w-12 h-1 bg-cyan-500 mx-auto mt-4 rounded-full"></div>
        </div>

      
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
        
          <div className="w-full">
           
            <div className="relative mb-6">
              <img 
                src={officeImg} 
                alt="Văn phòng YTFSOFT" 
                className="w-full h-auto object-cover rounded-xl shadow-md border border-gray-200"
              />
           
              <div data-aos="fade-right" className="absolute bottom-4 left-4 bg-slate-900 text-white p-4 lg:p-5 rounded-xl shadow-lg border-l-4 border-cyan-500 w-40">
                <p className="text-2xl font-bold text-cyan-400">200+</p>
                <p className="text-xs text-slate-300 mt-1">Successful Projects</p>
              </div>
            </div>

           
            <div className="bg-slate-50 border border-slate-100 p-5 rounded-xl flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">Professional Team</h4>
                <p className="text-xs text-slate-500 mt-1">Engineers, experts & tech consultants</p>
              </div>
            </div>
          </div>

          
          <div data-aos="fade-left" className="w-full space-y-6">
            <h3 className="text-2xl font-extrabold text-slate-900 mb-6 uppercase">
              Vision & Mission
            </h3>

            
            <div className="bg-slate-50/80 border-l-[6px] border-cyan-500 rounded-r-xl p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center text-white">
                   <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/><path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/></svg>
                </div>
                <h4 className="font-bold text-slate-900 uppercase text-sm tracking-wide">Vision</h4>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
               To become the leading technology company in Southeast Asia, providing innovative software solutions and leading the digital transformation trend for medium and large enterprises.
              </p>
            </div>

           
            <div className="bg-orange-50/50 border-l-[6px] border-orange-500 rounded-r-xl p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white">
                   <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.381z" clipRule="evenodd"/></svg>
                </div>
                <h4 className="font-bold text-slate-900 uppercase text-sm tracking-wide">Mission</h4>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
               Bringing advanced technology closer to Vietnamese enterprises — helping them optimize processes, secure data, and achieve sustainable growth in the digital age.
              </p>
            </div>

            
            <div className="bg-slate-50/80 border-l-[6px] border-slate-900 rounded-r-xl p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-slate-900 rounded-full flex items-center justify-center text-white">
                   <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                </div>
                <h4 className="font-bold text-slate-900 uppercase text-sm tracking-wide">Core Values</h4>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <span className="bg-slate-900 text-white text-xs px-4 py-1.5 rounded-full font-medium">Innovation</span>
                <span className="bg-slate-900 text-white text-xs px-4 py-1.5 rounded-full font-medium">Integrity</span>
                <span className="bg-slate-900 text-white text-xs px-4 py-1.5 rounded-full font-medium">Efficiency</span>
                <span className="bg-slate-900 text-white text-xs px-4 py-1.5 rounded-full font-medium">Reliability</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;