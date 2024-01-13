import Card from '@/components/card';
import React from 'react'
import singleBlogDetails from './../../../lib/blogApi/singleBlogDetails';
  
  const BlogDetails = async({params}) => {
     const id = params.id;
     const product = await singleBlogDetails(id);

    return (
      <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-2 h-[100vh] w-[100vw]'>
          <div className='bg-slate-200'>
               <h1> Left side here </h1> 
          </div>
          <div  className=" rounded overflow-hidden shadow-lg cursor-pointer">
                 <Card product={product} showDetails={true} />
          </div>
      </div>
    )
  }
  
  export default BlogDetails