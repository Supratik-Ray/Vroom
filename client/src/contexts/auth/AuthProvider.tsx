import { useEffect, useState } from "react";
import { AuthContext } from "./useAuth";
import { type AuthState } from "../../types/authTypes";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [auth, setAuth] = useState<AuthState | null>(() => {
    const item = localStorage.getItem("authState");
    return item ? JSON.parse(item) : null;
  });

  const isAuthenticated = !!auth;

  useEffect(() => {
    if (auth) {
      localStorage.setItem("authState", JSON.stringify(auth));
    } else {
      localStorage.removeItem("authState");
    }
  }, [auth]);

  const login = (auth: AuthState) => {
    setAuth(auth);
  };
  const logout = () => {
    setAuth(null);
  };
  return (
    <AuthContext.Provider value={{ auth, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
