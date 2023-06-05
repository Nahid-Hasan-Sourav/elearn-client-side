import Lottie from "lottie-react";

import DemoAnim from "../../assets/animation/democlassanim.json";
import DemoAnimOnline from "../../assets/animation/online-education.json";
const DemoClass = () => {
  return (
    <div className=" p-[35px] bg-gray-200">
      <div className="text-center">
        <h1 className="font-bold text-5xl mt-[20px] mb-[10px]">
          Schedule Demo Class
        </h1>
        <p>Schedule free with demo with our expert</p>
      </div>

      <div className="flex lg:flex-row flex-col">
        <div className="lg:w-[50%] w-[100%]">
          
          <div className=" px-[30px] py-[25px] lg:w-[680px] lg:mx-auto lg:mt-[100px] w-[100%]">

          <div className="flex md:flex-row md:justify-between flex-col">
            
          <div className="form-control md:mb-[0px] mb-[30px]">
            <p className="font-bold text-xl mb-[10px]">First Name </p>         
              <input
                type="text"
                placeholder="Enter Your First Name"
                className="border-t-0 border-b-2 border-b-black bg-gray-200"
              />
           
          </div>

          <div className="form-control">
            <p className="font-bold text-xl mb-[10px]">Last Name </p>         
              <input
                type="text"
                placeholder="Enter Your Last Name"
                className="border-t-0 border-b-2 border-b-black bg-gray-200"
              />
           
          </div>

          </div>  
         
         <div className="my-[30px]">       
            <div className="form-control">
            <p className="font-bold text-xl mb-[10px]">Enter Your Mobile Number </p>         
              <input
                type="tel"
                placeholder="Enter Your Mobile Number"
                className="border-t-0 border-b-2 border-b-black bg-gray-200"
              />
           
          </div>
         </div>

         <div className="mb-[30px]">       
            <div className="form-control">
            <p className="font-bold text-xl mb-[10px]">Enter Your Email </p>         
              <input
                type="email"
                placeholder="Enter Your Email"
                className="border-t-0 border-b-2 border-b-black bg-gray-200"
              />
           
          </div>
         </div>

         <div>
   
            <button className="btn btn-warning">Schedule Demo Class</button>

         </div>

          </div>

        </div>

        <div className="lg:w-[50%] w-[100%] pb-[10px]">
          {/* <img src={DemoPic} className="w-[500px] h-auto mx-auto"/> */}

          <Lottie
            animationData={DemoAnimOnline}
            loop={true}
            className="lg:w-[600px] h-[100%] mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default DemoClass;
