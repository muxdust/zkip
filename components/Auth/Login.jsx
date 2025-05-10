"use client";
import React, { useState } from "react";
import { Eye, EyeClosed } from "lucide-react";
import Link from "next/link";
import axios from "axios";
import Bubble from "../ui/Bubble";
import { useRouter } from "next/navigation";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bubbleMessage, setBubbleMessage] = useState(null);
  const [bubbleType, setBubbleType] = useState(null);
  const router = useRouter();

  const togglePassword = () => setShowPassword(!showPassword);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/user/login", { email, password });

      if (response.status === 200) {
        setBubbleMessage(response.data.message);
        setBubbleType("success");

        setTimeout(() => {
          setBubbleMessage(null);
          router.push("/dashboard");
        }, 2000);
      }
    } catch (error) {
      setBubbleMessage(error.response?.data?.message || "Something went wrong");
      setBubbleType("error");

      setTimeout(() => setBubbleMessage(null), 2000);
    }
  };

  return (
    <section className="flex justify-center items-start min-h-screen w-full font-[family-name:var(--font-urbanist)] bg-zinc-950 px-5">
      <div className="w-full max-w-md bg-zinc-900 rounded-lg p-6 border border-zinc-600 mt-20">
        <h2 className="text-4xl text-zinc-100 font-medium text-center mb-6">
          Welcome back!
          <span className="block font-[family-name:var(--font-bricolage)] bg-gradient-to-b from-zinc-100 to-zinc-300 bg-clip-text text-transparent">
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
              className="w-full rounded-md px-3 py-2 text-zinc-300 outline-none border border-zinc-600 focus:border-orange-500 bg-zinc-950"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="text-zinc-300 text-lg">
              Password
            </label>
            <div className="flex items-center w-full rounded-md px-3 py-2 text-zinc-300 outline-none border border-zinc-600 bg-zinc-950 focus-within:border-orange-500">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Enter your password"
                className="w-full outline-none bg-transparent"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
            onClick={handleLogin}
            className="px-4 py-2 hover:opacity-90 bg-gradient-to-br from-orange-500 to-orange-700 text-zinc-100 rounded-md transition duration-300 ease-in-out cursor-pointer border border-orange-500 flex items-center justify-center gap-1 mt-2 w-full"
          >
            Login
          </button>
          <div className="flex items-center justify-start gap-2 text-zinc-300 text-md">
            <p>Don't have an account?</p>
            <Link
              href="/register"
              className=" text-orange-500 hover:text-orange-700 transition duration-300 ease-in-out cursor-pointer underline"
            >
              Register
            </Link>
          </div>
        </form>
      </div>

      {bubbleMessage && <Bubble message={bubbleMessage} type={bubbleType} />}
    </section>
  );
};

export default Login;
