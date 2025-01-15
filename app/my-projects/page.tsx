import ProjectCard from '@/components/ProjectCard'
import { Projects } from '@/constants'
import React from 'react'

const Page = () => {
  return (
    <div className='w-screen h-screen flex items-center justify-center bg-center bg-cover' style={{backgroundImage: "url(my-projects.webp)"}}>
      <div className='absolute top-10 w-full flex flex-col items-center'>
        <h1 className='font-semibold text-white text-[50px]'>
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500'>My Projects</span>
        </h1>
        <p className='text-gray-400 text-[20px] text-white'>
           Feel free to go to my GitHub to look at the source code! 
        </p>
      </div>
      <div className='grid grid-cols-2 gap-5 max-w-[90%] max-h-[90%]'>
        {Projects.map((project, index) => (
          <ProjectCard key={index} title={project.title} text={project.text} image={project.src} color={project.color}/>
        ))}
      </div>
      </div>
  )
}

export default Page
