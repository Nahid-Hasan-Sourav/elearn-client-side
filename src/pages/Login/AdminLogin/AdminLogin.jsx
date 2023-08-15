import { Link } from "react-router-dom";

const AdminLogin = () => {
    return (
        <>
          <form className="px-8 pt-6 pb-8 mb-4 ">
            
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700">
             Email
            </label>
            <input
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-bold text-gray-700">
              Password
            </label>
            <input
              className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
            />
            <p className="text-xs italic text-red-500">
              Please choose a password.
            </p>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign In
            </button>
            <a
              className="inline-block text-sm font-bold text-blue-500 align-baseline hover:text-blue-800"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
          <div className="mt-4">
          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            Don’t have an account yet?{" "}
            <Link to="signUp" className="text-black font-medium text-primary-600 hover:underline dark:text-primary-500">
           
              Sign up
        
            </Link>
            
          </p>
        </div>
        </form>  
        </>
    );
};

export default AdminLogin;