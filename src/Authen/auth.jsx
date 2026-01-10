import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext(null);
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  

  const login = (token, userData) => {
    setToken(token);
    setUser(userData);
    localStorage.setItem("user",JSON.stringify(userData));
    localStorage.setItem("token",token);
    
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
    navigate("/")
  };

  return (
    <AuthContext.Provider value={{ token, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
