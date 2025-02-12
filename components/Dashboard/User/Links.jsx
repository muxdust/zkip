import React from "react";
import { Copy, Trash2, SendHorizontal } from "lucide-react";

const LinksComp = () => {
  const userLinks = [
    {
      originalUrl: "https://example.com/very/long/url",
      shortUrl: "zkip.com/abc123",
      clicks: 42,
    },
    {
      originalUrl: "https://another-example.com/page",
      shortUrl: "zkip.com/xyz789",
      clicks: 58,
    },
    {
      originalUrl: "https://yet-another-example.com/long/url",
      shortUrl: "zkip.com/def456",
      clicks: 32,
    },
    {
      originalUrl: "https://last-example.com/long/url",
      shortUrl: "zkip.com/ghi789",
      clicks: 12,
    },
  ];

  return (
    <section className="flex justify-start items-start w-full min-h-screen">
      <div className="flex flex-col justify-start items-start w-full h-full">
        <div className="flex flex-col justify-start items-start w-full lg:max-w-2xl mt-4 p-4 rounded-lg bg-zinc-800">
          <h3 className="text-2xl font-medium text-zinc-100">
            Create a new link
          </h3>
          <form className="flex justify-between items-center w-full mt-4 gap-2">
            <input
              type="url"
              placeholder="Paste your link here ....."
              className="w-full rounded-md px-3 py-2 text-zinc-300 outline-none border border-zinc-600 focus:border-green-500 bg-zinc-900"
            />
            <button className="px-4 py-2 hover:opacity-90 bg-gradient-to-br from-green-500 to-green-700 text-zinc-100 rounded-md transition duration-300 ease-in-out cursor-pointer border border-green-500 flex items-center justify-center gap-1">
              Shorten <SendHorizontal size={16} className="inline-block" />
            </button>
          </form>
        </div>
        <h2 className="text-3xl font-medium text-zinc-100 mt-4">Your Links</h2>
        <div className="w-full mt-4 overflow-x-auto rounded-lg">
          <table className="w-full text-left">
            <thead className="bg-zinc-800">
              <tr>
                <th className="p-4 text-zinc-100 font-medium text-lg">
                  Original URL
                </th>
                <th className="p-4 text-zinc-100 font-medium text-lg">
                  Short URL
                </th>
                <th className="p-4 text-zinc-100 font-medium text-lg">
                  Clicks
                </th>
                <th className="p-4 text-zinc-100 font-medium text-lg">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {userLinks.map((link, index) => (
                <tr key={index} className=" border-b border-zinc-700">
                  <td className="p-4 text-zinc-300">{link.originalUrl}</td>
                  <td className="p-4 text-zinc-300">{link.shortUrl}</td>
                  <td className="p-4 text-zinc-300">{link.clicks}</td>
                  <td className="p-4 flex justify-start items-center gap-2 md:gap-5">
                    <button className="text-blue-500">
                      <Copy size={20} className="inline-block cursor-pointer" />
                    </button>
                    <button className="text-red-500 ml-2">
                      <Trash2
                        size={20}
                        className="inline-block cursor-pointer"
                      />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default LinksComp;
