import Link from 'next/link'
import React from 'react'
import profileImg from "@/public/ooks-blog-profile-pic.png"
import Image from "next/image"

const Logo = () => {
  return (
    <Link href="/" className='flex items-center text-dark'>
      <div className="w-16 rounded-full overflow-hidden border border-solid border-dark mr-4">
    <Image src={profileImg} alt="ooks-blog-logo" className="w-full h-auto rounded-full" />
      </div>
    <span className='font-bold text-xl'>
      OOKS
    </span>

    </Link>
  )
}

export default Logo