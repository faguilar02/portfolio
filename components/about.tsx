"use client"

import TechIcon from "./tech-icon"

interface AboutProps {
  language: "es" | "en"
}

export default function About({ language }: AboutProps) {
  const content = {
    en: {
      title: "About Me",
      description:
        "I'm a 9th-semester Systems and AI Engineering student focused on full stack web development. I'm driven by continuous learning, exploring new technologies that help me build high-quality, clean, and scalable applications.",
      technologies: [
        "React",
        "Angular",
        "Node.js",
        "NestJS",
        "TypeScript",
        "JavaScript",
        "HTML",
        "CSS",
        "TailwindCSS",
        "Docker",
        "PostgreSQL",
        "MongoDB",
      ],
    },
    es: {
      title: "Sobre mí",
      description:
        "Soy estudiante de 9.º ciclo de Ingeniería de Sistemas e Inteligencia Artificial, enfocado en desarrollo web full stack. Me motiva el aprendizaje continuo, explorando nuevas tecnologías que me ayuden a construir aplicaciones de calidad, priorizando el código limpio y escalable.",
      technologies: [
        "React",
        "Angular",
        "Node.js",
        "NestJS",
        "TypeScript",
        "JavaScript",
        "HTML",
        "CSS",
        "TailwindCSS",
        "Docker",
        "PostgreSQL",
        "MongoDB",
      ],
    },
  }

  const text = content[language]

  return (
    <section id="about" className="py-20 px-6 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 gradient-text">{text.title}</h2>

        <div className="space-y-12">
          <div>
            <p className="text-lg text-muted-foreground leading-relaxed">{text.description}</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">
              {language === "en" ? "Technologies" : "Tecnologías"}
            </h3>
            <div className="overflow-hidden">
              <div className="scroll-animation flex gap-8">
                {[...text.technologies, ...text.technologies].map((tech, index) => (
                  <div key={index} className="flex flex-col items-center gap-2 flex-shrink-0">
                    <TechIcon name={tech} size={40} />
                    <span className="text-xs text-muted-foreground">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
