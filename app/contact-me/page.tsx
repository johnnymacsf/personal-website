import ContactForm from '@/components/ContactForm'
import React from 'react'

const Page = () => {
  return (
    <div className='w-screen h-screen bg-cover bg-center flex items-center justify-center' style={{backgroundImage: "url(/my-skills-bg.webp)"}}>
        <div className='absolute top-10 w-full flex flex-col items-center'>
        <h1 className='font-semibold text-white text-[50px]'>
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500'>Contact Me</span>
        </h1>
        <p className='text-gray-400 text-[20px] text-white'>
           Feel free to get in contact with me using the form below or email icon on the top right! 
        </p>
      </div>
        <div className='h-[60%] w-[80%] relative bg-cover bg-center rounded-xl border border-white' style={{backgroundImage: "url(/bg-4.webp)"}}>
        <div className='absolute left-20 bottom-16 w-[70%] md:w-[30%]'>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

export default Page
