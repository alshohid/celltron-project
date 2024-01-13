 'use client'
import Link from "next/link"
import FeedBackModal from "./modal/FeedBackModal"
import { useState } from "react"
const Card = ({product,key,showDetails,blogFeedBack}) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
   
  return (<>
   <Link href={`/blog/${product.id}`}>  
    <div key={key} className={`${showDetails === true ? `w-full`: `max-w-sm rounded overflow-hidden shadow-lg cursor-pointer`}`}>
    <div
        className=" h-64 bg-center w-full"
        style={{ backgroundImage: `url('${product.thumbnail}')`,  backgroundRepeat: 'no-repeat' }}
    ></div>
    <div   className="px-6 py-4 ">
        <div className="font-bold text-xl mb-2">{product.title}</div>
        <p className="text-gray-700 text-base">{product.description}</p>
        <p className="text-green-500 text-xl mt-2">${product.price}</p>
        <p className="text-gray-600">In Stock: {product.stock}</p>
        <p className="text-red-500">Discount: ${product.discountPercentage}</p>
        <p className="text-red-500">brand: {product.brand}</p>
        <p className="text-yellow-600">Rating: {product.rating}</p>

       {
          <button onClick= {handleOpen} type="button" className={blogFeedBack === false?   `hidden`:`bg-[#fffbee] ring-2 ring-yellow-300 border-[#ffc000]`  } style={{borderRadius: '5px', color: 'inherit', height: '40px', padding: '8px 24px', fontSize: '14px'}}>
          <div className="flex justify-center align-center space-x-2 ">
        
              <p className="nowrap false">ফীডব্যাক</p>
               <div className="flex justify-center align-center ">
                  <img src="https://cdn.ostad.app/public/icons/star-s-line.svg" width="24px" height="24px"/>
               </div>
          </div>
    </button>
       } 
       
    </div>
    </div>
    </Link>

     {
        open && <FeedBackModal open={open} handleClose={handleClose} />
     }

    </>
  )
}

export default Card