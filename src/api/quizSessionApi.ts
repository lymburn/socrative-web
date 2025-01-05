import { QuizSessionRequest } from "../models/payload/QuizSessionRequest";
import { QuizSessionResponse } from "../models/payload/QuizSessionResponse";
import { QuizSessionResultResponse } from "../models/payload/QuizSessionResultResponse";
import apiClient from "./apiClient";

export const quizSessionApi = {
    launchQuizSession: async (request: QuizSessionRequest): Promise<QuizSessionResponse> => {
        const { quizId, roomId } = request
        const response = await apiClient.post("/quiz-session/", { quizId, roomId });
        return response.data;
    },

    finishQuizSession: async (sessionId: number): Promise<void> => {
        await apiClient.delete(`/quiz-session/${sessionId}`);
    },

    getQuizSessionByRoom: async (roomId: string): Promise<QuizSessionResponse> => {
        const response = await apiClient.get(`/quiz-session?roomId=${roomId}`);
        return response.data;
    },

    getQuizSessionById: async (sessionId: number): Promise<QuizSessionResponse> => {
        const response = await apiClient.get(`/quiz-session/${sessionId}`);
        return response.data;
    },

    getQuizSessionResults: async (sessionId: number): Promise<QuizSessionResultResponse> => {
        const response = await apiClient.get(`/quiz-session/${sessionId}/results`);
        return response.data;
    }
}
