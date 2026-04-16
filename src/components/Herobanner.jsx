const HeroBanner = () => {
    return (
       <section className="relative bg-slate-900 pt-20 pb-32 lg:pt-32 lg:pb-48 overflow-hidden">
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 data-aos="fade-down" className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
                    YTFSOFT: Leading Technology: <br className="hidden md:block" />
                    <span className="text-cyan-400">Optimal Solutions</span>
                </h1>
                <p data-aos="fade-up" data-aos-delay="200" className="mt-4 max-w-2xl text-lg md:text-xl text-slate-300 mx-auto mb-10">
                    We provide comprehensive software solutions, enterprise digital transformation, and build robust digital ecosystems for the future.
                </p>
                <div data-aos="zoom-in" data-aos-delay="400" className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16">
                    <button className="w-full sm:w-auto bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-8 rounded-full transition duration-300 shadow-lg shadow-cyan-500/30">
                       Contact Us Now
                    </button>
                    <button className="w-full sm:w-auto bg-transparent border-2 border-slate-500 hover:border-white text-white font-semibold py-3 px-8 rounded-full transition duration-300">
                        Discover More
                    </button>
                </div>

                <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto border-t border-slate-700 pt-8">
                    <div>
                        <p className="text-3xl md:text-4xl font-bold text-white">200+</p>
                        <p className="text-sm text-slate-400 mt-1">Completed Projects</p>
                    </div>
                    <div>
                        <p className="text-3xl md:text-4xl font-bold text-white">50+</p>
                        <p className="text-sm text-slate-400 mt-1">Tech Experts</p>
                    </div>
                    <div>
                        <p className="text-3xl md:text-4xl font-bold text-white">99%</p>
                        <p className="text-sm text-slate-400 mt-1">Client Satisfaction</p>
                    </div>
                </div>
            </div>

            <div className="absolute top-0 inset-x-0 h-full w-full opacity-30">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-cyan-600 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-800 rounded-full blur-[120px]"></div>
            </div>

            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
                <svg
                    className="relative block w-full h-[60px] md:h-[100px]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                    preserveAspectRatio="none"
                >
                    <path
                        className="fill-white"
                        d="M0,128L80,149.3C160,171,320,213,480,208C640,203,800,149,960,138.7C1120,128,1280,160,1360,176L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
                    ></path>
                </svg>
            </div>
        </section>
    )
}

export default HeroBanner;