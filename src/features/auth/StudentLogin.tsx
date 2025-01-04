import { useNavigate } from "react-router-dom";
import ReusableForm from "../../components/ReusableForm";
import { authRepository } from "../../data/repositories/authRepository";

function StudentLogin() {
    const navigate = useNavigate();

    const handleJoinRoom = async (formData: Record<string, string>) => {
        const { roomId, studentName } = formData;
        await authRepository.joinRoom(studentName, roomId);

        navigate("/");
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