// InputField.tsx
import React from 'react';

interface InputFieldProps {
    type: string;
    placeholder: string;
    name: string; // Add `name` to props for form identification
    required?: boolean;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * Reusable input component for various form fields.
 * Accepts props for type, placeholder, name, required, value, and onChange handler.
 */
const InputField: React.FC<InputFieldProps> = ({ type, placeholder, name, required, value, onChange }) => (
    <input 
        type={type} 
        placeholder={placeholder} 
        name={name} // Assign `name` attribute to input
        required={required} 
        value={value} 
        onChange={onChange} 
        className="input-field" 
    />
);

export default InputField;
