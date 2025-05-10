"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import axios from "axios";

const page = () => {
  const [error, setError] = useState(null);
  const { shortKey } = useParams();

  const fetchOriginalUrl = async () => {
    try {
      const response = await axios.get(`/api/link/get?shortKey=${shortKey}`);

      if (response.status === 200) {
        window.location.replace(response.data.longUrl);
      }
    } catch (error) {
      setError(error.response?.data?.message || "Something went wrong");
    }
  };

  useEffect(() => {
    fetchOriginalUrl();
  }, [shortKey]);

  return (
    <p className="text-xl text-center text-zinc-300">
      {error || "Redirecting..."}
    </p>
  );
};

export default page;
