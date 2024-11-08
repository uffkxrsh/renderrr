// LoginForm.tsx
import React, { useState } from 'react';
import InputField from './InputField';
import SubmitButton from './SubmitButton';

/**
 * Type definition for the login form fields.
 */
interface LoginFormState {
    email: string;
    password: string;
    rememberMe: boolean;
}

/**
 * Login form component that handles user login input fields and submission.
 */
const LoginForm: React.FC = () => {
    // State for the login form fields
    const [formData, setFormData] = useState<LoginFormState>({
        email: '',
        password: '',
        rememberMe: false,
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
     * Handles form submission with basic validation.
     * @param event - Form submission event
     */
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        // Basic validation: check if email and password are filled
        if (!formData.email || !formData.password) {
            setError("Please fill in both email and password.");
            return;
        }

        setError(null);
        // Logic to handle form submission (e.g., API call for login)
        console.log("Login form submitted:", formData);
    };

    return (
        <form className="login-form" onSubmit={handleSubmit}>
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
            <div className="login-options">
                <label>
                    <input 
                        type="checkbox" 
                        name="rememberMe" 
                        checked={formData.rememberMe} 
                        onChange={handleChange} 
                    />
                    Remember Me
                </label>
                <a href="#">Forgot Password?</a>
            </div>
            {error && <div className="error-message">{error}</div>}
            <SubmitButton>Login</SubmitButton>
        </form>
    );
};

export default LoginForm;
