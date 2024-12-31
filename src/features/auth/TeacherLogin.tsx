import { useAuth } from "../../hooks/AuthProvider";
import ReusableForm from "../../components/ReusableForm";

function TeacherLogin() {
    const auth = useAuth();

    const handleLogin = async (formData: Record<string, string>) => {
        const { email, password } = formData;
        await auth.login(email, password);
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
}

export default TeacherLogin;