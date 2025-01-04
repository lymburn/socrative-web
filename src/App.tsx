import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import theme from './theme/theme';
import AuthProvider from './hooks/AuthProvider';
import LandingPage from './features/auth/LandingPage';
import LaunchPage from './features/launch/LaunchPage';
import LibraryPage from './features/library/LibraryPage';
import ResultsPage from './features/results/ResultsPage';
import QuizEditorPage from "./features/editor/QuizEditorPage";
import TeacherLogin from './features/auth/TeacherLogin';
import StudentLogin from './features/auth/StudentLogin';
import Register from './features/auth/Register';
import QuizDetailsPage from './features/library/QuizDetailsPage';
import StudentQuizPage from './features/studentquiz/StudentQuizPage';
import PrivateRoute from './routes/PrivateRoute';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <AuthProvider>
                    <Routes>
                        {/* Public Routes */}
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/teacher-login" element={<TeacherLogin />} />
                        <Route path="/student-login" element={<StudentLogin />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/student-quiz" element={<StudentQuizPage />} />

                        {/* Private Routes */}
                        <Route element={<PrivateRoute />}>
                            <Route path="/launch" element={<LaunchPage />} />
                            <Route path="/library" element={<LibraryPage />} />
                            <Route path="/results/" element={<ResultsPage />} />
                            <Route path="/results/:sessionId" element={<ResultsPage />} />
                            <Route path="/edit-quiz" element={<QuizEditorPage />} />
                            <Route path="/quiz/:quizId" element={<QuizDetailsPage />} />
                        </Route>
                    </Routes>
                </AuthProvider>
            </Router>
        </ThemeProvider>
    );
}

export default App;