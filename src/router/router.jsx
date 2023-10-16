import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../Pages/Home/Home";
import Tips from "../Pages/Tips/Tips";
import Terms from "../Pages/Terms/Terms";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Service from "../Pages/Service/Service";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import PrivateRoute from "../privateRoute/PrivateRoute";

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
        element: <PrivateRoute><Tips></Tips></PrivateRoute>
      },
      {
        path: "/terms",
        element: <PrivateRoute><Terms></Terms></PrivateRoute>
      },
      {
        path: "/services/:id",
        element: <PrivateRoute><Service></Service></PrivateRoute>,
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