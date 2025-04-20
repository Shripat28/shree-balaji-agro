// Toggle mobile menu
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
});

//for product modal
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("product-modal");
  const closeBtn = document.querySelector(".close-btn");
  const modalImage = document.getElementById("modal-image");
  const modalTitle = document.getElementById("modal-title");
  const modalDescription = document.getElementById("modal-description");

  // Product details mapping
  const products = {
    product1: {
      image: "assets/images/product1-details.png",
      title: "MDF Cake Base",
      description:
        "A sturdy and elegant base to support and showcase your cakes with style.",
    },
    product2: {
      image: "assets/images/product2-details.png",
      title: "Paper Bowl",
      description:
        "Eco-friendly and durable, perfect for serving hot and cold foods alike.",
    },
    product3: {
      image: "assets/images/product3-details.png",
      title: "Pastry Base",
      description:
        "The ideal foundation for creating and displaying delicious pastries with ease.",
    },
  };

  // Show modal with the details of the selected product
  const showModal = (productKey) => {
    modalImage.src = products[productKey].image;
    modalTitle.textContent = products[productKey].title;
    modalDescription.textContent = products[productKey].description;
    modal.style.display = "flex"; // Show the modal
  };

  // Close the modal when the close button is clicked
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Close the modal if clicked outside the modal content
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  // Attach event listeners to each 'Show Details' button
  const detailsBtns = document.querySelectorAll(".details-btn");
  detailsBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const productKey = btn.getAttribute("data-product");
      showModal(productKey);
    });
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
