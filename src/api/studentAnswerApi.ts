import apiClient from "./apiClient";
import { StudentAnswerRequest } from "../models/payload/StudentAnswerRequest";
import { StudentAnswerResponse } from "../models/payload/StudentAnswerResponse";
import { StudentAnswersResponse } from "../models/payload/StudentAnswersResponse";

export const studentAnswerApi = {
    /**
     * Submit a student answer
     * @param answerData - the data to create a student answer
     * @returns The created student answer
     */
    submitAnswer: async (answerData: StudentAnswerRequest): Promise<StudentAnswerResponse> => {
        const response = await apiClient.post("/student-answer", answerData);
        return response.data;
    },

    /**
     * Get student answers by student ID
     * @param studentId - the student's ID
     * @returns An array of student answers
     */
    getAnswersByStudent: async (studentId: number): Promise<StudentAnswersResponse> => {
        const response = await apiClient.get(`/student-answer/${studentId}`);
        return response.data;
    },
};