import Navbar from './component/Navbar.jsx'
import Sidebar from './component/Sidebar.jsx'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <Sidebar />
      <div className="ml-72">
        <Navbar /> 
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </>
  )
}

export default App
