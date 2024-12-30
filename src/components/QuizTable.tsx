import "./QuizTable.css";
import { Quiz } from "../models/Quiz";
import Divider from "./Divider";

interface QuizTableProps {
    quizzes: Quiz[];
    showDelete?: boolean; // Whether to show the delete button
    onDelete?: (id: number) => void; // Callback for delete action
}

function QuizTable({ quizzes, showDelete = false, onDelete }: QuizTableProps) {
    return (
        <div className="quiz-table">
            <div className="quiz-table-columns">
                <div className="quiz-name-column">NAME</div>
                <div className="quiz-modified-column">MODIFIED</div>
            </div>
            <Divider color="#E7EDF0"></Divider>
            {quizzes.map((quiz) => (
                <div className="quiz-table-row" key={quiz.id}>
                    <div className="quiz-name-column">{quiz.name}</div>
                    <div className="quiz-modified-column">{quiz.modified}</div>
                    {showDelete && (
                        <button
                            className="quiz-delete-btn"
                            onClick={() => onDelete && onDelete(quiz.id)}
                        >
                            Delete
                        </button>
                    )}
                </div>
            ))}
        </div>
    );
}

export default QuizTable;