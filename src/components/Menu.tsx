import { GithubLogo, InstagramLogo, LinkedinLogo, YoutubeLogo } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="bg-menuLight dark:bg-menuDark w-60 h-screen flex  flex-col py-7 justify-between items-center">
        <div className="bg-middleLight dark:bg-middleDark w-28 h-28 rounded-xl flex items-center justify-center">
          <Image src="/logo.png" height={100} width={100} alt="Logo Dilley Anndrade"/>
        </div>
        <nav className="text-textLight dark:text-textDark text-3xl text-center">
          <ul>
            <li className="border-y-2 border-middleLight dark:border-middleDark py-2">
              <Link className="hover:text-blueColor duration-200" href="#start">
                Início
              </Link>
            </li>
            <li className="border-b-2 border-middleLight dark:border-middleDark py-2">
              <Link className="hover:text-blueColor duration-200" href="#aboutMe">
                Sobre Mim
              </Link>
            </li>
            <li className="border-b-2 border-middleLight dark:border-middleDark py-2">
              <Link className="hover:text-blueColor duration-200" href="#skills">
                Skills
              </Link>
            </li>
            <li className="border-b-2 border-middleLight dark:border-middleDark py-2">
              <Link className="hover:text-blueColor duration-200" href="#projects">
                Projetos
              </Link>
            </li>
            <li className="border-b-2 border-middleLight dark:border-middleDark py-2">
              <Link className="hover:text-blueColor duration-200" href="#contacts">
                Contatos
              </Link>
            </li>
          </ul>
        </nav>
        <div>
          <div className="flex justify-center gap-2 mb-2">
            <a href="https://www.linkedin.com/in/dilley-andrade/"target="_blank">
              <LinkedinLogo size={25} weight="fill" className="text-textLight dark:text-textDark hover:text-blueColor rounded-full hover:scale-125 duration-300" />
            </a>
            
            <a href="https://www.instagram.com/dilleyandrade/"target="_blank">
              <InstagramLogo size={25} weight="fill" className="text-textLight dark:text-textDark hover:text-blueColor rounded-full hover:scale-125 duration-300" />
            </a>

            <a href="https://github.com/DilleyAndrade"target="_blank">
              <GithubLogo size={25} weight="fill" className="text-textLight dark:text-textDark hover:text-blueColor rounded-full hover:scale-125 duration-300" />
            </a>

            <a href="https://www.youtube.com/channel/UCJFir2VE8hcQygD5kzabIhA"target="_blank">
              <YoutubeLogo size={25} weight="fill" className="text-textLight dark:text-textDark hover:text-blueColor rounded-full hover:scale-125 duration-300" />
            </a>

          </div>
          <p className="text-textLight dark:text-textDark text-xs text-center">2024&copy; Todos os direitos reservados<br />Desenvolvido por Dilley Andrade</p>
        </div>
      </div>
    </header>
  )
}
