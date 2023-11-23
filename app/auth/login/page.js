"use client";
import Navbar from "../../components/ui/Navbar";
const page = () => {
  return (
    <div className="bg-[#ffd372] h-[100dvh]" >
      <Navbar />

      <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md mt-24 ">
        <div className="px-6 py-4">
          <h3 className="mt-3 text-xl font-medium text-center text-gray-600 ">
            Welcome Back
          </h3>

          <p className="mt-1 text-center text-gray-500 ">
            Login or create account
          </p>

          <form>
            <div className="w-full mt-4">
              <label htmlFor="email" className="text-black">
                Email Address
              </label>
              <input
                id="email"
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg focus:border-[#FFB600] focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-[#ffe08a]"
                type="email"
                placeholder="Email Address"
                aria-label="Email Address"
              />
            </div>

            <div className="w-full mt-4">
              <label htmlFor="password" className="text-black">
                Password
              </label>
              <input
                id="password"
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg focus:border-[#FFB600] focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-[#ffe08a]"
                type="password"
                placeholder="Password"
                aria-label="Password"
              />
            </div>

            <button
              className="w-full mt-4 px-6 py-2 text-sm font-medium tracking-wide text-gray-500 capitalize transition-colors duration-300 transform bg-[#ffe08a] rounded-lg hover:bg-[#FFB600] focus:outline-none focus:ring focus:ring-[#ffe08a] focus:ring-opacity-50"
              type="submit"
            >
              Sign In
            </button>
          </form>
        </div>

        <div className="flex items-center justify-center py-4 text-center bg-gray-50">
          <span className="text-sm text-gray-600 dark:text-gray-200">
            Don't have an account?{" "}
          </span>

          <a
            href="#"
            className="mx-2 text-sm font-bold text-[#3155D3] hover:underline"
          >
            sign up here
          </a>
        </div>
      </div>
    </div>
  );
};

export default page;
