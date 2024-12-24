import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header/Header';
import LaunchPage from './pages/Launch/LaunchPage';
import LibraryPage from './pages/Library/LibraryPage';
import LiveResultsPage from './pages/Results/LiveResultsPage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/launch" />} />
        <Route path="/launch" element={<LaunchPage />} />
        <Route path="/library" element={<LibraryPage />} />
        <Route path="/live-results" element={<LiveResultsPage />} />
      </Routes>
    </Router>
  )
}

export default App
