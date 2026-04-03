import { type AuthContextType } from "../../types/authTypes";
import { createContext, useContext } from "react";

export const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context)
    throw new Error("useAuth hook cannot be used outside AuthProvider");

  return context;
};
