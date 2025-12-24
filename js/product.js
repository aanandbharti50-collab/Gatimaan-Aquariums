// js/product.js
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

// If opened without ID, redirect to shop
if (!id || !PRODUCTS[id]) {
  window.location.href = "shop.html";
}

const product = PRODUCTS[id];

/* BASIC INFO */
const titleEl = document.getElementById("productTitle");
const priceEl = document.getElementById("productPrice");
const mrpEl   = document.getElementById("productMrp");
const descEl  = document.getElementById("productDesc");

if (titleEl) titleEl.innerText = product.name;
if (priceEl) priceEl.innerText = "₹" + product.price;
if (mrpEl)   mrpEl.innerText   = "₹" + product.mrp;
if (descEl)  descEl.innerText  = product.description;


/* FEATURES */
const features = document.getElementById("productFeatures");
features.innerHTML = "";
product.features.forEach(f => {
  const li = document.createElement("li");
  li.innerText = f;
  features.appendChild(li);
});


/* IMAGES */
const slider = document.getElementById("productSlider");
const dots = document.getElementById("sliderDots");
slider.innerHTML = "";
dots.innerHTML = "";

product.images.forEach((src, i) => {
  const img = document.createElement("img");
  img.src = src;
  if (i === 0) img.classList.add("active");
  slider.appendChild(img);

  const dot = document.createElement("span");
  dot.className = "dot" + (i === 0 ? " active" : "");
  dot.onclick = () => goSlide(i);
  dots.appendChild(dot);
});

/* ADD TO CART BUTTON HANDLER */
const addBtn = document.getElementById("addToCartBtn");

if (addBtn) {
  addBtn.addEventListener("click", () => {
    addToCart(product.id, q);
  });
}

