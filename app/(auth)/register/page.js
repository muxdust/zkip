import React from "react";
import SignUp from "@/components/Auth/SignUp";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";

const SignUpPage = () => {
  return (
    <>
      <Navbar />
      <main>
        <SignUp />
      </main>
      <Footer />
    </>
  );
};

export default SignUpPage;
