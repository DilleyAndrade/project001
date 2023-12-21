import AboutMePage from "./AboutMePage";
import HomePage from "./HomePage";

export default function MainPage() {
  return (
    <main className="w-screen flex flex-col">
      <HomePage />
      <AboutMePage />
    </main>
  )
}
