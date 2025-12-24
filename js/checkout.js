
function placeOrder() {
  const cart = getCart();

  if (cart.length === 0) {
    alert("Cart is empty");
    return;
  }

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const address = document.getElementById("address").value.trim();

  if (!name || !phone || !address) {
    alert("Please fill all details");
    return;
  }

  const orderId = generateOrderId();

  let message = "🛒 *New Order*\n";
  message += `🆔 Order ID: *${orderId}*\n\n`;

  let total = 0;

  cart.forEach(item => {
    const product = PRODUCTS[item.id];
    if (!product) return;

    const qty = Number(item.qty);
    const price = Number(product.price);
    const lineTotal = qty * price;

    total += lineTotal;

    message += `• ${product.name} × ${qty} = ₹${lineTotal}\n`;
  });

  message += `\n*Total: ₹${total}*\n\n`;
  message += `👤 Name: ${name}\n`;
  message += `📞 Phone: ${phone}\n`;
  message += `📍 Address: ${address}`;

// ✅ SAVE ORDER SUMMARY FOR THANK YOU PAGE
const orderSummary = {
  orderId,
  items: cart.map(item => {
    const product = PRODUCTS[item.id];
    return {
      name: product ? product.name : "Unknown",
      qty: item.qty,
      price: product ? product.price : 0
    };
  }),
  total
};

sessionStorage.setItem(
  "orderSummary",
  JSON.stringify(orderSummary)
);

  // 🚀 Redirect to success page
  window.location.href = "success.html";
}

function generateOrderId() {
  const date = new Date();
  const y = date.getFullYear().toString().slice(-2);
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  const t = Date.now().toString().slice(-5);

  return `GA-${y}${m}${d}-${t}`;
}
