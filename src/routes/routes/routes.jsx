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