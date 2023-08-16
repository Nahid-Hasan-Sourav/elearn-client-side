import { useState } from "react";
import UserLogin from "./UserLogin/UserLogin";
import InstructorLogin from "./InstructorLogin/InstructorLogin";
import AdminLogin from "./AdminLogin/AdminLogin";

const Login = () => {
  const [loginUser, setLoginUser] = useState("user");
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-slate-400">
      <div className="w-full max-w-md mx-auto bg-white rounded shadow-lg md:h-[700px] min-h-[514px]">
        <h1 className="my-8 text-2xl font-bold text-center uppercase">
          LogIn As
        </h1>
        <div className="flex mb-8">
          <button
            className={`flex-1 font-bold py-4 text-black ${
              loginUser === "admin" ? "bg-blue-700 text-white" : "bg-gray-100"
            }`}
            onClick={() => {
              setLoginUser("");
              setTimeout(() => {
                setLoginUser("admin");
              }, 700);
            }}
          >
            ADMIN
          </button>

          <button
            className={`flex-1 font-bold py-4 text-black ${
              loginUser === "instructor"
                ? "bg-blue-700 text-white"
                : "bg-gray-100"
            }`}
            onClick={() => {
              setLoginUser("");
              setTimeout(() => {
                setLoginUser("instructor");
              }, 700);
            }}
          >
            INSTRUCTOR
          </button>

          <button
            className={`flex-1 font-bold py-4 text-black ${
              loginUser === "user" ? "bg-blue-700 text-white" : "bg-gray-100"
            }`}
            onClick={() => {
              setLoginUser("");
              setTimeout(() => {
                setLoginUser("user");
              }, 700);
            }}
          >
            USER
          </button>
        </div>
        <div
          className={`transition-opacity duration-8000 ease-in-out ${
            loginUser === "admin" ||
            loginUser === "user" ||
            loginUser === "instructor"
              ? "opacity-100"
              : "opacity-0"
          }`}
        >
          {loginUser === "user" && <UserLogin />}
          {loginUser === "instructor" && <InstructorLogin />}
          {loginUser === "admin" && <AdminLogin />}
          {loginUser === "" && (
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

export default Login;
