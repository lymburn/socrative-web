import './LaunchPage.css';
import LaunchButton from './LaunchButton';
import QuizIcon from "../../assets/quiz-icon.png";
import SpaceshipIcon from "../../assets/spaceship-icon.png";
import ExitIcon from "../../assets/exit-icon.png";

function Launch() {
  return (
    <div className="launch-page">
        <div className="launch-button-container">
            <LaunchButton icon={QuizIcon} label="Quiz"></LaunchButton>
            <LaunchButton icon={SpaceshipIcon} label="Space Race"></LaunchButton>
            <LaunchButton icon={ExitIcon} label="Exit Ticket"></LaunchButton>
        </div>
    </div>
  );
};

export default Launch;