"use client"

import { projects } from "@/data/projects"
import ProjectCard from "./ProjectCard"
import { motion } from "framer-motion"

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-6 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Projets
        </h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {projects.map((p, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <ProjectCard {...p} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
