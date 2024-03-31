"use client"

import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { TypeAnimation } from 'react-type-animation'

const HeroSection = () => {
    return (
        <section>
            <div className='grid grid-cols-1 sm:grid-cols-12'>
                <div className='col-span-7 place-self-center text-center sm:text-left'>
                    <h1 className='mb-4 sm:text-5xl lg:text-6xl text-4xl font-extrabold'>
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-gray-500'> Hello, I&apos;m {" "}</span>
                        <br />
                        <TypeAnimation
                            sequence={[
                                'Sandeep Kumar',
                                1000,
                                'MERN Stack Developer',
                                1000,
                                'React Native Developer',
                                1000,
                                'UI/UX Developer',
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />

                    </h1>
                    <p className='text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6'>
                        Full Stack Developer with expertise in the MERN stack possesses a comprehensive skill set to develop end-to-end web applications, from frontend UI/UX design to backend server-side logic and database management. With proficiency in MongoDB, Express.js, React.js, and Node.js, they play a crucial role in driving innovation and delivering impactful solutions in the rapidly evolving landscape of web development.
                    </p>
                    <div>
                        <Link href="#contacts">
                            <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-gray-500 hover:bg-slate-200'>Hire Me</button>
                        </Link>
                        <Link href="/Sandeep-Kumar-Resume.pdf" target="_blank">
                            <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-gray-500 hover:bg-slate-800 text-white mt-3'><span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Donwload CV</span></button>
                        </Link>
                    </div>
                </div>
                <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
                    <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
                        <Image src="/hero-image.png" alt='hero image' className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2' width={300} height={300} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
