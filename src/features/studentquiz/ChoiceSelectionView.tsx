import { useState } from "react";
import "./ChoiceSelectionView.css";
import { Answer } from "../../models/Answer";


interface ChoiceSelectionViewProps {
    answers: Answer[]; // Array of answer options
    onSelect: (selectedId: number) => void; // Callback for when an answer is selected
    selectedAnswerId?: number; // Currently selected answer ID
}

function ChoiceSelectionView( { answers, onSelect, selectedAnswerId }: ChoiceSelectionViewProps ) {
    const handleOptionClick = (id: number) => {
        onSelect(id);
    };

    return (
        <div className="choice-selection-view">
            <div className="choice-selection-container">
                {answers.map((answer, index) => (
                    <button
                        key={answer.id}
                        className={`option-button ${selectedAnswerId === answer.id ? "selected" : ""
                            }`}
                        onClick={() => handleOptionClick(answer.id!)}
                    >
                        <span className="option-label">{String.fromCharCode(65 + index)}</span>
                        <span className="option-text">{answer.text}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ChoiceSelectionView;