import { useContext } from "react";
import Project from "./Project";
import Titles from "./Titles";
import { LangContext } from "@/context/langContext";
import { projectList } from "./listProject";

export default function ProjectsPage() {

  const {isEnglish} = useContext(LangContext)

  const allProjects = projectList

  return (
    <div id="projects">
      <div className="flex flex-col items-center">
        <div className="flex justify-center">
          <Titles 
            titles={isEnglish ? "Main projects" : "Projetos principais"}
          />
        </div>
        <div className="flex flex-wrap items-center justify-center gap-8 mb-12">
          {allProjects.map((project)=>(
            <Project key={project.projectTitle}
              projectImage={project.projectImage}
              projectTitle={project.projectTitle}
              projectDescription={project.projectDescription}
              projectTechnology={project.projectTechnology}
              
              projectSiteLink={project.projectSiteLink}
              projectCodeLink={project.projectCodeLink}
            />
          ))}
          
          
        </div>

        <a href="https://github.com/DilleyAndrade?tab=repositories" className="text-blueColor text-sm font-bold">
          {isEnglish ? "See more in my Github" : "Veja mais no meu Github"}
        </a>
      </div>

      <div className="border-middleLight dark:border-middleDark my-8 border-t-2" />
      
    </div>
  )
}
