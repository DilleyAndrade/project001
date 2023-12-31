import { LangContext } from "@/context/langContext";
import { GithubLogo, InstagramLogo, LinkedinLogo, TelegramLogo, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import {motion} from 'framer-motion'

export default function Menu() {

  const { isEnglish } = useContext<any>(LangContext)

  return (

    <header>
      <motion.div 
        initial={{opacity:0, x:-300}}
        animate={{opacity:1, x:0}}
        transition={{duration: .3}}
        className="hidden lg:bg-menuLight lg:dark:bg-menuDark lg:z-10 lg:w-60 lg:h-screen lg:flex 
        lg:flex-col lg:py-7 lg:justify-between lg:items-center lg:fixed lg:left-0"
      >
        <div className="bg-middleLight dark:bg-middleDark w-28 h-28 rounded-xl flex items-center justify-center">
          <Image src="/logo.png" height={100} width={100} alt="Logo Dilley Anndrade"/>
        </div>

        <nav className="text-textLight dark:text-textDark text-3xl text-center">
          <ul >
            <li className="border-y-2 border-middleLight dark:border-middleDark py-2">
              <Link className="hover:text-blueColor duration-200" href="#start">
                {isEnglish ? 'Home': 'Início'}
              </Link>
            </li>
            <li className="border-b-2 border-middleLight dark:border-middleDark py-2">
              <Link className="hover:text-blueColor duration-200" href="#aboutMe">
                {isEnglish ? 'About Me': 'Sobre Mim'}
              </Link>
            </li>
            <li className="border-b-2 border-middleLight dark:border-middleDark py-2">
              <Link className="hover:text-blueColor duration-200" href="#skills">
                Skills
              </Link>
            </li>
            <li className="border-b-2 border-middleLight dark:border-middleDark py-2">
              <Link className="hover:text-blueColor duration-200" href="#projects">
                {isEnglish ? 'Projects': 'Projetos'}
              </Link>
            </li>
            <li className="border-b-2 border-middleLight dark:border-middleDark py-2">
              <Link
                className="hover:text-blueColor duration-200" href="#contacts">
                {isEnglish ? 'Contacts': 'Contatos'}
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <div className="flex justify-center gap-2 mb-2">

            <a href="https://www.linkedin.com/in/dilley-andrade/"target="_blank">
              <LinkedinLogo 
                size={25} 
                weight="fill" 
                className="text-textLight dark:text-textDark hover:text-blueColor 
                  rounded-full hover:scale-125 duration-300"
              />
            </a>
            
            <a href="https://www.instagram.com/dilleyandrade/"target="_blank">
              <InstagramLogo 
                size={25} 
                weight="fill" 
                className="text-textLight dark:text-textDark hover:text-blueColor
                  rounded-full hover:scale-125 duration-300"
              />
            </a>

            <a href="https://github.com/DilleyAndrade"target="_blank">
              <GithubLogo 
                size={25} 
                weight="fill" 
                className="text-textLight dark:text-textDark hover:text-blueColor
                  rounded-full hover:scale-125 duration-300"
              />
            </a>

            <a href="https://api.whatsapp.com/send?phone=5581986632609"target="_blank">
              <WhatsappLogo 
                size={25}
                weight="fill" 
                className="text-textLight dark:text-textDark hover:text-blueColor
                  rounded-full hover:scale-125 duration-300"
              />
            </a>

            <a href="https://t.me/DilleyAndrade"target="_blank">
              <TelegramLogo 
                size={25} 
                weight="fill" 
                className="text-textLight dark:text-textDark hover:text-blueColor
                  rounded-full hover:scale-125 duration-300"
              />
            </a>

          </div>
          <p className="text-textLight dark:text-textDark text-xs text-center">
            {isEnglish
              ? '2024© All rights reserved. Developed by Dilley Andrade'
              : '2024© Todos os direitos reservados. Desenvolvido por Dilley Andrade'
            }
          </p>
        </div>
      </motion.div>
    </header>
  )
}
