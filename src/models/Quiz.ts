import { Question } from "./Question";

/**
 * Represents a quiz, which contains
 * one or more questions (and possibly metadata).
 */
export interface Quiz {
    id: number;
    name: string;
    userId: number;
    dateCreated: number;
    questions: Question[];
}