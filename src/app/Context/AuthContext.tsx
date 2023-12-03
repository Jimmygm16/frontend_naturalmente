"use client";

import { AuthUser, Customer } from "@/types";
import { useState, useContext, createContext } from "react";
import { getUser, loginUser, logoutUser } from "@/services/users";
import { useRouter } from "next/navigation";
import { checkTokenValidity } from "@/services/auth";

type AuthContextProps = {
  authUser: Customer | null;
  isAuth: boolean;
  login: (user: AuthUser) => void;
  logout: () => void;
  redirectOnMissingAuth: () => void;
};

const AuthContext = createContext<AuthContextProps | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  checkTokenValidity();
  const router = useRouter();

  const [authUser, setAuthUser] = useState<Customer | null>(() => {
    const storedUser = localStorage.getItem("authUser");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const [isAuth, setIsAuth] = useState(() => {
    const storedIsAuth = localStorage.getItem("authUser");
    return storedIsAuth ? true : false;
  });

  const setAuthUserState = (user: Customer | null) => {
    setAuthUser(user);
    if (user) {
      setIsAuth(true);
      localStorage.setItem("authUser", JSON.stringify(user));
    } else {
      setIsAuth(false);
      localStorage.removeItem("authUser");
    }
  };

  const login = (user: AuthUser) => {
    async function fetchUser() {
      try {
        await loginUser(user);
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
      setAuthUserState(user);
    } catch (error) {
      console.error("Error al obtener usuario:", error);
    }
  };

  const logout = () => {
    async function logOut() {
      try {
        await logoutUser().then(() => {
          setAuthUserState(null);
        });
      } catch (error) {
        console.error("Error al cerrar sesión:", error);
      }
    }

    logOut();
  };

  const redirectOnMissingAuth = () => {
    if (!isAuth) {
      router.push("/login");
    }
  };

  return (
    <AuthContext.Provider
      value={{
        authUser,
        isAuth,
        login,
        logout,
        redirectOnMissingAuth,
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
