'use client'
import MainPage from "@/components/MainPage";
import { IsOpenMenuMobile, LangContext } from "@/context/langContext";
import { useState } from "react";
import MenuMobile from "@/components/MenuMobile";
import Menu from "@/components/Menu";





export default function Home() {

  const [isEnglish, setIsEnglish] = useState(false)
  const [menuMobileIsOpen, setMenuMobileIsOpen] = useState(false)

 
  return (
    <div className="lg:flex-row bg-bgLight dark:bg-bgDark">
      <LangContext.Provider value={{isEnglish, setIsEnglish}}>
        <Menu />
        <IsOpenMenuMobile.Provider value={{setMenuMobileIsOpen}}>
          {menuMobileIsOpen && <MenuMobile /> }
          <MainPage />
        </IsOpenMenuMobile.Provider>
      </LangContext.Provider>
    </div>
  )
}
