import Root from "./../Root/Root";
import { createBrowserRouter } from "react-router-dom";
import Home from "./../Pages/Home/Home";
import ErrorPage from "./../Pages/ErrorPage/ErrorPage";
import Login from "./../Pages/Login/Login";
import Register from "./../Register/Register";
import Addcar from "../Pages/AddCar/Addcar";
import UpdateDetails from "../Pages/UpdateDetails/UpdateDetails";
import PrivetRoute from "../PrivetRoute/PrivetRoute";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/addcar",
        element: <PrivetRoute><Addcar></Addcar></PrivetRoute>,
      },
      {
        path: "/update",
        element: <UpdateDetails></UpdateDetails>,
      },
    ],
  },
]);
export default router;
