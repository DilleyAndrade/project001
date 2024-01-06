import { LangContext } from '@/context/langContext'
import Image from 'next/image'
import React, { useContext } from 'react'

interface ProjectProps {
  projectImage: string
  projectTitle: string
  projectDescription: string
  projectSiteLink: string
  projectCodeLink: string
  projectTech1: string
  projectTech2: string
  projectTech3: string
  projectTech4: string
  projectTech5: string
}

export default function Project({
  projectImage, 
  projectTitle, 
  projectDescription, 
  projectSiteLink,
  projectCodeLink,
  projectTech1,
  projectTech2,
  projectTech3,
  projectTech4,
  projectTech5,
}:ProjectProps) {

  const {isEnglish} = useContext<any>(LangContext)
  
  return (
    <div>
      <div 
        className='flex flex-col xl:flex-row flex-wrap items-center border-2 border-middleLight dark:border-middleDark
          hover:border-blueColor duration-500 gap-4 p-4 bg-middleLight
          dark:bg-middleDark rounded-xl'>
        <Image className='rounded-lg' src={projectImage} width={280} height={280} alt='Project Icon' />

        <div className='w-72 flex flex-col justify-between'>
          <div>
            <h5 
              className=" text-center text-textLight dark:text-textDark 
              text-2xl mb-2 font-bold"
            >
                {projectTitle}
            </h5>
            <p className=" text-textLight dark:text-textDark text-sm mb-3 text-justify">
              {projectDescription}
            </p>
          </div>
          
          <div 
            className='flex justify-center xl:justify-start flex-wrap mt-5 gap-2'
          >
            <h1 className='text-base text-bgLight border-b-2 font-bold border-b-blueColor'>
              {projectTech1}
            </h1>
            <h1 className='text-base text-bgLight border-b-2 font-bold border-b-blueColor'>
              {projectTech2}
            </h1>
            <h1 className='text-base text-bgLight border-b-2 font-bold border-b-blueColor'>
              {projectTech3}
            </h1>
            <h1 className='text-base text-bgLight border-b-2 font-bold border-b-blueColor'>
              {projectTech4}
            </h1>
            <h1 className='text-base text-bgLight border-b-2 font-bold border-b-blueColor'>
              {projectTech5}
            </h1>
          </div>
           
          <div className='mt-11 flex justify-between'>
            <a 
              className="border-2 border-blueColor bg-blueColor hover:bg-blueColorHover
                duration-300 font-bold text-textDark text-base bg-none 
                py-3 px-8 rounded-xl text-center"
              href={projectSiteLink}
              target='_blank'
            >
              {isEnglish ? 'See site' : 'Ver site'}
            </a>

            <a 
              className="border-2 border-blueColor b hover:bg-blueColorHover
              hover:text-textDark duration-300 font-bold text-textLight dark:text-textDark text-base bg-none 
                py-3 px-8 rounded-xl text-center"
              href={projectCodeLink}
              target='_blank'
            >
              {isEnglish ? 'See code' : 'Ver código'}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
