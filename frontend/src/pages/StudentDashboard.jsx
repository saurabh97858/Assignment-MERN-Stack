import { useState, useEffect } from 'react';
import api from '../api/axios';
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-toastify';
import { LogOut, User, BookOpen, Calendar, Mail, Award, Clock } from 'lucide-react';
import studentBg from '../assets/student_dashboard_bg.png';

const StudentDashboard = () => {
    const { user, logout } = useAuth();
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        fetchProfile();
    }, []);

    const fetchProfile = async () => {
        try {
            const { data } = await api.get('/students/profile');
            setProfile(data);
        } catch (error) {
            setProfile({
                name: user.name,
                email: user.email,
                course: 'Pending Enrollment',
                enrollmentDate: new Date(),
            });
        }
    };

    return (
        <div className="min-h-screen relative font-sans text-gray-800">
            {/* Background */}
            <div className="absolute inset-0 bg-cover bg-center fixed" style={{ backgroundImage: `url(${studentBg})` }}></div>
            <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-indigo-50/80 fixed"></div>

            {/* Navbar */}
            <header className="relative z-20 bg-white/70 backdrop-blur-md border-b border-white/50 px-6 py-4 flex justify-between items-center shadow-sm">
                <div className="flex items-center gap-2">
                    <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-2 rounded-lg text-white">
                        <BookOpen className="w-5 h-5" />
                    </div>
                    <span className="font-bold text-gray-800 text-lg">Student Portal</span>
                </div>
                <button onClick={logout} className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-red-600 bg-white/50 px-4 py-2 rounded-full border border-gray-200 hover:border-red-200 transition">
                    <LogOut className="w-4 h-4" /> Sign Out
                </button>
            </header>

            <main className="relative z-10 max-w-6xl mx-auto p-6 md:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Profile Card */}
                    <div className="lg:col-span-1">
                        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-white/60 p-8 flex flex-col items-center text-center relative overflow-hidden group">
                            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-indigo-500 to-purple-600"></div>

                            <div className="relative z-10 p-1 bg-white rounded-full mt-12 mb-4 shadow-lg">
                                <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center text-3xl font-bold text-gray-500 bg-cover bg-center" style={{ backgroundImage: `url(https://ui-avatars.com/api/?name=${profile?.name}&background=random)` }}>
                                    {!profile && '?'}
                                </div>
                            </div>

                            <h2 className="text-2xl font-bold text-gray-900 mb-1">{profile?.name}</h2>
                            <p className="text-indigo-600 font-medium bg-indigo-50 px-3 py-1 rounded-full text-sm inline-block mb-6">
                                {profile?.course || 'Student'}
                            </p>

                            <div className="w-full space-y-4 text-left">
                                <div className="flex items-center p-3 bg-white/50 rounded-xl border border-white/60">
                                    <Mail className="w-5 h-5 text-gray-400 mr-3" />
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase font-semibold">Email</p>
                                        <p className="text-sm font-medium text-gray-800 truncate">{profile?.email}</p>
                                    </div>
                                </div>
                                <div className="flex items-center p-3 bg-white/50 rounded-xl border border-white/60">
                                    <Calendar className="w-5 h-5 text-gray-400 mr-3" />
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase font-semibold">Enrollment Date</p>
                                        <p className="text-sm font-medium text-gray-800">
                                            {profile?.enrollmentDate ? new Date(profile.enrollmentDate).toLocaleDateString() : 'N/A'}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Quick Actions */}
                        <div className="mt-6 bg-indigo-600 text-white rounded-3xl p-6 shadow-xl relative overflow-hidden">
                            <div className="relative z-10">
                                <h3 className="font-bold text-xl mb-2">Need Help?</h3>
                                <p className="text-indigo-100 text-sm mb-4">Contact admin for course changes or profile updates.</p>
                                <button onClick={() => window.location.href = 'mailto:admin@edutech.edu.in'} className="w-full py-3 bg-white text-indigo-700 font-bold rounded-xl hover:bg-indigo-50 transition shadow-lg">
                                    Contact Support
                                </button>
                            </div>
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Welcome Banner */}
                        <div className="bg-gradient-to-r from-white to-indigo-50 rounded-3xl p-8 shadow-lg border border-white/60 relative overflow-hidden">
                            <div className="relative z-10">
                                <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-2">
                                    Hello, <span className="text-indigo-600">{profile?.name?.split(' ')[0]}!</span> 👋
                                </h1>
                                <p className="text-gray-600 max-w-lg">
                                    "Education is the passport to the future, for tomorrow belongs to those who prepare for it today."
                                </p>
                            </div>
                            <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-indigo-100/50 to-transparent"></div>
                        </div>

                        {/* Recent Activity / Stats Placeholder */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white/70 backdrop-blur-md p-6 rounded-2xl shadow-sm border border-white hover:shadow-md transition">
                                <Clock className="w-8 h-8 text-orange-500 mb-4" />
                                <h4 className="font-bold text-gray-800 text-lg">85%</h4>
                                <p className="text-sm text-gray-500">Attendance</p>
                            </div>
                            <div className="bg-white/70 backdrop-blur-md p-6 rounded-2xl shadow-sm border border-white hover:shadow-md transition">
                                <Award className="w-8 h-8 text-purple-500 mb-4" />
                                <h4 className="font-bold text-gray-800 text-lg">3.8 GPA</h4>
                                <p className="text-sm text-gray-500">Current Grade</p>
                            </div>
                        </div>

                        {/* Course Schedule Placeholder */}
                        <div className="bg-white/70 backdrop-blur-md rounded-3xl shadow-lg border border-white/60 p-6">
                            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                                <BookOpen className="w-5 h-5 mr-2 text-indigo-600" /> Current Courses
                            </h3>
                            <div className="space-y-4">
                                {[
                                    { code: "CS101", name: "Data Structures", time: "Mon, Wed 10:00 AM", color: "blue" },
                                    { code: "CS204", name: "Web Development", time: "Tue, Thu 02:00 PM", color: "green" },
                                    { code: "MAT301", name: "Applied Mathematics", time: "Fri 09:00 AM", color: "orange" }
                                ].map((course, idx) => (
                                    <div key={idx} className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-100 hover:border-indigo-200 transition">
                                        <div className="flex items-center max-w-[70%]">
                                            <div className={`w-2 h-12 bg-${course.color}-500 rounded-full mr-4`}></div>
                                            <div>
                                                <h4 className="font-bold text-gray-800">{course.name}</h4>
                                                <p className="text-sm text-gray-500">{course.code}</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <span className="text-xs font-semibold bg-gray-100 px-2 py-1 rounded text-gray-600 block mb-1">Upcoming</span>
                                            <span className="text-xs text-gray-400">{course.time}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default StudentDashboard;
