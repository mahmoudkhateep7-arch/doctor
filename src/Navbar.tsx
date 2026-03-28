import { useEffect, useState } from "react";
import BigScreenNav from "./components/BigscreenNav";
import LogoC from "./components/Logo";
import SmallScreenNav from "./components/SmallCsreenNav";

export default function NavbarC() {
  const [scrollLength, setScrollLength] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrollLength(true)
      } else {
        setScrollLength(false)
      }

    }
    window.addEventListener('scroll', handleScroll)
    return () => { window.removeEventListener('scroll', handleScroll) }
  })
  return (
    <div className="fixed z-50 top-0 h-20 w-full  ">
      <div className={`flex w-full h-20 items-center gap-8 md:gap-16 lg:gap-40 justify-between ${scrollLength ? 'bg-white' : ''}  p-4`}>
        <LogoC></LogoC>
        <SmallScreenNav></SmallScreenNav>
        <BigScreenNav></BigScreenNav>
      </div>
      {/* small menue goes here */}
    </div>
  )
}