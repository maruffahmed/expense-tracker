import { useLocalStorage } from "@uidotdev/usehooks";
import { createContext, useCallback, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";

type AuthContextType = {
  token: string | null;
  login: (token: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useLocalStorage<string | null>("token", undefined);
  const navigate = useNavigate();

  const login = useCallback(
    (token: string) => {
      setToken(token);
      navigate("/", { replace: true });
    },
    [navigate, setToken]
  );

  // call this function to sign out logged in user
  const logout = useCallback(() => {
    setToken(null);
    navigate("/login", { replace: true });
  }, [navigate, setToken]);

  const value = useMemo(
    () => ({
      token,
      login,
      logout,
    }),
    [login, logout, token]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  return useContext(AuthContext) as AuthContextType;
};
