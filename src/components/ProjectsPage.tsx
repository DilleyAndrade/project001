import { useContext } from "react";
import Project from "./Project";
import Titles from "./Titles";
import { LangContext } from "@/context/langContext";
import { projectList } from "./listProject";
import {motion} from 'framer-motion'

export default function ProjectsPage() {

  const { isEnglish } = useContext<any>(LangContext)

  const allProjects = projectList

  return (
    <div id="projects">
      <div className="flex flex-col w-full items-center">
        <div className="flex w-full flex-col">
          <Titles 
            titles={isEnglish ? "Main projects" : "Projetos principais"}
            titleDetail={isEnglish ? "Some of my projects" : "Alguns dos meus projetos"}
          />
        </div>
        <motion.div 
          initial={{opacity: 0, y: -180}} 
          whileInView={{opacity: 1, y:0}} 
          transition={{duration: .6}} 
          className="flex flex-wrap items-center justify-center mt-8 lg:mt-0 gap-8 mb-12 px-5"
        >
          {allProjects.map((project)=>(
            <Project 
              key={project.projectTitle}
              projectImage={project.projectImage}
              projectTitle={project.projectTitle}
              projectDescription={project.projectDescription}
              projectSiteLink={project.projectSiteLink}
              projectCodeLink={project.projectCodeLink}
              projectTech1={project.projectTech1}
              projectTech2={project.projectTech2}
              projectTech3={project.projectTech3}
              projectTech4={project.projectTech4}
              projectTech5={project.projectTech5}
            />
          ))}
        </motion.div>

        <a 
          href="https://github.com/DilleyAndrade?tab=repositories"
          target="_blank"
          className="text-blueColor text-sm font-bold"
        >
          {isEnglish ? "See more in my Github" : "Veja mais no meu Github"}
        </a>
      </div>

      <div className="border-middleLight dark:border-middleDark my-8 border-t-2" />
      
    </div>
  )
}
