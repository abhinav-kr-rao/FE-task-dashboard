"use client";
import { signOut } from "next-auth/react";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center w-full bg-gray-100">
      <div className="bg-white rounded-lg shadow-2xl p-8 w-fit text-center">
        <h1 className="text-2xl font-bold mb-6">Log Out</h1>
        <p className="mb-8 text-gray-600">
          Are you sure you want to log out from the Pizza Dashboard?
        </p>

        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 justify-center">
          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
          >
            Log Out
          </button>

          <button
            onClick={() => window.history.back()}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium py-2 px-6 rounded-lg transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
