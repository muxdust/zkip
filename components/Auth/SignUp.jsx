"use client";
import React, { useState } from "react";
import { Eye, EyeClosed } from "lucide-react";
import Link from "next/link";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <section className="flex justify-center items-start min-h-screen w-full font-[family-name:var(--font-urbanist-sans)] bg-zinc-900 px-5">
      <div className="w-full max-w-md bg-zinc-800 rounded-lg p-6 border border-zinc-600 mt-10">
        <h2 className="text-4xl text-zinc-100 font-medium text-center mb-6">
          Get Started
          <span className="block font-[family-name:var(--font-instrument-serif)] bg-gradient-to-b from-zinc-100 to-zinc-300 bg-clip-text text-transparent">
            Create your account
          </span>
        </h2>
        <form className="w-full flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-zinc-300 text-lg">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your full name"
              className="w-full rounded-md px-3 py-2 text-zinc-300 outline-none border border-zinc-600 focus:border-rose-500 bg-zinc-700"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="username" className="text-zinc-300 text-lg">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Choose a username"
              className="w-full rounded-md px-3 py-2 text-zinc-300 outline-none border border-zinc-600 focus:border-rose-500 bg-zinc-700"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-zinc-300 text-lg">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full rounded-md px-3 py-2 text-zinc-300 outline-none border border-zinc-600 focus:border-rose-500 bg-zinc-700"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="text-zinc-300 text-lg">
              Password
            </label>
            <div className="flex items-center w-full rounded-md px-3 py-2 text-zinc-300 outline-none border border-zinc-600 bg-zinc-700 focus-within:border-rose-500">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Enter your password"
                className="w-full outline-none bg-transparent"
              />
              <button
                type="button"
                onClick={togglePassword}
                className="focus:outline-none"
              >
                {showPassword ? <EyeClosed size={24} /> : <Eye size={24} />}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="mt-2 px-5 py-2 bg-gradient-to-br from-rose-500 to-rose-700 text-zinc-100 rounded-md transition duration-300 ease-in-out cursor-pointer border border-rose-500 flex items-center justify-center text-lg"
          >
            Sign Up
          </button>
          <div className="flex items-center justify-start gap-2 text-zinc-300 text-md">
            <p>Already have an account? </p>
            <Link
              href="/login"
              className="text-rose-500 hover:text-rose-700 transition duration-300 ease-in-out cursor-pointer underline"
            >
              Login
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignUp;
