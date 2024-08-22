import {RouterProvider , createBrowserRouter} from 'react-router-dom'

import React from 'react'
import MainNav from '../pages/includes/MainNav';
import Home from '../pages/Home';



const router = createBrowserRouter([
    {
        path: "/",
        element: <MainNav />,
        children : [
          {
              path: "/",
              element: <Home />
          },
      ]
      },
  ]);


const MainLayout = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default MainLayout
