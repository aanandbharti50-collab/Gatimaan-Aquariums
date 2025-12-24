// js/shop.js

const grid = document.getElementById("productGrid");

if (!grid) {
  console.error("productGrid not found");
}

// Build shop cards from PRODUCTS
Object.values(PRODUCTS).forEach(product => {
  const card = document.createElement("a");

  card.href = `product.html?id=${product.id}`;
  card.className = "product-card";

  card.dataset.category = product.category;
  card.dataset.price = product.price;
  card.dataset.name = product.name;

  card.innerHTML = `
    <div class="product-img">
      <img src="${product.image}" alt="${product.name}">
    </div>
    <h3>${product.name}</h3>
    <div class="price">
      <del>₹${product.mrp}</del>
      <span>₹${product.price}</span>
    </div>
  `;

  grid.appendChild(card);
});
