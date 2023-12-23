import { DiscordLogo, GithubLogo, InstagramLogo, LinkedinLogo, TelegramLogo, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

export default function Footer() {
  return (
    <div id="contacts">
      <div>
        <h1 className="text-textLight dark:text-textDark text-7xl font-bold">Dilley Andrade</h1>
        <h5 className="text-blueColor text-2xl mt-3">Dev FullStack | React/Nodejs | Linux | DevOps</h5>
        <div>
          <div className="flex gap-6 mt-5 mb-9">
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
          <h5 className="text-blueColor text-2xl">Contato profissional</h5>
          <h5 className="text-textLight dark:text-textDark text-2xl">+55 (81) 986-632-609</h5>
          <br />
          <h5 className="text-blueColor text-2xl">Diga olá no Discord</h5>
          <h5 className="text-textLight dark:text-textDark text-2xl">dilleyandrade</h5>
        </div>
      </div>
      <div>

      </div>
      <div className="border-middleLight dark:border-middleDark my-8 border-t-2" />
      <h5 className="text-center text-textLight dark:text-textDark text-2xl mb-8">2024&copy; Todos os direitos reservados. Desenvolvido por Dilley Andrade</h5>
    </div>
  )
}
