import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Signin from "../pages/auth/Signin";
import Signup from "../pages/auth/Signup";



const routesConfig = createBrowserRouter([
  {
    Component: Home,
    path: "/",
    caseSensitive: true,
  },
  {
    path: "/signin",
    id: "signin",
    Component: Signin
  },
  {
    path: "/signup",
    id: "signup",
    Component: Signup,
  },
]);



export default routesConfig;