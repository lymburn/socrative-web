import "./ResultsButtons.css";
import { Button } from "@mui/material";

interface ResultsButtonsProps {
    onPause: () => void;
    onFinish: () => void;
}

function ResultsButtons({ onPause, onFinish }: ResultsButtonsProps) {
    return (
        <div className="results-buttons">
            <Button variant="contained" color="secondary" disableElevation onClick={onPause}>
                Pause
            </Button>
            <Button variant="contained" color="secondary" disableElevation onClick={onFinish}>
                Finish Activity
            </Button>
        </div>
    );
}

export default ResultsButtons;