// Espera a interação do usuário para liberar o som
window.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("audio");
    const clickOverlay = document.getElementById("clickToPlay");
  
    const startAudio = () => {
      audio.play().then(() => {
        console.log("Áudio começou!");
        clickOverlay.remove(); // Remove a camada de clique invisível
      }).catch((err) => {
        console.log("Erro ao tentar tocar o áudio:", err);
      });
    };
  
    // Toca ao primeiro clique ou toque
    clickOverlay.addEventListener("click", startAudio, { once: true });
  });
  