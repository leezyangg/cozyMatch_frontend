import { Navigate, createBrowserRouter } from "react-router-dom";
import TemplateForm from "./views/TemplateForm";
import UserLayout from "./components/UserLayout";
import LoginPage from "./views/LoginPage";
import LandlordLayout from "./components/LandlordLayout";
import AddRoom from "./components/AddRoom";
import LandingPage from "./views/LandingPage";
import RoomListing from "./views/RoomListing";
import RoommateMatching from "./views/RoommateMatching";

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
                element: <Navigate to="/landingpage" />
            },
            {
                path:'/landingpage',
                element: <LandingPage />,
            },
            {
                path: '/roommateMatch',
                element: <RoommateMatching />
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