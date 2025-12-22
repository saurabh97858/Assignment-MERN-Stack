import { Link } from 'react-router-dom';
import { ArrowRight, Code, Database, Cpu, Globe, Microscope, Award, ArrowLeft } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import programsBg from '../assets/programs_bg.png';

const Programs = () => {
    const programs = [
        {
            title: "Computer Science",
            description: "Master the fundamentals of computing, algorithms, and software development.",
            icon: <Code className="w-8 h-8 text-blue-500" />,
            duration: "4 Years"
        },
        {
            title: "Information Tech",
            description: "Focus on the practical application of technology in modern business.",
            icon: <Database className="w-8 h-8 text-green-500" />,
            duration: "4 Years"
        },
        {
            title: "Electronics",
            description: "Dive into the world of circuits, embedded systems, and telecommunications.",
            icon: <Cpu className="w-8 h-8 text-purple-500" />,
            duration: "4 Years"
        },
        {
            title: "Data Science",
            description: "Cutting-edge curriculum in big data, analytics, and predictive modeling.",
            icon: <Globe className="w-8 h-8 text-indigo-500" />,
            duration: "2 Years"
        },
        {
            title: "Biotechnology",
            description: "Where biology meets technology. Research-driven program.",
            icon: <Microscope className="w-8 h-8 text-red-500" />,
            duration: "4 Years"
        },
        {
            title: "MBA",
            description: "Develop leadership skills and strategic business thinking.",
            icon: <Award className="w-8 h-8 text-yellow-500" />,
            duration: "2 Years"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            {/* Hero Section */}
            <div className="relative pt-20 bg-indigo-900 h-96 flex items-center justify-center">
                <div className="absolute top-0 w-full h-full bg-center bg-cover opacity-30" style={{
                    backgroundImage: `url(${programsBg})`
                }}></div>
                <div className="relative z-10 text-center px-4 mt-8">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Programs</h1>
                    <p className="text-xl text-indigo-200 border-l-4 border-indigo-500 pl-4 bg-indigo-900/50 inline-block backdrop-blur-sm pr-4 py-2">
                        Shaping the innovators of tomorrow
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {programs.map((program, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden transform hover:-translate-y-2 border-t-4 border-indigo-500 relative group">
                            <div className="p-8">
                                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                    {program.icon}
                                </div>
                                <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-inner">
                                    {program.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">{program.title}</h3>
                                <p className="text-gray-600 mb-4">{program.description}</p>
                                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                                    <span className="text-sm font-semibold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
                                        {program.duration}
                                    </span>
                                    <button className="text-gray-500 hover:text-indigo-600 flex items-center text-sm font-medium transition group-hover:translate-x-1">
                                        Details <ArrowRight className="w-4 h-4 ml-1" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Programs;
