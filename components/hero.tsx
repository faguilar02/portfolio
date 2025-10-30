"use client"

import { useState, useEffect } from "react"
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react"
import Image from "next/image"

interface HeroProps {
  language: "es" | "en"
}

export default function Hero({ language }: HeroProps) {
  const [displayedName, setDisplayedName] = useState("")
  const fullName = "Fernando Aguilar"

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      if (index <= fullName.length) {
        setDisplayedName(fullName.slice(0, index))
        index++
      } else {
        clearInterval(interval)
      }
    }, 100)

    return () => clearInterval(interval)
  }, [])

  const content = {
    en: {
      greeting: "Hello, I'm",
      role: "Full Stack Developer",
      location: "Trujillo, Peru • 22 years old",
      tagline: "Building scalable and modern web apps.",
      cta: "View My Work",
    },
    es: {
      greeting: "Hola, soy",
      role: "Desarrollador Full Stack",
      location: "Trujillo, Perú • 22 años",
      tagline: "Construyendo aplicaciones web inteligentes, escalables y modernas.",
      cta: "Ver mi trabajo",
    },
  }

  const text = content[language]

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Content */}
          <div>
            <div className="slide-in-down mb-6">
              <p className="text-secondary text-lg font-medium">{text.greeting}</p>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-4 slide-in-up">
              <span className="text-white">{displayedName}</span>
            </h1>

            <div className="mb-6 slide-in-up" style={{ animationDelay: "0.2s" }}>
              <p className="text-2xl md:text-3xl text-muted-foreground font-light mb-2">{text.role}</p>
              <p className="text-secondary text-sm">{text.location}</p>
            </div>

            <p className="text-lg text-muted-foreground max-w-xl mb-12 slide-in-up" style={{ animationDelay: "0.4s" }}>
              {text.tagline}
            </p>

            {/* Social Links */}
            <div className="flex gap-6 mb-12 slide-in-up" style={{ animationDelay: "0.6s" }}>
              <a
                href="https://github.com/faguilar02"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg border border-border hover:border-secondary hover:text-secondary hover:shadow-lg hover:shadow-secondary/20 transition-all duration-300"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/feraguidev"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg border border-border hover:border-secondary hover:text-secondary hover:shadow-lg hover:shadow-secondary/20 transition-all duration-300"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:davidfer.aguilar02@gmail.com"
                className="p-3 rounded-lg border border-border hover:border-secondary hover:text-secondary hover:shadow-lg hover:shadow-secondary/20 transition-all duration-300"
              >
                <Mail size={24} />
              </a>
            </div>

            {/* CTA Button */}
            <div className="slide-in-up" style={{ animationDelay: "0.8s" }}>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-8 py-3 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-secondary/30 transition-all duration-300 group"
              >
                {text.cta}
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right column - Image */}
          <div className="hidden lg:flex justify-center items-center slide-in-up" style={{ animationDelay: "0.3s" }}>
            <div className="relative w-120 h-120">
              <Image
                src="/images/design-mode/task_01k8e52yc0fc2ar5ah0t1pjtmq_1761411814_img_1-removebg-preview.png"
                alt="Fernando Aguilar - Cartoon Avatar"
                fill
                className="object-contain leading-7"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
