"use client";
import React, { useState } from "react";
import { Eye, EyeClosed } from "lucide-react";
import Link from "next/link";
import axios from "axios";
import Bubble from "../ui/Bubble";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bubbleMessage, setBubbleMessage] = useState(null);
  const [bubbleType, setBubbleType] = useState(null);
  const router = useRouter();

  const togglePassword = () => setShowPassword(!showPassword);

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/user/signup", {
        name,
        username,
        email,
        password,
      });

      if (response.status === 200) {
        setBubbleMessage(response.data.message);
        setBubbleType("success");

        setTimeout(() => {
          setBubbleMessage(null);
          router.push("/login");
        }, 2000);
      }
    } catch (error) {
      setBubbleMessage(error.response?.data?.message || "Something went wrong");
      setBubbleType("error");

      setTimeout(() => setBubbleMessage(null), 2000);
    }
  };

  return (
    <section className="flex justify-center items-start min-h-screen w-full font-[family-name:var(--font-urbanist)] bg-zinc-900 px-5">
      <div className="w-full max-w-md bg-zinc-800 rounded-lg p-6 border border-zinc-600 mt-20">
        <h2 className="text-4xl text-zinc-100 font-medium text-center mb-6">
          Get Started
          <span className="block font-[family-name:var(--font-bricolage)] bg-gradient-to-b from-zinc-100 to-zinc-300 bg-clip-text text-transparent">
            Create your account
          </span>
        </h2>
        <form className="w-full flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-lg font-normal text-zinc-100">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your full name"
              className="w-full rounded-md px-3 py-2 text-zinc-300 outline-none border border-zinc-600 focus:border-green-500 bg-zinc-900"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="username"
              className="text-lg font-normal text-zinc-100"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Choose a username"
              className="w-full rounded-md px-3 py-2 text-zinc-300 outline-none border border-zinc-600 focus:border-green-500 bg-zinc-900"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="email"
              className="text-lg font-normal text-zinc-100"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full rounded-md px-3 py-2 text-zinc-300 outline-none border border-zinc-600 focus:border-green-500 bg-zinc-900"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="password"
              className="text-lg font-normal text-zinc-100"
            >
              Password
            </label>
            <div className="flex items-center w-full rounded-md px-3 py-2 text-zinc-300 outline-none border border-zinc-600 bg-zinc-900 focus-within:border-green-500">
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
            onClick={handleSignUp}
            className="px-4 py-2 hover:opacity-90 bg-gradient-to-br from-green-500 to-green-700 text-zinc-100 rounded-md transition duration-300 ease-in-out cursor-pointer border border-green-500 flex items-center justify-center gap-1 mt-2 w-full"
          >
            Sign Up
          </button>
          <div className="flex items-center justify-start gap-2 text-zinc-300 text-md">
            <p>Already have an account?</p>
            <Link
              href="/login"
              className="text-green-500 hover:text-green-700 transition duration-300 ease-in-out cursor-pointer underline"
            >
              Login
            </Link>
          </div>
        </form>
      </div>

      {bubbleMessage && <Bubble message={bubbleMessage} type={bubbleType} />}
    </section>
  );
};

export default SignUp;
