// Toggle mobile menu
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
});

function changeImage(element) {
  const currentImage = document.getElementById("currentImage");
  currentImage.src = element.src;
}

// Optional Zoom Feature
const mainImage = document.getElementById("currentImage");
mainImage.addEventListener("click", () => {
  mainImage.classList.toggle("zoomed");
});

function openTab(evt, tabName) {
  // Hide all tab contents
  var tabContent = document.querySelectorAll(".tab-content");
  tabContent.forEach((tab) => tab.classList.remove("active"));

  // Remove active class from all buttons
  var tabButtons = document.querySelectorAll(".tab-button");
  tabButtons.forEach((button) => button.classList.remove("active"));

  // Show current tab and activate button
  document.getElementById(tabName).classList.add("active");
  evt.currentTarget.classList.add("active");
}
