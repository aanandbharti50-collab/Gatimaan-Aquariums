// js/cart.js

function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(productId, qty = 1) {
  const cart = getCart();
  const existing = cart.find(item => item.id === productId);

  if (existing) {
    existing.qty += qty;
 } else {
  cart.push({ id: productId, qty });
}

  saveCart(cart);
  const msg = document.createElement("div");
msg.innerText = "✅ Product added to cart";
msg.style.position = "fixed";
msg.style.bottom = "20px";
msg.style.right = "20px";
msg.style.background = "#0f3d2e";
msg.style.color = "#fff";
msg.style.padding = "10px 16px";
msg.style.borderRadius = "6px";
msg.style.zIndex = "9999";
document.body.appendChild(msg);

setTimeout(() => msg.remove(), 2000);

}

function removeFromCart(productId) {
  const cart = getCart().filter(item => item.id !== productId);
  saveCart(cart);
}

function updateQty(productId, qty) {
  const cart = getCart();
  const item = cart.find(i => i.id === productId);
  if (item) item.qty = qty;
  saveCart(cart);
}

window.removeFromCart = removeFromCart;
window.updateQty = updateQty;
window.addToCart = addToCart;

function getCartCount() {
  const cart = getCart();
  return cart.reduce((sum, item) => sum + Number(item.qty), 0);
}

window.getCartCount = getCartCount;
