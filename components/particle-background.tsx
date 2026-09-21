"use client";

import { useEffect, useState, useMemo } from "react";
import Particles, { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine, ISourceOptions } from "@tsparticles/engine";

const initParticles = async (engine: Engine): Promise<void> => {
  await loadSlim(engine);
};

export default function ParticleBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: {
        enable: false,
      },
      fpsLimit: 60,
      background: {
        color: {
          value: "transparent",
        },
      },
      particles: {
        number: {
          value: 70,
          density: {
            enable: true,
            width: 1920,
            height: 1080,
          },
        },
        color: {
          value: ["#ffffff", "#e9d5ff", "#c084fc", "#ddd6fe"],
        },
        shape: {
          type: "circle",
        },
        opacity: {
          value: { min: 0.4, max: 0.7 },
          animation: {
            enable: true,
            speed: 0.4,
            sync: false,
          },
        },
        size: {
          value: { min: 1, max: 2 },
        },
        links: {
          enable: false,
        },
        collisions: {
          enable: false,
        },
        move: {
          enable: true,
          speed: 0.3,
          direction: "none",
          random: true,
          straight: false,
          outModes: {
            default: "out",
          },
        },
      },
      interactivity: {
        events: {
          onHover: {
            enable: false,
          },
          onClick: {
            enable: false,
          },
          resize: {
            enable: true,
          },
        },
      },
      detectRetina: true,
      responsive: [
        {
          maxWidth: 768,
          options: {
            particles: {
              number: {
                value: 40,
              },
            },
          },
        },
      ],
    }),
    []
  );

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none -z-10 overflow-hidden"
      style={{
        background: "linear-gradient(to left, #1B1429, #140F23)",
      }}
    >
      {mounted && (
        <ParticlesProvider init={initParticles}>
          <Particles
            id="tsparticles"
            className="w-full h-full pointer-events-none"
            options={options}
          />
        </ParticlesProvider>
      )}
    </div>
  );
}
