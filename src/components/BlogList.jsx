import React, { useState } from 'react'
import { blog_data } from '../../assets/assets'
import BlogItem from './BlogItem'

const BlogList = () => {
      const [menu,setMenu]  = useState("All")
  return (
    <div>
       <div className='flex justify-center gap-6 mb-4'>
          <button onClick={()=>setMenu("All")}className={menu==="All" ? 'rounded bg-black px-2 py-1 text-white text-sm' : 'cursor-pointer font-bold'}>All</button>
          <button onClick={()=>setMenu("Technology")}className={menu==="Technology" ? ' rounded bg-black px-2 py-1 text-white' : 'cursor-pointer font-bold'}>Technology</button>
          <button onClick={()=>setMenu("Startup")}className={menu==="Startup" ? ' rounded bg-black px-2 py-1 text-white' : 'cursor-pointer font-bold'}>Startup</button>
          <button onClick={()=>setMenu("LifeStyle")}className={menu==="LifeStyle" ? ' rounded bg-black px-2 py-1 text-white' : 'cursor-pointer font-bold'}>Lifestyle</button>
       </div>
       <div className='flex flex-wrap justify-around gap-1 gap-y-10 mt-2  mb-16 xl:mx-24'>
           {
            blog_data.filter((item)=>menu==="All" ? true : item.category===menu).map((blog,index)=>{
                  return <BlogItem key={index}
                  id={blog.id} title={blog.title} category={blog.category} 
                  description={blog.description} image={blog.image} />
            })
           }
       </div>
    </div>
  )
}

export default BlogList