import { QuizSessionRequest } from "../models/payload/QuizSessionRequest";
import { QuizSessionResponse } from "../models/payload/QuizSessionResponse";
import { QuizSessionResultResponse } from "../models/payload/QuizSessionResultResponse";
import apiClient from "./apiClient";

export const quizSessionApi = {
    launchQuizSession: async (request: QuizSessionRequest): Promise<QuizSessionResponse> => {
        const { data } = await apiClient.post("/quiz-session", request);
        return data;
    },

    finishQuizSession: async (sessionId: number): Promise<void> => {
        await apiClient.delete(`/quiz-session/${sessionId}`);
    },

    getQuizSessionByRoom: async (roomId: string): Promise<QuizSessionResponse> => {
        const { data } = await apiClient.get("/quiz-session", { params: { roomId } });
        return data;
    },

    getQuizSessionById: async (sessionId: number): Promise<QuizSessionResponse> => {
        const { data } = await apiClient.get(`/quiz-session/${sessionId}`);
        return data;
    },

    getQuizSessionResults: async (sessionId: number): Promise<QuizSessionResultResponse> => {
        const { data } = await apiClient.get(`/quiz-session/${sessionId}/results`);
        return data;
    }
};