import { IsOpenMenuMobile, LangContext } from "@/context/langContext";
import { GithubLogo, InstagramLogo, LinkedinLogo, TelegramLogo, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";

export default function MenuMobile({onCloseMenuMobile}:any) {

  const { isEnglish } = useContext(LangContext)

  const {menuMobileIsOpen, setMenuMobileIsOpen} = useContext(IsOpenMenuMobile)

  return (

    <header>
      <motion.div 
        initial={{x:-850}}
        animate={{x:0}}
        transition={{duration: .4, delay:.2}}
        

        className=" lg:hidden bg-menuLight dark:bg-menuDark text-textLight
         dark:text-textDark  w-5/6 h-screen px-2 fixed z-50 "
      >
        <div className="absolute w-12 h-12 bg-middleLight dark:bg-middleDark right-0
        flex justify-center items-center rounded-bl-2xl font-black text-3xl"
        >
          <button onClick={()=>setMenuMobileIsOpen(false)}>
            X
          </button>
        </div>
        <div className="mt-14 flex items-center justify-center gap-1">
          <Image 
            src="/comments/imageDepoiment.jpg" 
            width={50} 
            height={50} 
            alt="Image Dilley"
            className="rounded-full"
          />
          <h4 className="text-lg font-bold">
            Dilley Andrade
          </h4>
        </div>

        <div className="border-middleLight dark:border-middleDark border-2 my-5"></div>
        <nav className="text-textLight dark:text-textDark text-lg text-center">
          <ul >
            <li className=" border-middleLight dark:border-middleDark py-2">
              <Link
                className="hover:text-blueColor duration-200" 
                href="#start"
                onClick={()=>setMenuMobileIsOpen(false)}
              >
                {isEnglish ? 'Home': 'Início'}
              </Link>
            </li>
            <li className=" border-middleLight dark:border-middleDark py-2">
              <Link 
                className="hover:text-blueColor duration-200" 
                href="#aboutMe"
                onClick={()=>setMenuMobileIsOpen(false)}
              >
                {isEnglish ? 'About Me': 'Sobre Mim'}
              </Link>
            </li>
            <li className="border-middleLight dark:border-middleDark py-2">
              <Link 
                className="hover:text-blueColor duration-200" 
                href="#skills"
                onClick={()=>setMenuMobileIsOpen(false)}
              >
                Skills
              </Link>
            </li>
            <li className="border-middleLight dark:border-middleDark py-2">
              <Link 
                className="hover:text-blueColor duration-200" 
                href="#projects"
                onClick={()=>setMenuMobileIsOpen(false)}
              >
                {isEnglish ? 'Projects': 'Projetos'}
              </Link>
            </li>
            <li className="border-middleLight dark:border-middleDark py-2">
              <Link
                className="hover:text-blueColor duration-200" 
                href="#contacts"
                onClick={()=>setMenuMobileIsOpen(false)}
              >
                {isEnglish ? 'Contacts': 'Contatos'}
              </Link>
            </li>
          </ul>
        </nav>
        <div className="border-middleLight dark:border-middleDark border-2 my-5"></div>
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
      <motion.div
        initial={{x:-850}}
        animate={{x:0}}
        transition={{duration: .4}}
        className=" h-screen bg-blueColor w-11/12 fixed z-40"
      >
      </motion.div>
      <motion.div
        className="w-full h-screen bg-middleLight dark:bg-middleDark opacity-65 fixed z-30"
      >
      </motion.div>
    </header>
  )
}
