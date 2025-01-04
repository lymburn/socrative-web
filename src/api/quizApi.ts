// src/api/quizApi.ts

import apiClient from "./apiClient";  // your configured axios instance
import { Quiz } from "../models/Quiz";
import { QuizRequest } from "../models/payload/QuizRequest";
import { QuizResponse } from "../models/payload/QuizResponse";
import { QuizzesResponse } from "../models/payload/QuizzesResponse";

export const quizApi = {
  /**
   * Create a new quiz
   * @param quizData - the data (QuizPayload) to create a quiz
   * @returns The created quiz from the server
   */
  createQuiz: async (quizData: QuizRequest): Promise<QuizResponse> => {
    const response = await apiClient.post("/quiz", { quiz: quizData });
    return response.data; 
  },

  /**
   * Get quizzes for a given user
   * @param userId - the user’s ID
   * @returns An array of Quiz
   */
  getQuizzesByUser: async (userId: number): Promise<QuizzesResponse> => {
    const response = await apiClient.get(`/quiz?userId=${userId}`);
    return response.data; 
  },

  /**
   * Get a single quiz by its ID
   * @param quizId - the quiz's ID
   * @returns The quiz object
   */
  getQuizById: async (quizId: number): Promise<QuizResponse> => {
    const response = await apiClient.get(`/quiz/${quizId}`);
    return response.data; 
  },

  /**
   * Delete a quiz by its ID
   * @param quizId - the quiz's ID
   */
  deleteQuizById: async (quizId: number): Promise<void> => {
    await apiClient.delete(`/quiz/${quizId}`);
  },
};