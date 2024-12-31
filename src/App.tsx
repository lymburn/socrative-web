import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthProvider from './hooks/AuthProvider';
import LandingPage from './features/auth/LandingPage';
import LaunchPage from './features/launch/LaunchPage';
import LibraryPage from './features/library/LibraryPage';
import LiveResultsPage from './features/results/LiveResultsPage';
import QuizEditorPage from "./features/editor/QuizEditorPage";
import TeacherLogin from './features/auth/TeacherLogin';
import StudentLogin from './features/auth/StudentLogin';
import Register from './features/auth/Register';
import PrivateRoute from './routes/PrivateRoute';

function App() {
    return (
        <Router>
            <AuthProvider>
                <Routes>
                    {/* Public Routes */}
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/teacher-login" element={<TeacherLogin />} />
                    <Route path="/student-login" element={<StudentLogin />} />
                    <Route path="/register" element={<Register />} />

                    {/* Private Routes */}
                    <Route element={<PrivateRoute />}>
                        <Route path="/launch" element={<LaunchPage />} />
                        <Route path="/library" element={<LibraryPage />} />
                        <Route path="/results" element={<LiveResultsPage />} />
                        <Route path="/edit-quiz" element={<QuizEditorPage />} />
                    </Route>
                </Routes>
            </AuthProvider>
        </Router>
    );
}

export default App;