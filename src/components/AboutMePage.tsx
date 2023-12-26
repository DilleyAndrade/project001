import React, { useContext } from 'react'
import Titles from './Titles'
import { LangContext } from '@/context/langContext'

import{motion} from 'framer-motion'

export default function AboutMePage() {

  const { isEnglish } = useContext(LangContext)

  return (
  
    <motion.main 
      initial={{ opacity: 0, x: -800  }} 
      whileInView={{ opacity: 1, x: 0 }} 
      transition={{duration: 1}} 
      id='aboutMe'
    >
      <div className="flex w-auto justify-between items-start gap-16">
        <div className='w-3/6 '>
          <h1 className=" text-blueColor text-7xl mb-6 font-bold">
            {isEnglish ? 'About me' : 'Sobre mim'}
            
          </h1>
          <p className="text-justify text-textLight dark:text-textDark text-base font-bold">
            {isEnglish 
              ? "Hello! I am a passionate enthusiast about technology and software development, and I'm excited to share a little about my journey as a Fullstack developer."
              : "Olá! Sou um entusiasta apaixonado por tecnologia e desenvolvimento de software, e estou animado para compartilhar um pouco sobre minha trajetória como desenvolvedor Fullstack."
            }
          </p>
            <br />
          <p className="text-justify  text-textLight dark:text-textDark text-base font-bold">
            {isEnglish 
              ? "My main focus is on web development and Devops.js. Over the years, I have had the opportunity to work on challenging projects that involve everything from conception to implementation of innovative and efficient solutions. I am driven by the constant search to improve my skills technical skills and embrace the DevOps mindset to improve continuous delivery and systems reliability."
              : "Meu foco principal está no desenvolvimento web e Devops.js. Ao longo dos anos, tive a oportunidade de trabalhar em projetos desafiadores que envolvem desde a concepção até a implementação de soluções inovadoras e eficientes. Sou movido pela busca constante de aprimorar minhas habilidades técnicas e abraço a mentalidade DevOps para melhorar a entrega contínua e a confiabilidade de sistemas."
            }
          </p>
            <br />
          <p className="text-justify text-textLight dark:text-textDark text-base font-bold">
            {isEnglish 
              ? "My journey in the world of programming is enriched by the use of the Linux operating system, a choice that reflects my affinity with robust and customizable development environments. I believe in the power of automation to optimize processes."
              : "Minha jornada no universo da programação é enriquecida pela utilização do sistema operacional Linux, uma escolha que reflete minha afinidade com ambientes de desenvolvimento robustos e personalizáveis. Acredito no poder da automação para otimizar processos."
            }
            
          </p>
          <br />
          <a className='text-base font-bold text-blueColor' href="">
            {isEnglish ? "Let's create something together." : "Vamos criar algo juntos."}
          </a>
        </div>
        <div className='flex flex-col'>
          <Titles titles={isEnglish ? 'Personal informations' :'Informações pessoais'}/>
          <p className='text-textLight dark:text-textDark text-2xl'>
            <b>{isEnglish ? 'Name' : 'Nome'}</b>: Dilley Andrade
              <br />
            <b>{isEnglish ? 'Area' : 'Área'}</b>:  Dev Fullstack | Devops
              <br />
            <b>{isEnglish ? 'Current residence' : 'Residência atual'}</b>: Bra{isEnglish ? 'z' : 's'}il
              <br />
            <b>Email</b>: dilleyandrade@gmail.com
              <br />
            <b>Github</b>: https://github.com/DilleyAndrade
              <br />
            <b>Linkedin</b>: https://www.linkedin.com/in/dilley-andrade/
              <br />
            <b>{isEnglish ? 'Professional contact' : 'Contato profissional'}</b>: +55 (81) 986-632-609
              <br />
            <b>Freelancer</b>: {isEnglish ? 'Avaiable' : 'Disponível'} 
          </p>
      
          <a className="border-2 mt-5 border-blueColor text-textLight dark:text-textDark
              text-2xl bg-none max-w-max py-3 px-14 rounded-xl hover:bg-blueColor duration-300"
            href="https://api.whatsapp.com/send?phone=5581986632609"
            target="_blank"
          >
            {isEnglish ? 'Talk to me' : 'Fale comigo'}
          </a>
        </div>
      </div>
      <div className="border-middleLight dark:border-middleDark my-8 border-t-2" />
    </motion.main>
  )
}
