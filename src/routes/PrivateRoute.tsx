import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/AuthProvider";

const PrivateRoute = () => {
    const user = useAuth(); // Get the authentication state from AuthContext

    // Redirect to login if not authenticated
    return user.token ? <Outlet /> : <Navigate to="/teacher-login" />;
};

export default PrivateRoute;