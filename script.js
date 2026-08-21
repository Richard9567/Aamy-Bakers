function toggleMenu() {
  document.getElementById("nav").classList.toggle("open");
}

function order(product) {
  const phone = "91XXXXXXXXXX"; // Replace with your WhatsApp number
  const message = `Hello Sweet Oven Bakery! I would like to order: ${product}`;
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
}
