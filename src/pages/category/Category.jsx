import { Link } from "react-router-dom";


const Category = () => {
    return (
      <div>
        <div className="container mx-auto  my-[20px] grid gap-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 px-[15px]">
         <Link>
         <div className="shadow-lg card card-compact bg-base-100 ">
            <figure>
              <img
                src="https://www.creativeitinstitute.com/images/course/course_1663052056.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Web Development</h2>
             
            </div>
          </div>
         </Link>
          
          <div className="shadow-lg card card-compact bg-base-100">
            <figure>
              <img
                src="https://www.creativeitinstitute.com/images/course/course_1663052056.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Digital Marketing</h2>
             
            </div>
          </div>
          <div className="shadow-lg card card-compact bg-base-100">
            <figure>
              <img
                src="https://www.creativeitinstitute.com/images/course/course_1663052056.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Freelancing</h2>
             
            </div>
          </div>
         
        </div>
      </div>
    );
};

export default Category;