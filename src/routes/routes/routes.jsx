import { createBrowserRouter } from "react-router-dom";
//import Main from "../../layout/Main/Main";
// import ErrorPage from "../../pages/shared/ErrorPage/ErrorPage";

import Main from "../../layout/Main/Main";
import ErrorPage from "../../pages/shared/ErrorPage/ErrorPage";
import Home from "../../pages/Home/Home";
import Admin from "../../pages/dasgboard/AdminDashboard/Admin";
import Dashboard from "../../layout/Main/Dashboard";
import AddCategory from "../../components/Category/AddCategory";
import Login from "../../pages/Login/Login";
import SignUp from "../../pages/SignUp/SignUp";
import Category from "../../pages/category/Category";
import CategoryLayout from "../../layout/CategoryLayout/CategoryLayout";
import SubCategory from "../../components/SubCategory/SubCategory";
import SubCourse from "../../components/SubCourse/SubCourse";


export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'login',
                element:<Login/>
            },
            {
                path:'signUp',
                element:<SignUp/>
            },
            {
                path:'/category',
                element:<CategoryLayout/>,
                children:[
                    {
                        path:'/category',
                        element:<Category/>

                    },
                    {
                        path:'sub-category',
                        element:<SubCategory/>

                    },
                    {
                        path:'category/sub-category-course',
                        element:<SubCourse/>

                    },
                ]
                
            },
            {
                path:'dashboard',
                element:<Dashboard></Dashboard>,
                children:[
                    {
                        path:'',
                        element:<Admin></Admin>
                    },
                    {
                        path:'all-category',
                        element:<AddCategory></AddCategory>
                    }
                ]

            }
        ]
    },
])