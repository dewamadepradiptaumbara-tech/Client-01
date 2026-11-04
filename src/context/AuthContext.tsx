/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { getMyProfile, logoutUser, type PeranPengguna } from '../services/Api';

export interface UserData {
  id: string;
  username: string | null;
  email: string;
  role: PeranPengguna;
  panitiaId?: string | null;
  namaLengkap?: string | null;
  noHp?: string | null;
  avatarUrl?: string | null;
}

interface AuthContextType {
  user: UserData | null;
  token: string | null;
  isLoading: boolean;
  login: (token: string, user: UserData) => void;
  logout: () => Promise<void>;
  refreshProfile: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserData | null>(() => {
    const storedUser = localStorage.getItem("user_data");
    if (storedUser) {
      try {
        return JSON.parse(storedUser);
      } catch (error) {
        void error;
        return null;
      }
    }
    return null;
  });

  const [token, setToken] = useState<string | null>(() => {
    return localStorage.getItem("auth_token");
  });

  const [isLoading, setIsLoading] = useState<boolean>(() => {
    return !!localStorage.getItem("auth_token") && !localStorage.getItem("user_data");
  });

  useEffect(() => {
    const initAuth = async () => {
      const storedToken = localStorage.getItem("auth_token");
      if (!storedToken) {
        setIsLoading(false);
        return;
      }

      try {
        const profile = await getMyProfile();
        const peran = String(profile.role).toLowerCase() as PeranPengguna;
        const userData: UserData = {
          id: profile.id,
          username: profile.username,
          email: profile.email,
          role: peran,
          panitiaId: profile.panitiaId,
          namaLengkap: profile.namaLengkap,
          noHp: profile.noHp,
          avatarUrl: profile.avatarUrl,
        };
        setUser(userData);
        localStorage.setItem("user_data", JSON.stringify(userData));
        localStorage.setItem("user_role", peran);
      } catch (error) {
        void error;
        localStorage.removeItem("auth_token");
        localStorage.removeItem("user_role");
        localStorage.removeItem("user_data");
        setToken(null);
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };

    initAuth();
  }, []);

  const login = (newToken: string, newUser: UserData) => {
    const peran = String(newUser.role).toLowerCase() as PeranPengguna;
    const formattedUser: UserData = {
      ...newUser,
      role: peran,
    };
    localStorage.setItem("auth_token", newToken);
    localStorage.setItem("user_role", peran);
    localStorage.setItem("user_data", JSON.stringify(formattedUser));

    setToken(newToken);
    setUser(formattedUser);
  };

  const logout = async () => {
    try {
      await logoutUser();
    } catch (error) {
      void error;
    } finally {
      localStorage.removeItem("auth_token");
      localStorage.removeItem("user_role");
      localStorage.removeItem("user_data");

      setToken(null);
      setUser(null);
    }
  };

  const refreshProfile = async () => {
    try {
      const profile = await getMyProfile();
      const peran = String(profile.role).toLowerCase() as PeranPengguna;
      const userData: UserData = {
        id: profile.id,
        username: profile.username,
        email: profile.email,
        role: peran,
        panitiaId: profile.panitiaId,
        namaLengkap: profile.namaLengkap,
        noHp: profile.noHp,
        avatarUrl: profile.avatarUrl,
      };
      setUser(userData);
      localStorage.setItem("user_data", JSON.stringify(userData));
      localStorage.setItem("user_role", peran);
    } catch (error) {
      void error;
    }
  };

  return (
    <AuthContext.Provider value={{ user, token, isLoading, login, logout, refreshProfile }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth harus digunakan di dalam AuthProvider");
  }
  return context;
};

export default AuthContext;