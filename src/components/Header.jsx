import React from 'react';
import logoImg from '../assets/logo.png';
import { NavLink } from 'react-router-dom'; 
import { NavHashLink } from 'react-router-hash-link';
const Header = () => {
    
    const menuItem = [
        { name: 'Home', link: '/' },
        { name: 'Products', link: '/products' },
        { name: 'Policy', link: '/policy' },
        { name: 'Contact', link: '/#contact' },
    ];

    return (
        <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                  
                    <div className="flex-shrinl-0 flex items-center cursor-pointer">
                        <NavLink to="/">
                            <img src={logoImg} alt="logo" className="h-12 w-auto" />
                        </NavLink>
                    </div>

                    <nav className="hidden md:flex space-x-6">
                        {menuItem.map((item) => (
                            
                            <NavHashLink
                                smooth
                                key={item.name}
                                to={item.link}
                               
                                className={({ isActive }) => `font-medium transition duration-300 px-1 py-1 uppercase
                                ${isActive
                                        ? 'text-cyan-500 border-b-2 border-cyan-500' 
                                        : 'text-slate-700 hover:text-cyan-600'   
                                    }`}
                            >
                                {item.name}
                            </NavHashLink>
                        ))}
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;