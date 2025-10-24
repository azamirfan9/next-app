'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import ProductCard from '../components/ProductCard'

const UserPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Overlay for small screens */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        >Close</div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 bg-gray-800 text-white p-4 z-50
          transform transition-all duration-300 ease-in-out
          ${isOpen ? 'translate-x-0 w-64' : '-translate-x-full w-0'}
          md:translate-x-0 md:w-64`} // Adjust md:w-64 for collapsed state on desktop
      >
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {/* Hamburger icon or close icon */}
          {isOpen ? 'Close' : 'Menu'}
        </button>
        <nav>
          {/* Navigation links */}
          <ul>
            <li onClick={() => setIsOpen(false)}>Link 1</li>
            <li>Link 2</li>
          </ul>
        </nav>
      </aside>

      {/* Main content area */}
      <main className={`ml-0 md:ml-64 transition-all duration-300 ease-in-out`}>
        {/* Your page content */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {/* Hamburger icon for small screens */}
          Open Sidebar
        </button>
        <h1>Main Content</h1>
      </main>
    </>
  );
};
export default UserPage