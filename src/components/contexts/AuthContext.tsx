// AuthContext.tsx
import React, { createContext, useState, ReactNode } from 'react';

interface AuthState {
    token: string | null;
}

interface AuthContextProps {
    authState: AuthState;
    login: (data: AuthState) => void;
    logout: () => void;
}

const defaultAuthState: AuthState = { token: null };

export const AuthContext = createContext<AuthContextProps>({
    authState: defaultAuthState,
    login: () => {},
    logout: () => {},
});

interface AuthProviderProps {
    children: ReactNode;
}

/**
 * Context provider for managing authentication state and login/logout functions.
 */
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [authState, setAuthState] = useState<AuthState>(defaultAuthState);

    const login = (data: AuthState) => setAuthState(data);
    const logout = () => setAuthState({ token: null });

    return (
        <AuthContext.Provider value={{ authState, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
