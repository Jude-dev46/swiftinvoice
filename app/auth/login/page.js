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
