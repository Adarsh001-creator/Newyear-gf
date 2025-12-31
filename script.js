/* PAGE NAV */
function goNext(n) {
  document.getElementById("page" + n).classList.remove("active");
  document.getElementById("page" + (n + 1)).classList.add("active");
}

function goBack(n) {
  document.getElementById("page" + n).classList.remove("active");
  document.getElementById("page" + (n - 1)).classList.add("active");
}

/* HOME NEXT → SONG START */
function nextFromHome() {
  document.getElementById("song").play();
  goNext(1);
}

/* FLOATING HEARTS (WORKING) */
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (14 + Math.random() * 20) + "px";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}, 500);

/* COUNTDOWN + FIREWORK SOUND */
const newYear = new Date("January 1, 2026 00:00:00").getTime();
let firePlayed = false;

setInterval(() => {
  const now = new Date().getTime();
  const diff = newYear - now;

  if (diff <= 0 && !firePlayed) {
    document.getElementById("fireSound").play();
    firePlayed = true;
    return;
  }

  if (diff < 0) return;

  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);
  const s = Math.floor((diff / 1000) % 60);

  days.innerText = d;
  hours.innerText = h;
  minutes.innerText = m;
  seconds.innerText = s;
}, 1000);

/* FIREWORK VISUAL */
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

function firework() {
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height / 2;

  for (let i = 0; i < 35; i++) {
    ctx.beginPath();
    ctx.arc(x, y, 2, 0, Math.PI * 2);
    ctx.fillStyle = `hsl(${Math.random() * 360},100%,60%)`;
    ctx.fill();
  }
}

setInterval(() => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  firework();
}, 600);