// SignupForm.tsx
import React, { useState } from 'react';
import InputField from './InputField';
import SubmitButton from './SubmitButton';

/**
 * Type definition for the state of the signup form fields.
 */
interface SignupFormState {
    fullName: string;
    email: string;
    password: string;
    confirmPassword: string;
    termsAccepted: boolean;
}

/**
 * Signup form component that handles user registration input fields and submission.
 */
const SignupForm: React.FC = () => {
    // State for the signup form fields
    const [formData, setFormData] = useState<SignupFormState>({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
        termsAccepted: false,
    });

    // State for error messages
    const [error, setError] = useState<string | null>(null);

    /**
     * Handles changes in form inputs and updates the form state.
     * @param event - Input change event
     */
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    /**
     * Handles the form submission and performs basic validation.
     * @param event - Form submission event
     */
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        // Basic validation for password match and terms acceptance
        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match.");
            return;
        }
        if (!formData.termsAccepted) {
            setError("You must accept the terms and conditions.");
            return;
        }

        setError(null);
        // Logic to handle form submission (e.g., call API to create account)
        // Example: signup(formData);
        console.log("Form submitted:", formData);
    };

    return (
        <form className="signup-form" onSubmit={handleSubmit}>
            <InputField 
                type="text" 
                placeholder="Full Name" 
                name="fullName" 
                required 
                value={formData.fullName} 
                onChange={handleChange} 
            />
            <InputField 
                type="email" 
                placeholder="Email" 
                name="email" 
                required 
                value={formData.email} 
                onChange={handleChange} 
            />
            <InputField 
                type="password" 
                placeholder="Password" 
                name="password" 
                required 
                value={formData.password} 
                onChange={handleChange} 
            />
            <InputField 
                type="password" 
                placeholder="Confirm Password" 
                name="confirmPassword" 
                required 
                value={formData.confirmPassword} 
                onChange={handleChange} 
            />
            <div className="terms-checkbox">
                <label>
                    <input 
                        type="checkbox" 
                        name="termsAccepted" 
                        checked={formData.termsAccepted} 
                        onChange={handleChange} 
                    />
                    I agree to the terms and conditions
                </label>
            </div>
            {error && <div className="error-message">{error}</div>}
            <SubmitButton>Sign Up</SubmitButton>
        </form>
    );
};

export default SignupForm;
