import { studentAnswerApi } from "../../api/studentAnswerApi";
import { StudentAnswerRequest } from "../../models/payload/StudentAnswerRequest";
import { StudentAnswer } from "../../models/StudentAnswer";

export const studentAnswerRepository = {
    createStudentAnswer: async (studentAnswerData: StudentAnswerRequest): Promise<StudentAnswer> => {
        const response = await studentAnswerApi.submitAnswer(studentAnswerData);
        return response.studentAnswer;
    },

    getStudentAnswers: async (studentId: number): Promise<StudentAnswer[]> => {
        const response = await studentAnswerApi.getAnswersByStudent(studentId);
        return response.studentAnswers;
    }
};