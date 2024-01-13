 
 const getAllPost = async() =>{
      const response =await  fetch(`https://dummyjson.com/products`);
      if(!response.ok){
        throw new Error("Error fetching all posts ")
      }
      return response.json();

 }
 export default getAllPost;