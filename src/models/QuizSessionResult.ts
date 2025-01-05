import { Quiz } from "./Quiz";
import { Student } from "./Student";
import { StudentAnswer } from "./StudentAnswer";

export interface QuizSessionResult {
    quiz: Quiz;
    studentResults: {
        student: Student;
        studentAnswers: StudentAnswer[];
    }[];
}