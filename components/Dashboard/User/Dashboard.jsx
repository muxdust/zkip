"use client";
import React, { useContext } from "react";
import Sidebar from "./Sidebar";
import { DashboardContext } from "./DashboardContext";
import DashboardComp from "./DashboardComp";
import LinksComp from "./Links";
import Settings from "./Settings";
import Analytics from "./Analytics";

const Dashboard = () => {
  const { activeComponent } = useContext(DashboardContext);

  return (
    <div className="flex flex-col md:flex-row font-[family-name:var(--font-roboto)]">
      <Sidebar />
      <main className="flex-1 p-4">
        {activeComponent === "dashboard" && <DashboardComp />}
        {activeComponent === "links" && <LinksComp />}
        {activeComponent === "analytics" && <Analytics />}
        {activeComponent === "settings" && <Settings />}
      </main>
    </div>
  );
};

export default Dashboard;
