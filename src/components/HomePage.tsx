import Image from "next/image";
import Titles from "./Titles";
import Services from "./Services";

export default function HomePage() {
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
        <h1 className="text-start text-blueColor text-7xl font-bold">Transformando ideias em realidade com códigos e design</h1>
        <h5 className="text-start text-textLight dark:text-textDark text-2xl my-3">Dev FullStack | React/Nodejs | Linux | DevOps</h5>

        <a className="border-2 border-blueColor text-textLight dark:text-textDark
          text-2xl bg-none max-w-max py-3 px-14 rounded-xl hover:bg-blueColor duration-300"
          href="#"
        >
          <h5>Fale comigo!</h5>
        </a>

        <div className="border-middleLight dark:border-middleDark my-8 border-t-2" />

        <Titles
          titles="Principais Serviços"
        />
        <div className="flex flex-wrap w-full justify-between gap-8">
          <Services
            serviceImage="/webDevelopment.svg"
            serviceTitle="Front End"
            serviceDescription="Utilizo as ferramentas mais solicitadas no mercado de desenvolvimento, tais como React, Next, Tailwind, Git, Styled Components"
          />

          <Services
            serviceImage="/serverSide.svg"
            serviceTitle="Back End"
            serviceDescription="No lado do servidor, tenho utilizado Node, Express, Postgress, Mongo Db, garantindo uma perfeita conexão no Back End"
          />

          <Services
            serviceImage="/devOps.svg"
            serviceTitle="DevOps"
            serviceDescription="A sinergia perfeita entre automação, infraestrutura e processos contínuos. Sempre mantendo o aprendizado constante."
          />

          <Services
            serviceImage="/mobileDev.svg"
            serviceTitle="Mobile"
            serviceDescription="O React Native é minha principal ferramenta no desenvolvimento mobile, com ela podemos desenvolver apps para Android e IOS"
          />
        </div>
        <div className="border-middleLight dark:border-middleDark mt-8 border-t-2" />
      </div>
    </main>
  )
}
