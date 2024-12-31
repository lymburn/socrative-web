import { authApi } from "../../api/authApi";
import { User } from "../../models/User";

export const authRepository = {
    register: async (email: string, password: string): Promise<User> => {
        const response = await authApi.register(email, password);
        return response.user; // Return user object
    },

    login: async (email: string, password: string): Promise<{ token: string; user: User }> => {
        const response = await authApi.login(email, password);
        localStorage.setItem("jwt", response.token); // Store JWT token
        return response;
    },
};