import Image from 'next/image'
import React from 'react'
import { assets } from '../../../assets/assets'

const BlogTableItems = ({id,author_img,title,author,date,deleteBlog}) => {
  return (
    <tr className='bg-white border-b'>
          <th scope='row' className='items-center gap-3 hidden sm:flex px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
              <Image alt='' src={author_img? author_img : assets.profile_icon} height={40} width={40} />
              <p>{author? author : "No author"}</p>
          </th>
          <td className='px-6 py-4'>
                 {title ? title : "No title"}
          </td>
          <td className='px-6 py-4'>
                 {date? new Date(date).toDateString() : "21 june 2025"}
          </td>
          <td className='px-6 py-4 cursor-pointer' onClick={()=>deleteBlog(id)}>
                 X
          </td>
    </tr>
  )
}

export default BlogTableItems