/**
 * Represents an answer submitted by a student for a specific question.
 */
export interface StudentAnswer {
    id?: number;
    studentId: number;
    questionId: number;
    answerId: number;
}