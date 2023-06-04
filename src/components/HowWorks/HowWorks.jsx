import { HiUserGroup } from 'react-icons/hi';
import { AiOutlineSelect } from 'react-icons/ai';
import Lottie from "lottie-react";
import rightAnim from "../../assets/animation/learning-2.json";
const HowWorks = () => {
  return (
    <div className="bg-[#6082B6] p-[40px]">
      <div>
        <h1 className="text-4xl text-center">
          How <span className="font-bold text-5xl text-gray-400">e</span>
          <span className="font-bold text-5xl text-white">Learn</span> Works
        </h1>
      </div>

      <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 mb-[30px] mt-[40px] p-[20px]">
        <div className=" flex flex-col items-center">


          <div className="card bg-base-100 shadow-xl lg:w-[80%] w-[100%] mb-[15px]">
            <div className="card-body md:flex-row flex-col ">
              <div className="border-1 border-blue  p-[10px] me-3">
               <HiUserGroup className='text-6xl bg-warning p-[10px] rounded-[50%]'/>
              </div>
              <div className="border-1 border-green-700">
                <h1 className='font-extrabold text-2xl mb-[5px]'>Signup</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                     Omnis debitis laborum tempora facere fugiat quisquam eum incidunt.
                     Qui, adipisci exercitationem. Libero porro ullam distinctio adipisci dicta quam eaque numquam iusto.</p>
              </div>
             
            </div>
          </div>


          <div className="card bg-base-100 shadow-xl lg:w-[80%] mb-[15px]">
            <div className="card-body md:flex-row flex-col ">
              <div className="border-1 border-blue  p-[10px] me-3">
               <AiOutlineSelect className='text-6xl bg-warning p-[10px] rounded-[50%]'/>
              </div>
              <div className="border-1 border-green-700">
                <h1 className='font-extrabold text-2xl mb-[5px]'>Slect Your Course</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                     Omnis debitis laborum tempora facere fugiat quisquam eum incidunt.
                     Qui, adipisci exercitationem. Libero porro ullam distinctio adipisci dicta quam eaque numquam iusto.</p>
              </div>
             
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl lg:w-[80%] mb-[15px]">
            <div className="card-body md:flex-row flex-col ">
              <div className="border-1 border-blue  p-[10px] me-3">
               <HiUserGroup className='text-6xl bg-warning p-[10px] rounded-[50%]'/>
              </div>
              <div className="border-1 border-green-700">
                <h1 className='font-extrabold text-2xl mb-[5px]'>Signup</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                     Omnis debitis laborum tempora facere fugiat quisquam eum incidunt.
                     Qui, adipisci exercitationem. Libero porro ullam distinctio adipisci dicta quam eaque numquam iusto.</p>
              </div>
             
            </div>
          </div>

        </div>

        <div className="h-full">

            <div className='lg:mt-[100px]'>
            <Lottie animationData={rightAnim} loop={true}/>
            </div>

        </div>
      </div>
    </div>
  );
};

export default HowWorks;
