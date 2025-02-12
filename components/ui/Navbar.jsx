"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="flex justify-center items-center w-full py-2 bg-zinc-900 font-[family-name:var(--font-roboto)]">
      <nav className="hidden lg:flex justify-between items-center w-[95vw] lg:container">
        <Link
          href="/"
          className="text-2xl font-medium text-zinc-200 cursor-pointer"
        >
          <p>Zkip</p>
        </Link>
        <ul className="flex justify-center items-center space-x-4">
          <li>
            <Link href="/">
              <p className="text-zinc-200 cursor-pointer hover:text-green-500">
                Home
              </p>
            </Link>
          </li>
          <li>
            <Link href="/">
              <p className="text-zinc-200 cursor-pointer hover:text-green-500">
                Contact
              </p>
            </Link>
          </li>
          <li>
            <Link href="/">
              <p className="text-zinc-200 cursor-pointer hover:text-green-500">
                About
              </p>
            </Link>
          </li>
        </ul>
        <button className="px-4 py-2 bg-gradient-to-br from-green-500 to-green-700 text-zinc-100 rounded-full transition duration-300 ease-in-out cursor-pointer border border-green-500 flex items-center justify-center gap-1">
          <Link href="/login">Login</Link>
        </button>
      </nav>
      <nav className="flex flex-col lg:hidden justify-start items-center w-[95vw] lg:container">
        <div className="flex justify-between items-center w-full">
          <Link
            href="/"
            className="text-2xl font-medium text-zinc-200 cursor-pointer"
          >
            <p>Zkip</p>
          </Link>
          <button onClick={toggleMenu} className="focus:outline-none">
            <Menu size={24} className="text-zinc-200" />
          </button>
        </div>
        {showMenu && (
          <div className="w-full bg-zinc-900 h-screen z-50 relative">
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 focus:outline-none"
            >
              <X size={24} className="text-zinc-200" />
            </button>
            <ul className="flex flex-col justify-center items-center space-y-4">
              <li>
                <Link href="/">
                  <p className="text-zinc-200 cursor-pointer hover:text-green-500">
                    Home
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <p className="text-zinc-200 cursor-pointer hover:text-green-500">
                    Contact
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <p className="text-zinc-200 cursor-pointer hover:text-green-500">
                    About
                  </p>
                </Link>
              </li>
              <li>
                <button className="px-4 py-2 bg-gradient-to-br from-green-500 to-green-700 text-zinc-100 rounded-full transition duration-300 ease-in-out cursor-pointer border border-green-500 flex items-center justify-center gap-1">
                  <Link href="/login">Login</Link>
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
