import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainUi from './MainUi.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainUi></MainUi>,
    children: [

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
