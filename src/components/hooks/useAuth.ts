// useAuth.ts
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

interface Credentials {
    email: string;
    password: string;
}

/**
 * Custom hook to access authentication state and functions (login/logout).
 */
const useAuth = () => {
    const { authState, login, logout } = useContext(AuthContext);

    const authenticateUser = async (credentials: Credentials): Promise<void> => {
        // Placeholder for API call for login/signup
        // Example:
        // const response = await fetch('/api/login', { method: 'POST', body: JSON.stringify(credentials) });
        // const data = await response.json();
        // login(data);
    };

    return { authState, login, logout, authenticateUser };
};

export default useAuth;
