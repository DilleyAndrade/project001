import Image from "next/image";
import Titles from "./Titles";
import Services from "./Services";
import { useContext } from "react";
import { LangContext } from "@/context/langContext";

export default function HomePage() {

  const { isEnglish, setIsEnglish } = useContext(LangContext)

  return (
   
    <main id="start" className="flex mb-10 h-5/6">
    
      <div className="bg-middleLight dark:bg-middleDark w-5/12 flex flex-col items-center justify-end relative"> 
        <div className="absolute mb-16">
          <h1 className="text-center text-textLight dark:text-textDark text-7xl font-bold">Dilley Andrade</h1>
          <h5 className="text-center text-textLight dark:text-textDark text-2xl">Dev FullStack | React/Nodejs | Linux | DevOps</h5>
        </div>
        <Image src="/myPhoto.png" width={400} height={300} alt="My Image" />
      </div>
      <div className="w-8/12 pt-8 pl-12 flex flex-col justify-between ">

        <div className="flex gap-4 justify-end w-full">

          <button onClick={()=> setIsEnglish(true)} className="bg-menuLight h-10 w-10 rounded-full hover:scale-105 duration-300">En</button>
          <button onClick={()=> setIsEnglish(false)}  className="bg-menuLight h-10 w-10 rounded-full hover:scale-105 duration-300">Pt</button>
        
        </div>

        <h1 className="text-start text-blueColor w-5/6 text-7xl font-bold">
          {isEnglish 
            ? 'From Backend to Frontend, Developing Innovative Solutions.'
            : 'Do Backend ao Frontend, criando Soluções Inovadoras.'
          }
        </h1>

        <h5 className="text-start text-textLight dark:text-textDark text-2xl my-3">Dev FullStack | React/Nodejs | Linux | DevOps</h5>

        <a className="border-2 border-blueColor text-textLight dark:text-textDark
          text-2xl bg-none max-w-max py-3 px-14 rounded-xl hover:bg-blueColor duration-300"
          href="https://api.whatsapp.com/send?phone=5581986632609"
          target="_blank"
        >
          {isEnglish ? 'Talk to me' : 'Fale comigo'}
        </a>

        <div className="border-middleLight dark:border-middleDark my-8 border-t-2" />

        <Titles
          titles=
          {isEnglish ? 'Main services' : 'Principais Serviços'}
          
        />
        <div className="flex flex-wrap w-full justify-between gap-8">
          <Services
            serviceImage="/webDevelopment.svg"
            serviceTitle="Front End"
            serviceDescription=
            {isEnglish
              ? 'I use the most requested tools in the development market, such as React, Next, Tailwind, Git, Styled Components.'
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
            serviceImage="/devOps.svg"
            serviceTitle="DevOps"
            serviceDescription=
            {isEnglish
              ? 'The perfect synergy between automation, infrastructure and continuous processes. Always maintaining constant learning.'
              : 'A sinergia perfeita entre automação, infraestrutura e processos contínuos. Sempre mantendo o aprendizado constante.'
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
        <div className="border-middleLight dark:border-middleDark mt-8 border-t-2" />
      </div>
    </main>   
  )
}
