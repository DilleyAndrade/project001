import { LangContext } from '@/context/langContext'
import Image from 'next/image'
import React, { useContext } from 'react'
import { projectList } from './listProject'

interface ProjectProps {
  projectImage: string
  projectTitle: string
  projectDescription: string
  projectTechnology: string
  projectSiteLink: string
  projectCodeLink: string
}

export default function Project({
  projectImage, 
  projectTitle, 
  projectDescription, 
  projectTechnology, 
  projectSiteLink, 
  projectCodeLink
}:ProjectProps) {

  const {isEnglish} = useContext(LangContext)

  const allTechnology = projectList

  return (
    <div>
      <div 
        className='flex border-2 border-middleLight dark:border-middleDark
          hover:border-blueColor duration-500 gap-10 p-4 bg-middleLight
          dark:bg-middleDark max-w-max rounded-xl'>
        <Image className='rounded-lg' src={projectImage} width={347} height={347} alt='Project Icon' />
        <div className='w-80 flex flex-col justify-between'>

          <div>
          <h5 
            className="text-start text-textLight dark:text-textDark 
            text-2xl mb-3 font-bold"
          >
              {projectTitle}
          </h5>
          <p className=" text-textLight dark:text-textDark text-sm mb-3 text-justify">
            {projectDescription}
          </p>
          <div className='flex flex-wrap gap-1'>

            <p className="text-textDark py-1 px-2 bg-bgDark text-sm max-w-max rounded-md">
              {projectTechnology}
            </p>
          </div>
          </div>
          <div className='flex justify-between'>
            <a 
              className="border-2 border-blueColor bg-blueColor hover:bg-blueColorHover
                duration-300 font-bold text-textDark text-base bg-none 
                max-w-max py-3 px-9 rounded-xl"
              href={projectSiteLink}
              target='_blank'
            >
              {isEnglish ? 'See site' : 'Ver site'}
            </a>

            <a 
              className="border-2 border-blueColor b hover:bg-blueColorHover
              hover:text-textDark duration-300 font-bold text-textLight dark:text-textDark text-base bg-none 
                max-w-max py-3 px-9 rounded-xl "
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
