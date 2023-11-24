"use client";

import { AuthUser, Customer } from "@/types";
import { useState, useContext, createContext } from "react";
import { useRouter } from "next/navigation";
import { getUser, loginUser } from "@/services/users";

type AuthContextProps = {
  authUser: Customer | null;
  isAuth: boolean;
  login: (user: AuthUser) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextProps | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const [authUser, setAuthUser] = useState<Customer | null>(() => {
    const storedUser = sessionStorage.getItem("authUser");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const [isAuth, setIsAuth] = useState(() => {
    const storedUser = sessionStorage.getItem("authUser");
    return storedUser ? true : false;
  });

  const setAuthUserSate = (user: Customer | null) => {
    setAuthUser(user);
    sessionStorage.setItem("authUser", JSON.stringify(user));
  };

  const login = (user: AuthUser) => {
    async function fetchUser() {
      try {
        await loginUser(user);
        setIsAuth(true);
      } catch (error) {
        console.error("Error al obtener usuario:", error);
      }
    }

    fetchUser();
    setFetched();
  };

  const setFetched = async () => {
    try {
      const user = await getUser();
      setAuthUserSate(user);
    } catch (error) {
      console.error("Error al obtener usuario:", error);
    }
  };

  const logout = () => {
    setAuthUser(null);
    setIsAuth(false);
  };

  return (
    <AuthContext.Provider
      value={{
        authUser,
        isAuth,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth should be into the AuthProvider");
  }

  return context;
}
