'use client'
import Link from 'next/link'
import {usePathname} from 'next/navigation'
const NavBar = () => {
          const router = usePathname()
          console.log('path = ', router)
    const menuItems= [
        {name:'হোম', path:'/'},
        {name:'ড্যাসবোর্ড', path:'/dashboard'},
       
    ]
  return (
    <div className='w-full flex justify-between bg-red-400 space-x-6 p-2'>
        <div className='flex space-x-6'> 
            {
        menuItems.map((item,index)=>{
            return (
            <div>
                <Link key={index} href={`${item.path}`} className={router === item.path ? 'bg-black text-white px-2 py-2 rounded-md':'transparent'}  > {item.name} </Link>
            </div>
            )
        })
       }
    
        </div>
        <div >
            <Link href='/login'> লগইন  </Link>
        </div>
    
    </div>
  )
}

export default NavBar
