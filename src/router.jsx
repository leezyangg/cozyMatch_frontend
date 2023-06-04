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
import RoomDetail from "./views/RoomDetailPage";
import RoommateMatchQuestion from "./components/RoommateMatchQuestion";
import ChatApp from "./views/ChatApp";


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
                path:'/renter',
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
                path: '/roommateMatchQuestion',
                element: <RoommateMatchQuestion />
            },
            {
                path: '/roommateMatch',
                element: <RoommateMatching />
            },
            {
                path: '/renterHomePage',
                element: <RenterHomePage />
            },
            {
                path: '/room-detail/:Room_ID',
                element: <RoomDetail />,
            },
            {
                path: '/chating1',
                element: <ChatApp />,
            },
        ],
    },

    //Landlord Login
    {
        path:'/',
        element: <LandlordLayout />,
        children: [
            {
                path:'/landlord',
                element: <Navigate to="/landlordhomepage" />
            },
            {
                path:'/landlordhomepage',
                element: <RoomListing />,
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
            },
            {
                path: '/chating2',
                element: <ChatApp />,
            },
        ],
    }
])

export default router;