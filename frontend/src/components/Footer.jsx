import { Phone, MapPin, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8 relative z-10 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* College Info */}
                    <div>
                        <h3 className="text-2xl font-bold mb-6">EduTech Institute</h3>
                        <p className="text-gray-400 mb-6">
                            Empowering students with world-class education and innovation since 1995.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white transition"><Facebook className="w-5 h-5" /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition"><Twitter className="w-5 h-5" /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition"><Instagram className="w-5 h-5" /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition"><Linkedin className="w-5 h-5" /></a>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 text-indigo-400">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start text-gray-400">
                                <MapPin className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-indigo-500" />
                                <span>
                                    123, Knowledge Park, GT Road,<br />
                                    Kalyanpur, Kanpur, Uttar Pradesh 208017
                                </span>
                            </li>
                            <li className="flex items-center text-gray-400">
                                <Phone className="w-5 h-5 mr-3 text-indigo-500" />
                                <span>+91 98765 43210</span>
                            </li>
                            <li className="flex items-center text-gray-400">
                                <Mail className="w-5 h-5 mr-3 text-indigo-500" />
                                <span>admissions@edutech.edu.in</span>
                            </li>
                        </ul>
                    </div>

                    {/* Affiliation */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 text-indigo-400">Affiliation & Accreditation</h4>
                        <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                            <p className="text-gray-300 text-sm leading-relaxed">
                                <span className="font-bold text-white block mb-2">Approved by AICTE</span>
                                Affiliated with <span className="text-white font-medium">Dr. A.P.J. Abdul Kalam Technical University (AKTU)</span>, Lucknow.
                            </p>
                            <div className="mt-3 pt-3 border-t border-gray-700 text-xs text-gray-500">
                                College Code: 069 (Dummy)
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 text-indigo-400">Quick Links</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><Link to="/about" className="hover:text-white transition">About Us</Link></li>
                            <li><Link to="/programs" className="hover:text-white transition">Programs</Link></li>
                            <li><Link to="/campus" className="hover:text-white transition">Campus Life</Link></li>
                            <li><Link to="/login" className="hover:text-white transition">Student Portal</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter - New Addition */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 text-indigo-400">Stay Updated</h4>
                        <p className="text-gray-400 text-sm mb-4">Subscribe to our newsletter for latest updates and admissions news.</p>
                        <div className="flex flex-col space-y-3">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:border-indigo-500 transition"
                            />
                            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} EduTech Institute. All rights reserved.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-gray-500">
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-white">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
