import React from "react";
import Login from "@/components/Auth/Login";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";

const LoginPage = () => {
  return (
    <>
    <Navbar />
      <main>
        <Login />
      </main>
      <Footer />
    </>
  );
};

export default LoginPage;
