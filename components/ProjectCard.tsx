"use client"

import { motion } from "framer-motion"
import {
  FiGlobe,
  FiSmartphone,
  FiExternalLink,
} from "react-icons/fi"

interface ProjectLink {
  type: "mobile" | "web"
  url: string
  label: string
}

interface ProjectCardProps {
  title: string
  description: string
  stack: string[]
  icon: string
  links?: ProjectLink[]
}

export default function ProjectCard({
  title,
  description,
  stack,
  icon,
  links,
}: ProjectCardProps) {
  return (
    <motion.div
      className="bg-zinc-900 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition flex flex-col items-start"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Icône du projet */}
      <div className="text-4xl mb-4">{icon}</div>

      {/* Titre */}
      <h3 className="text-xl font-bold text-indigo-400 mb-2">
        {title}
      </h3>

      {/* Description */}
      <p className="text-zinc-400 mb-4">
        {description}
      </p>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2">
        {stack.map((tech, i) => (
          <span
            key={i}
            className="px-2 py-1 text-xs bg-zinc-800 rounded-full text-zinc-300"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Liens du projet */}
      {links && links.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-3">
          {links.map((link, index) => (
            <a
              key={`${link.type}-${index}`}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg
                         bg-zinc-800 border border-zinc-700
                         text-sm text-zinc-300
                         hover:text-white hover:border-indigo-500
                         hover:bg-indigo-500/10
                         transition-all duration-300"
            >
              {/* Icône selon le type */}
              {link.type === "mobile" ? (
                <FiSmartphone size={17} />
              ) : (
                <FiGlobe size={17} />
              )}

              <span>{link.label}</span>

              <FiExternalLink
                size={14}
                className="opacity-50"
              />
            </a>
          ))}
        </div>
      )}
    </motion.div>
  )
}
