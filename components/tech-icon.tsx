"use client"

import StackIcon from "tech-stack-icons"

interface TechIconProps {
  name: string
  size?: number
}

export default function TechIcon({ name, size = 32 }: TechIconProps) {
  const renderIcon = (techName: string) => {
    switch (techName) {
      case "Angular":
        return <StackIcon name="angular17" />
      case "React":
        return (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
            alt="React"
            style={{ width: size, height: size }}
          />
        )
      case "Node.js":
        return <StackIcon name="nodejs" />
      case "NestJS":
        return <StackIcon name="nestjs" />
      case "TypeScript":
        return <StackIcon name="typescript" />
      case "JavaScript":
        return (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
            alt="JavaScript"
            style={{ width: size, height: size }}
          />
        )
      case "HTML":
        return <StackIcon name="html5" />
      case "CSS":
        return <StackIcon name="css3" />
      case "TailwindCSS":
        return <StackIcon name="tailwindcss" />
      case "Docker":
        return <StackIcon name="docker" />
      case "PostgreSQL":
        return <StackIcon name="postgresql" />
      case "MongoDB":
        return <StackIcon name="mongodb" />
      default:
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: size, height: size }}>
            <circle cx="12" cy="12" r="10" />
          </svg>
        )
    }
  }

  return (
    <div
      className="flex items-center justify-center rounded-lg p-2 bg-card border border-border hover:border-primary transition-all"
      title={name}
      style={{ width: size + 16, height: size + 16 }}
    >
      {renderIcon(name)}
    </div>
  )
}
