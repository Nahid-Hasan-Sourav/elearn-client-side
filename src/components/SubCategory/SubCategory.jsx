
import { Link } from 'react-router-dom';

const SubCategory = () => {
    return (
      <>
        <div className="container px-[15px] mx-auto my-[20px] grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-4">
        
        <Link to={`sub-category-course`}>
                
        <div className="shadow-xl card bg-base-100">
            <figure>
              <img
                src="https://www.creativeitinstitute.com/images/course/course_1663052056.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body p[20px]">
              <h2 className="card-title texrt-center">
              Sub Category One
                
              </h2>
             
             
            </div>
        </div>
        </Link>

        
        <div className="shadow-xl card bg-base-100">
            <figure>
              <img
                src="https://www.creativeitinstitute.com/images/course/course_1663052056.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body p[20px]">
              <h2 className="card-title texrt-center">
              Sub Category One
                
              </h2>
             
             
            </div>
          </div>
        <div className="shadow-xl card bg-base-100">
            <figure>
              <img
                src="https://www.creativeitinstitute.com/images/course/course_1663052056.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body p[20px]">
              <h2 className="card-title texrt-center">
              Sub Category One
                
              </h2>
             
             
            </div>
          </div>
        <div className="shadow-xl card bg-base-100">
            <figure>
              <img
                src="https://www.creativeitinstitute.com/images/course/course_1663052056.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body p[20px]">
              <h2 className="card-title texrt-center">
              Sub Category One
                
              </h2>
             
             
            </div>
          </div>
       
        </div>
      </>
    );
};

export default SubCategory;