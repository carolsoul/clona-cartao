const input = document.getElementById('nameInput');
const button = document.getElementById('enterBtn');
const errorMsg = document.getElementById('errorMsg');

input.addEventListener('input', () => {
  const value = input.value.trim().toLowerCase();
  if (value === "murilo") {
    button.style.display = 'inline-block';
    errorMsg.textContent = "";
  } else {
    button.style.display = 'none';
    if (value.length > 0) {
      errorMsg.textContent = "pqp... seu Nome querido, acorda";
    } else {
      errorMsg.textContent = "";
    }
  }
});

button.addEventListener('click', () => {
  window.location.href = "murilo.html";
});
