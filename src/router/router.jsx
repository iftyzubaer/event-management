import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../Pages/Home/Home";
import Tips from "../Pages/Tips/Tips";
import Terms from "../Pages/Terms/Terms";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Service from "../Pages/Service/Service";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('/service.json')
      },
      {
        path: "/tips",
        element: <Tips></Tips>
      },
      {
        path: "/terms",
        element: <Terms></Terms>
      },
      {
        path: "/services/:id",
        element: <Service></Service>,
        loader: () => fetch('/service.json')
      },
      {
        path: "/login",
        element:<Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      }
    ]
  },
]);

export default router;