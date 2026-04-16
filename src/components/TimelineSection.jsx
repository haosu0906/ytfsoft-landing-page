const TimelineSection = () => {
  const roadmapMode = [
    { 
      year: '2023', 
      title: 'FOUNDATION', 
      desc: 'YTFSOFT was established with a team of passionate engineers, beginning the journey to conquer the Vietnamese technology market.' 
    },
    { 
      year: '2025', 
      title: 'EXPANSION & GROWTH', 
      desc: 'Successfully completed over 50 projects, signed strategic partnerships, and expanded operations to major cities nationwide.' 
    },
    { 
      year: '2026+', 
      title: 'INTERNATIONAL REACH', 
      desc: 'Opening regional offices in Southeast Asia, developing global SaaS products, and becoming an international technology brand.',
      status: 'UNDER DEVELOPMENT'
    },
  ];

  return (
    <section className="py-24 bg-slate-950 text-white overflow-hidden border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div data-aos="fade-up" className="text-center mb-20">
          <span className="inline-block px-4 py-1 bg-slate-800 text-cyan-400 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
            HISTORY & MILESTONES
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase leading-tight">
            Our Journey of Growth
          </h2>
          <div className="w-12 h-1 bg-cyan-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="relative">
          <div className="absolute top-[39px] left-0 w-full h-1 bg-slate-800 rounded-full z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {roadmapMode.map((item, index) => {
              const isFuture = item.status === 'UNDER DEVELOPMENT';
              return (
                <div key={index} data-aos="fade-up" data-aos-delay={index * 150} className="flex flex-col items-center group">
                  
                  <div className={`w-20 h-20 rounded-full flex items-center justify-center font-bold text-lg mb-6 border-4 shadow-xl transition-all duration-300 ${isFuture ? 'border-cyan-500 bg-cyan-950 text-cyan-400 scale-110' : 'border-slate-800 bg-slate-900 group-hover:border-cyan-500'}`}>
                    {item.year}
                  </div>

                  <div className={`bg-slate-900 p-7 rounded-2xl border border-slate-800 shadow-lg text-center w-full min-h-[220px] transition group-hover:border-slate-700 ${isFuture ? 'border-cyan-500/50' : ''}`}>
                    {isFuture && (
                        <span className="inline-block px-3 py-1 bg-cyan-950 text-cyan-400 rounded-full text-[10px] font-bold tracking-widest uppercase mb-3">
                            * {item.status}
                        </span>
                    )}
                    <h3 className="text-lg font-extrabold mb-3 uppercase tracking-wide group-hover:text-cyan-400">
                        {item.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                        {item.desc}
                    </p>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default TimelineSection;