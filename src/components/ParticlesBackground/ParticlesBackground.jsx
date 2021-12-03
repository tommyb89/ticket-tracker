import Particles from "react-tsparticles";
import React from "react";

const ParticlesBackground = () => {
  return (
    <Particles
      className="particles"
      id="tsparticles"
      options={{
        particles: {
          number: {
            value: 40,
            density: {
              enable: false,
              area: 800,
            },
          },
          color: {
            value: [
              "#00EAD3",
              "#BD10E0",
              "#B8E986",
              "#50E3C2",
              "#FFD300",
              "#E86363",
            ],
          },
          shape: {
            type: ["circle"],
            stroke: {
              width: 5,
              color: ["#a72d68"],
            },
            polygon: {
              nb_sides: 5,
            },
            image: {
              src: "img/github.svg",
              width: 100,
              height: 100,
            },
          },
          opacity: {
            value: 0.4,
            random: true,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 48,
            random: true,
            anim: {
              enable: false,
              speed: 8,
              size_min: 0.1,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#FFF5B7",
            opacity: 0.4,
            width: 1.2,
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          detect_on: "window",
          events: {
            onhover: {
              enable: true,
              mode: "bubble",
            },
            onclick: {
              enable: true,
              mode: "bubble",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 250,
              size: 30,
              duration: 2,
              opacity: 8,
              speed: 3,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
};

export default ParticlesBackground;
