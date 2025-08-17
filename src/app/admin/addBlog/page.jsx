"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { assets } from '../../../../assets/assets'
import axios from 'axios'
import { toast } from 'react-toastify'
const page = () => {
      const [image, setImage] = useState(null)
      const [data, setData] = useState({
            title: "",
            description: "",
            category: "Technical",
            author: "Dev",
            author_img: "/uploads/1755325074695_144258158_321471039257215_8184936975834215564_n.jpg"
      })
      const handleChange = (e) => {
            const { name, value } = e.target
            setData({
                  ...data,
                  [name]: value
            })
      }
      const handleSubmit = async (e) => {
            try {
                  if (!image) {
                        toast.error("Blog Image is required")
                        return
                  }
                  if (data.title < 10) {
                        toast.error("Blog title must be greater than 10 words")
                        return
                  }
                  if (data.description < 10) {
                        toast.error("Blog description must be greater than 50 words")
                        return
                  }
                  e.preventDefault()
                  console.log(data)
                  const formData = new FormData()
                  formData.append("title", data.title)
                  formData.append("description", data.description)
                  formData.append("category", data.category)
                  formData.append("author", data.author)
                  formData.append("author_img", data.author_img)
                  formData.append("image", image)
                  const response = await axios.post("/api/blog", formData)
                  if (response.data.success) {
                        console.log(response.data.message)
                        toast.success(response.data.message)
                        setData({
                              title: "",
                              description: "",
                              category: "",
                              author: "",
                              author_img: ""
                        })
                  }
            } catch (error) {
                  console.log(error.response.data.message)
                  toast.error(error.response.data.message)
            }
      }
      return (
            <div className='flex justify-center items-center mx-2 sm:mx-5 my-5'>
                  <div className='bg-slate-200 rounded-2xl w-80 sm:w-120 py-5 '>
                        <h1 className='text-2xl font-bold text-center'>Add Blog</h1>
                        <form action="" className='mt-5 mx-5 sm:mx-15' onSubmit={handleSubmit}>
                              <p className='text-xl font-bold'>Upload Thumbnail</p>
                              <label htmlFor="image">
                                    <Image src={image ? URL.createObjectURL(image) : assets.upload_area} alt='upload-image' width={100} height={80} className='my-2' />
                              </label>
                              <input type="file" id="image" onChange={(e) => setImage(e.target.files[0])} hidden />
                              <p className='text-xl font-bold'>Title</p>
                              <input type="text" name="title" id="title" placeholder='Enter Title here...'
                                    value={data.title} onChange={handleChange}
                                    className='my-2 w-full border-2 border-black rounded px-3 py-2' />
                              <p className='text-xl font-bold'>Description</p>
                              <textarea name="description" id="description" cols="30" rows="10" value={data.description} onChange={handleChange}
                                    placeholder='Enter Description here...'
                                    className='my-2 w-full border-2 border-black rounded px-3 py-2'></textarea>
                              <div className='flex gap-2 items-center'>
                                    <p className='text-xl font-bold'>Category</p>
                                    <select name="category" className='border-1 border-black px-4 py-2 rounded'
                                          value={data.category} onChange={handleChange}>
                                          <option value="Technical">Technical</option>
                                          <option value="Lifestyle">Lifestyle</option>
                                          <option value="Startup">Startup</option>
                                    </select>
                              </div>
                              <div className='flex justify-center my-3 '>
                                    <button type='submit' className='px-20 py-2 cursor-pointer bg-black text-white
                    hover:bg-gray-500 rounded'>
                                          Add</button>
                              </div>

                        </form>
                  </div>
            </div>
      )
}

export default page