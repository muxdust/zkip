"use client";
import { createContext, useEffect } from "react";
import React, { useState } from "react";
import Cookies from "js-cookie";

export const userContext = createContext();

export const UserProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [activeComponent, setActiveComponent] = useState("dashboard");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkToken = () => {
      const token = Cookies.get("zkip-token");
      if (token) {
        setIsLogged(true);
      } else {
        setIsLogged(false);
      }
    };

    checkToken();

    const interval = setInterval(checkToken, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <userContext.Provider
      value={{
        activeComponent,
        setActiveComponent,
        user,
        setUser,
        isLogged,
        setIsLogged,
      }}
    >
      {children}
    </userContext.Provider>
  );
};
