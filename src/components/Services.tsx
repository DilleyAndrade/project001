import { Desktop } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

interface ServicesProps{
  serviceTitle: string
  serviceDescription: string
  serviceImage: string
}

export default function Services({ serviceTitle, serviceDescription, serviceImage }:ServicesProps) {
  return (
    <main className="mt-8 lg:mt-0 flex flex-wrap items-center justify-center gap-3 ">
      <div className="p-4 bg-middleLight dark:bg-middleDark rounded-lg">
        <Image src={serviceImage} width={50} height={50} alt="Service Image" />
      </div>
      <div className="w-80">
        <h5 
          className="text-center lg:text-start text-textLight dark:text-textDark text-2xl font-bold"
        >
          {serviceTitle}
        </h5>
        <p className="text-center lg:text-start  text-textLight dark:text-textDark text-sm font-bold">{serviceDescription}</p>
      </div>
      
    </main>
  )
}
