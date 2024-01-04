import Image from "next/image";
import Titles from "./Titles";
import Services from "./Services";
import { useContext } from "react";
import { LangContext } from "@/context/langContext";
import {motion} from 'framer-motion'
import { List } from "@phosphor-icons/react/dist/ssr";

export default function HomePage() {

  const { isEnglish, setIsEnglish } = useContext(LangContext)

  return (
   
    <main id="start" className="hidden lg:flex flex-col lg:flex-row overflow-hidden mb-10 w-full h-5/6">
    
      <motion.div 
        initial={{opacity:0, x:-300}} 
        animate={{opacity:1, x:0}} 
        transition={{duration: .5}} 
        className="hidden lg:flex bg-middleLight dark:bg-middleDark w-5/12  z-10 flex-col
          items-center justify-end relative overflow-hidden"
      > 
        <div className="absolute mb-4 2xl:mb-16">
          <h1 
            className="text-center text-textLight dark:text-textDark text-4xl  xl:text-7xl
            font-bold"
          >
            Dilley Andrade
          </h1>
          <h5 
            className="text-center text-textLight dark:text-textDark text-xl 2xl:text-2xl"
          >
            Dev FullStack | ReactJs | NodeJs | Linux
          </h5>
        </div>
        <Image src="/myPhoto.png" width={400} height={300} style={{width:'90%' , height:'auto%'}} alt="My Image" />
      </motion.div>

      <motion.div 
        initial={{opacity:0, x:-300}}
        animate={{opacity:1, x:0}}
        transition={{delay: .4, duratiton:.5}}
        className="w-7/12 pt-8 pl-12 mb flex lg:flex flex-col  justify-between "
      >
        <div className="flex mb-5 gap-4 justify-end w-full">
          <button
            onClick={()=> setIsEnglish(true)}
            className="bg-menuLight h-10 w-10 rounded-full hover:scale-105 duration-300"
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
        <div>
          <h1 
            className="text-start text-blueColor lg:w-full 2xl:w-5/6 text-5xl xl:text-7xl
            2xl:text-8xl font-bold"
          >
            {isEnglish
              ? 'From Backend to Frontend, Developing Innovative Solutions.'
              : 'Do Backend ao Frontend, criando Soluções Inovadoras.'
            }
          </h1>
          <h5
            className="text-start text-textLight dark:text-textDark text-2xl my-3"
          >
            Dev FullStack | ReactJs | NodeJs | Linux
          </h5>
        </div>
        
        <a className="border-2 border-blueColor text-textLight dark:text-textDark
          text-2xl bg-none max-w-max py-3 px-14 rounded-xl hover:bg-blueColor duration-300"
          href="https://api.whatsapp.com/send?phone=5581986632609"
          target="_blank"
        >
          {isEnglish ? 'Talk to me' : 'Fale comigo'}
        </a>
        <div className="border-middleLight dark:border-middleDark mt-8 border-t-2" />
        
      </motion.div>

    </main>   
  )
}
