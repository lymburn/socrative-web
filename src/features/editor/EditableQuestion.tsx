import "./EditableQuestion.css";
import "../../styles/Question.css";

interface EditableQuestionProps {
    questionNumber: number;
    questionText: string;
    choices: string[];
    correctAnswerIndex: number | null;
    onQuestionChange: (newQuestion: string) => void;
    onChoiceChange: (index: number, newChoice: string) => void;
    onSelectCorrectAnswer: (index: number) => void;
    onSave: () => void;
    onDelete: () => void;
}

function EditableQuestion({
    questionNumber,
    questionText,
    choices,
    correctAnswerIndex,
    onQuestionChange,
    onChoiceChange,
    onSelectCorrectAnswer,
    onSave,
    onDelete,
}: EditableQuestionProps) {
    return (
        <div className="editable-question-container">
            <div className="editable-question-details">
                <div className="editable-question-header">
                    <span className="question-number">{questionNumber}.</span>
                    <input
                        type="text"
                        className="question-input"
                        value={questionText}
                        onChange={(e) => onQuestionChange(e.target.value)}
                        placeholder="Type your question here..."
                    />
                </div>
                <div className="choices-container">
                    {choices.map((choice, index) => (
                        <div key={index} className="choice">
                            <div
                                className={`choice-circle ${correctAnswerIndex === index ? "selected" : ""}`}
                                onClick={() => onSelectCorrectAnswer(index)}
                            >
                                {String.fromCharCode(65 + index)}
                            </div>
                            <input
                                type="text"
                                className="choice-input"
                                value={choice}
                                onChange={(e) => onChoiceChange(index, e.target.value)}
                                placeholder={`Answer ${String.fromCharCode(65 + index)}`}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className="editable-question-buttons">
                <button className="save-question" onClick={onSave}>
                    Save
                </button>
                <button className="delete-question" onClick={onDelete}>
                    Delete
                </button>
            </div>

        </div>
    );
};

export default EditableQuestion;