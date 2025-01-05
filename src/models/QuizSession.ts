/**
 * Represents a quiz session, which contains the quiz and room id.
 */
export interface QuizSession {
    id?: number;
    quizId: number;
    roomId: string;
}