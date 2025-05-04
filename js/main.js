// Toggle mobile menu
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
});

//for background animation
const canvas = document.getElementById("rain-canvas");
const ctx = canvas.getContext("2d");

let drops = [];

function resizeCanvas() {
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
}

function createDrops(count) {
  drops = [];
  for (let i = 0; i < count; i++) {
    drops.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      length: Math.random() * 20 + 10,
      velocityY: Math.random() * 4 + 4,
      opacity: Math.random() * 0.3 + 0.2,
    });
  }
}

function drawRain() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = "rgba(124, 179, 66, 0.5)";
  ctx.lineWidth = 1;

  for (let drop of drops) {
    ctx.beginPath();
    ctx.moveTo(drop.x, drop.y);
    ctx.lineTo(drop.x, drop.y + drop.length);
    ctx.stroke();
  }

  updateRain();
  requestAnimationFrame(drawRain);
}

function updateRain() {
  for (let drop of drops) {
    drop.y += drop.velocityY;
    if (drop.y > canvas.height) {
      drop.y = -drop.length;
      drop.x = Math.random() * canvas.width;
    }
  }
}

window.addEventListener("resize", () => {
  resizeCanvas();
  createDrops(150); // Adjust number of drops here
});

resizeCanvas();
createDrops(150);
drawRain();

//for scroll animation
// In your external JS file
document
  .querySelector('.nav-link[href="#about"]')
  .addEventListener("click", function (e) {
    e.preventDefault();
    const aboutSection = document.querySelector("#about");

    aboutSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });

// Cool scroller
window.addEventListener("scroll", () => {
  const scrollBar = document.getElementById("scrollBar");
  const scrollTop = window.scrollY;
  const scrollHeight =
    document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / scrollHeight) * 100;
  scrollBar.style.width = scrollPercent + "%";
});
