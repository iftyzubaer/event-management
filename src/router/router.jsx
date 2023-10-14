import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../Pages/Home/Home";
import Tips from "../Pages/Tips/Tips";
import Terms from "../Pages/Terms/Terms";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
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
      }
    ]
  },
]);

export default router;