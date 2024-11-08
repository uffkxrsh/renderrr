// AuthTabs.tsx
import React, { useState } from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

/**
 * Component to switch between Login and Signup forms using tabs.
 */
const AuthTabs: React.FC = () => {
    // State to toggle between Login and Signup forms
    const [isLogin, setIsLogin] = useState<boolean>(true);

    return (
        <div className="auth-tabs">
            <div className="tab-selector">
                <button onClick={() => setIsLogin(true)} className={isLogin ? 'active' : ''}>Login</button>
                <button onClick={() => setIsLogin(false)} className={!isLogin ? 'active' : ''}>Sign Up</button>
            </div>
            {isLogin ? <LoginForm /> : <SignupForm />}
        </div>
    );
};

export default AuthTabs;
