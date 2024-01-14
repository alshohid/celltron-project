'use client'

import Image from "next/image";
import Styles from './formCompo.module.css'
import BasicRating from "../BasicRating";
import {useState} from 'react'
import Button from '@mui/material/Button';
import {useRouter} from 'next/navigation'
  const FormCompo = () => {
      const router = useRouter();
       const [value, setValue] = useState(0);
        const [formData,setFormData] = useState({
          textArea:'',
        })
        const inputOnChange = (inputName, inputValue)=>{
                setFormData({
                  ...formData,
                  [inputName]:inputValue
                })
        }
      
       const formSubmitHandler= (e)=>{
        e.preventDefault();
        const totalData =  {...formData,value}
         router.replace('/blog');
        
       }
    return (
      <div className="bg-[#FFFFFF] w-full">
        <div className="flex justify-center align-middle">  <Image
          src={`https://cdn.ostad.app/public/upload/2023-08-31T05-57-04.987Z-image49.svg`}
           width={80}
           height={70}
         /></div>
        
         <div className="text-center">
            <h3 className="mb-0-5 md:text-[18px] sm:text-[16px] lg:text-[26px]"> প্রোডাক্ট  সম্পর্কে আপনার মতামত দিন</h3>
            <p style={{fontWeight: '400',fontSize: '16px',lineHeight: '150%' , letterSpacing:  '.02em'}} >নিচের স্টারগুলো থেকে  প্রোডাক্ট সম্পর্কে আমাদের সার্ভিসকে রেটিং দিন</p>
         </div>

          <div className={Styles.ratingContainer} >
          <BasicRating value ={value} setValue= {setValue} />
          </div>
          <form onSubmit={formSubmitHandler} className="w-full">
             <div class=" bg-white">
              <label for="myTextArea" class="block text-sm font-medium text-gray-700">Write Your Feedback About প্রোডাক্ট In Below Text Box</label>
              <textarea  onChange={(e)=>inputOnChange('textArea', e.target.value)} id="myTextArea" name="myTextArea" rows="5" class="mt-1 p-2 block w-full border border-gray-300   focus:outline-none focus:border-yellow-500"></textarea>
            </div>
             
             <div className="text-center py-2"><Button type='submit' variant="outlined">জমা দিন </Button> </div> 

          </form>

          
      </div>
    )

 

  }
  
  export default FormCompo;



 