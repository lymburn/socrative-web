import { quizSessionApi } from "../../api/quizSessionApi";
import { QuizSessionRequest } from "../../models/payload/QuizSessionRequest";
import { QuizSession } from "../../models/QuizSession";

export const quizSessionRepository = {
    createQuizSession: async (quizSessionData: QuizSessionRequest): Promise<QuizSession> => {
        const response = await quizSessionApi.launchQuizSession(quizSessionData)
        return response.session;
    },

    deleteQuizSession: async (sessionId: number): Promise<void> => {
        await quizSessionApi.finishQuizSession(sessionId);
    },

    getActiveSessionByRoom: async (roomId: string): Promise<QuizSession> => {
        const response = await quizSessionApi.getQuizSessionByRoom(roomId);
        return response.session;
    },
};