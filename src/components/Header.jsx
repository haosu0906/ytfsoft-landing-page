import logoImg from '../assets/logo.png';

const Header = () => {
    const menuItem = [
        { name: 'Home', link: '#', active: true },
        { name: 'policy', link: '#', active: false },
        { name: 'contact', link: '#', active: false },

    ];

    return (
        <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" >
                <div className="flex justify-between items-center h-20">

                    <div className="flex-shrinl-0 flex items-center cursor-pointer">
                        <img src={logoImg} alt="logo" className="h-12 w-auto" />
                    </div>

                    <nav className="hidden md:flex space-x-6">
                        {menuItem.map((item) => (
                            <a
                                key={item.name}
                                href={item.link}
                                className={`font-medium transition duration-300 px-1 py-1
                                ${item.active
                                        ? 'text-cyan-500 border-b-2 border-cyan-500'
                                        : 'text-slate-700 hover:text-cyan-600'
                                    }`}
                            >
                                {item.name}
                            </a>
                        ))}
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header