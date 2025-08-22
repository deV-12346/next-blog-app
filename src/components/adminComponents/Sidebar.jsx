import Image from 'next/image'
import React from 'react'
import { assets } from '../../../assets/assets'
import Link from 'next/link'

const Sidebar = () => {
      return (
            <div className='flex flex-col bg-slate-100'>
                  <div className='px-2 sm:pl-15 py-3  border-r-2 border-black hidden sm:block'>
                        <Image src={assets.logo} width={100} alt='logo' className='w-25 sm:w-35' />
                  </div>
                  <div className='w-10 sm:w-65 h-[100vh] border-r-2 border-black '>
                        <div className=' flex flex-col py-12 items-center  sm:w-[100%]'>
                              <Link href="/admin/addBlog" className='flex items-center sm:text-2xl gap-3 font-medium  '>
                                    <Image src={assets.add_icon} alt='add-icon' width={28} />
                                    <p className='hidden sm:block'>Add Blog</p>
                              </Link>
                              <Link href="/admin/bloglist" className='mt-5 flex items-center  sm:text-2xl gap-3 font-medium'>
                                    <Image src={assets.blog_icon} alt='add-icon' width={28} />
                                    <p className='hidden sm:block'>Blogs List</p>
                              </Link>
                              <Link href="/admin/subscription" className='mt-5 flex items-center  sm:text-2xl gap-3 font-medium'>
                                    <Image src={assets.email_icon} alt='add-icon' width={28} />
                                    <p className='hidden sm:block'>Subscription</p>
                              </Link>
                        </div>
                  </div>
            </div>
      )
}

export default Sidebar