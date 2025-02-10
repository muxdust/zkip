"use client";
import React, { useState, useContext } from "react";
import {
  Menu,
  X,
  Home,
  Settings,
  LinkIcon,
  ChartColumn,
  LogOutIcon,
} from "lucide-react";
import Link from "next/link";
import { DashboardContext } from "./DashboardContext";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { activeComponent, setActiveComponent } = useContext(DashboardContext);

  const changeActiveComponent = (component) => {
    setActiveComponent(component);
    setIsOpen(false);
  };

  const sidebarItems = [
    { icon: <Home size={24} />, label: "Dashboard" },
    { icon: <LinkIcon size={24} />, label: "Links" },
    { icon: <ChartColumn size={24} />, label: "Analytics" },
    { icon: <Settings size={24} />, label: "Settings" },
  ];

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const renderSidebarItems = () => (
    <ul className="flex flex-col gap-4">
      {sidebarItems.map((item, index) => (
        <li key={index}>
          <button
            onClick={() => changeActiveComponent(item.label.toLowerCase())}
            className="w-full flex items-center gap-2 px-3 py-2 cursor-pointer rounded-md text-lg font-medium text-zinc-100 bg-zinc-900 hover:bg-zinc-800 border border-zinc-900 transition-colors duration-300 ease-in-out"
          >
            {item.icon} {item.label}
          </button>
        </li>
      ))}
    </ul>
  );

  return (
    <header className="flex font-[family-name:var(--font-urbanist-sans)]">
      {/* Desktop Sidebar */}
      <nav className="hidden lg:flex flex-col w-64 h-screen bg-zinc-900 p-4">
        <Link
          href="/dashboard"
          className="text-white text-2xl font-medium mb-6"
        >
          zkip
        </Link>
        {renderSidebarItems()}
        <button className="w-full mt-auto flex items-center gap-2 px-3 py-2 cursor-pointer rounded-md text-lg font-medium text-white bg-red-600 hover:bg-red-700 transition-colors duration-300 ease-in-out">
          <LogOutIcon size={24} /> Logout
        </button>
      </nav>

      {/* Mobile Sidebar */}
      <div className="lg:hidden flex flex-col w-full bg-zinc-900 px-4 py-2">
        <div className="flex justify-between items-center">
          <Link href="/dashboard" className="text-white text-2xl font-medium">
            zkip
          </Link>
          <button onClick={toggleSidebar} className="text-white cursor-pointer">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        {isOpen && (
          <div className="mt-4">
            {renderSidebarItems()}
            <button className="w-full flex items-center gap-2 px-3 py-2 cursor-pointer rounded-md text-lg font-medium text-white bg-red-600 hover:bg-red-700 transition-colors duration-300 ease-in-out mt-4">
              <LogOutIcon size={24} /> Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Sidebar;
