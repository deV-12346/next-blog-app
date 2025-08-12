import React from 'react'
import { assets } from '../../assets/assets'
import Image from 'next/image'

const Header = () => {
  return (
    <div className='py-5 px-5 md:px-12 lg:px-28'>
      <div className='flex justify-between items-center'>
        <Image src={assets.logo} width={120}  height={40}  alt="logo"
         className='w-[120px] sm:w-[150px]'/>
        <button className='flex items-center gap-1 px-4 py-2 border rounded text-black
         hover:shadow-sm hover:bg-gray-200 shadow-indigo-500 cursor-pointer'>
            Get Started 
         <Image src={assets.arrow} alt='arrow' className='hover:scale-120'/>
        </button>
      </div>
      <div className='text-center py-8'>
         <h1 className='text-3xl md:text-5xl font-medium  '>Latest Blogs</h1>
         <p className='mt-5 max-w-[740px] m-auto text-xs sm:text-base'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
             Ab molestias est vero exercitationem dolore itaque, iusto unde laborum nihil illum 
             aperiam possimus fugiat quia, quos illo magnam nam maiores aliquid officiis qui nisi
             recusandae. Architecto, quisquam. Harum suscipit explicabo, necessitatibus facere maxime 
             temporibus repellat id, accusantium tenetur accusamus, esse ducimus.
         </p>
      <form action="" className='my-4 flex justify-between max-w-[400px]
          mx-auto scale-75 sm:scale-100 border-1 border-black rounded shadow-xl shadow-blue-400 '>
            <input type="email" placeholder='Enter your email...' className='pl-5 outline-none w-full ' />
            <button type="submit" className='bg-indigo-400 px-4 py-4 cursor-pointer
             active:bg-gray-600 active:text-white'>
            Subscribe</button>
         </form>
      </div>
    </div>
  )
}

export default Header