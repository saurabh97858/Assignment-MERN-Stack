import { ArrowRight, CheckCircle, GraduationCap, Building, Star, Award } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import aboutBg from '../assets/about_bg.png';

const About = () => {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Header */}
            <div className="relative pt-20 bg-gray-900 h-[500px] flex items-center">
                <div className="absolute top-0 w-full h-full bg-center bg-cover opacity-30" style={{
                    backgroundImage: `url(${aboutBg})`
                }}></div>
                <div className="absolute top-0 w-full h-full bg-gradient-to-b from-transparent to-white/10"></div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-indigo-600/30 text-indigo-200 text-sm font-semibold mb-4 border border-indigo-500/50 backdrop-blur-sm">
                        Since 1995
                    </span>
                    <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
                        Legacy of <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Excellence</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
                        For over three decades, EduTech Institute has been at the forefront of educational innovation, fostering a community of thinkers, creators, and leaders.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

                {/* Vision & Mission */}
                <div className="grid md:grid-cols-2 gap-16 mb-32 items-center">
                    <div>
                        <h3 className="text-indigo-600 font-bold uppercase tracking-widest text-sm mb-2">Our Philosophy</h3>
                        <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">Empowering Minds, <br />Shaping the Future.</h2>
                        <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                            <p>
                                At EduTech, we believe that education is not just about filling a bucket, but lighting a fire. Our vision is to create an ecosystem where innovation thrives and students are encouraged to question, experiment, and succeed.
                            </p>
                            <p>
                                With a focus on holistic development, we seamlessly blend academic rigor with extracurricular brilliance, ensuring our graduates are ready to tackle global challenges.
                            </p>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-2xl transform rotate-3 scale-105 opacity-20"></div>
                        <div className="relative bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                            <h4 className="flex items-center text-xl font-bold mb-4">
                                <Star className="w-6 h-6 text-yellow-500 mr-2 fill-current" />
                                Why Choose Us?
                            </h4>
                            <ul className="space-y-4">
                                {["Top 10 Ranked Institute", "Global University Tie-ups", "100+ Research Patents", "Alumni in Fortune 500 Companies"].map(item => (
                                    <li key={item} className="flex items-center text-gray-700 bg-gray-50 p-3 rounded-lg">
                                        <CheckCircle className="w-5 h-5 text-indigo-500 mr-3" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Scholarship & Offers */}
                <div className="mb-32">
                    <div className="text-center mb-16">
                        <span className="text-green-600 font-bold uppercase tracking-widest text-sm">Financial Aid</span>
                        <h2 className="text-3xl font-bold text-gray-900 sm:text-5xl mt-2">Scholarships & Support</h2>
                        <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">We are committed to ensuring that talent meets opportunity, regardless of financial background.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Merit Scholarship", icon: <GraduationCap />, color: "indigo", desc: "Up to 100% tuition waiver for top rankers in national entrance exams." },
                            { title: "Sports Excellence", icon: <Award />, color: "purple", desc: "Special grants and training support for national and state-level athletes." },
                            { title: "Need-Based Aid", icon: <Building />, color: "blue", desc: "Comprehensive financial assistance packages for deserving students." }
                        ].map((item, idx) => (
                            <div key={idx} className={`bg-white rounded-2xl p-8 shadow-lg border-t-4 border-${item.color}-500 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1`}>
                                <div className={`w-14 h-14 rounded-full bg-${item.color}-100 flex items-center justify-center text-${item.color}-600 mb-6`}>
                                    {item.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                <p className="text-gray-600">{item.desc}</p>
                                <button className={`mt-6 text-${item.color}-600 font-semibold flex items-center hover:opacity-80`}>
                                    Learn more <ArrowRight className="w-4 h-4 ml-2" />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Facilities */}
                {/* Facilities List (Text based as per prompt to show "many more") */}
                <div className="grid md:grid-cols-2 gap-12 items-center bg-gray-50 rounded-3xl p-8 md:p-12">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">World Class Infrastructure</h2>
                        <p className="text-lg text-gray-600 mb-6">
                            Experience a campus designed for the future. From automated libraries to AI-powered labs, every corner is built to enhance your learning curve.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                "24/7 Wi-Fi Campus", "Smart Classrooms", "Digital Library",
                                "Robotics Lab", "Incubation Center", "Medical Support",
                                "Modern Hostels", "Gym & Sports"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center text-gray-800 font-medium">
                                    <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl bg-indigo-900 flex items-center justify-center text-white">
                        {/* Abstract visual or placeholder */}
                        <div className="text-center p-6">
                            <h3 className="text-4xl font-bold mb-2">50+</h3>
                            <p className="text-indigo-200">Acres of Green Campus</p>
                            <div className="my-8 h-px bg-indigo-700 w-full"></div>
                            <h3 className="text-4xl font-bold mb-2">24/7</h3>
                            <p className="text-indigo-200">Security & Surveillance</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default About;
