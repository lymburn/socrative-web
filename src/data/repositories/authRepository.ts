import { authApi } from "../../api/authApi";
import { AuthResponse } from "../../models/payload/AuthResponse";
import { Student } from "../../models/Student";

export const authRepository = {
    register: async (email: string, password: string): Promise<AuthResponse> => {
        return await authApi.register({ email, password });
    },

    login: async (email: string, password: string): Promise<AuthResponse> => {
        const response = await authApi.login({ email, password });
        localStorage.setItem("jwt", response.token); // Store JWT token
        return response;
    },

    joinRoom: async (name: string, roomId: string): Promise<Student> => {
        const response = await authApi.joinRoom({ name, roomId });
        return response.student;
    }
};