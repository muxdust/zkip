import React from "react";
import { ArrowRight, Link } from "lucide-react";

const Hero = () => {
  return (
    <section className="flex justify-center items-center min-h-screen w-full bg-gradient-to-br from-zinc-800 to-zinc-900 font-[family-name:var(--font-urbanist-sans)] relative">
      <div className="absolute h-20 w-32 bg-rose-600 rounded-full flex justify-center items-center z-0 blur-[100px] top-0"></div>
      <div className="flex flex-col justify-center items-center text-center w-full max-w-2xl px-4">
        <h2 className="text-5xl md:text-6xl text-zinc-100 font-medium flex flex-col items-center justify-center md:gap-2 gap-1">
          <span>Zkip the clutter</span>
          <span className="font-[family-name:var(--font-instrument-serif)] bg-gradient-to-b from-zinc-100 to-zinc-300 bg-clip-text text-transparent">
            Link smarter
          </span>
        </h2>
        <p className="text-lg md:text-xl text-zinc-300 mt-4">
          {`"Fast, simple, and reliable link shortening for everyone, anywhere, anytime."`}
        </p>
        <button className="mt-6 px-5 py-2 bg-gradient-to-br from-rose-500 to-rose-700 text-zinc-100 rounded-full transition duration-300 ease-in-out cursor-pointer border border-rose-500 flex items-center justify-center">
          Get Started <ArrowRight size={24} className="inline-block ml-2 p-0.5 rounded-full bg-white text-rose-600" />
        </button>
        <div className="mt-8 text-zinc-300 text-sm w-full max-w-lg bg-zinc-800 rounded-lg p-1 shadow-lg border border-zinc-600">
          <div className="w-full h-8 bg-zinc-700 mb-2 rounded-md flex items-center px-4">
            <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
            <span className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
          </div>
          <div className="px-4 pb-4 flex flex-row justify-between items-center gap-2">
            <div className="w-full h-9 bg-zinc-700 rounded flex justify-start items-center">
              <p className="text-sm text-zinc-300 ml-2">
                {`Paste your link here .....`}
              </p>
            </div>
            <div className="w-1/2 h-9 bg-zinc-700 rounded flex justify-center items-center">
              <p className="text-md text-zinc-300 flex items-center gap-0">
                Short
                <Link size={16} className="inline-block ml-2" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
