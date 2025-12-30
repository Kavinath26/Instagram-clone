import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Viewstory from './Viewstory.jsx'

const router=createBrowserRouter(
  [
    {
      path:'/',
      element:<App/>
    },
    {
      path:'/story/:id/:tot',
      element:<Viewstory/>
    }
  ]
)

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)
