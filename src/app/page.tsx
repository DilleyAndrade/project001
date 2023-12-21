import Header from "@/components/Menu";
import MainPage from "@/components/MainPage";

export default function Home() {
 
  return (
    <div className="flex bg-bgLight dark:bg-bgDark">
      <Header />
      <MainPage />
      
    </div>
  )
}
