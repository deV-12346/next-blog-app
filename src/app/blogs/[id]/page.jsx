"use client"
import React, { useEffect, useState } from 'react'
import { assets } from '../../../../assets/assets'
import Image from 'next/image'
import Footer from '@/components/Footer'
import Link from 'next/link'
import axios from 'axios'
import { toast } from 'react-toastify'
const page = ({ params }) => {
      const [data, setData] = useState(null)
      const { id } = React.use(params);
      const fetchData = async() => {
            const response = await axios.get("/api/blog",{
                  params:{
                        id
                  }
            })
            if(response.data.success){
                  setData(response.data.blog)
            }else{
                  toast.error("Something went wrong")
            }
      }
   useEffect(() => {
      fetchData();
   }, [id])
return (
      data? <>
      <div className='bg-gray-300 px-5 py-5 md:px-12 lg:px-28'>
            <div className='flex justify-between items-center'>
            <Link href={"/"}>
            <Image src={assets.logo} width={120}  height={40}  alt="logo"
            className='w-[120px] sm:w-[150px]'/>
            </Link>
            <button className='flex items-center gap-1 px-4 py-2 border rounded text-black
            hover:shadow-sm hover:bg-gray-200 shadow-indigo-500 cursor-pointer'>
                        Get Started 
            <Image src={assets.arrow} alt='arrow' className='hover:scale-120'/>
            </button>
            </div>
            <div className='text-center my-24 '>
              <h1 className='text-2xl sm:text-3xl font-semibold max-w-[700px] mx-auto'>{data.title}</h1>
               <Image className='mx-auto border mt-6 border-white rounded-full' alt='author-img' 
               src={data.author_img} width={60} height={70} />
               <p className='max-w-[740px] mx-auto mt-1 pb-2 text-lg'>{data.author}</p>
            </div>
      </div>
      <div className='mx-5 max-w-[700px] md:mx-auto mt-[-100px] mb-10'>
               <Image className='border-2 border-white rounded-2xl' src={data.image} alt="blog-img" width={1280} height={720}/>
               <h1 className='my-6 font-semibold text-[26px]'>Introduction :</h1>
               <p>{data.description}</p>
               <h3 className='my-5 text-[18px] font-semibold'>Step 1: Self-Reflection and Goal Setting</h3>
               <p className='my-3'>Before you can manage your lifestyle , you must have a clear understanding of what you want achieve.Start by reflecting your values, aspriations and long-term gaols</p>
               <p className='my-3'>Before you can manage your lifestyle , you must have a clear understanding of what you want achieve.Start by reflecting your values, aspriations and long-term gaols</p>
               <h3 className='my-5 text-[18px] font-semibold'>Step 2: Self-Reflection and Goal Setting</h3>
               <p className='my-3'>Before you can manage your lifestyle , you must have a clear understanding of what you want achieve.Start by reflecting your values, aspriations and long-term gaols</p>
               <p className='my-3'>Before you can manage your lifestyle , you must have a clear understanding of what you want achieve.Start by reflecting your values, aspriations and long-term gaols</p>
               <h3 className='my-5 text-[18px] font-semibold'>Step 3: Self-Reflection and Goal Setting</h3>
               <p className='my-3'>Before you can manage your lifestyle , you must have a clear understanding of what you want achieve.Start by reflecting your values, aspriations and long-term gaols</p>
               <p className='my-3'>Before you can manage your lifestyle , you must have a clear understanding of what you want achieve.Start by reflecting your values, aspriations and long-term gaols</p>
               <h3 className='my-5 text-[18px] font-semibold'>Conclusion</h3>
               <p className='my-3'>Manging your lifestyle is a journet that requires commitment and self-awarness</p>
               <div className='my-10'>
                <p className='text-black font-semibold my-4'>Share this article on social media</p>
                <div className='flex'>
                <Image src={assets.facebook_icon} width={50} alt='fb'/>
                <Image src={assets.twitter_icon} width={50} alt='twitter'/>
                <Image src={assets.googleplus_icon} width={50} alt='google'/>
                </div>
               </div>
      </div>
      <Footer/>
      </>
      :
      <></>
)
}

export default page