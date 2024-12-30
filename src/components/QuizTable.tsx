import "./QuizTable.css";
import { Quiz } from "../models/Quiz";
import Divider from "./Divider";

interface QuizTableProps {
    quizzes: Quiz[];
    showDelete?: boolean; // Whether to show the delete button
    onDelete?: (id: number) => void;
    onRowClick?: (quiz: Quiz) => void;
}

function QuizTable({ quizzes, showDelete = false, onDelete, onRowClick }: QuizTableProps) {
    return (
        <div className="quiz-table">
            <div className="quiz-table-columns">
                <div className="quiz-name-column">NAME</div>
                <div className="quiz-modified-column">MODIFIED</div>
            </div>
            <Divider color="#E7EDF0"></Divider>
            {quizzes.map((quiz) => (
                <div
                    key={quiz.id}
                    className="quiz-table-row"
                    data-clickable={Boolean(onRowClick)}
                    onClick={() => onRowClick && onRowClick(quiz)}
                >
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