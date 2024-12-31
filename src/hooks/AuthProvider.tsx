import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authRepository } from "../data/repositories/authRepository";
import { User } from "../models/User";

interface AuthContextType {
    user: User | null;
    token: string | null;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
    user: null,
    token: null,
    login: async () => {},
    logout: () => {},
});

type ContextProviderProps = {
    children?: React.ReactNode
}

// Provide the AuthContext to the app
const AuthProvider = ({ children }: ContextProviderProps) => {
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string | null>(null);
    const navigate = useNavigate();

    // Login function
    const login = async (email: string, password: string) => {
        try {
            const response = await authRepository.login(email, password);
            setUser(response.user);
            setToken(response.token);
            localStorage.setItem("jwt", response.token);
            localStorage.setItem("user", JSON.stringify(response.user));
            navigate("/launch"); // Navigate to the dashboard or home page
        } catch (error) {
            alert("Login failed. Please check your credentials.");
        }
    };

    // Logout function
    const logout = () => {
        setUser(null);
        setToken(null);
        localStorage.removeItem("jwt");
        localStorage.removeItem("user");
        navigate("/teacher-login"); // Navigate to login page
    };

    return (
        <AuthContext.Provider value={{ user, token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

// Custom hook for using the AuthContext
export const useAuth = () => useContext(AuthContext);