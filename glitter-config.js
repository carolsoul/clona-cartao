particlesJS("particles-js", {
    particles: {
      number: {
        value: 200,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: ["#ffffff", "#ffff79", "#ffffa1", "#f0f0f0", "#ffee55"]
      },
      shape: {
        type: ["circle", "triangle", "star"]
      },
      opacity: {
        value: 1,
        random: true,
        anim: {
          enable: true,
          speed: 1.5,
          opacity_min: 0.3,
          sync: false
        }
      },
      size: {
        value: 4,
        random: true,
        anim: {
          enable: true,
          speed: 3,
          size_min: 1,
          sync: false
        }
      },
      line_linked: {
        enable: false
      },
      move: {
        enable: true,
        speed: 2,
        direction: "bottom",
        random: true,
        straight: false,
        out_mode: "out"
      }
    },
    interactivity: {
      detectsOn: "canvas",
      events: {
        onhover: {
          enable: false
        },
        onclick: {
          enable: false
        },
        resize: true
      }
    },
    retina_detect: true,
    plugins: {
      customEmoji: {
        enable: true,
        emoji: "✨" // Emojis de purpurina!
      }
    }
  });
  