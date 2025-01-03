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

  return (
    <div className="launch-page">
      <Header />
      <div className="launch-button-container">
        <LaunchButton
          icon={QuizIcon}
          label="Quiz"
          onClick={() => setIsModalOpen(true)}
        />
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

export default LaunchPage;