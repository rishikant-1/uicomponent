import React from 'react';
import Sidebar from './Sidebar.jsx';
import Navbar from './Navbar.jsx'; 
import { Outlet } from 'react-router-dom';

function Layout() {
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
  );
}

export default Layout;
