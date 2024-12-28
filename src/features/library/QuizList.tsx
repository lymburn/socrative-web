import { useState } from 'react';
import './QuizList.css';
import Divider from '../../components/Divider';
import { useNavigate } from "react-router-dom";

interface Tab {
    id: string;
    label: string;
}

interface Quiz {
    id: number;
    name: string;
    modified: string;
  }

function QuizList() {
    const [quizzes, setQuizzes] = useState<Quiz[]>([
        { id: 1, name: 'World Facts Quiz', modified: '12/24/2024' },
    ]);

    const [activeTab, setActiveTab] = useState('quizzes')

    const tabs: Tab[] = [
        { id: 'quizzes', label: 'Quizzes' },
        { id: 'deleted', label: 'Deleted' },
    ];

    const navigate = useNavigate();

    const addQuiz = () => {
        // const newQuiz: Quiz = {
        //   id: Date.now(),
        //   name: `New Quiz ${quizzes.length + 1}`,
        //   modified: new Date().toLocaleDateString(),
        // };
        // setQuizzes([...quizzes, newQuiz]);
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
                            className={`tab ${activeTab === tab.id ? 'active-tab' : ''}`}
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

            <Divider color="#E7EDF0"></Divider>

            {activeTab === 'quizzes' && (
                <div className="quiz-list-container">
                    <div className="quiz-list-columns">
                        <div className="quiz-name-column">NAME</div>
                        <div className="quiz-modified-column">MODIFIED</div>
                    </div>
                    <Divider color="#E7EDF0"></Divider>
                    {quizzes.map((quiz) => (
                        <div className="quiz-item" key={quiz.id}>
                            <div className="quiz-name-column">{quiz.name}</div>
                            <div className="quiz-modified-column">{quiz.modified}</div>
                            <button className="delete-btn" onClick={() => deleteQuiz(quiz.id)}>
                                Delete
                            </button>
                        </div>
                    ))}
                </div>
            )}

            {activeTab === "deleted" && (
                <div className="deleted-message">
                    <p>Deleted quizzes</p>
                </div>
            )}

        </div>
    )
}

export default QuizList;