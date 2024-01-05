"use client"
import HomePage from "./components/HomePage/HomePage"
import AboutPage from "./components/AboutPage/AboutPage"
import { useEffect } from "react"

export default function Home() {

  useEffect( () => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  },[])
  return (
    <div className="Page">
      <HomePage/>  
      <AboutPage/>
    </div>
  )
}
