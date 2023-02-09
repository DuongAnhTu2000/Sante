import { Navigate, Outlet, useLocation } from 'react-router-dom';

const ProtectedRoute = () => {
    const location = useLocation();
    const isAuth = localStorage.getItem("isAuthenticated") ? true : false
    return isAuth ? <Outlet /> : <Navigate to="/" replace state={{ from: location }} />
}

export default ProtectedRoute