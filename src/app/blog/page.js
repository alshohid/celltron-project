
import getAllPost from '@/lib/blogApi/getAllPost'
import Card from '../../components/card'

const Blog = async() => {
    const productsResponse = await getAllPost();
   let products= productsResponse['products'] 
  return (
   <div className= {`container mx-auto space-y-3`}>
       <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3'>
        {
            products.map((product,index) =>{
                return (
                    <>
                     <Card product={product} key={index} blogFeedBack={false}/>
                    
                    </>
                )
            })
        }
        
    </div>
   </div>
  )
}

export default Blog