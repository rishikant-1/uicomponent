import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import App from './App.jsx';
import Docs from './reuse-components/page/Docs.jsx';
import Home from './reuse-components/page/Home.jsx';
import Uicomponent from './reuse-components/page/Uicomponent.jsx';
import Blog from './reuse-components/page/Blog.jsx';
import Dashboard from './reuse-components/page/Dashboard.jsx';
import Uibutton from './reuse-components/ui/Uibutton.jsx';


const router= createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/dashboard',
        element: <Dashboard/>
      },
      {
        path: '/component',
        element: <Uicomponent/>,
      },
      {
        path: '/component/buttons',
        element: <Uibutton/>
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
