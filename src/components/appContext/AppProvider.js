'use client'
import { createContext,useContext,useState } from 'react'

const  SharableContextData = createContext()
const AppProvider = ({children})=>{
    const [shareableData,setShareableData]= useState({})
    console.log('global data = ',shareableData)
    return (
        <div>
            <SharableContextData.Provider value={[shareableData,setShareableData]} >
                {children}
            </SharableContextData.Provider>

        </div>

    )
}
 const useSharableContextData = ()=>useContext(SharableContextData)
 export {AppProvider,useSharableContextData}