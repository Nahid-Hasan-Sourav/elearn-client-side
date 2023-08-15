import { Link } from "react-router-dom";

const InstructorSignUp = () => {
    const handleSignIn =(e)=>{
        e.preventDefault();
        const form = e.target;
    
        const name = form.username.value;
        const email= form.useremail.value;
        const userImage= form.userImage.files[0];
        const password = form.password.value;
    
        const userSignUpInfo={
          name,
          email,
          password,
          image:userImage,
        }
    
        console.log(userSignUpInfo);
      }
    return (
        <>
          
        <form onSubmit={handleSignIn} className="px-8 pt-6 pb-8 mb-4 ">
           
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
            <Link to="/login" className="text-black font-medium text-primary-600 hover:underline dark:text-primary-500">
           
              Login
        
            </Link>
            
          </p>
        </div>
        </form>
      
     
        </>
    );
};

export default InstructorSignUp;