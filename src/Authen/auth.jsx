import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {jwtDecode} from "jwt-decode";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // 🔹 run once ตอน refresh
  useEffect(() => {
    const storedToken = localStorage.getItem("token");

    if (storedToken) {
      try {
        const decoded = jwtDecode(storedToken);

        // check token expire
        if (decoded.exp * 1000 < Date.now()) {
          localStorage.removeItem("token");
          setUser(null);
          setToken(null);
        } else {
          setUser(decoded);
          setToken(storedToken);
        }
      } catch (err) {
        localStorage.removeItem("token");
        setUser(null);
        setToken(null);
      }
    }

    setLoading(false);
  }, []);

  // 🔹 login
  const login = (token, userData) => {
    localStorage.setItem("token", token);
    setToken(token);
    setUser(userData);
  };

  // 🔹 logout
  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
    navigate("/");
  };

  if (loading) return null; // หรือ spinner

  return (
    <AuthContext.Provider value={{ token, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
