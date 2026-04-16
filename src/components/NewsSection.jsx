const NewsSection = () => {
  const newsCards = [
    {
        image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=600&q=80',
        tag: 'Artificial Intelligence',
        tagColor: 'blue',
        date: 'Apr 08, 2026',
        author: 'YTFSOFT Research',
        readTime: '5 min read',
        title: 'AI Trends 2026: The Revolution in Enterprise Software',
        excerpt: 'AI is reshaping the IT industry. 2026 marks the boom of generative AI models in business software, automating processes and boosting productivity by up to 300%.'
    },
    {
        image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80',
        tag: 'Cybersecurity',
        tagColor: 'orange',
        date: 'Apr 02, 2026',
        author: 'YTFSOFT Security Team',
        readTime: '7 min read',
        title: 'Cloud Data Security: Challenges & Solutions for Modern Businesses',
        excerpt: 'With rising sophisticated cyberattacks, securing data on cloud platforms is a top priority. YTFSOFT shares comprehensive strategies to keep businesses running safely.'
    },
    {
        image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80',
        tag: 'Digital Transformation',
        tagColor: 'green',
        date: 'Mar 25, 2026',
        author: 'YTFSOFT Consulting Group',
        readTime: '6 min read',
        title: 'End-to-End Digital Transformation: The Journey to Tech Leadership',
        excerpt: 'Many businesses are entering a strong digital transformation phase. YTFSOFT shares a practical roadmap to help organizations succeed and optimize efficiency.'
    }
  ];
  const getTagStyle = (color) => {
    switch (color) {
        case 'orange': return 'bg-orange-950 text-orange-400';
        case 'green': return 'bg-emerald-950 text-emerald-400';
        default: return 'bg-blue-950 text-blue-400';
    }
  };

  return (
    <section className="py-24 bg-slate-950 text-white overflow-hidden border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div data-aos="fade-up" className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-slate-800 text-cyan-400 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
            LATEST INSIGHTS
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase leading-tight">
            Technology News & Updates
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-slate-400 mx-auto">
            Stay updated with the latest trends and tech solutions from YTFSOFT's expert team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {newsCards.map((card, index) => (
            <div key={index} data-aos="fade-up" data-aos-delay={index * 150} className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 shadow-lg group hover:border-slate-700 transition-all duration-300">
                <img src={card.image} alt={card.title} className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="p-7">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 ${getTagStyle(card.tagColor)}`}>
                        {card.tag}
                    </span>
                    <div className="flex items-center gap-2 text-xs text-slate-500 mb-4">
                        <span>{card.date}</span> • <span>{card.author}</span> • <span>{card.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-4 leading-tight group-hover:text-cyan-400">
                        {card.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed mb-6 min-h-[80px]">
                        {card.excerpt}
                    </p>
                    <a href="#" className="font-bold flex items-center gap-2 text-cyan-400 group-hover:gap-4 transition-all">
                        Read More <span>&rarr;</span>
                    </a>
                </div>
            </div>
          ))}
        </div>

        <div data-aos="fade-up" className="text-center">
            <button className="bg-slate-800 hover:bg-slate-700 text-white font-bold py-3.5 px-8 rounded-full transition duration-300 border border-slate-700 shadow-lg">
                View All Articles &rarr;
            </button>
        </div>

      </div>
    </section>
  );
};

export default NewsSection;