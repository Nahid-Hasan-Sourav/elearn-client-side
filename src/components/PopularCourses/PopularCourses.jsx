const PopularCourses = () => {
  const array = [
    {
      name: "https://www.ncertbooks.guru/wp-content/uploads/2022/05/Course-details.png",
    },
    {
      name: "https://www.ncertbooks.guru/wp-content/uploads/2022/05/Course-details.png",
    },
    {
      name: "https://www.ncertbooks.guru/wp-content/uploads/2022/05/Course-details.png",
    },
    {
      name: "https://www.ncertbooks.guru/wp-content/uploads/2022/05/Course-details.png",
    },
    {
      name: "https://www.ncertbooks.guru/wp-content/uploads/2022/05/Course-details.png",
    },
  ];
  console.log(array);
  return (
    <div className="p-[30px]">
      <div className="text-center">
        <h1 className="my-[35px] text-4xl font-extrabold">
          Explore Popular Courses
        </h1>
      </div>

      <div className="my-[40px]">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
          {array.map((name) => {
            return (
              <div key={name} className="card bg-base-100 shadow-xl">
                <figure>
                  <img
                    src={name.name}
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    Shoes!
                    <div className="badge badge-secondary">NEW</div>
                  </h2>
                  <p>If a dog chews shoes, whose shoes does he choose?</p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="text-center">
            <button className="btn btn-warning my-[25px]">VIEW ALL COURSES</button>
        </div>
      </div>
    </div>
  );
};

export default PopularCourses;
