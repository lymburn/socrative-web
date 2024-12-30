import "./LaunchQuizModal.css";
import { Quiz } from "../../models/Quiz";
import QuizTable from "../../components/QuizTable";
import { useNavigate } from "react-router-dom";

interface LaunchQuizModalProps {
    quizzes: Quiz[];
    onClose: () => void;
}

function LaunchQuizModal({ quizzes, onClose }: LaunchQuizModalProps) {
    const navigate = useNavigate();

    const handleQuizSelection = (quiz: Quiz) => {
        navigate(`/results/`); // Navigate to the results page
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