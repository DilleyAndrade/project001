import { LangContext } from "@/context/langContext";
import { GithubLogo, InstagramLogo, LinkedinLogo, TelegramLogo, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { useContext } from "react";

export default function Footer() {

  const {isEnglish} = useContext<any>(LangContext)

  return (
    <div id="contacts">
      <div className="flex flex-col xl:flex-row xl:gap-10 px-5 justify-around items-center">
        <div className="text-center ">
          <h1 className="text-textLight dark:text-textDark text-5xl lg:text-7xl font-bold">Dilley Andrade</h1>
          <h5 className="text-blueColor text-base lg:text-2xl mt-3">Dev FullStack | ReactJs | NodeJs | Linux</h5>
          <div>
            <div className="flex justify-center gap-6 mt-5 mb-9">
              <a href="https://www.linkedin.com/in/dilley-andrade/"target="_blank">
                <LinkedinLogo size={46} weight="fill" className="text-textLight dark:text-textDark hover:text-blueColor  hover:scale-125 duration-300" />
              </a>
              
              <a href="https://www.instagram.com/dilleyandrade/"target="_blank">
                <InstagramLogo size={46} weight="fill" className="text-textLight dark:text-textDark hover:text-blueColor  hover:scale-125 duration-300" />
              </a>

              <a href="https://github.com/DilleyAndrade"target="_blank">
                <GithubLogo size={46} weight="fill" className="text-textLight dark:text-textDark hover:text-blueColor  hover:scale-125 duration-300" />
              </a>

              <a href="https://api.whatsapp.com/send?phone=5581986632609"target="_blank">
                <WhatsappLogo size={46} weight="fill" className="text-textLight dark:text-textDark hover:text-blueColor  hover:scale-125 duration-300" />
              </a>

              <a href="https://t.me/DilleyAndrade"target="_blank">
                <TelegramLogo size={46} weight="fill" className="text-textLight dark:text-textDark hover:text-blueColor  hover:scale-125 duration-300" />
              </a>

            </div>
            <h5 className="text-blueColor text-2xl">
              {isEnglish ? 'Professional contact' : 'Contato profissional'}
            </h5>
            <h5 className="text-textLight dark:text-textDark text-2xl">+55 (81) 986-632-609</h5>
              <br />
            <h5 className="text-blueColor text-2xl">
              {isEnglish ? 'Say hello on Discord' : 'Diga olá no Discord'}
            </h5>
            <h5 className="text-textLight dark:text-textDark text-2xl">dilleyandrade</h5>
          </div>
        </div>
      
        
        
      </div>
      
      <div className="border-middleLight dark:border-middleDark my-8 border-t-2" />
      <h5 className="text-center text-textLight dark:text-textDark text-sm lg:text-2xl mb-8">
        {isEnglish
          ? '2024© All rights reserved. Developed by Dilley Andrade'
          : '2024© Todos os direitos reservados. Desenvolvido por Dilley Andrade'
        }
      </h5>
    </div>
  )
}
