import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Wifi, Wind, Coffee, Monitor, Shield } from 'lucide-react';

import hostelImg from '../assets/campus_hostel.png';
import groundImg from '../assets/campus_ground.png';
import canteenImg from '../assets/campus_canteen.png';
import classroomImg from '../assets/campus_classroom.png';
import heroBg from '../assets/college_hero_background.png';

const Campus = () => {
    const facilities = [
        { title: "Smart AC Classrooms", desc: "Air-conditioned smart learning spaces.", icon: <Monitor />, img: classroomImg },
        { title: "Student Hostels", desc: "Home away from home with premium amenities.", icon: <Shield />, img: hostelImg },
        { title: "Sports Complex", desc: "Champion-grade tracks and courts.", icon: <Wind />, img: groundImg },
        { title: "Modern Cafeteria", desc: "Healthy food for healthy minds.", icon: <Coffee />, img: canteenImg }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            {/* Hero with correct navigation implicitly via Navbar */}
            <div className="relative pt-20 bg-teal-900 h-96 flex items-center justify-center">
                <div className="absolute top-0 w-full h-full bg-center bg-cover opacity-30" style={{
                    backgroundImage: `url(${heroBg})`
                }}></div>
                <div className="relative z-10 text-center px-4 mt-8">
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-md">Life at Campus</h1>
                    <p className="text-xl text-teal-100 max-w-2xl mx-auto font-light">
                        Vibrant, Safe, and Inspiring.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="space-y-32">
                    {facilities.map((item, index) => (
                        <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}>
                            <div className="w-full lg:w-1/2 group">
                                <div className="relative rounded-3xl overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60 z-10"></div>
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="w-full h-96 object-cover"
                                        onError={(e) => { e.target.src = 'https://via.placeholder.com/600x400?text=Image+Coming+Soon' }}
                                    />
                                    <div className="absolute bottom-6 left-6 z-20">
                                        <span className="bg-white/90 text-teal-900 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider mb-2 inline-block">Facility</span>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2 space-y-6">
                                <div className="inline-flex p-4 rounded-2xl bg-teal-100 text-teal-700 shadow-sm">
                                    {item.icon}
                                </div>
                                <h2 className="text-4xl font-bold text-gray-900">{item.title}</h2>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    {item.desc} Experience the best atmosphere tailored for growth and comfort. Our infrastructure meets international standards to provide you with a seamless educational journey.
                                </p>
                                <div className="h-1 w-20 bg-teal-500 rounded-full"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Campus;
