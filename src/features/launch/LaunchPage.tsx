import {useState} from "react";
import './LaunchPage.css';
import Header from "../../components/Header";
import LaunchButton from './LaunchButton';
import QuizIcon from "../../assets/quiz-icon.png";
import SpaceshipIcon from "../../assets/spaceship-icon.png";
import ExitIcon from "../../assets/exit-icon.png";
import LaunchQuizModal from "./LaunchQuizModal";

function Launch() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const quizzes = [
    { id: 1, name: "World Facts Quiz", modified: "12/24/2024" },
    { id: 2, name: "Math Quiz", modified: "12/22/2024" },
  ];

  return (
    <div className="launch-page">
      <Header />
      <div className="launch-button-container">
        <LaunchButton
                      icon={QuizIcon}
                      label="Quiz"
                      onClick={() => setIsModalOpen(true)}
        />
        <LaunchButton icon={SpaceshipIcon} label="Space Race"></LaunchButton>
        <LaunchButton icon={ExitIcon} label="Exit Ticket"></LaunchButton>
      </div>

      {isModalOpen && (
        <LaunchQuizModal
            quizzes={quizzes}
            onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default Launch;