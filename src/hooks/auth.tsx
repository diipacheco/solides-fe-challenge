import React, { createContext, useCallback, useContext, useState } from 'react';

import api from '../services/api';

interface SigninCredentials {
  email: string;
  password: string;
}

interface AuthState {
  token: string;
  user: Record<string, unknown>;
}

interface AuthContextData {
  user: Record<string, unknown>;
  signIn(credentials: SigninCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@Solides-Challenge:token');
    const user = localStorage.getItem('@Solides-Challenge:user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('/session', {
      email,
      password,
    });

    const { token, user } = response.data as AuthState;

    localStorage.setItem('@Solides-Challenge:token', token);
    localStorage.setItem('@Solides-Challenge:user', JSON.stringify(user));

    setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@Solides-Challenge:token');
    localStorage.removeItem('@Solides-Challenge:user');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
