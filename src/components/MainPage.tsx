import AboutMePage from "./AboutMePage";
import HomePage from "./HomePage";
import SkillsPage from "./SkillsPage";
import Testemonial from "./TestemonialPage";

export default function MainPage() {
  return (
    <main className="w-screen ml-60  flex flex-col">
      <HomePage />
      <div className="ml-12">
        <AboutMePage />
        <Testemonial />
        <SkillsPage />
      </div>
      
    </main>
  )
}
