import { createBrowserRouter } from "react-router";
import HomeLayout from "../HomeLayout/HomeLayout";
import AuthLayout from "../Auth/AuthLayout";
import Login from "../Auth/Login";
import SignUp from "../Auth/SignUp";
import Home from "../Components/Home";
import Profile from "../HomeLayout/Profile";
import PrivateRoute from "./PrivateRoute";
import SkillDetails from "../Pages/SkillDetails";


const router=createBrowserRouter([
    {
        path:"/",
        element:<HomeLayout></HomeLayout>,
        children:[
            {
                path:"",
                element:<Home></Home>
            },
         
        ]
    },
       {
        path:"/profile",
        element:<Profile></Profile>
        },
    {
        path:"/auth",
        element:<AuthLayout></AuthLayout>,
        children:[
            {
                path:"/auth/login",
                element:<Login></Login>
            },
            {
                path:"/auth/signup",
                element:<SignUp></SignUp>
            }
        ]
    },
    {
        path:'/skill-details/:id',
        element:<PrivateRoute>
            <SkillDetails></SkillDetails>
        </PrivateRoute>
    },
    
    {
        path:"/*",
        element:<p>Error404</p>
    }
]);

export default router;