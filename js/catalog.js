// pop-up for catalog page
// Sample data map (customize image paths and descriptions)
const productDetails = {
  "MDF Cake Base": {
    img: "../assets/images/product1-details.png",
    desc: "Strong, stylish support for your cakes, MDF core with decorative top.",
  },

  "Paper Bowl": {
    img: "../assets/images/product2-details.png",
    desc: "Eco-friendly and durable, perfect for serving hot and cold foods alike.",
  },

  "Pastry Base": {
    img: "../assets/images/product3-details.png",
    desc: "The ideal foundation for creating and displaying delicious pastries with ease.",
  },

  "Small Panettone": {
    img: "../assets/images/catalog-small-panettone-details.png",
    desc: "Traditional Italian mold perfect for festive treats and soft bakes.",
  },
  "Panettone Baso": {
    img: "../assets/images/catalog-panettone-baso-details.png",
    desc: "Wider base for richer, fluffier holiday bakes.",
  },
  "Moulds for Plum cake": {
    img: "../assets/images/catalog-moulds-plum-details.png",
    desc: "Moisture-retaining design ideal for plum cakes.",
  },
  "Ecos - Optima mould round": {
    img: "../assets/images/catalog-ecos-mould-round-details.png",
    desc: "Round paper moulds with grease-resistant properties for optimal baking.",
  },
  "Ecos - Optima mould square": {
    img: "../assets/images/catalog-ecos-mould-square-details.png",
    desc: "Square moulds with clean lines, perfect for brownies and cakes.",
  },
  "Choco lava - Optima Moulds": {
    img: "../assets/images/catalog-chocolava-details.png",
    desc: "Heat-resistant moulds ideal for molten lava cakes and single servings.",
  },
  "Cup Cake": {
    img: "../assets/images/catalog-cupcake-details.png",
    desc: "Classic baking cups available in various sizes and vibrant designs.",
  },
  "Mould for Brownie": {
    img: "../assets/images/catalog-brownie-details.png",
    desc: "Rigid moulds designed for even baking and sharp brownie edges.",
  },
  Plumpy: {
    img: "../assets/images/catalog-plumpy-details.png",
    desc: "Cute, rounded baking moulds designed for muffins and mini cakes.",
  },
  "Tulip Cup": {
    img: "../assets/images/catalog-tulip-details.png",
    desc: "Elegant tulip-shaped cups ideal for upscale muffin presentation.",
  },
  "Paper Bag": {
    img: "../assets/images/catalog-paperbag-details.png",
    desc: "Eco-friendly paper bags perfect for retail and takeaway packaging.",
  },
  "Optima Moulds": {
    img: "../assets/images/catalog-optimamould-details.png",
    desc: "Premium-quality baking moulds engineered for professional performance.",
  },
  "Cake Box": {
    img: "../assets/images/catalog-cakebox-details.png",
    desc: "Sturdy and presentable boxes to transport and showcase your cakes.",
  },
  "L Window Cake Box": {
    img: "../assets/images/catalog-cakebox-L-details.png",
    desc: "Elegant cake boxes with a large L-shaped window for visibility.",
  },
  "S Window Cake Box": {
    img: "../assets/images/catalog-cakebox-S-details.png",
    desc: "Compact and stylish cake box with an S-shaped window display.",
  },
};

const modal = document.getElementById("product-modal");
const modalImg = document.getElementById("modal-image");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-description");
const closeBtn = document.querySelector(".close-btn");

// Show modal
function showModal(title) {
  const data = productDetails[title];

  if (data) {
    modalImg.src = data.img;
    modalTitle.textContent = title;
    modalDesc.textContent = data.desc;
  } else {
    modalImg.src = "";
    modalTitle.textContent = title;
    modalDesc.textContent = "More details coming soon.";
  }

  modal.classList.add("active");
}

// Close modal
function closeModal() {
  modal.classList.remove("active");

  // Optional: clear modal content (good for resetting)
  modalImg.src = "";
  modalTitle.textContent = "";
  modalDesc.textContent = "";
}

// Attach open listeners
document.querySelectorAll(".details-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const title = btn.parentElement.querySelector("h3").textContent.trim();
    showModal(title);
  });
});

// Attach close listener
closeBtn.addEventListener("click", closeModal);

// Optional: close when clicking outside modal content
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

window.addEventListener("load", function () {
  const galleryItems = document.querySelectorAll(".gallery-item");
  galleryItems.forEach((item) => {
    const randomDelay = Math.random() * 2; // Random delay between 0 and 2 seconds
    item.style.animationDelay = `${randomDelay}s`;
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
