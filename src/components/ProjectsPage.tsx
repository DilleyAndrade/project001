import Project from "./Project";
import Titles from "./Titles";

export default function ProjectsPage() {
  return (
    <div id="projects">
      <div className="flex flex-col items-center">
        <div className="flex justify-center">
          <Titles 
            titles="Projetos principais"
          />
        </div>
        <div className="flex flex-wrap justify-between gap-y-8 mb-12">
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
        </div>

        <a href="https://github.com/DilleyAndrade?tab=repositories" className="text-blueColor text-sm font-bold">
          Veja mais no meu Github
        </a>
      </div>

      <div className="border-middleLight dark:border-middleDark my-8 border-t-2" />
      
    </div>
  )
}
