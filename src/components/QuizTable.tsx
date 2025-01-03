import "./QuizTable.css";
import { Quiz } from "../models/Quiz";
import { Divider } from "@mui/material";
import { formatDateString } from "../utils/dateUtils";
import { Button } from "@mui/material";

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
            <Divider/>
            {quizzes.map((quiz) => (
                <div
                    key={quiz.id}
                    className="quiz-table-row"
                    data-clickable={Boolean(onRowClick)}
                    onClick={() => onRowClick && onRowClick(quiz)}
                >
                    <div className="quiz-name-column">{quiz.name}</div>
                    <div className="quiz-modified-column">{formatDateString(quiz.dateCreated)}</div>
                    {showDelete && (
                        <Button
                            variant="contained"
                            color="destructive"
                            disableElevation
                            onClick={(e) => {
                                e.stopPropagation();
                                onDelete && onDelete(quiz.id);
                            }}
                        >
                            Delete
                        </Button>
                    )}
                </div>
            ))}
        </div>
    );
}

export default QuizTable;