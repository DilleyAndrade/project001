'use client'

import Header from "@/components/Menu";
import MainPage from "@/components/MainPage";
import { LangContext } from "@/context/langContext";
import { useState } from "react";


export default function Home() {

  const [isEnglish, setIsEnglish] = useState(false)
 
  return (
    <div className="flex bg-bgLight dark:bg-bgDark">
      <LangContext.Provider value={{isEnglish, setIsEnglish}}>
        <Header />
        <MainPage />
      </LangContext.Provider>
      
    </div>
  )
}
