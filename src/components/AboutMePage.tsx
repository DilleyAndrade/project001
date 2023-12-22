import React from 'react'
import Titles from './Titles'

export default function AboutMePage() {
  return (
    <main id='aboutMe'>
      <div className="flex w-auto justify-between items-start gap-16">
        <div className='w-3/6 '>
          <h1 className=" text-blueColor text-7xl mb-6 font-bold">Sobre mim</h1>
          <p className="text-justify text-textLight dark:text-textDark text-base font-bold">
            Olá! Sou um entusiasta apaixonado por tecnologia e desenvolvimento de software, e 
            estou animado para compartilhar um pouco sobre minha trajetória como desenvolvedor Fullstack.
          </p>
          <br />
          <p className="text-justify  text-textLight dark:text-textDark text-base font-bold">
            Meu foco principal está no desenvolvimento web e Devops.js. Ao longo dos anos, tive a oportunidade de 
            trabalhar em projetos desafiadores que envolvem desde a concepção até a implementação de 
            soluções inovadoras e eficientes. Sou movido pela busca constante de aprimorar minhas 
            habilidades técnicas e abraço a mentalidade DevOps para melhorar a entrega contínua e 
            a confiabilidade de sistemas.
          </p>
          <br />
          <p className="text-justify text-textLight dark:text-textDark text-base font-bold">
            Minha jornada no universo da programação é enriquecida pela utilização do sistema operacional
            Linux, uma escolha que reflete minha afinidade com ambientes de desenvolvimento robustos e 
            personalizáveis. Acredito no poder da automação para otimizar processos.
          </p>
          <br />
          <a className='text-base font-bold text-blueColor' href="">Vamos construir algo juntos</a>
        </div>
        <div className='flex flex-col'>
          <Titles titles='Informações pessoais' />
          <p className='text-textLight dark:text-textDark text-2xl'>
            <b>Name</b>: Dilley Andrade
              <br />
            <b>Atuação</b>: Desenvolvimento web | Devops
              <br />
            <b>Atual residence</b>: Brasil
              <br />
            <b>Email</b>: dilleyandrade@gmail.com
              <br />
            <b>Github</b>: https://github.com/DilleyAndrade
              <br />
            <b>Linkedin</b>: https://www.linkedin.com/in/dilley-andrade/
              <br />
            <b>Phone</b>: +55 (81) 986-632-609
              <br />
            <b>Freelancer</b>: Avaiable
          </p>
      
          <a className="border-2 border-blueColor text-textLight dark:text-textDark
            text-2xl bg-none max-w-max py-3 px-14 mt-4 rounded-xl hover:bg-blueColor duration-300"
            href="#"
          >
            <h5>Fale comigo!</h5>
          </a>
        </div>
      </div>
      <div className="border-middleLight dark:border-middleDark my-8 border-t-2" />
    </main>
   
  )
}
