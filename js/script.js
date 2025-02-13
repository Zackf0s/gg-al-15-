
let noButton = document.getElementById('noBtn');
let card = document.getElementById('card');
let yesButton = document.getElementById('yesBtn');

noButton.addEventListener('click', function() {
  card.classList.add('flip');
  yesButton.style.fontSize = (parseInt(window.getComputedStyle(yesButton).fontSize) + 12) + 'px';
});

// Agregamos el evento de clic a la carta para que se dé vuelta cuando se haga clic en ella
card.addEventListener('click', function() {
  // Verificamos si la carta ya está volteada antes de permitir que se vuelva a voltear
  if (!card.classList.contains('flip')) {
    card.classList.toggle('flip');
  }
});

noButton.addEventListener('click', function() {
  card.classList.add('flip');
  let fontSize = parseInt(window.getComputedStyle(yesButton).fontSize);
  if (fontSize >= 150) {
    alert("Aceptame pofii :(");
  }
});

function createConfetti() {
  const colors = ['#ffcc00', '#ff3399', '#66ccff', '#99ff99']; // Colores de los confetis
  const confetti = document.createElement('div');
  confetti.classList.add('confetti');
  confetti.style.left = Math.random() * window.innerWidth + 'px';
  confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]; // Color aleatorio
  document.body.appendChild(confetti);
  
  // Eliminar el confeti después de la animación
  confetti.addEventListener('animationend', function() {
    confetti.remove();
  });
}

function animateConfetti() {
  for (let i = 0; i < 200; i++) { // Aumentamos la cantidad de confetis
    setTimeout(createConfetti, i * 50); // Crear confeti cada 50ms
  }
}

yesButton.addEventListener('click', function() {
  animateConfetti();
  // Aquí puedes agregar más acciones si es necesario
});

let popup = document.getElementById('popup');
let closePopupButton = document.getElementById('closePopup');

yesButton.addEventListener('click', function() {
  popup.style.display = 'block';
});

closePopupButton.addEventListener('click', function() {
  popup.style.display = 'none';
});

let acceptPopup = document.getElementById('acceptPopup');
let closeAcceptPopupButton = document.getElementById('closeAcceptPopup');

noButton.addEventListener('click', function() {
  acceptPopup.style.display = 'block';
});

closeAcceptPopupButton.addEventListener('click', function() {
  acceptPopup.style.display = 'none';
});


yesButton.addEventListener('click', function() {
  let fontSize = parseInt(window.getComputedStyle(yesButton).fontSize);
  if (fontSize >= 150) {
    popup.style.display = 'block';
  }
});

closePopupButton.addEventListener('click', function() {
  popup.style.display = 'none';
});

// Obtener referencia al elemento de audio
var audio = document.getElementById("myAudio");

// Reproducir la música
function playMusic() {
  audio.play();
}

// Pausar la música
function pauseMusic() {
  audio.pause();
}
