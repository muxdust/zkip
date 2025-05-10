import React from "react";

const Analytics = () => {
  const userLinks = [
    {
      id: 1,
      title: "Google",
      originalUrl: "https://www.google.com",
      shortUrl: "zkip.com/abc123",
      clicks: 100,
      uniqueClicks: 100,
    },
    {
      id: 2,
      title: "Facebook",
      originalUrl: "https://www.facebook.com",
      shortUrl: "zkip.com/xyz789",
      clicks: 200,
      uniqueClicks: 180,
    },
    {
      id: 3,
      title: "Twitter",
      originalUrl: "https://www.twitter.com",
      shortUrl: "zkip.com/def456",
      clicks: 300,
      uniqueClicks: 250,
    },
    {
      id: 4,
      title: "Instagram",
      originalUrl: "https://www.instagram.com",
      shortUrl: "zkip.com/ghi789",
      clicks: 400,
      uniqueClicks: 350,
    },
    {
      id: 5,
      title: "LinkedIn",
      originalUrl: "https://www.linkedin.com",
      shortUrl: "zkip.com/jkl012",
      clicks: 500,
      uniqueClicks: 450,
    },
  ];

  return (
    <section className="flex justify-start items-start w-full min-h-screen">
      <div className="flex flex-col justify-start items-start w-full h-full">
        <h2 className="text-3xl font-medium text-zinc-100 font-[family-name:var(--font-bricolage)]">Analytics</h2>
        <div className="flex flex-col justify-start items-start w-full p-4 rounded-lg bg-zinc-900 mt-4">
          <h3 className="text-2xl font-normal text-zinc-100">
            Time Based Analytics
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full mt-4">
            <div className="flex flex-col justify-start items-start w-full p-4 rounded-lg bg-zinc-950">
              <h3 className="text-xl font-normal text-zinc-100">Today</h3>
              <p className="text-md font-normal text-zinc-300 flex justify-between items-center w-full mt-2">
                <span>Total Clicks</span>
                <span>100</span>
              </p>
              <p className="text-md font-normal text-zinc-300 flex justify-between items-center w-full mt-2">
                <span>Unique Clicks</span>
                <span>100</span>
              </p>
            </div>
            <div className="flex flex-col justify-start items-start w-full p-4 rounded-lg bg-zinc-950">
              <h3 className="text-xl font-normal text-zinc-100">This Week</h3>
              <p className="text-md font-normal text-zinc-300 flex justify-between items-center w-full mt-2">
                <span>Total Clicks</span>
                <span>1200</span>
              </p>
              <p className="text-md font-normal text-zinc-300 flex justify-between items-center w-full mt-2">
                <span>Unique Clicks</span>
                <span>1100</span>
              </p>
            </div>
            <div className="flex flex-col justify-start items-start w-full p-4 rounded-lg bg-zinc-950">
              <h3 className="text-xl font-normal text-zinc-100">This Month</h3>
              <p className="text-md font-normal text-zinc-300 flex justify-between items-center w-full mt-2">
                <span>Total Clicks</span>
                <span>3300</span>
              </p>
              <p className="text-md font-normal text-zinc-300 flex justify-between items-center w-full mt-2">
                <span>Unique Clicks</span>
                <span>3100</span>
              </p>
            </div>
          </div>
        </div>
        <h2 className="text-2xl font-normal text-zinc-100 mt-4">
          Top Performing Links
        </h2>
        <div className="w-full mt-4 overflow-x-auto rounded-lg">
          <table className="w-full text-left">
            <thead className="bg-zinc-900">
              <tr>
                <th className="p-4 text-zinc-100 font-medium text-lg">
                  Original URL
                </th>
                <th className="p-4 text-zinc-100 font-medium text-lg">
                  Short URL
                </th>
                <th className="p-4 text-zinc-100 font-medium text-lg">
                  Total Clicks
                </th>
                <th className="p-4 text-zinc-100 font-medium text-lg">
                  Unique Clicks
                </th>
              </tr>
            </thead>
            <tbody>
              {userLinks.map((link, index) => (
                <tr key={index} className=" border-b border-zinc-700">
                  <td className="p-4 text-zinc-300">{link.originalUrl}</td>
                  <td className="p-4 text-zinc-300">{link.shortUrl}</td>
                  <td className="p-4 text-zinc-300">{link.clicks}</td>
                  <td className="p-4 text-zinc-300">{link.uniqueClicks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Analytics;
