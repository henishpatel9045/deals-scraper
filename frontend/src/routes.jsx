import { createBrowserRouter } from "react-router-dom"

import Login from "./app/pages/Login"
import PrivateRoutes from "./app/components/PrivateRoutes"
import NotFound404 from "./app/pages/NotFound404"
import StoresPage from "./app/pages/StoresPage"

const routes = createBrowserRouter([
  {
    path: "/auth",
    children: [{
      path: "login",
      element: <Login />
    }]
  },
  {
    path: "/store",
    element: <StoresPage />
  },
  {
    path: "/",
    element: <PrivateRoutes />,
    children: [
      {
        path: "/home",
        element: <h1>Home</h1>
      },
      {
        path: "/dashboard",
        element: <h1>Dashboard</h1>
      },]
  },
  {
    path: "*",
    element: <NotFound404 />,
  }
])

export { routes }