import Project from "./Project";
import Titles from "./Titles";

export default function ProjectsPage() {
  return (
    <div id="projects">
      <div className="flex justify-center">
        <Titles 
          titles="Projetos principais"
        />
      </div>
      <div className="flex flex-wrap justify-between gap-y-8">
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
      <div className="border-middleLight dark:border-middleDark my-8 border-t-2" />
    </div>
  )
}
