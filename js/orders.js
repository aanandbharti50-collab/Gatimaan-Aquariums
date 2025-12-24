// js/orders.js

const user = JSON.parse(localStorage.getItem("currentUser"));
if (!user) {
  window.location.href = "login.html";
}

const orders = JSON.parse(localStorage.getItem("orders")) || [];
const container = document.getElementById("ordersList");

// match by email or phone
const myOrders = orders.filter(o =>
  (user.email && o.email === user.email) ||
  (user.phone && o.phone === user.phone)
);

if (myOrders.length === 0) {
  container.innerHTML = "<p>You have not placed any orders yet.</p>";
} else {
  myOrders.reverse().forEach(order => {
    const div = document.createElement("div");
    div.style.border = "1px solid #ddd";
    div.style.padding = "15px";
    div.style.marginBottom = "15px";

    div.innerHTML = `
      <strong>Order ID:</strong> ${order.orderId}<br>
      <small>${new Date(order.date).toLocaleString()}</small>
      <pre style="white-space:pre-wrap;margin-top:10px">${order.message}</pre>
    `;

    container.appendChild(div);
  });
}

function handleLogout() {
  logout();
  window.location.href = "login.html";
}
