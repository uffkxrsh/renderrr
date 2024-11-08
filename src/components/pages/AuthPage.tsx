// AuthPage.tsx
import React from 'react';
import AuthContainer from '../components/Auth/AuthContainer';
import { supabase } from '../supabaseClient'; // Import your Supabase client

/**
 * Main authentication page component, renders the AuthContainer and Google OAuth button.
 */
const AuthPage: React.FC = () => {
    
    // Function to handle Google OAuth login
    const handleGoogleLogin = async () => {
        const { error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
        });

        if (error) {
            console.error("Google login error:", error.message);
        }
    };

    return (
        <div className="auth-page">
            <AuthContainer />
            
            {/* Google OAuth Button */}
            <div className="oauth-container">
                <button className="oauth-button google" onClick={handleGoogleLogin}>
                    Sign in with Google
                </button>
            </div>
        </div>
    );
};

export default AuthPage;
