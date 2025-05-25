"use client";

import { useSession, signIn} from "next-auth/react";

export default function Component() {
  const { data: session } = useSession();
  if (session) {
    return (
      <div className=" flex flex-col gap-4 items-center justify-center mx-auto bg-linear-to-r from-cyan-500 to-blue-500">
        <h2 className=" text-center text-5xl texor">
          <span className=" italic">Hello, </span>
          <span className=" italic text-orange-600 font-semibold">
            {session.user.name}
          </span>
        </h2>
        <p className=" text-3xl mt-5 p-4">
          Welcome ! Order and enjoy your favorite pizza
        </p>
      </div>
    );
  }
  return (
    <div className="min-h-screen min-w-full flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 p-5">
      <div className="bg-white rounded-lg shadow-2xl p-8 max-w-md w-full text-center ">
        <h1 className="text-3xl font-bold m-6">Pizza Dashboard</h1>
        <p className="mb-8 text-gray-600">
          Please sign in to access the dashboard
        </p>
        <button
          onClick={() => signIn()}
          className="bg-blue-600 hover:bg-purple-700 text-white font-medium p-2 px-6 rounded-lg transition-colors"
        >
          Sign In
        </button>
      </div>
    </div>
  );
}
