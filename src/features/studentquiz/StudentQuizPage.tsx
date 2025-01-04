import { useState } from "react";
import "./StudentQuizPage.css";
import ChoiceSelectionView from "./ChoiceSelectionView";
import { Answer } from "../../models/Answer";
import { Button } from "@mui/material";

const answers: Answer[] = [
    { id: 1, text: "The Mississippi River", isCorrect: false },
    { id: 2, text: "The Nile River", isCorrect: true },
    { id: 3, text: "The Danube River", isCorrect: false },
    { id: 4, text: "The Amazon River", isCorrect: false },
];

function StudentQuizPage() {
    const [selectedAnswerId, setSelectedAnswerId] = useState<number | undefined>(undefined);

    const handleSelect = (id: number) => {
        setSelectedAnswerId(id);
    };

    const handleSubmit = () => {

    };

    return (
        <div className="student-quiz-page">
            <div className="student-quiz-container">
                <div className="student-quiz-header">
                    <span className="student-room-id">LU489</span>
                </div>

                <div className="question-display">
                    <span className="question-index-text">1 of 5</span>
                    <span className="question-text">What is the world's longest river?</span>
                    <ChoiceSelectionView
                        answers={answers}
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
            </div>
        </div>
    );
};

export default StudentQuizPage;