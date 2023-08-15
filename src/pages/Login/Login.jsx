import { useState } from "react";
import UserLogin from "./UserLogin/UserLogin";
import InstructorLogin from "./InstructorLogin/InstructorLogin";
import AdminLogin from "./AdminLogin/AdminLogin";

const Login = () => {
  const[loginUser,setLoginloginUser]=useState('user')
    return (
     <div className="flex items-center justify-center w-screen h-screen bg-slate-400">
        <div className="w-full max-w-md mx-auto bg-white rounded shadow-lg">

        <h1 className="font-bold text-2xl uppercase text-center my-8">
          LogIn As
        </h1>
        <div className="flex mb-8">
          <button
            className={`flex-1 font-bold py-4 text-black ${
              loginUser === "admin" ? "bg-blue-500 text-white" : "bg-gray-100"
            }`}
            onClick={() => setLoginloginUser("admin")}
          >
            ADMIN
          </button>

          <button
            className={`flex-1 font-bold py-4 text-black ${
              loginUser === "instructor"
                ? "bg-blue-500 text-white"
                : "bg-gray-100"
            }`}
            onClick={() => setLoginloginUser("instructor")}
          >
            INSTRUCTOR
          </button>

          <button
            className={`flex-1 font-bold py-4 text-black ${
              loginUser === "user" ? "bg-blue-500 text-white" : "bg-gray-100"
            }`}
            onClick={() => setLoginloginUser("user")}
          >
            USER
          </button>
        </div>
        <div
          className={`transition-opacity duration-1000 ease-in-out ${
            loginUser === "admin" || loginUser === "user" || loginUser === "instructor"
              ? "opacity-100"
              : "opacity-0"
          }`}
        >
          {loginUser === "user" && <UserLogin/>}
          {loginUser === "instructor" && <InstructorLogin/>}
          {loginUser === "admin" && <AdminLogin/>}
        </div>
      
      </div>
     </div>
    );
};

export default Login;