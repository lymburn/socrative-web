import "./ResultsButtons.css";
import { Button } from "@mui/material";

interface ResultsButtonsProps {
    onFinish: () => void;
}

function ResultsButtons({ onFinish }: ResultsButtonsProps) {
    return (
        <div className="results-buttons">
            <Button variant="contained" color="secondary" disableElevation onClick={onFinish}>
                Finish Activity
            </Button>
        </div>
    );
}

export default ResultsButtons;