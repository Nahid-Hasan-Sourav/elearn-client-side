import { Outlet } from "react-router-dom";
import Navbar from "../../pages/shared/Navbar/Navbar";
import Footer from "../../pages/shared/Footer/Footer";
import DashboardSidebar from "../../pages/shared/DashboardSidebar/DashboardSidebar";


const Dashboard = () => {
    return (
        <div>
            <div className="flex h-screen">
            <DashboardSidebar className=""></DashboardSidebar>
            <Outlet/>
            </div>
            {/* <Footer/> */}
        </div>
    );
};

export default Dashboard;