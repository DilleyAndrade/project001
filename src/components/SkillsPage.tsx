import React from 'react'
import Titles from './Titles'
import SkillsIcons from './SkillsIcons'

export default function SkillsPage() {
  return (
    <div id='skills'>
      <div className='flex items-start justify-between'>
        <div className='w-9/12'>
          <Titles titles='Hard Skills' />
          <div className='flex flex-wrap gap-8'>
            <SkillsIcons
              skillImage='/skills/javascriptLogo.png'
              skillName='JavaScript'
            />
            <SkillsIcons
              skillImage='/skills/typescriptLogo.png'
              skillName='TypeScript'
            />
            <SkillsIcons
              skillImage='/skills/reactLogo.png'
              skillName='React Js'
            />
            <SkillsIcons
              skillImage='/skills/nextLogo.png'
              skillName='Next Js'
            />
            <SkillsIcons
              skillImage='/skills/cssmodulesLogo.png'
              skillName='Css Modules'
            />
            <SkillsIcons
              skillImage='/skills/sassLogo.png'
              skillName='Sass / Scss'
            />
            <SkillsIcons
              skillImage='/skills/tailwindLogo.png'
              skillName='Tailwind'
            />
            <SkillsIcons
              skillImage='/skills/styledcomponentsLogo.png'
              skillName='Styled Comp.'
            />
            <SkillsIcons
              skillImage='/skills/nodeLogo.png'
              skillName='Node Js'
            />
            <SkillsIcons
              skillImage='/skills/expressLogo.png'
              skillName='Express'
            />
            <SkillsIcons
              skillImage='/skills/mongodbLogo.png'
              skillName='Mongo Db'
            />
            <SkillsIcons
              skillImage='/skills/postgreLogo.png'
              skillName='Postgre SQL'
            />
            <SkillsIcons
              skillImage='/skills/jestLogo.png'
              skillName='Jest'
            />
            <SkillsIcons
              skillImage='/skills/linuxLogo.png'
              skillName='Linux'
            />
            <SkillsIcons
              skillImage='/skills/shellLogo.png'
              skillName='Bash Script'
            />
            <SkillsIcons
              skillImage='/skills/vimLogo.png'
              skillName='Vim'
            />
            <SkillsIcons
              skillImage='/skills/gitLogo.png'
              skillName='Git'
            />
          </div>
        </div>
        <div>
          <Titles titles='Soft Skills' />
          <ul className='text-textLight dark:text-textDark text-2xl font-bold'>
            <li>- Trabalho em equipe</li>
            <li>- Comunicação efetiva</li>
            <li>- Adaptabilidade</li>
            <li>- Pensamento crítico</li>
            <li>- Resolução de problemas</li>
            <li>- Gerenciamento de tempo</li>
            <li>- Atitude positiva</li>
            <li>- Proatividade</li>
            <li>- Aprendizado contínuo</li>
            <li>- Flexibilidade</li>
          </ul>
        </div>
      </div>
      <div className="border-middleLight dark:border-middleDark my-8 border-t-2" />
    </div>
  )
}
