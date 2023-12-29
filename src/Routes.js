import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

const Router = createBrowserRouter([{
    path: "/",
    element: <App />,
    children: [
        {
            path: "/login",
            element: <Login />
        },
        {
            path: "/signup",
            element: <SignUp />
        }
    ]
}]);

export default Router;