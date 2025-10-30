"use client"

import { useState } from "react"
import { ExternalLink, Github, Play } from "lucide-react"
import TechIcon from "./tech-icon"
import VideoModal from "./video-modal"

interface ProjectsProps {
  language: "es" | "en"
}

export default function Projects({ language }: ProjectsProps) {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)

  const content = {
    en: {
      title: "Projects",
      projects: [
        {
          name: "Lápiz y Papel",
          description:
            "Inventory and sales management application for retail businesses. Features include sales registration, product inventory management, receipt visualization, supplier orders, and time-period reports.",
          technologies: ["Angular", "NestJS", "PostgreSQL", "Node.js", "TypeScript", "Docker"],
          video: "https://youtu.be/3fMhXLt2qDA",
          demo: null,
          github: null,
        },
        {
          name: "FerShop",
          description:
            "E-commerce platform with product listing, filtering, and pagination by category. Includes admin panel for product management with image uploads and detailed catalog control.",
          technologies: ["Angular", "NestJS", "PostgreSQL", "TypeScript"],
          video: "https://youtu.be/mmrloBP-YrM",
          demo: "https://fershop.vercel.app/",
          github: "https://github.com/faguilar02/fershop",
        },
        {
          name: "Notly",
          description:
            "Note management application where users can register, login, create, edit, delete, and archive notes. Features category filtering and organization capabilities.",
          technologies: ["Docker", "Angular", "NestJS", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
          video: "https://youtu.be/fsCsITGfN38",
          demo: "https://notes.faguilar.dev/notes",
          github: "https://github.com/faguilar02/notes-app",
        },
        {
          name: "Rick and Morty",
          description:
            "React application that lists Rick and Morty characters with search functionality and pagination. Simple yet effective character browser with responsive design.",
          technologies: ["React", "TypeScript", "Tailwind CSS"],
          video: "https://youtu.be/ITifThIJUc4",
          demo: "https://richiymorty.netlify.app",
          github: "https://github.com/faguilar02/rick-morty-react",
        },
        {
          name: "CitasVet",
          description:
            "Veterinary appointment scheduling application. Users can register appointments, view appointment details, track medical history, manage pet profiles, and update pet images.",
          technologies: ["Angular", "NestJS", "TypeScript", "PostgreSQL", "Docker", "Tailwind CSS", "CSS"],
          video: "https://youtu.be/1jZsCZ_6jpQ",
          demo: null,
          github: "https://github.com/faguilar02/citas-vet-frontend",
        },
      ],
    },
    es: {
      title: "Proyectos",
      projects: [
        {
          name: "Lápiz y Papel",
          description:
            "Aplicación de inventario y ventas para negocios minoristas. Incluye registro de ventas, gestión de productos, visualización de recibos, pedidos a proveedores y reportes por períodos.",
          technologies: ["Angular", "NestJS", "PostgreSQL", "Node.js", "TypeScript", "Docker"],
          video: "https://youtu.be/3fMhXLt2qDA",
          demo: null,
          github: null,
        },
        {
          name: "FerShop",
          description:
            "Plataforma de comercio electrónico con listado, filtrado y paginación de productos por categoría. Incluye panel de administrador para gestionar productos con carga de imágenes.",
          technologies: ["Angular", "NestJS", "PostgreSQL", "TypeScript"],
          video: "https://youtu.be/mmrloBP-YrM",
          demo: "https://fershop.vercel.app/",
          github: "https://github.com/faguilar02/fershop",
        },
        {
          name: "Notly",
          description:
            "Aplicación de gestión de notas donde los usuarios pueden registrarse, crear, editar, eliminar y archivar notas. Incluye filtrado por categorías y organización eficiente.",
          technologies: ["Docker", "Angular", "NestJS", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
          video: "https://youtu.be/fsCsITGfN38",
          demo: "https://notes.faguilar.dev/notes",
          github: "https://github.com/faguilar02/notes-app",
        },
        {
          name: "Rick and Morty",
          description:
            "Aplicación en React que lista personajes de Rick and Morty con funcionalidad de búsqueda y paginación. Navegador de personajes simple pero efectivo con diseño responsivo.",
          technologies: ["React", "TypeScript", "Tailwind CSS"],
          video: "https://youtu.be/ITifThIJUc4",
          demo: "https://richiymorty.netlify.app",
          github: "https://github.com/faguilar02/rick-morty-react",
        },
        {
          name: "CitasVet",
          description:
            "Aplicación de agendamiento de citas veterinarias. Los usuarios pueden registrar citas, ver detalles, hacer seguimiento del historial médico y gestionar perfiles de mascotas.",
          technologies: ["Angular", "NestJS", "TypeScript", "PostgreSQL", "Docker", "Tailwind CSS", "CSS"],
          video: "https://youtu.be/1jZsCZ_6jpQ",
          demo: null,
          github: "https://github.com/faguilar02/citas-vet-frontend",
        },
      ],
    },
  }

  const text = content[language]

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 gradient-text">{text.title}</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {text.projects.map((project, index) => (
            <div
              key={index}
              className="group p-6 rounded-lg border border-border neon-border-hover bg-card/50 hover:bg-card transition-all duration-300 flex flex-col"
            >
              <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-secondary transition-colors">
                {project.name}
              </h3>
              <p className="text-muted-foreground mb-6 text-sm leading-relaxed flex-grow">{project.description}</p>

              <div className="h-10 mb-6 flex items-center">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <div key={tech} className="flex-shrink-0">
                      <TechIcon name={tech} size={28} />
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => setSelectedVideo(project.video)}
                  className="flex items-center gap-2 text-sm text-accent hover:text-secondary transition-colors"
                >
                  <Play size={16} />
                  {language === "en" ? "Watch Video" : "Ver Video"}
                </button>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-accent hover:text-secondary transition-colors"
                  >
                    <ExternalLink size={16} />
                    {language === "en" ? "Demo" : "Demo"}
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-accent hover:text-secondary transition-colors"
                  >
                    <Github size={16} />
                    {language === "en" ? "Code" : "Código"}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <VideoModal
        isOpen={selectedVideo !== null}
        onClose={() => setSelectedVideo(null)}
        videoUrl={selectedVideo || ""}
      />
    </section>
  )
}
