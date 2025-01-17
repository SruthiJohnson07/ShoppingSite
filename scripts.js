// Sample Product Data
const products = [
  { id: "shirt1", name: "Casual Shirt", price: "$24.99", description: "Stylish casual shirt.", image: "assets/shirt1.jpg", category: "shirts" },
  { id: "shirt2", name: "Formal Shirt", price: "$29.99", description: "Elegant formal shirt.", image: "assets/shirt2.jpg", category: "shirts" },
  { id: "dress1", name: "Summer Dress", price: "$34.99", description: "Light summer dress.", image: "assets/dress1.jpg", category: "dresses" },
  { id: "dress2", name: "Evening Dress", price: "$49.99", description: "Gorgeous evening dress.", image: "assets/dress2.jpg", category: "dresses" },
];

// Load Product Details
function loadProductDetails() {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("item");
  const product = products.find((p) => p.id === productId);

  if (product) {
    document.querySelector(".product-details h2").textContent = product.name;
    document.querySelector(".product-details img").src = product.image;
    document.querySelector(".product-details img").alt = product.name;
    document.querySelector(".product-details p:nth-of-type(1)").innerHTML = `<strong>Price:</strong> ${product.price}`;
    document.querySelector(".product-details p:nth-of-type(2)").innerHTML = `<strong>Description:</strong> ${product.description}`;

    // Populate Similar Products
    const similarProducts = products.filter((p) => p.category === product.category && p.id !== productId).slice(0, 4);
    const similarProductsContainer = document.querySelector(".similar-products .product-grid");
    similarProductsContainer.innerHTML = similarProducts.map((p) => `
      <div class="product">
        <a href="product.html?item=${p.id}">
          <img src="${p.image}" alt="${p.name}">
          <h4>${p.name}</h4>
          <p>${p.price}</p>
        </a>
      </div>`).join("");
  }
}

// Execute only on Product Details Page
if (window.location.pathname.includes("product.html")) {
  document.addEventListener("DOMContentLoaded", loadProductDetails);
}
