import React from 'react';

const SignUp = () => {
    return (
        <div>
        <div className="flex items-center justify-center w-screen h-screen">
        <div className="w-full max-w-md mx-auto">
        <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md">
            <div>
                <h2 className="text-2xl font-bold text-center mb-[10px]">SIGNUP</h2>
            </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700">
             Name
            </label>
            <input
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              name="username"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700">
             Email
            </label>
            <input
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              name="useremail"
              type="email"
              placeholder="Useremail"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700">
             Image
            </label>
            <input
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              name="userImage"
              type="file"
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
          </div>
          <div className="flex items-center justify-between">
            <button
              className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign Up
            </button>
            
          </div>
        </form>
      
      </div>
     </div>
        </div>
    );
};

export default SignUp;