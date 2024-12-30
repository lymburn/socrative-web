import "./LaunchButton.css";

interface LaunchButtonProps {
    icon: string;
    label: string;
    onClick?: () => void;
}

function LaunchButton({icon, label, onClick}: LaunchButtonProps) {
    return (
        <div className="launch-button" onClick={onClick}>
            <div className="launch-button-circle">
                <img className="launch-button-icon" src={icon} alt={label} />
            </div>
            <div className="launch-button-label">{label}</div>
        </div>
    );
};

export default LaunchButton;