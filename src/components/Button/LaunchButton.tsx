import Launch from "../../pages/Launch/Launch";
import "./LaunchButton.css";

interface LaunchButtonProps {
    icon: string;
    label: string;
}

function LaunchButton({icon, label}: LaunchButtonProps) {
    return (
        <div className="launch-button">
            <div className="launch-button-circle">
                <img className="launch-button-icon" src={icon} alt={label} />
            </div>
            <div className="launch-button-label">{label}</div>
        </div>
    );
};

export default LaunchButton;