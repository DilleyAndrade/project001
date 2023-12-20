import Image from "next/image";

export default function HomePage() {
  return (
    <main className="flex h-screen">
      <div className="bg-middleLight dark:bg-middleDark w-5/12 flex flex-col items-center justify-end relative"> 
        <div className="absolute mb-16">
          <h1 className="text-center text-textLight dark:text-textDark text-7xl font-bold">Dilley Andrade</h1>
          <h5 className="text-center text-textLight dark:text-textDark text-2xl">FullStack Developer | React | Nodejs | Linux</h5>
        </div>
        <Image src="/myPhoto.png" width={400} height={300} alt="My Image" />
      </div>
     <div className="w-7/12 py-8 px-12">
      <h1 className="text-start text-blueColor text-7xl font-bold">Transformando ideias em realidade com códigos e design</h1>
      <h5 className="text-start text-textLight dark:text-textDark text-2xl my-3">FullStack Developer | React | Nodejs | Linux</h5>

      <a className="border-2 border-blueColor text-textLight dark:text-textDark
        text-2xl bg-none flex items-center justify-center w-56 h-14 rounded-xl hover:bg-blueColor duration-300"
        href=""
      >
        <h5>Fale comigo!</h5>
      </a>

      <div className="border-middleLight dark:border-middleDark my-8 border-t-2" />

     </div>
    </main>
  )
}
