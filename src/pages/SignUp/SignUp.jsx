import { useState } from "react";
import UserSignUp from "./User/UserSignUp";
import InstructorSignUp from "./Instructor/InstructorSignUp";
import AdminSignUp from "./Admin/AdminSignUp";

const SignUp = () => {
  const [userType, setUserType] = useState("user");

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-slate-400">
      <div className="w-full max-w-lg mx-auto bg-white rounded shadow-lg md:h-[700px] min-h-[514px]">
        <h1 className="my-8 text-2xl font-bold text-center uppercase">
          Sign Up As
        </h1>
        <div className="flex mb-8">
          <button
            className={`flex-1 font-bold py-4 text-black ${
              userType === "admin" ? "bg-blue-500 text-white" : "bg-gray-100"
            }`}
            onClick={() => {
              setUserType("");
                setTimeout(() => {
                setUserType("admin");
                }, 500);
              }}
          >
            ADMIN
          </button>

          <button
            className={`flex-1 font-bold py-4 text-black ${
              userType === "instructor"
                ? "bg-blue-500 text-white"
                : "bg-gray-100"
            }`}
            onClick={() => {
              setUserType("");
                setTimeout(() => {
                setUserType("instructor");
                }, 500);
              }}
          >
            INSTRUCTOR
          </button>

          <button
            className={`flex-1 font-bold py-4 text-black ${
              userType === "user" ? "bg-blue-500 text-white" : "bg-gray-100"
            }`}
            onClick={() => {
            setUserType("");
              setTimeout(() => {
              setUserType("user");
              }, 500);
            }}
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
          {userType === "" && (
            <div   className="h-full bg-white">
            <div   className="flex items-center justify-center h-full">
              <img className="w-16 h-16" src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif" alt=""/>
            </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
