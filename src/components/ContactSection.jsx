const ContactSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
 
        <div data-aos="fade-up" className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-cyan-50 text-cyan-600 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
            GET IN TOUCH
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 uppercase leading-tight">
            Contact Us
          </h2>
          <div className="w-12 h-1 bg-cyan-500 mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 max-w-2xl text-lg text-slate-600 mx-auto">
            Ready to start your digital transformation journey? Send us a message and our team will get back to you within 24 hours.
          </p>
        </div>

        
        <div className="bg-slate-50 rounded-3xl overflow-hidden shadow-lg border border-slate-100 flex flex-col lg:flex-row">
          
          
          <div data-aos="fade-right" className="w-full lg:w-2/5 bg-slate-900 p-10 lg:p-12 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="text-slate-300 mb-10 text-sm leading-relaxed">
                Fill up the form and our Team will get back to you within 24 hours.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="text-cyan-400 mt-1">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-1">Call Us</p>
                    <p className="font-medium">+84 948 308 000</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-cyan-400 mt-1">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-1">Email</p>
                    <p className="font-medium">info@ytfsoft.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-cyan-400 mt-1">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-1">Location</p>
                    <p className="font-medium leading-relaxed"> Gia Lam, Hanoi, Vietnam</p>
                  </div>
                </div>
              </div>
            </div>
            
          
            <div className="absolute bottom-[-10%] right-[-10%] w-64 h-64 bg-cyan-600 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute top-[10%] left-[-20%] w-48 h-48 bg-blue-500 rounded-full opacity-20 blur-2xl"></div>
          </div>

         
          <div data-aos="fade-left" className="w-full lg:w-3/5 p-10 lg:p-12 bg-white">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-semibold text-slate-700 mb-2">First Name</label>
                  <input type="text" id="firstName" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors bg-slate-50 focus:bg-white" placeholder="your name" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-semibold text-slate-700 mb-2">Last Name</label>
                  <input type="text" id="lastName" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors bg-slate-50 focus:bg-white" placeholder="your name" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                  <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors bg-slate-50 focus:bg-white" placeholder="you@example.com" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">Phone Number</label>
                  <input type="tel" id="phone" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors bg-slate-50 focus:bg-white" placeholder="your phone" />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                <textarea id="message" rows="4" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors bg-slate-50 focus:bg-white resize-none" placeholder="How can we help you?"></textarea>
              </div>

              <div className="pt-2">
                <button type="button" className="w-full bg-slate-900 hover:bg-cyan-600 text-white font-bold py-4 px-8 rounded-lg transition duration-300 shadow-md">
                  Send Message
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;