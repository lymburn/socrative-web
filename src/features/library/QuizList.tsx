import { useState } from "react";
import "./QuizList.css";
import Divider from "../../components/Divider";
import { useNavigate } from "react-router-dom";
import { Quiz } from "../../models/Quiz";
import QuizTable from "../../components/QuizTable";

interface Tab {
    id: string;
    label: string;
}

function QuizList() {
    const [quizzes, setQuizzes] = useState<Quiz[]>([
        { id: 1, name: "World Facts Quiz", modified: "12/24/2024" },
    ]);

    const [activeTab, setActiveTab] = useState("quizzes");

    const tabs: Tab[] = [
        { id: "quizzes", label: "Quizzes" },
        { id: "deleted", label: "Deleted" },
    ];

    const navigate = useNavigate();

    const addQuiz = () => {
        navigate("/edit-quiz"); // Navigate to QuizEditorPage
    };

    const deleteQuiz = (id: number) => {
        setQuizzes(quizzes.filter((quiz) => quiz.id !== id));
    };

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
                    <button className="add-quiz-btn" onClick={addQuiz}>
                        Add Quiz
                    </button>
                </div>
            </div>

            <Divider color="#E7EDF0" />

            {activeTab === "quizzes" && (
                <QuizTable quizzes={quizzes} showDelete={true} onDelete={deleteQuiz} />
            )}

            {activeTab === "deleted" && (
                <div className="deleted-message">
                    <p>Deleted quizzes</p>
                </div>
            )}
        </div>
    );
}

export default QuizList;