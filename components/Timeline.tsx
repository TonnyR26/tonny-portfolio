"use client"

import { experiences } from "@/data/experiences"
import { motion } from "framer-motion"

export default function Timeline() {
  return (
    <section id="experience" className="py-20 px-6 bg-zinc-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Expériences
        </h2>

        <div className="relative border-l-2 border-zinc-700 ml-4">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              className="mb-10 ml-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="absolute -left-4 w-8 h-8 bg-indigo-500 rounded-full border-2 border-zinc-900"></span>
              <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
              <span className="text-zinc-400 text-sm">{exp.company} · {exp.period}</span>
              <p className="mt-2 text-zinc-300">{exp.stack.join(", ")}</p>
              <ul className="mt-2 list-disc list-inside text-zinc-400">
                {exp.missions.map((m, idx) => (
                  <li key={idx}>{m}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
