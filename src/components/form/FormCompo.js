'use client'

import Image from "next/image";
import Styles from './formCompo.module.css'
 
  
  const FormCompo = () => {
    return (
      <div className="bg-[#FFFFFF]">
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
        <div className="cursor-pointer pr-0-5">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path d="M24 7.23607L27.5392 18.1287L27.7637 18.8197H28.4903H39.9434L30.6776 25.5517L30.0899 25.9787L30.3144 26.6697L33.8536 37.5623L24.5878 30.8303L24 30.4033L23.4122 30.8303L14.1464 37.5623L17.6856 26.6697L17.9101 25.9787L17.3224 25.5517L8.05655 18.8197H19.5097H20.2363L20.4608 18.1287L24 7.23607Z" stroke="#FFAB00" stroke-width="2" fill="">
        </path>
        </svg>
        </div>

        <div className="cursor-pointer pr-0-5">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path d="M24 7.23607L27.5392 18.1287L27.7637 18.8197H28.4903H39.9434L30.6776 25.5517L30.0899 25.9787L30.3144 26.6697L33.8536 37.5623L24.5878 30.8303L24 30.4033L23.4122 30.8303L14.1464 37.5623L17.6856 26.6697L17.9101 25.9787L17.3224 25.5517L8.05655 18.8197H19.5097H20.2363L20.4608 18.1287L24 7.23607Z" stroke="#FFAB00" stroke-width="2" fill="">
        </path>
        </svg>
        </div>


        <div className="cursor-pointer pr-0-5">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path d="M24 7.23607L27.5392 18.1287L27.7637 18.8197H28.4903H39.9434L30.6776 25.5517L30.0899 25.9787L30.3144 26.6697L33.8536 37.5623L24.5878 30.8303L24 30.4033L23.4122 30.8303L14.1464 37.5623L17.6856 26.6697L17.9101 25.9787L17.3224 25.5517L8.05655 18.8197H19.5097H20.2363L20.4608 18.1287L24 7.23607Z" stroke="#FFAB00" stroke-width="2" fill="">
        </path>
        </svg>
        </div>

        <div className="cursor-pointer pr-0-5">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path d="M24 7.23607L27.5392 18.1287L27.7637 18.8197H28.4903H39.9434L30.6776 25.5517L30.0899 25.9787L30.3144 26.6697L33.8536 37.5623L24.5878 30.8303L24 30.4033L23.4122 30.8303L14.1464 37.5623L17.6856 26.6697L17.9101 25.9787L17.3224 25.5517L8.05655 18.8197H19.5097H20.2363L20.4608 18.1287L24 7.23607Z" stroke="#FFAB00" stroke-width="2" fill="">
        </path>
        </svg>
        </div>

        <div className="cursor-pointer pr-0-5">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path d="M24 7.23607L27.5392 18.1287L27.7637 18.8197H28.4903H39.9434L30.6776 25.5517L30.0899 25.9787L30.3144 26.6697L33.8536 37.5623L24.5878 30.8303L24 30.4033L23.4122 30.8303L14.1464 37.5623L17.6856 26.6697L17.9101 25.9787L17.3224 25.5517L8.05655 18.8197H19.5097H20.2363L20.4608 18.1287L24 7.23607Z" stroke="#FFAB00" stroke-width="2" fill="">
        </path>
        </svg>
        </div>

        <div className="cursor-pointer pr-0-5">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path d="M24 7.23607L27.5392 18.1287L27.7637 18.8197H28.4903H39.9434L30.6776 25.5517L30.0899 25.9787L30.3144 26.6697L33.8536 37.5623L24.5878 30.8303L24 30.4033L23.4122 30.8303L14.1464 37.5623L17.6856 26.6697L17.9101 25.9787L17.3224 25.5517L8.05655 18.8197H19.5097H20.2363L20.4608 18.1287L24 7.23607Z" stroke="#FFAB00" stroke-width="2" fill="">
        </path>
        </svg>
        </div>

          </div>

          
      </div>
    )
  }
  
  export default FormCompo;




  // <div className="ModuleFeedbackModal_module_feedback_content__SdcAD">
  // <img width="80" src="https://cdn.ostad.app/public/upload/2023-08-31T05-57-04.987Z-image49.svg"/>
  // <div className="text-center">
  // <h3 className="mb-0-5">মডিউল ১ সম্পর্কে আপনার মতামত দিন</h3>
  // <p className="body_paragraph">নিচের স্টারগুলো থেকে মডিউল ১ সম্পর্কে আমাদের সার্ভিসকে রেটিং দিন</p>
  // </div>
  // <div className="ModuleFeedbackModal_rating_container__FK7pd">
  // <div className="cursor-pointer pr-0-5">
  // <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
  // <path d="M24 7.23607L27.5392 18.1287L27.7637 18.8197H28.4903H39.9434L30.6776 25.5517L30.0899 25.9787L30.3144 26.6697L33.8536 37.5623L24.5878 30.8303L24 30.4033L23.4122 30.8303L14.1464 37.5623L17.6856 26.6697L17.9101 25.9787L17.3224 25.5517L8.05655 18.8197H19.5097H20.2363L20.4608 18.1287L24 7.23607Z" stroke="#FFAB00" stroke-width="2" fill="">
  // </path>
  // </svg>
  // </div>
  // <div className="cursor_pointer pr-0-5">
  // <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
  // <path d="M24 7.23607L27.5392 18.1287L27.7637 18.8197H28.4903H39.9434L30.6776 25.5517L30.0899 25.9787L30.3144 26.6697L33.8536 37.5623L24.5878 30.8303L24 30.4033L23.4122 30.8303L14.1464 37.5623L17.6856 26.6697L17.9101 25.9787L17.3224 25.5517L8.05655 18.8197H19.5097H20.2363L20.4608 18.1287L24 7.23607Z" stroke="#FFAB00" stroke-width="2" fill=""></path>
  // </svg>
  // </div>
  // <div className="cursor_pointer pr-0-5">
  //  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
  //    <path d="M24 7.23607L27.5392 18.1287L27.7637 18.8197H28.4903H39.9434L30.6776 25.5517L30.0899 25.9787L30.3144 26.6697L33.8536 37.5623L24.5878 30.8303L24 30.4033L23.4122 30.8303L14.1464 37.5623L17.6856 26.6697L17.9101 25.9787L17.3224 25.5517L8.05655 18.8197H19.5097H20.2363L20.4608 18.1287L24 7.23607Z" stroke="#FFAB00" stroke-width="2" fill=""></path>
  //    </svg>
  //    </div>
  //    <div className="cursor_pointerp pr-0-5">
  //    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
  //      <path d="M24 7.23607L27.5392 18.1287L27.7637 18.8197H28.4903H39.9434L30.6776 25.5517L30.0899 25.9787L30.3144 26.6697L33.8536 37.5623L24.5878 30.8303L24 30.4033L23.4122 30.8303L14.1464 37.5623L17.6856 26.6697L17.9101 25.9787L17.3224 25.5517L8.05655 18.8197H19.5097H20.2363L20.4608 18.1287L24 7.23607Z" stroke="#FFAB00" stroke-width="2" fill="">
  //        </path>
  //        </svg>
  //        </div>
  //        <div className="cursor_pointer pr-0-5">
  //      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
  //        <path d="M24 7.23607L27.5392 18.1287L27.7637 18.8197H28.4903H39.9434L30.6776 25.5517L30.0899 25.9787L30.3144 26.6697L33.8536 37.5623L24.5878 30.8303L24 30.4033L23.4122 30.8303L14.1464 37.5623L17.6856 26.6697L17.9101 25.9787L17.3224 25.5517L8.05655 18.8197H19.5097H20.2363L20.4608 18.1287L24 7.23607Z" stroke="#FFAB00" stroke-width="2" fill=""> 
  //        </path
  //        ></svg>
  //        </div>
  //        </div>
  //        <div className="w-100">
  //          <div>
  //            <div className="TextArea-module_textarea__-R2n0"><label>write your feedback about মডিউল ১ in below text box</label>
  //            <textarea className="TextArea-module_textarea_input__WnLSq TextArea-module_textarea_input__variant_secondary__YXvmt" rows="8">
  //              </textarea>
  //              </div>
  //              </div>
  //              </div>
  //              <div className="w_100">
  //                <button type="button" className="Button-module_btn__Fx11X Button-module_primaryBtn__LoKRT" disabled="" style="border-radius: 5px; color: inherit; height: 40px; padding: 8px 24px; font-size: 14px;">
  //                <div className="flex justify_center align_center gap_small">
  //                  <p className="nowrap false">Submit</p>
  //                  </div>
  //                  </button>
  //                  </div>
  //                  </div>