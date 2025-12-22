import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children, allowedRoles }) => {
    const { user, loading } = useAuth();

    if (loading) return <div className="flex justify-center items-center h-screen">Loading...</div>;

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    if (allowedRoles && !allowedRoles.includes(user.role)) {
        // Redirect to their respective dashboard if they try to access unauthorized pages
        return <Navigate to={user.role === 'admin' ? '/admin' : '/student'} replace />;
    }

    return children;
};

export default ProtectedRoute;
