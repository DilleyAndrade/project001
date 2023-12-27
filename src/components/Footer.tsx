import { LangContext } from "@/context/langContext";
import { GithubLogo, InstagramLogo, LinkedinLogo, TelegramLogo, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { useContext } from "react";

export default function Footer() {

  const {isEnglish} = useContext(LangContext)

  return (
    <div id="contacts">
      <div className="flex flex-col px-5 lg:px-0 lg:flex-row justify-around items-center">
        <div className="text-center ">
          <h1 className="text-textLight dark:text-textDark text-5xl lg:text-7xl font-bold">Dilley Andrade</h1>
          <h5 className="text-blueColor text-base lg:text-2xl mt-3">Dev FullStack | React/Nodejs | Linux | DevOps</h5>
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
      
        <div className="bg-menuLight mt-8 lg:mt-0 w-full lg:w-2/6 p-9 relative  rounded-t-xl">
          <div>
            <h2 className="text-textLight text-center mb-14 text-5xl border-blueColor pb-2 border-b-4 font-bold">
              {isEnglish ? 'Talk to me' : 'Fale comigo'}
            </h2>
            <form className="flex flex-col">

              <label htmlFor="companyName" className="text-2xl mb-2">
                {isEnglish ? 'What is your name/company?' : 'Qual seu nome/empresa?'}
              </label>
              <input
                className="border-b-2 mb-12 outline-none focus:border-blueColor duration-300"
                id="companyName"
                type="text"
              />

              <label htmlFor="contactName" className="text-2xl mb-2">
                {isEnglish ? 'What is your contact?' : 'Qual o seu contato?'}
              </label>
              <input
                className="border-b-2 mb-12 outline-none focus:border-blueColor duration-300"
                id="contactName"
                type="text"
              />

              <label htmlFor="message" className="text-2xl mb-2">
                {isEnglish ? 'Write your message' : 'Escreva sua mensagem'}
              </label>
              <textarea 
                id="message" 
                rows="5" 
                className="border-2 outline-none focus:border-blueColor indent-1 p-2 duration-300 rounded-xl"
              />
              <button className="border-2 text-center mt-7 border-blueColor bg-blueColor hover:bg-blueColorHover duration-300 font-bold text-textDark text-xl 
                w-full  py-3 px-9 rounded-xl "
              >
                {isEnglish ? 'Send message' : 'Enviar mensagem'}
                
              </button>
            </form>
          </div>
          <div className="w-2/4 h-2/4 border-l-8 border-b-8 border-blueColor absolute -left-2 -bottom-2 "></div>
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
