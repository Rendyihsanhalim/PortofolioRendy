"use client";
import HomePage from "./components/HomePage/HomePage";
import AboutPage from "./components/AboutPage/AboutPage";
import Header from "./components/header/HeaderPage";
import { useEffect } from "react";

export default function Home() {
  return (
    <div >
      <div className="Page">
        <Header />
        <HomePage />
      </div>
      <AboutPage />
    </div>
  );
}
