import { createBrowserRouter } from "react-router-dom";
import BillingPage from "../pages/BillingPage/BillingPage";
import Header from "../pages/Header/Header";
import Main from "../pages/Layout/Main";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
export const routes = createBrowserRouter([
    {
        path: "",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Header></Header>
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/billingPage",
                element: <BillingPage></BillingPage>
            }
        ]
    }
])