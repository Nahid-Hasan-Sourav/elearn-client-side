
import Lottie from "lottie-react";
import leftAnim from "../../assets/animation/learning-1.json";
import rightAnim from "../../assets/animation/learning-2.json";

const HomeBanner = () => {
    return (
        <div className=" bg-[#3b619a] p-[20px]">
            <div className="flex">
                <div className="  w-[25%]">
                    <div className="w-[100%] h-[500px] flex justify-center items-center">
                        <Lottie animationData={leftAnim} loop={true}/>
                    </div>
                </div>
                <div className="  w-[50%]">
                    <div className="flex flex-col justify-center items-center h-[100%]">
                        <p className="text-white text-3xl font-bold my-[10px]">Learn On Your Schedule</p>
                        <h1 className="text-5xl text-center text-gray-400 font-bold">
                            Learn with us anywhere with <br></br>
                            the best expert
                        </h1>
                        <p className="mt-[10px] text-white">we collaborate with 250+ leading universities and companies</p>
                        <div>
                            <button className="btn btn-warning mt-[20px]">Explore More</button>
                        </div>
                    </div>
                </div>
                <div className="  w-[25%]">
                    <div className="w-[100%]  h-[500px] flex justify-center items-center">
                        <Lottie animationData={rightAnim} loop={true}/>
                    </div>
                  
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;