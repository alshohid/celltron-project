 'use client'
import {useState} from 'react'
import {useRouter} from 'next/navigation'
import {useSharableContextData} from '../../components/appContext/AppProvider'
const Login = () => {
    const router= useRouter()
    const [shareableData,setShareable] = useSharableContextData({})
     const [formData,setFormData]=useState({
        pName:'', pDescription: '', clientName:'', contractor:''
     })
    
      const inputOnChange = (inputName,inputValue)=>{
         setFormData( {
            ...formData,
            [inputName]:inputValue
             }
          )


      }

  const handleFormSubmit = (e)=>{
    e.preventDefault();
     console.log('formData = ', formData)

     if(formData){
        setShareable(formData)
        router.push('/dashboard')
           setFormData({
                pName: '',
                pDescription: '',
                clientName: '',
                contractor: '',
                });
     }

  }
  return (
    <div>
     <div className="bg-gradient-to-r from-slate-200 to-text-slate-600  flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold mb-4">Project Details</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Project Name
            </label>
            <input
              value={formData.pName}
              onChange={(e)=>inputOnChange('pName', e.target.value)}
              type="text"
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-200    "
              placeholder="Enter project name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Project Description
            </label>
            <textarea
              value={formData.pDescription}
              onChange={(e)=>inputOnChange('pDescription', e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-200 "
              rows="3"
              required
              placeholder="Enter project description"
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Client Name
            </label>
            <input
              value={formData.clientName}
              onChange={(e)=>inputOnChange('clientName',e.target.value)}
              type="text"
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-200  "
              placeholder="Enter client name"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">
              Contractor
            </label>
            <input
                value={formData.contractor}
              onChange={(e)=>inputOnChange('contractor',e.target.value)}
              type="text"
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-200  "
              placeholder="Enter contractor"
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md focus:outline-none  "
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Login
