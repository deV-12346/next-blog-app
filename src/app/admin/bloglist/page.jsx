"use client"
import BlogTableItems from '@/components/adminComponents/BlogTableItems'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const page = () => {
  const [blogs,setBlogs] = useState([])
  const fetchBlog = async()=>{
    try {
       const response = await axios.get("/api/blog")
       if(response.data.success){
        setBlogs(response.data.blogs)
       }
    } catch (error) {
      toast.error("somethig went wrong")
    }
  }
  useEffect(()=>{
     fetchBlog()
  },[])
  const deleteBlog = async(id)=>{
    try {
      const response = await axios.delete("/api/blog",{
        params:{id}
      })
      if(response.data.success){
        toast.success(response.data.message)
        fetchBlog()
      }
    } catch (error) {
      console.log(error.message)
      toast.error("Something went wrong")
    }
  }
  return (
    <div className='flex-1 pt-5 px-5 sm:pt:12 sm:pl-12'>
       <h1 className='font-bold'>All blogs</h1>
       <div className='relative h-[80vh] max-w-[860px] overflow-x-auto mt-4 border border-gray-400 scrollbar-hide'>
        <table className='w-full text-sm text-gray-500'>
          <thead className='text-sm text-left uppercase bg-amber-400 text-gray-500'>
             <tr>
              <th scope='col' className='hidden sm:block px-6 py-3'>
                    Author Name
              </th>
               <th scope='col' className=' px-6 py-3'>
                    Blog Title
              </th>
               <th scope='col' className=' px-6 py-3'>
                    Date
              </th>
               <th scope='col' className=' px-6 py-3'>
                    Action
              </th>
             </tr>
          </thead>
          <tbody>
            {
              blogs.map((item,index)=>{
                return  <BlogTableItems key={index} id={item._id} author={item.author} author_img={item.author_img}
                title={item.title} date={item.date} deleteBlog={deleteBlog} />
              })
            }
            
          </tbody>
        </table>
       </div>
    </div>
  )
}

export default page