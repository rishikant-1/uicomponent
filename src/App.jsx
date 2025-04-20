import Navbar from './reuse-components/page/Navbar.jsx'
import Sidebar from './reuse-components/page/Sidebar.jsx'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <Sidebar />
      <div className="md:ml-72 ml-0 bg-gray-900">
        <Navbar /> 
        <main className="bg-gray-900">
          <Outlet />
        </main>
      </div>
    </>
  )
}

export default App
