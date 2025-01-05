import "./ReadOnlyQuestion.css";
import "../../styles/Question.css";

interface ReadOnlyQuestionProps {
    questionNumber: number;
    questionText: string;
    choices: string[];
    correctAnswerIndex: number | null;
}

function ReadOnlyQuestion({
    questionNumber,
    questionText,
    choices,
    correctAnswerIndex
}: ReadOnlyQuestionProps) {
    return (
        <div className="readonly-question-container">
            <div className="question-wrapper">
                <span className="question-number">{questionNumber}.</span>
                <div className="question-details-container">
                    <div className="question-title">{questionText}</div>
                </div>
            </div>

            <div className="choices-container">
                {choices.map((choice, index) => (
                    <div key={index} className="choice">
                        <div
                            className={`choice-circle ${correctAnswerIndex === index ? "selected" : ""}`}
                        >
                            {String.fromCharCode(65 + index)}
                        </div>
                        <div className="choice-text">{choice}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ReadOnlyQuestion;