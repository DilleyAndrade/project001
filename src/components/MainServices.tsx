import React, { useContext } from 'react'
import Titles from './Titles'
import { LangContext } from '@/context/langContext'
import {motion} from 'framer-motion'
import Services from './Services'

export default function MainServices() {

  const {isEnglish} = useContext<any>(LangContext)

  return (
    <div className='pt-8'>
      <Titles 
        titles={isEnglish ? 'What do i do' : 'O que eu faço'}
        titleDetail={isEnglish ? 'Services and solutions' : 'Serviços e soluções'}
      />
      <motion.div 
          initial={{opacity:0}} 
          animate={{opacity:1}} 
          transition={{duration:.6, delay: .6}} 
          className="px-5 flex flex-col lg:items-center gap-8"
        >
          <div className='flex flex-wrap flex-col justify-center  sm:flex-row gap-8 '>
              <Services
              serviceImage="/webDevelopment.svg"
              serviceTitle="Front End"
              serviceDescription=
              {isEnglish
                ? "I use the most requested tools in the development market, such as React, Next, Tailwind, Git, Styled Components."
                : 'Utilizo as ferramentas mais solicitadas no mercado de desenvolvimento, tais como React, Next, Tailwind, Git, Styled Components.'
              }
            />
            <Services
              serviceImage="/serverSide.svg"
              serviceTitle="Back End"
              serviceDescription=
              {isEnglish
                ? 'On the server side, I have been using Node, Express, Postgres, Mongo Db, ensuring a perfect connection on the Back End.'
                : 'No lado do servidor, tenho utilizado Node, Express, Postgress, Mongo Db, garantindo uma perfeita conexão no Back End.'
              }
            />
            <Services
              serviceImage="/microservice.svg"
              serviceTitle="Microservices"
              serviceDescription=
              {isEnglish
                ? 'Microservices represent an innovative architectural approach to software development.'
                : 'Os microsserviços, representam uma abordagem arquitetônica inovadora no desenvolvimento de software.'
              }
            />
            <Services
              serviceImage="/mobileDev.svg"
              serviceTitle="Mobile"
              serviceDescription=
              {isEnglish
                ? 'React Native is my main tool in mobile development, with it we can develop apps for Android and IOS.'
                : 'O React Native é minha principal ferramenta no desenvolvimento mobile, com ela podemos desenvolver apps para Android e IOS.'
              }
            />
          </div>
          <a className="border-2 border-blueColor text-textLight dark:text-textDark
              text-2xl bg-none  py-3 px-12 rounded-xl lg:max-w-max text-center hover:bg-blueColor duration-300"
              href="https://api.whatsapp.com/send?phone=5581986632609"
              target="_blank"
            >
              {isEnglish ? 'Know More' : 'Saiba mais'}
          </a>
        </motion.div>
        <div className="border-middleLight dark:border-middleDark my-8 border-t-2" />
    </div>
  )
}
