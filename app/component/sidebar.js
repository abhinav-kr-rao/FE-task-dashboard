"use client";


import Link from "next/link";

const Sidebar = () => {

  return (
    <div className="bg-gray-800 text-white p-4 min-h-screen w-90 md:w-30 relative">
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
            <Link href='/logout'
              className="flex w-full items-center p-2 rounded hover:bg-gray-700 transition-colors text-left"
            >
              Log Out
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
