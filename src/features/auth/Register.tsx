import { useNavigate } from "react-router-dom";
import ReusableForm from "../../components/ReusableForm";

function Register() {
    const navigate = useNavigate();

    const handleRegister = (formData: Record<string, string>) => {
        const { email, password } = formData;

        // Basic validation
        if (!email.includes("@") || password.length < 6) {
            alert("Please enter a valid email and a password with at least 6 characters.");
            return;
        }

        navigate("/launch");
    };

    return (
        <ReusableForm
            title="Register"
            fields={[
                { id: "email", label: "Email", placeholder: "Enter your email", type: "email" },
                { id: "password", label: "Password", placeholder: "Create a password", type: "password" },
            ]}
            primaryButtonText="REGISTER"
            onSubmit={handleRegister}
        />
    );
};

export default Register;