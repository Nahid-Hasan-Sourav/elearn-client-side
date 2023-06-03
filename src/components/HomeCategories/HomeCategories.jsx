import CategoriesSlider from "./CategoriesSlider";

const HomeCategories = () => {
    return (
        <div className="p-[40px]">
            <div className="text-center">
                <h1 className="font-bold text-4xl my-[15px]">Explore Top Categories</h1>
                <p>click on the categoris and explore all courses</p>
            </div>

            <div className="">
                <CategoriesSlider/>
            </div>
        </div>
    );
};

export default HomeCategories;

