"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Sidebar = () => {
  const router = useRouter();

  const handleLogout = () => {
    // Add your logout logic here
    // For example:
    // localStorage.removeItem('token');
    router.push("/login");
  };

  return (
    <div className="bg-gray-800 text-white p-4 min-h-screen w-64">
      <div className="text-xl font-bold mb-8 p-2">Pizza Dashboard</div>
      <nav>
        <ul className="space-y-2">
          <li>
            <Link
              href="/"
              className="flex items-center p-2 rounded hover:bg-gray-700 transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/orders"
              className="flex items-center p-2 rounded hover:bg-gray-700 transition-colors"
            >
              Pizza Orders
            </Link>
          </li>
          <li>
            <button
              onClick={handleLogout}
              className="flex w-full items-center p-2 rounded hover:bg-gray-700 transition-colors text-left"
            >
              Log Out
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
