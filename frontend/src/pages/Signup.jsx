import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { ArrowRight, Sparkles } from 'lucide-react';

// Using hero bg as consistent signup generic background
import signupBg from '../assets/programs_bg.png'; // Using the futuristic one for "New Journey" vibes

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('student');
    const { signup } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const user = await signup(name, email, password, role);
            if (user.role === 'admin') {
                navigate('/admin');
            } else {
                navigate('/student');
            }
        } catch (error) {
            // Handled in context
        }
    };

    return (
        <div className="min-h-screen flex">
            <Navbar />

            {/* Left Side - Visual */}
            <div className="hidden lg:flex lg:w-1/2 relative bg-indigo-900 items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center opacity-60" style={{ backgroundImage: `url(${signupBg})` }}></div>
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/90 to-purple-900/90"></div>
                <div className="relative z-10 px-12 text-center text-white">
                    <div className="mb-6 inline-flex p-3 rounded-full bg-white/10 backdrop-blur-md">
                        <Sparkles className="w-8 h-8 text-yellow-300" />
                    </div>
                    <h2 className="text-5xl font-bold mb-6">Join the Elite.</h2>
                    <p className="text-xl text-indigo-200 leading-relaxed max-w-md mx-auto">
                        Embark on a journey of excellence. Create your account today and unlock a world of opportunities.
                    </p>
                </div>
                {/* Decorative circles */}
                <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
            </div>

            {/* Right Side - Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center bg-gray-50 px-4 pt-20 pb-12">
                <div className="w-full max-w-lg">
                    <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-bold text-gray-900">Create Account</h2>
                            <p className="text-gray-500 mt-2">Enter your details to register.</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition outline-none bg-gray-50 focus:bg-white"
                                    value={name}
                                    placeholder="John Doe"
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition outline-none bg-gray-50 focus:bg-white"
                                    value={email}
                                    placeholder="john@example.com"
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
                                <input
                                    type="password"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition outline-none bg-gray-50 focus:bg-white"
                                    value={password}
                                    placeholder="••••••••"
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">I am a...</label>
                                <div className="grid grid-cols-2 gap-4">
                                    <button
                                        type="button"
                                        onClick={() => setRole('student')}
                                        className={`py-3 rounded-xl border-2 font-semibold transition-all duration-200 ${role === 'student' ? 'border-indigo-600 bg-indigo-50 text-indigo-700' : 'border-gray-200 hover:border-gray-300 text-gray-500'}`}
                                    >
                                        Student
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setRole('admin')}
                                        className={`py-3 rounded-xl border-2 font-semibold transition-all duration-200 ${role === 'admin' ? 'border-indigo-600 bg-indigo-50 text-indigo-700' : 'border-gray-200 hover:border-gray-300 text-gray-500'}`}
                                    >
                                        Admin
                                    </button>
                                </div>
                            </div>

                            <button type="submit" className="w-full bg-indigo-600 text-white font-bold py-4 rounded-xl hover:bg-indigo-700 transition duration-300 shadow-lg shadow-indigo-500/30 flex items-center justify-center">
                                Use Email to Signup <ArrowRight className="ml-2 w-5 h-5" />
                            </button>
                        </form>

                        <p className="mt-8 text-center text-gray-600">
                            Already have an account?{' '}
                            <Link to="/login" className="text-indigo-600 font-bold hover:underline">
                                Login here
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
