import React, { useEffect, useState } from "react";

const Bubble = ({ message, type }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`${
        type === "error"
          ? "bg-gradient-to-br from-red-500 to-red-600 border-red-500"
          : "bg-gradient-to-br from-green-500 to-green-600 border-green-500"
      } p-3 rounded-md border text-zinc-100 text-center fixed bottom-5 left-1/2 transform -translate-x-1/2 transition-opacity duration-500 px-3 py-2`}
    >
      {message}
    </div>
  );
};

export default Bubble;
