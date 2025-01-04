import { useNavigate } from "react-router-dom";
import ReusableForm from "../../components/ReusableForm";
import { authRepository } from "../../data/repositories/authRepository";

function StudentLogin() {
    const navigate = useNavigate();

    const handleJoinRoom = async (formData: Record<string, string>) => {
        const { roomId, studentName } = formData;

        try {
            await authRepository.joinRoom(studentName, roomId);

            navigate(`/student-quiz?roomId=${roomId}`);
        } catch (error) {
            console.error("Failed to join room:", error);
            alert("Failed to join room. Please try again.");
        }
    };

    return (
        <ReusableForm
            title="Student Login"
            fields={[
                { id: "roomId", label: "Room Name", placeholder: "Enter the room name", type: "text" },
                { id: "studentName", label: "Your Name", placeholder: "Enter your name", type: "text" },
            ]}
            primaryButtonText="JOIN ROOM"
            onSubmit={handleJoinRoom}
        />
    );
};

export default StudentLogin;