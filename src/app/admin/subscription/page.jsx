"use client"
import EmailTableItems from '@/components/adminComponents/EmailTableItems'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const page = () => {
  const [emails,setEmails] = useState([])
  const fetchEmail = async ()=>{
    try {
      const res = await axios.get("/api/email")
      if(res.data.success){
        setEmails(res.data.data)
      }
    } catch (error) {
      toast.error(error?.res?.data?.message)
    }
  }
  useEffect(()=>{
    fetchEmail()
  },[])
  const deleteEmail = async(id)=>{
      try {
        const res = await axios.delete("/api/email",{
          params:{id}
        })
        if(res.data.success){
          toast.success(res.data.message)
          fetchEmail()
        }
      } catch (error) {
          toast.error(error?.res?.data?.message)
      }
  }
  return (
    <div className='flex-1 mx-5 sm:mx-10 my-5'>
        <h1 className='font-bold'>All Subscriptions</h1>
        <div className='relative max-w-[900px] h-[80vh]  overflow-x-auto scrollbar-hide mt-4 border border-gray-400'>
          <table className='w-full text-sm text-gray-400'>
          <thead className='text-xl text-gray-900 bg-indigo-400 text-center uppercase'>
             <tr>
              <th className='py-2'>Email</th>
              <th className='py-2 hidden sm:block'>Date</th>
              <th className='py-2'>Action</th>
             </tr>
          </thead>
          <tbody >
            {
              emails.map((email)=>{
                return  <EmailTableItems key={email._id} id={email._id}
               email={email.email} date={email.createdAt} deleteEmail={deleteEmail}/>
            })
            }
          </tbody>
        </table>
        </div>
    </div>
  )
}

export default page