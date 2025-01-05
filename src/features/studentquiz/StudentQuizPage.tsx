import { useEffect, useState } from "react";
import "./StudentQuizPage.css";
import ChoiceSelectionView from "./ChoiceSelectionView";
import { useSearchParams } from "react-router-dom";
import { Quiz } from "../../models/Quiz";
import { Button } from "@mui/material";
import { quizRepository } from "../../data/repositories/quizRepository";
import { quizSessionRepository } from "../../data/repositories/quizSessionRepository";
import { studentAnswerRepository } from "../../data/repositories/studentAnswerRepository";

function StudentQuizPage() {
    const [searchParams] = useSearchParams();
    const roomId = searchParams.get("roomId");
    const studentId = Number(searchParams.get("studentId"));
    const [quiz, setQuiz] = useState<Quiz | null>(null);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswerId, setSelectedAnswerId] = useState<number | undefined>(undefined);
    const [errorMessage, setErrorMessage] = useState("");


    useEffect(() => {
        if (roomId && studentId) {
            initializeQuizSession(roomId, studentId);
        } else {
            setErrorMessage("Missing room ID or student ID.");
        }
    }, [roomId, studentId]);

    const initializeQuizSession = async (roomId: string, studentId: number) => {
        try {
            const session = await quizSessionRepository.getActiveSessionByRoom(roomId);
            const quiz = await quizRepository.getQuizById(session.quizId);
            const studentAnswers = await studentAnswerRepository.getStudentAnswers(studentId);
            const answeredQuestionIds = studentAnswers.map((answer) => answer.questionId);
            
            // Skip the the current unanswered question index to avoid duplicate submissions
            const firstUnansweredIndex = quiz.questions.findIndex((question) => !answeredQuestionIds.includes(question.id!)) ?? 0;

            setQuiz(quiz);
            setCurrentQuestionIndex(firstUnansweredIndex);
        } catch (error) {
            console.error("Error initializing quiz session:", error);
            setErrorMessage("Failed to initialize quiz session. Please try again.");
        }
    };

    const handleSelect = (id: number) => {
        setSelectedAnswerId(id);
    };

    const currentQuestion = quiz?.questions[currentQuestionIndex];

    const handleSubmit = async () => {
        if (!selectedAnswerId) {
            alert("Please select an answer before submitting.");
            return;
        }

        try {
            // Submit the answer
            await studentAnswerRepository.createStudentAnswer({
                studentId,
                questionId: currentQuestion!.id!,
                answerId: selectedAnswerId,
            });

            const selectedAnswer = currentQuestion?.answers.find(
                (answer) => answer.id === selectedAnswerId
            );

            alert(selectedAnswer?.isCorrect ? "Correct!" : "Incorrect.");

            // Move to the next question or finish the quiz
            if (currentQuestionIndex < (quiz?.questions.length ?? 0) - 1) {
                setSelectedAnswerId(undefined);
                setCurrentQuestionIndex(currentQuestionIndex + 1);
            } else {
                alert("You've completed the quiz!");
            }
        } catch (error) {
            console.error("Failed to submit the answer:", error);
            alert("Error submitting your answer. Please try again.");
        }
    };

    if (errorMessage) {
        return (
            <div className="student-quiz-page">
                <div className="student-quiz-header">
                    <span className="student-room-id">{roomId}</span>
                </div>
                <div className="no-quiz-message">{errorMessage}</div>
            </div>
        );
    }

    return (
        <div className="student-quiz-page">
            <div className="student-quiz-container">
                <div className="student-quiz-header">
                    <span className="student-room-id">{roomId}</span>
                </div>

                {currentQuestion && (
                    <div className="question-display">
                        <span className="question-index-text">Question {currentQuestionIndex + 1} of {quiz?.questions.length}</span>
                        <span className="question-text">{currentQuestion.question}</span>
                        <ChoiceSelectionView
                            answers={currentQuestion.answers}
                            selectedAnswerId={selectedAnswerId}
                            onSelect={handleSelect}
                        />

                        <Button
                            variant="contained"
                            color="yellow"
                            disableElevation
                            onClick={handleSubmit} className="submit-answer-button">
                            SUBMIT ANSWER
                        </Button>
                    </div>
                )}

            </div>
        </div>
    );
};

export default StudentQuizPage;