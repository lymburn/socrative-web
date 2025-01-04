import { useState, useEffect } from "react";
import './LaunchPage.css';
import Header from "../../components/Header";
import LaunchButton from './LaunchButton';
import QuizIcon from "../../assets/quiz-icon.png";
import LaunchQuizModal from "./LaunchQuizModal";
import { Quiz } from "../../models/Quiz";
import { quizRepository } from "../../data/repositories/quizRepository";
import { useAuth } from "../../hooks/AuthProvider";

function LaunchPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const auth = useAuth();

  const defaultRoomId = auth.user?.rooms?.[0]?.roomId

  useEffect(() => {
    loadQuizzes();
  }, []);

  async function loadQuizzes() {
    if (!auth.user?.id) {
      return;
    }

    try {
      const userQuizzes = await quizRepository.getQuizzesForUser(auth.user.id);
      setQuizzes(userQuizzes);
    } catch (error) {
      console.error("Failed to load quizzes for user:", error);
    }
  }

  const handleOpenModal = () => {
    if (!defaultRoomId) {
      alert("No room found. Please create a room before launching a quiz.");
      return;
    }

    setIsModalOpen(true);
  };


  return (
    <div className="launch-page">
      <Header />
      <div className="launch-button-container">
        <LaunchButton
          icon={QuizIcon}
          label="Quiz"
          onClick={handleOpenModal}
        />
      </div>

      {isModalOpen && (
        <LaunchQuizModal
          quizzes={quizzes}
          roomId={defaultRoomId!} // Can pass in default room id since modal can't be opened if it's null
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default LaunchPage;