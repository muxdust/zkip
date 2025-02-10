"use client";
import React, { useContext } from "react";
import Sidebar from "./Sidebar";
import { DashboardContext } from "./DashboardContext";

const Dashboard = () => {
  const { activeComponent } = useContext(DashboardContext);

  return (
    <div className="flex flex-col lg:flex-row">
      <Sidebar />
      <main className="flex-1 p-4">
        {activeComponent === "dashboard" && <h1>Dashboard</h1>}
        {activeComponent === "links" && <h1>Links</h1>}
        {activeComponent === "analytics" && <h1>Analytics</h1>}
        {activeComponent === "settings" && <h1>Settings</h1>}
      </main>
    </div>
  );
};

export default Dashboard;
