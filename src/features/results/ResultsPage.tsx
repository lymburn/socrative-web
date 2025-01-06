import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import './ResultsPage.css';
import Header from "../../components/Header";
import ResultsButtons from './ResultsButtons';
import ResultsToggles from './ResultsToggles';
import { Divider } from '@mui/material';
import ResultsGrid from "./ResultsGrid";
import { quizSessionRepository } from "../../data/repositories/quizSessionRepository";
import { useAuth } from "../../hooks/AuthProvider";
import { QuizSessionResult } from "../../models/QuizSessionResult";
import { Question } from "../../models/Question";
import { StudentResult } from "../../models/StudentResult";

function ResultsPage() {
  const auth = useAuth();
  const { sessionId } = useParams<{ sessionId: string }>();
  const navigate = useNavigate();

  // States
  const [quizTitle, setQuizTitle] = useState<string>("");
  const [questions, setQuestions] = useState<Question[]>([]);
  const [rawStudentResults, setRawStudentResults] = useState<QuizSessionResult["studentResults"]>([]);
  const [studentResults, setStudentResults] = useState<StudentResult[]>([]);
  const [classTotalScores, setClassTotalScores] = useState<string[]>([]);

  // Toggles
  const [showNames, setShowNames] = useState(true);
  const [showResponses, setShowResponses] = useState(true);
  const [showResults, setShowResults] = useState(true);

  useEffect(() => {
    sessionId ? fetchResults() : fetchActiveSession();
  }, [sessionId]);

  // Reprocess results when toggles change
  useEffect(() => {
    setStudentResults(processStudentResults(rawStudentResults, questions, showNames, showResponses, showResults));
  }, [rawStudentResults, questions, showNames, showResponses, showResults]);

  const fetchActiveSession = async () => {
    const roomId = auth.user?.rooms?.[0]?.roomId;

    if (!roomId) {
      alert("No active room found.");
      return;
    }

    try {
      const activeSession = await quizSessionRepository.getActiveSessionByRoom(roomId);

      if (activeSession && activeSession.id) {
        navigate(`/results/${activeSession.id}`);
      } else {
        alert("No active quiz session found.");
      }
    } catch (error) {
      console.error("Failed to fetch active session:", error);
      alert("No active session.");
    }
  };

  const fetchResults = async () => {
    try {
      const result: QuizSessionResult = await quizSessionRepository.getQuizSessionResults(Number(sessionId));

      setQuizTitle(result.quiz.name);
      setQuestions(result.quiz.questions);
      setRawStudentResults(result.studentResults);

      const totalScores = calculateClassTotalScores(result.studentResults, result.quiz.questions);
      setClassTotalScores(totalScores);
    } catch (error) {
      console.error("Failed to fetch results:", error);
      alert("Failed to load quiz session results.");
      navigate("/library");
    }
  };

  const processStudentResults = (
    studentResults: QuizSessionResult["studentResults"],
    questions: Question[],
    showNames: boolean,
    showResponses: boolean,
    showResults: boolean
  ): StudentResult[] => {
    // Map to store the correct answer for each question
    const correctAnswersMap = new Map(
      questions.map((q) => [q.id, q.answers.find((a) => a.isCorrect)?.id])
    );

    return studentResults.map((studentResult) => {
      const totalQuestions = questions.length;

      // Calculate the number of correct answers
      const correctAnswers = studentResult.studentAnswers.filter(
        (answer) => correctAnswersMap.get(answer.questionId) === answer.answerId
      ).length;

      const scorePercentage = ((correctAnswers / totalQuestions) * 100).toFixed(0);

      const answers = questions.map((question) => {
        const studentAnswer = studentResult.studentAnswers.find(
          (ans) => ans.questionId === question.id
        );

        let status: "unanswered" | "correct" | "incorrect" = "unanswered";
        if (showResults && studentAnswer) {
          status =
            correctAnswersMap.get(question.id) === studentAnswer.answerId
              ? "correct"
              : "incorrect";
        }

        const text = showResponses
          ? question.answers.find((ans) => ans.id === studentAnswer?.answerId)?.text || ""
          : "";

        return { text, status };
      });

      return {
        name: showNames ? studentResult.student.name : "*****",
        score: `${scorePercentage}%`,
        answers,
      };
    });
  };

  const calculateClassTotalScores = (
    studentResults: QuizSessionResult["studentResults"],
    questions: Question[]
  ): string[] => {
    return questions.map((q) => {
      const correctAnswerId = q.answers.find((a) => a.isCorrect)?.id;
      const correctCount = studentResults.filter((studentResult) =>
        studentResult.studentAnswers.some((ans) => ans.questionId === q.id && ans.answerId === correctAnswerId)
      ).length;

      return `${((correctCount / studentResults.length) * 100).toFixed(0)}%`;
    });
  };

  const handleFinish = async () => {
    if (!sessionId) {
      alert("No session ID provided.");
      return;
    }

    try {
      await quizSessionRepository.deleteQuizSession(Number(sessionId));
      alert("Quiz session finished.");
    } catch (error) {
      console.error("Failed to finish quiz session:", error);
      alert("Failed to finish the quiz session.");
    }
  };

  return (
    <div className="results-page">
      <Header />
      <div className="results-container">
        <div className="results-header">
          <h1 className="quiz-title">{quizTitle}</h1>
          <ResultsButtons
            onFinish={handleFinish}
          />
        </div>
        <Divider />

        <div className="results-toggles-container">
          <ResultsToggles
            showNames={showNames}
            setShowNames={setShowNames}
            showResponses={showResponses}
            setShowResponses={setShowResponses}
            showResults={showResults}
            setShowResults={setShowResults}
          />
        </div>

        <Divider />

        <div className="results-grid-container">
          <ResultsGrid
            questions={questions}
            studentResults={studentResults}
            classTotalScores={classTotalScores}
          />
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;