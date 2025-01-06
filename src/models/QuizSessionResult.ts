import { Quiz } from "./Quiz";
import { Student } from "./Student";
import { StudentAnswer } from "./StudentAnswer";

/**
 * Represents the results of a quiz session, including the quiz details and individual student performances.
 */
export interface QuizSessionResult {
    quiz: Quiz;
    studentResults: {
        student: Student;
        studentAnswers: StudentAnswer[];
    }[];
}