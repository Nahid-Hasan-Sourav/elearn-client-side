import Lottie from "lottie-react";
import AnyQues from "../../assets/animation/anyQuestion.json";

const Faq = () => {
  return (
    <div className="px-[35px] pt-[35px] bg-[#3b619a]">
      <div className="flex lg:flex-row mt-[40px]">
        <div className="lg:w-[40%] pl-[90px] ">
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

        <div className="lg:[w-60%] ">
        <div className="p-5 lg:w-[800px] ">

        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            What are the different ways to manage a state in a React
            application?
          </div>
          <div className="collapse-content">
            <p>
              When we talk about state in our applications, it’s important to be
              clear about what types of state actually matter. There are four
             
              form is disabled and the values of a form’s inputs. Global (UI)
             
            </p>
          </div>
        </div>

        <div
          tabIndex={1}
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box my-[20px]"
        >
          <div className="collapse-title text-xl font-medium">
            What are the different ways to manage a state in a React
            application?
          </div>
          <div className="collapse-content">
            <p>
              When we talk about state in our applications, it’s important to be
              clear about what types of state actually matter. There are four
             
              form is disabled and the values of a form’s inputs. Global (UI)
             
            </p>
          </div>
        </div>


        <div
          tabIndex={2}
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box my-[20px]"
        >
          <div className="collapse-title text-xl font-medium">
            What are the different ways to manage a state in a React
            application?
          </div>
          <div className="collapse-content">
            <p>
              When we talk about state in our applications, it’s important to be
              clear about what types of state actually matter. There are four
             
              form is disabled and the values of a form’s inputs. Global (UI)
             
            </p>
          </div>
        </div>

        <div
          tabIndex={3}
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box my-[20px]"
        >
          <div className="collapse-title text-xl font-medium">
            What are the different ways to manage a state in a React
            application?
          </div>
          <div className="collapse-content">
            <p>
              When we talk about state in our applications, it’s important to be
              clear about what types of state actually matter. There are four
             
              form is disabled and the values of a form’s inputs. Global (UI)
             
            </p>
          </div>
        </div>

        <div
          tabIndex={4}
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box my-[20px]"
        >
          <div className="collapse-title text-xl font-medium">
            What are the different ways to manage a state in a React
            application?
          </div>
          <div className="collapse-content">
            <p>
              When we talk about state in our applications, it’s important to be
              clear about what types of state actually matter. There are four
             
              form is disabled and the values of a form’s inputs. Global (UI)
             
            </p>
          </div>
        </div>

        
        
        
      
      </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
