import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

function LandingPage() {
    const navigate = useNavigate();

    return (
        <div className="landing-page">
            <div className="landing-container">
                <button
                    className="landing-btn student-btn"
                    onClick={() => navigate("/student-login")}
                >
                    Student Login
                </button>
                <button
                    className="landing-btn teacher-btn"
                    onClick={() => navigate("/teacher-login")}
                >
                    Teacher Login
                </button>
                <p className="signup-text">Don’t have an account?</p>
                <button
                    className="signup-link"
                    onClick={() => navigate("/register")}
                >
                    Sign up now!
                </button>
            </div>
        </div>

    );
};

export default LandingPage;