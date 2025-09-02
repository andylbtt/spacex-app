import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("session");
    if (saved) {
      const { user } = JSON.parse(saved);
      setIsAuthenticated(true);
      setUser(user);
    }
  }, []);

  const login = (email) => {
    setIsAuthenticated(true);
    const payload = { user: { email } };
    setUser(payload.user);
    localStorage.setItem("session", JSON.stringify(payload));
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem("session");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
