import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Users, Award } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import heroBg from '../assets/college_hero_background.png';

const Home = () => {
    return (
        <div className="font-sans text-gray-900 bg-white">
            <Navbar />

            {/* Hero Section */}
            <div className="relative pt-32 pb-32 flex content-center items-center justify-center min-h-screen">
                <div className="absolute top-0 w-full h-full bg-center bg-cover" style={{
                    backgroundImage: `url(${heroBg})`
                }}>
                    <span id="blackOverlay" className="w-full h-full absolute opacity-40 bg-gray-900"></span>
                </div>
                <div className="container relative mx-auto px-4">
                    <div className="items-center flex flex-wrap">
                        <div className="w-full lg:w-8/12 px-4 mx-auto text-center">
                            <div className="">
                                <span className="inline-block animate-fade-in-up px-4 py-1 rounded-full bg-white/10 border border-white/20 text-white backdrop-blur-sm text-sm font-medium mb-6">
                                    Admissions Open for 2025-26
                                </span>
                                <h1 className="text-white font-extrabold text-5xl md:text-7xl opacity-0 animate-fade-in-up leading-tight" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
                                    Shape Your Future <br /> at <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">EduTech</span>
                                </h1>
                                <p className="mt-6 text-lg md:text-xl text-gray-200 opacity-0 animate-fade-in-up max-w-2xl mx-auto" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
                                    Join a community of innovators and leaders. World-class infrastructure, expert faculty, and a curriculum designed for the future await you.
                                </p>
                                <div className="mt-10 flex flex-col md:flex-row justify-center gap-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
                                    <Link to="/signup" className="bg-indigo-600 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:bg-indigo-700 transition duration-300 flex items-center justify-center hover:scale-105 active:scale-95">
                                        Get Started <ArrowRight className="ml-2 w-5 h-5" />
                                    </Link>
                                    <Link to="/programs" className="bg-white/10 backdrop-blur-md border border-white/30 text-white font-bold px-8 py-4 rounded-full hover:bg-white/20 transition duration-300 flex items-center justify-center hover:scale-105 active:scale-95">
                                        View Programs
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Curve Divider */}
                <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none">
                    <svg className="relative block w-full h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-gray-50"></path>
                    </svg>
                </div>
            </div>

            {/* Features Section */}
            <section className="pb-20 bg-gray-50 -mt-10 pt-10 relative z-10">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap">
                        {[
                            { title: "World-Class Curriculum", icon: <BookOpen className="w-8 h-8 text-white" />, color: "bg-red-500", desc: "Designed by industry experts for real-world application." },
                            { title: "Expert Faculty", icon: <Users className="w-8 h-8 text-white" />, color: "bg-blue-500", desc: "Learn from renowned PhD holders and industry vets." },
                            { title: "Global Certification", icon: <Award className="w-8 h-8 text-white" />, color: "bg-green-500", desc: "Degrees recognized by top companies worldwide." }
                        ].map((feature, idx) => (
                            <div key={idx} className="w-full md:w-4/12 px-4 text-center mt-8 md:mt-0">
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-full shadow-xl rounded-2xl hover:-translate-y-2 transition-transform duration-300 p-8 border border-gray-100">
                                    <div className={`w-16 h-16 rounded-full ${feature.color} flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                                        {feature.icon}
                                    </div>
                                    <h6 className="text-xl font-bold text-gray-800">{feature.title}</h6>
                                    <p className="mt-4 text-gray-600 leading-relaxed">
                                        {feature.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Home;
