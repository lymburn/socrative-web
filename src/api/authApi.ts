import { AuthRequest } from "../models/payload/AuthRequest";
import { AuthResponse } from "../models/payload/AuthResponse";
import { StudentRequest } from "../models/payload/StudentRequest";
import { StudentResponse } from "../models/payload/StudentResponse";
import apiClient from "./apiClient";

export const authApi = {
    register: async (request: AuthRequest): Promise<AuthResponse> => {
        const response = await apiClient.post("/auth/register", request);
        return response.data;
    },

    login: async (request: AuthRequest): Promise<AuthResponse> => {
        const response = await apiClient.post("/auth/login/teacher", request);
        return response.data;
    },

    joinRoom: async (request: StudentRequest): Promise<StudentResponse> => {
        const response = await apiClient.post("/auth/login/student", request);
        return response.data
    }
};