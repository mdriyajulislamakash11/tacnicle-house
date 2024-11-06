import { createBrowserRouter } from "react-router-dom"

import MainLayouts from "../layouts/MainLayouts"
import Home from "../Pages/Home"
import Dashboard from "../Pages/Dashboard"
import Statistics from "../Pages/Statistics"
import ProductCards from "../components/ProductCards"
import ProductDetails from "../components/ProductDetails"
import Review from "../components/Reviwe"
 

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
                    path: '/',
                    element: <ProductCards></ProductCards>,
                    loader: () => fetch('../products.json'),
                },
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
            element: <Dashboard>Dashboard</Dashboard>,
            loader: () => fetch('../products.json')
        },
        {
            path: '/reviwe',
            element: <Review />
        },
        {
            path: '/product/:productId',
            element:<ProductDetails />,
            loader: () => fetch('/public/products.json')
        }
      ]
    }
  ])

  export default routes