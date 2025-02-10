"use client";
import { createContext } from "react";
import React, { useState } from "react";

export const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const [activeComponent, setActiveComponent] = useState("dashboard");
  const [user, setUser] = useState(null);

  return (
    <DashboardContext.Provider
      value={{ activeComponent, setActiveComponent, user, setUser }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
