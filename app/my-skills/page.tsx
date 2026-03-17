'use client'

import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import { SkillData } from '@/constants';
import Image from 'next/image';
import {Autoplay} from 'swiper/modules';

const skillCategories = [
  {
    category: "Languages",
    skills: ["Java", "Python", "JavaScript", "TypeScript", "SQL", "C++", "Rust"]
  },
  {
    category: "Frontend",
    skills: ["ReactJS", "Next.js", "Tailwind CSS", "HTML", "CSS"]
  },
  {
    category: "Backend & Databases",
    skills: ["Spring Boot", "MySQL", "PostgreSQL", "MongoDB"]
  },
  {
    category: "AI & Tools",
    skills: ["LangChain4j", "GPT-4o-mini", "Claude", "OpenAI", "Postman", "Vercel"]
  }
];

const Page = () => {
  return (
    <div className='h-screen w-screen items-center justify-center bg-cover bg-center' style={{backgroundImage: "url(/my-skills-bg.webp)"}}>
      <div className='flex flex-col gap-20 w-full text-center items-center'>
        <div className='flex flex-col items-center gap-4'>
          <h1 className="font-semibold text-white text-[50px]">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              My Tech Stack
            </span>
          </h1>
          <p className='text-gray-400 text-[20px]'>
            Languages, technologies, and frameworks which I am familiar and experienced with!
          </p>
        </div>
        <Swiper slidesPerView={5} loop={true} autoplay={{delay: 0, disableOnInteraction: false}} speed={5000} modules={[Autoplay]} className='w-full'>
        {SkillData.map((skill, index) => (
          <SwiperSlide key={index}>
            <Image src={skill.Image} alt={skill.name} width={skill.width} height={skill.height}/>
          </SwiperSlide>
        ))}
        </Swiper>
        <Swiper slidesPerView={5} loop={true} autoplay={{delay: 0, disableOnInteraction: false, reverseDirection:true}} speed={5000} modules={[Autoplay]} className='w-full'>
        {SkillData.map((skill, index) => (
          <SwiperSlide key={index}>
            <Image src={skill.Image} alt={skill.name} width={skill.width} height={skill.height}/>
          </SwiperSlide>
        ))}
        </Swiper>

        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 w-full px-8'>
          {skillCategories.map((category, index) => (
            <div key={index} className='bg-white/10 backdrop-blur-sm rounded-xl p-4 text-left'>
              <h3 className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500 font-semibold text-[16px] mb-2'>
                {category.category}
              </h3>
              <ul className='text-white text-[14px] space-y-1'>
                {category.skills.map((skill, i) => (
                  <li key={i} className='text-gray-300'>• {skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Page
