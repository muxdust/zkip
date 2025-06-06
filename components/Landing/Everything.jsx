import React from "react";
import {
  Zap,
  Shield,
  ChartColumn,
  Calendar,
  Globe2Icon,
  DollarSign,
} from "lucide-react";

const EverythingYouNeed = () => {
  const data = [
    {
      id: 1,
      title: "Lightning Fast",
      icon: <Zap size={32} className="bg-white p-0.5 rounded-lg" />,
      description:
        "Create short links in seconds with our optimised infrastructure.",
    },
    {
      id: 2,
      title: "Secure",
      icon: <Shield size={32} className="bg-white p-0.5 rounded-lg" />,
      description: "We take security seriously. Your data is safe with us.",
    },
    {
      id: 3,
      title: "Analytics",
      icon: <ChartColumn size={32} className="bg-white p-0.5 rounded-lg" />,
      description: "Track your links and monitor their performance.",
    },
    {
      id: 4,
      title: "Free",
      icon: <DollarSign size={32} className="bg-white p-0.5 rounded-lg" />,
      description: "Zkip is free to use.",
    },
    {
      id: 5,
      title: "Global Reach",
      icon: <Globe2Icon size={32} className="bg-white p-0.5 rounded-lg" />,
      description: "Your links are accessible from anywhere in the world.",
    },
    {
      id: 6,
      title: "Link Expiry",
      icon: <Calendar size={32} className="bg-white p-0.5 rounded-lg" />,
      description: "Set an expiry date for your links.",
    },
  ];

  return (
    <section className="flex justify-center items-start w-full font-[family-name:var(--font-urbanist)] bg-zinc-900 py-10">
      <div className="flex flex-col justify-start items-start w-[95vw] lg:container">
        <h2 className="text-4xl text-zinc-100 font-medium text-center mb-6 self-center font-[family-name:var(--font-bricolage)]">
          Everything You Need
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full justify-start items-stretch">
          {data.map((item) => (
            <div
              className="flex flex-col justify-start items-start w-full p-4 rounded-lg bg-zinc-950 gap-2"
              key={item.id}
            >
              <span className="text-orange-500">{item.icon}</span>
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
