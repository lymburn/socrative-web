import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import LaunchPage from './features/launch/LaunchPage';
import LibraryPage from './features/library/LibraryPage';
import LiveResultsPage from './features/results/LiveResultsPage';
import QuizEditorPage from "./features/editor/QuizEditorPage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/launch" />} />
        <Route path="/launch" element={<LaunchPage />} />
        <Route path="/library" element={<LibraryPage />} />
        <Route path="/results" element={<LiveResultsPage />} />
        <Route path="/edit-quiz" element={<QuizEditorPage />} />
      </Routes>
    </Router>
  )
}

export default App
