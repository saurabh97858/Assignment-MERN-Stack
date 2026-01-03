import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Wifi, Wind, Coffee, Monitor, Shield, BookOpen, Users, Trophy, ArrowRight } from 'lucide-react';

import hostelImg from '../assets/campus_hostel.png';
import groundImg from '../assets/campus_ground.png';
import canteenImg from '../assets/campus_canteen.png';
import classroomImg from '../assets/campus_classroom.png';
import heroBg from '../assets/college_hero_background.png';

const Campus = () => {
    const facilities = [
        { title: "Smart AC Classrooms", desc: "State-of-the-art air-conditioned learning spaces tailored for focus and innovation.", icon: <Monitor className="w-6 h-6" />, img: classroomImg },
        { title: "Luxury Student Hostels", desc: "A secure, home-like environment with premium amenities and community living.", icon: <Shield className="w-6 h-6" />, img: hostelImg },
        { title: "Olympic-Size Sports Complex", desc: "Champion-grade tracks, courts, and fitness centers to fuel your passion.", icon: <Trophy className="w-6 h-6" />, img: groundImg },
        { title: "Gourmet Cafeteria", desc: "Nutritious, delicious, and hygienic meals to keep your mind and body healthy.", icon: <Coffee className="w-6 h-6" />, img: canteenImg }
    ];

    const stats = [
        { label: "Acres of Greenery", value: "100+" },
        { label: "Modern Labs", value: "50+" },
        { label: "Student Capacity", value: "5,000+" },
        { label: "Awards Won", value: "120+" }
    ];

    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            <Navbar />

            {/* Premium Hero Section */}
            <div className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={heroBg}
                        alt="Campus Hero"
                        className="w-full h-full object-cover transform scale-105 animate-slow-zoom"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-900/90 via-teal-900/70 to-black/60 mix-blend-multiply"></div>
                </div>

                <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                    <span className="inline-block py-1 px-3 rounded-full bg-teal-500/20 border border-teal-400/30 text-teal-300 text-sm font-semibold tracking-widest uppercase mb-6 backdrop-blur-md">
                        World Class Infrastructure
                    </span>
                    <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight drop-shadow-2xl">
                        Where Innovation Meets <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-cyan-200">Excellence</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                        Discover a campus designed to inspire, challenge, and nurture the next generation of leaders.
                    </p>
                    <div className="flex justify-center gap-4">
                        <button className="px-8 py-4 bg-teal-500 hover:bg-teal-600 text-white font-bold rounded-2xl shadow-lg shadow-teal-500/30 transition-all transform hover:-translate-y-1">
                            Virtual Tour
                        </button>
                        <button className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-bold rounded-2xl transition-all">
                            Explore Facilities
                        </button>
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-gray-50 to-transparent"></div>
            </div>

            {/* Stats Section */}
            <div className="relative -mt-20 z-20 px-4">
                <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12 grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="text-center group">
                            <h3 className="text-4xl md:text-5xl font-bold text-teal-600 mb-2 group-hover:scale-110 transition-transform duration-300">{stat.value}</h3>
                            <p className="text-gray-500 font-medium tracking-wide uppercase text-sm">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Facilities Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-32">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">World-Class Facilities</h2>
                    <p className="text-lg text-gray-600">
                        Our campus works as a catalyst for educational excellence.
                    </p>
                </div>

                {facilities.map((item, index) => (
                    <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center group`}>
                        <div className="w-full lg:w-1/2">
                            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl transition-all duration-700 transform hover:shadow-teal-900/20 group-hover:-translate-y-2">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-40 group-hover:opacity-20 transition-opacity"></div>
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-110"
                                    onError={(e) => { e.target.src = 'https://via.placeholder.com/600x400?text=Image+Coming+Soon' }}
                                />
                                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md p-3 rounded-2xl shadow-lg">
                                    <div className="text-teal-600">
                                        {item.icon}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 space-y-6">
                            <div className="flex items-center gap-4">
                                <span className="text-teal-500 font-bold text-lg tracking-wider uppercase">0{index + 1}</span>
                                <div className="h-px bg-teal-200 flex-1"></div>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">{item.title}</h2>
                            <p className="text-lg text-slate-600 leading-relaxed font-light">
                                {item.desc} Designed with modern aesthetics and functionality in mind, ensuring that every moment spent here contributes to your overall growth.
                            </p>
                            <button className="group flex items-center gap-2 text-teal-600 font-bold hover:gap-4 transition-all uppercase tracking-wide text-sm">
                                Learn more <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Gallery / Campus Life Grid */}
            <div className="bg-slate-900 py-24 text-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                        <div>
                            <h2 className="text-4xl font-bold mb-4">Campus Life</h2>
                            <p className="text-slate-400 max-w-lg">Beyond academics, find your passion in our vibrant community.</p>
                        </div>
                        <button className="mt-6 md:mt-0 px-6 py-3 border border-slate-700 rounded-full hover:bg-slate-800 transition-colors">
                            View All Gallery
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[600px]">
                        <div className="md:col-span-2 md:row-span-2 relative rounded-2xl overflow-hidden group">
                            <img src={groundImg} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Sports" />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-end p-8">
                                <h3 className="text-2xl font-bold">Annual Sports Day</h3>
                            </div>
                        </div>
                        <div className="relative rounded-2xl overflow-hidden group">
                            <img src={canteenImg} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Food" />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-end p-6">
                                <h3 className="text-xl font-bold">Food Fest</h3>
                            </div>
                        </div>
                        <div className="relative rounded-2xl overflow-hidden group">
                            <img src={hostelImg} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Hostel" />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-end p-6">
                                <h3 className="text-xl font-bold">Hostel Night</h3>
                            </div>
                        </div>
                        <div className="md:col-span-2 relative rounded-2xl overflow-hidden group">
                            <img src={classroomImg} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Classroom" />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-end p-6">
                                <h3 className="text-xl font-bold">Tech Symposium</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="py-24 bg-teal-50">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Join Us?</h2>
                    <p className="text-xl text-gray-600 mb-10">
                        Take the first step towards a bright future. Apply now for the upcoming academic session.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="px-10 py-4 bg-teal-600 text-white font-bold rounded-full shadow-xl shadow-teal-600/20 hover:bg-teal-700 transition-all transform hover:-translate-y-1">
                            Apply Now
                        </button>
                        <button className="px-10 py-4 bg-white text-teal-700 font-bold rounded-full border border-teal-200 hover:bg-teal-50 transition-all">
                            Download Brochure
                        </button>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Campus;
