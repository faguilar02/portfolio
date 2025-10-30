"use client"

import { ExternalLink } from "lucide-react"
import Image from "next/image"

interface EducationProps {
  language: "es" | "en"
}

export default function Education({ language }: EducationProps) {
  const content = {
    en: {
      title: "Education & Certifications",
      educationTitle: "Education",
      certificationsTitle: "Certifications",
      education: {
        university: "Universidad Privada Antenor Orrego (UPAO)",
        degree: "Systems and AI Engineering",
        semester: "9th Semester",
      },
      certifications: [
        {
          title: "Angular de Cero a Experto — Edición 2025",
          description:
            "Formación avanzada en el nuevo ecosistema de Angular, abordando el uso de standalone components, desarrollo zoneless, manejo de signals, interceptors, optimización del rendimiento y buenas prácticas modernas para aplicaciones escalables.",
          image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-kKebNtoxPtooPa8sTRZyXqjzQCe23E.png",
          url: "https://cursos.devtalles.com/certificates/u3vkocu8p1",
        },
        {
          title: "Angular de Cero a Experto",
          description:
            "Curso completo centrado en la arquitectura modular de Angular, implementación de routes y lazy loading, uso de reactive forms, pipes, directives y gestión de datos con observables para construir aplicaciones robustas y mantenibles.",
          image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-mSLIztOAmaYzeQGGSSonXK1WNFe2yv.png",
          url: "https://cursos.devtalles.com/certificates/rhg2kqrqx3",
        },
        {
          title: "Node.js de Cero a Experto",
          description:
            "Desarrollo backend con Node.js bajo el enfoque de Clean Architecture, incluyendo autenticación, envío de correos, WebSockets y manejo de servicios escalables con buenas prácticas de seguridad y estructura de código limpio.",
          image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-prhBopN0kfdybUGzilv7HGsOERTwqj.png",
          url: "https://cursos.devtalles.com/certificates/smrrkhyzdz",
        },
      ],
    },
    es: {
      title: "Educación y Certificados",
      educationTitle: "Educación",
      certificationsTitle: "Certificados",
      education: {
        university: "Universidad Privada Antenor Orrego (UPAO)",
        degree: "Ingeniería de Sistemas e Inteligencia Artificial",
        semester: "9.º Ciclo",
      },
      certifications: [
        {
          title: "Angular de Cero a Experto — Edición 2025",
          description:
            "Formación avanzada en el nuevo ecosistema de Angular, abordando el uso de standalone components, desarrollo zoneless, manejo de signals, interceptors, optimización del rendimiento y buenas prácticas modernas para aplicaciones escalables.",
          image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-kKebNtoxPtooPa8sTRZyXqjzQCe23E.png",
          url: "https://cursos.devtalles.com/certificates/u3vkocu8p1",
        },
        {
          title: "Angular de Cero a Experto",
          description:
            "Curso completo centrado en la arquitectura modular de Angular, implementación de routes y lazy loading, uso de reactive forms, pipes, directives y gestión de datos con observables para construir aplicaciones robustas y mantenibles.",
          image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-mSLIztOAmaYzeQGGSSonXK1WNFe2yv.png",
          url: "https://cursos.devtalles.com/certificates/rhg2kqrqx3",
        },
        {
          title: "Node.js de Cero a Experto",
          description:
            "Desarrollo backend con Node.js bajo el enfoque de Clean Architecture, incluyendo autenticación, envío de correos, WebSockets y manejo de servicios escalables con buenas prácticas de seguridad y estructura de código limpio.",
          image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-prhBopN0kfdybUGzilv7HGsOERTwqj.png",
          url: "https://cursos.devtalles.com/certificates/smrrkhyzdz",
        },
      ],
    },
  }

  const text = content[language]

  return (
    <section id="education" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 gradient-text">{text.title}</h2>

        {/* Education Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6 text-accent">{text.educationTitle}</h3>
          <div className="space-y-3 pl-4 border-l-2 border-accent">
            <p className="font-semibold text-foreground text-lg">{text.education.university}</p>
            <p className="text-muted-foreground">{text.education.degree}</p>
            <p className="text-sm text-secondary">{text.education.semester}</p>
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-accent">{text.certificationsTitle}</h3>

          <div className="space-y-6">
            {text.certifications.map((cert, index) => (
              <a
                key={index}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex gap-6 p-6 rounded-lg border border-border neon-border-hover bg-card/50 hover:bg-card transition-all duration-300 cursor-pointer"
              >
                {/* Certificate Image */}
                <div className="relative w-40 h-32 flex-shrink-0 overflow-hidden rounded-lg bg-muted">
                  <Image
                    src={cert.image || "/placeholder.svg"}
                    alt={cert.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Certificate Info */}
                <div className="flex-grow space-y-3">
                  <h4 className="font-semibold text-foreground group-hover:text-accent transition-colors text-lg">
                    {cert.title}
                  </h4>
                  <p className="text-sm text-muted-foreground line-clamp-2">{cert.description}</p>
                  <div className="flex items-center gap-2 text-secondary text-sm font-medium">
                    {language === "en" ? "View Certificate" : "Ver Certificado"}
                    <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
