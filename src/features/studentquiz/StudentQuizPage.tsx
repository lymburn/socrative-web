import { useEffect, useState } from "react";
import "./StudentQuizPage.css";
import ChoiceSelectionView from "./ChoiceSelectionView";
import { useSearchParams } from "react-router-dom";
import { Quiz } from "../../models/Quiz";
import { Button } from "@mui/material";
import { quizRepository } from "../../data/repositories/quizRepository";
import { quizSessionRepository } from "../../data/repositories/quizSessionRepository";

function StudentQuizPage() {
    const [searchParams] = useSearchParams();
    const roomId = searchParams.get("roomId");
    const [quiz, setQuiz] = useState<Quiz | null>(null);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswerId, setSelectedAnswerId] = useState<number | undefined>(undefined);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        const fetchQuizSession = async () => {
            try {
                // Fetch active session by room
                const session = await quizSessionRepository.getActiveSessionByRoom(roomId!);
                if (!session) {
                    setErrorMessage("No running quiz.");
                    return;
                }

                // Fetch the quiz details by quiz ID
                const fetchedQuiz = await quizRepository.getQuizById(session.quizId);
                setQuiz(fetchedQuiz);
            } catch (error) {
                console.error("Failed to fetch session or quiz:", error);
                setErrorMessage("Error loading quiz session. Ensure there is a running session.");
            } finally {
            }
        };

        if (roomId) {
            fetchQuizSession();
        } else {
            setErrorMessage("No room ID provided.");
        }
    }, [roomId]);

    const handleSelect = (id: number) => {
        setSelectedAnswerId(id);
    };

    const currentQuestion = quiz?.questions[currentQuestionIndex];

    const handleSubmit = () => {
        if (!selectedAnswerId) {
            alert("Please select an answer before submitting.");
            return;
        }

        console.log(selectedAnswerId);
        console.log(currentQuestion?.answers);
        const selectedAnswer = currentQuestion?.answers.find(
            (answer) => answer.id === selectedAnswerId
        );

        if (selectedAnswer?.isCorrect) {
            alert("Correct!");
        } else {
            alert("Incorrect.");
        }

        if (currentQuestionIndex < (quiz?.questions.length ?? 0) - 1) {
            setSelectedAnswerId(undefined); // Reset selection for the next question
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            alert("You've completed the quiz!");
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