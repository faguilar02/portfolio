"use client";

import { Github, Linkedin, Mail } from "lucide-react";

interface FooterProps {
  language: "es" | "en";
}

export default function Footer({ language }: FooterProps) {
  const content = {
    en: {
      tagline: "Let's build something amazing together",
      contact: "Get in touch",
      copyright: "© 2025 Fernando Aguilar. All rights reserved.",
    },
    es: {
      tagline: "Construyamos algo increíble juntos",
      contact: "Ponte en contacto",
      copyright: "© 2025 Fernando Aguilar. Todos los derechos reservados.",
    },
  };

  const text = content[language];

  return (
    <footer className="py-16 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4 gradient-text">
            {text.tagline}
          </h3>
          <a
            href="mailto:davidfer.aguilar02@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
          >
            <Mail size={20} />
            {text.contact}
          </a>
        </div>

        <div className="flex justify-center gap-6 mb-8">
          <a
            href="https://github.com/faguilar02"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg border border-border hover:border-primary hover:text-primary transition-all duration-300"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/feraguidev"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg border border-border hover:border-primary hover:text-primary transition-all duration-300"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:davidfer.aguilar02@gmail.com"
            className="p-3 rounded-lg border border-border hover:border-primary hover:text-primary transition-all duration-300"
          >
            <Mail size={24} />
          </a>
        </div>

        <div className="text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center gap-2">
            {text.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
