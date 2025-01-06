import apiClient from "./apiClient";
import { StudentAnswerRequest } from "../models/payload/StudentAnswerRequest";
import { StudentAnswerResponse } from "../models/payload/StudentAnswerResponse";
import { StudentAnswersResponse } from "../models/payload/StudentAnswersResponse";

export const studentAnswerApi = {
    submitAnswer: async (answerData: StudentAnswerRequest): Promise<StudentAnswerResponse> => {
        const { data } = await apiClient.post("/student-answer", answerData);
        return data;
    },

    getAnswersByStudent: async (studentId: number): Promise<StudentAnswersResponse> => {
        const { data } = await apiClient.get(`/student-answer/${studentId}`);
        return data;
    },
};