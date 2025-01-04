import "./LaunchQuizModal.css";
import { Quiz } from "../../models/Quiz";
import QuizTable from "../../components/QuizTable";
import { useNavigate } from "react-router-dom";
import { quizSessionRepository } from "../../data/repositories/quizSessionRepository";

interface LaunchQuizModalProps {
    quizzes: Quiz[];
    roomId: string;
    onClose: () => void;
}

function LaunchQuizModal({ quizzes, roomId, onClose }: LaunchQuizModalProps) {
    const navigate = useNavigate();

    const handleQuizSelection = async (quiz: Quiz) => {
        try {
            const request = {
                quizId: quiz.id,
                roomId,
            };

            const session = await quizSessionRepository.createQuizSession(request);
            navigate(`/results/${session.id}`);
        } catch (error) {
            console.error("Failed to launch quiz session:", error);
            alert("Could not launch quiz session. Please try again.");
        }
    };

    return (
        <div className="launch-quiz-modal">
            <div className="launch-quiz-modal-content">
                <div className="launch-quiz-modal-header">
                    <h2 className="launch-quiz-title">Launch Quiz</h2>
                    <button className="launch-quiz-close-btn" onClick={onClose}>
                        &times;
                    </button>
                </div>
                <div className="launch-quiz-table">
                    <QuizTable
                        quizzes={quizzes}
                        showDelete={false} // No delete buttons
                        onRowClick={handleQuizSelection} // Pass row click handler
                    />
                </div>
            </div>
        </div>
    );
}

export default LaunchQuizModal;