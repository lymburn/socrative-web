import { useNavigate } from "react-router-dom";
import ReusableForm from "../../components/ReusableForm";

function TeacherLogin() {
    const navigate = useNavigate();

    const handleLogin = (formData: Record<string, string>) => {
        const { email, password } = formData;

        // Basic empty validation
        if (!email || !password) {
            alert("Please fill in both email and password.");
            return;
        }

        navigate("/launch");
    };

    return (
        <ReusableForm
            title="Teacher Login"
            fields={[
                { id: "email", label: "Email", placeholder: "Enter your email", type: "email" },
                { id: "password", label: "Password", placeholder: "Enter your password", type: "password" },
            ]}
            primaryButtonText="SIGN IN"
            onSubmit={handleLogin}
        />
    );
};

export default TeacherLogin;