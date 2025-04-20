import React from 'react'
import Layout from '../ui/Layout.jsx'
import { Outlet } from 'react-router-dom'

function Uicomponent() {
  return (
    <div className='bg-gray-950 text-white min-h-screen'>
      <Layout/>
    </div>
  )
}

export default Uicomponent