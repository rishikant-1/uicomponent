import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import App from './App.jsx';
import Docs from './component/Docs.jsx';
import Home from './component/Home.jsx';
import Uicomponent from './component/Uicomponent.jsx';
import Blog from './component/Blog.jsx';
import Dashboard from './component/Dashboard.jsx';


const router= createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Dashboard/>
      },
      {
        path: '/Home',
        element: <Home/>
      },
      {
        path: '/component',
        element: <Uicomponent/>
      },
      {
        path: '/docs',
        element: <Docs/>
      },
      {
        path: '/blog',
        element: <Blog/>
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
