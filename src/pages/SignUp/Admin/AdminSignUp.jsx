import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
const AdminSignUp = () => {
  const [userData, setUserData] = useState();
  // const handleSignIn = (e) => {
  //   e.preventDefault();
  //   const form = e.target;

  //   const name = form.username.value;
  //   const email = form.useremail.value;
  //   const image = form.userImage.files[0];
  //   const password = form.password.value;

  //   const userSignUpInfo = {
  //     role: "admin",
  //     name: name,
  //     email: email,
  //     password: password,
  //     image:image
  //   };
  //   console.log(userSignUpInfo);
  //   axios.post(
  //       `${import.meta.env.VITE_APP_BASE_URL}/register`,
  //       userSignUpInfo,
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     )
  //     .then((response) => {
  //       setUserData(response.data);
  //       console.log(response);
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //     });

  //   console.log(userData);
  // };
  const handleSignIn = async (e) => {
    e.preventDefault();
    const form = e.target;
  
    const name = form.username.value;
    const email = form.useremail.value;
    const userImage = form.userImage.files[0];
    const password = form.password.value;
  
    const userSignUpInfo = {
      role: 'admin',
      name: name,
      email: email,
      password: password,
    };
  
    console.log(JSON.stringify({ role: 'admin',
    name: name,
    email: email,
    password: password, }));
  
    try {
      const response = await fetch('http://192.168.0.4:8080/api/register', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(userSignUpInfo),
      });
  
      if (response.ok) {
          const responseData = await response.json();
          console.log('Response Data:', responseData);
          setUserData(responseData);
      } else {
          console.error('Error:', response.statusText);
      }
  } catch (error) {
      console.error('Error:', error);
  }
  
    
    
  };
  

 
  
  
  return (
    <>
      <form onSubmit={handleSignIn} className="px-8 pt-6 pb-8 mb-4 " >
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
            accept="image/*"
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-bold text-gray-700">
            Password
          </label>
          <input
            className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="password"
            name="password"
            type="password"
            placeholder="******************"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign Up
          </button>
        </div>
        <div className="mt-4">
          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            Already have an account yet?{" "}
            <Link
              to="/login"
              className="font-medium text-black text-primary-600 hover:underline dark:text-primary-500"
            >
              Login
            </Link>
          </p>
        </div>
      </form>
    </>
  );
};

export default AdminSignUp;
