import { authRepository } from "../../data/repositories/authRepository";
import ReusableForm from "../../components/ReusableForm";
import { useNavigate } from "react-router-dom";

function Register() {
    const navigate = useNavigate();

    const handleRegister = async (formData: Record<string, string>) => {
        const { email, password } = formData;

        // Basic validation
        if (!email || !password) {
            alert("Please enter a valid email and password.");
            return;
        }

        try {
            await authRepository.register(email, password);
            navigate("/teacher-login");
        } catch (error: any) {
            alert(error.message);
        }
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