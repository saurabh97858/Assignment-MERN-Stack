import { Link, useLocation } from 'react-router-dom';
import { BookOpen, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="fixed w-full z-50 top-0 start-0 bg-white/80 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-wrap items-center justify-between h-20">
                    <Link to="/" className="flex items-center gap-2 group">
                        <div className="bg-gradient-to-br from-indigo-600 to-purple-600 p-2 rounded-lg text-white group-hover:shadow-lg group-hover:shadow-indigo-500/30 transition-all duration-300">
                            <BookOpen className="h-6 w-6" />
                        </div>
                        <span className="self-center text-2xl font-bold whitespace-nowrap text-gray-900 tracking-tight">
                            EduTech<span className="text-indigo-600">.</span>
                        </span>
                    </Link>

                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <div className="hidden md:flex items-center gap-4">
                            <Link to="/login" className="text-gray-900 hover:text-indigo-600 font-medium px-4 py-2 transition-colors duration-200">
                                Login
                            </Link>
                            <Link to="/signup" className="text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-full text-sm px-6 py-2.5 text-center shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transform hover:-translate-y-0.5 transition-all duration-200">
                                Apply Now
                            </Link>
                        </div>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>

                    <div className={`${isOpen ? 'block' : 'hidden'} items-center justify-between w-full md:flex md:w-auto md:order-1`}>
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
                            {[
                                { name: 'Home', path: '/' },
                                { name: 'About', path: '/about' },
                                { name: 'Programs', path: '/programs' },
                                { name: 'Campus', path: '/campus' },
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link
                                        to={item.path}
                                        className={`block py-2 px-3 rounded md:p-0 transition-all duration-200 relative group
                                            ${isActive(item.path)
                                                ? 'text-indigo-600 font-bold'
                                                : 'text-gray-900 hover:text-indigo-600'
                                            }`}
                                    >
                                        {item.name}
                                        <span className={`absolute -bottom-1 left-0 h-0.5 bg-indigo-600 transition-all duration-300 ${isActive(item.path) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
