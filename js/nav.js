document.addEventListener("DOMContentLoaded", () => {
  fetch("partials/nav.html")
    .then(res => {
      if (!res.ok) throw new Error("Nav not found");
      return res.text();
    })
    .then(html => {
  document.body.insertAdjacentHTML("afterbegin", html);

  // 🔹 CART BADGE LOGIC (AFTER NAV IS INSERTED)
  const cartCountEl = document.getElementById("cartCount");

  if (cartCountEl && typeof getCartCount === "function") {
    const count = getCartCount();

    if (count > 0) {
      cartCountEl.innerText = `(${count})`;
      cartCountEl.style.display = "inline";
    } else {
      cartCountEl.style.display = "none";
    }
  }
})

    .catch(err => {
      console.error("NAV LOAD ERROR:", err);
    });
});
