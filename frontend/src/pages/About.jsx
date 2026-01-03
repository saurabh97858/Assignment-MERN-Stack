import { ArrowRight, CheckCircle, GraduationCap, Building, Star, Award, Users, BookOpen, Trophy, Target, Heart, Globe } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import aboutBg from '../assets/about_bg.png';

const About = () => {
    return (
        <div className="min-h-screen relative font-sans text-slate-900 bg-slate-900 overflow-x-hidden selection:bg-indigo-300">
            <Navbar />

            {/* Fixed Background - Darkened Image */}
            <div className="fixed inset-0 z-0 text-slate-900">
                <img src={aboutBg} alt="Background" className="w-full h-full object-cover opacity-50" /> {/* Higher opacity image */}
                <div className="absolute inset-0 bg-black/70 backdrop-blur-[1px]"></div> {/* HEAVY dark overlay for 'Dark Pic' look */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-slate-900/90"></div>

                {/* Ambient Blobs - Dark mode glows behind cards */}
                <div className="absolute top-20 left-20 w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-[100px] animate-blob"></div>
                <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>
            </div>

            {/* Scrollable Content */}
            <div className="relative z-10 pt-32 pb-20">

                {/* Hero Section - Text White for Contrast against Dark BG */}
                <div className="text-center px-4 mb-24 animate-fade-in-up">
                    <div className="inline-flex items-center py-1.5 px-4 rounded-full bg-white/10 border border-white/20 shadow-sm text-indigo-300 text-sm font-bold tracking-widest uppercase mb-6 backdrop-blur-md">
                        <Star className="w-4 h-4 mr-2 text-yellow-400 fill-current" /> Est. 1995 • 30 Years of Legacy
                    </div>
                    <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tight leading-none drop-shadow-2xl">
                        Inspiring <br />
                        <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Greatness</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
                        We don't just teach. We cultivate the <span className="font-semibold text-white">innovators</span>, <span className="font-semibold text-white">leaders</span>, and <span className="font-semibold text-white">visionaries</span> of tomorrow.
                    </p>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">

                    {/* Mission & Vision - WHITE Glass Card (The "Light Theme" part) */}
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-[2.5rem] blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>

                        {/* Note: This is now a Light Card on a Dark Background - High Contrast Premium Look */}
                        <div className="relative bg-white/90 backdrop-blur-xl rounded-[2rem] p-8 md:p-16 shadow-2xl border border-white/60 grid md:grid-cols-2 gap-16 items-center">

                            {/* Left Content */}
                            <div className="space-y-8">
                                <div>
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2 bg-indigo-100 rounded-lg">
                                            <Target className="w-6 h-6 text-indigo-600" />
                                        </div>
                                        <h3 className="text-indigo-600 font-bold uppercase tracking-widest text-sm">Our Philosophy</h3>
                                    </div>
                                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                                        Empowering Minds, <br />
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">Shaping Futures.</span>
                                    </h2>
                                </div>
                                <p className="text-slate-600 text-lg leading-relaxed">
                                    At EduTech, education goes beyond textbooks. It's about lighting a fire of curiosity. Our ecosystem creates a breeding ground for questions, experiments, and breakthroughs.
                                </p>
                                <div className="flex gap-4">
                                    <div className="flex-1 p-6 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                        <h4 className="text-3xl font-black text-slate-900 mb-1">98%</h4>
                                        <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">Placement Rate</p>
                                    </div>
                                    <div className="flex-1 p-6 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                        <h4 className="text-3xl font-black text-slate-900 mb-1">50k+</h4>
                                        <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">Alumni Network</p>
                                    </div>
                                </div>
                            </div>

                            {/* Right Visuals */}
                            <div className="relative">
                                <div className="space-y-4">
                                    {[
                                        { title: "Global Recognition", text: "Ranked among top 10 institutes worldwide", icon: <Globe className="w-6 h-6 text-blue-500" /> },
                                        { title: "Research Driven", text: "100+ Patents filed by student body", icon: <BookOpen className="w-6 h-6 text-purple-500" /> },
                                        { title: "Industry Leaders", text: "Alumni in Fortune 500 leadership roles", icon: <Users className="w-6 h-6 text-amber-500" /> }
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-300 group/item">
                                            <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center mr-6 ring-1 ring-indigo-50 group-hover/item:scale-110 transition-transform">
                                                {item.icon}
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-bold text-slate-900">{item.title}</h4>
                                                <p className="text-slate-500 text-sm font-medium">{item.text}</p>
                                            </div>
                                            <div className="ml-auto opacity-0 group-hover/item:opacity-100 transition-opacity">
                                                <CheckCircle className="w-5 h-5 text-green-500" />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Stats Section - Floating White Cards */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { value: "30+", label: "Years of Excellence", icon: <Trophy className="w-8 h-8 mx-auto mb-4 text-yellow-500" /> },
                            { value: "150+", label: "Expert Faculty", icon: <Users className="w-8 h-8 mx-auto mb-4 text-blue-500" /> },
                            { value: "100%", label: "Placement Support", icon: <Briefcase className="w-8 h-8 mx-auto mb-4 text-indigo-500" /> },
                            { value: "50Ac", label: "Green Campus", icon: <Building className="w-8 h-8 mx-auto mb-4 text-green-500" /> },
                        ].map((stat, index) => (
                            <div key={index} className="p-8 rounded-3xl bg-white/90 border border-white hover:bg-white transition-all duration-300 hover:-translate-y-2 group cursor-default shadow-lg">
                                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
                                <h3 className="text-5xl font-black text-slate-900 mb-2">{stat.value}</h3>
                                <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">{stat.label}</p>
                            </div>
                        ))}
                    </div>

                    {/* Scholarships - White Cards on Dark/Image BG */}
                    <div>
                        <div className="text-center mb-16">
                            <span className="text-green-400 font-bold uppercase tracking-widest text-xs bg-green-900/40 px-3 py-1 rounded-full border border-green-700/50 mb-4 inline-block shadow-lg">Financial Support</span>
                            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">Scholarships & Aid</h2>
                            <p className="text-xl text-slate-300 max-w-2xl mx-auto font-light">We believe talent shouldn't have a price tag. Committed to supporting deserving minds.</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Merit Based",
                                    icon: <GraduationCap />,
                                    color: "from-blue-500 to-indigo-600",
                                    iconBg: "bg-blue-50",
                                    iconColor: "text-blue-600",
                                    desc: "100% tuition waiver for top rankers in national entrance exams."
                                },
                                {
                                    title: "Sports Excellence",
                                    icon: <Award />,
                                    color: "from-purple-500 to-pink-600",
                                    iconBg: "bg-purple-50",
                                    iconColor: "text-purple-600",
                                    desc: "Special grants and training support for national level athletes."
                                },
                                {
                                    title: "Need Based",
                                    icon: <Heart />,
                                    color: "from-amber-400 to-orange-500",
                                    iconBg: "bg-amber-50",
                                    iconColor: "text-amber-600",
                                    desc: "Comprehensive financial assistance packages for deserving students."
                                }
                            ].map((item, idx) => (
                                <div key={idx} className="relative group bg-white rounded-[2rem] p-10 shadow-xl border border-slate-100 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                                    <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${item.color}`}></div>
                                    <div className={`w-16 h-16 rounded-2xl ${item.iconBg} flex items-center justify-center ${item.iconColor} mb-8 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                                        <div className={item.iconColor}>
                                            {item.icon}
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors">{item.title}</h3>
                                    <p className="text-slate-600 leading-relaxed font-medium">{item.desc}</p>

                                    <div className="mt-8 pt-8 border-t border-slate-100 flex items-center text-sm font-bold text-slate-400 group-hover:text-indigo-600 transition-colors cursor-pointer">
                                        Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Infrastructure Section - Keeping the Dark Overlay Banner for consistency */}
                    <div className="relative rounded-[3rem] overflow-hidden shadow-2xl group border border-white/10">
                        <div className="absolute inset-0 bg-indigo-950">
                            <img src={aboutBg} className="w-full h-full object-cover opacity-20 mix-blend-overlay group-hover:scale-105 transition-transform duration-1000" alt="Campus" />
                        </div>
                        <div className="relative z-10 grid md:grid-cols-2 gap-12 p-12 md:p-24 items-center">
                            <div className="text-white space-y-8">
                                <h2 className="text-4xl md:text-6xl font-black leading-tight">World Class <br /><span className="text-yellow-400 drop-shadow-[0_0_15px_rgba(250,204,21,0.5)]">Infrastructure</span></h2>
                                <p className="text-indigo-100 text-lg leading-relaxed font-light max-w-md">
                                    Experience a campus designed for the future. From automated libraries to AI-powered labs, every corner is built to enhance your learning curve.
                                </p>
                                <button className="px-8 py-4 bg-white text-indigo-900 font-bold rounded-xl hover:bg-yellow-400 transition-colors shadow-lg active:scale-95">
                                    Virtual Tour
                                </button>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    "24/7 Wi-Fi Campus", "Smart Classrooms", "Digital Library",
                                    "Robotics Lab", "Incubation Center", "Medical Support",
                                    "Modern Hostels", "Gym & Sports Complex"
                                ].map((item, i) => (
                                    <div key={i} className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 text-white font-medium flex items-center hover:bg-white/20 transition-colors">
                                        <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 shadow-[0_0_10px_rgba(250,204,21,0.5)]"></div>
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>

                {/* Footer Call to Action */}
                <div className="mt-32 mb-20 text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">Ready to be part of the legacy?</h2>
                    <button className="px-10 py-5 bg-indigo-600 text-white font-bold rounded-full shadow-xl shadow-indigo-500/50 hover:shadow-2xl hover:bg-indigo-700 hover:-translate-y-1 transition-all duration-300">
                        Apply for Admission
                    </button>
                </div>

                <Footer />
            </div>
        </div>
    );
};

// Simple Briefcase Icon substitute for reliability
const Briefcase = (props) => (
    <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
);

export default About;
