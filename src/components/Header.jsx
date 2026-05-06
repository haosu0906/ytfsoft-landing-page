import React, { useState } from 'react';
import logoImg from '../assets/logo.png';
import { useLocation } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';

const Header = () => {
    const location = useLocation();
    
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    
    const menuItem = [
        { name: 'Home', link: '/' },
        { name: 'Products', link: '/products' },
        { name: 'Policy', link: '/policy' },
        { name: 'Contact', link: '/#contact' },
    ];

    const checkIsActive = (link) => {
        if (link === '/') {
            return location.pathname === '/' && location.hash === '';
        }
        if (link.includes('#')) {
            const hashPart = link.substring(link.indexOf('#'));
            return location.hash === hashPart;
        }
        return location.pathname.startsWith(link);
    };

    return (
        <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                  
                   
                    <div className="flex-shrink-0 flex items-center cursor-pointer">
                        <NavHashLink smooth to="/">
                            <img src={logoImg} alt="logo" className="h-12 w-auto" />
                        </NavHashLink>
                    </div>

                   
                    <nav className="hidden md:flex space-x-6">
                        {menuItem.map((item) => {
                            const isActive = checkIsActive(item.link); 
                            return (
                                <NavHashLink
                                    smooth
                                    key={item.name}
                                    to={item.link}
                                    className={`font-medium transition duration-300 px-1 py-1 uppercase ${
                                        isActive
                                            ? 'text-cyan-500 border-b-2 border-cyan-500' 
                                            : 'text-slate-700 hover:text-cyan-600'   
                                    }`}
                                >
                                    {item.name}
                                </NavHashLink>
                            )
                        })}
                    </nav>

                    
                    <div className="md:hidden flex items-center">
                        <button 
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-slate-700 hover:text-cyan-500 focus:outline-none p-2"
                        >
                            {isMobileMenuOpen ? (
                                
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                               
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

          
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-lg">
                    <nav className="flex flex-col px-4 pt-2 pb-4 space-y-1">
                        {menuItem.map((item) => {
                            const isActive = checkIsActive(item.link);
                            return (
                                <NavHashLink
                                    smooth
                                    key={item.name}
                                    to={item.link}
                                    
                                    onClick={() => setIsMobileMenuOpen(false)} 
                                    className={`block font-medium transition duration-300 px-3 py-3 uppercase rounded-md ${
                                        isActive
                                            ? 'bg-cyan-50 text-cyan-600' 
                                            : 'text-slate-700 hover:bg-gray-50 hover:text-cyan-600'   
                                    }`}
                                >
                                    {item.name}
                                </NavHashLink>
                            )
                        })}
                    </nav>
                </div>
            )}
        </header>
    )
}

export default Header;