import React from 'react'
import { Link } from 'react-router-dom'

function Layout() {
  return (
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-6 gap-6">
      <Link to='/component/buttons' class="bg-gray-900 border border-gray-800 rounded-xl p-5 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300      cursor-pointer group w-full max-w-sm">
        <div class="flex items-center justify-between mb-4">
          <div class="bg-gray-800 p-3 rounded-lg text-indigo-400 group-hover:text-indigo-300 transition">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </div>
          <span class="text-xs text-gray-500 group-hover:text-gray-400 transition">Component</span>
        </div>
        <h3 class="text-lg font-semibold text-white mb-1">Buttons</h3>
        <p class="text-sm text-gray-400">Collapsible vertical navigation with active highlight.</p>
      </Link>
      <div class="bg-gray-900 border border-gray-800 rounded-xl p-5 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300      cursor-pointer group w-full max-w-sm">
        <div class="flex items-center justify-between mb-4">
          <div class="bg-gray-800 p-3 rounded-lg text-indigo-400 group-hover:text-indigo-300 transition">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </div>
          <span class="text-xs text-gray-500 group-hover:text-gray-400 transition">Component</span>
        </div>
        <h3 class="text-lg font-semibold text-white mb-1">Cards</h3>
        <p class="text-sm text-gray-400">Collapsible vertical navigation with active highlight.</p>
      </div>
      <div class="bg-gray-900 border border-gray-800 rounded-xl p-5 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300      cursor-pointer group w-full max-w-sm">
        <div class="flex items-center justify-between mb-4">
          <div class="bg-gray-800 p-3 rounded-lg text-indigo-400 group-hover:text-indigo-300 transition">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </div>
          <span class="text-xs text-gray-500 group-hover:text-gray-400 transition">Component</span>
        </div>
        <h3 class="text-lg font-semibold text-white mb-1">Navbars</h3>
        <p class="text-sm text-gray-400">Collapsible vertical navigation with active highlight.</p>
      </div>
      <div class="bg-gray-900 border border-gray-800 rounded-xl p-5 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300      cursor-pointer group w-full max-w-sm">
        <div class="flex items-center justify-between mb-4">
          <div class="bg-gray-800 p-3 rounded-lg text-indigo-400 group-hover:text-indigo-300 transition">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </div>
          <span class="text-xs text-gray-500 group-hover:text-gray-400 transition">Component</span>
        </div>
        <h3 class="text-lg font-semibold text-white mb-1">Buttons</h3>
        <p class="text-sm text-gray-400">Collapsible vertical navigation with active highlight.</p>
      </div>
  </div>

  )
}

export default Layout