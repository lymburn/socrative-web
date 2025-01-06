import { studentAnswerApi } from "../../api/studentAnswerApi";
import { StudentAnswerRequest } from "../../models/payload/StudentAnswerRequest";
import { StudentAnswer } from "../../models/StudentAnswer";

/**
 * Repository for handling student answer-related operations.
 */
export const studentAnswerRepository = {
    /**
     * Submits a student's answer to the server.
     *
     * @param studentAnswerData - The data representing the student's answer.
     * @returns A promise that resolves to the created student answer object.
     */
    createStudentAnswer: async (studentAnswerData: StudentAnswerRequest): Promise<StudentAnswer> => {
        const response = await studentAnswerApi.submitAnswer(studentAnswerData);
        return response.studentAnswer;
    },

    /**
     * Retrieves all answers submitted by a specific student.
     *
     * @param studentId - The ID of the student whose answers are to be retrieved.
     * @returns A promise that resolves to an array of student answers.
     */
    getStudentAnswers: async (studentId: number): Promise<StudentAnswer[]> => {
        const response = await studentAnswerApi.getAnswersByStudent(studentId);
        return response.studentAnswers;
    }
};