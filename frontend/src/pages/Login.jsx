import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { BookOpen, User, ShieldCheck } from 'lucide-react';
import Navbar from '../components/Navbar';
import api from '../api/axios';

// Backgrounds
import studentBg from '../assets/student_login_bg.png';
import adminBg from '../assets/admin_login_bg.png';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginRole, setLoginRole] = useState('student'); // 'student' or 'admin' for UI logic
    const { login } = useAuth();
    const navigate = useNavigate();

    // In a real app, the API usually determines the role. 
    // But for the sake of the specific requested UI behavior (different backgrounds),
    // we use this state. We can also optionally auto-fill a test credential or just use the visual cue.

    // Note: The actual login API checks the DB. This UI toggle is primarily for aesthetics 
    // as per user request (background change).

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const user = await login(email, password);
            // Check if the user's actual role matches the intended login portal
            // Or just redirect based on the user object returned
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
        <div className="min-h-screen relative flex items-center justify-center overflow-hidden transition-all duration-700">
            <Navbar />

            {/* Dynamic Background with Fade Effect */}
            <div className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${loginRole === 'student' ? 'opacity-100' : 'opacity-0'}`}
                style={{ backgroundImage: `url(${studentBg})` }}></div>
            <div className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${loginRole === 'admin' ? 'opacity-100' : 'opacity-0'}`}
                style={{ backgroundImage: `url(${adminBg})` }}></div>

            {/* Overlay */}
            <div className={`absolute inset-0 transition-colors duration-1000 ${loginRole === 'student' ? 'bg-indigo-900/40' : 'bg-gray-900/60'}`}></div>

            <div className="relative z-10 w-full max-w-md px-4 pt-20">
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-8 overflow-hidden">

                    {/* Role Switcher */}
                    <div className="flex bg-black/20 rounded-full p-1 mb-8 relative">
                        <div className={`absolute top-1 bottom-1 w-[calc(50%-4px)] bg-white rounded-full shadow-md transition-all duration-300 ease-out ${loginRole === 'student' ? 'left-1' : 'left-[calc(50%+4px)]'}`}></div>

                        <button
                            type="button"
                            onClick={() => setLoginRole('student')}
                            className={`flex-1 flex items-center justify-center py-2 relative z-10 text-sm font-bold transition-colors duration-300 ${loginRole === 'student' ? 'text-indigo-900' : 'text-white hover:text-white/80'}`}
                        >
                            <User className="w-4 h-4 mr-2" /> Student
                        </button>
                        <button
                            type="button"
                            onClick={() => setLoginRole('admin')}
                            className={`flex-1 flex items-center justify-center py-2 relative z-10 text-sm font-bold transition-colors duration-300 ${loginRole === 'admin' ? 'text-gray-900' : 'text-white hover:text-white/80'}`}
                        >
                            <ShieldCheck className="w-4 h-4 mr-2" /> Admin
                        </button>
                    </div>

                    <div className="text-center mb-8">
                        <Link to="/" className="inline-block p-3 rounded-xl bg-white/20 text-white mb-4 shadow-lg">
                            <BookOpen className="w-8 h-8" />
                        </Link>
                        <h2 className="text-3xl font-bold text-white mb-2">Welcome Back</h2>
                        <p className="text-blue-100/80 text-sm">
                            {loginRole === 'student' ? 'Access your learning dashboard.' : 'Manage university portal securely.'}
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-xs font-semibold text-blue-100 ml-1">EMAIL ADDRESS</label>
                            <input
                                type="email"
                                placeholder="name@example.com"
                                className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-semibold text-blue-100 ml-1">PASSWORD</label>
                            <input
                                type="password"
                                placeholder="••••••••"
                                className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className={`w-full py-3.5 rounded-xl font-bold text-white shadow-lg transform transition hover:-translate-y-0.5 active:translate-y-0 focus:ring-4 ${loginRole === 'student' ? 'bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 focus:ring-indigo-500/50' : 'bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-800 hover:to-black focus:ring-gray-500/50'}`}>
                            Sign In
                        </button>
                    </form>

                    <div className="mt-8 text-center">
                        <p className="text-blue-100/70 text-sm">
                            Don't have an account?{' '}
                            <Link to="/signup" className="text-white font-semibold hover:underline decoration-2 underline-offset-4">
                                Create Account
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
            {/* Debug Info Footer */}
            <div className="absolute bottom-2 left-0 right-0 text-center pointer-events-none z-20">
                <p className="text-[10px] text-white/30 font-mono">
                    API: {api.defaults.baseURL}
                </p>
            </div>
        </div>
    );
};

export default Login;
