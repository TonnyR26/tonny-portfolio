"use client"

import { motion } from "framer-motion"
import Particles from "react-tsparticles"
import Image from "next/image"
import { FiMail, FiPhone, FiLinkedin, FiDownload, FiFileText } from "react-icons/fi"

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Particules sombres */}
      <Particles
        className="absolute top-0 left-0 w-full h-full"
        options={{
          fpsLimit: 60,
          particles: {
            number: { value: 40 },
            color: { value: "#00ff85" },
            shape: { type: "circle" },
            opacity: { value: 0.2 },
            size: { value: { min: 1, max: 3 } },
            move: {
              enable: true,
              speed: 0.5,
              direction: "none",
              outModes: "bounce",
            },
            links: {
              enable: true,
              distance: 120,
              color: "#00ff85",
              opacity: 0.1,
              width: 1,
            },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              onClick: { enable: false },
            },
          },
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center flex flex-col items-center relative z-10"
      >
        {/* Photo avec animation */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 120,
          }}
          className="w-40 h-40 rounded-full overflow-hidden border-4 border-indigo-500 shadow-2xl mb-6"
        >
          <Image
            src="/images/tonny.jpg"
            alt="Tonny Razafimanantsoa"
            width={160}
            height={160}
            className="object-cover w-full h-full"
          />
        </motion.div>

        {/* Nom */}
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
          Tonny <span className="text-indigo-500">Razafimanantsoa</span>
        </h1>

        {/* Sous-titre */}
        <p className="mt-6 text-xl text-zinc-400">
          Développeur Full-Stack · ERP · Mobile · IA
        </p>

        {/* Description */}
        <p className="mt-4 text-zinc-500 max-w-2xl">
          Spécialisé dans le développement de solutions métiers complexes :
          ERP, CRM, applications web & mobiles, automatisation et IA.
        </p>

        {/* Contacts */}
        <div className="mt-10 flex justify-center gap-6 flex-wrap">
          {/* Email */}
          <a
            href="mailto:rtojonirinatonny@gmail.com"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 transition shadow-lg text-white"
          >
            <FiMail size={20} />
            rtojonirinatonny@gmail.com
          </a>

          {/* Téléphone */}
          <a
            href="tel:+261346531225"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 transition shadow-lg text-white"
          >
            <FiPhone size={20} />
            +261 34 65 31 225
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/razafimanantsoa-tojonirina-tonny-a197871a9/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-700 hover:bg-blue-800 transition shadow-lg text-white"
          >
            <FiLinkedin size={20} />
            Razafimanantsoa Tojonirina Tonny
          </a>
        </div>

        {/* Encadré CV */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-10 w-full max-w-xl"
        >
          <div className="relative overflow-hidden rounded-2xl border border-indigo-500/30 bg-zinc-900/70 backdrop-blur-md p-6 shadow-2xl">
            {/* Effet lumineux */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl" />

            <div className="relative flex flex-col sm:flex-row items-center justify-between gap-5">
              <div className="flex items-center gap-4 text-left">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-500/15 text-indigo-400">
                  <FiFileText size={25} />
                </div>

                <div>
                  <h2 className="text-lg font-semibold text-white">
                    Mon Curriculum Vitae
                  </h2>
                  <p className="text-sm text-zinc-400">
                    Découvrez mon parcours et mes compétences.
                  </p>
                </div>
              </div>

              <a
                href="/CV_Tonny_Razafimanantsoa.pdf"
                download
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-all duration-300 shadow-lg shadow-indigo-500/20 hover:scale-105"
              >
                <FiDownload size={19} />
                Télécharger le CV
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
