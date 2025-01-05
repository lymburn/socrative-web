export interface StudentAnswerResult {
    text: string;
    status: "correct" | "incorrect" | "unanswered";
}

export interface StudentResult {
    name: string; // Student's name
    score: string; // Student's score percentage as a string
    answers: StudentAnswerResult[]; // Processed answers
}