// Toggle mobile menu
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
});

// search bar implementation
// JavaScript for Search Functionality
document.getElementById("searchBar").addEventListener("input", function () {
  const searchQuery = this.value.toLowerCase(); // Get the search input
  const productCards = document.querySelectorAll(".product-card"); // Get all product cards

  productCards.forEach(function (card) {
    const productName = card.querySelector("h3").textContent.toLowerCase(); // Get product name
    const productDescription = card
      .querySelector("p")
      .textContent.toLowerCase(); // Get product description

    // Check if the search query matches product name or description
    if (
      productName.includes(searchQuery) ||
      productDescription.includes(searchQuery)
    ) {
      card.style.display = "block"; // Show the card if there's a match
    } else {
      card.style.display = "none"; // Hide the card if no match
    }
  });
});
