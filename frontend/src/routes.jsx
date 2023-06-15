import { Navigate, createBrowserRouter } from "react-router-dom"

import Login from "./app/pages/Login"
import PrivateRoutes from "./app/components/PrivateRoutes"
import NotFound404 from "./app/pages/NotFound404"
import StoresPage from "./app/pages/StoresPage"
import UserDetail from "./app/pages/UserDetail"
import OutletSelect from "./app/pages/OutletSelect"
import Deals from "./app/pages/Deals"
import Register from "./app/pages/Register"

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/auth/login" />
  },
  {
    path: "/auth",
    children: [{
      path: "login",
      element: <Login />
    },
    {
      path: "register",
      element: <Register />
    }]
  },
  {
    path: "/",
    element: <PrivateRoutes />,
    children: [
      {
        path: "user",
        element: <UserDetail />
      },
      {
        path: "store/:storeName/:city/:outletName/offers",
        element: <Deals />
      },
      {
        path: "store/:storeName",
        element: <OutletSelect />
      },
      {
        path: "store",
        element: <StoresPage />,
      },
    ]
  },
  {
    path: "*",
    element: <NotFound404 />,
  }
])

export { routes }