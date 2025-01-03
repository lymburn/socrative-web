// src/repositories/quizRepository.ts

import { quizApi } from "../../api/quizApi";
import { Quiz } from "../../models/Quiz";
import { QuizRequest } from "../../models/payload/QuizRequest";

export const quizRepository = {
  /**
   * Create a quiz and return the created quiz
   */
  createQuiz: async (quizData: QuizRequest): Promise<Quiz> => {
    const response = await quizApi.createQuiz(quizData);
    return response.quiz;
  },

  /**
   * Retrieve quizzes for a specific user
   */
  getQuizzesForUser: async (userId: number): Promise<Quiz[]> => {
    const quizzes = await quizApi.getQuizzesByUser(userId);
    return quizzes;
  },

  /**
   * Get a single quiz by ID
   */
  getQuizById: async (quizId: number): Promise<Quiz> => {
    const quiz = await quizApi.getQuizById(quizId);
    return quiz;
  },

  /**
   * Delete quiz by ID
   */
  deleteQuiz: async (quizId: number): Promise<void> => {
    await quizApi.deleteQuizById(quizId);
  },
};