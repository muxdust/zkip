import React from "react";
import { Zap, Shield, ChartColumn } from "lucide-react";

const EverythingYouNeed = () => {
  const data = [
    {
      id: 1,
      title: "Lightning Fast",
      icon: <Zap size={40} />,
      description:
        "Create short links in seconds with our optimised infrastructure.",
    },
    {
      id: 2,
      title: "Secure",
      icon: <Shield size={40} />,
      description: "We take security seriously. Your data is safe with us.",
    },
    {
      id: 3,
      title: "Analytics",
      icon: <ChartColumn size={40} />,
      description: "Track your links and monitor their performance.",
    },
  ];

  return (
    <section className="flex justify-center items-start w-full font-[family-name:var(--font-roboto)] bg-zinc-800 py-10">
      <div className="flex flex-col justify-start items-start w-[95vw] lg:container">
        <h2 className="text-4xl text-zinc-100 font-medium text-center mb-6 self-center">
          Everything You Need
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full justify-start items-stretch">
          {data.map((item) => (
            <div
              className="flex flex-col justify-start items-start w-full p-4 rounded-lg bg-zinc-900 gap-2"
              key={item.id}
            >
              <span className="text-green-500">{item.icon}</span>
              <h3 className="text-2xl font-medium text-zinc-100">
                {item.title}
              </h3>
              <p className="text-lg font-normal text-zinc-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EverythingYouNeed;
