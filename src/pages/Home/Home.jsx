import HomeBanner from "../../components/HomeBanner/HomeBanner";
import HomeCategories from "../../components/HomeCategories/HomeCategories";
import PopularCourses from "../../components/PopularCourses/PopularCourses";
import WhyBest from "../../components/WhyBest/WhyBest";



const Home = () => {
    return (
        <div>
            <HomeBanner/>
            <WhyBest/>
            <HomeCategories/>
            <PopularCourses/>
        </div>
    );
};

export default Home;