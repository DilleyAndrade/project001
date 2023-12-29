import Image from "next/image";

interface ServicesProps{
  serviceTitle: string
  serviceDescription: string
  serviceImage: string
}

export default function Services({ serviceTitle, serviceDescription, serviceImage }:ServicesProps) {
  return (
    <main 
      className="flex flex-col justify-center items-center lg:flex-row gap-3 sm:w-72 xl:w-5/12
       border-middleLight dark:border-middleDark hover:border-blueColor rounded-xl 
        lg:border-4 lg:p-3 2xl:p-6 duration-300">

      <div className="bg-middleLight dark:bg-middleDark p-7   rounded-lg max-w-max lg:w-full">
        <Image src={serviceImage} width={67} height={67} alt="Service Image" />
      </div>

      <div className="text-textLight dark:text-textDark font-bold text-center lg:text-start">

        <h5 className="text-2xl xl:text-3xl">{serviceTitle}</h5>
        <p className="text-sm lg:text-xs xl:text-base">{serviceDescription}</p>
      </div>
    </main>
  )
}
