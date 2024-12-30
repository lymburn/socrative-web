import { useNavigate } from "react-router-dom";
import ReusableForm from "../../components/ReusableForm";

function StudentLogin() {
    const navigate = useNavigate();

    const handleJoinRoom = (formData: Record<string, string>) => {
        const { roomName, studentName } = formData;

        // Basic empty validation
        if (!roomName || !studentName) {
            alert("Please fill in both Room Name and Your Name.");
            return;
        }

        navigate("/student-room");
    };

    return (
        <ReusableForm
            title="Student Login"
            fields={[
                { id: "roomName", label: "Room Name", placeholder: "Enter the room name", type: "text" },
                { id: "studentName", label: "Your Name", placeholder: "Enter your name", type: "text" },
            ]}
            primaryButtonText="JOIN ROOM"
            onSubmit={handleJoinRoom}
        />
    );
};

export default StudentLogin;