"use client";
import React, { useState } from "react";
import { Copy, CopyCheck, Trash2, SendHorizontal } from "lucide-react";

const LinksComp = ({ userLinks, createLink, deleteLink }) => {
  const [originalUrl, setOriginalUrl] = useState("");
  const [copiedshortKey, setCopiedshortKey] = useState(null);

  const handleCreateLink = (e) => {
    e.preventDefault();
    createLink(originalUrl);
  };

  const copyLink = (shortKey, shortUrl) => {
    navigator.clipboard.writeText(shortUrl);
    setCopiedshortKey(shortKey);

    setTimeout(() => {
      setCopiedshortKey(null);
    }, 2000);
  };

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
              className="w-full rounded-md px-3 py-2 text-zinc-300 outline-none border border-zinc-600 focus:border-orange-500 bg-zinc-900"
              value={originalUrl}
              onChange={(e) => setOriginalUrl(e.target.value)}
            />
            <button
              onClick={handleCreateLink}
              className="px-4 py-2 hover:opacity-90 bg-gradient-to-br from-orange-500 to-orange-700 text-zinc-100 rounded-md transition duration-300 ease-in-out cursor-pointer border border-orange-500 flex items-center justify-center gap-1"
            >
              Shorten <SendHorizontal size={16} className="inline-block" />
            </button>
          </form>
        </div>
        <h2 className="text-3xl font-medium text-zinc-100 mt-4">Your Links</h2>
        {userLinks && userLinks.length > 0 ? (
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
                {userLinks.map((link) => (
                  <tr key={link.id} className="border-b border-zinc-700">
                    <td className="p-4 text-zinc-300">{link.originalUrl}</td>
                    <td className="p-4 text-zinc-300">{link.shortUrl}</td>
                    <td className="p-4 text-zinc-300">{link.clicks}</td>
                    <td className="p-4 flex justify-start items-center gap-2 md:gap-5">
                      <button>
                        {copiedshortKey === link.id ? (
                          <CopyCheck
                            size={20}
                            className="inline-block cursor-pointer text-orange-500"
                          />
                        ) : (
                          <Copy
                            size={20}
                            className="inline-block cursor-pointer text-blue-500"
                            onClick={() => copyLink(link.id, link.shortUrl)}
                          />
                        )}
                      </button>
                      <button
                        onClick={() => deleteLink(link.shortKey)}
                        className="text-red-500 ml-2"
                      >
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
        ) : (
          <p className="text-lg text-zinc-300 mt-4">
            You don't have any links yet. Create one now!
          </p>
        )}
      </div>
    </section>
  );
};

export default LinksComp;
