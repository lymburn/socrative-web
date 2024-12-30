import { useState } from "react";
import "./ReusableForm.css";

interface Field {
    id: string;
    label: string;
    placeholder: string;
    type: string;
}

interface ReusableFormProps {
    title: string;
    fields: Field[];
    primaryButtonText: string;
    onSubmit: (formData: Record<string, string>) => void;
}

function ReusableForm({ title, fields, primaryButtonText, onSubmit }: ReusableFormProps) {
    const [formData, setFormData] = useState<Record<string, string>>(
        fields.reduce((acc, field) => ({ ...acc, [field.id]: "" }), {})
    );

    const handleChange = (id: string, value: string) => {
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const handleSubmit = () => {
        onSubmit(formData);
    };

    return (
        <div className="reusable-form-page">
            <div className="reusable-form-container">
                <h2 className="reusable-form-title">{title}</h2>
                {fields.map((field) => (
                    <div className="reusable-input-group" key={field.id}>
                        <label htmlFor={field.id}>{field.label}</label>
                        <input
                            id={field.id}
                            type={field.type}
                            value={formData[field.id]}
                            onChange={(e) => handleChange(field.id, e.target.value)}
                            placeholder={field.placeholder}
                        />
                    </div>
                ))}
                <button onClick={handleSubmit} className="reusable-primary-btn">
                    {primaryButtonText}
                </button>
            </div>
        </div>
    );
};

export default ReusableForm;