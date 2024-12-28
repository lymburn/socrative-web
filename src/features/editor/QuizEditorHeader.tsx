import "./QuizEditorHeader.css";

interface QuizEditorHeaderProps {
    quizName: string;
    onQuizNameChange: (newName: string) => void;
    onSave: () => void;
}

function QuizEditorHeader({ quizName, onQuizNameChange, onSave }: QuizEditorHeaderProps) {
    return (
        <header className="quiz-editor-header">
            <input
                type="text"
                className="quiz-name-input"
                value={quizName}
                onChange={(e) => onQuizNameChange(e.target.value)}
                placeholder="Untitled Quiz"
            />
            <button className="save-exit-btn" onClick={onSave}>Save and Exit</button>
        </header>
    );
};

export default QuizEditorHeader;