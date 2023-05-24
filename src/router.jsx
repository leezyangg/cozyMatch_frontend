import { Navigate, createBrowserRouter } from "react-router-dom";
import TemplateForm from "./views/TemplateForm";
import UserLayout from "./components/UserLayout";
import LoginPage from "./views/LoginPage";
import LandlordLayout from "./components/LandlordLayout";
import AddRoom from "./components/AddRoom";
import HomePage from "./components/HomePage";
import LandingPage from "./views/LandingPage";
import RoomListing from "./views/RoomListing";
import RoommateMatching from "./views/RoommateMatching";
import RenterHomePage from "./views/RenterHomePage";

const router = createBrowserRouter([
    // Guest Login
    {
        path:'/',
        element:<LoginPage />
    },

    // Renter Login
    {
        path:'/',
        element: <UserLayout />,
        children: [
            {
                path:'/user',
                element: <Navigate to="/homepage" />
            },
            {
                path:'/homepage',
                element: <HomePage />,
            },
            {
                path:'/landingpage',
                element: <LandingPage />,
            },
            {
                path: '/roommateMatch',
                element: <RoommateMatching />
            }
            ,
            {
                path: '/RenterHomePage',
                element: <RenterHomePage />
            }
        ],
    },

    //Landlord Login
    {
        path:'/',
        element: <LandlordLayout />,
        children: [
            {
                path:'/landlord',
                element: <Navigate to="/tem" />
            },
            {
                path:'/tem',
                element: <AddRoom />,
            },
            {
                path:'/addroom',
                element: <AddRoom />,
            },
            {
                path:'/template',
                element: <TemplateForm />,
            },
            {
                path:'/roomlist',
                element: <RoomListing />,
            }
        ],
    }
])

export default router;