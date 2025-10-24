'use client'
import Link from 'next/link';
import React, { useState } from 'react'
const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const collapseMenu = () => {
        setIsOpen(true);
    }
  return (
    <>
        <aside id="logo-sidebar" className={`fixed top-0 left-0 z-40 transform transition-all duration-300 ease-in-out ${isOpen ? 'translate-x-0 w-0' : '-translate-x-full w-64'} h-screen pt-20 transition-transform -translate-x-full border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700`} aria-label="Sidebar">
         <div className="h-full px-3 pb-4 overflow-y-auto dark:bg-gray-800">
            <ul className="space-y-2 font-medium">
               <li>
                  <Link href="/" className="flex items-center p-2 border-b border-gray-200 rounded-lg dark:text-black hover:bg-blue-800 dark:hover:bg-blue-700">
                     <svg aria-hidden="true" className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                     <span className="ml-3">Dashboard</span>
                  </Link>
               </li>
               <li>
                  <Link href="schedule" className="flex items-center p-2 border-b border-gray-200 rounded-lg dark:text-black hover:bg-blue-800 dark:hover:bg-blue-700">
                     <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
                        <span className="ml-3">Schedule</span>
                  </Link>
               </li>
               <li>
                  <Link href="add-schedule" className="flex items-center p-2 border-b border-gray-200 rounded-lg dark:text-black hover:bg-blue-800 dark:hover:bg-blue-700">
                     <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>
                        <span className="ml-3">Add Schedule</span>
                  </Link>
               </li>
               <li>
                  <Link href="#" className="flex items-center p-2 border-b border-gray-200 rounded-lg dark:text-black hover:bg-blue-800 dark:hover:bg-blue-700">
                     <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>
                        <span className="ml-3">Menu </span>
                  </Link>
               </li>
               <li>
                  <Link href="#" className="flex items-center p-2 border-b border-gray-200 rounded-lg dark:text-black hover:bg-blue-800 dark:hover:bg-blue-700">
                     <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>
                        <span className="ml-3">Menu </span>
                  </Link>
               </li>
               <li>
                  <Link href="#" className="flex items-center p-2 border-b border-gray-200 rounded-lg dark:text-black hover:bg-blue-800 dark:hover:bg-blue-700">
                     <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>
                        <span className="ml-3">Menu </span>
                  </Link>
               </li>
            </ul>
         </div>
      </aside>
    </>
  );
};

export default Sidebar;