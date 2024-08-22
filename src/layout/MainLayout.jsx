import {RouterProvider , createBrowserRouter} from 'react-router-dom'

import React from 'react'
import MainNav from '../pages/includes/MainNav';
import Home from '../pages/Home';



const router = createBrowserRouter([
    {
        path: "/HabeshaBettingCloneReact/",
        element: <MainNav />,
        children : [
          {
              path: "/HabeshaBettingCloneReact/",
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
