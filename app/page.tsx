"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Education from "@/components/education"
import Footer from "@/components/footer"

export default function Home() {
  const [language, setLanguage] = useState<"es" | "en">("en")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <main className="min-h-screen bg-background">
      <Header language={language} setLanguage={setLanguage} />
      <Hero language={language} />
      <About language={language} />
      <Projects language={language} />
      <Education language={language} />
      <Footer language={language} />
    </main>
  )
}
