"use client"

import { motion } from "framer-motion"

interface ProjectCardProps {
  title: string
  description: string
  stack: string[]
  icon: string
}

export default function ProjectCard({ title, description, stack, icon }: ProjectCardProps) {
  return (
    <motion.div
      className="bg-zinc-900 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition cursor-pointer flex flex-col items-start"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-indigo-400 mb-2">{title}</h3>
      <p className="text-zinc-400 mb-4">{description}</p>
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
    </motion.div>
  )
}
