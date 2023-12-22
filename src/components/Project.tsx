import Image from 'next/image'
import React from 'react'

export default function Project() {
  return (
    <div>
      <div className='flex gap-10 p-4 bg-middleLight dark:bg-middleDark max-w-max rounded-xl'>
        <Image className='rounded-lg' src="/projects/projectThumb.png" width={347} height={347} alt='Project Icon' />
        <div className='w-80 flex flex-col justify-between'>
          <div>
          <h5 className="text-start text-textLight dark:text-textDark text-2xl mb-3 font-bold">Carros ferozes</h5>
          <p className=" text-textLight dark:text-textDark text-sm mb-3 text-justify">
            Mobile development with React Native is an increasingly popular approach to creating 
            high-quality mobile apps. This platform offers a number of advantages that make it an
             attractive choice for developers and businesses looking to reach a broad user base 
             on iOS and Android devices.
          </p>
          <div className='flex flex-wrap gap-1'>
            <p className="text-textDark py-1 px-2 bg-bgDark text-sm max-w-max rounded-md">
              NextJs
            </p>
            <p className="text-textDark py-1 px-2 bg-bgDark text-sm max-w-max rounded-md">
              Tailwind
            </p>
            <p className="text-textDark py-1 px-2 bg-bgDark text-sm max-w-max rounded-md">
              React
            </p>
            <p className="text-textDark py-1 px-2 bg-bgDark text-sm max-w-max rounded-md">
              Nodejs
            </p>
            <p className="text-textDark py-1 px-2 bg-bgDark text-sm max-w-max rounded-md">
              Ui/Ux
            </p>
            <p className="text-textDark py-1 px-2 bg-bgDark text-sm max-w-max rounded-md">
              Html5
            </p>
            <p className="text-textDark py-1 px-2 bg-bgDark text-sm max-w-max rounded-md">
              Sass
            </p>
          </div>
          </div>
          <div className='flex justify-between'>
            <a className="border-2 border-blueColor bg-blueColor hover:bg-blueColorHover duration-300 font-bold text-textDark text-base bg-none 
              max-w-max py-3 px-9 rounded-xl "
              href="#"
            >
              Ver site
            </a>

            <a className="border-2 border-blueColor b hover:bg-blueColorHover hover:text-textDark duration-300 font-bold text-textLight dark:text-textDark text-base bg-none 
              max-w-max py-3 px-9 rounded-xl "
              href="#"
            >
              Ver código
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
