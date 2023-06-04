import Lottie from "lottie-react";
import AnyQues from "../../assets/animation/anyQuestion.json";
import { useState } from 'react';
const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(0);

  const handleAccordionToggle = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };
  return (
    <div className="px-[35px] pt-[35px] bg-[#3b619a]">
      <div className="flex flex-row mt-[40px]">
        <div className="lg:w-[40%] pl-[90px]">
          <div>
            <h2 className="font-bold text-2xl">Frequently ask question</h2>
            <h1 className="font-extrabold text-6xl my-[20px]">
              Any Question?<br></br>Find Here.
            </h1>

            <button className="btn btn-success">send message</button>
          </div>

          <div className="h-[350px]">
            <Lottie className="h-[100%]" animationData={AnyQues} loop={true} />
          </div>
        </div>

        <div className="lg:[w-60%]">
                
        </div>
      </div>
    </div>
  );
};

export default Faq;
