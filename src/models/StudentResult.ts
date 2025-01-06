/**
 * Represents the result of a student's answer to a question, including the answer text and its correctness status.
 */
export interface StudentAnswerResult {
    text: string;
    status: "correct" | "incorrect" | "unanswered";
}

/**
 * Represents the overall result of a student in a quiz session, including their name, score, and detailed answers.
 */
export interface StudentResult {
    name: string;
    score: string;
    answers: StudentAnswerResult[];
}