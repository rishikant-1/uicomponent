import Navbar from './reuse-components/page/Navbar.jsx'
import Sidebar from './reuse-components/page/Sidebar.jsx'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 md:ml-72 ml-0 bg-gray-900 min-h-screen">
          <Navbar />
          <main className="p-4">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  )
}

export default App
