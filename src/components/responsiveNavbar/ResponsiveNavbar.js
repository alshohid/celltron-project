 
'use client'
import { useState } from 'react';
import Link from 'next/link';
import {usePathname} from 'next/navigation'
const ResponsiveNavbar = () => {
  const pathname = usePathname();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
const menuItems = [
  {name:'হোম', path:'/'},
  {name:'ড্যাসবোর্ড',path:'/dashboard'},
    {name:'ব্লগ',path:'/blog'},
    {name:'লগইন',path:'/login'},
]
 

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
 const closeDrawer = ()=>{
    setIsDrawerOpen(false)
 }
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex items-center justify-between">
        
        <div className="hidden md:flex space-x-4">
          {
            menuItems.map((item,index)=>{
              return (
                <>
                <div>
                   <Link key={index} href={item.path} className={pathname === item.path ? `bg-red-400 px-2 py-2 rounded-md`:`transparent`} > {item.name} </Link>
                </div>
                
                </>
              )
            })
          }
           
        </div>

        
        <div className="md:hidden">
          <button
            onClick={toggleDrawer}
            className="text-white focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>

     
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
            {
            menuItems.map((item,index)=>{
              return (
                <>
                <div>
                   <Link key={index} href={item.path} className={pathname === item.path ? `bg-red-400 px-2 py-2 rounded-md`:`transparent`} > {item.name} </Link>
                </div>
                
                </>
              )
            })
          }
           
             
          </div>
        </div>
      )}
    </nav>
  );
};

export default ResponsiveNavbar;
