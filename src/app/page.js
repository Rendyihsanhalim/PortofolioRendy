"use client"
import HomePage from "./components/HomePage/HomePage"

import Header from "./components/header/HeaderPage"
import { useEffect } from "react"

export default function Home() {

  return (
    <div className="Page">
      <Header/>
      <HomePage/>  
    </div>
  )
}
