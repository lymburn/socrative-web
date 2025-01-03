import Switch from "@mui/material/Switch";
import "./ResultsToggles.css";

interface ResultsTogglesProps {
    showNames: boolean;
    setShowNames: (val: boolean) => void;
    showResponses: boolean;
    setShowResponses: (val: boolean) => void;
    showResults: boolean;
    setShowResults: (val: boolean) => void;
}

function ResultsToggles({
    showNames,
    setShowNames,
    showResponses,
    setShowResponses,
    showResults,
    setShowResults,
}: ResultsTogglesProps) {
    return (
        <div className="results-toggles">
            <div className="toggle-item">
                <Switch
                    checked={showNames}
                    onChange={(e) => setShowNames(e.target.checked)}
                />
                <span>Show Names</span>
            </div>
            <div className="toggle-item">
                <Switch
                    checked={showResponses}
                    onChange={(e) => setShowResponses(e.target.checked)}
                />
                <span>Show Responses</span>
            </div>
            <div className="toggle-item">
                <Switch
                    checked={showResults}
                    onChange={(e) => setShowResults(e.target.checked)}
                />
                <span>Show Results</span>
            </div>
        </div>
    );
}

export default ResultsToggles;