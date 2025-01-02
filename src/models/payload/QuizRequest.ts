import { Question } from "../Question";

export interface QuizRequest {
    name: string;
    userId: number;
    questions: Question[];
}