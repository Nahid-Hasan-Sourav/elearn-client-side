import { useState } from "react";
import UserSignUp from "./User/UserSignUp";
import InstructorSignUp from "./Instructor/InstructorSignUp";
import AdminSignUp from "./Admin/AdminSignUp";

const SignUp = () => {
  const [userType, setUserType] = useState("user");

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-slate-400">
      <div className="w-full max-w-lg mx-auto bg-white rounded shadow-lg">
        <h1 className="font-bold text-2xl uppercase text-center my-8">
          Sign Up As
        </h1>
        <div className="flex mb-8">
          <button
            className={`flex-1 font-bold py-4 text-black ${
              userType === "admin" ? "bg-blue-500 text-white" : "bg-gray-100"
            }`}
            onClick={() => setUserType("admin")}
          >
            ADMIN
          </button>

          <button
            className={`flex-1 font-bold py-4 text-black ${
              userType === "instructor"
                ? "bg-blue-500 text-white"
                : "bg-gray-100"
            }`}
            onClick={() => setUserType("instructor")}
          >
            INSTRUCTOR
          </button>

          <button
            className={`flex-1 font-bold py-4 text-black ${
              userType === "user" ? "bg-blue-500 text-white" : "bg-gray-100"
            }`}
            onClick={() => setUserType("user")}
          >
            USER
          </button>
        </div>
        <div
          className={`transition-opacity duration-1000 ease-in-out mt-4 ${
            userType === "admin" || userType === "user" || userType === "instructor"
              ? "opacity-100"
              : "opacity-0"
          }`}
        >
          {userType === "user" && <UserSignUp />}
          {userType === "instructor" && <InstructorSignUp />}
          {userType === "admin" && <AdminSignUp />}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
