import React, { useEffect, useState } from "react";

import './ResultsPage.css';
import Header from "../../components/Header";
import ResultsButtons from './ResultsButtons';
import ResultsToggles from './ResultsToggles';
import { Divider } from '@mui/material';
import ResultsGrid from "./ResultsGrid";

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

  const handlePause = () => {
    console.log("Pause clicked");
  };

  const handleFinish = () => {
    console.log("Finish clicked");
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