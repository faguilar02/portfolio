"use client"

import { useState } from "react"
import { Globe } from "lucide-react"

interface HeaderProps {
  language: "es" | "en"
  setLanguage: (lang: "es" | "en") => void
}

export default function Header({ language, setLanguage }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en")
  }

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold gradient-text">FA</div>

        <div className="flex items-center gap-8">
          <div className="hidden md:flex gap-8">
            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {language === "en" ? "About" : "Sobre mí"}
            </a>
            <a href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {language === "en" ? "Projects" : "Proyectos"}
            </a>
            <a href="#education" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {language === "en" ? "Education" : "Educación"}
            </a>
          </div>

          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-2 rounded-lg border border-border hover:border-primary hover:text-primary transition-all"
          >
            <Globe size={18} />
            <span className="text-sm font-medium">{language.toUpperCase()}</span>
          </button>
        </div>
      </nav>
    </header>
  )
}
