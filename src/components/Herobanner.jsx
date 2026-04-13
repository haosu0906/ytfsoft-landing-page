const HeroBanner = () => {
    return (
       <section className="relative bg-slate-900 pt-20 pb-32 lg:pt-32 lg:pb-48 overflow-hidden">
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
                    YTFSOFT: Công nghệ dẫn đầu: <br className="hidden md:block" />
                    <span className="text-cyan-400">Giải pháp tối ưu</span>
                </h1>
                <p className="mt-4 max-w-2xl text-lg md:text-xl text-slate-300 mx-auto mb-10">
                    Chúng tôi cung cấp các giải pháp phần mềm toàn diện, chuyển đổi số doanh nghiệp,
                    và xây dựng hệ thống website/app vững chắc cho tương lai.
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16">
                    <button className="w-full sm:w-auto bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-8 rounded-full transition duration-300 shadow-lg shadow-cyan-500/30">
                        Liên hệ ngay
                    </button>
                    <button className="w-full sm:w-auto bg-transparent border-2 border-slate-500 hover:border-white text-white font-semibold py-3 px-8 rounded-full transition duration-300">
                        Khám phá thêm
                    </button>
                </div>

                <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto border-t border-slate-700 pt-8">
                    <div>
                        <p className="text-3xl md:text-4xl font-bold text-white">200+</p>
                        <p className="text-sm text-slate-400 mt-1">Dự án hoàn thành</p>
                    </div>
                    <div>
                        <p className="text-3xl md:text-4xl font-bold text-white">50+</p>
                        <p className="text-sm text-slate-400 mt-1">Chuyên gia</p>
                    </div>
                    <div>
                        <p className="text-3xl md:text-4xl font-bold text-white">99%</p>
                        <p className="text-sm text-slate-400 mt-1">Khách hàng hài lòng</p>
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
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C79.44,115.17,143.51,123.63,222.56,110.15c79.05-13.48,98.83-42.92,158.83-53.71Z"
                        className="fill-slate-50"
                    ></path>
                </svg>
            </div>
        </section>
    )
}

export default HeroBanner;