import { AuthRequest } from "../models/payload/AuthRequest";
import { AuthResponse } from "../models/payload/AuthResponse";
import apiClient from "./apiClient";

export const authApi = {
    register: async (request: AuthRequest): Promise<AuthResponse> => {
        const { email, password } = request;
        const response = await apiClient.post("/auth/register", { email, password });
        return response.data;
    },

    login: async (request: AuthRequest): Promise<AuthResponse> => {
        const { email, password } = request;
        const response = await apiClient.post("/auth/login", { email, password });
        return response.data;
    },
};