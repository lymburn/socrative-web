import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/AuthProvider";

const PrivateRoute = () => {
    const { token, user } = useAuth();

    if (!user && !token) {
        // Redirect to landing page if the user is not authenticated
        return <Navigate to="/" />;
    }

    return <Outlet />;
};

export default PrivateRoute;