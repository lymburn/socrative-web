import { useState, useEffect } from "react";
import "./QuizList.css";
import { Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Quiz } from "../../models/Quiz";
import QuizTable from "../../components/QuizTable";
import { useAuth } from "../../hooks/AuthProvider";
import { quizRepository } from "../../data/repositories/quizRepository";
import { Button } from "@mui/material";

interface Tab {
    id: string;
    label: string;
}

function QuizList() {
    const [quizzes, setQuizzes] = useState<Quiz[]>([]);
    const [activeTab, setActiveTab] = useState("quizzes");
    const navigate = useNavigate();
    const auth = useAuth();

    // Fetch quizzes when component mounts
    useEffect(() => {
        loadQuizzes();
    }, []);

    // Only have quizzes tab, with support for other tabs
    const tabs: Tab[] = [
        { id: "quizzes", label: "Quizzes" },
    ];

    async function loadQuizzes() {
        if (!auth.user?.id) {
            return;
        }

        try {
            const fetchedQuizzes = await quizRepository.getQuizzesForUser(auth.user.id);

            setQuizzes(fetchedQuizzes);
        } catch (error) {
            console.error("Failed to fetch quizzes:", error);
        }
    }

    const addQuiz = () => {
        navigate("/edit-quiz");
    };

    async function handleDeleteQuiz(id: number) {
        try {
            await quizRepository.deleteQuiz(id);

            // Remove from local state after successful delete
            setQuizzes((prev) => prev.filter((quiz) => quiz.id !== id));
        } catch (error) {
            console.error("Failed to delete quiz:", error);
        }
    }

    return (
        <div className="quiz-list">
            <div className="quiz-list-header">
                <div className="quiz-list-tabs">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            className={`tab ${activeTab === tab.id ? "active-tab" : ""}`}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                <div className="quiz-list-buttons">
                    <Button variant="contained" color="primary" disableElevation onClick={addQuiz}>Add Quiz</Button>
                </div>
            </div>

            <Divider/>

            {activeTab === "quizzes" && (
                <QuizTable
                    quizzes={quizzes}
                    showDelete={true}
                    onDelete={handleDeleteQuiz}
                    onRowClick={(quiz) => navigate(`/quiz/${quiz.id}`)}
                />
            )}
        </div>
    );
}

export default QuizList;