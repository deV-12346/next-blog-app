
import Image from 'next/image'
import React from 'react'
import { assets, blog_data } from '../../assets/assets'

const BlogItem = ({title,description,image,category}) => {
  return (
    <div className=' cursor-pointer max-w-[300px] sm:max-w-[280px] border-1 hover:scale-101 bg-white hover:shadow-xl hover:shadow-indigo-600  ' >
       <Image src={image} height={400} width={400} alt='image' />
       <p className='ml-5 mt-3 px-2 py-1 inline-block  bg-black text-white text-sm'>{category}</p>
       <div className='p-5'>
          <h5 className='mb-1 text-lg font-medium text-gray-900 tracking-tight'>{title}</h5>
          <p className='mb-3 text-sm tracking-tight text-gray-700'>{description}</p>
          <div className='inline-flex items-center py-2 font-semibold text-center'>
            Read More 
            <Image src={assets.arrow} width={12} alt='arrow-icon' className='ml-2'/>
          </div>
       </div>
    </div>
  )
}

export default BlogItem