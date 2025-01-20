import React, { useEffect, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesComponent = (props) => {
  // Initialize particles engine once when the component mounts
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // Load the slim particles package
      await loadSlim(engine);
      // You can choose to load other particle packages, e.g., loadBasic(engine);
    });
  }, []);

  // Memoize the options to avoid unnecessary re-renders
  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#000000", // Dark background to contrast the particles
        },
      },
      fpsLimit: 60, // Set frame rate to 60 for smooth rendering
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push", // Push more particles on click
          },
          onHover: {
            enable: true,
            mode: "repulse", // Repel particles on hover
          },
        },
        modes: {
          push: {
            quantity: 4, // Add 4 particles on click
          },
          repulse: {
            distance: 100, // Repulse particles at 100px distance
            duration: 0.4, // Repulse duration in seconds
          },
        },
      },
      particles: {
        color: {
          value: ["#940000", "#a70000", "#e20000"], // Red color gradient for particles
        },
        links: {
          color: "#ffffff", // White links connecting particles
          distance: 100, // Distance at which particles are connected
          enable: true, // Enable links
          opacity: 0.5, // Link opacity
          width: 2, // Link width
        },
        move: {
          direction: "none", // No specific direction for particle movement
          enable: true, // Enable movement of particles
          outModes: {
            default: "bounce", // Bounce particles when they hit the edges
          },
          random: true, // Enable random movement
          speed: 2, // Particle speed
          straight: false, // Disable straight particle movement
        },
        number: {
          density: {
            enable: true, // Enable density mode
            value_area: 800, // Area density
          },
          value: 100, // Number of particles
        },
        opacity: {
          value: { min: 0.5, max: 0.9 }, // Particle opacity varies for a dynamic look
        },
        shape: {
          type: ["circle", "square", "triangle"], // Multiple shapes for variety
        },
        size: {
          value: { min: 1, max: 5 }, // Particle size range
        },
      },
      detectRetina: true, // Detect retina displays for high-DPI screens
    }),
    []
  );

  return <Particles id={props.id} options={options} />; // Render particles component with specified options
};

export default ParticlesComponent;
