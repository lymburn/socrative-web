import { AuthRequest } from "../models/payload/AuthRequest";
import { AuthResponse } from "../models/payload/AuthResponse";
import { StudentRequest } from "../models/payload/StudentRequest";
import { StudentResponse } from "../models/payload/StudentResponse";
import apiClient from "./apiClient";

export const authApi = {
    register: async (request: AuthRequest): Promise<AuthResponse> => {
        const { email, password } = request;
        const response = await apiClient.post("/auth/register", { email, password });
        return response.data;
    },

    login: async (request: AuthRequest): Promise<AuthResponse> => {
        const { email, password } = request;
        const response = await apiClient.post("/auth/login/teacher", { email, password });
        return response.data;
    },

    joinRoom: async (request: StudentRequest): Promise<StudentResponse> => {
        const { name, roomId } = request;
        const response = await apiClient.post("/auth/login/student", { name, roomId });
        return response.data
    }
};