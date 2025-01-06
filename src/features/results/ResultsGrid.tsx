import "./ResultsGrid.css";
import { StudentResult } from "../../models/StudentResult";
import { Question } from "../../models/Question";

interface ResultsGridProps {
    questions: Question[]; // Array of question objects
    studentResults: StudentResult[]; // Array of student results
    classTotalScores: string[]; // Array of class scores for each question
}

function ResultsGrid({
    questions,
    studentResults,
    classTotalScores,
}: ResultsGridProps) {
    return (
        <div
            className="results-grid"
            style={{ gridTemplateColumns: `2fr repeat(${questions.length}, 1fr)` }}
        >
            {/* Header Row */}
            <div className="header-cell name-score-header">
                <div>NAME</div>
                <div>SCORE%</div>
            </div>
            {questions.map((_, index) => (
                <div key={`header-${index}`} className="header-cell question-header">
                    {index + 1}
                </div>
            ))}

            {/* Student Rows */}
            {studentResults.map((student, rowIndex) => (
                <>
                    <div key={`name-score-${rowIndex}`} className="student-cell name-score-cell">
                        <div className="student-name">{student.name}</div>
                        <div className="student-score">{student.score}</div>
                    </div>
                    {student.answers.map((answer, colIndex) => (
                        <div
                            key={`answer-${rowIndex}-${colIndex}`}
                            className={`student-cell question-cell ${answer.status}`}
                        >
                            {answer.text}
                        </div>
                    ))}
                </>
            ))}

            {/* Class Total Row */}
            <div className="class-total-cell name">Class Total</div>
            {classTotalScores.map((score, colIndex) => (
                <div key={`class-total-${colIndex}`} className="class-total-cell question-total">
                    {score}
                </div>
            ))}
        </div>
    );
}


export default ResultsGrid;