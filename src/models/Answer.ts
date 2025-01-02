/**
 * Represents an individual answer to a question.
 */
export interface Answer {
    id?: number;
    text: string;
    isCorrect: boolean;
}