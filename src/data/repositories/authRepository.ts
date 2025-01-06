import { authApi } from "../../api/authApi";
import { AuthResponse } from "../../models/payload/AuthResponse";
import { Student } from "../../models/Student";

/**
 * Repository for handling authentication-related operations.
 */
export const authRepository = {
    /**
     * Registers a new user with the provided email and password.
     *
     * @param email - The user's email address.
     * @param password - The user's password.
     * @returns A promise that resolves to the authentication response containing the JWT token.
     */
    register: async (email: string, password: string): Promise<AuthResponse> => {
        return await authApi.register({ email, password });
    },

    /**
     * Logs in a user using their email and password.
     * Stores the JWT token in localStorage upon successful login.
     *
     * @param email - The user's email address.
     * @param password - The user's password.
     * @returns A promise that resolves to the authentication response containing the JWT token.
     */
    login: async (email: string, password: string): Promise<AuthResponse> => {
        const response = await authApi.login({ email, password });
        localStorage.setItem("jwt", response.token);
        return response;
    },

    /**
     * Allows a student to join a specific room by providing their name and the room ID.
     *
     * @param name - The student's name.
     * @param roomId - The ID of the room to join.
     * @param sessionId - The quiz session ID.
     * @returns A promise that resolves to the student object.
     */
    joinRoom: async (name: string, roomId: string, sessionId: number): Promise<Student> => {
        const response = await authApi.joinRoom({ name, roomId, sessionId});
        return response.student;
    }
};