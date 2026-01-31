'use client';

import Particles from "@tsparticles/react";
import type { Container } from "tsparticles-engine";
import { useEffect, useState, useMemo } from "react";
import { loadFull  } from "tsparticles";

interface ParticlesComponentProps {
  id?: string;
}

const ParticlesComponent: React.FC<ParticlesComponentProps> = ({ id }) => {
  const [initDone, setInitDone] = useState(false);

  useEffect(() => {
    const initEngine = async (engine: any) => {
      await loadFull(engine); // charge seulement les fonctionnalités essentielles
      setInitDone(true);
    };

    import("@tsparticles/react").then(({ initParticlesEngine }) => {
      initParticlesEngine(initEngine);
    });
  }, []);

  const particlesLoaded = (container: Container | undefined) => {
    console.log("Particles loaded:", container);
  };

  const options = useMemo(() => ({
    background: { color: { value: "#000000" } }, // fond noir profond
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: { enable: true, mode: "repulse" },
        onHover: { enable: true, mode: "grab" },
      },
      modes: {
        push: { distance: 200, duration: 15 },
        grab: { distance: 150 },
      },
    },
    particles: {
      color: { value: "#00ff85" }, // vert
      links: {
        color: "#00ff85",
        distance: 120,
        enable: true,
        opacity: 0.2,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: { default: "bounce" },
        random: true,
        speed: 0.8, // légèrement plus lent pour ambiance sombre
        straight: false,
      },
      number: { density: { enable: true }, value: 80 }, // moins de particules pour rester subtil
      opacity: { value: 0.4 }, // plus sombre
      shape: { type: "circle" },
      size: { value: { min: 2, max: 4 } },
    },
    detectRetina: true,
  }), []);

  return initDone ? (
    <Particles
      id={id || "tsparticles"}
      init={particlesLoaded}
      loaded={particlesLoaded}
      options={options}
      className="absolute top-0 left-0 w-full h-full"
    />
  ) : null;
};

export default ParticlesComponent;
