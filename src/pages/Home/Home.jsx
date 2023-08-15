import DemoClass from "../../components/DemoClass/DemoClass";
import Faq from "../../components/FAQ/Faq";
import HomeBanner from "../../components/HomeBanner/HomeBanner";
import HomeCategories from "../../components/HomeCategories/HomeCategories";
import HowWorks from "../../components/HowWorks/HowWorks";
import PopularCourses from "../../components/PopularCourses/PopularCourses";
import Test from "../../components/Test";
import WhyBest from "../../components/WhyBest/WhyBest";



const Home = () => {
    return (
        <div>
            <HomeBanner/>
            <WhyBest/>
            <HomeCategories/>
            <PopularCourses/>
            <HowWorks/>
            <Faq/>
            <DemoClass/>
            
        </div>
    );
};

export default Home;