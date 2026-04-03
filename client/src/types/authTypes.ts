export type User = {
  name: string;
  id: string;
};

export type AuthState = {
  user: User;
  token: string;
};

export type AuthContextType = {
  auth: AuthState | null;
  isAuthenticated: boolean;
  login: ({ user, token }: { user: User; token: string }) => void;
  logout: () => void;
};
