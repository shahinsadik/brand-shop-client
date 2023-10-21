import Root from "./../Root/Root";
import { createBrowserRouter } from "react-router-dom";
import Home from "./../Pages/Home/Home";
import ErrorPage from "./../Pages/ErrorPage/ErrorPage";
import Login from "./../Pages/Login/Login";
import Register from "./../Register/Register";
import Addcar from "../Pages/AddCar/Addcar";
import UpdateDetails from "../Pages/UpdateDetails/UpdateDetails";
import PrivetRoute from "../PrivetRoute/PrivetRoute";
import Details from '../Pages/Details/Details'
import MyCart from "../Pages/MyCart/MyCart";
import BrandProduct from "../Pages/BrandProduct/BrandProduct";
import Contact from '../Pages/Contact/Contact'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=> fetch("https://brand-shop-server-i8zowvxnj-shahin-sadiks-projects.vercel.app/cars"),
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
        path: "/update/:id",
        element: <UpdateDetails></UpdateDetails>,
        loader: ({params})=>fetch(`https://brand-shop-server-i8zowvxnj-shahin-sadiks-projects.vercel.app/cars/${params.id}`),
      },
      {
        path: "/details/:id",
        element: <PrivetRoute><Details></Details></PrivetRoute>,
        loader: ()=> fetch("https://brand-shop-server-i8zowvxnj-shahin-sadiks-projects.vercel.app/cars"),
      },
      {
        path: "/my-cart/",
        element: <PrivetRoute><MyCart></MyCart></PrivetRoute>,
        loader: ()=> fetch("https://brand-shop-server-i8zowvxnj-shahin-sadiks-projects.vercel.app/my-cart"),
      },
      {
        path: "/brand/:name",
        element: <PrivetRoute><BrandProduct></BrandProduct></PrivetRoute>,
        loader: ()=> fetch("https://brand-shop-server-i8zowvxnj-shahin-sadiks-projects.vercel.app/brand"),
        
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      }
    ],
  },
]);
export default router;
