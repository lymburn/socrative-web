import { quizApi } from "../../api/quizApi";
import { Quiz } from "../../models/Quiz";
import { QuizRequest } from "../../models/payload/QuizRequest";

/**
 * Repository for handling quiz-related operations.
 */
export const quizRepository = {
  /**
   * Creates a new quiz with the provided quiz data.
   *
   * @param quizData - The data required to create a quiz.
   * @returns A promise that resolves to the created quiz object.
   */
  createQuiz: async (quizData: QuizRequest): Promise<Quiz> => {
      const response = await quizApi.createQuiz(quizData);
      return response.quiz;
  },

  /**
   * Retrieves all quizzes associated with a specific user.
   *
   * @param userId - The ID of the user whose quizzes are to be retrieved.
   * @returns A promise that resolves to an array of quizzes.
   */
  getQuizzesForUser: async (userId: number): Promise<Quiz[]> => {
      const response = await quizApi.getQuizzesByUser(userId);
      return response.quizzes;
  },

  /**
   * Fetches a single quiz based on its unique identifier.
   *
   * @param quizId - The ID of the quiz to retrieve.
   * @returns A promise that resolves to the requested quiz object.
   */
  getQuizById: async (quizId: number): Promise<Quiz> => {
      const response = await quizApi.getQuizById(quizId);
      return response.quiz;
  },

  /**
   * Deletes a quiz identified by its unique ID.
   *
   * @param quizId - The ID of the quiz to delete.
   * @returns A promise that resolves when the deletion is complete.
   */
  deleteQuiz: async (quizId: number): Promise<void> => {
      await quizApi.deleteQuizById(quizId);
  },
};