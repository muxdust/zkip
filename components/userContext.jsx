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
    const authToken = Cookies.get("auth-token");

    if (authToken) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
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
