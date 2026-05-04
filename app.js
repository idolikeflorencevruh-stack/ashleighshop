let cart = [];

function addToCart(item) {
  cart.push(item);
  alert(item + " added to cart 🛒");
}

function buyNow(item) {
  alert("Buying " + item + " 💳");
}

function viewCart() {
  alert(cart.length ? cart.join("\n") : "Cart is empty");
}

function toggleMenu() {
  let menu = document.getElementById("sideMenu");
  menu.style.left = menu.style.left === "0px" ? "-200px" : "0px";
}

function toggleAdmin() {
  let admin = document.getElementById("adminPanel");
  admin.style.display = admin.style.display === "block" ? "none" : "block";
}

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}