import { authApi } from "../../api/authApi";
import { AuthResponse } from "../../models/AuthResponse";

export const authRepository = {
    register: async (email: string, password: string): Promise<AuthResponse> => {
        const response = await authApi.register(email, password);
        return response; // Return user object
    },

    login: async (email: string, password: string): Promise<AuthResponse> => {
        const response = await authApi.login(email, password);
        localStorage.setItem("jwt", response.token); // Store JWT token
        return response;
    },
};