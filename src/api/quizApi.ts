import apiClient from "./apiClient";
import { QuizRequest } from "../models/payload/QuizRequest";
import { QuizResponse } from "../models/payload/QuizResponse";
import { QuizzesResponse } from "../models/payload/QuizzesResponse";

export const quizApi = {
  createQuiz: async (quizData: QuizRequest): Promise<QuizResponse> => {
      const { data } = await apiClient.post("/quiz", { quiz: quizData });
      return data; 
  },

  getQuizzesByUser: async (userId: number): Promise<QuizzesResponse> => {
      const { data } = await apiClient.get(`/quiz`, { params: { userId } });
      return data; 
  },

  getQuizById: async (quizId: number): Promise<QuizResponse> => {
      const { data } = await apiClient.get(`/quiz/${quizId}`);
      return data; 
  },

  deleteQuizById: async (quizId: number): Promise<void> => {
      await apiClient.delete(`/quiz/${quizId}`);
  },
};