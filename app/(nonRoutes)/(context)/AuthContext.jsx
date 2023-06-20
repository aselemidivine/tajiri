"use client"

import { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const secretKey = "sammybammy";


  const [user, setUser] = useState(JSON.parse(Cookies.get("user") || null));
  const [token, setToken] = useState(Cookies.get("token") || null);

  const handleChange = (user, token) => {
    setUser(user);
    setToken(token);
  };

  const logout = () => {
    fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/logout`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        Cookies.remove("user");
        Cookies.remove("token");
      })
      .catch((error) => {
        console.error(error);
        Cookies.remove("user");
        Cookies.remove("token");
      });
    
  };

  const shouldKick = (e) => {
    if (e.response.data.message) {
      if (e.response.data.message == "Unauthenticated.") {
        Cookies.remove("user");
        Cookies.remove("token");
        window.location.href = "/";
      }
    }
  }

  useEffect(() => {
    Cookies.set("user", JSON.stringify(user), { expires: 365 });
    Cookies.set("token", token, { expires: 365 });
  }, [user, token]);

  let contextData = {
    user: user,
    token: token,
    handleChange,
    logout,
    shouldKick,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
