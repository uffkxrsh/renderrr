// SubmitButton.tsx
import React from 'react';

interface SubmitButtonProps {
    children: React.ReactNode;
}

/**
 * Reusable button component for form submission.
 */
const SubmitButton: React.FC<SubmitButtonProps> = ({ children }) => (
    <button type="submit" className="submit-button">{children}</button>
);

export default SubmitButton;
