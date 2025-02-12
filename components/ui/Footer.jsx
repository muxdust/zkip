import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex justify-center items-center w-full py-2 bg-zinc-950">
      <div className="flex justify-center items-center gap-2 text-sm">
        <span className="text-zinc-400">Made with ❤️ by</span>
        <Link
          href="https://priyanshuchahar.vercel.app"
          className="underline text-green-500"
        >
          <p>Priyanshu</p>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
