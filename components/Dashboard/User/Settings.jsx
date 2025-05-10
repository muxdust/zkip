"use client";
import React, { useState } from "react";
import { Trash2, SaveIcon } from "lucide-react";

const Settings = ({
  name,
  email,
  username,
  password,
  handleUpdate,
  deleteAccount,
}) => {
  const [newName, setNewName] = useState(name);
  const [newEmail, setNewEmail] = useState(email);
  const [newUsername, setNewUsername] = useState(username);
  const [newPassword, setNewPassword] = useState(password);

  const handleSave = (e) => {
    e.preventDefault();
    handleUpdate(newName, newEmail, newUsername, newPassword);
  };

  return (
    <section className="flex justify-start items-start w-full min-h-screen">
      <div className="flex flex-col justify-start items-start w-full h-full">
        <h2 className="text-3xl font-medium text-zinc-100 font-[family-name:var(--font-bricolage)]">
          Your Profile Settings
        </h2>
        <div className="flex flex-col justify-start items-start w-full">
          <form
            action=""
            className="mt-4 p-4 rounded-lg bg-zinc-900 max-w-2xl w-full"
          >
            <div className="flex flex-col gap-4 w-full">
              <div>
                <label className="text-lg font-normal text-zinc-100">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full rounded-md px-3 py-2 text-zinc-300 outline-none border border-zinc-600 focus:border-orange-500 bg-zinc-950 mt-2"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                />
              </div>
              <div>
                <label className="text-lg font-normal text-zinc-100">
                  Username
                </label>
                <input
                  type="text"
                  placeholder="Username"
                  className="w-full rounded-md px-3 py-2 text-zinc-300 outline-none border border-zinc-600 focus:border-orange-500 bg-zinc-950 mt-2"
                  value={newUsername}
                  onChange={(e) => setNewUsername(e.target.value)}
                />
              </div>
              <div>
                <label className="text-lg font-normal text-zinc-100">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-md px-3 py-2 text-zinc-300 outline-none border border-zinc-600 focus:border-orange-500 bg-zinc-950 mt-2"
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                />
              </div>
              <div>
                <label className="text-lg font-normal text-zinc-100">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full rounded-md px-3 py-2 text-zinc-300 outline-none border border-zinc-600 focus:border-orange-500 bg-zinc-950 mt-2"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </div>
              <div className="flex gap-4">
                <button
                  onClick={handleSave}
                  type="submit"
                  className="px-4 py-2 hover:opacity-90 bg-gradient-to-br from-orange-500 to-orange-700 text-zinc-100 rounded-md transition duration-300 ease-in-out cursor-pointer border border-orange-500 flex items-center justify-center gap-1"
                >
                  Save <SaveIcon size={16} className="inline-block" />
                </button>
                <button
                  onClick={deleteAccount}
                  type="button"
                  className="px-4 py-2 hover:opacity-90 bg-gradient-to-br from-red-500 to-red-700 text-zinc-100 rounded-md transition duration-300 ease-in-out cursor-pointer border border-red-500 flex items-center justify-center gap-1"
                >
                  Delete <Trash2 size={16} className="inline-block" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Settings;
