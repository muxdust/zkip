"use client";
import { createContext, useEffect } from "react";
import React, { useState } from "react";
import Cookies from "js-cookie";

export const userContext = createContext();

export const UserProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);

  const getToken = () => {
    const authToken = Cookies.get("auth-token");

    if (authToken) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  };

  useEffect(() => {
    getToken();
  }, []);

  return (
    <userContext.Provider
      value={{
        isLogged,
        setIsLogged,
      }}
    >
      {children}
    </userContext.Provider>
  );
};
