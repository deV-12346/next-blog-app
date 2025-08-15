import Image from 'next/image'
import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='flex justify-around flex-col gap-2 sm:flex-row bg-black py-5 items-center'>
       <Image src={assets.logo_light} alt='logo' width={120} />
       <p className='text-sm text-white'>All right reserved. Copyright @blogger </p>
       <div className='flex'>
             <Image src={assets.facebook_icon} alt='fb' width={40}/>
             <Image src={assets.twitter_icon} alt='twitter-icon' width={40}/>
             <Image src={assets.googleplus_icon} alt='google-icon' width={40}/>
       </div>
    </div>
  )
}

export default Footer