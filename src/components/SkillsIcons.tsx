import Image from 'next/image'

interface SkillsIconsProps{
  skillImage: string
  skillName: string
}

export default function SkillsIcons({ skillImage, skillName }:SkillsIconsProps) {
  return (
    <div className='flex max-w-max flex-col'>
      <div className='p-3 bg-blueColor max-w-max mb-3 rounded-2xl hover:scale-105 duration-300'>
        <Image src={skillImage} width={90} height={90} alt='Icon technology' />
      </div>
      <p className='text-textLight dark:text-textDark text-center text-lg'>
        {skillName}
      </p>
    </div>
  )
}
