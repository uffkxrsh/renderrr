// AuthContainer.tsx
import React from 'react';
import AuthTabs from './AuthTabs';

/**
 * Main container for the authentication page layout.
 * Handles the overall structure, with a left pane for branding
 * and a right pane for the auth forms (login/signup).
 */
const AuthContainer: React.FC = () => (
    <div className="auth-container">
        <div className="auth-left-pane">
            {/* Logo or Illustration can be placed here */}
        </div>
        <div className="auth-right-pane">
            <AuthTabs />
        </div>
    </div>
);

export default AuthContainer;
