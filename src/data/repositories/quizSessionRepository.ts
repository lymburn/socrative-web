import { quizSessionApi } from "../../api/quizSessionApi";
import { QuizSessionRequest } from "../../models/payload/QuizSessionRequest";
import { QuizSession } from "../../models/QuizSession";
import { QuizSessionResult } from "../../models/QuizSessionResult";

/**
 * Repository for managing quiz session-related operations.
 */
export const quizSessionRepository = {
    /**
     * Launches a new quiz session with the provided quiz session data.
     *
     * @param quizSessionData - The data required to launch a quiz session.
     * @returns A promise that resolves to the created quiz session object.
     */
    createQuizSession: async (quizSessionData: QuizSessionRequest): Promise<QuizSession> => {
        const response = await quizSessionApi.launchQuizSession(quizSessionData);
        return response.session;
    },

    /**
     * Finishes an existing quiz session identified by its session ID.
     *
     * @param sessionId - The ID of the quiz session to finish.
     * @returns A promise that resolves when the session is successfully finished.
     */
    deleteQuizSession: async (sessionId: number): Promise<void> => {
        await quizSessionApi.finishQuizSession(sessionId);
    },

    /**
     * Retrieves the active quiz session associated with a specific room.
     *
     * @param roomId - The ID of the room whose active session is to be retrieved.
     * @returns A promise that resolves to the active quiz session object.
     */
    getActiveSessionByRoom: async (roomId: string): Promise<QuizSession> => {
        const response = await quizSessionApi.getQuizSessionByRoom(roomId);
        return response.session;
    },

    /**
     * Fetches a quiz session based on its unique session ID.
     *
     * @param sessionId - The ID of the quiz session to retrieve.
     * @returns A promise that resolves to the requested quiz session object.
     */
    getQuizSessionById: async (sessionId: number): Promise<QuizSession> => {
        const response = await quizSessionApi.getQuizSessionById(sessionId);
        return response.session;
    },

    /**
     * Retrieves the results of a specific quiz session.
     *
     * @param sessionId - The ID of the quiz session whose results are to be fetched.
     * @returns A promise that resolves to the quiz session result object.
     */
    getQuizSessionResults: async (sessionId: number): Promise<QuizSessionResult> => {
        const response = await quizSessionApi.getQuizSessionResults(sessionId);
        return response.quizSessionResult;
    }
};