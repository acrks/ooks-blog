import React from 'react'
import Logo from './logo'
import Link from 'next/link'
import { GithubIcon, LinkedInIcon, SunIcon } from '../icons'
import ThemeToggle from './themeToggle'



const Header = () => {


  return (
    <header className='w-full p-4 px-10 flex items-center justify-between z-20'>
        <nav className='w-max py-3 px-8 border border-solid border-dark rounded-full font-medium capitalize flex items-center fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm'>
            <Link href='/' className='mr-2'>Home</Link>
            <Link href='/about' className='mr-2'>About</Link>
            <Link href='/blogs' className='mr-2'>Blogs</Link>
            <Link href='/contact' className='mr-2'>Contact</Link>
            {/* <ThemeToggle /> */}
        </nav>
        <Logo />
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