// components/Sidebar.js
import React, { useState } from 'react';
import { FaHome, FaUserFriends, FaFolder, FaCalendarAlt, FaFileAlt, FaChartPie, FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="md:hidden fixed top-4 left-4 z-50 text-white bg-indigo-600 p-2 rounded-md"
        onClick={() => setIsOpen(true)}
      >
        <FaBars size={20} />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed top-0 left-0 w-72 h-screen border-r border-gray-600 bg-gray-900 text-white flex flex-col justify-between p-4 z-50
          transform transition-transform duration-300
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:flex
        `}
      >
        <div>
          <div className="flex items-center gap-2 mb-8">
            <img src="https://st5.depositphotos.com/81007046/67239/v/450/depositphotos_672391528-stock-illustration-letter-logo-template-illustration-design.jpg" alt="Logo" className="w-8 h-8" />
            <h1 className="text-xl font-bold">Ui-Zone</h1>
          </div>

          {/* Navigation */}
          <nav className="space-y-2">
            <NavItem icon={<FaHome />} label="Dashboard" to="/dashboard" />
            <NavItem icon={<FaUserFriends />} label="Team" to="/team" />
            <NavItem icon={<FaFolder />} label="Projects" to="/projects" />
            <NavItem icon={<FaCalendarAlt />} label="Calendar" to="/calendar" />
            <NavItem icon={<FaFileAlt />} label="Documents" to="/documents" />
            <NavItem icon={<FaChartPie />} label="Reports" to="/reports" />
          </nav>

          {/* Divider */}
          <div className="mt-6 mb-2 text-sm text-indigo-200 uppercase">Your teams</div>

          {/* Teams */}
          <div className="space-y-2">
            <TeamItem letter="H" name="Heroicons" />
            <TeamItem letter="T" name="Tailwind Labs" />
            <TeamItem letter="W" name="Workcation" />
          </div>
        </div>

        {/* User Profile */}
        <div className="flex items-center gap-3 p-2 mt-8">
          <img
            src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80&q=80"
            alt="User"
            className="w-10 h-10 rounded-full"
          />
          <span className="font-semibold">Tom Cook</span>
        </div>
      </div>
    </>
  );
}

function NavItem({ icon, label, to }) {
  return (
    <Link to={to} className="flex items-center gap-3 hover:bg-indigo-500 rounded-md px-3 py-2 transition">
      <span className="text-xl">{icon}</span>
      <span className="font-medium">{label}</span>
    </Link>
  );
}

function TeamItem({ letter, name }) {
  return (
    <div className="flex items-center gap-3 hover:bg-indigo-500 px-3 py-2 rounded-md transition">
      <div className="w-6 h-6 rounded-full bg-indigo-800 flex items-center justify-center text-sm font-semibold">
        {letter}
      </div>
      <span className="text-sm">{name}</span>
    </div>
  );
}

export default Sidebar;
