import { createBrowserRouter } from "react-router-dom"

import MainLayouts from "../layouts/MainLayouts"
import Home from "../Pages/Home"
import Dashboard from "../Pages/Dashboard"
import Statistics from "../Pages/Statistics"
import ProductCards from "../components/ProductCards"
 

const routes = createBrowserRouter([
    {
      path: '/',
      element: <MainLayouts />,
      children: [
        {
            path: '/',
            element: <Home />,
            loader: () => fetch('../categores.json'),
            children: [
                {
                    path: '/category/:category',
                    element: <ProductCards></ProductCards>,
                    loader: () => fetch('../products.json'),
                },
            ],
        },
        {
            path: '/statistics',
            element: <Statistics>Statistics</Statistics>
        },
        {
            path: '/dashboard',
            element: <Dashboard>Dashboard</Dashboard>
        },
      ]
    }
  ])

  export default routes