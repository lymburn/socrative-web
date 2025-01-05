import { Answer } from "./Answer";

/**
 * Represents a single question in a quiz,
 * including multiple possible answers.
 */
export interface Question {
    id?: number;
    question: string; // The question text
    answers: Answer[];
}