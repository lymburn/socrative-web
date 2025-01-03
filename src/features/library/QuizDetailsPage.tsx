import './QuizDetailsPage.css';
import './../../styles/QuestionList.css';

import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { quizRepository } from "../../data/repositories/quizRepository";
import { Quiz } from "../../models/Quiz";
import ReadOnlyQuestion from "../editor/ReadOnlyQuestion";
import Divider from "../../components/Divider";

interface DisplayQuestion {
    questionText: string;
    points: number;
    choices: string[];
    correctAnswerIndex: number | null;
}

function QuizDetailsPage() {
    const { quizId } = useParams();
    const [quiz, setQuiz] = useState<Quiz | null>(null);
    const [questions, setQuestions] = useState<DisplayQuestion[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (!quizId) return;

        async function loadQuiz() {
            try {
                const fetchedQuiz = await quizRepository.getQuizById(Number(quizId));

                // Go back to library if not found
                if (!fetchedQuiz) {
                    alert("Quiz not found!");
                    navigate("/library");
                    return;
                }

                setQuiz(fetchedQuiz);
                
                console.log(fetchedQuiz);
                // Transform each question's answers into (choices, correctAnswerIndex)
                const mappedQuestions = fetchedQuiz.questions.map((q) => {
                    const choices = q.answers.map((a) => a.text);
                    const correctAnswerIndex = q.answers.findIndex((a) => a.isCorrect);
                    return {
                        questionText: q.question,
                        points: q.points,
                        choices,
                        correctAnswerIndex: correctAnswerIndex >= 0 ? correctAnswerIndex : null,
                    };
                });

                setQuestions(mappedQuestions);
            } catch (error) {
                console.error("Failed to load quiz:", error);
                navigate("/library");
            }
        }

        loadQuiz();
    }, [quizId, navigate]);

    if (!quiz) {
        return <div>Loading quiz details...</div>;
    }

    return (
        <div className="quiz-details-page">
            <div className="quiz-details-container">
                <h2>{quiz.name}</h2>
                    <Divider color="#E7EDF0" />

                    <div className="questions-list">
                        {questions.map((q, index) => (
                            <ReadOnlyQuestion
                                key={index}
                                questionNumber={index + 1}
                                questionText={q.questionText}
                                points={q.points}
                                choices={q.choices}
                                correctAnswerIndex={q.correctAnswerIndex}
                            />
                        ))}
                </div>
            </div>
        </div>
    );
}

export default QuizDetailsPage;