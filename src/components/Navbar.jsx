"use client"

import Link from 'next/link'
import React, {useState} from 'react'
import Navlinks from './Navlinks'
import Image from 'next/image'
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid"
import MenuOverlay from './MenuOverlay'

const Navbar = () => {

    const [navbarOpen, setNavbarOpen] = useState(false)

    const navLinks = [
        {
            title: "About",
            href: "#about"
        },
        {
            title: "Projects",
            href: "#projects"
        },
        {
            title: "Contacts",
            href: "#contacts"
        },
        
    ]
  return (
    <nav className='fixed top-0 left-0 right-0 bg-gradient-to-br from-blue-500 via-purple-500 to-gray-500 z-10'>
        <div className='flex flex-wrap items-center justify-between container mx-auto py-4 px-4 md:px-16'>
            <Link href="/" >
                <Image src="/sandeep.png" alt='logo' width={150} height={50} />
            </Link>
            <div className='mobile-menu block md:hidden'>
                {
                    !navbarOpen ? (
                        <button onClick={()=>setNavbarOpen(true)} className='text-slate-200 flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white' ><Bars3Icon className='h-5 w-5' /> </button>
                    ): (
                        <button onClick={()=>setNavbarOpen(false)} className='text-slate-200 flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white'> <XMarkIcon className='h-5 w-5' /> </button>
                    )
                }
            </div>
            <div className='menu hidden md:block md:w-auto' id='navbar'>
                <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                    {
                        navLinks.map((link, index)=>(
                            <li key={index}>
                                <Navlinks href={link.href} title={link.title} />
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
        {
            navbarOpen && <MenuOverlay links={navLinks} />
        }
    </nav>
  )
}

export default Navbar