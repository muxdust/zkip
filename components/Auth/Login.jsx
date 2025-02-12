"use client";
import React, { useState } from "react";
import { Eye, EyeClosed } from "lucide-react";
import Link from "next/link";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <section className="flex justify-center items-start min-h-screen w-full font-[family-name:var(--font-roboto)] bg-zinc-900 px-5">
      <div className="w-full max-w-md bg-zinc-800 rounded-lg p-6 border border-zinc-600 mt-10">
        <h2 className="text-4xl text-zinc-100 font-medium text-center mb-6">
          Welcome back!
          <span className="block font-[family-name:var(--font-instrument-serif)] bg-gradient-to-b from-zinc-100 to-zinc-300 bg-clip-text text-transparent">
            Login to your account
          </span>
        </h2>
        <form className="w-full flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-zinc-300 text-lg">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full rounded-md px-3 py-2 text-zinc-300 outline-none border border-zinc-600 focus:border-green-500 bg-zinc-900"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="text-zinc-300 text-lg">
              Password
            </label>
            <div className="flex items-center w-full rounded-md px-3 py-2 text-zinc-300 outline-none border border-zinc-600 bg-zinc-900 focus-within:border-green-500">
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
            className="px-4 py-2 bg-gradient-to-br from-green-500 to-green-700 text-zinc-100 rounded-md transition duration-300 ease-in-out cursor-pointer border border-green-500 flex items-center justify-center gap-1 mt-2 w-full"
          >
            Login
          </button>
          <div className="flex items-center justify-start gap-2 text-zinc-300 text-md">
            <p>Don't have an account? </p>
            <Link
              href="/register"
              className=" text-green-500 hover:text-green-700 transition duration-300 ease-in-out cursor-pointer underline"
            >
              Register
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
