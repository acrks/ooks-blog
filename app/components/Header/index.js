import React from 'react'
import Logo from './logo'
import Link from 'next/link'
import { GithubIcon, LinkedInIcon, SunIcon } from '../icons'



const Header = () => {
  return (
    <header className='w-full p-4 px-10 flex items-center justify-between z-20 top-0 fixed bg-[#16131a]'>
        <Logo />
        <nav className='w-max py-3 px-8 font-medium gap-x-10 flex items-center fixed top-6 right-1/2 translate-x-1/2 bg-light/80'>
            <Link href='/' className='mr-2 hover:scale-[1.15] transition-all duration-200'>Home</Link>
            <Link href='/about' className='mr-2 hover:scale-[1.15] transition-all duration-200'>About</Link>
            <Link href='/blogs' className='mr-2 hover:scale-[1.15] transition-all duration-200]'>Blogs</Link>
            {/* <ThemeToggle /> */}
        </nav>
        <div>
            <a href="https://www.linkedin.com/in/alex-crooks/" className='inline-block w-6 h-6 mr-4'>
                <LinkedInIcon />
            </a>
            <a href="https://github.com/acrks" className='inline-block w-6 h-6 mr-4'>
                <GithubIcon />
            </a>
        </div>
    </header>
  )
}

export default Header