import Image from "next/image";
import Titles from "./Titles";
import Services from "./Services";
import { useContext } from "react";
import { IsOpenMenuMobile, LangContext } from "@/context/langContext";
import {motion} from 'framer-motion'
import { List } from "@phosphor-icons/react/dist/ssr";

export default function HomePageMobile() {

  const { isEnglish, setIsEnglish } = useContext(LangContext)
  const {setMenuMobileIsOpen} = useContext(IsOpenMenuMobile)

  return (
   
    <main id="start" className="flex flex-col overflow-hidden">
    
      <div 
        className="flex lg:hidden items-center justify-between fixed top-0 w-full py-2 px-5 border-b-2
          border-blueColor bg-middleLight dark:bg-middleDark bg-opacity-95 dark:bg-opacity-95 z-40"
      >
        <button onClick={()=>setMenuMobileIsOpen(true)} className="flex items-center gap-2 text-textLight dark:text-textDark">
          <List size={40} weight="bold" />
          <h4 className="text-base">
            Menu
          </h4>
        </button>
            
        <div>
          <button 
            onClick={()=> setIsEnglish(true)} 
            className="bg-menuLight h-10 w-10 mr-3 rounded-full hover:scale-105 duration-300"
          >
            En
          </button>

          <button 
            onClick={()=> setIsEnglish(false)}
            className="bg-menuLight h-10 w-10 rounded-full hover:scale-105 duration-300"
          >
            Pt
          </button>
        </div>

      </div>

      <motion.div 
        initial={{opacity:0, x:-300}} 
        animate={{opacity:1, x:0}} 
        transition={{duration: .5}} 
        className="  mt-14 lg:hidden w-full  flex flex-col md:flex-row"
      > 
        <div className="md:w-3/6 bg-middleLight dark:bg-middleDark flex justify-center relative  z-10">
          <div className="absolute bottom-3">
            <h1 className="text-center text-textLight dark:text-textDark text-6xl font-bold">
              Dilley Andrade
            </h1>
            <h5 
              className="text-center text-textLight dark:text-textDark text-base"
            >
              Dev FullStack | ReactJs | NodeJs | Linux
            </h5>
          </div>
          <Image src="/myPhoto.png" width={400} height={300} alt="My Image" />
        </div>
        
        <motion.div 
          initial={{opacity:0, x:-300}} 
          animate={{opacity:1, x:0}} 
          transition={{delay: .4, duratiton:.5}} 
          className="md:w-3/6 mt-8 md:mt-0 flex md:justify-between flex-col px-6 pt-6"
        >
          <h1 className="text-center md:text-start text-5xl md:text-6xl text-blueColor  font-bold">
            {isEnglish 
              ? 'From Backend to Frontend, Developing Innovative Solutions.'
              : 'Do Backend ao Frontend, criando Soluções Inovadoras.'
            }
          </h1>
          <h5 
            className="text-center md:text-start text-textLight dark:text-textDark text-base"
          >
            Dev FullStack | ReactJs | NodeJs | Linux
          </h5>
          <a className="border-2 text-center border-blueColor text-textLight dark:text-textDark
            text-2xl bg-none  py-3 mt-5 rounded-xl hover:bg-blueColor duration-300"
            href="https://api.whatsapp.com/send?phone=5581986632609"
            target="_blank"
          >
            {isEnglish ? 'Talk to me' : 'Fale comigo'}
          </a>
  
          <div className="border-middleLight dark:border-middleDark mt-8 border-t-2" />
        </motion.div>
      </motion.div>

    </main>   
  )
}
