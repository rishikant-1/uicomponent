import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import App from './App.jsx';
import Docs from './component/Docs.jsx';

const router= createBrowserRouter([
  {
    path: '/',
    element: <App/>,
   
  },
  {
    path: 'docs',
    element: <Docs/>,
    children: [
      {
        path: '/docs',
        element: <Docs/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
