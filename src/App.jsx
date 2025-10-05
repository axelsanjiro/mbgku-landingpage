"use client"

import { useEffect, useState } from "react"
import Navbar from "./components/Navbar.jsx"
import Hero from "./components/Hero.jsx"
import Features from "./components/Features.jsx"
import About from "./components/About.jsx"
import DataSection from "./components/DataSection.jsx"
import Footer from "./components/Footer.jsx"
import Login from "./components/Login.jsx"

export default function App() {
  const [route, setRoute] = useState(window.location.hash || "#home")

  useEffect(() => {
    const handler = () => setRoute(window.location.hash || "#home")
    window.addEventListener("hashchange", handler)
    return () => window.removeEventListener("hashchange", handler)
  }, [])

  if (route === "#login") {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Login />
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main id="home" className="flex-1">
        <Hero />
        <Features />
        <About />
        <DataSection />
      </main>
      <Footer />
    </div>
  )
}
