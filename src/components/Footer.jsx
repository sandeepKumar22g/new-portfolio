import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white ">
      <div className="container p-12 flex flex-col md:flex-row justify-between items-center mx-auto">
        <Image src="/sandeep.png" alt='logo' width={150} height={50} className='invert' />
        <p className="text-slate-50 md:mt-0 mt-5">&copy; All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer