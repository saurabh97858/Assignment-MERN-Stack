import { useState, useEffect } from 'react';
import api from '../api/axios';
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-toastify';
import { Plus, Trash2, Edit, LogOut, Search, Users, GraduationCap, TrendingUp, Calendar } from 'lucide-react';
import adminBg from '../assets/admin_dashboard_bg.png';

const AdminDashboard = () => {
    const { user, logout } = useAuth();
    const [students, setStudents] = useState([]);
    const [filteredStudents, setFilteredStudents] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        course: '',
        enrollmentDate: '',
    });
    const [editingId, setEditingId] = useState(null);
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        fetchStudents();
    }, []);

    useEffect(() => {
        const results = students.filter(student =>
            student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            student.course.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredStudents(results);
    }, [searchTerm, students]);

    const fetchStudents = async () => {
        try {
            const { data } = await api.get('/students');
            setStudents(data);
            setFilteredStudents(data);
        } catch (error) {
            toast.error('Failed to fetch students');
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (editingId) {
                await api.put(`/students/${editingId}`, formData);
                toast.success('Student updated successfully');
            } else {
                await api.post('/students', formData);
                toast.success('New student enrolled');
            }
            setFormData({ name: '', email: '', course: '', enrollmentDate: '' });
            setEditingId(null);
            setShowForm(false);
            fetchStudents();
        } catch (error) {
            toast.error(error.response?.data?.message || 'Operation failed');
        }
    };

    const handleEdit = (student) => {
        setEditingId(student._id);
        const date = student.enrollmentDate ? new Date(student.enrollmentDate).toISOString().split('T')[0] : '';
        setFormData({
            name: student.name,
            email: student.email,
            course: student.course,
            enrollmentDate: date,
        });
        setShowForm(true);
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to remove this student record?')) {
            try {
                await api.delete(`/students/${id}`);
                toast.success('Student record deleted');
                fetchStudents();
            } catch (error) {
                toast.error('Delete failed');
            }
        }
    };

    return (
        <div className="min-h-screen relative font-sans text-gray-800">
            {/* Background */}
            <div className="absolute inset-0 bg-cover bg-center fixed" style={{ backgroundImage: `url(${adminBg})` }}></div>
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/90 to-blue-100/80 fixed"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col min-h-screen">
                {/* Navbar */}
                <header className="bg-white/70 backdrop-blur-md border-b border-white/50 sticky top-0 z-20 px-8 py-4 flex justify-between items-center shadow-sm">
                    <div className="flex items-center gap-3">
                        <div className="bg-indigo-600 p-2 rounded-lg text-white">
                            <TrendingUp className="w-6 h-6" />
                        </div>
                        <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 to-blue-600">
                            Admin Console
                        </h1>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="hidden md:flex items-center gap-2 text-sm text-gray-600 bg-white/50 px-3 py-1.5 rounded-full border border-gray-200">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            System Active
                        </div>
                        <div className="flex items-center gap-3 pl-6 border-l border-gray-300">
                            <div className="text-right">
                                <p className="text-sm font-bold text-gray-900">{user?.name}</p>
                                <p className="text-xs text-gray-500">Administrator</p>
                            </div>
                            <button onClick={logout} className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-full transition">
                                <LogOut className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </header>

                <main className="flex-grow p-8 max-w-7xl mx-auto w-full">
                    {/* Stats Row */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-white/60 backdrop-blur-xl p-6 rounded-2xl border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="flex items-center justify-between mb-4">
                                <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
                                    <Users className="w-6 h-6" />
                                </div>
                                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Total Students</span>
                            </div>
                            <h3 className="text-3xl font-bold text-gray-900">{students.length}</h3>
                            <p className="text-sm text-green-600 mt-2 flex items-center">
                                <TrendingUp className="w-3 h-3 mr-1" /> +12% this month
                            </p>
                        </div>
                        <div className="bg-white/60 backdrop-blur-xl p-6 rounded-2xl border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="flex items-center justify-between mb-4">
                                <div className="p-3 bg-purple-100 text-purple-600 rounded-xl">
                                    <GraduationCap className="w-6 h-6" />
                                </div>
                                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Active Courses</span>
                            </div>
                            <h3 className="text-3xl font-bold text-gray-900">14</h3>
                            <p className="text-sm text-gray-500 mt-2">Across 4 departments</p>
                        </div>
                        <div className="bg-white/60 backdrop-blur-xl p-6 rounded-2xl border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="flex items-center justify-between mb-4">
                                <div className="p-3 bg-indigo-100 text-indigo-600 rounded-xl">
                                    <Calendar className="w-6 h-6" />
                                </div>
                                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Academic Year</span>
                            </div>
                            <h3 className="text-3xl font-bold text-gray-900">2025-26</h3>
                            <p className="text-sm text-gray-500 mt-2">Term 1 in progress</p>
                        </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl border border-white/50 overflow-hidden">
                        {/* Toolbar */}
                        <div className="p-6 border-b border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
                            <div className="relative w-full md:w-96">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    type="text"
                                    placeholder="Search students..."
                                    className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                            <button
                                onClick={() => {
                                    setEditingId(null);
                                    setFormData({ name: '', email: '', course: '', enrollmentDate: '' });
                                    setShowForm(!showForm);
                                }}
                                className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-xl font-medium transition shadow-lg shadow-indigo-500/30"
                            >
                                {showForm ? 'Cancel' : <><Plus className="w-5 h-5" /> Add Student</>}
                            </button>
                        </div>

                        {/* Expandable Form */}
                        {showForm && (
                            <div className="p-6 bg-indigo-50/50 border-b border-indigo-100 animate-fade-in-up">
                                <h3 className="text-lg font-bold text-gray-800 mb-4">{editingId ? 'Update Student Record' : 'Enroll New Student'}</h3>
                                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Full Name</label>
                                        <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" required placeholder="e.g. John Doe" />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Email</label>
                                        <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" required placeholder="john@example.com" />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Course</label>
                                        <input type="text" name="course" value={formData.course} onChange={handleChange} className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" required placeholder="e.g. B.Tech CS" />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Date</label>
                                        <input type="date" name="enrollmentDate" value={formData.enrollmentDate} onChange={handleChange} className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" />
                                    </div>
                                    <button type="submit" className="w-full py-2 bg-indigo-600 text-white rounded-lg font-bold hover:bg-indigo-700 transition shadow-md">
                                        {editingId ? 'Save Changes' : 'Confirm'}
                                    </button>
                                </form>
                            </div>
                        )}

                        {/* Table */}
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-gray-50/50 border-b border-gray-200 text-xs uppercase text-gray-500 font-semibold tracking-wider">
                                        <th className="px-6 py-4 rounded-tl-xl">Student Name</th>
                                        <th className="px-6 py-4">Contact</th>
                                        <th className="px-6 py-4">Enrolled Course</th>
                                        <th className="px-6 py-4">Join Date</th>
                                        <th className="px-6 py-4 text-right rounded-tr-xl">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {filteredStudents.map((student) => (
                                        <tr key={student._id} className="hover:bg-indigo-50/30 transition duration-150 group">
                                            <td className="px-6 py-4">
                                                <div className="flex items-center">
                                                    <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-indigo-400 to-purple-400 flex items-center justify-center text-white font-bold text-lg shadow-md mr-4">
                                                        {student.name.charAt(0)}
                                                    </div>
                                                    <span className="font-semibold text-gray-800">{student.name}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-gray-600">{student.email}</td>
                                            <td className="px-6 py-4">
                                                <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-bold uppercase tracking-wide">
                                                    {student.course}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-gray-500 text-sm">
                                                {student.enrollmentDate ? new Date(student.enrollmentDate).toLocaleDateString() : 'N/A'}
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <div className="flex items-center justify-end gap-2">
                                                    <button onClick={() => handleEdit(student)} className="p-2 text-indigo-600 hover:bg-indigo-100 rounded-lg hover:shadow-sm" title="Edit">
                                                        <Edit className="w-4 h-4" />
                                                    </button>
                                                    <button onClick={() => handleDelete(student._id)} className="p-2 text-red-600 hover:bg-red-100 rounded-lg hover:shadow-sm" title="Delete">
                                                        <Trash2 className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                    {filteredStudents.length === 0 && (
                                        <tr>
                                            <td colSpan="5" className="px-6 py-12 text-center text-gray-400">
                                                <div className="flex flex-col items-center">
                                                    <div className="bg-gray-100 p-4 rounded-full mb-3">
                                                        <Search className="w-8 h-8 text-gray-300" />
                                                    </div>
                                                    <p>No students found matching your search.</p>
                                                </div>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default AdminDashboard;
