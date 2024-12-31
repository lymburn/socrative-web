import apiClient from "./apiClient";

export const authApi = {
    register: async (email: string, password: string) => {
        const response = await apiClient.post("/auth/register", { email, password });
        return response.data;
    },

    login: async (email: string, password: string) => {
        const response = await apiClient.post("/auth/login", { email, password });
        return response.data;
    },
};