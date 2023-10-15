import { Outlet } from "react-router-dom";
import CategoryLeftSidebar from "../../components/Category/CategoryLeftSidebar/CategoryLeftSidebar";


const CategoryLayout = () => {
 

    

    return (
        <div className="flex h-screen">
           <CategoryLeftSidebar/>
            <Outlet/>
        </div>
    );
};

export default CategoryLayout;
