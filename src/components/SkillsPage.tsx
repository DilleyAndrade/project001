import React, { useContext } from 'react'
import Titles from './Titles'
import SkillsIcons from './SkillsIcons'
import { LangContext } from '@/context/langContext'
import { listSkills } from './listSkills'
import {motion} from 'framer-motion'

export default function SkillsPage() {

  const {isEnglish} = useContext(LangContext)

  const allSkills = listSkills

  return (
    <div id='skills' className='overflow-hidden'>
      <motion.div 
        initial={{opacity:0, x:300}} 
        whileInView={{opacity:1, x:0}} 
        transition={{duration:.9}} 
        className='flex flex-col 2xl:flex-row justify-center 2xl:justify-between'
      >
        
        <div className='2xl:w-9/12'>
          <Titles 
            titles='Hard Skills'
            titleDetail={isEnglish ? 'Technologies i use' : 'Tecnologias que utilizo'}
          />
          <div className='flex justify-center 2xl:justify-start mt-4 flex-wrap gap-8 px-5 mb-14'>
            {allSkills.map((skill)=>(
              <SkillsIcons
                key={skill.name}
                skillImage={skill.image}
                skillName={skill.name}
              />
            ))}
          </div>
        </div>
      
        <div>
          <Titles 
              titles='Soft Skills' 
              titleDetail={isEnglish ? 'Main social skills' : 'Principais habilidades sociais'}
          />
          <div>
            <ul className='text-center flex flex-col gap-4 2xl:text-start text-textLight mt-1 dark:text-textDark text-2xl font-bold px-5'>
              <li>{isEnglish ? '- Team work'               : '- Trabalho em equipe'}    </li>
              <li>{isEnglish ? '- Effective communication' : '- Comunicação efetiva'}   </li>
              <li>{isEnglish ? '- Adaptability'            : '- Adaptabilidade'}        </li>
              <li>{isEnglish ? '- Critical thinking'       : '- Pensamento crítico'}    </li>
              <li>{isEnglish ? '- Problem solving'         : '- Resolução de problemas'}</li>
              <li>{isEnglish ? '- Time management'         : '- Gestão de tempo'}</li>
              <li>{isEnglish ? '- Positive attitude'       : '- Atitude positiva'}      </li>
              <li>{isEnglish ? '- Proactivity'             : '- Proatividade'}          </li>
              <li>{isEnglish ? '- Continuous learning'     : '- Aprendizado contínuo'}  </li>
              <li>{isEnglish ? '- Flexibility'             : '- Flexibilidade'}         </li>
            </ul>
          </div>
        </div>
      </motion.div>

      <motion.h5 
        initial={{opacity:0, y:-50}} 
        whileInView={{opacity:1, y:0}} 
        transition={{duration:.9}}  
        className="text-center text-textLight dark:text-textDark text-base 2xl:text-md mt-7 px-5"
      >
        {isEnglish 
          ? 'I believe that a good professional is formed not only by technical ability, but also by the way he interacts with his team and their daily problems. I strive to perform both areas with excellence and care, after all, a company is not formed by a good professional, but by a good team working together in harmony and with a defined main objective.' 
          : 'Acredito que um bom profissional é formado não apenas pela capacidade técnica, mas também pela forma como ele interage com sua equipe e com seus problemas diários. Me empenho para desempenhar ambas as áreas com excelência e capricho, afinal,uma empresa é formada não por um bom profissional, mas sim por uma boa equipe trabalhando juntos com harmonia e um objetivo principal definido.'
          }
      </motion.h5>
      <div className="border-middleLight dark:border-middleDark my-10 border-t-2" />
    </div>
  )
}
