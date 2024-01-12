// components/Navbar.js
'use client'
import { useState } from 'react';
import Link from 'next/link';

const ResponsiveNavbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
 const closeDrawer = ()=>{
    setIsDrawerOpen(false)
 }
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          <Link href="/">
             Home
          </Link>
          <Link href="/dashboard">
          dashboard 
          </Link>
          
        </div>

        {/* Mobile Drawer Button */}
        <div className="md:hidden">
          <button
            onClick={toggleDrawer}
            className="text-white focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isDrawerOpen && (
        <div className="md:hidden absolute inset-0 bg-black bg-opacity-50 z-10">
          <div className="flex justify-end p-4">
            <button
              onClick={toggleDrawer}
              className="text-white focus:outline-none"
            >
              ✕
            </button>
          </div>

          <div className="flex flex-col items-start bg-black text-white">
            <Link onClick={closeDrawer} href="/" className='text-white py-2 transition'>
             Home 
            </Link>
            <Link  onClick={closeDrawer} href="/dashboard"  className='text-white py-2 transition'>
              Dashboard
            </Link>
            <Link href="/login">
              Login
            </Link>
             
          </div>
        </div>
      )}
    </nav>
  );
};

export default ResponsiveNavbar;
