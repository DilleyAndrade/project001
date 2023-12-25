import React, { useContext } from 'react'
import Titles from './Titles'
import SkillsIcons from './SkillsIcons'
import { LangContext } from '@/context/langContext'

export default function SkillsPage() {

  const {isEnglish} = useContext(LangContext)

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
              skillImage='/skills/figmaLogo.png'
              skillName='Figma'
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
            <li>{isEnglish ? '- Team work'               : '- Trabalho em equipe'}    </li>
            <li>{isEnglish ? '- Effective communication' : '- Comunicação efetiva'}   </li>
            <li>{isEnglish ? '- Adaptability'            : '- Adaptabilidade'}        </li>
            <li>{isEnglish ? '- Critical thinking'       : '- Pensamento crítico'}    </li>
            <li>{isEnglish ? '- Problem solving'         : '- Resolução de problemas'}</li>
            <li>{isEnglish ? '- Time management'         : '- Gerenciamento de tempo'}</li>
            <li>{isEnglish ? '- Positive attitude'       : '- Atitude positiva'}      </li>
            <li>{isEnglish ? '- Proactivity'             : '- Proatividade'}          </li>
            <li>{isEnglish ? '- Continuous learning'     : '- Aprendizado contínuo'}  </li>
            <li>{isEnglish ? '- Flexibility'             : '- Flexibilidade'}         </li>
          </ul>
        </div>
      </div>
      <h5 className="text-center text-textLight dark:text-textDark text-2xl mt-7">
        {isEnglish 
          ? 'I believe that a good professional is formed not only by technical ability, but also by the way he interacts with his team and their daily problems. I strive to perform both areas with excellence and care, after all, a company is not formed by a good professional, but by a good team working together in harmony and with a defined main objective.' 
          : 'Acredito que um bom profissional é formado não apenas pela capacidade técnica, mas também pela forma como ele interage com sua equipe e com seus problemas diários. Me empenho para desempenhar ambas as áreas com excelência e capricho, afinal,uma empresa é formada não por um bom profissional, mas sim por uma boa equipe trabalhando juntos com harmonia e um objetivo principal definido.'
          }
        
      </h5>

      <div className="border-middleLight dark:border-middleDark my-10 border-t-2" />
    </div>
  )
}
