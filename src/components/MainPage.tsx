import AboutMePage from "./AboutMePage";
import Footer from "./Footer";
import HomePage from "./HomePage";
import HomePageMobile from "./HomePageMobile";
import MainServices from "./MainServices";
import ProjectsPage from "./ProjectsPage";
import SkillsPage from "./SkillsPage";
import Testemonial from "./TestemonialPage";

export default function MainPage() {
  return (
    <main className="max-screen lg:ml-60 flex flex-col mt-0">
      <HomePage />
      <HomePageMobile />
      <div className="ml-0 lg:ml-12">
        <MainServices />
        <AboutMePage />
        <Testemonial />
        <SkillsPage />
        <ProjectsPage />
        <Footer />
      </div>
      
    </main>
  )
}
