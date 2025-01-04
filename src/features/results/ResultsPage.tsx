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

function ResultsPage() {
  const quizTitle = "World Facts Quiz";
  const questions = ["1", "2", "3", "4", "5"];
  const studentResults = [
    {
      name: "Eugene",
      score: "20%",
      answers: [
        { id: 1, text: "D", isCorrect: true },
        { id: 2, text: "A", isCorrect: false },
        { id: 3, text: "", isCorrect: false },
        { id: 4, text: "", isCorrect: false },
        { id: 5, text: "", isCorrect: false },
      ],
    },
  ];
  const classTotalScores = ["100%", "0%", "0%", "0%", "0%"];

  const auth = useAuth();
  const { sessionId } = useParams<{ sessionId: string }>();
  const navigate = useNavigate();

  // Toggles
  const [showNames, setShowNames] = useState(true);
  const [showResponses, setShowResponses] = useState(true);
  const [showResults, setShowResults] = useState(true);

  const processedStudentResults = studentResults.map((student) => ({
    name: showNames ? student.name : "*****",
    score: student.score,
    answers: student.answers.map((answer) => ({
      ...answer,
      displayText: showResponses ? answer.text : "",
      displayClass: !showResults || !answer.text
        ? "unanswered"
        : answer.isCorrect
          ? "correct"
          : "incorrect",
    })),
  }));


  useEffect(() => {
    if (sessionId) {
      // If sessionId exists, no need to check active session
      // loadSessionData();
    } else {
      // Otherwise, fetch active session for the user's room
      fetchActiveSession();
    }
  }, [sessionId]);


  const fetchActiveSession = async () => {
    const roomId = auth.user?.rooms?.[0]?.roomId;

    if (!roomId) {
      alert("No active room found.");
      return;
    }

    try {
      const activeSession = await quizSessionRepository.getActiveSessionByRoom(roomId);
      
      console.log(activeSession);
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

  const handlePause = () => {
    console.log("Pause clicked");
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
            onPause={handlePause}
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
            studentResults={processedStudentResults}
            classTotalScores={classTotalScores}
          />
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;