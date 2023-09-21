import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainUi from './MainUi.jsx'
import Home from './pages/Home'
import Meal from './pages/Meal'
import About from './pages/About'
import HomeMealsDetails from './pages/HomeMealsDetails'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainUi></MainUi>,
    children: [
      {
        path: '/',
        loader: () => fetch('https://www.themealdb.com/api/json/v1/1/search.php?s='),
        element: < Home ></Home >
      },
      {
        path: '/meal',
        element: <Meal></Meal>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/meal/details/:name',
        element: <HomeMealsDetails></HomeMealsDetails>,
        loader: ({ params }) => fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${params.name}`),
      }
    ]
  },
  {
    path: '/meal',
    element: <div>this is meal box</div>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
