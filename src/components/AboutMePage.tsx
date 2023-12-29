import React, { useContext } from 'react'
import Titles from './Titles'
import { LangContext } from '@/context/langContext'

import{motion} from 'framer-motion'

export default function AboutMePage() {

  const { isEnglish } = useContext(LangContext)

  return (
  
    <motion.main 
      initial={{opacity:0, x:-350}}
      whileInView={{opacity:1, x:0}}
      transition={{duration: 1}}
      id='aboutMe'
    >
      <div className="flex flex-col 2xl:flex-row gap-14 2xl:gap-9 2xl:justify-center w-full">

        <div className='2xl:w-6/12'>
          <Titles 
            titles={isEnglish ? 'About me' : 'Sobre mim'}
            titleDetail={isEnglish ? 'Get to know me better' : 'Me conheça melhor'}
          />
          <div className='px-5 text-justify text-textLight dark:text-textDark text-base font-bold'>
            <p>
              {isEnglish 
                ? "Hello! I am a passionate enthusiast about technology and software development, and I'm excited to share a little about my journey as a Fullstack developer."
                : "Olá! Sou um entusiasta apaixonado por tecnologia e desenvolvimento de software, e estou animado para compartilhar um pouco sobre minha trajetória como desenvolvedor Fullstack."
              }
            </p>
              <br />
            <p>
              {isEnglish 
                ? "My main focus is on web development and Devops.js. Over the years, I have had the opportunity to work on challenging projects that involve everything from conception to implementation of innovative and efficient solutions. I am driven by the constant search to improve my skills technical skills and embrace the DevOps mindset to improve continuous delivery and systems reliability."
                : "Meu foco principal está no desenvolvimento web e Devops. Ao longo dos anos, tive a oportunidade de trabalhar em projetos desafiadores que envolvem desde a concepção até a implementação de soluções inovadoras e eficientes. Sou movido pela busca constante de aprimorar minhas habilidades técnicas e abraço a mentalidade DevOps para melhorar a entrega contínua e a confiabilidade de sistemas."
              }
            </p>
              <br />
            <p>
              {isEnglish 
                ? "My journey in the world of programming is enriched by the use of the Linux operating system, a choice that reflects my affinity with robust and customizable development environments. I believe in the power of automation to optimize processes."
                : "Minha jornada no universo da programação é enriquecida pela utilização do sistema operacional Linux, uma escolha que reflete minha afinidade com ambientes de desenvolvimento robustos e personalizáveis. Acredito no poder da automação para otimizar processos."
              }
            </p>
            <br />
            <a 
              className='text-base font-bold text-blueColor' 
              href="https://api.whatsapp.com/send?phone=5581986632609"
              target='_blank'
            >
              {isEnglish ? "Let's create something together." : "Vamos criar algo juntos."}
            </a>
          </div>
          
        </div>

        <div>
          <Titles 
            titles={isEnglish ? 'My contacts' :'Meus contatos'}
            titleDetail={isEnglish ? 'Find out how to talk to me' :'Saiba como falar comigo'}   
          />

          <div className='px-5 flex flex-col text-center gap-4 lg:items-center 2xl:items-start  text-textLight dark:text-textDark text-xl'>
            <h4 className='flex lg:flex-row flex-col mb-2 lg:mb-0 lg:gap-2'><b>{isEnglish ? 'Name' : 'Nome'}:</b>Dilley Andrade</h4>
            <h4 className='flex lg:flex-row flex-col mb-2 lg:mb-0 lg:gap-2'><b>{isEnglish ? 'Area' : 'Área'}:</b> Dev Fullstack | Devops</h4>
            <h4 className='flex lg:flex-row flex-col mb-2 lg:mb-0 lg:gap-2'><b>{isEnglish ? 'Current residence' : 'Residência atual'}:</b>Bra{isEnglish ? 'z' : 's'}il</h4>
            <h4 className='flex lg:flex-row flex-col mb-2 lg:mb-0 lg:gap-2'><b>Email:</b>dilleyandrade@gmail.com</h4>
            <h4 className='flex lg:flex-row flex-col mb-2 lg:mb-0 lg:gap-2'><b>Github:</b>github.com/DilleyAndrade</h4>
            <h4 className='flex lg:flex-row flex-col mb-2 lg:mb-0 lg:gap-2'><b>Linkedin:</b>linkedin.com/in/dilley-andrade/</h4>
            <h4 className='flex lg:flex-row flex-col mb-2 lg:mb-0 lg:gap-2'><b>{isEnglish ? 'Phone' : 'celular'}:</b>+55 (81) 986-632-609</h4>
            <h4 className='flex lg:flex-row flex-col mb-2 lg:mb-0 lg:gap-2'><b>Freelancer:</b>{isEnglish ? 'Avaiable' : 'Disponível'}</h4>
            <a className="border-2 border-blueColor text-textLight dark:text-textDark
              text-2xl bg-none  py-3 px-12 rounded-xl lg:max-w-max text-center hover:bg-blueColor duration-300"
              href="https://api.whatsapp.com/send?phone=5581986632609"
              target="_blank"
            >
              {isEnglish ? 'Talk to me' : 'Fale comigo'}
            </a>
          </div>

          
        </div>
      </div>
      <div className="border-middleLight dark:border-middleDark my-8 border-t-2" />
    </motion.main>
  )
}
