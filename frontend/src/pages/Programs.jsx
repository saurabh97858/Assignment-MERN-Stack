import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Database, Cpu, Globe, Microscope, Award, ArrowLeft, X, CheckCircle2, Wrench, Anchor, Briefcase, Calculator, Brain, Palette, Search, Scale, Stethoscope, Ruler, Coffee, User, Upload, CreditCard, Loader2, CheckCircle, Lock } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import programsBg from '../assets/programs_bg.png';

const Programs = () => {
    const [selectedProgram, setSelectedProgram] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [applicationStep, setApplicationStep] = useState(0); // 0: Details, 1: Form, 2: Docs, 3: Payment, 4: Success
    const [isLoading, setIsLoading] = useState(false);

    // Form States
    const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
    const [docs, setDocs] = useState({ marksheet: null, idProof: null });

    const programs = [
        {
            title: "Computer Science",
            description: "Master the fundamentals of computing, algorithms, and software development.",
            icon: <Code className="w-8 h-8 text-blue-600" />,
            duration: "4 Years",
            scope: "Software Engineer, Systems Architect, Full Stack Developer, AI Specialist.",
            benefits: ["High Industry Demand", "Versatile Career Paths", "Innovation Driven"],
            fee: "$15,000 / Year",
            color: "from-blue-600 to-cyan-500"
        },
        {
            title: "Information Tech",
            description: "Focus on the practical application of technology in modern business.",
            icon: <Database className="w-8 h-8 text-green-600" />,
            duration: "4 Years",
            scope: "Network Administrator, IT Consultant, Database Manager, Cybersecurity Analyst.",
            benefits: ["Practical Skillset", "Rapidly Growing Field", "Business Integration"],
            fee: "$14,500 / Year",
            color: "from-green-600 to-emerald-500"
        },
        {
            title: "Electronics",
            description: "Dive into the world of circuits, embedded systems, and telecommunications.",
            icon: <Cpu className="w-8 h-8 text-purple-600" />,
            duration: "4 Years",
            scope: "Embedded Systems Engineer, Telecom Specialist, Robotics Engineer, VLSI Designer.",
            benefits: ["Core Engineering Domain", "IoT Integration", "Hardware Mastery"],
            fee: "$14,000 / Year",
            color: "from-purple-600 to-fuchsia-500"
        },
        {
            title: "Mechanical Eng.",
            description: "Design and manufacture advanced machinery and thermal systems.",
            icon: <Wrench className="w-8 h-8 text-orange-600" />,
            duration: "4 Years",
            scope: "Mechanical Designer, Automotive Engineer, Manufacturing Manager, HVAC Specialist.",
            benefits: ["Evergreen Industry", "Physical Product Creation", "Wide Application"],
            fee: "$14,500 / Year",
            color: "from-orange-600 to-red-500"
        },
        {
            title: "Civil Engineering",
            description: "Build the infrastructure of tomorrow: bridges, roads, and skyscrapers.",
            icon: <Anchor className="w-8 h-8 text-slate-600" />,
            duration: "4 Years",
            scope: "Structural Engineer, Urban Planner, Construction Manager, Surveyor.",
            benefits: ["Nation Building", "Public Sector Jobs", "Tangible Impact"],
            fee: "$14,000 / Year",
            color: "from-slate-600 to-gray-500"
        },
        {
            title: "Data Science",
            description: "Cutting-edge curriculum in big data, analytics, and predictive modeling.",
            icon: <Globe className="w-8 h-8 text-indigo-600" />,
            duration: "2 Years",
            scope: "Data Scientist, Business Analyst, Machine Learning Engineer, Data Architect.",
            benefits: ["Highest Paid Roles", "Decision Making Impact", "Future Proof"],
            fee: "$18,000 / Year",
            color: "from-indigo-600 to-blue-500"
        },
        {
            title: "Biotechnology",
            description: "Where biology meets technology. Research-driven program.",
            icon: <Microscope className="w-8 h-8 text-rose-600" />,
            duration: "4 Years",
            scope: "Biomedical Engineer, Research Scientist, Clinical Technician, Lab Manager.",
            benefits: ["Research Opportunities", "Healthcare Impact", "Interdisciplinary"],
            fee: "$16,000 / Year",
            color: "from-rose-600 to-pink-500"
        },
        {
            title: "MBA",
            description: "Develop leadership skills and strategic business thinking.",
            icon: <Award className="w-8 h-8 text-amber-600" />,
            duration: "2 Years",
            scope: "Project Manager, Business Consultant, Entrepreneur, Operations Manager.",
            benefits: ["Leadership Development", "Networking", "Strategic Thinking"],
            fee: "$20,000 / Year",
            color: "from-amber-600 to-yellow-500"
        },
        {
            title: "BBA",
            description: "Foundation in business principles, management, and commerce.",
            icon: <Briefcase className="w-8 h-8 text-yellow-600" />,
            duration: "3 Years",
            scope: "HR Executive, Marketing Executive, Sales Manager, Business Admin.",
            benefits: ["Early Corporate Entry", "Management Basics", "Entrepreneurial Skills"],
            fee: "$12,000 / Year",
            color: "from-yellow-600 to-orange-500"
        },
        {
            title: "B.Com",
            description: "Expertise in accounting, finance, and financial laws.",
            icon: <Calculator className="w-8 h-8 text-teal-600" />,
            duration: "3 Years",
            scope: "Accountant, Financial Analyst, Auditor, Tax Consultant.",
            benefits: ["Stable Career", "Essential Business Function", "Finance Mastery"],
            fee: "$11,500 / Year",
            color: "from-teal-600 to-green-500"
        },
        {
            title: "Psychology",
            description: "Understand the human mind and behavior patterns.",
            icon: <Brain className="w-8 h-8 text-pink-600" />,
            duration: "3 Years",
            scope: "Counselor, Clinical Psychologist, HR Specialist, Market Researcher.",
            benefits: ["Helping Profession", "Growing Awareness", "Diverse Specializations"],
            fee: "$13,000 / Year",
            color: "from-pink-600 to-rose-500"
        },
        {
            title: "Fine Arts",
            description: "Unleash your creativity in visual arts, design, and aesthetics.",
            icon: <Palette className="w-8 h-8 text-fuchsia-600" />,
            duration: "4 Years",
            scope: "Graphic Designer, Art Director, Illustrator, UI/UX Designer.",
            benefits: ["Creative Freedom", "Portfolio Based", "Freelance Opportunities"],
            fee: "$13,500 / Year",
            color: "from-fuchsia-600 to-purple-500"
        },
        {
            title: "Law (LLB)",
            description: "Understand the legal system and advocate for justice.",
            icon: <Scale className="w-8 h-8 text-red-600" />,
            duration: "3 Years",
            scope: "Lawyer, Legal Advisor, Judge, Corporate Counsel.",
            benefits: ["Prestigious Career", "Intellectual Challenge", "Social Impact"],
            fee: "$14,000 / Year",
            color: "from-red-600 to-orange-500"
        },
        {
            title: "Nursing (B.Sc)",
            description: "Compassionate care combined with medical expertise.",
            icon: <Stethoscope className="w-8 h-8 text-cyan-600" />,
            duration: "4 Years",
            scope: "Registered Nurse, Healthcare Administrator, Critical Care Nurse.",
            benefits: ["High Job Security", "Global Opportunities", "Service to Humanity"],
            fee: "$12,500 / Year",
            color: "from-cyan-600 to-sky-500"
        },
        {
            title: "Architecture",
            description: "Design the spaces and structures of the future.",
            icon: <Ruler className="w-8 h-8 text-sky-600" />,
            duration: "5 Years",
            scope: "Architect, Urban Designer, Interior Designer, Landscape Architect.",
            benefits: ["Creative & Technical", "Leave a Legacy", "High Earning Potential"],
            fee: "$16,500 / Year",
            color: "from-sky-600 to-blue-500"
        },
        {
            title: "Hotel Mgmt.",
            description: "Master the art of hospitality and guest services.",
            icon: <Coffee className="w-8 h-8 text-amber-800" />,
            duration: "4 Years",
            scope: "Hotel Manager, Event Planner, Chef, Tourism Director.",
            benefits: ["Dynamic Work Environment", "Travel Opportunities", "Customer Interaction"],
            fee: "$13,000 / Year",
            color: "from-amber-800 to-orange-900"
        }
    ];

    const filteredPrograms = programs.filter(program =>
        program.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        program.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleNext = () => {
        setIsLoading(true);
        setTimeout(() => {
            setApplicationStep(prev => prev + 1);
            setIsLoading(false);
        }, 800);
    };

    const handleFileChange = (e, field) => {
        setDocs({ ...docs, [field]: e.target.files[0] });
    };

    const renderModalContent = () => {
        const progressPercentage = (applicationStep / 4) * 100;
        const gradientColor = selectedProgram?.color || "from-indigo-600 to-purple-600";

        return (
            <div className="relative">
                {/* Progress Bar */}
                {applicationStep > 0 && applicationStep < 4 && (
                    <div className="absolute -top-10 left-0 w-full h-1 bg-gray-100 mb-6 rounded-full overflow-hidden">
                        <div
                            className={`h-full bg-gradient-to-r ${gradientColor} transition-all duration-500 ease-out`}
                            style={{ width: `${progressPercentage}%` }}
                        ></div>
                    </div>
                )}

                {(() => {
                    switch (applicationStep) {
                        case 0: // Details
                            return (
                                <div className="space-y-8">
                                    <div className="prose prose-slate">
                                        <h4 className={`text-xs font-bold bg-gradient-to-r ${gradientColor} bg-clip-text text-transparent uppercase tracking-[0.2em] mb-4 flex items-center gap-2`}>
                                            <Briefcase className="w-4 h-4 text-slate-400" /> Scope & Career
                                        </h4>
                                        <p className="text-slate-600 leading-relaxed font-normal text-lg bg-slate-50/50 p-6 rounded-2xl border border-slate-100 italic">
                                            "{selectedProgram.scope}"
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className={`text-xs font-bold bg-gradient-to-r ${gradientColor} bg-clip-text text-transparent uppercase tracking-[0.2em] mb-4 flex items-center gap-2`}>
                                            <Award className="w-4 h-4 text-slate-400" /> Program Benefits
                                        </h4>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {selectedProgram.benefits.map((benefit, i) => (
                                                <div key={i} className="flex items-center p-4 rounded-xl bg-white/60 border border-slate-100 shadow-sm hover:shadow-md transition hover:-translate-y-1 duration-300">
                                                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-4 shrink-0 shadow-inner">
                                                        <CheckCircle2 className="w-4 h-4 text-green-600" />
                                                    </div>
                                                    <span className="text-slate-700 font-medium tracking-wide">{benefit}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className={`mt-8 bg-gradient-to-r ${gradientColor} p-[2px] rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300`}>
                                        <div className="bg-white rounded-[1.3rem] p-8 flex items-center justify-between h-full relative overflow-hidden group">
                                            <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-white opacity-90"></div>
                                            <div className="relative z-10">
                                                <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-2">Annual Tuition Fee</p>
                                                <p className={`text-4xl font-extrabold bg-gradient-to-r ${gradientColor} bg-clip-text text-transparent tracking-tight`}>{selectedProgram.fee}</p>
                                            </div>
                                            <button
                                                onClick={() => setApplicationStep(1)}
                                                className={`px-8 py-4 bg-gradient-to-r ${gradientColor} text-white text-sm font-bold uppercase tracking-wider rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center relative z-10 overflow-hidden group/btn`}
                                            >
                                                <span className="absolute inset-0 w-full h-full bg-white/30 skew-x-12 -translate-x-full group-hover/btn:animate-shimmer"></span>
                                                Apply Now <ArrowRight className="w-5 h-5 ml-2" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        case 1: // Personal Form
                            return (
                                <div className="space-y-8 animate-fade-in-up">
                                    <div className="text-center mb-10">
                                        <div className="inline-flex p-4 rounded-full bg-slate-50 border border-slate-100 mb-6 shadow-sm ring-4 ring-slate-50">
                                            <User className={`w-8 h-8 bg-gradient-to-r ${gradientColor} bg-clip-text text-transparent`} />
                                        </div>
                                        <h3 className="text-3xl font-bold text-slate-900 tracking-tight">Personal Details</h3>
                                        <p className="text-slate-500 mt-3 text-lg font-light">Let's start your journey. Step 1/3</p>
                                    </div>
                                    <div className="space-y-6 max-w-xl mx-auto">
                                        <div className="group">
                                            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 ml-1">Full Name</label>
                                            <div className="relative transition-all duration-300 focus-within:transform focus-within:-translate-y-1">
                                                <User className="absolute top-4 left-4 w-5 h-5 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
                                                <input
                                                    type="text"
                                                    placeholder="Enter your full name"
                                                    className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 bg-white/50 text-slate-900 placeholder-slate-400 focus:bg-white focus:ring-2 focus:ring-indigo-100 focus:border-indigo-500 outline-none transition-all shadow-sm font-medium"
                                                    value={formData.name}
                                                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                                                />
                                            </div>
                                        </div>
                                        <div className="group">
                                            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 ml-1">Email Address</label>
                                            <input
                                                type="email"
                                                placeholder="name@example.com"
                                                className="w-full px-5 py-4 rounded-2xl border border-slate-200 bg-white/50 text-slate-900 placeholder-slate-400 focus:bg-white focus:ring-2 focus:ring-indigo-100 focus:border-indigo-500 outline-none transition-all shadow-sm font-medium"
                                                value={formData.email}
                                                onChange={e => setFormData({ ...formData, email: e.target.value })}
                                            />
                                        </div>
                                        <div className="group">
                                            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 ml-1">Mobile Number</label>
                                            <input
                                                type="tel"
                                                placeholder="+91 98765 00000"
                                                className="w-full px-5 py-4 rounded-2xl border border-slate-200 bg-white/50 text-slate-900 placeholder-slate-400 focus:bg-white focus:ring-2 focus:ring-indigo-100 focus:border-indigo-500 outline-none transition-all shadow-sm font-medium"
                                                value={formData.phone}
                                                onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <button
                                        onClick={handleNext}
                                        disabled={isLoading}
                                        className={`w-full max-w-xl mx-auto py-4 bg-gradient-to-r ${gradientColor} text-white font-bold tracking-wide rounded-2xl shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-95 transition-all duration-300 flex justify-center items-center mt-8 relative overflow-hidden group/btn`}
                                    >
                                        <span className="absolute inset-0 w-full h-full bg-white/20 skew-x-12 -translate-x-full group-hover/btn:animate-shimmer"></span>
                                        {isLoading ? <Loader2 className="animate-spin w-5 h-5" /> : "Continue to Documents"}
                                    </button>
                                </div>
                            );
                        case 2: // Documents
                            return (
                                <div className="space-y-8 animate-fade-in-up">
                                    <div className="text-center mb-10">
                                        <div className="inline-flex p-4 rounded-full bg-slate-50 border border-slate-100 mb-6 shadow-sm ring-4 ring-slate-50">
                                            <Upload className={`w-8 h-8 text-slate-700`} />
                                        </div>
                                        <h3 className="text-3xl font-bold text-slate-900 tracking-tight">Upload Documents</h3>
                                        <p className="text-slate-500 mt-3 text-lg font-light">Verification process. Step 2/3</p>
                                    </div>

                                    <div className="grid gap-6 max-w-xl mx-auto">
                                        {[
                                            { id: 'marksheet', label: '12th Marksheet', icon: <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-3"><Code className="w-6 h-6 text-blue-600" /></div> },
                                            { id: 'idProof', label: 'ID Proof (Aadhar/Passport)', icon: <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center mb-3"><User className="w-6 h-6 text-pink-600" /></div> }
                                        ].map((item) => (
                                            <div key={item.id} className="group relative border-2 border-dashed border-slate-300 hover:border-indigo-500 rounded-3xl p-8 text-center bg-slate-50/50 hover:bg-white transition-all duration-300 cursor-pointer hover:shadow-lg">
                                                <input
                                                    type="file"
                                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                                                    onChange={e => handleFileChange(e, item.id)}
                                                />
                                                <div className="flex flex-col items-center">
                                                    {item.icon}
                                                    <p className="font-bold text-slate-700 group-hover:text-indigo-600 transition-colors text-lg tracking-wide">
                                                        {docs[item.id] ? (
                                                            <span className="text-green-600 flex items-center gap-2">
                                                                <CheckCircle className="w-5 h-5" /> {docs[item.id].name}
                                                            </span>
                                                        ) : item.label}
                                                    </p>
                                                    {!docs[item.id] && <p className="text-sm text-slate-400 mt-2 font-medium">Drag & drop or click to upload</p>}
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <button
                                        onClick={handleNext}
                                        disabled={isLoading || !docs.marksheet}
                                        className={`w-full max-w-xl mx-auto py-4 bg-gradient-to-r ${gradientColor} text-white font-bold tracking-wide rounded-2xl shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-95 transition-all duration-300 flex justify-center items-center disabled:opacity-50 disabled:grayscale relative overflow-hidden group/btn`}
                                    >
                                        <span className="absolute inset-0 w-full h-full bg-white/20 skew-x-12 -translate-x-full group-hover/btn:animate-shimmer"></span>
                                        {isLoading ? <Loader2 className="animate-spin w-5 h-5" /> : "Proceed to Payment"}
                                    </button>
                                </div>
                            );
                        case 3: // Payment
                            return (
                                <div className="space-y-8 animate-fade-in-up">
                                    <div className="text-center mb-8">
                                        <div className="inline-flex p-4 rounded-full bg-slate-50 border border-slate-100 mb-6 shadow-sm ring-4 ring-slate-50">
                                            <CreditCard className="w-8 h-8 text-green-600" />
                                        </div>
                                        <h3 className="text-3xl font-bold text-slate-900 tracking-tight">Secure Payment</h3>
                                        <p className="text-slate-500 mt-3 text-lg font-light">Encrypted transaction. Step 3/3</p>
                                    </div>

                                    <div className="max-w-xl mx-auto relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-black rounded-3xl shadow-2xl p-8 text-white min-h-[220px] flex flex-col justify-between transform transition hover:scale-[1.02] group ring-4 ring-white">
                                        {/* Card Visuals */}
                                        <div className={`absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-gradient-to-br ${gradientColor} opacity-20 rounded-full blur-3xl group-hover:opacity-30 transition-opacity duration-700`}></div>

                                        <div className="flex justify-between items-start z-10">
                                            <div>
                                                <p className="text-gray-400 text-xs font-bold uppercase tracking-[0.2em] mb-2">Total Amount</p>
                                                <h3 className="text-5xl font-black flex items-baseline gap-1 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                                                    ₹ 2,000 <span className="text-xl font-medium text-gray-600">.00</span>
                                                </h3>
                                            </div>
                                            <img src="https://img.icons8.com/color/96/chip-card.png" className="w-12 h-12 opacity-80" alt="Chip" />
                                        </div>

                                        <div className="z-10 mt-8 pt-6 border-t border-white/10 flex justify-between items-center text-sm">
                                            <div className="flex flex-col">
                                                <span className="text-gray-500 text-xs font-bold uppercase mb-1">Student</span>
                                                <span className="font-mono tracking-widest text-lg">{formData.name || "STUDENT NAME"}</span>
                                            </div>
                                            <div className="flex flex-col items-end">
                                                <span className="text-gray-500 text-xs font-bold uppercase mb-1">Fee Type</span>
                                                <span className="text-green-400 font-bold bg-green-900/30 px-2 py-1 rounded">REGISTRATION</span>
                                            </div>
                                        </div>
                                    </div>

                                    <button
                                        onClick={handleNext}
                                        disabled={isLoading}
                                        className="w-full max-w-xl mx-auto py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold tracking-wide rounded-2xl shadow-lg shadow-emerald-200 hover:shadow-emerald-300 hover:scale-[1.02] active:scale-95 transition-all duration-300 flex justify-center items-center relative overflow-hidden group/btn"
                                    >
                                        <span className="absolute inset-0 w-full h-full bg-white/20 skew-x-12 -translate-x-full group-hover/btn:animate-shimmer"></span>
                                        {isLoading ? <Loader2 className="animate-spin mr-2 w-5 h-5" /> : (
                                            <span className="flex items-center gap-3">
                                                <Lock className="w-4 h-4" /> Pay ₹2,000 Securely
                                            </span>
                                        )}
                                    </button>
                                    <div className="flex items-center justify-center gap-6 opacity-60">
                                        <img src="https://img.icons8.com/color/48/visa.png" className="h-8" alt="Visa" />
                                        <img src="https://img.icons8.com/color/48/mastercard.png" className="h-8" alt="Mastercard" />
                                        <img src="https://img.icons8.com/color/48/google-pay.png" className="h-8" alt="GPay" />
                                    </div>
                                </div>
                            );
                        case 4: // Success
                            return (
                                <div className="text-center py-12 animate-scale-up">
                                    <div className="w-28 h-28 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce-slow relative shadow-lg shadow-green-100">
                                        <div className="absolute inset-0 bg-green-200 rounded-full animate-ping opacity-50"></div>
                                        <CheckCircle className="w-14 h-14 text-green-600" />
                                    </div>
                                    <h3 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Welcome Aboard! 🚀</h3>
                                    <p className="text-slate-500 mb-10 max-w-md mx-auto leading-relaxed text-lg font-light">
                                        Congratulations <span className="font-bold text-slate-900">{formData.name}</span>! Your application for <span className={`bg-gradient-to-r ${gradientColor} bg-clip-text text-transparent font-bold`}>{selectedProgram.title}</span> is confirmed.
                                    </p>

                                    <div className="bg-slate-50 p-8 rounded-3xl border-2 border-dashed border-slate-200 inline-block mb-10 relative group cursor-copy hover:bg-white transition hover:shadow-lg">
                                        <p className="text-xs text-slate-500 uppercase tracking-[0.3em] font-bold mb-2">Application ID</p>
                                        <p className={`text-4xl font-mono font-black bg-gradient-to-r ${gradientColor} bg-clip-text text-transparent tracking-wider`}>EDU-{Math.floor(Math.random() * 10000)}</p>
                                    </div>

                                    <div className="space-y-4">
                                        <button
                                            onClick={() => { setSelectedProgram(null); setApplicationStep(0); }}
                                            className={`block w-full max-w-md mx-auto text-center px-8 py-4 bg-gradient-to-r ${gradientColor} text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all relative overflow-hidden group/btn`}
                                        >
                                            <span className="absolute inset-0 w-full h-full bg-white/20 skew-x-12 -translate-x-full group-hover/btn:animate-shimmer"></span>
                                            Return to Programs
                                        </button>
                                        <p className="text-sm text-slate-400">A confirmation email has been sent to {formData.email}</p>
                                    </div>
                                </div>
                            );
                        default: return null;
                    }
                })()}
            </div>
        );
    }

    return (
        <div className="min-h-screen relative text-slate-900 bg-slate-50 overflow-x-hidden font-sans">
            <Navbar />

            {/* Fixed Background with Image & Dark Hybrid Overlay */}
            <div className="fixed inset-0 z-0">
                <img src={programsBg} alt="Background" className="w-full h-full object-cover opacity-60" /> {/* Increased opacity for visibility */}
                <div className="absolute inset-0 bg-black/70 backdrop-blur-[1px]"></div> {/* Dark overlay for "Hybrid" look */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-slate-900/90"></div>

                {/* Decorative Blobs for Ambient Color - Subtler for Dark Mode */}
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 animate-blob"></div>
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2 animate-blob animation-delay-2000"></div>
            </div>

            {/* Scrollable Content */}
            <div className="relative z-10 pt-32 pb-20">
                <div className="text-center px-4 mb-16 animate-fade-in-up">
                    <h1 className="text-5xl md:text-7xl font-black text-white mb-6 drop-shadow-2xl tracking-tight leading-tight">
                        Our <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Programs</span>
                    </h1>
                    <p className="text-xl text-slate-300 font-light max-w-2xl mx-auto mb-12 leading-relaxed bg-black/30 backdrop-blur-md p-4 rounded-2xl shadow-sm border border-white/10">
                        Discover a world of opportunities. Choose the path that defines your future.
                    </p>

                    {/* Search Bar - Glassmorphism */}
                    <div className="max-w-3xl mx-auto relative group">
                        <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                            <Search className="h-6 w-6 text-slate-400 group-focus-within:text-indigo-500 transition" />
                        </div>
                        <input
                            type="text"
                            placeholder="Find your future (e.g., Engineering, MBA)..."
                            className="w-full pl-16 pr-6 py-5 rounded-full bg-white/60 backdrop-blur-xl border border-white/60 text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-300 shadow-2xl shadow-indigo-100/40 transition text-lg font-medium"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>

                <div className="w-full px-4 md:px-8 lg:px-12">
                    {filteredPrograms.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                            {filteredPrograms.map((program, index) => (
                                <div
                                    key={index}
                                    className="animate-fade-in-up bg-white rounded-[2rem] shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative group overflow-hidden flex flex-col h-full ring-1 ring-white/50"
                                    style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'both' }}
                                >

                                    {/* 1. Top Gradient Border/Accent Bar */}
                                    <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${program.color || 'from-indigo-600 to-purple-600'}`}></div>

                                    {/* 2. Subtle Background Tint - Always visible but faint */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${program.color || 'from-indigo-600 to-purple-600'} opacity-[0.03] group-hover:opacity-10 transition-opacity duration-300`}></div>

                                    <div className="p-8 relative z-10 flex flex-col flex-grow">
                                        <div className="flex justify-between items-start mb-6">
                                            {/* Icon with Hover Glow */}
                                            <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300 ring-4 ring-slate-50 group-hover:ring-indigo-50">
                                                {program.icon}
                                            </div>
                                            <div className="opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:rotate-12">
                                                {program.icon}
                                            </div>
                                        </div>

                                        <h3 className={`text-2xl font-black mb-3 truncate bg-gradient-to-r ${program.color || 'from-slate-900 to-slate-700'} bg-clip-text text-transparent group-hover:from-indigo-600 group-hover:to-purple-600 transition-all duration-300`} title={program.title}>
                                            {program.title}
                                        </h3>

                                        <p className="text-slate-600 mb-6 text-sm font-medium line-clamp-3 flex-grow leading-relaxed tracking-wide">
                                            {program.description}
                                        </p>

                                        <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-200/50">
                                            <span className="text-xs font-bold text-slate-600 bg-white/60 px-3 py-1.5 rounded-full whitespace-nowrap border border-white/50 shadow-sm uppercase tracking-wider">
                                                {program.duration}
                                            </span>
                                            <button
                                                onClick={() => { setSelectedProgram(program); setApplicationStep(0); }}
                                                className="text-slate-500 hover:text-indigo-600 flex items-center text-sm font-bold transition group-hover:translate-x-1 whitespace-nowrap bg-white/0 hover:bg-white/50 px-3 py-1 rounded-full"
                                            >
                                                Details <ArrowRight className="w-4 h-4 ml-1" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-24 bg-white/40 backdrop-blur-md rounded-3xl border border-white/50 shadow-sm animate-fade-in-up">
                            <Search className="w-20 h-20 text-slate-300 mx-auto mb-6" />
                            <h3 className="text-3xl font-bold text-slate-900 mb-3">No programs found</h3>
                            <p className="text-slate-500 text-lg">Try adjusting your search terms.</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Dynamic Modal - Light Theme with Glassmorphism */}
            {selectedProgram && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-md transition-opacity animate-fade-in" onClick={() => setSelectedProgram(null)}>

                    {/* Modal Container with Gradient Border */}
                    <div className="relative w-full max-w-4xl group" onClick={e => e.stopPropagation()}>
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-[2rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>

                        <div className="relative bg-slate-50/95 backdrop-blur-xl rounded-[1.8rem] shadow-2xl overflow-hidden transform transition-all scale-100 animate-scale-up border border-white/50 ring-1 ring-slate-200/50">

                            {/* Modal Header */}
                            <div className="px-10 py-8 border-b border-slate-100 flex justify-between items-center bg-white/50">
                                {applicationStep === 0 ? (
                                    <h3 className="text-3xl font-black text-slate-900 flex items-center gap-5 tracking-tight">
                                        <div className="p-3 bg-white rounded-2xl shadow-sm border border-slate-100">
                                            {selectedProgram.icon}
                                        </div>
                                        <span className={`bg-gradient-to-r ${selectedProgram.color || 'from-indigo-600 to-purple-600'} bg-clip-text text-transparent`}>
                                            {selectedProgram.title}
                                        </span>
                                    </h3>
                                ) : (
                                    <button onClick={() => setApplicationStep(prev => prev - 1)} className="flex items-center text-slate-500 hover:text-indigo-600 text-base font-bold transition-all hover:-translate-x-1 bg-white px-4 py-2 rounded-xl shadow-sm border border-slate-100">
                                        <ArrowLeft className="w-5 h-5 mr-2" /> Back
                                    </button>
                                )}
                                <button onClick={() => setSelectedProgram(null)} className="p-3 hover:bg-slate-100 rounded-full transition text-slate-400 hover:text-red-500 hover:rotate-90 duration-300">
                                    <X className="w-8 h-8" />
                                </button>
                            </div>

                            {/* Modal Body */}
                            <div className="p-12 min-h-[600px] flex flex-col justify-center">
                                {renderModalContent()}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
};

export default Programs;
