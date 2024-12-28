import { useState } from 'react';
import './QuizEditorPage.css';
import QuizEditorHeader from './QuizEditorHeader';
import Divider from '../../components/Divider';
import EditableQuestion from "./EditableQuestion";
import ReadOnlyQuestion from './ReadOnlyQuestion';
import { useNavigate } from "react-router-dom";

interface QuizEditorPageProps {
    initialQuizName?: string;
}

interface QuestionData {
    questionText: string;
    points: number;
    choices: string[];
    correctAnswerIndex: number | null; 
    saved: boolean;
}

function QuizEditorPage({ initialQuizName }: QuizEditorPageProps) {
    const [questions, setQuestions] = useState<QuestionData[]>([]); // Saved questions
    const [editingQuestions, setEditingQuestions] = useState<QuestionData[]>([]); // Questions being edited

    const [quizName, setQuizName] = useState<string>(initialQuizName || "Untitled Quiz");

    const addNewQuestion = () => {
        setEditingQuestions([
            ...editingQuestions,
            { questionText: "", points: 0, choices: ["", "", "", ""], correctAnswerIndex: null, saved: false },
        ]);
    };

    const saveQuestion = (index: number) => {
        const questionToSave = editingQuestions[index];
        setQuestions([...questions, { ...questionToSave, saved: true }]); // Move to saved list
        const updatedEditingQuestions = [...editingQuestions];
        updatedEditingQuestions.splice(index, 1); // Remove from editing list
        setEditingQuestions(updatedEditingQuestions);
    };

    const deleteQuestion = (index: number) => {
        const updatedEditingQuestions = [...editingQuestions];
        updatedEditingQuestions.splice(index, 1); // Remove from editing list
        setEditingQuestions(updatedEditingQuestions);
    };

    const updateQuestion = (index: number, newText: string) => {
        const updatedEditingQuestions = [...editingQuestions];
        updatedEditingQuestions[index].questionText = newText;
        setEditingQuestions(updatedEditingQuestions);
    };

    const updatePoints = (index: number, newPoints: number) => {
        const updatedEditingQuestions = [...editingQuestions];
        updatedEditingQuestions[index].points = newPoints;
        setEditingQuestions(updatedEditingQuestions);
    };

    const updateChoice = (questionIndex: number, choiceIndex: number, newChoice: string) => {
        const updatedEditingQuestions = [...editingQuestions];
        updatedEditingQuestions[questionIndex].choices[choiceIndex] = newChoice;
        setEditingQuestions(updatedEditingQuestions);
    };

    const selectCorrectAnswer = (questionIndex: number, choiceIndex: number) => {
        const updatedEditingQuestions = [...editingQuestions];
        updatedEditingQuestions[questionIndex].correctAnswerIndex = choiceIndex; // Update the correct answer index
        setEditingQuestions(updatedEditingQuestions);
    };

    const navigate = useNavigate();
    
    const handleSaveAndExit = () => {
        navigate("/library"); // Redirect to Library Page
    };

    return (
        <div className="quiz-editor-page">
            <div className="quiz-editor-container">
                <QuizEditorHeader quizName={quizName} onQuizNameChange={setQuizName} onSave={handleSaveAndExit}/>
                <Divider color="#E7EDF0"></Divider>

                <div className="questions-list">
                    {questions.map((question, index) => (
                        <ReadOnlyQuestion
                            key={`saved-${index}`}
                            questionNumber={index + 1}
                            questionText={question.questionText}
                            points={question.points}
                            choices={question.choices}
                            correctAnswerIndex={question.correctAnswerIndex}
                        />
                    ))}

                    {editingQuestions.map((question, index) => (
                        <EditableQuestion
                            key={`editing-${index}`}
                            questionNumber={questions.length + index + 1}
                            questionText={question.questionText}
                            points={question.points}
                            choices={question.choices}
                            correctAnswerIndex={question.correctAnswerIndex}
                            onQuestionChange={(newText) => updateQuestion(index, newText)}
                            onPointsChange={(newPoints) => updatePoints(index, newPoints)}
                            onChoiceChange={(choiceIndex, newChoice) =>
                                updateChoice(index, choiceIndex, newChoice)
                            }
                            onSelectCorrectAnswer={(choiceIndex) =>
                                selectCorrectAnswer(index, choiceIndex)
                            }
                            onSave={() => saveQuestion(index)}
                            onDelete={() => deleteQuestion(index)}
                        />
                    ))}
                </div>
                <div className="add-question-container">
                    <h2 className="add-question-heading">Add Blank Question</h2>
                    <div className="add-question-options">
                        <button className="add-question-btn" onClick={addNewQuestion}>Multiple Choice</button>
                    </div>
                </div>
            </div>

        </div>
    )
};

export default QuizEditorPage;