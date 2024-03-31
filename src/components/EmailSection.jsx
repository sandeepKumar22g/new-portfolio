"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import githubIcon from "../../public/github-icon.svg"
import linkedinIcon from "../../public//linkedin-icon.svg"

const EmailSection = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false)
    const [data, setData] = useState({
        email: "",
        subject: "",
        message: ""
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        const JSONdata = JSON.stringify(data)
        const endpoint = "/api/send"

        const options = {
            method: "POST",
            Headers: {
                'Content-Type': 'application/json'
            },
            body: JSONdata
        }

        const response = await fetch(endpoint, options);
        const resData = await response.json()

        setData({
            email: "",
            subject: "",
            message: ""
        })

        if (response.status === 200) setEmailSubmitted(true)

        setTimeout(()=>{
            setEmailSubmitted(false)
        }, 10000)

    }

    return (
        <section className='grid md:grid-cols-2 my-12 py-24 gap-4 relative' id='contacts'>
            <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
            <div>
                <h5 className='text-xl font-bold my-2'>Let&apos;s connect</h5>
                <p className='text-[#ADB7BE] mb-4 max-w-md'>
                    I&apos;m currently looking for new opportunities, my inbox is always
                    open. Whether you have a question or just want to say hi, I&apos;ll
                    try my best to get back to you!
                </p>
                <div className='socials flex flex-row gap-2 '>
                    <Link href={"https://github.com/sandeepKumar22g"} target='_blank'>
                        <Image src={githubIcon} alt='github' />
                    </Link>
                    <Link href={"https://www.linkedin.com/in/sandeepkumar22g/"} target='_blank'>
                        <Image src={linkedinIcon} alt='linkedin' />
                    </Link>
                </div>
            </div>
            <div>
                <form onSubmit={handleSubmit} className='flex flex-col'>
                    {emailSubmitted && (
                        <p className="text-green-500 text-sm mt-2">
                            Email sent successfully!
                        </p>
                    )}
                    <div className='mb-5'>
                        <label htmlFor="email" className='text-white block text-sm mb-2 font-medium'>Your email</label>
                        <input type="email" name="email" id="email" required placeholder='email@gmail.com' className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5' onChange={(e)=>setData({...data, email: e.target.value})} value={data.email} />
                    </div>
                    <div className='mb-5'>
                        <label htmlFor="subject" className='text-white block text-sm mb-2 font-medium'>Subject</label>
                        <input type="text" name="subject" id="subject" required placeholder='Just saying Hi!' className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5' onChange={(e)=>setData({...data, subject: e.target.value})} value={data.subject} />
                    </div>
                    <div className='mb-5'>
                        <label htmlFor="message" className='text-white block text-sm mb-2 font-medium'>Message</label>
                        <textarea name="message" id="message" required placeholder="Let's talk..." className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5' onChange={(e)=>setData({...data, message: e.target.value})} value={data.message} />
                    </div>
                    <button type='submit' className='px-6 py-3 w-full block rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-gray-500 hover:bg-slate-200'>Submit</button>
                </form>
            </div>
        </section>
    )
}

export default EmailSection
