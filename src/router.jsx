import { Navigate, createBrowserRouter } from "react-router-dom";
import TemplateForm from "./views/TempleteForm";
import UserLayout from "./components/UserLayout";
import LoginPage from "./views/LoginPage";
import LandlordLayout from "./components/LandlordLayout";

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
                element: <Navigate to="/temp" />
            },
            {
                path:'/temp',
                element: <TemplateForm />,
            },
        ],
    },

    //Landlord Login
    {
        path:'/landlord',
        element: <LandlordLayout />
    }
])

export default router;