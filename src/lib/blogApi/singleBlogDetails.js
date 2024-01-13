 
 const singleBlogDetails = async(id)=>{
      const res = await fetch(`https://dummyjson.com/products/${id}`)
      if(!res.ok){
        throw new Error(`Single Blog Details is data fetching error`)
      }
       return res.json();
 } 
 export default singleBlogDetails;