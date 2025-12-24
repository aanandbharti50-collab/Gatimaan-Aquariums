// js/auth.js

function getUsers() {
  return JSON.parse(localStorage.getItem("users")) || [];
}

function saveUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

// simple hash (basic security, upgradeable later)
function hashPassword(password) {
  return btoa(password);
}

function signup({ email, phone, password }) {
  const users = getUsers();

  if (!email && !phone) {
    alert("Email or phone is required");
    return false;
  }

  const exists = users.find(
    u => (email && u.email === email) || (phone && u.phone === phone)
  );

  if (exists) {
    alert("User already exists");
    return false;
  }

  const user = {
    id: "U-" + Date.now(),
    email: email || "",
    phone: phone || "",
    password: hashPassword(password),
    createdAt: new Date().toISOString()
  };

  users.push(user);
  saveUsers(users);

  localStorage.setItem("currentUser", JSON.stringify(user));
  return true;
}

function login({ identifier, password }) {
  const users = getUsers();
  const hashed = hashPassword(password);

  const user = users.find(
    u =>
      (u.email === identifier || u.phone === identifier) &&
      u.password === hashed
  );

  if (!user) {
    alert("Invalid credentials");
    return false;
  }

  localStorage.setItem("currentUser", JSON.stringify(user));
  return true;
}

function logout() {
  localStorage.removeItem("currentUser");
}
